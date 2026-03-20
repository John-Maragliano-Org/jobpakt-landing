export default function Problem() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-brand-gray-900" />
      <div className="absolute top-0 left-0 right-0 gradient-divider" />
      <div className="absolute bottom-0 left-0 right-0 gradient-divider" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="text-center mb-6">
          <span className="text-brand-orange font-semibold text-xs uppercase tracking-[0.15em]">
            The problem
          </span>
        </div>

        {/* Headline — in their language, makes them feel understood */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-6 leading-tight">
          You&apos;re on a roof in July.
          <br className="hidden sm:block" />
          <span className="text-brand-orange"> Your phone buzzes 3 times.</span>
        </h2>
        <p className="text-brand-gray-400 text-lg sm:text-xl text-center max-w-2xl mx-auto mb-16 leading-relaxed">
          By the time you climb down, all three called someone else.
          That&apos;s <span className="text-white font-semibold">$3,600 gone</span> — before lunch.
        </p>

        {/* Pain points — specific, visceral, in their words */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-16">
          {[
            {
              pain: "Missed calls go to voicemail",
              cost: "— nobody leaves one anymore",
            },
            {
              pain: "Leads vanish between jobs",
              cost: "— you forget to call back",
            },
            {
              pain: "Manual follow-ups eat your evenings",
              cost: "— after a 12-hour day",
            },
            {
              pain: "Competitors text back in 30 seconds",
              cost: "— you text back tomorrow",
            },
          ].map((item) => (
            <div
              key={item.pain}
              className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]"
            >
              <span className="text-red-500 mt-0.5 shrink-0 font-bold">✕</span>
              <p className="text-brand-gray-300 text-[15px] leading-relaxed">
                <span className="text-white font-medium">{item.pain}</span>
                <span className="text-brand-gray-500">{item.cost}</span>
              </p>
            </div>
          ))}
        </div>

        {/* The math — makes the cost real */}
        <div className="card-surface p-8 sm:p-10 max-w-3xl mx-auto text-center">
          <p className="text-brand-gray-400 text-sm uppercase tracking-wider font-semibold mb-6">
            Here&apos;s what missed calls actually cost you
          </p>
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-6">
            <div>
              <div className="text-2xl sm:text-4xl font-black text-white mb-1">
                6
              </div>
              <div className="text-brand-gray-500 text-xs sm:text-sm">
                missed calls / week
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl font-black text-white mb-1">
                ×$1,200
              </div>
              <div className="text-brand-gray-500 text-xs sm:text-sm">
                avg. job value
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl font-black text-brand-orange mb-1">
                $28,800
              </div>
              <div className="text-brand-gray-500 text-xs sm:text-sm">
                lost per month
              </div>
            </div>
          </div>
          <div className="h-px bg-white/[0.06] mb-6" />
          <p className="text-brand-gray-400 text-sm">
            Even capturing <span className="text-white font-semibold">2 extra jobs per month</span> pays
            for JOBPAKT <span className="text-brand-orange font-semibold">10x over</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
