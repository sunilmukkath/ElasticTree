import { ReactNode } from "react";
import SectionHeader from "./SectionHeader";

interface Props {
  label?: string;
  title: ReactNode;
  subtitle?: string;
  titleSize?: "lg" | "md";
  action?: ReactNode;
  children: ReactNode;
  className?: string;
  gap?: "md" | "lg";
}

export default function SectionBlock({
  label,
  title,
  subtitle,
  titleSize = "lg",
  action,
  children,
  className = "",
  gap = "lg",
}: Props) {
  const gapClass = gap === "md" ? "section-stack-md" : "section-stack";

  return (
    <div className={`${gapClass} ${className}`}>
      <div className={action ? "section-head-row" : undefined}>
        <SectionHeader
          align="left"
          label={label}
          title={title}
          subtitle={subtitle}
          titleSize={titleSize}
          className="!mx-0 mb-0"
        />
        {action}
      </div>
      {children}
    </div>
  );
}
