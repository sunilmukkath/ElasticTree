"use client";

import Link from "next/link";
import ETLogo from "./ETLogo";
import { LinkedInIcon, InstagramIcon, XIcon } from "@/components/ui/SocialIcons";

const nav = [
  { label: "About", href: "/about" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Table Share", href: "/table-share" },
  { label: "Case Studies", href: "/casestudies" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { Icon: LinkedInIcon, href: "https://www.linkedin.com/company/elastic-tree", label: "LinkedIn" },
  { Icon: InstagramIcon, href: "https://instagram.com/elastictree", label: "Instagram" },
  { Icon: XIcon, href: "https://twitter.com/elastictree", label: "X" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] section-flow flow-tint-blue">
      <div className="page-content section-py-tight">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-12">
          <div className="md:col-span-5">
            <ETLogo height={30} className="mb-5" />
            <p className="text-body-sm max-w-sm mb-6">
              Insight-led market research for FMCG and food-service brands.
              Smart decisions, simply made — since 2014.
            </p>
            <div className="flex gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 hover:text-[var(--amber)] hover:bg-white/[0.04] transition-colors"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-caption normal-case mb-4">Navigate</p>
            <ul className="space-y-3">
              {nav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-body-sm text-slate-300 hover:text-[var(--amber)] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-caption normal-case mb-4">Contact</p>
            <div className="space-y-3">
              <div>
                <p className="text-caption normal-case mb-1">Email</p>
                <a href="mailto:research@elastictree.com" className="text-body-sm text-slate-300 hover:text-[var(--amber)] transition-colors">
                  research@elastictree.com
                </a>
              </div>
              <div>
                <p className="text-caption normal-case mb-1">HQ</p>
                <p className="text-body-sm text-slate-300">Bengaluru, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-8 border-t border-white/[0.06]">
          <p className="text-caption normal-case">
            © {new Date().getFullYear()} Elastic Tree Research
          </p>
          <p className="text-caption normal-case text-slate-500">
            Smart Decisions, Simply Made.
          </p>
        </div>
      </div>
    </footer>
  );
}
