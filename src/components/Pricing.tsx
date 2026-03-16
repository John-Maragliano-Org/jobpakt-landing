const plans = [
  {
    name: "Starter",
    price: "$249",
    founding: "$149",
    period: "/mo CAD",
    techs: "1–3 techs",
    features: [
      "Missed call text-back",
      "AI lead capture",
      "Basic scheduling",
      "Two-way texting",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$499",
    founding: "$299",
    period: "/mo CAD",
    techs: "4–15 techs",
    features: [
      "Everything in Starter",
      "AI appointment booking",
      "Automated follow-ups",
      "ROI dashboard",
      "Priority support",
      "HCP/Jobber integration",
    ],
    highlighted: true,
  },
  {
    name: "Scale",
    price: "$799",
    founding: "$479",
    period: "/mo CAD",
    techs: "15–30 techs",
    features: [
      "Everything in Growth",
      "Multi-location support",
      "Advanced analytics",
      "Custom workflows",
      "Dedicated account manager",
      "API access",
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
            Simple pricing. Serious ROI.
          </h2>
          <p className="text-brand-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            One missed call recovered pays for a month of JOBPAKT. Most
            contractors see ROI in the first week.
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
            40% off for life.
          </h3>
          <p className="text-brand-gray-400">
            The first 25 contractors to join lock in founding pricing — forever.
            No contracts. Cancel anytime.
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
              <div className="text-brand-gray-400 text-sm font-medium mb-1">
                {plan.techs}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {plan.name}
              </h3>
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
