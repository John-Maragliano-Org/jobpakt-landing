import WaitlistForm from "./WaitlistForm";

export default function Waitlist() {
  return (
    <section id="waitlist" className="py-24 bg-brand-dark relative">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
            <span className="text-brand-orange text-sm font-medium">
              Limited spots remaining
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Join the Founding 25.
          </h2>
          <p className="text-brand-gray-400 text-lg max-w-2xl mx-auto">
            Lock in <span className="text-brand-orange font-bold">40% off for life</span>.
            Be one of the first contractors to get access to JOBPAKT and shape the
            platform with your feedback.
          </p>
        </div>
        <WaitlistForm />
      </div>
    </section>
  );
}
