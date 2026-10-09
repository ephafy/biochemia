# BIOCHEM — poznámky z biochémie

Bezplatná študijná učebnica lekárskej biochémie. Postavené **na tom istom systéme ako PATOLA
a kniha Patofyziológia** — rovnaký shell, bočný obsah, okraj stránky, generátor kapitol z `.md`.
Líši sa paleta (meďnatá modrá + karmínová) a tri zo siedmich farebných boxov.

> Licencie obrázkov: [`ZDROJE-OBRAZKOV.md`](ZDROJE-OBRAZKOV.md). Pravidlá písania sú v pracovnom súbore
> autora `CLAUDE.md` (nie je súčasťou zverejneného repozitára; odkazy „CLAUDE.md §…“ v komentároch mieria naň).
> Tento README hovorí len **ako je to postavené a ako sa píše `.md`**.

## Štruktúra

```
BIOCHEM/
├─ index.html              hub — zoznam kapitol, kapitola sa otvorí bez preskočenia stránky
├─ ZDROJE-OBRAZKOV.md      register obrázkov
├─ chapters/               NN_nazov.md  →  NN_nazov.html (generované, needituj)
│  ├─ _TEMPLATE.md         šablóna kapitoly o dráhe
│  ├─ _TEMPLATE_tkanivo.md šablóna tkanivovej a klinickej kapitoly
│  ├─ _skratky.md          slovník skratiek pre okraj stránky
│  └─ fig/                 vlastné schémy (fig-*.svg; _vzor-schema.svg = vzor)
│     └─ mol/              knižnica vzorcov: jeden opis molekuly = jeden súbor .txt
├─ assets/
│  ├─ styles/site.css      zdieľaný shell — neupravovať tu
│  ├─ styles/palette.css   JEDINÝ rozdiel v palete
│  ├─ js/site.js           zdieľaný shell (jediná úprava: predmet v AI prompte)
│  ├─ js/peek.js           náhľad inej kapitoly, pozícia pri F5, návrat Späť
│  ├─ js/pwa.js            offline appka (registrácia service workera)
│  ├─ js/glossary.js       ┐ pojmy pod kurzorom, tooltipy, lupa obrázkov
│  ├─ styles/glossary.css  ┘
│  ├─ glossary/            glosár biochémie: 153 hesiel v 4 súboroch (NN-nazov.js) + README.md so šablónou hesla
│  ├─ fonts/               Source Serif 4 (OFL) lokálne — fonts.css + 2 woff2
│  ├─ img/                 ikony appky
│  └─ images/              prevzaté obrázky s voľnou licenciou, jeden súbor na obrázok
├─ tools/
│  ├─ build.js             generátor kapitol a service workera
│  ├─ vzorce.js            kreslí štruktúrny vzorec z opisu v chapters/fig/mol/
│  ├─ schema.js            skladá schému zo vzorcov (značky <mol>, <rx>, <vplyv>…) + náhľad
│  ├─ chapter.css          zdieľaný štýl kapitoly — neupravovať tu
│  ├─ chapter-extra.css    boxy, okraj, obrázky, lupa, tlač
│  ├─ anki.js              export glosára a otázok do Anki
│  └─ glossary-audit.js    kontrola glosára
├─ anki/                   kartičky do Anki (generované: node tools/anki.js)
└─ LICENSE.md              CC BY-SA 4.0 pre text a vlastné schémy, MIT pre kód
```

## Zostavenie

```
node tools/build.js                 # všetky kapitoly
node tools/build.js 02_nazov        # jedna
```

Výstup hlási počet slov, živých `xref`, klinických mostov, otázok a upozornenia: chýbajúci obrázok,
obrázok bez atribúcie alebo zo vzdialeného servera, odkaz na neexistujúcu kotvu, sekcia nad 600 slov
bez vizuálu, menej než 8 `xref` (odkazy v odpovediach na otázky sa nerátajú), a povinné prvky kapitoly:
prázdne `next:`, chýbajúca regulačná slučka (`⟳`), menej než 3× KLINIKA, žiadne `[R]`,
menej než 5 otázok, v Zdrojoch nič z posledných 5 rokov, na kapitolu vedú odkazy z menej než 2 iných
kapitol, sekcia bez `Jadra`, okrajový box s tabuľkou alebo obrázkom, kapitola bez vlastnej schémy, chyba
v schéme (neznámy vzorec, kotva bez cieľa, krátka šípka). Vypíše aj počet boxov v okraji
a poznámok so skratkami. Stačí Node (žiadne `npm install`).

