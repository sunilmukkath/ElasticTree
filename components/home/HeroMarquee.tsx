"use client";

const items = ["74% Repeat Rate"];

export default function HeroMarquee() {
  return (
    <div className="hero-marquee border-y border-white/[0.06]">
      <div className="page-content py-3 sm:py-4">
        <div className="hero-tags-scroll">
          <div className="hero-tags">
            {items.map((item) => (
              <span key={item} className="hero-tag">
                <span className="hero-marquee-dot" aria-hidden />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
