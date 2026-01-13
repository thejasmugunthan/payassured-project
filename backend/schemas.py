from pydantic import BaseModel, EmailStr
from datetime import date
from typing import Optional

#git remote add originCLIENT SCHEMAS

class ClientCreate(BaseModel):
    client_name: str
    company_name: str
    city: str
    contact_person: str
    phone: str
    email: EmailStr


class ClientOut(ClientCreate):
    id: int

    class Config:
        from_attributes = True


#CASE SCHEMAS

class CaseCreate(BaseModel):
    client_id: int
    invoice_number: str
    invoice_amount: float
    invoice_date: date
    due_date: date


class CaseUpdate(BaseModel):
    status: Optional[str] = None
    last_follow_up_notes: Optional[str] = None


class CaseOut(BaseModel):
    id: int
    client_id: int
    client_name: str
    invoice_number: str
    invoice_amount: float
    invoice_date: date
    due_date: date
    status: str
    last_follow_up_notes: Optional[str]

    class Config:
        from_attributes = True
