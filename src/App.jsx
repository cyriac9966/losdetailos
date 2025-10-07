import React from "react";

function Topbar() {
  return (
      <header
          className="fixed top-0 inset-x-0 z-50 border-b border-black/10 shadow-md h-[80px]"
          style={{ backgroundColor: "rgb(253,188,70)" }}
      >
        <div className="container-page h-full flex items-center justify-between relative">
          {/* Logo vlevo */}
          <a href="/" className="flex items-center gap-3 group">
            <img
                src="/favicon.png"
                alt="Los Detailos"
                className="h-12 w-12 rounded-md"
            />
            <span className="text-black font-semibold tracking-wide text-lg group-hover:opacity-80 transition">
            Los Detailos
          </span>
          </a>

          {/* Navigace uprostřed */}
          <nav className="hidden sm:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            <a
                href="#cenik"
                className="text-black hover:text-black/70 text-base font-semibold transition"
            >
              Ceník
            </a>
            <a
                href="#rezervace"
                className="text-black hover:text-black/70 text-base font-semibold transition"
            >
              Rezervace
            </a>
            <a
                href="#kontakt"
                className="text-black hover:text-black/70 text-base font-semibold transition"
            >
              Kontakt
            </a>
          </nav>

          {/* Tlačítko vpravo */}
          <div className="hidden sm:flex">
            <a
                href="#rezervace"
                className="inline-flex items-center rounded-xl px-5 py-2.5 bg-black text-white font-medium hover:brightness-125 transition"
            >
              Objednat
            </a>
          </div>
        </div>
      </header>
  );
}

function App() {
  return (
      <div
          className="min-h-screen text-black"
          style={{ backgroundColor: "rgb(230,160,40)" }}
      >
        <Topbar />
        <div className="h-[80px]" /> {/* mezera pod topbarem */}

        {/* Úvodní sekce */}
        <section className="container-page pt-8 sm:pt-12 pb-10 sm:pb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Los Detailos – mobilní ruční mytí & čištění interiérů
          </h1>
          <p className="text-white/80 mt-3">
            Přijedeme za vámi po Praze a Středočeském kraji. Rychle, šetrně a
            precizně.
          </p>
          <ul className="mt-5 list-disc marker:text-[rgb(253,188,70)] pl-5 space-y-1.5 text-white">
            <li>Příjezd až k vám</li>
            <li>Hloubkové čištění interiéru</li>
            <li>Možnost zvýhodněných flotilových cen</li>
          </ul>
        </section>

        {/* Sekce Ceník */}
        <section id="cenik" className="container-page py-12 text-white">
          <h2 className="text-2xl sm:text-3xl font-bold">Ceník</h2>
          <p className="text-white/80 mt-2">Přehled programů a doplňků…</p>
        </section>

        {/* Sekce Rezervace */}
        <section id="rezervace" className="container-page py-12 text-white">
          <h2 className="text-2xl sm:text-3xl font-bold">Rezervace</h2>
          <p className="text-white/80 mt-2">Zarezervuj si termín online…</p>
        </section>

        {/* Sekce Kontakt */}
        <section id="kontakt" className="container-page py-12 text-white">
          <h2 className="text-2xl sm:text-3xl font-bold">Kontakt</h2>
          <p className="text-white/80 mt-2 leading-relaxed">
            📍 Vykáň 138, okres Kolín <br />
            📞 +420 720 456 839 <br />
            📧 info@losdetailos.cz
          </p>
        </section>

        {/* Patička */}
        <footer className="border-t border-black/10 bg-black/10">
          <div className="container-page py-8 text-white/80 text-sm">
            © {new Date().getFullYear()} Los Detailos
          </div>
        </footer>
      </div>
  );
}

export default App;
