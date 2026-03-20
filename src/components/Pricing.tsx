const plans = [
  {
    name: "Capture",
    tagline: "Never miss another lead.",
    description:
      "Stop the bleeding. Every missed call gets a text-back, every lead gets captured, every appointment gets booked.",
    price: "$249",
    founding: "$149",
    period: "/mo CAD",
    techs: "1–3 techs",
    features: [
      "Missed call text-back in under 60 seconds",
      "AI booking assistant",
      "Two-way SMS conversations",
      "Automated follow-ups & reminders",
      "Lead capture dashboard",
      "Review request automation",
    ],
    highlighted: false,
    cta: "Start Capturing Leads",
  },
  {
    name: "Grow",
    tagline: "Get found. Get more calls.",
    description:
      "Everything in Capture — plus SEO, Google Business optimization, and website fixes that bring new customers to you.",
    price: "$499",
    founding: "$299",
    period: "/mo CAD",
    techs: "1–3 techs",
    features: [
      "Everything in Capture",
      "Full SEO audit (up to 50 pages)",
      "Google Business profile optimization",
      "Website fixes (up to 10 pages/mo)",
      "Review management & monitoring",
      "Monthly performance reports",
    ],
    highlighted: true,
    cta: "Start Growing",
  },
  {
    name: "Dominate",
    tagline: "Own your market.",
    description:
      "Everything in Grow — plus outbound prospecting, paid ads, competitor monitoring, and a monthly strategy call.",
    price: "$999",
    founding: "$599",
    period: "/mo CAD",
    techs: "1–3 techs",
    features: [
      "Everything in Grow",
      "AI outbound lead generation",
      "Google Ads & LSA management",
      "Competitor monitoring dashboard",
      "Full digital presence management",
      "Monthly 1-on-1 strategy call",
    ],
    highlighted: false,
    cta: "Start Dominating",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-dark" />
      {/* Ambient glow behind pricing */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-orange/[0.03] rounded-full blur-[128px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <span className="text-brand-orange font-semibold text-xs uppercase tracking-[0.15em]">
            Pricing
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mt-4 mb-4">
          One recovered call pays for itself.
        </h2>
        <p className="text-brand-gray-400 text-lg text-center max-w-2xl mx-auto mb-12">
          Each tier adds real revenue to your business — not just features.
          All prices in CAD. Scales by team size.
        </p>

        {/* Founding 25 banner */}
        <div className="relative bg-gradient-to-r from-brand-orange/[0.08] via-brand-orange/[0.12] to-brand-orange/[0.08] border border-brand-orange/20 rounded-2xl p-6 sm:p-8 mb-12 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,80,10,0.1),transparent_70%)]" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2.5 bg-brand-orange/20 rounded-full px-5 py-1.5 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange" />
              </span>
              <span className="text-brand-orange text-sm font-bold tracking-wide">
                FOUNDING 25 — LIMITED SPOTS
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              40% off for life — on any tier.
            </h3>
            <p className="text-brand-gray-400 max-w-lg mx-auto">
              The first 25 contractors lock in founding pricing forever.
              No contracts. Cancel anytime.
            </p>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "bg-brand-gray-900 border-2 border-brand-orange glow-orange md:scale-[1.03]"
                  : "card-surface hover:border-white/10"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-lg shadow-brand-orange/30">
                  MOST POPULAR
                </div>
              )}

              {/* Tier header */}
              <h3 className="text-2xl font-bold text-white mb-1">
                {plan.name}
              </h3>
              <p className="text-brand-gray-400 text-sm mb-5">
                {plan.tagline}
              </p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-brand-orange">
                    {plan.founding}
                  </span>
                  <span className="text-brand-gray-500 text-sm">
                    {plan.period}
                  </span>
                </div>
                <div className="text-brand-gray-500 text-sm mt-1.5">
                  <span className="line-through opacity-60">{plan.price}/mo</span>
                  <span className="text-brand-orange ml-2 font-semibold">
                    Founding price
                  </span>
                </div>
                <div className="text-brand-gray-500 text-xs mt-1">
                  Starting from {plan.techs} · Scales by team size
                </div>
              </div>

              {/* Description */}
              <p className="text-brand-gray-400 text-sm mb-6 leading-relaxed pb-6 border-b border-white/[0.06]">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-brand-gray-300 text-sm"
                  >
                    <svg
                      className="w-4 h-4 text-brand-orange shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#waitlist"
                className={`block text-center font-bold py-3.5 rounded-xl transition-all duration-200 ${
                  plan.highlighted
                    ? "bg-brand-orange hover:bg-brand-orange-light text-white shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/30"
                    : "bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/[0.08] hover:border-white/[0.15]"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
