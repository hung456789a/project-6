import React, { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({ name: "", phone: "", time: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setMessage(data.message || "Đặt lịch thất bại");
  };

  return (
    <div className="App">
      <h1>Đặt Lịch Khám</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Họ tên" onChange={handleChange} required />
        <input name="phone" placeholder="Số điện thoại" onChange={handleChange} required />
        <input name="time" type="datetime-local" onChange={handleChange} required />
        <button type="submit">Gửi</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
