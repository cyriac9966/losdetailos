import { useEffect, useState } from 'react'

export default function LosDetailosSite() {
  const [program, setProgram] = useState('Základní interiér')
  const [size, setSize] = useState('Osobní')

  // Calendly embed (uncomment + set your URL)
  // useEffect(() => {
  //   const s = document.createElement('script')
  //   s.src = 'https://assets.calendly.com/assets/external/widget.js'
  //   s.async = true
  //   document.body.appendChild(s)
  //   return () => { document.body.removeChild(s) }
  // }, [])

  return (
      <div className="min-h-screen bg-neutral-950 text-neutral-50">
        {/* NAV */}
        <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-neutral-900">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-amber-500 flex items-center justify-center font-black text-neutral-900">LD</div>
              <div>
                <p className="font-extrabold tracking-wide text-lg">LOS DETAILOS</p>
                <p className="text-xs text-red-400 -mt-1">MOBILNÍ RUČNÍ MYTÍ AUT</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
              <a href="#rezervace" className="hover:text-white">Rezervace</a>
              <a href="#programy" className="hover:text-white">Programy</a>
              <a href="#cenik" className="hover:text-white">Ceník</a>
              <a href="#kontakt" className="hover:text-white">Kontakt</a>
            </nav>
            <a href="#rezervace" className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-3 py-2 text-neutral-900 font-semibold shadow-lg shadow-amber-500/20 hover:bg-amber-400">Rezervovat</a>
          </div>
        </header>

        {/* HERO & BOOKING */}
        <section id="rezervace" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,158,11,0.12),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(239,68,68,0.12),transparent_35%)]" />
          <div className="mx-auto max-w-6xl px-4 py-14 md:py-20 relative grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Jednoduchá <span className="text-amber-400">rezervace</span> mobilního mytí
              </h1>
              <p className="mt-4 text-neutral-300 max-w-prose">
                Přijedeme za vámi po celé Praze a Středočeském kraji. Vyberte program, termín a odešlete.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
                {['Příjezd až k vám','Šetrná chemie','Rychlé termíny','Faktura pro firmy'].map(t => (
                    <li key={t} className="flex items-center gap-2 text-neutral-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500" />{t}
                    </li>
                ))}
              </ul>
            </div>

            <form
                onSubmit={(e)=>{e.preventDefault(); alert('Díky! Toto je demo. Vložte Calendly/TidyCal/Reservio embed nebo nastavte odesílání formuláře.');}}
                className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6 shadow-xl shadow-black/20"
            >
              <h2 className="text-xl font-bold">Rezervace</h2>
              <p className="text-sm text-neutral-400">Vyberte balíček a vyplňte kontakty</p>

              <div className="mt-4 grid grid-cols-1 gap-2">
                {[
                  {name:'Základní interiér', desc:'Vysátí • plasty • skla'},
                  {name:'Hloubkový interiér', desc:'Vysátí • tepování • UV ochrana'},
                  {name:'Exteriér PLUS', desc:'Wapka • decon • vosk'},
                  {name:'Kombo Standard', desc:'Základ interiér + exteriér'},
                ].map(opt => (
                    <label key={opt.name} className={`flex items-start gap-3 rounded-2xl border p-3 cursor-pointer transition ${program===opt.name?'border-amber-500 bg-neutral-800':'border-neutral-800 hover:border-neutral-700'}`}>
                      <input type="radio" name="program" className="mt-1" checked={program===opt.name} onChange={()=>setProgram(opt.name)} />
                      <div>
                        <div className="font-semibold">{opt.name}</div>
                        <div className="text-xs text-neutral-400">{opt.desc}</div>
                      </div>
                    </label>
                ))}
              </div>

              <div className="mt-4">
                <label className="text-sm text-neutral-300">Typ vozu</label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {['Osobní','SUV/MPV','Dodávka'].map(v => (
                      <button type="button" key={v} onClick={()=>setSize(v)} className={`px-3 py-2 rounded-xl text-sm border transition ${size===v?'border-red-500 bg-red-500/10':'border-neutral-700 hover:border-neutral-500'}`}>{v}</button>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm text-neutral-300">Datum</label>
                  <input type="date" className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-700 px-3 py-2" required />
                </div>
                <div>
                  <label className="text-sm text-neutral-300">Čas</label>
                  <input type="time" className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-700 px-3 py-2" required />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3">
                <div>
                  <label className="text-sm text-neutral-300">Jméno</label>
                  <input className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-700 px-3 py-2" placeholder="Jan Novák" required />
                </div>
                <div>
                  <label className="text-sm text-neutral-300">Telefon</label>
                  <input className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-700 px-3 py-2" placeholder="+420 XXX XXX XXX" required />
                </div>
                <div>
                  <label className="text-sm text-neutral-300">E-mail</label>
                  <input type="email" className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-700 px-3 py-2" placeholder="jan@domena.cz" />
                </div>
                <div>
                  <label className="text-sm text-neutral-300">Adresa mytí (mobilní služba)</label>
                  <input className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-700 px-3 py-2" placeholder="Ulice, město" />
                </div>
                <label className="flex items-start gap-2 text-xs text-neutral-400">
                  <input type="checkbox" required /> Souhlasím se zpracováním osobních údajů za účelem objednávky.
                </label>
              </div>

              <button className="mt-4 w-full rounded-xl bg-amber-500 px-5 py-3 text-neutral-900 font-semibold hover:bg-amber-400">Odeslat rezervaci (demo)</button>

              {/* Calendly inline (alternativa) */}
              {/*
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Rezervace přes kalendář</h3>
              <div className="calendly-inline-widget" data-url="https://calendly.com/losdetailos/rezervace" style={{minWidth: 320, height: 700}} />
            </div>
            */}
            </form>
          </div>
        </section>

        {/* PROGRAMY */}
        <section id="programy" className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-extrabold">Programy</h2>
          <p className="mt-2 text-neutral-300">Jednoduše a srozumitelně.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {title:'Základní interiér', bullets:['Vysátí interiéru a kufru','Otření plastů a prahů','Čištění oken uvnitř']},
              {title:'Hloubkový interiér', bullets:['Kompletní vysátí','Tepování sedaček a koberců','Plasty + UV ochrana']},
              {title:'Exteriér PLUS', bullets:['Předmytí wapkou + pěna','Ruční mytí','Dekontaminace + vosk']},
            ].map(card => (
                <div key={card.title} className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
                  <h3 className="text-xl font-bold">{card.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                    {card.bullets.map(b => (<li key={b} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-amber-500" />{b}</li>))}
                  </ul>
                </div>
            ))}
          </div>
        </section>

        {/* CENÍK */}
        <section id="cenik" className="mx-auto max-w-6xl px-4 py-16 border-t border-neutral-900">
          <h2 className="text-3xl font-extrabold">Ceník</h2>
          <p className="mt-2 text-neutral-300">Osobní / SUV / Dodávka</p>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
              <h3 className="text-xl font-bold mb-3">Interiér</h3>
              <ul className="space-y-3 text-sm text-neutral-300">
                <li><span className="font-semibold">Základní interiér:</span> 700 / 900 / 1 100 Kč</li>
                <li><span className="font-semibold">Hloubkový interiér:</span> 1 500 / 1 800 / 2 200 Kč</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
              <h3 className="text-xl font-bold mb-3">Exteriér</h3>
              <ul className="space-y-3 text-sm text-neutral-300">
                <li><span className="font-semibold">Základní exteriér (wapka):</span> 700 / 900 / 1 200 Kč</li>
                <li><span className="font-semibold">Exteriér PLUS (decon + vosk):</span> 1 500 / 1 800 / 2 200 Kč</li>
                <li><span className="font-semibold">Kombo Standard:</span> 1 200 / 1 500 / 1 800 Kč</li>
              </ul>
              <p className="mt-3 text-xs text-neutral-500">*Ceny orientační, záleží na stavu vozu.</p>
            </div>
          </div>
        </section>

        {/* KONTAKT */}
        <section id="kontakt" className="mx-auto max-w-6xl px-4 py-16 border-t border-neutral-900">
          <h2 className="text-3xl font-extrabold">Kontakt</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-8">
            <div className="space-y-3 text-neutral-300 text-sm">
              <p><span className="text-neutral-400">Telefon:</span> <a href="tel:+420XXXXXXXXX" className="hover:underline">+420 XXX XXX XXX</a></p>
              <p><span className="text-neutral-400">Instagram:</span> <a href="https://www.instagram.com/losdetailos" target="_blank" rel="noreferrer" className="hover:underline">@losdetailos</a></p>
              <p><span className="text-neutral-400">Lokalita:</span> Praha & Středočeský kraj</p>
              <p className="text-xs text-neutral-500">*Doplňte telefon a upravte texty podle potřeby.</p>
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6 space-y-3">
              <div>
                <label className="text-sm text-neutral-300">Jméno</label>
                <input className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-700 px-3 py-2" placeholder="Jan Novák" />
              </div>
              <div>
                <label className="text-sm text-neutral-300">E-mail</label>
                <input type="email" className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-700 px-3 py-2" placeholder="jan@domena.cz" />
              </div>
              <div>
                <label className="text-sm text-neutral-300">Zpráva</label>
                <textarea className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-700 px-3 py-2" rows={4} placeholder="Mám zájem o čištění…" />
              </div>
              <button className="w-full rounded-xl bg-red-500 px-5 py-3 text-white font-semibold hover:bg-red-400">Odeslat (demo)</button>
              <p className="text-xs text-neutral-500">Tento formulář je ukázkový. Pro rezervace použijte výše uvedený modul.</p>
            </form>
          </div>
        </section>

        <footer className="border-t border-neutral-900">
          <div className="mx-auto max-w-6xl px-4 py-8 text-xs text-neutral-500 flex items-center justify-between">
            <p>© {new Date().getFullYear()} Los Detailos</p>
            <p>Brand: žlutá <span className="text-amber-400">#F59E0B</span> • červená <span className="text-red-500">#EF4444</span> • černá #0B0B0B</p>
          </div>
        </footer>
      </div>
  )
}
