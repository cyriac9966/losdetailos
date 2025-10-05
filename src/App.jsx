
import React from "react";
import Topbar from "./components/Topbar.jsx";
import Packages from "./components/Packages.jsx";

export default function App() {
  return (
      <div className="bg-neutral-950 min-h-screen text-white">
        <Topbar />
        <div className="h-[80px]" />

        {/* HERO / Úvod – přiblížený */}
        <section className="container-page pt-8 sm:pt-12 pb-10 sm:pb-16 text-white">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold">
                Los Detailos – mobilní ruční mytí & čištění interiérů
              </h1>
              <p className="text-white/80 mt-3">
                Přijedeme za vámi po Praze a Středočeském kraji. Rychle, šetrně a precizně.
              </p>

              <ul className="mt-5 list-disc marker:text-brandYellow pl-5 space-y-1.5">
                <li>Příjezd až k vám</li>
                <li>Hloubkové čištění interiéru</li>
                <li>Možnost zvýhodněných flotilových cen</li>
              </ul>

              <div className="mt-6 flex gap-3">
                <a
                    href="#rezervace"
                    className="inline-flex items-center rounded-xl px-5 py-3 bg-brandYellow text-black font-semibold hover:brightness-110 transition"
                >
                  Rezervovat
                </a>
                <a
                    href="#cenik"
                    className="inline-flex items-center rounded-xl px-5 py-3 border border-white/15 text-white hover:bg-white/5 transition"
                >
                  Ceník & programy
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold">Rychlá informace</h3>
              <p className="text-white/70 mt-2 text-sm">
                Čistíme osobní vozy, SUV i lehká užitková. Práce probíhá šetrně, s důrazem na detaily.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-white/10 p-4">
                  <div className="text-white/60">Dostupnost</div>
                  <div className="font-semibold">Praha + Středočesko</div>
                </div>
                <div className="rounded-xl border border-white/10 p-4">
                  <div className="text-white/60">Platba</div>
                  <div className="font-semibold">Hotově / převodem</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programy */}
        <Packages />

        {/* Rezervace */}
        <section id="rezervace" className="container-page py-12 sm:py-16 text-white">
          <h2 className="text-2xl sm:text-3xl font-bold">Rezervace</h2>
          <p className="text-white/70 mt-2">
            Zarezervuj si termín online. (Vlož sem svůj Calendly/rezervační widget.)
          </p>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10">
          <div className="container-page py-8 text-white/60 text-sm">
            © {new Date().getFullYear()} Los Detailos
          </div>
        </footer>
      </div>
  );
}
