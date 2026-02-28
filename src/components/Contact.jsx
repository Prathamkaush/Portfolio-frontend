import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [errorDetail, setErrorDetail] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill all fields");
      return;
    }
    setStatus("sending");
    setErrorDetail(null);
    const apiUrl = import.meta.env.VITE_CONTACT_API_URL || "https://portfolio-backend-gpdk.onrender.com/api/contact";
    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        const data = await res.json().catch(() => ({}));
        const msg = data?.error || data?.details || `Error ${res.status}`;
        setErrorDetail(typeof msg === "string" ? msg : JSON.stringify(msg));
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setErrorDetail(error.message || "Network error. Check CORS if on localhost.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16">
      <h2 className="section-heading text-center text-2xl md:text-3xl mb-6">
        Contact Me
      </h2>
      <form onSubmit={submit} className="max-w-xl card p-6 mx-auto">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full mb-3"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full mb-3"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full mb-4 h-28 resize-none"
        />
        <button type="submit" className="btn-primary w-full sm:w-auto">
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
        {status === "sent" && <p className="mt-3 text-emerald-400 text-sm">Message sent successfully.</p>}
        {status === "error" && (
          <p className="mt-3 text-red-400 text-sm">
            Failed to send. {errorDetail && <span className="block mt-1 opacity-90">{errorDetail}</span>}
          </p>
        )}
        {status && status !== "sent" && status !== "error" && status !== "sending" && (
          <p className="mt-3 text-amber-400/90 text-sm">{status}</p>
        )}
      </form>
    </section>
  );
}
