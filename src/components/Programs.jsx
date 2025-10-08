import React, { useState } from "react";

const BRAND = "rgb(253,188,70)";

export default function Programs() {
    const [open, setOpen] = useState(null);
    const toggle = (id) => setOpen(open === id ? null : id);

    const programs = [
        {
            id: 0,
            title: "Exteriér BASIC",
            price: "od 890 Kč",
            description:
                "Rychlé, šetrné a účinné mytí karoserie. Ideální pro průběžnou péči, když chcete čisté a reprezentativní auto bez práce na interiéru.",
            details: [
                "Odstranění hmyzu",
                "Předmytí aktivní pěnou",
                "Ruční mytí pH neutrálním šamponem",
                "Čištění ráfků a prahů",
                "Ruční sušení mikrovláknem",
            ],
        },
        {
            id: 1,
            title: "Interiér BASIC",
            price: "od 1 190 Kč",
            description:
                "Čistý a svěží interiér na každý den. Pravidelná údržba bez nutnosti hloubkového tepování.",
            details: [
                "Vysátí interiéru a kufru",
                "Čištění plastů a palubní desky",
                "Čištění vnitřních oken",
                "Dezinfekce dotykových ploch",
                "Ošetření těsnění a prahů",
                "Neutrální vůně interiéru",
            ],
        },
        {
            id: 2,
            title: "Komplet CLASSIC",
            price: "od 1 990 Kč",
            description:
                "Kompletní péče o interiér i exteriér – ideální pro pravidelnou údržbu nebo po dovolené.",
            details: [
                "Ruční mytí s voskem",
                "Očištění ráfků a detailů",
                "Vysátí interiéru i kufru",
                "Ošetření plastů a palubní desky",
                "Čištění vnitřních skel",
                "Kožený interiér – čištění a výživa",
            ],
        },
        {
            id: 3,
            title: "Premium DETAIL",
            price: "od 3 490 Kč",
            description:
                "Hloubkové čištění a dekontaminace s ochranou povrchů. Ideální po delším období nebo při koupi vozu.",
            details: [
                "Dekontaminace laku",
                "Aplikace tvrdého vosku",
                "Tepování nebo péče o kůži",
                "Detailní čištění spár",
                "Dezinfekce ozonem",
            ],
        },
        {
            id: 4,
            title: "Showroom FINISH",
            price: "od 4 990 Kč",
            description:
                "Komplexní péče do posledního detailu – ideální před prodejem nebo jako sezónní refresh.",
            details: [
                "Kompletní mytí a dekontaminace",
                "Aplikace tvrdého vosku nebo sealantu",
                "Detailní čištění emblémů a lišt",
                "Hydrofobní ochrana skel",
                "Dezinfekce ozonem",
                "Finální vůně dle výběru",
            ],
        },
    ];

    return (
        <section id="programy" className="py-16" style={{ backgroundColor: BRAND, color: "black" }}>
            <div className="container-page">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-black">
                    Ceník a programy
                </h2>

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

                {/* Doplňkové služby */}
                <div className="mt-10 rounded-2xl p-6 border border-black/30 bg-black text-white">
                    <h3 className="text-xl font-semibold mb-2" style={{ color: BRAND }}>
                        Doplňkové služby (po domluvě)
                    </h3>
                    <ul className="grid gap-2 sm:grid-cols-2 list-disc list-inside marker:text-[rgb(253,188,70)]">
                        <li>Čištění kůže + kondicionér: 690–1 090 Kč</li>
                        <li>Ozonová dezinfekce: 490 Kč</li>
                        <li>Zvířecí chlupy / silné znečištění: +300–800 Kč</li>
                        <li>Impregnace tkanin (sedadla/koberec): 590–990 Kč</li>
                        <li>Odstranění asfaltu / dehtu: 300–700 Kč</li>
                        <li>Leštění skel: 390 Kč</li>
                    </ul>

                    {/* upravené odstavce – POZOR na celé className řetězce */}
                    <p className="text-sm text-white/70 mt-3">
                        Oblast: Praha a Středočeský kraj • další lokality po domluvě.
                    </p>
                    <p className="text-sm text-white/70 mt-1">
                        Pokud nemáte k dispozici vodu, elektřinu nebo vhodný prostor pro čištění,
                        nabízíme službu <strong>vyzvednutí vašeho vozu na zvolené adrese a jeho
                        navrácení zpět po dokončení detailingu</strong>. Váš vůz si převezmeme,
                        postaráme se o kompletní čištění v našem zázemí a doručíme ho zpět čistý a
                        voňavý – bez starostí.
                    </p>
                </div>
            </div>
        </section>
    );
}
