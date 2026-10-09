---
num: N
title: Biochémia tkaniva X
part: Lekárska biochémia – tkanivá a orgány
crumb: Tkanivo X
eyebrow: Biochémia tkanív a orgánov
standfirst: Jedna–dve vety: čím je tkanivo ako terén zvláštne (čo prijíma, čo vydáva, akú výbavu má a čo mu chýba) a podľa čoho sa kapitola delí – mapa kapitoly.
deps: [→ M.K Kmeňový mechanizmus z časti o dráhach](MM_subor#sec-M-K) · [→ …](…)
next: [→ N+1 Názov ďalšej kapitoly](NN_subor)
reviewed: —
# voliteľné – skutočný čas v minútach, ak ho niekto zmeral (inak ho odhadne build): cas_citanie: 90 · cas_ucenie: 260
---

<!--
Šablóna TKANIVOVEJ / KLINICKEJ kapitoly (pečeň, oblička, sval, nervové tkanivo, krv, spojivo; diabetes,
ateroskleróza a pod.). Súbor začínajúci „_“ build preskakuje.
Pravidlá: CLAUDE.md §2.6 (kostra, karta poruchy, tri úrovne dôležitosti) + §2.5 (pohľad na biochémiu)
+ všetko ostatné ako pri kapitole o dráhe (postup §4.0, štyri vrstvy, povinné prvky §2.2, rozsah §1.2).

- Dráhy sa znova nevysvetľujú: krátke pripomenutie jadra (1–3 vety alebo chain) + xref domov
  (tabuľka kmeňových mechanizmov v CLAUDE.md §2.5, bod 5). Kapitola sa musí dať čítať samostatne.
- Plný výklad tu majú len deje, ktoré sú pre tkanivo špecifické a majú tu domov.
- Tri úrovne dôležitosti: prototyp = plná karta; častá/dôležitá = skrátená karta (len čím sa líši);
  zriedkavá = riadok tabuľky s rovnakými stĺpcami.
- Otázky: ≥ 2 siahajú do časti o dráhach, ≥ 1 prípad. Schémy poskladané zo vzorcov, vlastné SVG
  (značky <mol>, <rx>, <vplyv>, <uzol>; farebný kód a postup pri novom vzorci: CLAUDE.md §5.2).
- PRIORITY a OKRAJ (§2.0 bod 5, §5.3): každá sekcia ## má za úvodným textom > [!JADRO] (hlavná myšlienka heslovite,
  ≤ 40 slov); KLINIKA, POZOR, ZAPAMATAJ a JADRO idú na okraj (bez tabuliek a obrázkov); nová skratka = riadok
  v chapters/_skratky.md.
- Rozsah podľa váhy tém (CLAUDE.md §1.2), nie podľa limitu; ak tkanivo nesie dva samostatné celky alebo sa
  nedá naučiť za týždeň, rozdeľ ho na dve kapitoly (§2.5, bod 11).

