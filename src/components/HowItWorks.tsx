const steps = [
  {
    number: "01",
    title: "You miss a call.",
    description:
      "You're on the job. Hands full. Phone buzzes. That's fine — JOBPAKT catches it.",
    visual: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "We text back in seconds.",
    description:
      "AI sends a personalized text, starts a conversation, and books the appointment into your calendar.",
    visual: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "You show up. We handle the rest.",
    description:
      "Reminders, follow-ups, review requests — all automated. You focus on the wrench, not the phone.",
    visual: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-dark" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-orange font-semibold text-xs uppercase tracking-[0.15em]">
            How it works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
            Three steps. Zero effort.
          </h2>
          <p className="text-brand-gray-400 text-lg max-w-xl mx-auto">
            You don&apos;t change how you work. JOBPAKT works around you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative group">
              {/* Connector line on desktop */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[calc(50%+60px)] w-[calc(100%-120px)] h-px">
                  <div className="w-full h-full bg-gradient-to-r from-brand-orange/30 to-brand-orange/10" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-brand-orange/30 rounded-full" />
                </div>
              )}

              <div className="card-surface-hover p-8 text-center h-full">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-orange/10 text-brand-orange mb-6 group-hover:bg-brand-orange/20 transition-colors duration-300">
                  {step.visual}
                </div>

                <div className="text-brand-orange font-mono text-xs tracking-wider mb-3 font-semibold">
                  STEP {step.number}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-brand-gray-400 text-[15px] leading-relaxed">
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
