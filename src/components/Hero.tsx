export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute inset-0 bg-brand-gunmetal">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
          <span className="text-brand-orange text-sm font-medium">
            Limited to 25 founding members
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 leading-[1.05]">
          Never miss
          <br />
          <span className="text-gradient">another job.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-brand-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          AI-powered lead capture and scheduling for home services contractors.
          <br className="hidden sm:block" />
          Stop losing calls. Start booking more jobs.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#waitlist"
            className="group bg-brand-orange hover:bg-brand-orange-light text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/30 hover:scale-105"
          >
            Join the Founding 25
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
          <span className="text-brand-gray-400 text-sm">
            40% off for life · Limited spots
          </span>
        </div>
      </div>
    </section>
  );
}
