"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ETLogo from "./ETLogo";
import AiGazeLogo from "./AiGazeLogo";
import { AI_GAZE_STUDIO_URL } from "@/lib/ai-gaze";
import { Menu, X } from "lucide-react";

const siteLinks = [
  { href: "/", label: "Home" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/table-share", label: "Table Share" },
  // AI Gaze nav tab hidden for now — page remains at /ai-gaze
  { href: "/casestudies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

const aiGazeLinks = [
  { href: "/ai-gaze", label: "Overview" },
  { href: "/ai-gaze#features", label: "Features" },
  { href: "/ai-gaze#pricing", label: "Pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isAiGaze = pathname === "/ai-gaze" || pathname.startsWith("/ai-gaze/");
  const links = isAiGaze ? aiGazeLinks : siteLinks;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "site-header--scrolled" : ""
      }`}
    >
      <nav className="page-content h-16 flex items-center justify-between gap-4">
        <Link
          href={isAiGaze ? "/ai-gaze" : "/"}
          className="relative z-10 shrink-0"
          aria-label={isAiGaze ? "AI Gaze home" : "Elastic Tree home"}
        >
          {isAiGaze ? (
            <AiGazeLogo height={48} priority />
          ) : (
            <ETLogo height={28} priority />
          )}
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const active =
              l.href === "/ai-gaze"
                ? pathname === "/ai-gaze"
                : pathname === l.href || (l.href !== "/" && !l.href.includes("#") && pathname.startsWith(l.href));
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`nav-link px-3.5 py-2 text-body-sm font-medium rounded-lg transition-colors ${
                    active ? "nav-link--active" : ""
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          {isAiGaze ? (
            <a
              href={AI_GAZE_STUDIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm !py-2.5 !px-5"
            >
              Launch Studio
            </a>
          ) : (
            <Link href="/contact" className="btn-primary text-sm !py-2.5 !px-5">
              Get in Touch
            </Link>
          )}
        </div>

        <button
          className="lg:hidden p-2 -mr-2 text-slate-300 hover:text-[var(--amber)] transition-colors relative z-50"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-[#0a1f4a]/80 backdrop-blur-sm lg:hidden"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <div className="lg:hidden site-header-mobile relative z-50">
            <ul className="page-content py-3">
              {links.map((l) => {
                const active =
                  l.href === "/ai-gaze"
                    ? pathname === "/ai-gaze"
                    : pathname === l.href || (l.href !== "/" && !l.href.includes("#") && pathname.startsWith(l.href));
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className={`block py-3 text-body-sm font-medium border-b border-white/[0.04] transition-colors ${
                        active ? "text-[var(--amber)]" : "text-slate-200 hover:text-[var(--amber)]"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-4 pb-2">
                {isAiGaze ? (
                  <a
                    href={AI_GAZE_STUDIO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center"
                  >
                    Launch Studio
                  </a>
                ) : (
                  <Link href="/contact" className="btn-primary w-full justify-center">
                    Get in Touch
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </>
      )}
    </header>
  );
}
