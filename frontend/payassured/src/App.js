import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ClientCreate from "./pages/ClientCreate";
import CaseCreate from "./pages/CaseCreate";
import CaseList from "./pages/CaseList";
import CaseDetail from "./pages/CaseDetail";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <h1>PayAssured</h1>
        <div>
          <Link to="/">Cases</Link>
          <Link to="/clients/new">Add Client</Link>
          <Link to="/cases/new">Add Case</Link>
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<CaseList />} />
          <Route path="/clients/new" element={<ClientCreate />} />
          <Route path="/cases/new" element={<CaseCreate />} />
          <Route path="/cases/:id" element={<CaseDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
