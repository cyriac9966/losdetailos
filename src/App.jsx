import React, { useMemo, useState } from "react";
import Topbar from "./components/Topbar.jsx";
import Hero from "./components/Hero.jsx";
import Programs from "./components/Programs.jsx";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mblzbqld";
const CONTACT_EMAIL = "losdetailos@email.cz";

// Základní ceny (střední vůz)
const BASE_PRICES = {
    "BASIC WASH": 690,
    "ADVANCED WASH + TIRE CARE": 1290,
    "PREMIUM DETAIL (exteriér)": 1990,
    "SHOW & SHINE": 2990,
    "BASIC INTERIOR": 690,
    "ADVANCED INTERIOR": 1290,
    "PREMIUM INTERIOR": 2990,
};

// Modifikátory velikosti vozu
const SIZE_MULTIPLIERS = {
    "Malý vůz (−10 %)": 0.9,
    "Střední vůz": 1.0,
    "SUV (+30 %)": 1.3,
    "Dodávka (+40 %)": 1.4,
};

// Paušály (mytí / měsíc)
const CLUB_WASHES = {
    "Mini Club (2× měsíčně)": 2,
    "Classic Club (4× měsíčně)": 4,
    "Premium Club (8× měsíčně)": 8,
};

// Sleva dle úrovně programu (pro paušál)
const DISCOUNT_BY_PROGRAM = (program) => {
    const p = (program || "").toLowerCase();
    if (p.includes("show & shine")) return 20;
    if (p.includes("premium")) return 15;
    if (p.includes("advanced")) return 10;
    if (p.includes("basic")) return 5;
    return 0;
};

// Vstupní detailing (první měsíc)
const ENTRY_TYPES = {
    "Tvrdý vosk (3–6 měsíců)": { type: "wax", discount: 10 },
    "Keramická ochrana (12–24 měsíců)": { type: "ceramic", base: 6990, discount: 10 },
};

// CZK formát
const fmt = (n) =>
    new Intl.NumberFormat("cs-CZ", {
        style: "currency",
        currency: "CZK",
        maximumFractionDigits: 0,
    }).format(Math.round(n || 0));