Kartičky do Anki (po zmene glosára alebo otázok): `node tools/anki.js` → `anki/glosar.txt`,
`anki/otazky.txt`. Import v Anki: Súbor → Importovať; opätovný import karty aktualizuje.

Nová kapitola: skopíruj `chapters/_TEMPLATE.md` (build ho preskakuje, lebo začína `_`). Komentár na začiatku
šablóny má dva zoznamy, ktoré treba pred „hotovo“ prejsť: **VÝBAVA** (čo všetko formát vie) a **MIMO TOHTO
SÚBORU** (čo ku kapitole patrí inde: skratky, glosár, vzorce a schémy, register obrázkov, karta na hlavnej stránke).

Glosár: heslá k pojmom kapitoly sa píšu do `assets/glossary/NN-nazov.js` (šablóna a postup:
`assets/glossary/README.md`). Na glosári stojí aj **lupa obrázkov a schém** – `glossary.js` sa do kapitol vkladá,
len keď glosár má aspoň jeden súbor; prázdny glosár build ohlási. Kontrola glosára (po `build.js`, keď má glosár aspoň jeden súbor): `node tools/glossary-audit.js surf` vypíše,
aké tvary v texte sa naviazali na ktoré heslo; `node tools/glossary-audit.js miss` vypíše skratky a slová bez hesla.

## Formát `.md`

Front matter (`num`, `title`, `part`, `crumb`, `eyebrow`, `standfirst`, `deps`, `next`, `reviewed`),
`## N.M Sekcia`, `### N.M.K Podsekcia`, bloky `chain`/`fork`, tabuľky a `xref` — rovnako ako v PATOLE
a v patofyzii (`../patofyziologia-ucebnica/tools/README.md`). Navyše:

**Odkaz na inú kapitolu vedie na sekciu** (`](NN_subor#sec-N-M)`), nie na kapitolu ako celok. Odkaz bez kotvy
(`](NN_subor)`) je namieste len v `next` a dovtedy, kým cieľová kapitola nie je napísaná; potom sa spresní.
Pojem, ktorý má domov v inej kapitole, sa pri odkaze vždy aspoň krátko vysvetlí (2–4 vety alebo `chain`) –
samotné slovo s odkazom nestačí.

