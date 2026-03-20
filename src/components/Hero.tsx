export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-brand-dark">
        {/* Large gradient orb — hero focal point */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-brand-orange/[0.07] rounded-full blur-[128px]" />
        {/* Secondary ambient glow */}
        <div className="absolute top-2/3 right-1/4 w-[400px] h-[400px] bg-brand-orange/[0.04] rounded-full blur-[96px]" />
        {/* Grid pattern overlay for depth */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-dark to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 gradient-divider" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Scarcity badge */}
        <div className="inline-flex items-center gap-2.5 bg-brand-orange/10 border border-brand-orange/20 rounded-full px-5 py-2 mb-10">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-orange" />
          </span>
          <span className="text-brand-orange text-sm font-semibold tracking-wide">
            Only 25 founding spots — 40% off for life
          </span>
        </div>

        {/* Headline — clear value prop, emotional, under 10 words per line */}
        <h1 className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight text-white leading-[1.05] mb-8">
          Your phone rang.
          <br />
          <span className="text-gradient">You lost the job.</span>
        </h1>

        {/* Subheadline — how we solve it */}
        <p className="text-lg sm:text-xl md:text-2xl text-brand-gray-400 max-w-3xl mx-auto mb-4 leading-relaxed font-medium">
          Every missed call is a customer who hired someone else.
        </p>
        <p className="text-lg sm:text-xl md:text-2xl text-brand-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          JOBPAKT texts back in seconds, books the appointment, and follows up
          — so you never lose another job.
        </p>

        {/* CTA cluster */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a
            href="#waitlist"
            className="group relative bg-brand-orange hover:bg-brand-orange-light text-white font-bold text-lg px-10 py-5 rounded-2xl transition-all duration-200 shadow-xl shadow-brand-orange/25 hover:shadow-brand-orange/40 hover:scale-[1.03] active:scale-[0.98]"
          >
            Lock In 40% Off For Life
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </a>
        </div>

        <p className="text-brand-gray-500 text-sm">
          No credit card required · No contracts · Cancel anytime
        </p>

        {/* Loss aversion stat — gut punch */}
        <div className="mt-16 pt-12 border-t border-white/[0.06]">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-brand-orange mb-1">
                $4,800
              </div>
              <div className="text-brand-gray-500 text-sm">
                avg. revenue lost per month to missed calls
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/[0.06]" />
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-brand-orange mb-1">
                78%
              </div>
              <div className="text-brand-gray-500 text-sm">
                of customers hire whoever responds first
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/[0.06]" />
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-brand-orange mb-1">
                &lt;60s
              </div>
              <div className="text-brand-gray-500 text-sm">
                JOBPAKT response time to missed calls
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
