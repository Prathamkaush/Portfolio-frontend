import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, AlertCircle, CheckCircle2 } from "lucide-react";

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
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-emerald-900/10 blur-[120px] rounded-[100%] pointer-events-none z-0"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-lg">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={submit} className="card p-8 md:p-10 relative overflow-hidden">
            {/* Ambient inner glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-600/20 blur-[60px] rounded-full pointer-events-none"></div>

            <div className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 text-left">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-300 ml-1">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full transition-all duration-300"
                  />
                </div>
                <div className="space-y-2 text-left">
                  <label htmlFor="email" className="text-sm font-medium text-zinc-300 ml-1">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-2 text-left">
                <label htmlFor="message" className="text-sm font-medium text-zinc-300 ml-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full h-36 resize-none transition-all duration-300"
                />
              </div>

              <div className="pt-2 text-center md:text-left">
                <button 
                  type="submit" 
                  disabled={status === "sending" || status === "sent"}
                  className={`btn-primary w-full md:w-auto inline-flex items-center justify-center gap-2 ${
                    status === "sent" ? "opacity-80 cursor-not-allowed bg-emerald-600/50 hover:transform-none hover:shadow-none" : ""
                  }`}
                >
                  {status === "sending" ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </>
                  ) : status === "sent" ? (
                    <>
                      <CheckCircle2 size={18} /> Message Sent
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-1" /> Send Message
                    </>
                  )}
                </button>
              </div>

              {/* Status Messages */}
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: status && status !== "sending" ? 1 : 0, 
                  height: status && status !== "sending" ? "auto" : 0 
                }}
                className="overflow-hidden"
              >
                {status === "sent" && (
                  <div className="mt-4 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-start gap-3 text-left shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                    <CheckCircle2 size={20} className="shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Thank you!</p>
                      <p className="text-sm opacity-90 mt-1">Your message has been received. I'll get back to you soon.</p>
                    </div>
                  </div>
                )}
                {status === "error" && (
                  <div className="mt-4 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 flex items-start gap-3 text-left shadow-[0_0_15px_rgba(239,68,68,0.1)]">
                    <AlertCircle size={20} className="shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Failed to send message</p>
                      {errorDetail && <p className="text-sm opacity-90 mt-1">{errorDetail}</p>}
                    </div>
                  </div>
                )}
                {status && status !== "sent" && status !== "error" && status !== "sending" && (
                  <div className="mt-4 p-4 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-start gap-3 text-left">
                    <AlertCircle size={20} className="shrink-0 mt-0.5" />
                    <p className="text-sm font-medium">{status}</p>
                  </div>
                )}
              </motion.div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
