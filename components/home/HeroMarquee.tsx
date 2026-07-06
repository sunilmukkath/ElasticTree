"use client";

const items = [
  "Human Behaviour Research",
  "Analytics",
  "Sensory Science",
  "Table Share®",
  "Syndicated Research",
  "Impact & CSR",
  "AI Gaze™",
  "74% Repeat Rate",
];

export default function HeroMarquee() {
  return (
    <div className="hero-marquee border-y border-white/[0.06]">
      <div className="page-content py-4">
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
  );
}
