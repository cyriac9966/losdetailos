import React from "react";

export default function Hero() {
    return (
        <section
            className="relative overflow-hidden text-white"
            style={{
                background:
                    "linear-gradient(180deg, rgba(230,160,40,1) 0%, rgba(210,139,28,1) 100%)",
            }}
        >
            <div className="container-page pt-16 sm:pt-20 pb-14 sm:pb-20">
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold bg-black/15 backdrop-blur">
            🚐 Přijedeme za vámi (Praha + Středočesko) • další lokality po domluvě
          </span>
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold bg-black/80 text-[rgb(253,188,70)]">
            od 1 490 Kč — Basic interiér + exteriér
          </span>
                </div>

                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-sm">
                    Profesionální mobilní mytí & čištění interiéru
                </h1>
                <p className="mt-4 text-white/90 text-lg sm:text-xl max-w-3xl">
                    Šetrné postupy, ověřené přípravky a precizní zpracování. Vy si jen vyberete termín — my dojedeme.
                </p>

                {/* CTA */}
                <div className="mt-8 flex flex-wrap gap-3">
                    <a
                        href="#rezervace"
                        className="inline-flex items-center rounded-xl px-6 py-3 bg-black text-white font-semibold hover:brightness-125 transition shadow-lg"
                    >
                        Rychlá rezervace
                    </a>
                    <a
                        href="tel:+420720456839"
                        className="inline-flex items-center rounded-xl px-6 py-3 bg-white/15 text-white font-semibold hover:bg-white/25 transition backdrop-blur shadow-lg"
                    >
                        Zavolat • 720 456 839
                    </a>
                    <a
                        href="https://wa.me/420720456839?text=Zdrav%C3%ADm%2C%20m%C3%A1m%20z%C3%A1jem%20o%20mobiln%C3%AD%20myt%C3%AD.%20Pros%C3%ADm%20o%20voln%C3%A9%20term%C3%ADny."
                        className="inline-flex items-center rounded-xl px-6 py-3 bg-white text-black font-semibold hover:bg-white/90 transition shadow-lg"
                        target="_blank" rel="noreferrer"
                    >
                        WhatsApp
                    </a>
                </div>

                {/* Info o oblasti */}
                <div className="mt-6 text-white/90 text-sm sm:text-base">
                    Oblast: Praha a Středočeský kraj • další lokality po domluvě (cestovné dle vzdálenosti)
                </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 top-0 h-6 bg-black/10" />
        </section>
    );
}
