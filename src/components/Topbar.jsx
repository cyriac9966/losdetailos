import React from "react";

export default function Topbar() {
    return (
        <header className="fixed top-0 inset-x-0 z-50 bg-brandBlack/90 backdrop-blur supports-[backdrop-filter]:bg-brandBlack/70 border-b border-white/10 h-[76px]">
            <div className="container-page h-full flex items-center justify-between">
                {/* Logo vlevo */}
                <a href="/" className="flex items-center gap-3 group">
                    <img
                        src="/favicon.png"
                        alt="Los Detailos"
                        className="h-9 w-9 rounded-md"
                    />
                    <span className="text-white font-semibold tracking-wide group-hover:text-brandYellow transition">
            Los Detailos
          </span>
                </a>

                {/* Navigace uprostřed */}
                <nav className="hidden sm:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                    <a
                        href="#sluzby"
                        className="text-white/80 hover:text-white text-sm font-medium transition"
                    >
                        Služby
                    </a>
                    <a
                        href="#cenik"
                        className="text-white/80 hover:text-white text-sm font-medium transition"
                    >
                        Ceník
                    </a>
                    <a
                        href="#rezervace"
                        className="text-white/80 hover:text-white text-sm font-medium transition"
                    >
                        Rezervace
                    </a>
                </nav>

                {/* Tlačítko vpravo */}
                <div className="hidden sm:flex">
                    <a
                        href="#rezervace"
                        className="inline-flex items-center rounded-xl px-4 py-2 bg-brandYellow text-black font-medium hover:brightness-110 transition"
                    >
                        Objednat
                    </a>
                </div>
            </div>
        </header>
    );
}
