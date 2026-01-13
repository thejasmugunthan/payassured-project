import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

export default function CaseList() {
  const [cases, setCases] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    api.get("/cases", { params: { status } })
      .then(res => setCases(res.data));
  }, [status]);

  return (
    <>
      <h2>Invoice Recovery Cases</h2>

      <select onChange={e => setStatus(e.target.value)}>
        <option value="">All Status</option>
        <option>New</option>
        <option>In Follow-up</option>
        <option>Partially Paid</option>
        <option>Closed</option>
      </select>

      <table>
        <thead>
          <tr>
            <th>Client</th>
            <th>Invoice</th>
            <th>Amount</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {cases.map(c => (
            <tr key={c.id}>
              <td>{c.client_name}</td>
              <td>
                <Link to={`/cases/${c.id}`}>{c.invoice_number}</Link>
              </td>
              <td>₹{c.invoice_amount}</td>
              <td>{c.due_date}</td>
              <td>
                <span className={`badge ${c.status.split(" ")[0]}`}>
                  {c.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
