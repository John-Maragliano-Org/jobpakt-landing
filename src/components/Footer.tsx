import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  { name: "X", href: "https://x.com/jobpakt", icon: "𝕏" },
  { name: "LinkedIn", href: "https://linkedin.com/company/jobpakt", icon: "in" },
  { name: "Instagram", href: "https://instagram.com/jobpakt", icon: "📷" },
  { name: "Facebook", href: "https://facebook.com/jobpakt", icon: "f" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-gunmetal border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and tagline */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo-icon.jpg"
              alt="JOBPAKT"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <div>
              <span className="text-white font-bold">JOBPAKT</span>
              <p className="text-brand-gray-400 text-xs">
                Built by operators, for operators.
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-brand-gray-400">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-brand-orange/20 border border-white/10 hover:border-brand-orange/30 rounded-lg flex items-center justify-center text-brand-gray-400 hover:text-brand-orange transition-all text-sm"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center text-brand-gray-400 text-sm">
          © 2026 Jobpakt Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
