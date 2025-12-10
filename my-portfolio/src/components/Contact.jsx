import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ sending: false, ok: null, msg: "" });

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const validate = () => {
    if (!form.email || !/^\S+@\S+\.\S+$/.test(form.email)) {
      setStatus({ sending: false, ok: false, msg: "Please enter a valid email." });
      return false;
    }
    if (!form.message || form.message.trim().length < 5) {
      setStatus({ sending: false, ok: false, msg: "Please enter a message (5+ chars)." });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ sending: true, ok: null, msg: "" });
    if (!validate()) return;

    try {
      const FORMSPREE_URL = "https://formspree.io/f/mblnzqwg";

      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (res.ok) {
        setStatus({ sending: false, ok: true, msg: "Message sent — thank you!" });
        setForm({ name: "", email: "", message: "" });
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus({
          sending: false,
          ok: false,
          msg: data.error || "Sending failed — please try again later.",
        });
      }
    } catch (err) {
      setStatus({ sending: false, ok: false, msg: "Network error — try again later." });
    }
  };

  return (
    <section id="contact" className="contact" style={{ padding: 20 }}>
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit} style={{ maxWidth: 600 }}>
        <label style={{ display: "block", marginBottom: 8 }}>
          Name
          <input
            name="name"
            value={form.name}
            onChange={update}
            placeholder="Your name"
            style={{ display: "block", width: "100%", padding: 8, marginTop: 6 }}
          />
        </label>

        <label style={{ display: "block", marginBottom: 8 }}>
          Email *
          <input
            name="email"
            value={form.email}
            onChange={update}
            placeholder="you@example.com"
            required
            style={{ display: "block", width: "100%", padding: 8, marginTop: 6 }}
            type="email"
          />
        </label>

        <label style={{ display: "block", marginBottom: 8 }}>
          Message *
          <textarea
            name="message"
            value={form.message}
            onChange={update}
            placeholder="Write your message..."
            required
            style={{ display: "block", width: "100%", padding: 8, marginTop: 6, minHeight: 120 }}
          />
        </label>

        <div style={{ marginTop: 12 }}>
          <button
            type="submit"
            disabled={status.sending}
            style={{ padding: "10px 16px", cursor: status.sending ? "default" : "pointer" }}
          >
            {status.sending ? "Sending…" : "Send Message"}
          </button>

          <span style={{ marginLeft: 12 }}>
            or <a href="mailto:magtech@example.com">email me directly</a>
          </span>
        </div>

        {status.ok === true && (
          <div role="status" style={{ marginTop: 12, color: "green" }}>
            {status.msg}
          </div>
        )}
        {status.ok === false && (
          <div role="alert" style={{ marginTop: 12, color: "crimson" }}>
            {status.msg}
          </div>
        )}
      </form>
    </section>
  );
}

export default Contact;