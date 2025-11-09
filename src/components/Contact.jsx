import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const submit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill all fields");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("https://portfolio-backend-gpdk.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 text-center fade-in">
      <h2 className="text-4xl font-semibold mb-6 text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.6)]">
        Contact Me
      </h2>

      <form
        onSubmit={submit}
        className="max-w-xl glass p-6 rounded-xl mx-auto border border-cyan-500/20 shadow-[0_0_20px_rgba(0,255,255,0.1)]"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full mb-3 p-3 rounded-md bg-transparent border border-cyan-400/40 text-cyan-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full mb-3 p-3 rounded-md bg-transparent border border-cyan-400/40 text-cyan-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full mb-3 p-3 rounded-md bg-transparent border border-cyan-400/40 text-cyan-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 h-32 resize-none"
        />

        <button
          type="submit"
          className="px-6 py-3 bg-cyan-500/20 text-cyan-100 font-medium rounded-md border border-cyan-400/50 hover:bg-cyan-400/30 hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] transition-all duration-300"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "sent" && (
          <p className="mt-3 text-green-400">✅ Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="mt-3 text-red-400">
            ❌ Failed to send message. Please try again later.
          </p>
        )}
        {status &&
          status !== "sent" &&
          status !== "error" &&
          status !== "sending" && (
            <p className="mt-3 text-yellow-400">{status}</p>
          )}
      </form>
    </section>
  );
}
