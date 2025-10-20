import React, { useState } from "react";

const BRAND = "rgb(253,188,70)";

export default function Programs() {
    const [open, setOpen] = useState(null);
    const toggle = (id) => setOpen(open === id ? null : id);

    const programs = [
        // EXTERIÉR – naše 4 úrovně
        {
            id: 0,
            title: "BASIC WASH",
            price: "690 Kč (střední vůz)",
            description:
                "Šetrné ruční mytí pro pravidelnou údržbu. Vhodné pro denně používané vozy a firemní flotily.",
            details: [
                "Předmytí – odstranění hrubých nečistot",
                "Aktivní pěna Foamula 1",
                "Ruční mytí karoserie s mikrovláknovou rukavicí",
                "Mytí disků kol",
                "Oplach a sušení mikrovláknem",
                "Čištění oken zvenku",
            ],
        },
        {
            id: 1,
            title: "ADVANCED WASH + TIRE CARE",
            price: "1 290 Kč (střední vůz)",
            description:
                "Důkladnější péče s dekontaminací a ošetřením detailů. Ideální 1–2× měsíčně.",
            details: [
                "Předmytí Koch-Chemie VB (Vorwäsche B)",
                "Aktivní pěna Foamula 1",
                "Ruční mytí karoserie",
                "Mytí disků a podběhů",
                "Čištění detailů (spáry, kliky, emblémy, zrcátka)",
                "Odstranění zbytků hmyzu",
                "Chemická dekontaminace (asfalt, železité nečistoty)",
                "Ošetření pneumatik (lesk + UV ochrana)",
                "Sušení mikrovláknem + kompresorem",
                "Čištění oken zvenku",
            ],
        },
        {
            id: 2,
            title: "PREMIUM DETAIL (exteriér)",
            price: "1 990 Kč (střední vůz)",
            description:
                "Hloubkové mytí s chemickou + mechanickou dekontaminací a ochranou voskem.",
            details: [
                "Předmytí Koch-Chemie MZR (Mild)",
                "Aktivní pěna Foamula 1",
                "Ruční mytí karoserie",
                "Chemická + mechanická dekontaminace (clay)",
                "Intenzivní odstranění hmyzu",
                "Aplikace tekutých stěračů",
                "Aplikace tekutého vosku / sealantu (3–6 měsíců)",
                "Ošetření plastů a chromu",
                "Sušení mikrovláknem + kompresorem",
                "Finální kontrola povrchu",
            ],
        },
        {
            id: 3,
            title: "SHOW & SHINE",
            price: "2 990 Kč (střední vůz)",
            description:
                "Prémiový finiš s maximálním leskem a hladkostí povrchu. Ideální pro reprezentativní vozy.",
            details: [
                "Předmytí Koch-Chemie MZR (Mild)",
                "Aktivní pěna Foamula 1",
                "Ruční mytí karoserie",
                "Chemická + mechanická dekontaminace (clay)",
                "PPF: jen chemická dekontaminace + Soft99 Fusso Coat F7",
                "Aplikace tuhého prémiového vosku (Carnauba / SiO₂)",
                "Doleštění detailů a ošetření plastů, chromu a skel",
                "Sušení mikrovláknem + kompresorem",
                "Finální kontrola lesku",
            ],
        },

        // INTERIÉR – 3 úrovně
        {
            id: 4,
            title: "BASIC INTERIOR",
            price: "690 Kč (střední vůz)",
            description: "Rychlé vyčištění a provonění interiéru – ideální pro běžnou údržbu.",
            details: [
                "Vyčištění palubní desky a plastů",
                "Vysátí interiéru včetně kufru",
                "Vyleštění skel, oken, zrcátek a displejů",
                "Provonění antialergenní vůní",
            ],
        },
        {
            id: 5,
            title: "ADVANCED INTERIOR",
            price: "1 290 Kč (střední vůz)",
            description: "Důkladné čištění všech povrchů a detailů interiéru.",
            details: [
                "Detailní vysátí interiéru + kufru",
                "Hloubkové čištění plastů, výdechů, volantu a tlačítek",
                "Ošetření plastů UV ochranným přípravkem",
                "Vyčištění pedálů, prahových lišt a madel",
                "Vyleštění skel a displejů",
                "Provonění antialergenní vůní",
            ],
        },
        {
            id: 6,
            title: "PREMIUM INTERIOR",
            price: "2 990 Kč (střední vůz)",
            description:
                "Dokonale vyčištěný a hygienicky ošetřený interiér s ochranou materiálů.",
            details: [
                "Vysátí včetně kufru a pod sedadly",
                "Hloubkové čištění plastů s antistatickou ochranou",
                "Parní čištění bezpečnostních pásů",
                "Čištění spár a tlačítek",
                "Ošetření plastů UV přípravkem (matný/saténový finiš)",
                "Vyleštění skel, oken a displejů",
                "Provonění dle výběru",
                "Impregnace textilu / kondicionér na kůži (Koch LS)",
                "Vyfoukání spár Tornadorem",
                "Oživení gumových koberečků",
            ],
        },
    ];

    return (
        <section id="programy" className="py-16" style={{ backgroundColor: BRAND, color: "black" }}>
            <div className="container-page">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-black">
                    Ceník a programy
                </h2>

                <p className="text-center text-black/80 mb-6">
                    Ceny pro střední vůz. Malý −10 % • SUV +30 % • Dodávka +40 %.
                </p>

                <div className="grid gap-8 sm:grid-cols-2">
                    {programs.map((p) => (
                        <div key={p.id} className="rounded-2xl p-6 shadow-lg border border-black/30 bg-black">
                            <h3 className="text-2xl font-semibold mb-1" style={{ color: BRAND }}>
                                {p.title}
                            </h3>
                            <p className="text-sm text-white/80">{p.price}</p>
                            <p className="text-white mt-3">{p.description}</p>

                            <button
                                onClick={() => toggle(p.id)}
                                className="underline mt-3 font-medium text-white hover:text-[rgb(253,188,70)] transition"
                            >
                                {open === p.id ? "Skrýt detaily" : "Zobrazit detaily"}
                            </button>

                            {open === p.id && (
                                <ul className="list-disc list-inside mt-3 space-y-1 text-white marker:text-[rgb(253,188,70)]">
                                    {p.details.map((d, i) => (
                                        <li key={i}>{d}</li>
                                    ))}
                                </ul>
                            )}

                            <div className="mt-5">
                                <a
                                    href="#rezervace"
                                    className="inline-block rounded-xl px-5 py-2 font-semibold transition"
                                    style={{ backgroundColor: BRAND, color: "#000" }}
                                >
                                    Objednat
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Paušály / Club */}
                <div className="mt-12 rounded-2xl p-6 border border-black/30 bg-black text-white">
                    <h3 className="text-2xl font-bold mb-2" style={{ color: BRAND }}>
                        Los Detailos Club – Paušální péče o vůz
                    </h3>
                    <p className="text-white/90 mb-4">
                        Vyberte si měsíční členství (2×, 4× nebo 8× mytí / měsíc). Základní program si volíte sami,
                        sleva se počítá podle jeho úrovně:
                    </p>

                    <ul className="list-disc list-inside marker:text-[rgb(253,188,70)] space-y-1 mb-4">
                        <li><strong>5 %</strong> – Basic (BASIC WASH / BASIC INTERIOR)</li>
                        <li><strong>10 %</strong> – Advanced (ADVANCED WASH + TIRE CARE / ADVANCED INTERIOR)</li>
                        <li><strong>15 %</strong> – Premium (PREMIUM DETAIL / PREMIUM INTERIOR)</li>
                        <li><strong>20 %</strong> – Show &amp; Shine (exteriér)</li>
                    </ul>

                    <div className="grid sm:grid-cols-3 gap-6">
                        {[
                            { name: "Mini Club", washes: "2× měsíčně", price: "2 200 Kč", note: "pro nenáročný provoz" },
                            { name: "Classic Club", washes: "4× měsíčně", price: "3 990 Kč", note: "nejoblíbenější volba" },
                            { name: "Premium Club", washes: "8× měsíčně", price: "7 490 Kč", note: "pro náročné / firemní vozy" },
                        ].map((c) => (
                            <div key={c.name} className="rounded-xl p-5 bg-white/5 border border-white/10">
                                <div className="flex items-baseline justify-between">
                                    <h4 className="text-xl font-semibold text-[var(--brand)]">{c.name}</h4>
                                    <span className="text-sm text-white/70">{c.washes}</span>
                                </div>
                                <p className="text-lg font-semibold mt-2">{c.price}</p>
                                <p className="text-white/80 text-sm">{c.note}</p>
                                <a
                                    href="#rezervace"
                                    className="inline-block mt-4 rounded-xl px-4 py-2 font-semibold bg-[var(--brand)] text-black hover:brightness-110"
                                >
                                    Mám zájem
                                </a>
                            </div>
                        ))}
                    </div>

                    <p className="text-sm text-white/70 mt-4">
                        Nevyužité mytí lze jedenkrát převést do dalšího měsíce. Členové mají přednostní rezervace.
                    </p>
                </div>
            </div>
        </section>
    );
}
