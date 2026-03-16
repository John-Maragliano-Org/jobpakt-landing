const steps = [
  {
    number: "01",
    title: "Missed call? We text back instantly.",
    description:
      "Within seconds of a missed call, your customer gets an automated text. No more lost leads sitting in voicemail.",
    icon: "📱",
  },
  {
    number: "02",
    title: "AI captures the lead and books the appointment.",
    description:
      "Our AI engages in a natural conversation, qualifies the lead, and books them directly into your calendar.",
    icon: "🤖",
  },
  {
    number: "03",
    title: "You show up. We handle the rest.",
    description:
      "Automated reminders, follow-ups, and review requests. You focus on the work — we handle the admin.",
    icon: "🔧",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-brand-gunmetal relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            Three steps. Zero missed leads.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-brand-orange/30 to-transparent z-0" />
              )}
              <div className="relative bg-brand-gray-900 border border-white/5 rounded-2xl p-8 hover:border-brand-orange/20 transition-all duration-300 group">
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="text-brand-orange font-mono text-sm mb-2">
                  Step {step.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-brand-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
