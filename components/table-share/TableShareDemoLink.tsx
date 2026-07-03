import { ExternalLink, Play } from "lucide-react";
import { TABLE_SHARE_DEMO_URL } from "@/lib/table-share";

interface Props {
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  className?: string;
  label?: string;
  showIcon?: boolean;
}

export default function TableShareDemoLink({
  variant = "primary",
  size = "md",
  className = "",
  label = "Explore Demo",
  showIcon = true,
}: Props) {
  const sizeClass = size === "sm" ? "text-sm px-5 py-2.5" : "";
  const variantClass = variant === "primary" ? "btn-primary btn-glow" : "btn-secondary";

  return (
    <a
      href={TABLE_SHARE_DEMO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${variantClass} ${sizeClass} ${className}`.trim()}
    >
      {showIcon && <Play size={size === "sm" ? 14 : 16} fill="currentColor" aria-hidden />}
      {label}
      <ExternalLink size={size === "sm" ? 13 : 15} aria-hidden />
    </a>
  );
}
