const stats = [
  { value: "40%", label: "of leads lost to missed calls" },
  { value: "78%", label: "of customers hire the first responder" },
  { value: "$1,200", label: "average revenue per missed opportunity" },
];

export default function Problem() {
  return (
    <section className="py-24 bg-brand-dark relative">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-gunmetal to-brand-dark" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            You&apos;re losing{" "}
            <span className="text-brand-orange">40% of your leads</span> to
            missed calls and slow follow-ups.
          </h2>
          <p className="text-brand-gray-400 text-lg max-w-2xl mx-auto">
            While you&apos;re on a job, your phone rings. By the time you call
            back, they&apos;ve already booked someone else.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-brand-gray-900 border border-white/5 rounded-2xl p-8 text-center hover:border-brand-orange/20 transition-colors"
            >
              <div className="text-4xl sm:text-5xl font-black text-brand-orange mb-3">
                {stat.value}
              </div>
              <div className="text-brand-gray-400 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Pain points */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {[
            "Missed calls go to voicemail — and never get returned",
            "Leads slip through the cracks between jobs",
            "Manual follow-ups eat into your actual work time",
            "Your competitors text back in seconds — you don't",
          ].map((point) => (
            <div key={point} className="flex items-start gap-3 text-brand-gray-300">
              <span className="text-brand-orange mt-0.5 shrink-0">✕</span>
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
