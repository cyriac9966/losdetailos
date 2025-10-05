import React from "react";

export default function Topbar() {
    return (
        <header className="fixed top-0 inset-x-0 z-50 bg-brandBlack/90 backdrop-blur supports-[backdrop-filter]:bg-brandBlack/70 border-b border-white/10 h-[76px]">
            <div className="container-page h-full flex items-center justify-between">
                {/* Logo + název */}
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

                {/* Navigace */}
                <nav className="hidden sm:flex items-center gap-6">
                    <a href="#sluzby" className="text-white/80 hover:text-white text-sm">
                        Služby
                    </a>
                    <a href="#cenik" className="text-white/80 hover:text-white text-sm">
                        Ceník
                    </a>
                    <a href="#rezervace" className="text-white/80 hover:text-white text-sm">
                        Rezervace
                    </a>
                    <a
                        href="#rezervace"
                        className="inline-flex items-center rounded-xl px-4 py-2 bg-brandYellow text-black font-medium hover:brightness-110 transition"
                    >
                        Objednat
                    </a>
                </nav>
            </div>
        </header>
    );
}
