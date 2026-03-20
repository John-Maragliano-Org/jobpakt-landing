"use client";

import { useState, type FormEvent } from "react";

export default function WaitlistForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    techs: "",
  });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", company: "", techs: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card-surface p-10 sm:p-12 text-center max-w-lg mx-auto">
        <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">
          You&apos;re in.
        </h3>
        <p className="text-brand-gray-400 leading-relaxed">
          We&apos;ll reach out within 24 hours to get you set up.
          Welcome to the Founding 25.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface p-8 sm:p-10 max-w-lg mx-auto">
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-brand-gray-400 mb-1.5">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-brand-gray-800 border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-brand-gray-500 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/50 transition-all"
              placeholder="John Smith"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brand-gray-400 mb-1.5">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-brand-gray-800 border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-brand-gray-500 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/50 transition-all"
              placeholder="john@company.com"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-brand-gray-400 mb-1.5">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-brand-gray-800 border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-brand-gray-500 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/50 transition-all"
              placeholder="(604) 555-1234"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-brand-gray-400 mb-1.5">
              Company Name
            </label>
            <input
              id="company"
              type="text"
              required
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full bg-brand-gray-800 border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-brand-gray-500 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/50 transition-all"
              placeholder="Smith's HVAC"
            />
          </div>
        </div>
        <div>
          <label htmlFor="techs" className="block text-sm font-medium text-brand-gray-400 mb-1.5">
            Team Size
          </label>
          <select
            id="techs"
            required
            value={formData.techs}
            onChange={(e) => setFormData({ ...formData, techs: e.target.value })}
            className="w-full bg-brand-gray-800 border border-white/[0.08] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/50 transition-all appearance-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239CA3AF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 16px center",
            }}
          >
            <option value="" className="bg-brand-gray-800">
              Select team size
            </option>
            <option value="1-3" className="bg-brand-gray-800">1–3 techs</option>
            <option value="4-15" className="bg-brand-gray-800">4–15 techs</option>
            <option value="15-30" className="bg-brand-gray-800">15–30 techs</option>
            <option value="30+" className="bg-brand-gray-800">30+ techs</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full mt-6 bg-brand-orange hover:bg-brand-orange-light disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-lg py-4 rounded-xl transition-all duration-200 shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/30 hover:scale-[1.01] active:scale-[0.99]"
      >
        {status === "loading" ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Securing your spot...
          </span>
        ) : (
          "Lock In 40% Off For Life →"
        )}
      </button>

      {status === "error" && (
        <p className="text-red-400 text-sm text-center mt-3">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
