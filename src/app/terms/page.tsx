import Link from "next/link";

export default function Terms() {
  return (
    <main className="min-h-screen bg-brand-gunmetal pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-brand-orange hover:text-brand-orange-light text-sm mb-8 inline-block"
        >
          ← Back to home
        </Link>
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        <div className="prose prose-invert prose-sm max-w-none text-brand-gray-400 space-y-6">
          <p>
            <strong className="text-white">Last updated:</strong> March 2026
          </p>
          <p>
            These Terms of Service govern your use of JOBPAKT&apos;s website and
            services. By using our website, you agree to these terms.
          </p>
          <h2 className="text-xl font-bold text-white mt-8">Waitlist</h2>
          <p>
            Joining our waitlist does not guarantee access to JOBPAKT services.
            Founding member pricing is subject to availability and may change
            before launch.
          </p>
          <h2 className="text-xl font-bold text-white mt-8">Intellectual Property</h2>
          <p>
            All content, branding, and materials on this website are the property
            of Jobpakt Inc. and may not be reproduced without permission.
          </p>
          <h2 className="text-xl font-bold text-white mt-8">Contact</h2>
          <p>
            For questions about these terms, contact us at{" "}
            <a href="mailto:legal@jobpakt.com" className="text-brand-orange hover:underline">
              legal@jobpakt.com
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
