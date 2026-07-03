"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ETLogo from "./ETLogo";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/",                label: "Home" },
  { href: "/about",            label: "About" },
  { href: "/capabilities",    label: "Capabilities" },
  { href: "/table-share",     label: "Table Share" },
  { href: "/casestudies",     label: "Work" },
  { href: "/contact",         label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "site-header--scrolled" : ""
      }`}
    >
      <nav className="page-content h-16 flex items-center justify-between gap-4">
        <Link href="/" className="relative z-10 shrink-0">
          <ETLogo height={28} priority />
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
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

        <div className="hidden lg:block shrink-0">
          <Link href="/contact" className="btn-primary text-sm !py-2.5 !px-5">
            Get in Touch
          </Link>
        </div>

        <button
          className="lg:hidden p-2 -mr-2 text-slate-300 hover:text-[var(--amber)] transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden site-header-mobile">
          <ul className="page-content py-3">
            {links.map((l) => {
              const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
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
              <Link href="/contact" className="btn-primary w-full justify-center">
                Get in Touch
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
