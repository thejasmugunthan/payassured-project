import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

export default function CaseDetail() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    api.get(`/cases/${id}`).then(res => setData(res.data));
  }, [id]);

  const update = async () => {
    await api.patch(`/cases/${id}`, {
      status: data.status,
      last_follow_up_notes: data.last_follow_up_notes,
    });
    alert("Updated");
  };

  return (
    <div className="card">
      <h2>Case Details</h2>

      <p><b>Invoice:</b> {data.invoice_number}</p>
      <p><b>Amount:</b> ₹{data.invoice_amount}</p>
      <p><b>Due:</b> {data.due_date}</p>

      <select
        value={data.status || ""}
        onChange={e => setData({ ...data, status: e.target.value })}
      >
        <option>New</option>
        <option>In Follow-up</option>
        <option>Partially Paid</option>
        <option>Closed</option>
      </select>

      <textarea
        placeholder="Follow-up notes"
        value={data.last_follow_up_notes || ""}
        onChange={e =>
          setData({ ...data, last_follow_up_notes: e.target.value })
        }
      />

      <button onClick={update}>Update Case</button>
    </div>
  );
}
