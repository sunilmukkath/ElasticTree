"use client";

import SpaceSection from "@/components/ui/SpaceSection";

const clients = [
  "Aachi", "Aargee Equipments", "Aisle", "Amar Prakaash", "Amrutanjan",
  "Anabond", "Arha Media", "Asianet Star", "Business Clinique", "Casa Grand",
  "Cavinkare", "Cholayil", "Circen", "Cosco", "Creamline",
  "Dabur India", "Dynata", "E.I.D Parry", "Enerlife", "Fipola",
  "G K Dairy", "Gemini Edibles", "Hatsun", "Id Fresh Food", "Initiative Media",
  "ITC", "K L F Nirmal", "K.P. Namboodiri's", "Kaleesuwari", "Khazana",
  "Lotte India", "Lucas TVS", "M/S RK Swamy BBDO", "Maruchan Ajinomoto", "MyKiki",
  "Nabati", "NoBroker", "Pepsico", "Percept H", "Pioneer Wincon",
  "Pothys", "Prayagh Nutri", "Rabbit Digital", "Ram-Nath", "Rubecon",
  "Sirina Healthcare", "SKM Egg Products", "SPR Construction", "Star Health", "Sterling Holiday",
  "Sulekha.Com", "Symrise", "Takasago", "Tidel Park", "TVS Lucas",
  "UPL", "Vaidyaratnam", "Versuni", "Waycool",
];

const doubled = [...clients, ...clients];

export default function ClientLogos() {
  return (
    <SpaceSection flow="teal" spacing="tight" className="border-y border-white/[0.04]">
      <div className="section-stack-md">
        <div>
          <p className="eyebrow-text mb-3">Trusted by</p>
          <h2 className="font-display font-black text-display-md text-white">
            200+ <span className="text-gradient-amber">Brands</span> Worldwide
          </h2>
        </div>

        {[0, 1].map((row) => (
          <div key={row} className="ticker-mask -mx-5 sm:-mx-8">
            <div
              className="ticker-track"
              style={{ animation: `ticker ${55 + row * 10}s linear infinite ${row ? "reverse" : ""}` }}
            >
              {(row ? [...doubled].reverse() : doubled).map((name, i) => (
                <span key={`${row}-${i}`} className="font-mono text-body-sm text-slate-300 px-6">
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SpaceSection>
  );
}
