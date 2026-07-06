"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { LinkedInIcon, InstagramIcon, XIcon } from "@/components/ui/SocialIcons";

const contactDetails = [
  {
    icon: Mail,
    label: "Email Us",
    value: "research@elastictree.com",
    sub: "We reply within 24 hours",
    href: "mailto:research@elastictree.com",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 98400 XXXXX",
    sub: "Mon–Fri, 9 AM – 6 PM IST",
    href: "tel:+919840000000",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Chennai, India",
    sub: "Servicing clients globally",
    href: null,
  },
];

const socials = [
  { icon: LinkedInIcon, label: "LinkedIn", href: "https://linkedin.com/company/elastictree" },
  { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com/elastictree" },
  { icon: XIcon, label: "X (Twitter)", href: "https://twitter.com/elastictree" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title={<>Let&apos;s Talk <span className="text-gradient-amber">Research</span></>}
        subtitle="Whether you have a specific brief or just want to explore what's possible, our team is happy to have a conversation."
      />

      <div className="page-content section-py">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 max-w-5xl">
          <div className="lg:col-span-2 space-y-8">
            {contactDetails.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[rgba(232,168,32,0.1)] border border-[rgba(232,168,32,0.2)] flex-shrink-0">
                    <Icon size={18} className="text-[#e8a820]" aria-hidden />
                  </div>
                  <div>
                    <p className="label-field !mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-title hover:text-[var(--amber)] transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-title">{item.value}</p>
                    )}
                    <p className="text-body-sm mt-0.5">{item.sub}</p>
                  </div>
                </div>
              );
            })}

            <div>
              <p className="label-field mb-3">Follow Us</p>
              <div className="flex gap-3">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/[0.06] text-slate-300 hover:text-[var(--amber)] hover:border-[var(--amber)]/30 transition-all"
                    >
                      <Icon size={17} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 surface-ghost p-8 lg:p-10">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-[rgba(232,168,32,0.15)] flex items-center justify-center mb-4">
                  <Send size={28} className="text-[#e8a820]" aria-hidden />
                </div>
                <h2 className="font-display font-black text-display-md text-white mb-2">Message Sent!</h2>
                <p className="text-body-md">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="section-stack-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { name: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
                    { name: "company", label: "Company", type: "text", placeholder: "Acme Corp" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label htmlFor={field.name} className="label-field">{field.label}</label>
                      <input
                        id={field.name}
                        type={field.type}
                        name={field.name}
                        value={form[field.name as keyof typeof form]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className="input-field"
                        required
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label htmlFor="email" className="label-field">Business Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="label-field">Tell us about your project</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Describe your research objective, timeline, and any key questions you'd like answered..."
                    className="input-field resize-none"
                    required
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center !rounded-xl">
                  <Send size={16} aria-hidden /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
