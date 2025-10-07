import React from "react";
import Topbar from "./components/Topbar.jsx";
import Hero from "./components/Hero.jsx";
import Programs from "./components/Programs.jsx";

export default function App() {
    return (
        <div className="min-h-screen text-black" style={{ backgroundColor: "rgb(253,188,70)" }}>
            <Topbar />
            <div className="h-[80px]" /> {/* mezera pod pevnou lištou */}

            <Hero />
            <Programs />

            {/* Rezervace */}
            <section id="rezervace" className="container-page py-14">
                <h2 className="text-2xl sm:text-3xl font-bold">Rezervace</h2>
                <p className="mt-2 text-black/80">
                    Vyber program a pošli nám rychlou poptávku. Termín potvrdíme obratem.
                </p>

                <form
                    className="mt-6 grid sm:grid-cols-2 gap-4"
                    onSubmit={(e) => {
                        e.preventDefault();
                        const form = e.currentTarget;
                        const program = form.program.value;
                        const jmeno = form.jmeno.value.trim();
                        const telefon = form.telefon.value.trim();
                        const datum = form.datum.value;
                        const cas = form.cas.value;
                        const poznamka = form.poznamka.value.trim();

                        const msg =
                            `Dobrý den, mám zájem o program: ${program}.
Termín: ${datum || "—"} ${cas || ""}
Jméno: ${jmeno || "—"}
Telefon: ${telefon || "—"}${poznamka ? `\nPoznámka: ${poznamka}` : ""}`;

                        const url = `https://wa.me/420720456839?text=${encodeURIComponent(msg)}`;
                        window.open(url, "_blank");
                    }}
                >
                    <select name="program" className="rounded-lg px-4 py-3 border border-black/20 bg-white/80" defaultValue="Komplet CLASSIC">
                        <option>Exteriér BASIC</option>
                        <option>Interiér BASIC</option>
                        <option>Komplet CLASSIC</option>
                        <option>Premium DETAIL</option>
                        <option>Showroom FINISH</option>
                    </select>

                    <input name="jmeno" placeholder="Jméno a příjmení" className="rounded-lg px-4 py-3 border border-black/20 bg-white/80" required />
                    <input name="telefon" placeholder="Telefon" className="rounded-lg px-4 py-3 border border-black/20 bg-white/80" />
                    <div className="grid grid-cols-2 gap-4">
                        <input type="date" name="datum" className="rounded-lg px-4 py-3 border border-black/20 bg-white/80" />
                        <input type="time" name="cas" className="rounded-lg px-4 py-3 border border-black/20 bg-white/80" />
                    </div>
                    <textarea name="poznamka" placeholder="Poznámka (volitelné)" className="rounded-lg px-4 py-3 sm:col-span-2 border border-black/20 bg-white/80" />
                    <button
                        type="submit"
                        className="sm:col-span-2 rounded-xl px-6 py-3 font-semibold transition"
                        style={{ backgroundColor: "black", color: "rgb(253,188,70)" }}
                    >
                        Odeslat přes WhatsApp
                    </button>
                </form>
            </section>

            {/* Kontakt */}
            <section id="kontakt" className="container-page py-14">
                <h2 className="text-2xl sm:text-3xl font-bold">Kontakt</h2>
                <p className="text-black/90 mt-2 leading-relaxed">
                    📍 Vykáň 138, okres Kolín<br/>
                    📞 <a className="underline" href="tel:+420720456839">720 456 839</a><br/>
                    📧 info@losdetailos.cz
                </p>
            </section>

            <footer className="border-t border-black/20">
                <div className="container-page py-8 text-black/70 text-sm">
                    © {new Date().getFullYear()} Los Detailos
                </div>
            </footer>
        </div>
    );
}
