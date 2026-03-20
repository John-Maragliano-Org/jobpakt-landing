import WaitlistForm from "./WaitlistForm";

export default function Waitlist() {
  return (
    <section id="waitlist" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background with glow */}
      <div className="absolute inset-0 bg-brand-gray-900" />
      <div className="absolute top-0 left-0 right-0 gradient-divider" />
      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-brand-orange/[0.06] rounded-full blur-[128px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Scarcity badge */}
          <div className="inline-flex items-center gap-2.5 bg-brand-orange/10 border border-brand-orange/20 rounded-full px-5 py-2 mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-orange" />
            </span>
            <span className="text-brand-orange text-sm font-semibold tracking-wide">
              Founding spots are limited
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Stop losing jobs.
            <br />
            <span className="text-gradient">Start this week.</span>
          </h2>
          <p className="text-brand-gray-400 text-lg max-w-xl mx-auto mb-2">
            Lock in <span className="text-brand-orange font-bold">40% off for life</span> as
            one of 25 founding members. We&apos;ll set everything up for you.
          </p>
          <p className="text-brand-gray-500 text-sm">
            Join now → we reach out within 24 hours → you&apos;re live within a week.
          </p>
        </div>

        <WaitlistForm />

        {/* Trust line */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-brand-gray-500 text-xs">
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-brand-orange/60" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
            No credit card required
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-brand-orange/60" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            No contracts — cancel anytime
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-brand-orange/60" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            Personal onboarding for every member
          </div>
        </div>
      </div>
    </section>
  );
}
