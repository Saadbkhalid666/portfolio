import React, { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Instagram, Mail, ArrowUpRight, X, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

/**
 * ─────────────────────────────────────────────────────────────
 *  EMAILJS CONFIG — fill these in before shipping
 * ─────────────────────────────────────────────────────────────
 *  1. Create a free account at https://www.emailjs.com
 *  2. Add an Email Service (e.g. Gmail) -> copy the SERVICE_ID
 *  3. Create an Email Template with variables:
 *       {{from_name}}  {{from_email}}  {{message}}
 *     -> copy the TEMPLATE_ID
 *  4. Account > General > copy your Public Key
 *  5. Paste all three below. No npm package needed — this uses
 *     EmailJS's REST endpoint directly via fetch().
 * ─────────────────────────────────────────────────────────────
 */
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/Saadbkhalid666", Icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/saad-bin-khalid", Icon: Linkedin },
  { label: "Instagram", href: "https://instagram.com/", Icon: Instagram },
  { label: "Email", href: "mailto:hello@saadbinkhalid.dev", Icon: Mail },
];

function useTerminalClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(
        d.toLocaleTimeString("en-GB", { hour12: false }) +
          " PKT"
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function CollaborateModal({ open, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
          },
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        background: "rgba(5,6,8,0.75)",
        backdropFilter: "blur(6px)",
      }}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Start a collaboration"
        style={{
          width: "100%",
          maxWidth: "480px",
          background: "#0A0B0D",
          border: "1px solid rgba(255,255,255,0.10)",
          boxShadow: "0 0 0 1px rgba(47,110,255,0.06), 0 24px 60px rgba(0,0,0,0.6)",
          fontFamily: "'JetBrains Mono','Fira Code',ui-monospace,monospace",
          animation: "fp-in 160ms ease-out",
        }}
      >
        {/* title bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 16px",
            borderBottom: "1px solid rgba(255,255,255,0.10)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#6B7280", fontSize: "12px" }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#2F6FFF", display: "inline-block", boxShadow: "0 0 8px #2F6FFF" }} />
            new_message.sh
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#9CA3AF",
              width: 26,
              height: 26,
              display: "grid",
              placeItems: "center",
              cursor: "pointer",
            }}
          >
            <X size={14} />
          </button>
        </div>

        <div style={{ padding: "20px" }}>
          <p style={{ color: "#4B7BFF", fontSize: "12px", letterSpacing: "0.06em", margin: "0 0 4px" }}>
            .CONNECT( )
          </p>
          <h3 style={{ color: "#F3F4F6", fontFamily: "'Space Grotesk','Inter',sans-serif", fontSize: "22px", fontWeight: 600, margin: "0 0 18px", letterSpacing: "-0.01em" }}>
            Let's build something worth shipping.
          </h3>

          {status === "sent" ? (
            <div style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "14px", border: "1px solid rgba(74,222,128,0.25)", background: "rgba(74,222,128,0.06)" }}>
              <CheckCircle2 size={18} color="#4ADE80" style={{ flexShrink: 0, marginTop: 1 }} />
              <div>
                <p style={{ color: "#E5E7EB", fontSize: "13px", margin: 0, fontFamily: "'Inter',sans-serif" }}>
                  Message sent. I'll get back to you shortly.
                </p>
                <button
                  onClick={onClose}
                  style={{ marginTop: 10, background: "transparent", border: "none", color: "#4B7BFF", fontSize: "12px", cursor: "pointer", padding: 0, fontFamily: "inherit" }}
                >
                  close ✕
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={submit}>
              <Field label="> name" value={form.name} onChange={update("name")} placeholder="Your name" />
              <Field label="> email" value={form.email} onChange={update("email")} placeholder="you@company.com" type="email" />
              <Field
                label="> message"
                value={form.message}
                onChange={update("message")}
                placeholder="Tell me about the project..."
                textarea
              />

              {status === "error" && (
                <div style={{ display: "flex", gap: 8, alignItems: "center", color: "#F87171", fontSize: "12px", marginBottom: "12px", fontFamily: "'Inter',sans-serif" }}>
                  <AlertCircle size={14} />
                  Something went wrong. Please try again, or email directly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  width: "100%",
                  marginTop: "4px",
                  padding: "12px 16px",
                  background: status === "sending" ? "rgba(47,110,255,0.4)" : "#2F6FFF",
                  border: "none",
                  color: "#0A0B0D",
                  fontWeight: 600,
                  fontSize: "13px",
                  letterSpacing: "0.02em",
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  fontFamily: "'Inter',sans-serif",
                  transition: "background 150ms ease",
                }}
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={14} className="fp-spin" /> sending...
                  </>
                ) : (
                  <>send_message()</>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({ label, textarea, ...props }) {
  const Comp = textarea ? "textarea" : "input";
  return (
    <label style={{ display: "block", marginBottom: "14px" }}>
      <span style={{ display: "block", fontSize: "11px", color: "#6B7280", marginBottom: "6px", letterSpacing: "0.03em" }}>
        {label}
      </span>
      <Comp
        required
        rows={textarea ? 4 : undefined}
        {...props}
        style={{
          width: "100%",
          background: "#0F1012",
          border: "1px solid rgba(255,255,255,0.12)",
          color: "#E5E7EB",
          padding: "10px 12px",
          fontSize: "13px",
          fontFamily: "'Inter',sans-serif",
          outline: "none",
          resize: textarea ? "vertical" : undefined,
          boxSizing: "border-box",
        }}
        onFocus={(e) => (e.target.style.borderColor = "#2F6FFF")}
        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
      />
    </label>
  );
}

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);
  const time = useTerminalClock();

  return (
    <footer
      style={{
        background: "#08090A",
        color: "#E5E7EB",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        fontFamily: "'Inter',sans-serif",
      }}
    >
      <style>{`
        @keyframes fp-in { from { opacity:0; transform: translateY(6px) scale(0.98); } to { opacity:1; transform: translateY(0) scale(1); } }
        @keyframes fp-spin { to { transform: rotate(360deg); } }
        .fp-spin { animation: fp-spin 0.8s linear infinite; }
        .fp-social:hover { background:#2F6FFF !important; border-color:#2F6FFF !important; }
        .fp-social:hover svg { color:#08090A !important; }
        .fp-cta:hover { background:#2F6FFF !important; color:#08090A !important; }
        .fp-cta:hover svg { color:#08090A !important; }
        .fp-link:hover { color:#F3F4F6 !important; }
      `}</style>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "96px 32px 40px" }}>
        {/* eyebrow */}
        <p
          style={{
            fontFamily: "'JetBrains Mono','Fira Code',ui-monospace,monospace",
            fontSize: "12px",
            letterSpacing: "0.08em",
            color: "#4B7BFF",
            margin: "0 0 20px",
          }}
        >
          06 — GET_IN_TOUCH
        </p>

        {/* big CTA row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "32px",
            paddingBottom: "56px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2
            style={{
              fontFamily: "'Space Grotesk','Inter',sans-serif",
              fontWeight: 600,
              fontSize: "clamp(28px, 5vw, 52px)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              margin: 0,
              maxWidth: "620px",
            }}
          >
            Let's build something
            <br />
            worth shipping.
          </h2>

          <button
            className="fp-cta"
            onClick={() => setModalOpen(true)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "16px 26px",
              background: "transparent",
              border: "1px solid #2F6FFF",
              color: "#2F6FFF",
              fontFamily: "'JetBrains Mono','Fira Code',ui-monospace,monospace",
              fontSize: "13px",
              letterSpacing: "0.03em",
              cursor: "pointer",
              transition: "all 150ms ease",
              whiteSpace: "nowrap",
            }}
          >
            Let's collaborate <ArrowUpRight size={16} />
          </button>
        </div>

        {/* nav + socials row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "32px",
            justifyContent: "space-between",
            padding: "36px 0",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <nav style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            {["ABOUT", "WORK", "CONNECT"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="fp-link"
                style={{
                  color: "#9CA3AF",
                  fontFamily: "'JetBrains Mono','Fira Code',ui-monospace,monospace",
                  fontSize: "13px",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                  transition: "color 150ms ease",
                }}
              >
                .{item}( )
              </a>
            ))}
          </nav>

          <div style={{ display: "flex", gap: "10px" }}>
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="fp-social"
                style={{
                  width: "38px",
                  height: "38px",
                  display: "grid",
                  placeItems: "center",
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "#9CA3AF",
                  transition: "all 150ms ease",
                }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* terminal status line */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "24px",
            fontFamily: "'JetBrains Mono','Fira Code',ui-monospace,monospace",
            fontSize: "12px",
            color: "#4B5563",
          }}
        >
          <p style={{ margin: 0 }}>
            saad@fullstack:~$ status --available
            <span style={{ color: "#4ADE80" }}> ● online</span>
          </p>
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} Saad Bin Khalid — {time}
          </p>
        </div>
      </div>

      <CollaborateModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </footer>
  );
}
