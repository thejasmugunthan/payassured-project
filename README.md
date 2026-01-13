# 📊 PayAssured – Invoice Recovery Case Tracker

PayAssured – Invoice Recovery Case Tracker is a mini internal CRM application that simulates how PayAssured manages invoice recovery operations for Indian businesses.

The system allows internal teams to manage clients, track unpaid invoices, and monitor recovery progress from a single dashboard—similar to tools used by tele-calling, DRS, and legal operations teams in real-world organizations.

---

## 🎯 Project Objective

This project demonstrates:

- Understanding of real-world business requirements  
- Relational database design  
- Clean REST API development using FastAPI  
- Interactive frontend development using React  
- End-to-end full-stack integration  
- Writing maintainable, production-style code  
- Easy local setup for developers  

---

## 🧩 Features

### Client Management
- Add new clients with complete details  
- View all registered clients  
- Email enforced as unique  
- Strong API validation using Pydantic  

**Client Fields**
- Client Name  
- Company Name  
- City  
- Contact Person  
- Phone  
- Email  

---

### Invoice Recovery Case Management
- Create invoice recovery cases linked to clients  
- Track invoice and due dates  
- View all recovery cases in a table  
- Filter cases by status  
- View case details  
- Update recovery status and follow-up notes  

**Case Fields**
- Client (Foreign Key)  
- Invoice Number  
- Invoice Amount  
- Invoice Date  
- Due Date  
- Status (New, In Follow-up, Partially Paid, Closed)  
- Last Follow-up Notes  

---

### Dashboard Experience
- Central dashboard for all cases  
- Client name visible in case list  
- Status badges for quick identification  
- Clean and minimal UI for internal users  

---

## 🛠️ Tech Stack

### Frontend
- React (Node.js)
- Axios
- React Router
- Plain CSS

### Backend
- Python – FastAPI
- SQLAlchemy ORM
- Pydantic
- RESTful APIs

### Database
- MySQL
- Foreign key relationships
- Data integrity constraints

---

## 📁 Project Structure

PayAssured/
│
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ │ ├── ClientCreate.js
│ │ │ ├── CaseCreate.js
│ │ │ ├── CaseList.js
│ │ │ └── CaseDetail.js
│ │ ├── api.js
│ │ ├── styles.css
│ │ └── App.js
│
├── backend/
│ ├── app.py
│ ├── models.py
│ ├── schemas.py
│ ├── database.py
│ └── .env.example
│
├── db/
│ └── schema.sql
│
├── screenshots/
│ ├── case-list.png
│ ├── case-detail.png
│ └── case-create.png
│
└── README.md


---

## ⚙️ Setup Instructions

1️⃣ Clone the Repository
    git clone <your-repository-url>
    cd PayAssured

2️⃣ Database Setup (MySQL)
    Create database:
    CREATE DATABASE payassured;
    Run schema:
    mysql -u root -p payassured < db/schema.sql

3️⃣ Backend Setup (FastAPI)
    cd backend
    python -m venv venv
    venv\Scripts\activate
    pip install fastapi uvicorn sqlalchemy pymysql python-dotenv
    uvicorn app:app --reload
    Backend runs at:
    http://127.0.0.1:8000

4️⃣ Frontend Setup (React)
    cd frontend
    npm install
    npm start
    Frontend runs at:
    http://localhost:3000


🔗 API Endpoints

    Client APIs
    POST /clients – Create client

    GET /clients – List clients

    Case APIs
    POST /cases – Create case

    GET /cases – List cases

    GET /cases/{id} – Case detail

    PATCH /cases/{id} – Update status & notes

