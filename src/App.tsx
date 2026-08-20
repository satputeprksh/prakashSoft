import { useState } from "react";
import Logo from "./components/Logo";
import { BIZ, SERVICES, DEALS, WHY, BRANDS, TESTIMONIALS, FAQS } from "./data";

const NAV = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "why", label: "Why Us" },
  { id: "reviews", label: "Reviews" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

const wa = (phone: string, msg = "Hello Prakash Soft, I need help with ") =>
  `https://wa.me/91${phone}?text=${encodeURIComponent(msg)}`;

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-24 px-5 ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}

function Heading({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <div className="text-center mb-12">
      <span className="inline-block text-orange-500 text-xs font-bold tracking-[0.25em] mb-3">
        {kicker}
      </span>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white">{title}</h2>
      {sub && <p className="text-slate-400 mt-3 max-w-2xl mx-auto">{sub}</p>}
      <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-orange-600 to-amber-400" />
    </div>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);
  const [faq, setFaq] = useState<number | null>(0);
  const [form, setForm] = useState({ name: "", phone: "", service: SERVICES[0].title, msg: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Prakash Soft!%0AName: ${form.name}%0APhone: ${form.phone}%0AService: ${form.service}%0AMessage: ${form.msg}`;
    window.open(`https://wa.me/91${BIZ.contacts[0].phone}?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#0a0c10] text-slate-200 overflow-x-hidden">
      {/* ---------- HEADER ---------- */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-[#0a0c10]/85 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-5 h-[70px] flex items-center justify-between">
          <a href="#home">
            <Logo className="h-10" />
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="text-slate-300 hover:text-orange-500 transition">
                {n.label}
              </a>
            ))}
            <a
              href={`tel:+91${BIZ.contacts[0].phone}`}
              className="rounded-full bg-gradient-to-r from-orange-600 to-amber-500 px-5 py-2.5 font-bold text-white hover:opacity-90 transition"
            >
              📞 Call Now
            </a>
          </nav>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 grid place-items-center rounded-lg border border-white/15 text-orange-500"
            aria-label="Menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-white/10 bg-[#0a0c10] px-5 py-4 space-y-3">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="block text-slate-300 hover:text-orange-500"
              >
                {n.label}
              </a>
            ))}
            <a
              href={`tel:+91${BIZ.contacts[0].phone}`}
              className="block text-center rounded-full bg-orange-600 py-2.5 font-bold text-white"
            >
              📞 {BIZ.contacts[0].phone}
            </a>
          </div>
        )}
      </header>

      {/* ---------- HERO ---------- */}
      <section id="home" className="relative pt-32 pb-20 px-5 grid-bg overflow-hidden">
        <div className="absolute -top-32 -right-24 w-[420px] h-[420px] bg-orange-600/25 blur-[130px] rounded-full" />
        <div className="absolute bottom-0 -left-32 w-[380px] h-[380px] bg-amber-500/15 blur-[130px] rounded-full" />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold text-orange-400">
              ● Nagpur's Trusted Computer & CCTV Shop
            </span>
            <h1 className="mt-6 text-4xl sm:text-6xl font-black leading-[1.05] text-white">
              Laptop Repair,
              <br />
              Refurbished Laptops
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
                & CCTV Solutions
              </span>
            </h1>
            <p className="mt-6 text-slate-400 text-lg max-w-lg">
              Genuine parts, honest advice and transparent pricing. From chip-level laptop
              repairing to complete CCTV installation — Prakash Soft handles it all.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={wa(BIZ.contacts[0].phone, "Hello Prakash Soft, I want to enquire about ")}
                target="_blank"
                className="rounded-full bg-gradient-to-r from-orange-600 to-amber-500 px-7 py-3.5 font-bold text-white glow hover:scale-[1.03] transition"
              >
                WhatsApp Enquiry
              </a>
              <a
                href="#services"
                className="rounded-full border border-white/20 px-7 py-3.5 font-bold text-white hover:bg-white/10 transition"
              >
                View Services
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                ["1500+", "Devices Repaired"],
                ["300+", "CCTV Setups"],
                ["100%", "Trusted Service"],
              ].map(([a, b]) => (
                <div key={b} className="card rounded-xl p-3 text-center">
                  <div className="text-xl sm:text-2xl font-extrabold text-orange-500">{a}</div>
                  <div className="text-[11px] text-slate-400 mt-1">{b}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/30 to-transparent blur-2xl rounded-[2rem]" />
            <img
              src="https://images.pexels.com/photos/7286026/pexels-photo-7286026.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
              alt="Laptop repair workbench"
              className="relative rounded-[1.5rem] border border-white/15 shadow-2xl object-cover w-full h-[300px] sm:h-[400px]"
            />
            <div className="relative sm:absolute -bottom-6 -left-2 mt-4 sm:mt-0 card rounded-2xl px-5 py-4 flex items-center gap-3">
              <div className="text-3xl">🛡️</div>
              <div>
                <div className="font-bold text-white text-sm">Warranty Assured</div>
                <div className="text-xs text-slate-400">Free diagnosis · Genuine parts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- MARQUEE ---------- */}
      <div className="border-y border-white/10 bg-white/[0.03] py-4 overflow-hidden">
        <div className="marquee flex gap-10 w-max whitespace-nowrap">
          {[...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS].map((b, i) => (
            <span key={i} className="text-slate-500 font-bold tracking-widest text-lg">
              {b}
            </span>
          ))}
        </div>
      </div>

      {/* ---------- SERVICES ---------- */}
      <Section id="services">
        <Heading
          kicker="WHAT WE DO"
          title="Our Services"
          sub="Complete computer & security solutions under one roof."
        />
        <div className="grid sm:grid-cols-2 gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="card rounded-2xl overflow-hidden group hover:border-orange-500/50 transition"
            >
              <div className="h-44 overflow-hidden relative">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-[#0a0c10]/30 to-transparent" />
                <div className="absolute bottom-3 left-4 text-3xl">{s.icon}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{s.title}</h3>
                <p className="text-slate-400 text-sm mt-2">{s.desc}</p>
                <ul className="mt-4 space-y-1.5">
                  {s.points.map((p) => (
                    <li key={p} className="text-sm text-slate-300 flex gap-2">
                      <span className="text-orange-500">✔</span> {p}
                    </li>
                  ))}
                </ul>
                <a
                  href={wa(BIZ.contacts[0].phone, `Hello Prakash Soft, I need: ${s.title} — `)}
                  target="_blank"
                  className="mt-5 inline-block text-sm font-bold text-orange-500 hover:text-amber-400"
                >
                  Get a quote →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* WE DEAL IN */}
        <div className="mt-14 card rounded-2xl p-7 sm:p-10">
          <h3 className="text-2xl font-extrabold text-white mb-6">
            We Also <span className="text-orange-500">Deal In</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
            {DEALS.map((d) => (
              <div key={d} className="flex gap-3 items-start text-slate-300 text-sm">
                <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-orange-500/20 text-orange-500 grid place-items-center text-[11px]">
                  ✓
                </span>
                {d}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ---------- WHY US ---------- */}
      <Section id="why" className="bg-white/[0.02] border-y border-white/10">
        <Heading
          kicker="WHY CHOOSE US"
          title="Reliable Service. Trusted Quality."
          sub="Honest advice, transparent pricing and a customer-first approach — every single time."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY.map((w) => (
            <div
              key={w.title}
              className="card rounded-2xl p-6 hover:-translate-y-1 hover:border-orange-500/50 transition"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-600 to-amber-500 grid place-items-center text-xl font-bold text-white">
                {w.icon}
              </div>
              <h3 className="mt-4 font-bold text-white">{w.title}</h3>
              <p className="text-sm text-slate-400 mt-1.5">{w.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------- REVIEWS ---------- */}
      <Section id="reviews">
        <Heading kicker="TESTIMONIALS" title="What Our Customers Say" />
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="card rounded-2xl p-6">
              <div className="text-amber-400 text-lg">★★★★★</div>
              <p className="text-slate-300 text-sm mt-3 leading-relaxed">“{t.text}”</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-600 to-amber-500 grid place-items-center font-bold text-white">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------- FAQ ---------- */}
      <Section id="faq" className="bg-white/[0.02] border-y border-white/10">
        <Heading kicker="FAQ" title="Frequently Asked Questions" />
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((f, i) => (
            <div key={f.q} className="card rounded-xl overflow-hidden">
              <button
                onClick={() => setFaq(faq === i ? null : i)}
                className="w-full flex justify-between items-center gap-4 text-left px-5 py-4 font-semibold text-white"
              >
                {f.q}
                <span className="text-orange-500 text-xl shrink-0">{faq === i ? "−" : "+"}</span>
              </button>
              {faq === i && (
                <p className="px-5 pb-5 -mt-1 text-sm text-slate-400 leading-relaxed">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ---------- CONTACT ---------- */}
      <Section id="contact">
        <Heading
          kicker="GET IN TOUCH"
          title="Contact Prakash Soft"
          sub="Call, WhatsApp or visit our shop — we're happy to help."
        />
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {BIZ.contacts.map((c) => (
              <div key={c.phone} className="card rounded-2xl p-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-orange-500/15 grid place-items-center text-orange-500 text-lg">
                    👤
                  </div>
                  <div>
                    <div className="text-white font-bold">{c.name}</div>
                    <a href={`tel:+91${c.phone}`} className="text-slate-400 text-sm hover:text-orange-500">
                      +91 {c.phone}
                    </a>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a
                    href={`tel:+91${c.phone}`}
                    className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/20"
                  >
                    Call
                  </a>
                  <a
                    href={wa(c.phone)}
                    target="_blank"
                    className="rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-500"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
            <div className="card rounded-2xl p-5">
              <div className="flex gap-3">
                <span className="text-orange-500 text-lg">📍</span>
                <div>
                  <div className="text-white font-bold">Shop Address</div>
                  <p className="text-slate-400 text-sm mt-1">{BIZ.address}</p>
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <span className="text-orange-500 text-lg">🕒</span>
                <div>
                  <div className="text-white font-bold">Working Hours</div>
                  <p className="text-slate-400 text-sm mt-1">{BIZ.hours}</p>
                </div>
              </div>
            </div>
            <iframe
              title="map"
              className="w-full h-56 rounded-2xl border border-white/10"
              loading="lazy"
              src={`https://www.google.com/maps?q=${encodeURIComponent(BIZ.mapQuery)}&output=embed`}
            />
          </div>

          <form onSubmit={submit} className="card rounded-2xl p-6 sm:p-8 space-y-4 h-fit">
            <h3 className="text-xl font-bold text-white">Send an Enquiry</h3>
            <p className="text-sm text-slate-400 -mt-2">
              Fill this and we'll open WhatsApp with your details.
            </p>
            <input
              required
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-sm outline-none focus:border-orange-500"
            />
            <input
              required
              placeholder="Mobile Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-sm outline-none focus:border-orange-500"
            />
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-sm outline-none focus:border-orange-500"
            >
              {SERVICES.map((s) => (
                <option key={s.title} className="bg-[#0a0c10]">
                  {s.title}
                </option>
              ))}
              <option className="bg-[#0a0c10]">Other / Accessories</option>
            </select>
            <textarea
              rows={4}
              placeholder="Describe your problem or requirement..."
              value={form.msg}
              onChange={(e) => setForm({ ...form, msg: e.target.value })}
              className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-sm outline-none focus:border-orange-500"
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 py-3.5 font-bold text-white hover:opacity-90 transition"
            >
              Send on WhatsApp
            </button>
          </form>
        </div>
      </Section>

      {/* ---------- FOOTER ---------- */}
      <footer className="border-t border-white/10 bg-white/[0.02] px-5 pt-12 pb-28 sm:pb-10">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-8">
          <div>
            <Logo className="h-12" />
            <p className="text-sm text-slate-400 mt-4 max-w-xs">
              Reliable service. Trusted quality. Complete satisfaction — for laptops, computers
              and CCTV in Nagpur.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {NAV.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className="hover:text-orange-500">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">Reach Us</h4>
            <p className="text-sm text-slate-400">{BIZ.address}</p>
            <p className="text-sm text-slate-400 mt-2">
              Prakash: +91 {BIZ.contacts[0].phone}
              <br />
              Ganesh: +91 {BIZ.contacts[1].phone}
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Prakash Soft · Your Trusted Tech Partner · Nagpur
        </div>
      </footer>

      {/* ---------- STICKY MOBILE CTA ---------- */}
      <div className="fixed bottom-0 inset-x-0 z-50 sm:hidden grid grid-cols-2 border-t border-white/10 bg-[#0a0c10]/95 backdrop-blur">
        <a
          href={`tel:+91${BIZ.contacts[0].phone}`}
          className="py-4 text-center font-bold text-white bg-gradient-to-r from-orange-600 to-amber-500"
        >
          📞 Call Now
        </a>
        <a href={wa(BIZ.contacts[0].phone)} target="_blank" className="py-4 text-center font-bold text-white bg-green-600">
          WhatsApp
        </a>
      </div>

      <a
        href={wa(BIZ.contacts[0].phone)}
        target="_blank"
        className="hidden sm:grid fixed bottom-6 right-6 z-50 w-14 h-14 place-items-center rounded-full bg-green-600 text-white text-2xl shadow-lg hover:scale-110 transition"
        aria-label="WhatsApp"
      >
        ✆
      </a>
    </div>
  );
}
