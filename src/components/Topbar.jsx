import React from "react";

export default function Topbar() {
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
                        href="#sluzby"
                        className="text-black hover:text-black/70 text-base font-semibold transition"
                    >
                        Služby
                    </a>
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
