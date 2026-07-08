import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ReactNode } from "react";

export interface PageHeroStat {
  value: string;
  label: string;
  accent?: string;
}

interface BackLink {
  href: string;
  label: string;
}

interface Props {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  back?: BackLink;
  /** Tags or labels above the title (case studies). */
  prefix?: ReactNode;
  /** Read time, date, etc. */
  meta?: ReactNode;
  /** CTA buttons below the copy block. */
  actions?: ReactNode;
  /** Search bar or filters below the copy block. */
  toolbar?: ReactNode;
  stats?: PageHeroStat[];
  /** Optional right-side visual (homepage hero). */
  visual?: ReactNode;
  /** `article` = case study detail. `home` = split layout with visual. */
  variant?: "page" | "article" | "home";
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  back,
  prefix,
  meta,
  actions,
  toolbar,
  stats,
  visual,
  variant = "page",
}: Props) {
  const isArticle = variant === "article";
  const isHome = variant === "home";

  return (
    <header
      className={`page-hero page-hero-offset ${isArticle ? "page-hero--article" : ""} ${isHome ? "page-hero--home" : ""}`}
    >
      <div className="page-hero__ambient" aria-hidden>
        <div className="page-hero__glow page-hero__glow--cyan" />
        <div className="page-hero__glow page-hero__glow--amber" />
        <div className="page-hero__grid grid-cosmic" />
      </div>

      <div className={`page-content page-hero__shell ${visual ? "page-hero__shell--split" : ""}`}>
        {back && (
          <Link href={back.href} className="page-hero__back">
            <ArrowLeft size={14} aria-hidden />
            {back.label}
          </Link>
        )}

        <div className="page-hero__main">
          <div className="page-hero__copy">
            {prefix && <div className="page-hero__prefix">{prefix}</div>}

            {eyebrow && <p className="page-hero__eyebrow">{eyebrow}</p>}

            <h1 className="page-hero__title">{title}</h1>

            {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}

            {meta && <div className="page-hero__meta">{meta}</div>}
          </div>

          {(actions || toolbar || stats) && (
            <div className="page-hero__extras">
              {actions && <div className="page-hero__actions">{actions}</div>}
              {toolbar && <div className="page-hero__toolbar">{toolbar}</div>}
              {stats && stats.length > 0 && (
                <div className="page-hero__stats stat-row stat-row--inline">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <p
                        className="stat-value"
                        style={s.accent ? { color: s.accent } : undefined}
                      >
                        {s.value}
                      </p>
                      <p className="stat-label">{s.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {visual && <div className="page-hero__visual">{visual}</div>}

        <div className="page-hero__rule" aria-hidden />
      </div>
    </header>
  );
}
