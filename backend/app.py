from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from datetime import date

import models, schemas
from database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="PayAssured Invoice Recovery API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

#DB DEP

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

#CLIENT APIs

@app.post("/clients", response_model=schemas.ClientOut, status_code=201)
def create_client(client: schemas.ClientCreate, db: Session = Depends(get_db)):
    obj = models.Client(**client.dict())
    db.add(obj)
    db.commit()
    db.refresh(obj)
    return obj


@app.get("/clients", response_model=list[schemas.ClientOut])
def list_clients(db: Session = Depends(get_db)):
    return db.query(models.Client).all()

#CASE APIs

@app.post("/cases", response_model=schemas.CaseOut, status_code=201)
def create_case(case: schemas.CaseCreate, db: Session = Depends(get_db)):
    client = db.query(models.Client).filter_by(id=case.client_id).first()
    if not client:
        raise HTTPException(status_code=400, detail="Invalid client")

    obj = models.Case(
        **case.dict(),
        status="New",
        last_follow_up_notes=""
    )

    db.add(obj)
    db.commit()
    db.refresh(obj)

    return schemas.CaseOut(
        id=obj.id,
        client_id=client.id,
        client_name=client.client_name,
        invoice_number=obj.invoice_number,
        invoice_amount=obj.invoice_amount,
        invoice_date=obj.invoice_date,
        due_date=obj.due_date,
        status=obj.status,
        last_follow_up_notes=obj.last_follow_up_notes,
    )


@app.get("/cases", response_model=list[schemas.CaseOut])
def list_cases(status: str | None = None, db: Session = Depends(get_db)):
    q = db.query(models.Case, models.Client).join(models.Client)

    if status:
        q = q.filter(models.Case.status == status)

    results = []
    for case, client in q.all():
        results.append(
            schemas.CaseOut(
                id=case.id,
                client_id=client.id,
                client_name=client.client_name,
                invoice_number=case.invoice_number,
                invoice_amount=case.invoice_amount,
                invoice_date=case.invoice_date,
                due_date=case.due_date,
                status=case.status,
                last_follow_up_notes=case.last_follow_up_notes,
            )
        )

    return results


@app.get("/cases/{case_id}", response_model=schemas.CaseOut)
def get_case(case_id: int, db: Session = Depends(get_db)):
    result = (
        db.query(models.Case, models.Client)
        .join(models.Client)
        .filter(models.Case.id == case_id)
        .first()
    )

    if not result:
        raise HTTPException(status_code=404, detail="Case not found")

    case, client = result

    return schemas.CaseOut(
        id=case.id,
        client_id=client.id,
        client_name=client.client_name,
        invoice_number=case.invoice_number,
        invoice_amount=case.invoice_amount,
        invoice_date=case.invoice_date,
        due_date=case.due_date,
        status=case.status,
        last_follow_up_notes=case.last_follow_up_notes,
    )