export default function App() {
    const [method, setMethod] = useState("whatsapp"); // "whatsapp" | "email"
    const [submitting, setSubmitting] = useState(false);

    // Režim: jednorázově / paušál
    const [mode, setMode] = useState("oneoff"); // "oneoff" | "club"

    // Společné
    const [size, setSize] = useState("Střední vůz");

    // Jednorázově
    const [program, setProgram] = useState("BASIC WASH");

    // Paušál
    const [clubPlan, setClubPlan] = useState("Classic Club (4× měsíčně)");
    const [clubBaseProgram, setClubBaseProgram] = useState("BASIC WASH");
    const [entryInclude, setEntryInclude] = useState(false);
    const [entryType, setEntryType] = useState("Tvrdý vosk (3–6 měsíců)");

    // Výpočty cen
    const {
        basePrice,
        sizeMultiplier,
        oneTimeFinal,
        clubDiscountPercent,
        clubWashes,
        clubPricePerWashAfterDiscount,
        clubMonthlyPrice,
        entryPrice,
        firstMonthTotalWithEntry,
    } = useMemo(() => {
        const mult = SIZE_MULTIPLIERS[size] ?? 1;

        // Jednorázová cena
        const base = BASE_PRICES[program] ?? 0;
        const oneTime = base * mult;

        // Paušál
        const washes = CLUB_WASHES[clubPlan] ?? 0;
        const discount = DISCOUNT_BY_PROGRAM(clubBaseProgram);
        const baseClub = BASE_PRICES[clubBaseProgram] ?? 0;

        const perWashAfter = baseClub * mult * (1 - discount / 100);
        const monthly = perWashAfter * washes;

        // Vstupní detailing pro první měsíc
        let entry = 0;
        const cfg = ENTRY_TYPES[entryType];
        if (mode === "club" && entryInclude && cfg) {
            if (cfg.type === "wax") {
                const waxBase = BASE_PRICES["PREMIUM DETAIL (exteriér)"] ?? 1990;
                entry = waxBase * mult * (1 - (cfg.discount || 0) / 100);
            } else if (cfg.type === "ceramic") {
                const ceramicBase = cfg.base ?? 6990;
                entry = ceramicBase * mult * (1 - (cfg.discount || 0) / 100);
            }
        }

        const firstMonth = mode === "club" ? monthly + entry : 0;

        return {
            basePrice: base,
            sizeMultiplier: mult,
            oneTimeFinal: oneTime,
            clubDiscountPercent: discount,
            clubWashes: washes,
            clubPricePerWashAfterDiscount: perWashAfter,
            clubMonthlyPrice: monthly,
            entryPrice: entry,
            firstMonthTotalWithEntry: firstMonth,
        };
    }, [mode, size, program, clubPlan, clubBaseProgram, entryInclude, entryType]);

    // Zpráva pro WA/Email
    const buildMessage = ({
                              mode,
                              program,
                              jmeno,
                              telefon,
                              datum,
                              cas,
                              poznamka,
                              email,
                              size,
                              oneTimeFinal,
                              clubPlan,
                              clubBaseProgram,
                              clubDiscountPercent,
                              clubWashes,
                              clubPricePerWashAfterDiscount,
                              clubMonthlyPrice,
                              entryInclude,
                              entryType,
                              entryPrice,
                              firstMonthTotalWithEntry,
                          }) => {
        const header =
            `Dobrý den,\n` +
            (mode === "oneoff"
                ? `mám zájem o jednorázový program: ${program}.\n`
                : `mám zájem o paušál: Los Detailos Club – ${clubPlan}.\n`) +
            `Velikost vozu: ${size}\n` +
            `Termín: ${datum || "—"} ${cas || ""}\n` +
            `Jméno: ${jmeno || "—"}\n` +
            `Telefon: ${telefon || "—"}\n` +
            (email ? `E-mail: ${email}\n` : "") +
            (poznamka ? `Poznámka: ${poznamka}\n` : "");

        if (mode === "oneoff") {
            return (header + `\nFinální cena (jednorázově): ${fmt(oneTimeFinal)}`).trim();
        }

        // club
        return (
            header +
            `\nZákladní program pro paušál: ${clubBaseProgram}\n` +
            `Sleva dle programu: ${clubDiscountPercent} %\n` +
            `Počet mytí měsíčně: ${clubWashes}\n` +
            `Cena za mytí (po slevě): ${fmt(clubPricePerWashAfterDiscount)}\n` +
            `Měsíční cena: ${fmt(clubMonthlyPrice)}` +
            (entryInclude
                ? `\n\nVstupní detailing (první měsíc): ${entryType}\n` +
                `Cena vstupního detailingu: ${fmt(entryPrice)}\n` +
                `První měsíc celkem: ${fmt(firstMonthTotalWithEntry)}`
                : "")
        ).trim();
    };

    // Odeslání
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (submitting) return;

        const form = e.currentTarget;
        const jmeno = form.jmeno.value.trim();
        let telefon = form.telefon.value.trim();
        const email = form.email?.value?.trim() || "";
        const datum = form.datum.value;
        const cas = form.cas.value;
        const poznamka = form.poznamka.value.trim();

        // doplnění +420
        if (telefon && !telefon.startsWith("+")) {
            const digits = telefon.replace(/\D/g, "");
            if (digits.length === 9) telefon = "+420" + digits;
        }

        const msg = buildMessage({
            mode,
            program,
            jmeno,
            telefon,
            datum,
            cas,
            poznamka,
            email,
            size,
            oneTimeFinal,
            clubPlan,
            clubBaseProgram,
            clubDiscountPercent,
            clubWashes,
            clubPricePerWashAfterDiscount,
            clubMonthlyPrice,
            entryInclude,
            entryType,
            entryPrice,
            firstMonthTotalWithEntry,
        });

        if (method === "whatsapp") {
            const url = `https://wa.me/420720456839?text=${encodeURIComponent(msg)}`;
            window.open(url, "_blank", "noopener,noreferrer");
            return;
        }

        // EMAIL – Formspree (s fallbackem na nový e-mail)
        try {
            setSubmitting(true);
            const fd = new FormData();
            const subjectBase =
                mode === "oneoff"
                    ? `Poptávka – ${program}`
                    : `Poptávka – Los Detailos Club (${clubPlan})`;

            fd.append("_subject", subjectBase);
            fd.append("mode", mode);
            fd.append("size", size);
            fd.append("jmeno", jmeno);
            fd.append("telefon", telefon);
            fd.append("email", email);
            fd.append("datum", datum);
            fd.append("cas", cas);
            fd.append("poznamka", poznamka);

            if (mode === "oneoff") {
                fd.append("program", program);
                fd.append("oneTimeFinalCZK", String(Math.round(oneTimeFinal)));
            } else {
                fd.append("clubPlan", clubPlan);
                fd.append("clubBaseProgram", clubBaseProgram);
                fd.append("clubDiscountPercent", String(clubDiscountPercent));
                fd.append("clubWashes", String(clubWashes));
                fd.append("clubPricePerWashCZK", String(Math.round(clubPricePerWashAfterDiscount)));
                fd.append("clubMonthlyCZK", String(Math.round(clubMonthlyPrice)));
                fd.append("entryInclude", entryInclude ? "ano" : "ne");
                if (entryInclude) {
                    fd.append("entryType", entryType);
                    fd.append("entryPriceCZK", String(Math.round(entryPrice)));
                    fd.append("firstMonthTotalCZK", String(Math.round(firstMonthTotalWithEntry)));
                }
            }

            fd.append("message", msg);

            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                body: fd,
                headers: { Accept: "application/json" },
            });

            if (res.ok) {
                alert("Poptávka byla úspěšně odeslána. Děkujeme! ✨");
                form.reset();
                // soft reset stavů
                setMethod("whatsapp");
                setMode("oneoff");
                setSize("Střední vůz");
                setProgram("BASIC WASH");
                setClubPlan("Classic Club (4× měsíčně)");
                setClubBaseProgram("BASIC WASH");
                setEntryInclude(false);
                setEntryType("Tvrdý vosk (3–6 měsíců)");
            } else {
                const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                    subjectBase
                )}&body=${encodeURIComponent(msg)}`;
                window.location.href = mailto;
            }
        } catch {
            const subjectBase =
                mode === "oneoff"
                    ? `Poptávka – ${program}`
                    : `Poptávka – Los Detailos Club (${clubPlan})`;
            const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                subjectBase
            )}&body=${encodeURIComponent(msg)}`;
            window.location.href = mailto;
        } finally {
            setSubmitting(false);
        }
    };

    const emailRequired = method === "email";

    return (
        <div className="min-h-screen text-black bg-[var(--brand)]">
            <Topbar />
            <main className="pt-[80px]">
                <Hero />
                <Programs />

                {/* Rezervace */}
                <section id="rezervace" className="container-page py-14">
                    <h2 className="text-2xl sm:text-3xl font-bold">Rezervace</h2>
                    <p className="mt-2 text-black/80">
                        Vyberte si typ služby a způsob odeslání poptávky. Termín potvrdíme obratem.
                    </p>

                    {/* Přepínač odeslání */}
                    <div className="mt-4 inline-flex rounded-xl overflow-hidden border border-black/20">
                        <button
                            type="button"
                            onClick={() => setMethod("whatsapp")}
                            className={`px-4 py-2 font-medium transition ${
                                method === "whatsapp" ? "bg-black text-[var(--brand)]" : "bg-white/70 hover:bg-white"
                            }`}
                        >
                            Odeslat přes WhatsApp
                        </button>
                        <button
                            type="button"
                            onClick={() => setMethod("email")}
                            className={`px-4 py-2 font-medium transition border-l border-black/20 ${
                                method === "email" ? "bg-black text-[var(--brand)]" : "bg-white/70 hover:bg-white"
                            }`}
                        >
                            Odeslat e-mailem
                        </button>
                    </div>

                    {/* Režim služby */}
                    <div className="mt-4 inline-flex rounded-xl overflow-hidden border border-black/20">
                        <button
                            type="button"
                            onClick={() => setMode("oneoff")}
                            className={`px-4 py-2 font-medium transition ${
                                mode === "oneoff" ? "bg-black text-[var(--brand)]" : "bg-white/70 hover:bg-white"
                            }`}
                        >
                            Jednorázové mytí
                        </button>
                        <button
                            type="button"
                            onClick={() => setMode("club")}
                            className={`px-4 py-2 font-medium transition border-l border-black/20 ${
                                mode === "club" ? "bg-black text-[var(--brand)]" : "bg-white/70 hover:bg-white"
                            }`}
                        >
                            Paušál (Los Detailos Club)
                        </button>
                    </div>

                    <form className="mt-6 grid sm:grid-cols-2 gap-4" onSubmit={handleSubmit}>
                        {/* Velikost vozu (společné) */}
                        <select
                            id="size"
                            name="size"
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                            className="rounded-lg px-4 py-3 border border-black/20 bg-white/80"
                        >
                            {Object.keys(SIZE_MULTIPLIERS).map((s) => (
                                <option key={s}>{s}</option>
                            ))}
                        </select>

                        {/* Program – jen pro jednorázovou službu */}
                        {mode === "oneoff" && (
                            <select
                                id="program"
                                name="program"
                                value={program}
                                onChange={(e) => setProgram(e.target.value)}
                                className="rounded-lg px-4 py-3 border border-black/20 bg-white/80"
                                required
                            >
                                {/* EXTERIÉR */}
                                <option>BASIC WASH</option>
                                <option>ADVANCED WASH + TIRE CARE</option>
                                <option>PREMIUM DETAIL (exteriér)</option>
                                <option>SHOW &amp; SHINE</option>
                                {/* INTERIÉR */}
                                <option>BASIC INTERIOR</option>
                                <option>ADVANCED INTERIOR</option>
                                <option>PREMIUM INTERIOR</option>
                            </select>
                        )}

                        {/* Paušál – jen pro club režim */}
                        {mode === "club" && (
                            <>
                                <select
                                    name="clubPlan"
                                    value={clubPlan}
                                    onChange={(e) => setClubPlan(e.target.value)}
                                    className="rounded-lg px-4 py-3 border border-black/20 bg-white/80"
                                >
                                    {Object.keys(CLUB_WASHES).map((p) => (
                                        <option key={p}>{p}</option>
                                    ))}
                                </select>

                                <select
                                    name="clubBaseProgram"
                                    value={clubBaseProgram}
                                    onChange={(e) => setClubBaseProgram(e.target.value)}
                                    className="rounded-lg px-4 py-3 border border-black/20 bg-white/80"
                                >
                                    <option>BASIC WASH</option>
                                    <option>ADVANCED WASH + TIRE CARE</option>
                                    <option>PREMIUM DETAIL (exteriér)</option>
                                    <option>SHOW &amp; SHINE</option>
                                    <option>BASIC INTERIOR</option>
                                    <option>ADVANCED INTERIOR</option>
                                    <option>PREMIUM INTERIOR</option>
                                </select>

                                {/* Sleva info */}
                                <div className="sm:col-span-2 rounded-lg px-4 py-3 border border-black/20 bg-white">
                                    Sleva dle zvoleného programu pro paušál:{" "}
                                    <strong>{DISCOUNT_BY_PROGRAM(clubBaseProgram)}%</strong>
                                    <div className="text-black/70 text-sm mt-1">
                                        (Basic 5 % • Advanced 10 % • Premium 15 % • Show&nbsp;&amp;&nbsp;Shine 20 %)
                                    </div>
                                </div>

                                {/* Vstupní detailing */}
                                <div className="sm:col-span-2 rounded-xl border border-black/20 bg-white/80 p-4">
                                    <label className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            checked={entryInclude}
                                            onChange={(e) => setEntryInclude(e.target.checked)}
                                            className="h-5 w-5"
                                        />
                                        <span className="font-semibold">Vstupní detailing (první měsíc)</span>
                                    </label>

                                    {entryInclude && (
                                        <div className="mt-3 grid sm:grid-cols-2 gap-4">
                                            <select
                                                name="entryType"
                                                value={entryType}
                                                onChange={(e) => setEntryType(e.target.value)}
                                                className="rounded-lg px-4 py-3 border border-black/20 bg-white"
                                            >
                                                {Object.keys(ENTRY_TYPES).map((k) => (
                                                    <option key={k}>{k}</option>
                                                ))}
                                            </select>

                                            <div className="rounded-lg px-4 py-3 border border-black/20 bg-white text-sm">
                                                Cena vstupního detailingu: <strong>{fmt(entryPrice)}</strong>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </>
                        )}

                        {/* Kontakty + termín */}
                        <input id="jmeno" name="jmeno" placeholder="Jméno a příjmení" className="rounded-lg px-4 py-3 border border-black/20 bg-white/80" required />
                        <input id="telefon" name="telefon" type="tel" placeholder="Telefon (volitelné)" className="rounded-lg px-4 py-3 border border-black/20 bg-white/80" />
                        <input id="email" name="email" type="email" placeholder="Váš e-mail" className="rounded-lg px-4 py-3 border border-black/20 bg-white/80" required={method === "email"} />

                        <div className="grid grid-cols-2 gap-4 sm:col-span-2">
                            <input type="date" id="datum" name="datum" className="rounded-lg px-4 py-3 border border-black/20 bg-white/80" />
                            <input type="time" id="cas" name="cas" className="rounded-lg px-4 py-3 border border-black/20 bg-white/80" />
                        </div>

                        <textarea id="poznamka" name="poznamka" placeholder="Poznámka (volitelné)" className="rounded-lg px-4 py-3 sm:col-span-2 border border-black/20 bg-white/80" />

                        {/* Souhrn ceny */}
                        <div className="sm:col-span-2 rounded-xl border border-black/20 bg-white/80 p-4">
                            {mode === "oneoff" ? (
                                <div>
                                    <div className="text-sm text-black/70">
                                        Základ: {fmt(basePrice)} • Velikost: ×{sizeMultiplier.toFixed(2)}
                                    </div>
                                    <div className="text-xl font-semibold mt-1">
                                        Aktuální cena: {fmt(oneTimeFinal)}
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-1">
                                    <div className="text-sm text-black/70">
                                        Program pro paušál: {clubBaseProgram} • Sleva: {clubDiscountPercent}% • Počet mytí: {clubWashes}
                                    </div>
                                    <div className="text-base">
                                        Cena za mytí po slevě: <strong>{fmt(clubPricePerWashAfterDiscount)}</strong>
                                    </div>
                                    <div className="text-xl font-semibold">
                                        Měsíční cena: {fmt(clubMonthlyPrice)}
                                    </div>
                                    {entryInclude && (
                                        <>
                                            <div className="text-base">
                                                Vstupní detailing: <strong>{fmt(entryPrice)}</strong> ({entryType})
                                            </div>
                                            <div className="text-xl font-semibold">
                                                První měsíc celkem: {fmt(firstMonthTotalWithEntry)}
                                            </div>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={submitting}
                            className="sm:col-span-2 rounded-xl px-6 py-3 font-semibold transition bg-black text-[var(--brand)] hover:brightness-125 disabled:opacity-60"
                        >
                            {submitting
                                ? "Odesílám…"
                                : method === "whatsapp"
                                    ? "Odeslat přes WhatsApp"
                                    : "Odeslat e-mailem"}
                        </button>

                        <p className="sm:col-span-2 text-xs text-black/70">
                            Odesláním souhlasíte se zpracováním kontaktních údajů za účelem vyřízení poptávky.
                        </p>
                    </form>
                </section>

                {/* Kontakt */}
                <section id="kontakt" className="container-page py-14">
                    <h2 className="text-2xl sm:text-3xl font-bold">Kontakt</h2>
                    <p className="text-black/90 mt-2 leading-relaxed">
                        📍 Vykáň 138, okres Kolín<br />
                        📞 <a className="underline" href="tel:+420720456839">720 456 839</a><br />
                        📧 <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                    </p>
                </section>
            </main>

            <footer className="border-t border-black/20">
                <div className="container-page py-8 text-black/70 text-sm">
                    © {new Date().getFullYear()} Los Detailos
                </div>
            </footer>
        </div>
    );
}
