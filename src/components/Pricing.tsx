const plans = [
  {
    tier: "Tier 1",
    name: "Capture",
    tagline: "Never miss another lead",
    price: "$249",
    founding: "$149",
    period: "/mo CAD",
    techs: "From 1–3 techs",
    features: [
      "Missed call text-back (60s response)",
      "AI booking assistant",
      "Two-way SMS texting",
      "Automated follow-ups & reminders",
      "Lead capture dashboard",
      "Review request automation",
    ],
    highlighted: false,
  },
  {
    tier: "Tier 2",
    name: "Grow",
    tagline: "Get found. Get more calls.",
    price: "$499",
    founding: "$299",
    period: "/mo CAD",
    techs: "From 1–3 techs",
    features: [
      "Everything in Capture",
      "SEO audit & recommendations",
      "Google Business optimization",
      "Website fixes (up to 10 pages/mo)",
      "Review management & monitoring",
      "Monthly performance reports",
    ],
    highlighted: true,
  },
  {
    tier: "Tier 3",
    name: "Dominate",
    tagline: "Own your market.",
    price: "$999",
    founding: "$599",
    period: "/mo CAD",
    techs: "From 1–3 techs",
    features: [
      "Everything in Grow",
      "AI outbound lead generation",
      "Paid ads management",
      "Competitor monitoring",
      "Full digital presence management",
      "Monthly strategy call",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-24 bg-brand-gunmetal relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            Capture. Grow. Dominate.
          </h2>
          <p className="text-brand-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            Each tier adds revenue to your business — not just features.
            One recovered missed call pays for a month of Capture.
          </p>
        </div>

        {/* Founding 25 banner */}
        <div className="bg-gradient-to-r from-brand-orange/10 via-brand-orange/5 to-brand-orange/10 border border-brand-orange/20 rounded-2xl p-6 mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 rounded-full px-4 py-1 mb-3">
            <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
            <span className="text-brand-orange text-sm font-bold">
              FOUNDING 25 OFFER
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            40% off for life — on any tier.
          </h3>
          <p className="text-brand-gray-400">
            The first 25 contractors to join lock in founding pricing — forever.
            No contracts. Cancel anytime. All prices CAD.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "bg-brand-gray-900 border-2 border-brand-orange glow-orange scale-[1.02]"
                  : "bg-brand-gray-900 border border-white/5 hover:border-white/10"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <div className="text-brand-gray-400 text-xs font-medium uppercase tracking-wider mb-1">
                {plan.tier}
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">
                {plan.name}
              </h3>
              <p className="text-brand-gray-400 text-sm mb-4">
                {plan.tagline}
              </p>
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-brand-orange">
                    {plan.founding}
                  </span>
                  <span className="text-brand-gray-400 text-sm">
                    {plan.period}
                  </span>
                </div>
                <div className="text-brand-gray-400 text-sm mt-1">
                  <span className="line-through">{plan.price}/mo</span>
                  <span className="text-brand-orange ml-2 font-medium">
                    Founding price
                  </span>
                </div>
                <div className="text-brand-gray-500 text-xs mt-1">
                  {plan.techs} · Scales by team size
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-brand-gray-300 text-sm"
                  >
                    <svg
                      className="w-4 h-4 text-brand-orange shrink-0"
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
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#waitlist"
                className={`block text-center font-semibold py-3 rounded-xl transition-all duration-200 ${
                  plan.highlighted
                    ? "bg-brand-orange hover:bg-brand-orange-light text-white"
                    : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                }`}
              >
                Join the Founding 25
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
