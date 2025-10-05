import React from "react";

const PKGS = [
    {
        name: "Interiér START",
        blurb: "Rychlé oživení interiéru do 90 min.",
        price: "od 1 490 Kč",
        highlight: false,
        visible: [
            "Vysátí celého interiéru vč. kufru",
            "Otření plastů a palubní desky",
            "Čištění oken zevnitř",
            "Dezinfekce dotykových ploch",
        ],
        more: [
            "Ošetření gumových těsnění",
            "Vyluxování kapes a přihrádek",
            "Vůně do interiéru (neutrální)",
        ],
    },
    {
        name: "COMBO PRO",
        blurb: "Interiér + exteriér se zvýhodněním.",
        price: "od 2 990 Kč",
        highlight: true,
        visible: [
            "Tepování sedadel a koberců",
            "Hloubkové čištění plastů + impregnace",
            "Bezškrábové mytí + sušení",
            "Aplikace rychlého vosku (3–4 týdny)",
        ],
        more: [
            "Detailing volantu, tlačítek, páček",
            "Čištění kol a podběhů",
            "Odstranění hmyzu",
            "Antibakteriální ošetření",
        ],
    },
    {
        name: "ULTIMATE DETAIL",
        blurb: "Komplet čištění + dekontaminace + ochrany.",
        price: "od 4 990 Kč",
        highlight: false,
        visible: [
            "Chemická + mechanická dekontaminace",
            "Tvrdý vosk (3–6 měsíců)",
            "Impregnace plastů (UV)",
            "Ochrana skel (hydrofobní)",
        ],
        more: [
            "Leštění lokálních škrábanců (1 panel)",
            "Tepování do sucha (turbo)",
            "Čištění detailů a emblémů",
        ],
    },
];

export default function Packages() {
    return (
        <section id="cenik" className="container-page py-10 sm:py-16">
            <header className="mb-8 sm:mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Programy čištění</h2>
                <p className="text-white/70 mt-2">
                    Přehledně, srozumitelně – a když budeš chtít detaily, rozklikneš.
                </p>
            </header>

            <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-3">
                {PKGS.map((p) => (
                    <article
                        key={p.name}
                        className={[
                            "relative rounded-2xl border border-white/10 bg-white/5 shadow-lg p-6 flex flex-col",
                            p.highlight ? "ring-2 ring-brandYellow/60" : "",
                        ].join(" ")}
                    >
                        {p.highlight && (
                            <div className="absolute -top-3 left-4 rounded-lg bg-brandYellow text-black text-xs font-semibold px-2 py-1">
                                Nejčastější volba
                            </div>
                        )}

                        <h3 className="text-white text-xl font-semibold">
                            {p.name}{" "}
                            <span className="align-middle ml-2 text-xs font-semibold text-black bg-brandYellow/90 px-2 py-0.5 rounded-full">
                {p.visible.length + p.more.length} úkonů
              </span>
                        </h3>
                        <p className="text-white/80 mt-1">{p.blurb}</p>

                        <div className="mt-4">
                            <h4 className="text-white/90 font-medium mb-2">Co je zahrnuto</h4>
                            {/* tečky v barvě loga */}
                            <ul className="list-disc marker:text-brandYellow pl-5 space-y-1.5">
                                {p.visible.map((item) => (
                                    <li key={item} className="text-white/90">
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <details className="mt-3 group">
                                <summary className="cursor-pointer text-brandYellow font-semibold group-open:opacity-70">
                                    více položek
                                </summary>
                                <ul className="mt-2 list-disc marker:text-brandYellow pl-5 space-y-1.5">
                                    {p.more.map((item) => (
                                        <li key={item} className="text-white/85">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        </div>

                        <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                            <div className="text-white text-lg font-bold">{p.price}</div>
                            <a
                                href="#rezervace"
                                className="inline-flex items-center rounded-xl px-4 py-2 bg-brandYellow text-black font-medium hover:brightness-110 transition"
                            >
                                Objednat
                            </a>
                        </div>
                    </article>
                ))}
            </div>

            {/* Příplatky jako „tagy“ */}
            <div className="mt-10">
                <p className="text-white/80">
                    Příplatky:{" "}
                    <span className="inline-block align-middle text-xs font-semibold text-black bg-brandYellow/90 px-2 py-1 rounded-full mr-2">
            Ochrana skel +150 Kč
          </span>
                    <span className="inline-block align-middle text-xs font-semibold text-black bg-brandYellow/90 px-2 py-1 rounded-full mr-2">
            Fog-Fight +150 Kč
          </span>
                    <span className="inline-block align-middle text-xs font-semibold text-black bg-brandYellow/90 px-2 py-1 rounded-full">
            Dekontaminace od 490 Kč
          </span>
                </p>
            </div>
        </section>
    );
}