| Čo | Zápis |
|---|---|
| **Stĺpce vedľa seba** (rovnocenné vetvy delenia) | blok ` ```cols `; stĺpce oddeľuje riadok `---`, vnútri bežný markdown (odsek, odrážky). Na mobile sa stĺpce zložia pod seba. |
| **Farebný stĺpec tabuľky** | hlavička stĺpca končí `{zel}`, `{fial}`, `{ruz}` alebo `{tyrk}` – zvýrazní hlavičku aj bunky stĺpca (rovnocenné kategórie, ktoré si má čitateľ zapamätať spolu). Značky sú rovnaké ako v PATOLE: `{fial}` = akcent knihy (tu modrá), `{ruz}` = akcent-2 (tu karmínová). |
| **Rozvetvenie** | blok ` ```fork `; každý riadok `Názov \| text` je jedna vetva (jeden uzol, viac osudov vedľa seba) |
| **Farebný box** | `> [!MECH]`, `[!REG]`, `[!LAB]`, `[!KLINIKA]`, `[!POZOR]`, `[!ZAPAMATAJ]`, `[!CHEM]`; prvý riadok `> **Vlastný štítok**` je voliteľný |
| **Okraj stránky** | na širokej obrazovke idú do pravého okraja `KLINIKA`, `POZOR`, `ZAPAMATAJ` a `JADRO` vždy, `LAB` do 50 slov; box na okraji nesmie mať tabuľku ani obrázok. Na mobile a v tlači ostávajú v texte. |
| **Jadro sekcie** | `> [!JADRO]` + jeden riadok: hlavná myšlienka sekcie heslovite (≤ 40 slov), hneď za úvodným textom každej sekcie `##` okrem Súhrnu, Otázok a Zdrojov; build chýbajúce ohlási |
| **Skratky na okraji** | netreba nič písať do kapitoly – stačí riadok v `chapters/_skratky.md` (skratka, význam, voliteľný vzor a čísla kapitol); build vysvetlenie vloží pri prvom výskyte v kapitole |
| **Vlastná schéma** | `![Obr. 2.6 — Titulok. Popis.](fig/fig-nazov.svg)` – súbor v `chapters/fig/`, poskladaný zo vzorcov (pozri *Vzorce a schémy* nižšie) |
| **Prevzatý obrázok** | `![Obr. 2.5 — Titulok. Popis.](img/subor.jpg "Autor · Wikimedia Commons · CC BY-SA 4.0 \| https://commons.wikimedia.org/wiki/File:…")` |
| **Odkaz na obrázok** | vlastná schéma má kotvu podľa názvu súboru: `[→ Obr. 2.6](#fig-nazov)`, z inej kapitoly `[→ Obr. 2.6](02_subor#fig-nazov)`; prevzatý obrázok `#fig-N-k` podľa čísla v titulku; tabuľka `#tab-N-k` (k = poradie tabuľky v kapitole) |
| **Dvojica obrázkov** | dva obrázky na susedných riadkoch bez medzery |
| **Vnorená odrážka** | odsadenie o 2 medzery (jedna úroveň) |
| **Index / zvislé zalomenie** | `<sup>…</sup>`, `<sub>…</sub>`, `<br>` priamo v texte (NAD<sup>+</sup>, CO<sub>2</sub>) |
| **Značka pôvodu** | `` `[+]` `` pridané, `` `[R]` `` revízia (do HTML sa nenesú) |
| **Revízia pre čitateľa** | `> [!IMPORTANT]` → žltý blok „Kedysi… / Dnes…“ |
| **Otázky na zopakovanie** | sekcia `## N.M Otázky na zopakovanie` s blokom ` ```quiz ` : riadok `? otázka`, pod ním `= odpoveď` (môže pokračovať ďalšími riadkami); v HTML rozbaľovacie, v tlači sa odpovede vypíšu |
| **Odborná kontrola** | vo front matter `reviewed: MUDr. X Y · 2026-10-20` (kto kapitolu vecne skontroloval); prázdne alebo `—` = „zatiaľ neprebehla“ |
| **Nahlásiť chybu** | konštanta `ISSUES_URL` na začiatku `tools/build.js` (adresa `…/issues/new` repozitára) — v kapitole pribudne odkaz; prázdna = bez odkazu |
| **Odhad času na kapitolu** | build ho počíta sám a vypíše pod `standfirst` („Prejsť ≈ … · Naučiť sa ≈ …“, rozklikne sa na predpoklady) aj na kartu kapitoly a súhrn na hube (značky `<!--cas-->` a `<!--casum-->` v `index.html`). **Prejsť** = prvé prečítanie s porozumením (100 slov za minútu, schéma 1,5 min, výrez 0,5 min); **Naučiť sa** = prvé čítanie ×2,5 + 5 min na otázku. Je to odhad z rozsahu, nie meranie; konštanty `CAS` sú na začiatku funkcie `timeEstimate` v `tools/build.js`. Zmeraný čas sa zapíše do front matter v minútach: `cas_citanie: 90`, `cas_ucenie: 260` (prebije výpočet a v kapitole sa označí „zmerané“) |
| **Zobrazenie mobil / PC** | tlačidlo s ikonou v hlavičke vedľa „Pojmy“ (aj na hube): na počítači ukáže stránku v úzkom ráme ako na telefóne, na telefóne a tablete ju prepne na šírku 1100 px; režim sa pamätá (`bc-view` v localStorage). Súbory `assets/js/view-toggle.js`, `assets/styles/view-toggle.css`, skorý skript v `<head>` (`VIEW_EARLY` v `tools/build.js` a riadok v `index.html`). Vlastné veci BIOCHEM – zdieľanú vrstvu nemenia |

Prevzatý obrázok sa ukladá do `assets/images/` pod popisným názvom. Každý obrázok má v registri
`ZDROJE-OBRAZKOV.md` autora, licenciu a stránku súboru; licencia sa overuje na stránke súboru, nie z popisky.

## Vzorce a schémy

Schéma dráhy je poskladaná zo štruktúrnych vzorcov; vzorce aj schémy sú vlastné kresby. Stačí Node.

**1. Vzorec** – `chapters/fig/mol/<id>.txt`. Hlavička hovorí, čo je to za molekulu a odkiaľ je fakt o štruktúre;
telo je zápis atómov a väzieb (celý formát je v hlavičke `tools/vzorce.js`):

```
nazov: pyruvát
skratka: Pyr
sumarny: C3H3O3-
smiles: CC(=O)C(=O)[O-]
zdroj: PubChem CID 107735 · overené 2026-10-06
projekcia: skeletálny vzorec (cik-cak), anión
---
a C2 . 0 0              # atóm: meno, značka („.“ = uhlík bez značky), x, y
+ C3 C2 210 H_3C <      # nový atóm o jednu väzbu od C2 smerom 210°; „<“ = text rastie doľava
+ O2 C2 90 O 2          # dvojitá väzba
+ C1 C2 330 .
+ O1a C1 270 O 2
+ O1b C1 30 O^-
```

`kruh pyranoza C1 C2 C3 C4 C5 O5` a `kruh furanoza …` dajú Haworthov kruh, `kruh n6 …` pravidelný šesťuholník,
`(P)` je fosfát ako P v krúžku. `node tools/vzorce.js` skontroluje celú knižnicu (porovná ťažké atómy kresby
so sumárnym vzorcom) a vypíše rozmery vzorcov.

**2. Schéma** – `chapters/fig/fig-nazov.svg`: obyčajné SVG, v ktorom smú byť značky (návod a kotvy v hlavičke
`tools/schema.js`, vzor `chapters/fig/_vzor-schema.svg`):

| Značka | Čo nakreslí |
|---|---|
| `<mol v="pyruvat" id="pyr" x="230" y="340"/>` | vzorec z knižnice so stredom v bode, pod ním názov a skratka; `zv="P2"` zvýrazní atóm |
| `<rx od="{pep.b}" do="{pyr.t}" typ="nevratna" enzym="pyruvátkináza" ko="ADP>ATP" akt="Fru-1,6-P₂" inh="ATP"/>` | reakciu: šípku, enzým, žlté koenzýmy, zelené ↑ a červené ↓ regulátory |
| `<vplyv typ="akt" od="{f16.r}" do="{pk.er}" cez="470,52"/>` | prerušovanú (ohnutú) čiaru: `akt` zelená so šípkou, `inh` červená s priečkou |
| `<uzol id="tca" x="80" y="40" text="citrátový|cyklus"/>` | uzol len s názvom |
| `<legenda x="20" y="388"/>` | vysvetlivky farieb a čiar (`polozky="nv,enz,ko,rk,odk"` vyberie, ktoré) |
| `<uzol … rk="triozy"/>` · `<mol … rk="…"/>` · `<rx … rk="…"/>` · `<plus rk="…" x="…" y="…"/>` | **rozkliknutie:** značka dostane krúžok ⊕ a klik pod schémou rozbalí výrez s tým istým id |
| `<vyrez id="triozy" h="190" nadpis="…"> … </vyrez>` | výrez s podrobnosťami (vzorce, medzikroky, mechanizmus) vo vlastných súradniciach 0…šírka × 0…h; je skrytý, kým ho čitateľ neotvorí |
| `<uzol … href="#fig-nazov"/>` · `href="04_subor#fig-nazov"` | uzol je odkaz na podrobnú schému (krúžok →), aj v inej kapitole |

`{id.kotva}` sa nahradí súradnicami (napr. `{pyr.t}` = stred nad vzorcom, `{pk.er}` = pravý okraj popisu enzýmu),
takže šípky sa nemusia prepočítavať, keď sa vzorec posunie. Build značky rozvinie na čisté SVG.

**Rozkliknutie (od 8. 10. 2026).** Schéma smie zjednodušovať – skupina látok jedným uzlom, koenzým skratkou, krok
bez medzistupňa –, ale zjednodušené miesto sa má dať otvoriť: buď výrezom (`rk` + `<vyrez>`), alebo odkazom na
schému, kde je vec nakreslená celá (`href`). Výrez sa rozbalí pod schémou (mení sa `viewBox`, nič sa neprekrýva),
pod obrázkom je tlačidlo „Rozbaliť všetky podrobnosti“. Správanie je v `assets/js/schema.js` (vkladá ho build, len
keď kapitola takú schému má), vzhľad v `tools/chapter-extra.css`. Klik mimo krúžkov naďalej otvára lupu; rozklikávať
sa dá aj v nej. V tlači ostane schéma tak, ako ju čitateľ nechal. Fakty vo výreze prechádzajú krokom 2 ako každý iný.

**3. Náhľad** – `node tools/schema.js` zapíše `pracovne/nahlad_schem.html` so všetkými vzorcami a schémami
(netreba mať hotovú kapitolu); výrezy sú v náhľade rozbalené (`SCHEMA_ZBALENE=1` ich nechá zbalené).

Farebný kód je v celej knihe rovnaký: žltá = koenzým, zelená ↑ = aktivuje, červená ↓ = inhibuje, modrá = enzým
a skupina, o ktorú v reakcii ide, plná šípka = premena látky, prerušovaná = vplyv, hrubá šípka = nevratný krok.

## Zmena palety

`assets/styles/palette.css`: dve stupnice po deväť hodnôt (`--color-accent-100…900`,
`--color-accent-2-100…900`) a dva tokeny shellu (`--site-accent`, `--site-accent-2`). K tomu `theme-color`
v `index.html`, `manifest.json` a `tools/build.js` a ikony v `assets/img/`.

## Synchronizácia s PATOLOU a patofyziou

**Mierka písma (od 8. 10. 2026).** Na obrazovke je všetko písmo o 20 % väčšie – ako priblíženie prehliadača na 120 %. Každá veľkosť písma v px je zapísaná ako `calc(Npx*var(--z,1))` (`tools/chapter.css`, `tools/chapter-extra.css`, `assets/styles/site.css`, `assets/styles/glossary.css`, `<style>` v `index.html`, inline štýly v `tools/build.js`) a mierku nastavuje jeden riadok v `site.css`: `@media screen{:root{--z:1.2}}`. Novú veľkosť písma píš vždy s `*var(--z,1)`. Tlač a písmo vnútri SVG schém sa nemenia. S mierkou rastie aj bočný obsah a okraj na poznámky (`--side-w` v `site.css`). Rovnaké vo všetkých troch knihách.

Zdieľané súbory (`site.css`, `glossary.css`, `glossary.js`, `peek.js`, `chapter.css`, `anki.js`,
`glossary-audit.js`, písmo) sú kópie bez zmeny — ak sa opravia v PATOLE alebo v patofyzii, skopíruj ich sem.
Naposledy zosúladené s PATOLOU 6. 10. 2026 (farebné stĺpce tabuľky, zalomená čiara k okrajovej poznámke, hlavička
na tablete, schémy na celú šírku textu).
`site.js`, `pwa.js`, `tools/build.js` a `tools/chapter-extra.css` majú drobné úpravy (predmet v AI prompte,
názov cache, značka knihy, boxy `REG`/`LAB`/`CHEM`, v `build.js` aj rozvinutie schém cez `tools/schema.js`); pri
prenose opravy ich treba zachovať. `tools/vzorce.js`, `tools/schema.js` a `chapters/fig/mol/` sú len v BIOCHEM. Značky „PATOLA:“
v komentároch kódu označujú miesta, kde sa PATOLA (a s ňou BIOCHEM) líši od patofyzie.
