import React, { useState } from "react";

// Simple, clean React single-file landing page for Hotel Shree Balaji
// Tailwind CSS utility classes are assumed to be available.
// No 3D, no Framer Motion, no Spline. Clean, accessible, responsive layout.

export default function HotelShreeBalajiSimple() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const rooms = [
    { id: 1, title: "Deluxe Room", price: "₹2,499 / night", desc: "City view, king bed, modern comforts.", img: "/images/room-deluxe.jpg" },
    { id: 2, title: "Executive Suite", price: "₹3,999 / night", desc: "Spacious suite with seating area.", img: "/images/room-suite.jpg" },
    { id: 3, title: "Heritage Room", price: "₹1,899 / night", desc: "Cozy, traditional decor, budget friendly.", img: "/images/room-heritage.jpg" },
  ];

  const amenities = [
    "Complimentary Breakfast",
    "Free Wi‑Fi",
    "24/7 Reception",
    "Daily Housekeeping",
    "Room Service",
    "Airport Pickup (on request)",
  ];

  const places = [
    { name: "Kaal Bhairav Temple", note: "Walking distance — major USP" },
    { name: "Dashashwamedh Ghat", note: "Evening aarti & boat rides" },
    { name: "Varanasi Ghats", note: "Riverside heritage walks" },
    { name: "Tulsi Manas Temple", note: "Historic temple & cultural spot" },
  ];

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Placeholder: integrate your booking/contact endpoint here.
    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-[#fffaf2] to-white text-[#081029]">
      {/* HEADER / NAV */}
      <header className="w-full border-b bg-white/60 backdrop-blur sticky top-0 z-30">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-md bg-amber-500 flex items-center justify-center shadow-inner">
              <span className="font-bold text-white">SB</span>
            </div>
            <div>
              <div className="font-semibold text-lg">Hotel Shree Balaji</div>
              <div className="text-xs text-gray-500">Inspired by Lord Tirupati Balaji</div>
            </div>
          </div>

          <nav>
            <ul className="flex items-center gap-6 text-sm">
              <li><a href="#rooms" className="hover:underline">Rooms</a></li>
              <li><a href="#amenities" className="hover:underline">Amenities</a></li>
              <li><a href="#places" className="hover:underline">Visit</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-[url('/images/hotel-hero.jpg')] bg-cover bg-center h-72 flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-12 bg-white/70 rounded-lg">
          <h1 className="text-3xl md:text-4xl font-extrabold">Hotel Shree Balaji</h1>
          <p className="mt-2 text-sm text-gray-700 max-w-xl">Steps from Kaal Bhairav Temple — comfortable stays, complimentary breakfast & free Wi‑Fi. A warm heritage welcome in Varanasi.</p>
          <div className="mt-4 flex gap-3">
            <a href="#rooms" className="px-4 py-2 bg-amber-500 text-white rounded">View Rooms</a>
            <a href="#contact" className="px-4 py-2 border border-amber-500 text-amber-600 rounded">Contact & Book</a>
          </div>
        </div>
      </section>

      {/* ROOMS */}
      <main className="flex-1">
        <section id="rooms" className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold">Rooms & Suites</h2>
          <p className="mt-1 text-sm text-gray-600">Three thoughtfully designed categories to suit every traveller.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {rooms.map((r) => (
              <article key={r.id} className="border rounded-lg overflow-hidden bg-white">
                <img src={r.img} alt={r.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold">{r.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{r.desc}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="font-bold text-amber-600">{r.price}</div>
                    <div className="flex gap-2">
                      <a href="#contact" className="px-3 py-1 rounded border text-sm">Enquire</a>
                      <a href="#contact" className="px-3 py-1 rounded bg-amber-500 text-white text-sm">Book</a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* AMENITIES */}
        <section id="amenities" className="max-w-6xl mx-auto px-6 py-12 bg-white">
          <h2 className="text-2xl font-bold">Amenities</h2>
          <p className="mt-1 text-sm text-gray-600">Comfort-forward services included with your stay.</p>

          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {amenities.map((a) => (
              <li key={a} className="p-4 border rounded-lg bg-[#fffaf2]">
                <div className="font-semibold">{a}</div>
                {a === 'Complimentary Breakfast' && <div className="text-xs text-gray-600 mt-1">Indian & continental options available</div>}
              </li>
            ))}
          </ul>
        </section>

        {/* PLACES TO VISIT */}
        <section id="places" className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold">Explore Varanasi</h2>
          <p className="mt-1 text-sm text-gray-600">Nearby attractions and pilgrimage sites — perfect for first-time visitors.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              {places.map((p) => (
                <div key={p.name} className="p-4 border rounded-lg bg-white">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-semibold">{p.name}</div>
                      <div className="text-xs text-gray-600">{p.note}</div>
                    </div>
                    <div className="text-sm text-amber-600">{p.name === 'Kaal Bhairav Temple' ? 'Walking distance' : ''}</div>
                  </div>
                </div>
              ))}
            </div>

            <aside className="p-4 border rounded-lg bg-white">
              <h4 className="font-semibold">Quick Tips</h4>
              <ul className="mt-2 text-sm text-gray-600 space-y-2">
                <li>Respect local customs near ghats & temples.</li>
                <li>Best visiting months: October — March.</li>
                <li>Evening aarti at Dashashwamedh Ghat is a must-see.</li>
              </ul>
            </aside>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-6 py-10">
          <div className="p-6 bg-amber-50 rounded-lg border flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold">Ready to reserve?</h3>
              <p className="text-sm text-gray-600">Reach out and we’ll confirm availability and rates.</p>
            </div>
            <a href="#contact" className="px-4 py-2 bg-amber-500 text-white rounded">Contact & Book</a>
          </div>
        </section>
      </main>

      {/* CONTACT / FOOTER - fixed bottom */}
      <footer id="contact" className="w-full bg-white border-t sticky bottom-0">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="font-semibold">Hotel Shree Balaji</div>
            <div className="text-sm text-gray-600">
              A-12, Near Kaal Bhairav Temple, Varanasi, Uttar Pradesh
n              <br />Phone: +91 98XXXXXXXX | Email: info@shreebalaji.example
            </div>
          </div>

          <div className="w-full md:w-1/3">
            {sent ? (
              <div className="p-4 bg-emerald-50 rounded text-sm text-emerald-700">Thanks — your message was sent. We'll contact you soon.</div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-2">
                <div className="flex gap-2">
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="flex-1 px-3 py-2 border rounded" required />
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="w-36 px-3 py-2 border rounded" />
                </div>
                <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="px-3 py-2 border rounded" />
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message / Check-in date" className="px-3 py-2 border rounded" rows={2} />
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">We reply within 24 hours.</div>
                  <button type="submit" className="px-4 py-2 bg-amber-500 text-white rounded">Send Enquiry</button>
                </div>
              </form>
            )}
          </div>

          <div className="text-center text-xs text-gray-500 w-full md:w-auto">© {new Date().getFullYear()} Hotel Shree Balaji — All rights reserved</div>
        </div>
      </footer>
    </div>
  );
}
