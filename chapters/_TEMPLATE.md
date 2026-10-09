---
num: N
title: Názov kapitoly
part: Lekárska biochémia
crumb: Krátky názov do hlavičky
eyebrow: Téma (napr. Metabolizmus sacharidov I)
standfirst: Jedna–dve vety: kde kapitola stojí na mape metabolizmu (načo dej je, kde a kedy beží), o čom je a ako je rozdelená (hlavné delenie a jeho kritérium) – mapa kapitoly.
deps: [→ M.K Názov sekcie](MM_subor#sec-M-K) · [→ …](…)
next: [→ N+1 Názov ďalšej kapitoly](NN_subor)
reviewed: —
# voliteľné – skutočný čas v minútach, ak ho niekto zmeral (inak ho odhadne build): cas_citanie: 90 · cas_ucenie: 260
---

<!--
Šablóna kapitoly BIOCHEM (dráha alebo dej). Súbor začínajúci „_“ build preskakuje.
ZÁVÄZNÝ POSTUP (CLAUDE.md §4.0) – kroky sa nemiešajú:
  1. osnova – LEN heslá tém a pojmov, ktoré kapitola pokryje (žiadne vety, čísla, poradie, príklady),
  2. fakty  – z učebníc, názvoslovia, odporúčaní, článkov a webu vlastnými heslami + zdroj; každý overený ďalším zdrojom,
  3. najprv strom nadpisov s kritériom každého delenia (CLAUDE.md §2.0), až potom odseky;
     text sa píše LEN z vlastných hesiel z kroku 2, žiadny zdroj nie je pri písaní otvorený;
     kostra podľa mechanizmu, nie podľa poradia ktoréhokoľvek zdroja,
  4. kontrola zhody hotového textu so zdrojmi (strojovo aj ručne – anglické podklady vždy ručne) = bez nálezu
     a kontrola pokrytia: každé heslo z kroku 1 má v texte svoje miesto. Téma, ktorá má domov v inej kapitole,
     tu NEVYPADNE: dostane jadro (2–4 vety alebo chain, pri ťažiskovej téme aj schému) a odkaz na SEKCIU domova –
     nikdy len slovo a odkaz na celú kapitolu. Čo sa do knihy nedostalo, sa zapíše s dôvodom.
Potom: skopíruj ako chapters/NN_nazov.md, nahraď N číslom kapitoly, prepíš text.
Pravidlá: CLAUDE.md (§1 hĺbka, §2 logika, §3 prepojenia, §4 legálnosť). Formát: README.md.

- reviewed: meno a dátum toho, kto kapitolu vecne skontroloval („MUDr. X Y · 2026-10-20“); „—“ = zatiaľ nikto.
- ŠTRUKTÚRA (§2.0): pod KAŽDÝM nadpisom najprv aspoň jedna veta úvodu (čo sekcia rieši, podľa čoho sa delí),
  až potom box/tabuľka/obrázok/odrážky/podnadpis; jedno kritérium na úroveň, vetvy sa neprekrývajú a pokrývajú celok.
- PRIORITY (§2.0, bod 5): hlavná myšlienka sekcie je povedaná prvá, nosné fakty v poradí, v akom z nej vyplývajú,
  doplnky až za nimi. Každá sekcia ## má za úvodným textom > [!JADRO] – hlavnú myšlienku heslovite (≤ 40 slov).
- OKRAJ (§5.3): KLINIKA, POZOR, ZAPAMATAJ a JADRO idú vždy na okraj (bez tabuliek a obrázkov), LAB do 50 slov;
  MECH, REG a CHEM ostávajú v texte. Nová skratka = riadok v chapters/_skratky.md (build ju vysvetlí na okraji).
- Každý dej má štyri vrstvy: [!MECH] · [!REG] · [!LAB] · [!KLINIKA]; chemické východisko je [!CHEM].
- Povinné: 1 kaskáda, 1 regulačná slučka (⟳ + riadiaci krok), 1 rozlišovacia tabuľka, ≥ 3× KLINIKA,
  bilancia, nevratné kroky, prepnutie stavu (sýtosť × hladovanie × záťaž), súhrn, ≥ 5 otázok,
  zdroje (≥ 3 na sekciu, aspoň jeden z posledných 5 rokov).
- POHĽAD (§2.5): šesť otázok na každú dráhu (načo je, kde a kedy beží, akými krokmi, čo ju riadi, ako sa
  zmeria, čo sa stane, keď krok vypadne). Kmeňový mechanizmus z inej kapitoly: krátke pripomenutie jadra
  (1–3 vety alebo chain) + xref domov, nie druhý plný výklad. Skupiny cez prototyp a odchýlky.
  Tkanivová kapitola = _TEMPLATE_tkanivo.md.
- SCHÉMY (§5.2): každá dráha má súhrnnú schému poskladanú zo vzorcov (chapters/fig/fig-*.svg, značky <mol>, <rx>,
  <vplyv>; vzor chapters/fig/_vzor-schema.svg), každá sekcia o premene látky má schému. Molekula, ktorá ešte nie
  je v chapters/fig/mol/: nájdi štruktúru → prepíš do hlavičky → nakresli → node tools/vzorce.js. Koenzýmy žlté,
  aktivácia zelená ↑, inhibícia červená ↓, plná šípka = premena, prerušovaná = vplyv, nevratný krok hrubo.
  Náhľad: node tools/schema.js → pracovne/nahlad_schem.html.
  ROZKLIKNUTIE: kde schéma zjednodušuje (skupina látok jedným uzlom, koenzým skratkou, krok bez medzistupňa),
  dá sa to otvoriť – značka s rk="id" + <vyrez id="id" h="…" nadpis="…">…</vyrez> rozbalí podrobnosti pod schémou,
  href="#fig-nazov" (alebo "NN_subor#fig-nazov") skočí na schému, kde je vec nakreslená celá. Vzor: _vzor-schema.svg.
- Build (node tools/build.js) povinné prvky spočíta a chýbajúce ohlási.

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

## N.1 Východisko a mapa

Načo dej je (čo by organizmu chýbalo bez neho), kde beží (tkanivo, kompartment bunky) a kedy (stav
organizmu). Kde kapitola stojí na mape metabolizmu a čo z predošlých kapitol potrebuje (krátke
pripomenutie + xref). Mapa kapitoly: podľa čoho sa téma delí a na aké hlavné vetvy (pri > 3 vetvách aj
vlastná SVG schéma mapy).

> [!JADRO]
> Hlavná myšlienka sekcie heslovite: **dráha** = substrát → produkt; načo, kde, kedy. Najviac 40 slov, nič nové.

Krátke pripomenutie kmeňového mechanizmu z predošlej kapitoly (1–3 vety, vlastnými slovami) a odkaz domov:
[→ M.K Názov sekcie](MM_subor#sec-M-K).

<!-- nepovinné: hlavné vetvy kapitoly vedľa seba, ak sú rovnocenné a krátke (inak tabuľka alebo SVG mapa) -->
```cols
**Vetva A** – čo rieši a čím sa od ostatných líši.

---

**Vetva B** – …
```

> [!CHEM]
> Chemické východisko, bez ktorého dej nedáva zmysel: štruktúra substrátu, typ väzby, typ reakcie.

## N.2 Priebeh

Úvodná veta: na aké fázy sa dej delí a podľa čoho (napr. investícia energie × zisk energie).

> [!JADRO]
> Jadro každej ďalšej sekcie – rovnako za jej úvodným textom (N.3 až N.7).

```chain
substrát → enzým (kofaktor) → medziprodukt → enzým → **produkt**
```

> [!MECH]
> Kroky za sebou; každá šípka má činiteľa – enzým, kofaktor, prenášač (CLAUDE.md §2.1).
> Pri každom kroku „prečo“ (prečo sa fosforyluje, prečo izomerizuje). **Nevratné kroky** sú označené.

> [!POZOR]
> Čo sa v tomto deji pletie (dva podobné enzýmy, podobné názvy, smer reakcie) a podľa čoho sa to rozlíši.

<!-- Súhrnná schéma dráhy: všetky metabolity vzorcom (názov + skratka), šípky s enzýmami, koenzýmy, nevratné kroky.
     V texte sa na ňu odkazuje kotvou = názov súboru: [→ Obr. N.1](#fig-nazov). -->
![Obr. N.1 — Titulok. Čo si má čitateľ na schéme všimnúť.](fig/fig-nazov.svg)

## N.3 Bilancia

Úvodná veta: čo do deja vstupuje, čo z neho vychádza a čo to bunku stojí alebo jej prináša.

| Vstup | Výstup | ATP / GTP | Redukované koenzýmy | Predpoklad výpočtu |
| --- | --- | --- | --- | --- |
| … | … | … | … | … |

<!-- Revízia [R]: aspoň jedna na kapitolu, na mieste, kde sa staršie poznanie naozaj líši (bilancia, názov enzýmu,
     diagnostický prah) – nie nutne tu. Štítok je len „Revízia — …“, bez zmienky, voči čomu (CLAUDE.md §4.2). -->
> [!IMPORTANT]
> **[R] Revízia — čoho sa týka**
> **Kedysi:** staršie číslo, názov alebo prah – a kde ho študent ešte stretne.
> **Dnes:** platný stav a prečo sa zmenil.

## N.4 Regulácia

Úvodná veta: ktoré kroky dej riadia a prečo práve tie (nevratné, na začiatku, na vetvení).

> [!REG]
> Riadiaci krok → signál (alostéria, kovalentná modifikácia, hormón, množstvo enzýmu) → čo sa zmení a prečo
> to organizmu v danom stave dáva zmysel.

> [!ZAPAMATAJ]
> Kde sa ten istý princíp alebo signál vracia v inej látke. [→ M.K Názov sekcie](MM_subor#sec-M-K)

Regulačná slučka (⟳, Obr. N.x):

![Obr. N.x — Regulácia … .](fig/fig-regulacia-….svg)

<!-- Schémy vždy ako vlastné SVG v chapters/fig/, nikdy ako textový blok ```diagram. Regulácia: zelené „↑ látka“
     a červené „↓ látka“ pri enzýme (akt=, inh= v <rx>), vzdialené vzťahy prerušovanou čiarou (<vplyv>),
     ⟳ v strede slučky, riadiaci krok hrubou šípkou (typ="nevratna"). CLAUDE.md §5.2. -->

Ako sa dej prepína podľa stavu organizmu (povinné, ak sa podľa stavu mení; CLAUDE.md §2.2):

| Stav | Hormonálny signál | Riadiaci enzým | Smer toku | Prečo |
| --- | --- | --- | --- | --- |
| po jedle | … | … | … | … |
| nalačno | … | … | … | … |
| hladovanie / záťaž | … | … | … | … |

## N.5 Napojenia a rozdiely medzi tkanivami

Úvodná veta: odkiaľ substrát prichádza, kam produkt odchádza a v čom sa dej líši podľa tkaniva
(výbava enzýmov a transportérov, kompartment, kyslík).

<!-- nepovinné: rozvetvenie – jeden metabolit, viac osudov; riadok „Názov | čo rozhodne a kam to vedie“ -->
```fork
Osud A | kedy (stav organizmu, tkanivo) → kam vedie [→ M.K Názov sekcie](MM_subor#sec-M-K)
Osud B | …
```

<!-- Rozlišovacia tabuľka dvoch vecí, ktoré sa pletú (povinná, CLAUDE.md §2.2). Farebné stĺpce sú nepovinné. -->
| | Tkanivo A {zel} | Tkanivo B {fial} |
| --- | --- | --- |
| Izoenzým / transportér | … | … |
| Čo z toho plynie | … | … |

## N.6 Poruchy

Úvodná veta: čo sa stane, keď krok vypadne – čo sa hromadí pred blokom, čo chýba za ním a kam substrát ujde.

| Blok (enzým, kofaktor) | Hromadí sa | Chýba | Vedľajšia cesta | Laboratórny nález | Klinika |
| --- | --- | --- | --- | --- | --- |
| … | … | … | … | … | … |

## N.7 Laboratórium a klinika

Úvodná veta: ktorý parameter dej odráža a kde sa s ním lekár stretne.

> [!LAB]
> Parameter, materiál a metóda – s jednotkou, referenčným rozpätím (a jeho zdrojom) a rozhodovacím prahom.

> [!KLINIKA]
> Od bloku k pacientovi (príznak, laboratórny nález s normou) · od nálezu k bloku (čo znamená zvýšená
> alebo znížená hodnota) · čo z toho plynie pre diagnostiku a liečbu (CLAUDE.md §2.5, bod 9).

## N.8 Súhrn a rýchle rozlíšenie

Úvodná veta: súhrn sleduje tú istú mapu ako N.1.

| Dej | Kde a kedy | Riadiaci krok | Čo ho zapína / vypína | Porucha |
| --- | --- | --- | --- | --- |
| … | … | … | … | … |

## N.9 Otázky na zopakovanie

```quiz
? Otázka typu „prečo“, nie „vymenuj“?
= Odpoveď s mechanizmom a odkazom späť do textu. [→ N.2 Priebeh](#sec-N-2)
? Otázka, ktorá spája túto kapitolu s predošlou látkou?
= Odpoveď s odkazom do oboch kapitol.
? Prípad: pacient s …, v laboratóriu … – kde je blok a prečo?
= Mechanizmus od nálezu späť k enzýmu.
```

## N.10 Zdroje

**Učebnice (kontrola faktov)** — len prečítané (CLAUDE.md §1.3)

- Autor A. a kol.: *Názov učebnice*, vydanie, miesto: vydavateľ, rok. ISBN ….

**Názvoslovie, odporúčania a prehľady**

- Autor A. et al.: Názov. *Časopis* rok;ročník:strany. [doi:…](https://doi.org/…)
- NCBI Bookshelf: [Názov](https://www.ncbi.nlm.nih.gov/books/NBK…/)

**Obrázky**

Autor, licencia a odkaz na zdroj sú pri každom obrázku; súhrn je v registri `ZDROJE-OBRAZKOV.md`.
