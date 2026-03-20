export default function SocialProof() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-dark" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Authority statement */}
        <div className="text-center mb-16">
          <span className="text-brand-orange font-semibold text-xs uppercase tracking-[0.15em]">
            Why us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
            Built by operators.
            <span className="text-brand-orange"> Not consultants.</span>
          </h2>
          <p className="text-brand-gray-400 text-lg max-w-2xl mx-auto">
            We didn&apos;t read about the trades in a business book.
            We&apos;ve been in the field for 30 years. JOBPAKT exists because we
            lived the problem.
          </p>
        </div>

        {/* Credibility cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="card-surface p-8 text-center">
            <div className="text-4xl font-black text-brand-orange mb-2">30+</div>
            <div className="text-white font-semibold mb-1">Years in the trades</div>
            <p className="text-brand-gray-500 text-sm">
              HVAC, plumbing, electrical — we&apos;ve run the crews and dispatched the trucks.
            </p>
          </div>
          <div className="card-surface p-8 text-center">
            <div className="text-4xl font-black text-brand-orange mb-2">$0</div>
            <div className="text-white font-semibold mb-1">VC money</div>
            <p className="text-brand-gray-500 text-sm">
              Bootstrapped. No investors telling us to add features you don&apos;t need.
            </p>
          </div>
          <div className="card-surface p-8 text-center">
            <div className="text-4xl font-black text-brand-orange mb-2">CAD</div>
            <div className="text-white font-semibold mb-1">Canadian pricing</div>
            <p className="text-brand-gray-500 text-sm">
              All prices in CAD. That&apos;s 27% cheaper than US competitors charging in USD.
            </p>
          </div>
        </div>

        {/* Vs competitors */}
        <div className="card-surface p-8 sm:p-10 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-white text-center mb-8">
            How JOBPAKT stacks up
          </h3>
          <div className="space-y-4">
            {[
              {
                them: "ServiceTitan charges $499+ USD/mo ($680 CAD)",
                us: "JOBPAKT Capture starts at $149/mo CAD",
              },
              {
                them: "Most tools make you do the setup yourself",
                us: "We set everything up and manage it for you",
              },
              {
                them: "Missed call texting? That's one feature, not a platform",
                us: "Lead capture → booking → follow-up → growth — one platform",
              },
              {
                them: "12-month contracts, hidden fees",
                us: "Month-to-month. Cancel anytime. All-inclusive pricing",
              },
            ].map((row) => (
              <div
                key={row.us}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 py-4 border-b border-white/[0.04] last:border-0"
              >
                <div className="flex items-start gap-2">
                  <span className="text-red-500/80 shrink-0 mt-0.5">✕</span>
                  <span className="text-brand-gray-500 text-sm">{row.them}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-brand-orange shrink-0 mt-0.5">✓</span>
                  <span className="text-brand-gray-300 text-sm font-medium">
                    {row.us}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
