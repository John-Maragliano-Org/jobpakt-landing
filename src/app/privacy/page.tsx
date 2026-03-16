import Link from "next/link";

export default function Privacy() {
  return (
    <main className="min-h-screen bg-brand-gunmetal pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-brand-orange hover:text-brand-orange-light text-sm mb-8 inline-block"
        >
          ← Back to home
        </Link>
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        <div className="prose prose-invert prose-sm max-w-none text-brand-gray-400 space-y-6">
          <p>
            <strong className="text-white">Last updated:</strong> March 2026
          </p>
          <p>
            Jobpakt Inc. (&quot;JOBPAKT,&quot; &quot;we,&quot; &quot;our&quot;) is committed to
            protecting your privacy. This policy explains how we collect, use,
            and protect your personal information.
          </p>
          <h2 className="text-xl font-bold text-white mt-8">Information We Collect</h2>
          <p>
            When you join our waitlist, we collect your name, email address,
            company name, and team size. We use this information solely to
            communicate with you about JOBPAKT.
          </p>
          <h2 className="text-xl font-bold text-white mt-8">How We Use Your Information</h2>
          <p>
            We use your information to send you updates about JOBPAKT, including
            launch announcements, product updates, and founding member
            communications. We will never sell your information to third parties.
          </p>
          <h2 className="text-xl font-bold text-white mt-8">Contact</h2>
          <p>
            For privacy inquiries, contact us at{" "}
            <a href="mailto:privacy@jobpakt.com" className="text-brand-orange hover:underline">
              privacy@jobpakt.com
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
