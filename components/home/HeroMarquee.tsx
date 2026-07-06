"use client";

const items = [
  "Human Behaviour Research", "Analytics", "Sensory Science", "Table Share®",
  "Syndicated Research", "Impact & CSR", "AI Gaze™", "200+ Brands", "74% Repeat Rate",
];

const track = [...items, ...items];

export default function HeroMarquee() {
  return (
    <div className="hero-marquee border-y border-white/[0.06] overflow-hidden">
      <div className="hero-marquee-track">
        {track.map((item, i) => (
          <span key={i} className="hero-marquee-item">
            <span className="hero-marquee-dot" aria-hidden />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
