import { useEffect, useState } from "react";
import api from "../api";

export default function CaseCreate() {
  const [clients, setClients] = useState([]);

  // today date
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    api.get("/clients").then(res => setClients(res.data));
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    const f = e.target;

    await api.post("/cases", {
      client_id: f.client_id.value,
      invoice_number: f.invoice_number.value,
      invoice_amount: f.invoice_amount.value,
      invoice_date: today,         
      due_date: f.due_date.value,
    });

    alert("Case created successfully");
    f.reset();
  };

  return (
    <div className="card">
      <h2>Create Invoice Case</h2>

      <form onSubmit={submit}>
        {/* Client selection */}
        <label>Select Client</label>
        <select name="client_id" required>
          <option value="">-- Choose Client --</option>
          {clients.map(c => (
            <option key={c.id} value={c.id}>
              {c.client_name}
            </option>
          ))}
        </select>

        {/* Invoice Number */}
        <label>Invoice Number</label>
        <input
          name="invoice_number"
          placeholder="INV-001"
          required
        />

        {/* Invoice Amount */}
        <label>Invoice Amount</label>
        <input
          name="invoice_amount"
          type="number"
          placeholder="Amount in INR"
          required
        />

        {/* Invoice Date (Auto) */}
        <label>Invoice Date</label>
        <input
          type="date"
          value={today}
          disabled
        />

        {/* Due Date */}
        <label>Due Date</label>
        <input
          type="date"
          name="due_date"
          required
        />

        <button>Create Case</button>
      </form>
    </div>
  );
}
