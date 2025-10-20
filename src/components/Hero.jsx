import React from "react";

export default function Hero() {
    return (
        <section
            className="relative overflow-hidden text-white"
            style={{
                background: "linear-gradient(180deg, rgba(230,160,40,1) 0%, rgba(210,139,28,1) 100%)",
            }}
        >
            <div className="container-page pt-12 sm:pt-16 pb-14 sm:pb-20">
                <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold bg-black/15 backdrop-blur">
            🚐 Přijedeme za vámi (Praha + Středočeský kraj) • další lokality po domluvě
          </span>
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold bg-black/80 text-[var(--brand)]">
            od 1 490 Kč — Basic interiér + exteriér
          </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-sm">
                    Profesionální mobilní mytí & čištění interiéru
                </h1>
                <p className="mt-4 text-white/90 text-lg sm:text-xl max-w-3xl">
                    Šetrně, precizně a bez starostí. Dojedeme až k vám, používáme ověřené profi přípravky a dbáme na detaily.
                </p>

                <ul className="mt-6 grid sm:grid-cols-2 gap-2 text-white/95 text-base">
                    <li className="flex items-start gap-2"><span className="mt-1">✔️</span><span>Hloubkové čištění interiéru (tepování, dezinfekce dotykových ploch)</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1">✔️</span><span>Ruční šetrné mytí karoserie, ráfků a prahů</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1">✔️</span><span>Rychlé termíny</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1">✔️</span><span>Férové ceny, přehledné balíčky</span></li>
                </ul>

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
                        href="https://wa.me/420720456839"
                        className="inline-flex items-center rounded-xl px-6 py-3 bg-white text-black font-semibold hover:bg-white/90 transition shadow-lg"
                        target="_blank" rel="noreferrer"
                    >
                        WhatsApp
                    </a>
                </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 top-0 h-6 bg-black/10" />
        </section>
    );
}
