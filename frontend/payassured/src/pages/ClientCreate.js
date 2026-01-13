import api from "../api";

export default function ClientCreate() {
  const submit = async (e) => {
    e.preventDefault();
    const f = e.target;

    await api.post("/clients", {
      client_name: f.client_name.value,
      company_name: f.company_name.value,
      city: f.city.value,
      contact_person: f.contact_person.value,
      phone: f.phone.value,
      email: f.email.value,
    });

    alert("Client added successfully");
    f.reset();
  };

  return (
    <div className="card">
      <h2>Add Client</h2>
      <form onSubmit={submit}>
        <input name="client_name" placeholder="Client Name" required />
        <input name="company_name" placeholder="Company Name" required />
        <input name="city" placeholder="City" />
        <input name="contact_person" placeholder="Contact Person" />
        <input name="phone" placeholder="Phone" />
        <input name="email" placeholder="Email" required />
        <button>Add Client</button>
      </form>
    </div>
  );
}