VÝBAVA (README.md, „Formát .md“) – pred „hotovo“ prejdi, či kapitola využila všetko, čo sa jej hodí.
Ukážky sú nižšie v šablóne; čo je označené „nepovinné“ a nehodí sa, zmaž – nič nevkladaj nasilu:
  chain          lineárna kaskáda A → B → C (povinná aspoň jedna)
  fork           rozvetvenie: jeden uzol, 2–5 osudov vedľa seba; riadok „Názov | text“
  cols           rovnocenné vetvy delenia vedľa seba; stĺpce oddeľuje riadok „---“, vnútri odsek alebo odrážky
  tabuľka        porovnanie; hlavička stĺpca končiaca {zel} {fial} {ruz} {tyrk} stĺpec podfarbí – pre 2–4 rovnocenné
                 kategórie, ktoré si má čitateľ zapamätať spolu ({fial} = modrý akcent knihy, {ruz} = karmínová)
  [!POZOR]       čo sa pletie – okraj          [!ZAPAMATAJ]   prepojenie na inú látku – okraj
  [!IMPORTANT]   revízia [R] „Kedysi… / Dnes…“ – v texte, povinná aspoň jedna
  odkazy         iná kapitola [→ M.K Názov](MM_subor#sec-M-K) · tá istá [→ N.K](#sec-N-K) ·
                 vlastná schéma [→ Obr. N.k](#fig-nazov-suboru) – kotva schémy je názov jej súboru
  rozkliknutie   schéma: rk="id" + <vyrez id="id" h="…" nadpis="…">…</vyrez> = krúžok ⊕ rozbalí podrobnosti pod schémou;
                 href="#fig-nazov" = krúžok → skočí na podrobnú schému (README.md, „Vzorce a schémy“)
  <sub> <sup>    CO<sub>2</sub>, NAD<sup>+</sup>; vnorená odrážka = odsadenie o 2 medzery
  obrázok z webu len s voľnou licenciou a TASL v titulku (CLAUDE.md §4.3, §4.4); dva riadky pod sebou = dvojica

MIMO TOHTO SÚBORU – ku kapitole patrí aj toto; bez toho nie je hotová (CLAUDE.md §0.1, §6):
  chapters/_skratky.md         riadok za každú novú skratku (build ju vysvetlí na okraji)
  assets/glossary/NN-nazov.js  heslá glosára k novým pojmom kapitoly – z vlastných hesiel z kroku 2, vlastnými
                               slovami (formát a postup: assets/glossary/README.md)
  chapters/fig/mol/, fig/      nové vzorce a schémy; ZDROJE-OBRAZKOV.md = riadok za každú schému a obrázok
  index.html                   karta kapitoly: odomknúť, href, status done, témy podľa hotového textu
  príkazy                      node tools/vzorce.js · node tools/build.js (bez upozornení) ·
                               node tools/glossary-audit.js surf (a miss) · node tools/anki.js ·
                               kontrola zhody so zdrojmi (krok 4) = bez nálezu, glosár ručne
  pokrytie osnovy (krok 4)     matica „heslo osnovy → sekcia → slová, ktorými sa to dá overiť“; stav hesla je len
                               plne · pripomenutie (jadro + odkaz na sekciu domova) · mimo (s dôvodom).
                               Po napísaní NOVEJ kapitoly sa prejdú staršie, ktoré na ňu odkazovali ako na celok:
                               odkaz sa spresní na sekciu a overí sa, že pripomenutie na mieste stačí
  na konci                     stav v CLAUDE.md §8 · pozrieť kapitolu na šírku počítača aj mobilu · commit
Tento komentár pri písaní zmaž.
-->

## N.1 Tkanivo ako terén

Len tá stavba a funkcia, ktorá určuje, čo tkanivo s molekulami robí – nie histológia a fyziológia z
iných predmetov. Mapa kapitoly: podľa čoho sa delí a na aké vetvy (pri > 3 vetvách vlastná SVG schéma).

> [!JADRO]
> Čím je tkanivo ako terén zvláštne a čo z toho plynie pre jeho metabolizmus – heslovite, ≤ 40 slov. Rovnako v každej ďalšej sekcii.

| Premenná terénu | V tomto tkanive | Čo z toho plynie |
| --- | --- | --- |
| Palivá a transportéry (čo prijíma) | … | … |
| Výbava enzýmov (čo vie a čo nevie) | … | … |
| Kompartmenty, kyslík, mitochondrie | … | … |
| Čo vydáva pre organizmus | … | … |

<!-- Schéma terénu: čo do tkaniva vstupuje a čo z neho vychádza (molekuly vzorcom, ostatné uzlom), vlastná SVG.
     V texte sa na ňu odkazuje kotvou = názov súboru: [→ Obr. N.1](#fig-nazov). -->
![Obr. N.1 — Titulok. Čo si má čitateľ na schéme všimnúť.](fig/fig-nazov.svg)

## N.2 Dráhy v tkanive

Úvodná veta: ktoré dráhy tu bežia, čím sa líšia od všeobecného obrazu a ako sa prepínajú podľa stavu organizmu.

> [!JADRO]
> Jadro sekcie – rovnako v každej ďalšej (N.3 až N.5).

<!-- Prepnutie stavu (povinné, ak sa dej podľa stavu mení). Farebné stĺpce {zel} {fial} {ruz} sú nepovinné. -->
| Dráha | Po jedle {zel} | Nalačno / hladovanie {fial} | Záťaž alebo stres {ruz} | Čo je tu inak |
| --- | --- | --- | --- | --- |
| … | … | … | … | [→ M.K Názov](MM_subor#sec-M-K) |

> [!ZAPAMATAJ]
> Kde sa ten istý princíp alebo signál vracia v inom tkanive či dráhe. [→ M.K Názov](MM_subor#sec-M-K)

## N.3 Špecifický dej tkaniva A

Úvodná veta: načo tkanivo tento dej má a prečo ho nerobí iné tkanivo.

```chain
substrát → enzým (kofaktor) → medziprodukt → enzým → **produkt**
```

> [!MECH]
> Kroky s činiteľmi; kmeňový mechanizmus len pripomenúť a odkázať domov [→ M.K Názov](MM_subor#sec-M-K).

> [!POZOR]
> Čo sa v tomto deji pletie (dva podobné enzýmy, podobné názvy, tkanivo × tkanivo) a podľa čoho sa to rozlíši.

> [!REG]
> Riadiaci krok → signál → čo sa zmení.

> [!LAB]
> Parameter, materiál a metóda – s jednotkou, referenčným rozpätím a prahom.

> [!KLINIKA]
> Od bloku k pacientovi · od nálezu k bloku · čo z toho plynie pre diagnostiku a liečbu.

<!-- Revízia [R]: aspoň jedna na kapitolu, na mieste, kde sa staršie poznanie naozaj líši (názov, klasifikácia,
     diagnostický prah) – nie nutne tu. Štítok je len „Revízia — …“, bez zmienky, voči čomu (CLAUDE.md §4.2). -->
> [!IMPORTANT]
> **[R] Revízia — čoho sa týka**
> **Kedysi:** staršie číslo, názov alebo prah – a kde ho študent ešte stretne.
> **Dnes:** platný stav a prečo sa zmenil.

## N.4 Špecifický dej tkaniva B

Úvodná veta: …

## N.5 Poruchy

Úvodná veta: čo majú poruchy tkaniva spoločné a podľa čoho (mechanizmu, miesta bloku) sa delia.

<!-- nepovinné: skupiny porúch vedľa seba, ak sú rovnocenné a krátke (cols); jeden uzol a viac následkov = fork -->
```cols
**Skupina A** – spoločný mechanizmus a typický nález.

---

**Skupina B** – …
```

<!-- Regulačná slučka alebo circulus vitiosus (⟳) s bodom zvratu – povinná (CLAUDE.md §2.2), vlastná SVG. -->
![Obr. N.x — Bludný kruh … .](fig/fig-kruh-….svg)

### N.5.1 Prototyp skupiny – plná karta

Definícia jednou vetou; príčina (gén, enzým, deficit, toxín).

> [!MECH]
> Čo sa hromadí pred blokom, čo chýba za ním, kam substrát ujde.

> [!LAB]
> Laboratórny nález – s jednotkou, normou a prahom.

> [!KLINIKA]
> Príznaky z mechanizmu; princíp liečby ako dôkaz mechanizmu.

### N.5.2 Častá porucha – skrátená karta

Úvodná veta: čím sa líši od prototypu (príčina, mechanizmus, nález, priebeh) – len rozdiely.

### N.5.3 Zriedkavé poruchy

Úvodná veta: prečo sú v jednej tabuľke a čo ich spája.

| Porucha | Príčina | Hromadí sa / chýba | Laboratórny nález | Klinika |
| --- | --- | --- | --- | --- |
| … | … | … | … | … |

## N.6 Súhrn: od nálezu k príčine

Úvodná veta: súhrn sleduje mapu z N.1 ako laboratórne uvažovanie.

| Laboratórny nález | Možné príčiny | Čo rozhodne (ďalší parameter, klinika, genetika) |
| --- | --- | --- |
| … | … | … |

## N.7 Otázky na zopakovanie

```quiz
? Prečo …? (otázka spájajúca tkanivo s časťou o dráhach)
= Odpoveď s mechanizmom a odkazom do kapitoly o dráhe aj sem.
? Prípad: pacient s …, v laboratóriu … – čo za tým je a čo z toho plynie?
= Mechanizmus a rozhodnutie.
```

## N.8 Zdroje

**Učebnice (kontrola faktov)** — len prečítané (CLAUDE.md §1.3)

- …

**Názvoslovie, odporúčania a prehľady**

- Autor A. et al.: Názov. *Časopis* rok;ročník:strany. [doi:…](https://doi.org/…)

**Obrázky**

Autor, licencia a odkaz na zdroj sú pri každom obrázku; súhrn je v registri `ZDROJE-OBRAZKOV.md`.
