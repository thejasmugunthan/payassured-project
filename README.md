📊 PayAssured – Invoice Recovery Case Tracker

This project is a mini internal CRM built to simulate how PayAssured manages invoice recovery operations for Indian businesses.
It allows internal teams to manage clients, track unpaid invoices, and monitor recovery progress from a single dashboard.

The application reflects the kind of real-world internal tools used by PayAssured’s tele-calling, DRS, and legal operations teams.

🎯 Purpose of the Project

The goal of this assignment is to demonstrate:

Understanding of real business requirements

Ability to design a relational database

Clean API design using Python (FastAPI)

Building an interactive frontend using Node.js (React)

End-to-end full-stack integration

Writing maintainable, production-style code

Making the project easy for another developer to run locally

🧩 Features Implemented
1️⃣ Client Management

Add new clients with complete details

View all registered clients

Email is enforced as unique

Clean API validation using Pydantic

Client Fields

Client Name

Company Name

City

Contact Person

Phone

Email

2️⃣ Invoice Recovery Case Management

Create invoice recovery cases linked to a client

Automatically track invoice and due dates

View all recovery cases in a tabular format

Filter cases by status

View case details

Update recovery status and follow-up notes

Case Fields

Client (linked via foreign key)

Invoice Number

Invoice Amount

Invoice Date

Due Date

Status (New, In Follow-up, Partially Paid, Closed)

Last Follow-up Notes

3️⃣ Dashboard Experience

Single dashboard to view all cases

Client name visible in case list

Status badges for quick visual understanding

Clean and minimal UI for internal usage

🛠️ Tech Stack
Frontend

React (Node.js)
Axios for API communication
React Router for navigation
Plain CSS for clean UI styling

Backend
Python – FastAPI
SQLAlchemy ORM
Pydantic for validation
RESTful API design
Database
MySQL
Proper foreign key relationships
Constraints for data integrity

📁 Project Structure
PayAssured/
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── ClientCreate.js
│   │   │   ├── CaseCreate.js
│   │   │   ├── CaseList.js
│   │   │   └── CaseDetail.js
│   │   ├── api.js
│   │   ├── styles.css
│   │   └── App.js
│
├── backend/
│   ├── app.py
│   ├── models.py
│   ├── schemas.py
│   ├── database.py
│   └── .env.example
│
├── db/
│   └── schema.sql
│
├── screenshots/
│   ├── case-list.png
│   ├── case-detail.png
│   └── case-create.png
│
└── README.md


⚙️ Setup Instructions

1️⃣ Clone the Repository
git clone <your-repo-url>
cd PayAssured

2️⃣ Database Setup (MySQL)

Create the database:

CREATE DATABASE payassured;


Run the schema file:

mysql -u root -p payassured < db/schema.sql

3️⃣ Backend Setup (FastAPI)

Navigate to backend folder:

cd backend


Create virtual environment:

python -m venv venv
venv\Scripts\activate


Install dependencies:

pip install fastapi uvicorn sqlalchemy pymysql python-dotenv


Create .env file:

DB_USER=root
DB_PASSWORD=your_mysql_password
DB_HOST=localhost
DB_NAME=payassured


Start backend server:

uvicorn app:app --reload


Backend runs at:

http://127.0.0.1:8000

4️⃣ Frontend Setup (React)

Navigate to frontend:

cd frontend


Install dependencies:

npm install


Start React app:

npm start


Frontend runs at:

http://localhost:3000

🔗 API Endpoints
Client APIs

POST /clients – Create client

GET /clients – List clients

Case APIs

POST /cases – Create case

GET /cases – List cases (with filters)

GET /cases/{id} – Case detail

PATCH /cases/{id} – Update status & notes

