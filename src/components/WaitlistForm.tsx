"use client";

import { useState, type FormEvent } from "react";

export default function WaitlistForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
        setFormData({ name: "", email: "", company: "", techs: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-white mb-2">
          You&apos;re on the list.
        </h3>
        <p className="text-brand-gray-400">
          We&apos;ll be in touch soon with your founding member details.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-gray-400 mb-1">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-brand-gray-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-brand-gray-400 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-gray-400 mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-brand-gray-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-brand-gray-400 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
            placeholder="john@company.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-brand-gray-400 mb-1">
          Company Name
        </label>
        <input
          id="company"
          type="text"
          required
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="w-full bg-brand-gray-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-brand-gray-400 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
          placeholder="Smith's HVAC"
        />
      </div>
      <div>
        <label htmlFor="techs" className="block text-sm font-medium text-brand-gray-400 mb-1">
          Number of Techs
        </label>
        <select
          id="techs"
          required
          value={formData.techs}
          onChange={(e) => setFormData({ ...formData, techs: e.target.value })}
          className="w-full bg-brand-gray-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
        >
          <option value="" className="text-brand-gray-400">Select team size</option>
          <option value="1-3">1–3 techs</option>
          <option value="4-15">4–15 techs</option>
          <option value="15-30">15–30 techs</option>
          <option value="30+">30+ techs</option>
        </select>
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-brand-orange hover:bg-brand-orange-light disabled:opacity-50 text-white font-bold text-lg py-4 rounded-xl transition-all duration-200 shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/30"
      >
        {status === "loading" ? "Submitting..." : "Lock In 40% Off For Life →"}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-sm text-center">
          Something went wrong. Please try again.
        </p>
      )}
      <p className="text-brand-gray-400 text-xs text-center">
        No credit card required. We&apos;ll reach out personally to each founding member.
      </p>
    </form>
  );
}
