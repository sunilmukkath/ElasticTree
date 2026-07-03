import { ReactNode } from "react";

interface Props {
  label?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
  titleSize?: "lg" | "md";
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = "left",
  className = "",
  titleSize = "lg",
}: Props) {
  const isCenter = align === "center";
  const titleClass = titleSize === "lg" ? "text-display-lg" : "text-display-md";

  return (
    <header className={`section-header max-w-2xl ${isCenter ? "mx-auto text-center" : ""} ${className}`}>
      {label && (
        <p className={`eyebrow-text mb-3 w-fit ${isCenter ? "mx-auto" : ""}`}>
          {label}
        </p>
      )}
      <h2 className={`font-display font-black ${titleClass} text-white mb-5 tracking-tight leading-tight`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lead ${isCenter ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </header>
  );
}
