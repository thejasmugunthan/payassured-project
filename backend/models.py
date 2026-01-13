from sqlalchemy import Column, Integer, String, Float, Date, ForeignKey
from sqlalchemy.orm import relationship
from database import Base

class Client(Base):
    __tablename__ = "clients"

    id = Column(Integer, primary_key=True, index=True)
    client_name = Column(String(100), nullable=False)
    company_name = Column(String(100))
    city = Column(String(50))
    contact_person = Column(String(100))
    phone = Column(String(20))
    email = Column(String(100), unique=True)

    cases = relationship("Case", back_populates="client")


class Case(Base):
    __tablename__ = "cases"

    id = Column(Integer, primary_key=True, index=True)
    client_id = Column(Integer, ForeignKey("clients.id"), nullable=False)

    invoice_number = Column(String(50), nullable=False)
    invoice_amount = Column(Float, nullable=False)
    invoice_date = Column(Date)
    due_date = Column(Date)
    status = Column(String(30), default="New")
    last_follow_up_notes = Column(String(255))

    client = relationship("Client", back_populates="cases")
