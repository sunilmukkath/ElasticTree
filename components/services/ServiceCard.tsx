import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  accent?: string;
}

export default function ServiceCard({ icon, title, description, href, accent = "#e8a820" }: Props) {
  return (
    <Link href={href} className="space-card group block p-6 h-full flex flex-col">
      <div className="p-3 rounded-xl w-fit mb-4" style={{ background: `${accent}15` }}>
        {icon}
      </div>
      <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#e8a820] transition-colors">{title}</h3>
      <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-4">{description}</p>
      <span className="inline-flex items-center gap-1 text-xs font-semibold" style={{ color: accent }}>
        Learn more <ArrowRight size={13} />
      </span>
    </Link>
  );
}
