import React, { useState } from "react";

const BRAND = "rgb(253,188,70)";
const PHONE = "420720456839";

// WhatsApp helper – předvyplněná zpráva
const waUrl = (program) => {
    const msg =
        `Dobrý den, mám zájem o program: ${program}.
Prosím o volné termíny.
Jméno: ______
Telefon: ______
Vozidlo: ______
Lokalita (Praha/Středočesko/…): ______`;
    return `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
};

const programs = [
    {
        id: 0,
        title: "Exteriér BASIC",
        price: "od 890 Kč",
        time: "30–45 min",
        description:
            "Rychlé, šetrné a účinné mytí karoserie. Ideální pro průběžnou péči, když chcete čisté a reprezentativní auto bez práce na interiéru.",
        details: {
            exterier: [
                "Aplikace odstraňovače hmyzu (šetrně k laku)",
                "Předmytí aktivní pěnou (rozpuštění nečistot)",
                "Ruční mytí pH neutrálním autosamponem",
                "Očištění ráfků a prahů",
                "Šetrné sušení kvalitním ručníkem",
                "Závěrečná kontrola detailů",
            ],
        },
        cta: "Objednat exteriér",
    },
    {
        id: 1,
        title: "Interiér BASIC",
        price: "od 1 190 Kč",
        time: "60–90 min",
        description:
            "Čistý a svěží interiér na každý den. Pravidelná údržba bez nutnosti hloubkového čištění.",
        details: {
            interier: [
                "Vysátí interiéru včetně kufru",
                "Otření a čištění plastů (palubní deska, dveře, tunel)",
                "Čištění vnitřních oken",
                "Dezinfekce dotykových ploch",
                "Ošetření těsnění a prahů",
                "Neutrální vůně interiéru",
                "Kožený interiér: jemné čištění a kondicionér",
            ],
        },
        cta: "Objednat interiér",
    },
    {
        id: 2,
        title: "Komplet CLASSIC",
        price: "od 1 990 Kč",
        time: "2–2,5 h",
        description:
            "Vyvážená péče uvnitř i zvenku. Ideální po dovolené, při změně sezóny nebo jako pravidelný refresh.",
        details: {
            exterier: [
                "Ruční mytí pH neutrálním šamponem",
                "Očištění ráfků, prahů a detailů",
                "Sušení mikrovláknem",
                "Aplikace ochranného vosku (cca 3 týdny)",
                "Ošetření plastů a pneumatik",
            ],
            interier: [
                "Vysátí interiéru i kufru",
                "Čištění plastů a výplní dveří",
                "Ošetření plastů (mat/satén)",
                "Čištění vnitřních skel a detailů kolem volantu",
                "Vůně dle výběru",
                "Kožený interiér: čištění + výživa místo tepování",
            ],
        },
        cta: "Objednat komplet",
    },
    {
        id: 3,
        title: "Premium DETAIL",
        price: "od 3 490 Kč",
        time: "3–4 h",
        description:
            "Hloubkové čištění s ochranou povrchů. Ideální po delším období používání nebo při koupi ojetého vozu.",
        details: {
            exterier: [
                "Chemická a mechanická dekontaminace laku",
                "Detailní ruční mytí všech částí",
                "Aplikace tvrdého vosku/sealantu (3–6 měsíců)",
                "Ošetření plastů, lišt, těsnění a pneumatik",
            ],
            interier: [
                "Tepování sedaček/koberců (látka) nebo kompletní péče o kůži",
                "Detailní čištění plastů a spár",
                "Dezinfekce ozonem",
                "Impregnace plastů a těsnění",
            ],
        },
        cta: "Objednat Premium",
    },
    {
        id: 4,
        title: "Showroom FINISH",
        price: "od 4 990 Kč",
        time: "5–6 h",
        description:
            "Komplexní péče do posledního detailu. Vhodné před prodejem nebo jako sezónní obnovovací program.",
        details: {
            exterier: [
                "Kompletní mytí a dekontaminace karoserie",
                "Aplikace tvrdého vosku/sealantu (až 6 měsíců)",
                "Detailní čištění lišt, emblémů a spár",
                "Hydrofobní ochrana skel (přední okno)",
                "Ošetření plastů a gumových částí",
            ],
            interier: [
                "Hloubkové tepování (látka) nebo kompletní péče o kůži",
                "Detailní čištění přístrojové desky, výdechů a tlačítek",
                "Dezinfekce ozonem",
                "Impregnace plastů a těsnění",
                "Finální vůně dle výběru",
            ],
        },
        cta: "Objednat Showroom",
    },
];

export default function Programs() {
    const [open, setOpen] = useState(null);
    const toggle = (id) => setOpen(open === id ? null : id);

    return (
        <section id="programy" className="py-16 text-black">
            <div className="container-page">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">Ceník a programy</h2>
                <p className="text-center text-black/70 max-w-3xl mx-auto">
                    Vždy šetrně k laku i interiéru. Programy upravíme podle materiálů (látka/kůže) a stavu vozu.
                </p>

                <div className="grid gap-8 sm:grid-cols-2 mt-10">
                    {programs.map((p) => (
                        <div
                            key={p.id}
                            className="rounded-2xl p-6 shadow-lg border bg-white"
                            style={{ borderColor: `${BRAND}40`, boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="text-2xl font-semibold" style={{ color: BRAND }}>{p.title}</h3>
                                    <p className="text-sm text-black/60 mt-1">{p.time}</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-lg font-semibold">{p.price}</div>
                                </div>
                            </div>

                            <p className="text-base text-black/80 mt-3">{p.description}</p>

                            <button
                                onClick={() => toggle(p.id)}
                                className="mt-4 text-sm underline font-medium"
                                style={{ color: BRAND }}
                            >
                                {open === p.id ? "Skrýt detaily" : "Zobrazit detaily"}
                            </button>

                            {open === p.id && (
                                <div className="mt-4 space-y-4">
                                    {p.details.exterier && (
                                        <div>
                                            <h4 className="font-semibold mb-2" style={{ color: BRAND }}>Exteriér</h4>
                                            <ul className="list-disc list-inside text-black/80 space-y-1.5">
                                                {p.details.exterier.map((item, i) => <li key={i}>{item}</li>)}
                                            </ul>
                                        </div>
                                    )}
                                    {p.details.interier && (
                                        <div>
                                            <h4 className="font-semibold mb-2" style={{ color: BRAND }}>Interiér</h4>
                                            <ul className="list-disc list-inside text-black/80 space-y-1.5">
                                                {p.details.interier.map((item, i) => <li key={i}>{item}</li>)}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            )}

                            <div className="mt-6">
                                <a
                                    href={waUrl(p.title)}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center rounded-xl px-5 py-2.5 font-semibold transition"
                                    style={{ backgroundColor: BRAND, color: "#000" }}
                                >
                                    {p.cta || "Objednat"}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Doplňky */}
                <div
                    className="mt-10 rounded-2xl p-6"
                    style={{ backgroundColor: "#fff", border: `1px solid ${BRAND}40`, boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}
                >
                    <h3 className="text-xl font-semibold" style={{ color: BRAND }}>Doplňkové služby (po domluvě)</h3>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2 list-disc list-inside text-black/80">
                        <li>Čištění kůže + kondicionér: 690–1 090 Kč</li>
                        <li>Ozonová dezinfekce: 490 Kč</li>
                        <li>Zvířecí chlupy / silné znečištění: +300–800 Kč</li>
                        <li>Impregnace tkanin (sedadla/koberec): 590–990 Kč</li>
                        <li>Odstranění asfaltu / dehtu: 300–700 Kč</li>
                        <li>Leštění skel: 390 Kč</li>
                    </ul>
                    <p className="text-sm text-black/60 mt-3">
                        Ceny „od“ platí pro osobní vozy. SUV/dodávky +10–15 %. Další lokality po domluvě.
                    </p>
                </div>
            </div>
        </section>
    );
}
