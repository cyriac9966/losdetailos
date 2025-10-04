# Los Detailos – web (React + Vite + Tailwind)

Mobilní ruční mytí aut · Rezervace na prvním místě · Paleta: žlutá (#F59E0B), červená (#EF4444), černá (#0B0B0B).

## Rychlý start
```bash
npm i
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Rezervace – Calendly (doporučeno)
1) Vytvoř event type na https://calendly.com
2) Získej embed URL (např. https://calendly.com/losdetailos/rezervace)
3) V `src/App.jsx` odkomentuj blok s "calendly-inline-widget" a vlož své URL.

## Nasazení na Vercel
- Přidej projekt ve Vercel Dashboardu (Vite preset se detekuje automaticky).
- Build command: `npm run build`, output: `dist`.
- Přidej doménu `losdetailos.cz` a změň DNS u registrátora na ns1.vercel-dns.com, ns2.vercel-dns.com.

Vytvořeno 2025-10-04.
