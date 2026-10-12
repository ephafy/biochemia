---
num: 1
title: Základné výpočty, štruktúry a reakcie biomolekúl
part: Lekárska biochémia
crumb: Základy: štruktúry, reakcie, výpočty
eyebrow: Základy · jazyk biochémie
standfirst: Legenda k mape metabolizmu. Biochémia opisuje telo tromi jazykmi – štruktúrou (čo molekula je), reakciou (čo sa s ňou deje a kam to pôjde) a číslom (koľko jej je). Kapitola ich preberá v tomto poradí, od funkčnej skupiny po hodnotu, ktorú vydá laboratórium.
deps: —
next: [→ 2 Úvod do metabolizmu a princípy jeho regulácie](02_uvod_regulacia_metabolizmu)
reviewed: —
---

## 1.1 Východisko a mapa: tri jazyky biochémie

Každá ďalšia kapitola tejto knihy hovorí o dráhe: molekula sa krok za krokom mení, niečo ten dej riadi a laboratórium z neho zachytí jedno číslo. Aby sa dráha dala **čítať**, a nie memorovať, treba ovládať tri jazyky, ktorými je zapísaná. Podľa nich je kapitola rozdelená na tri časti: štruktúry ([→ 1.2](#sec-1-2), [→ 1.3](#sec-1-3)), reakcie a ich energia ([→ 1.4](#sec-1-4), [→ 1.5](#sec-1-5)) a čísla ([→ 1.6](#sec-1-6), [→ 1.7](#sec-1-7)). Samotnú mapu metabolizmu – kde ktorá dráha leží a čo ju prepína – prinesie až [→ 2.2 Mapa metabolizmu: tri stupne, tri križovatky](02_uvod_regulacia_metabolizmu#sec-2-2); táto kapitola je jej legendou.

> [!JADRO]
> **Štruktúra** (funkčná skupina, väzba) → určuje **reakciu** (typ, trieda enzýmu, ΔG) → tá mení **koncentráciu**, ktorú meriame. Kto pozná skupinu, vie predpovedať reakciu; kto pozná ΔG, vie smer.

| Jazyk | Otázka, na ktorú odpovedá | Čím sa zapisuje | Kde v kapitole |
| --- | --- | --- | --- |
| **štruktúra** | čo je to za molekulu a ako sa správa vo vode | funkčné skupiny, väzby, vzorec | 1.2, 1.3 |
| **reakcia** | čo sa s molekulou stane, kto to urobí a či to pôjde samo | typ reakcie, trieda enzýmu, ΔG | 1.4, 1.5 |
| **číslo** | koľko jej je a ako sa to zistí | koncentrácia, pH, absorbancia, aktivita enzýmu | 1.6, 1.7 |

Tie tri jazyky na seba nadväzujú ako jedna kaskáda, a preto sa oplatí čítať ich v tomto poradí:

```chain
funkčná skupina (napr. aldehyd glukózy) → reaktivita (oxiduje sa, tvorí poloacetál, viaže sa na aminoskupinu)
→ enzým určitej triedy reakciu urýchli (kináza, dehydrogenáza, hydroláza) → ΔG rozhodne o smere
→ zmení sa koncentrácia látky v krvi → **laboratórium ju zmeria** (fotometer, kalibračná krivka)
```

## 1.2 Funkčné skupiny a väzby

Biomolekula je uhlíková kostra, na ktorej sedí niekoľko málo druhov funkčných skupín; tie rozhodujú, či sa molekula rozpustí vo vode, či nesie náboj a s čím zreaguje. Sekcia ide od najmenšieho k väčšiemu: najprv samotné skupiny, potom kovalentné väzby, ktorými sa stavebné jednotky spájajú, a nakoniec slabé interakcie, ktoré dávajú veľkým molekulám tvar.

> [!JADRO]
> Málo **skupín** (–OH, C=O, –COO⁻, –NH₃⁺, fosfát, –SH) → málo **väzieb** (ester, amid, glykozid, anhydrid, tioester). Všetky vznikajú odštiepením vody a štiepia sa vodou; líšia sa energiou hydrolýzy.

### 1.2.1 Funkčné skupiny a ich náboj pri pH 7

Podľa toho, ako sa skupina správa vo vode pri pH okolo 7, sa delia na tri druhy: polárne bez náboja, kyslé (nesú záporný náboj) a zásadité (nesú kladný náboj).

| Skupina | Správanie pri pH ≈ 7 | Kde ju stretneš | Čo z toho plynie |
| --- | --- | --- | --- |
| hydroxyl –OH | bez náboja, tvorí vodíkové mostíky | sacharidy, glycerol, serín, cholesterol | rozpustnosť vo vode; miesto pre ester, fosfát a glykozidovú väzbu |
| karbonyl C=O (aldehyd, ketón) | bez náboja, reaktívny uhlík | glukóza (aldehyd), fruktóza (ketón), pyruvát | oxidácia, redukcia, uzavretie kruhu, väzba na aminoskupinu |
| karboxyl –COOH | slabá kyselina → **–COO⁻** | mastné kyseliny, aminokyseliny, laktát, citrát | názvy s koncovkou -át (laktát, nie kyselina mliečna) |
| aminoskupina –NH₂ | slabá zásada → **–NH₃⁺** | aminokyseliny, aminocukry, sfingozín | kladný náboj; miesto pre amidovú väzbu |
| fosfát | anión (ester nesie dva záporné náboje) | glukóza-6-fosfát, nukleotidy, fosfolipidy | nabitá molekula neprejde membránou |
| tiol –SH | bez náboja, ľahko sa oxiduje | cysteín, koenzým A, glutatión | disulfidový mostík; tioester s karboxylom |

> [!CHEM]
> **Prečo na náboji záleží**
> Lipidová dvojvrstva prepustí len malé molekuly, ktoré sa aspoň trochu rozpúšťajú v tuku; ión cez ňu sám neprejde. Bunka to využíva: keď hexokináza zavesí na glukózu fosfát, vznikne glukóza-6-fosfát s dvoma zápornými nábojmi, pre ktorý membrána nemá prenášač – glukóza je „uväznená“ a ostáva bunke. Rovnaký trik (fosfát alebo koenzým A ako značka „neopúšťaj bunku“) sa opakuje v celom metabolizme. [→ 4.2.1 Investičná fáza: z hexózy dve triózy](04_metabolizmus_glukozy#sub-4-2-1)

### 1.2.2 Väzby medzi stavebnými jednotkami

Väzby, ktorými sa jednotky spájajú do väčších molekúl, majú spoločný pôvod: formálne vznikajú tak, že dve skupiny odštiepia vodu (*kondenzácia*), a zanikajú tak, že ich voda rozštiepi (*hydrolýza*). Líšia sa tým, ktoré dve skupiny spájajú – a podľa toho aj tým, koľko energie hydrolýza uvoľní.

| Väzba | Čo spája | Príklad | Štiepi ju (hydroláza) | Energia hydrolýzy |
| --- | --- | --- | --- | --- |
| **esterová** | karboxyl + hydroxyl | triacylglycerol | lipáza, esteráza | nízka |
| **fosfoesterová** | fosfát + hydroxyl | glukóza-6-fosfát, nukleotid; dvojitá (fosfodiester) v DNA a vo fosfolipidoch | fosfatáza, nukleáza | nízka |
| **amidová (peptidová)** | karboxyl + aminoskupina | bielkovina; mastná kyselina na sfingozíne (ceramid) | peptidáza (proteáza) | nízka |
| **glykozidová** | poloacetálový hydroxyl cukru + hydroxyl (O-glykozid) alebo dusík (N-glykozid) | maltóza, glykogén; báza na ribóze | glykozidáza | nízka |
| **tioesterová** | karboxyl + tiol | acetyl-CoA, acyl-CoA | tioesteráza | **vysoká** |
| **anhydridová** | dve kyseliny (fosfát + fosfát, fosfát + karboxyl) | ATP; 1,3-bisfosfoglycerát | ATPáza, pyrofosfatáza | **vysoká** |

Príkladom je glykozidová väzba maltózy (Obr. 1.1). Enzým na ňu pripojí vodu a uvoľní dve glukózy; reakcia beží ochotne a bez dodania energie. Opačný smer – postaviť väzbu – už samotným odštiepením vody v bunke nejde: jedna z jednotiek musí byť najprv *aktivovaná*, teda naviazaná väzbou s vysokou energiou ([→ 1.4.3](#sub-1-4-3)).

![Obr. 1.1 — Hydrolýza glykozidovej väzby. Modro je kyslík väzby α(1→4) v maltóze a hydroxyly, ktoré po pripojení vody ostanú na oboch glukózach. Všimni si, že kyslík väzby patrí anomérnemu uhlíku C1 ľavej glukózy – pravá glukóza má svoj C1 voľný.](fig/fig-glykozidova-vazba.svg)

> [!POZOR]
> **Fosfoester × fosfoanhydrid.** Fosfát na hydroxyle cukru (glukóza-6-fosfát) je ester s nízkou energiou. Fosfát na fosfáte (ATP) alebo na karboxyle (1,3-bisfosfoglycerát) je anhydrid s vysokou energiou. Krúžok s P vyzerá v schéme rovnako – rozhoduje, na čom visí.

### 1.2.3 Nekovalentné interakcie

Okrem kovalentných väzieb držia biomolekuly pohromade štyri druhy slabých interakcií; rozlišujú sa podľa toho, čo sa priťahuje. Jednotlivo sú slabé a ľahko sa rozpájajú, no je ich veľa – spolu určujú tvar bielkoviny, držia pohromade membránu a rozhodujú, ktorý substrát sa zmestí do enzýmu.

- **Vodíkový mostík** – vodík na O alebo N a voľný elektrónový pár susedného O alebo N → rozpustnosť cukrov, α-helix, párovanie báz.
- **Iónová interakcia** – opačné náboje (–COO⁻ a –NH₃⁺) → väzba substrátu, stabilita bielkoviny; mení sa s pH.
- **Hydrofóbny efekt** – nepolárne časti sa vo vode zhlukujú, aby rušili čo najmenej vodíkových mostíkov vody → jadro bielkoviny, lipidová dvojvrstva, micela.
- **Van der Waalsove sily** – tesný dotyk povrchov, ktoré do seba zapadajú → presnosť, s akou enzým rozpozná substrát.

> [!ZAPAMATAJ]
> Teplo a extrémne pH rozbíjajú slabé interakcie, nie peptidové väzby. Preto denaturovaný enzým stratí tvar aj aktivitu, hoci jeho reťazec ostal celý – na tom stojí vplyv pH a teploty na aktivitu enzýmov. [→ 2.4.3 Prostredie: pH a teplota](02_uvod_regulacia_metabolizmu#sub-2-4-3)

## 1.3 Štyri rodiny biomolekúl

Sacharidy, lipidy, bielkoviny a nukleové kyseliny sa na prvý pohľad nepodobajú, no stavané sú podľa jedného princípu: malá jednotka, jeden druh väzby, väčší celok. Delenie v tejto sekcii ide preto podľa stavebnej jednotky; pri každej rodine je odkaz na kapitolu, kde má svoj metabolizmus.

> [!JADRO]
> **Jednotka → väzba → celok**: monosacharid → glykozidová → polysacharid · mastná kyselina + glycerol → esterová → triacylglycerol · aminokyselina → peptidová → bielkovina · nukleotid → fosfodiesterová → nukleová kyselina.

| Rodina | Jednotka | Väzba | Celok | Hlavná úloha |
| --- | --- | --- | --- | --- |
| sacharidy | monosacharid | glykozidová | disacharid, polysacharid | rýchle palivo a jeho zásoba, stavba, rozpoznávanie |
| lipidy | mastná kyselina + alkohol (glycerol, sfingozín) | esterová, amidová | triacylglycerol, fosfolipid, sfingolipid | zásoba energie, membrány, signály |
| bielkoviny | aminokyselina | peptidová | peptid, bielkovina | enzýmy, prenášače, stavba, signály |
| nukleové kyseliny | nukleotid | fosfodiesterová | RNA, DNA | informácia; voľné nukleotidy nesú energiu a signál |

### 1.3.1 Sacharidy

Sacharidy sú aldehydy alebo ketóny s viacerými hydroxylmi. Ich chémia sa dá odvodiť z dvoch vecí: z reaktívneho karbonylu a z toho, že hydroxylov je veľa a každý môže niesť väzbu. Ďalej sa delia podľa počtu jednotiek na monosacharidy, disacharidy a polysacharidy.

**Monosacharidy.** Podľa karbonylu sú to *aldózy* (glukóza, galaktóza, manóza, ribóza) alebo *ketózy* (fruktóza), podľa počtu uhlíkov triózy až hexózy. Označenie D- hovorí, že hydroxyl na predposlednom uhlíku smeruje vo Fischerovej projekcii doprava; cukry v ľudskom tele sú takmer všetky D-radu. Manóza sa od glukózy líši len polohou hydroxylu na C2, galaktóza na C4 – sú to jej *epiméry*. Fruktóza má rovnaký sumárny vzorec ako glukóza, ale karbonyl na C2.

> [!MECH]
> **Uzavretie kruhu a anoméry**
> Karbonyl glukózy na C1 reaguje s hydroxylom na C5 tej istej molekuly → vznikne šesťčlenný kruh (*pyranóza*) a z C1 sa stane nové stereocentrum, **anomérny uhlík**. Jeho hydroxyl sa postaví buď pod rovinu kruhu (α), alebo nad ňu (β). V roztoku sú obe formy v rovnováhe cez nepatrné množstvo otvorenej formy – **mutarotácia**; prevažuje β-anomér (≈ 62 %), lebo jeho hydroxyl menej zavadzia.

![Obr. 1.2 — Tri formy glukózy v roztoku. Otvorená forma je zapísaná Fischerovou projekciou, kruhové Haworthovým vzorcom. Modro: aldehyd na C1 a hydroxyl na C5, ktoré sa spoja; v kruhu je modrý hydroxyl anomérneho uhlíka. Len otvorená forma má voľný aldehyd – všetky reakcie „redukujúceho cukru“ idú cez ňu.](fig/fig-glukoza-formy.svg)

Na anomérnom uhlíku stojí aj pojem **redukujúci sacharid**: kým je anomérny uhlík voľný (nie je vo väzbe), kruh sa môže otvoriť, aldehyd sa oxiduje na karboxyl a pritom niečo iné redukuje – napríklad meďnatý ión v dôkazových reakciách ([→ 1.7.4](#sub-1-7-4)).

**Disacharidy** sú dve jednotky spojené glykozidovou väzbou; jej názov hovorí, ktorý anomér ktorého cukru sa viaže na ktorý uhlík druhého.

| Disacharid | Jednotky · väzba | Redukuje? | Kde sa berie |
| --- | --- | --- | --- |
| maltóza | 2 × glukóza · α(1→4) | áno | vzniká pri trávení škrobu |
| izomaltóza | 2 × glukóza · α(1→6) | áno | ostáva z miest, kde sa škrob a glykogén vetvia |
| laktóza | galaktóza + glukóza · β(1→4) | áno | mlieko |
| sacharóza | glukóza + fruktóza · α(1→2)β | **nie** | repný a trstinový cukor |

> [!POZOR]
> **Sacharóza neredukuje**, lebo vo väzbe sú anomérne uhlíky oboch cukrov – ani jeden kruh sa nemôže otvoriť. Až po rozštiepení na glukózu a fruktózu dá dôkaz na redukujúce cukry pozitívny výsledok.

**Polysacharidy** sa líšia typom väzby a vetvením, a z toho plynie ich úloha. Škrob je zmes nerozvetvenej amylózy (13–20 %, väzby α1→4) a rozvetveného amylopektínu (80–87 %; vetva väzbou α1→6 vychádza z úsekov dlhých 24–30 glukóz). Glykogén je stavaný rovnako ako amylopektín, ale vetví sa hustejšie – priemerne po 8–10 glukózach. Hustejšie vetvenie znamená viac koncov: reťazec má jediný redukujúci koniec a veľa neredukujúcich, a práve na nich enzýmy glukózu pridávajú aj odoberajú. Preto vie pečeň z glykogénu uvoľniť glukózu rýchlo ([→ 3.5 Glykogén: stavba a úloha zásoby](03_sacharidy_glykogen#sec-3-5)). Celulóza má väzby β1→4; na ne človek enzým nemá, takže je vlákninou, nie živinou.

**Deriváty** vznikajú úpravou jednej skupiny monosacharidu. Podľa toho, čo sa s ňou stane, sú to:

- **fosfoestery** (glukóza-6-fosfát) – metabolicky aktívna forma cukrov vnútri bunky,
- **kyseliny** – oxidáciou C1 vzniká kyselina glukónová, oxidáciou C6 kyselina glukurónová (viaže na seba látky určené na vylúčenie), oxidáciou oboch koncov kyselina glukárová,
- **alkoholy** – redukciou karbonylu vzniká sorbitol (glucitol),
- **aminocukry** – hydroxyl na C2 nahradí aminoskupina (glukózamín); stavebné jednotky glykozaminoglykánov,
- **deoxycukry** – chýba jeden hydroxyl (2-deoxyribóza v DNA).

Čo z nich bunka robí a prečo, je v [→ 5.7 Cukor ako stavebný materiál: glukuronát a glykokonjugáty](05_pentozy_fruktoza_galaktoza#sec-5-7).

> [!KLINIKA]
> **Glykácia – keď aldehyd reaguje bez enzýmu**
> Voľný aldehyd glukózy sa sám viaže na aminoskupiny bielkovín: najprv vratne (Schiffova báza), po prešmyku nevratne (ketoamín). Čím viac glukózy a čím dlhšie, tým viac glykovanej bielkoviny. Na hemoglobíne (koncový valín β-reťazca) sa to meria ako **HbA1c** – odráža glykémiu za posledné 2–3 mesiace. Prah pre diabetes: ≥ 48 mmol/mol (6,5 %; ADA 2026). Pri hemolýze vychádza falošne nízko – erytrocyt nežije dosť dlho.

### 1.3.2 Lipidy

Lipidy sú rodina podľa správania, nie podľa stavby: do vody nejdú, do organických rozpúšťadiel áno. Skoro všetky však obsahujú mastnú kyselinu, a tak výklad začína ňou a pokračuje k tomu, čo z nej vzniká; podľa toho, čo je na mastnú kyselinu naviazané, je lipid zásobný (nepolárny) alebo membránový (má polárnu hlavu).

**Mastné kyseliny (MK)** sú dlhé uhľovodíkové reťazce s karboxylom na konci. Zápis *18:2 Δ9,12* znamená 18 uhlíkov a dve dvojité väzby, ktoré sa začínajú na 9. a 12. uhlíku počítané od karboxylu; rad ω (omega) počíta polohu poslednej dvojitej väzby od metylového konca.

| Mastná kyselina | Zápis | Rad | Poznámka |
| --- | --- | --- | --- |
| palmitová | 16:0 | nasýtená | konečný produkt syntézy mastných kyselín |
| stearová | 18:0 | nasýtená | |
| palmitoolejová | 16:1 Δ9 | ω-7 | |
| olejová | 18:1 Δ9 | ω-9 | najbežnejšia nenasýtená |
| linolová | 18:2 Δ9,12 | **ω-6** | esenciálna |
| α-linolénová | 18:3 Δ9,12,15 | **ω-3** | esenciálna |
| arachidónová | 20:4 Δ5,8,11,14 | ω-6 | východisko eikozanoidov |

Prirodzené dvojité väzby majú konfiguráciu *cis*: reťazec sa v nich zalomí, molekuly sa nedajú tesne poskladať → nižšia teplota topenia a tekutejšia membrána. Čiastočným stužovaním olejov (adícia vodíka na dvojité väzby) vznikajú aj *trans* izoméry s rovným reťazcom, ktoré sa správajú ako nasýtené; ich príjem v strave sa spája s viacerými ochoreniami. Dvojitá väzba je však aj miesto, kde reťazec napadne radikál kyslíka; reakcia sa šíri z molekuly na molekulu (*peroxidácia lipidov*) a membrána sa tým poškodí ([→ 5.3](05_pentozy_fruktoza_galaktoza#sec-5-3)).

> [!IMPORTANT]
> **[R] Revízia — ktoré mastné kyseliny sú esenciálne**
> **Kedysi:** ako esenciálne sa uvádzali tri – linolová, linolénová a arachidónová.
> **Dnes:** nevyhnutné v strave sú dve, **linolová (ω-6)** a **α-linolénová (ω-3)**. Človek nevie vložiť dvojitú väzbu ďalej než za 9. uhlík smerom k metylovému koncu, preto si ich nevyrobí. Arachidónovú si z linolovej vyrobí sám – chýba až vtedy, keď chýba linolová. Podrobne [→ 12 Nenasýtené mastné kyseliny a eikozanoidy](12_nenasytene_mk_eikozanoidy).

**Zložené lipidy** vznikajú naviazaním mastných kyselín na alkohol; delia sa podľa toho, ktorý alkohol to je a čo ďalšie nesie.

| Lipid | Stavba | Väzby | Vzťah k vode | Na čo je · kde v knihe |
| --- | --- | --- | --- | --- |
| triacylglycerol (TAG) | glycerol, na každom hydroxyle jedna MK | 3× ester | nepolárny | zásobný tuk, ukladá sa bez vody · kap. 8, 9 |
| glycerolfosfolipid | glycerol + 2 MK + fosfát, na ňom alkohol (serín, etanolamín, cholín alebo inozitol) | 2× ester, fosfodiester | amfipatický | membrány · kap. 9 |
| plazmalogén | ako fosfolipid, na C1 nenasýtený alkohol | éter namiesto esteru | amfipatický | membrány srdca a nervov · kap. 9 |
| sfingomyelín | sfingozín + MK (= ceramid) + fosfocholín | amid, fosfodiester | amfipatický | myelín · kap. 9 |
| glykolipid | ceramid + cukor (cerebrozid) alebo oligosacharid (gangliozid) | amid, glykozidová | amfipatický | povrch buniek · kap. 9 |
| cholesterol | steránové jadro s jedným hydroxylom | — | slabo polárny | membrány, východisko steroidov · kap. 10 |
| ester cholesterolu | cholesterol + MK | ester | nepolárny | zásobná a transportná forma · kap. 10, 11 |

*Amfipatický* znamená, že molekula má polárnu hlavu aj nepolárne chvosty – vo vode sa preto sama usporiada do dvojvrstvy. Pokračovanie: [→ 8.1 Východisko a mapa: reťaz a jej nosiče](08_lipidy_mastne_kyseliny#sec-8-1) a [→ 10 Metabolizmus cholesterolu a žlčových kyselín](10_cholesterol_zlcove_kyseliny).

### 1.3.3 Aminokyseliny a bielkoviny

Bielkoviny sú reťazce dvadsiatich druhov aminokyselín. Pre metabolizmus sú dôležité dve veci: ako sa aminokyselina správa ako kyselina a zásada (od toho závisí náboj bielkoviny) a ako z poradia aminokyselín vznikne tvar.

Aminokyselina má na α-uhlíku aminoskupinu, karboxyl, vodík a bočný reťazec R; v bielkovinách sú L-aminokyseliny (glycín je výnimka, nemá stereocentrum). Karboxyl odovzdáva protón okolo pH 2, aminoskupina ho drží až do pH 9–10. Pri pH 7 je preto karboxyl záporný a aminoskupina kladná zároveň – **obojaký ión** (*zwitterion*; Obr. 1.3). Hodnota pH, pri ktorej je súčet nábojov molekuly nulový, je **izoelektrický bod (pI)**; v elektrickom poli sa vtedy molekula nepohybuje.

![Obr. 1.3 — Náboj aminokyseliny podľa pH. Modro sú skupiny, ktoré práve odovzdávajú protón. Pri pH 7 je alanín obojaký ión: nesie dva náboje, ale ich súčet je nula.](fig/fig-alanin-naboj.svg)

Náboj bielkoviny určujú bočné reťazce. Podľa nich sa aminokyseliny delia na nepolárne, polárne bez náboja, kyslé (aspartát, glutamát; pri pH 7 záporné) a zásadité (lyzín, arginín; kladné). Histidín stojí na hranici: jeho bočný reťazec má pK ≈ 6, teda blízko fyziologického pH, takže protón ľahko prijme aj odovzdá – preto je častý v aktívnych miestach enzýmov a preto bielkoviny tlmia zmeny pH.

**Peptidová väzba** spája karboxyl jednej aminokyseliny s aminoskupinou ďalšej. Má čiastočne charakter dvojitej väzby: neotáča sa a atómy okolo nej ležia v jednej rovine – reťazec sa môže ohýbať len na α-uhlíkoch. Peptid nemusí byť spojený len cez α-skupiny: v glutatióne (γ-glutamyl-cysteinyl-glycín) je glutamát naviazaný karboxylom bočného reťazca.

Tvar bielkoviny vzniká v štyroch úrovniach, z ktorých každá stojí na inom druhu väzby:

```chain
primárna štruktúra (poradie aminokyselín; peptidové väzby)
→ sekundárna (α-helix, β-skladaný list; vodíkové mostíky kostry reťazca)
→ terciárna (priestorové zloženie reťazca; hydrofóbny efekt, iónové interakcie, disulfidové mostíky bočných reťazcov)
→ kvartérna (spojenie viacerých reťazcov – podjednotiek) → **funkčná bielkovina**
```

*Denaturácia* je strata priestorovej štruktúry bez pretrhnutia peptidových väzieb – primárna štruktúra ostáva, funkcia sa stráca.

### 1.3.4 Nukleotidy

Nukleotid má tri časti a každá je pripojená inou väzbou; podľa toho, koľko fosfátov nesie a s čím je spojený, slúži ako stavebná jednotka, nosič energie, signál alebo koenzým. Tu ide len o stavbu; energiu a prenos elektrónov rozoberá [→ 7.2 ATP: obeživo, nie zásoba](07_biologicke_oxidacie#sec-7-2) a [→ 7.3.3 Prenášače vodíka: NAD⁺, flavíny, koenzým Q](07_biologicke_oxidacie#sub-7-3-3), vznik a rozklad nukleotidov [→ 13 Metabolizmus nukleotidov](13_nukleotidy).

- **Báza** – purín (adenín, guanín) alebo pyrimidín (cytozín, uracil, tymín).
- **Pentóza** – ribóza (RNA) alebo 2-deoxyribóza (DNA); s bázou ju spája N-glykozidová väzba → *nukleozid*.
- **Fosfát** – esterovo na 5′-hydroxyle pentózy → *nukleotid*.

Ďalšie fosfáty sa pripájajú už anhydridovo, fosfát na fosfát. ATP má teda jednu esterovú väzbu s nízkou energiou a dve anhydridové s vysokou ([→ 1.5](#sec-1-5)); v bunke je viazaný s Mg²⁺. Cyklické nukleotidy cAMP a cGMP majú jeden fosfát naviazaný na 3′- aj 5′-hydroxyl tej istej ribózy a fungujú ako signál vnútri bunky.

Z nukleotidov sú postavené aj koenzýmy, ktoré v dráhach prenášajú elektróny alebo skupiny; každý obsahuje vitamín, ktorý si telo nevyrobí.

| Koenzým | Vitamín | Čo prenáša | Kde najmä |
| --- | --- | --- | --- |
| NAD⁺ / NADH | B₃ (niacín) | dva elektróny a protón | oxidácia živín → dýchací reťazec |
| NADP⁺ / NADPH | B₃ (niacín) | dva elektróny a protón | redukčné syntézy tukov a sterolov, ochrana bunky pred oxidáciou |
| FAD / FADH₂ | B₂ (riboflavín) | dva vodíky (2 H) | kroky, v ktorých z –CH₂–CH₂– vzniká C=C |
| CoA (koenzým A) | B₅ (pantotenát) | acyl (zvyšok kyseliny) na svojom tiole | citrátový cyklus, β-oxidácia, stavba lipidov |

## 1.4 Reakcie a triedy enzýmov

Metabolizmus má tisíce reakcií, no len niekoľko typov. Sekcia ich najprv zoradí podľa toho, čo sa s molekulou deje (triedy enzýmov), a potom rozoberie dva typy, ktoré nesú väčšinu dráh: prenos elektrónov a stavbu či rozklad väzieb vodou.

> [!JADRO]
> Názov enzýmu = **čo robí**: trieda (EC 1–7) hovorí typ reakcie. Katabolizmus stojí na **oxidáciách** (elektróny → NAD⁺, FAD) a **hydrolýzach**; syntézy na **aktivovaných** jednotkách a ATP.

### 1.4.1 Sedem tried enzýmov

Medzinárodná únia biochémie a molekulárnej biológie (IUBMB) triedi enzýmy podľa typu reakcie, ktorú katalyzujú. Každý enzým má číslo **EC** zo štyroch čísel – trieda, podtrieda, pod-podtrieda a poradie; už prvé číslo teda povie, čo enzým s molekulou urobí.

| EC | Trieda | Čo robí | Ako ju spoznáš v názve | Príklad |
| --- | --- | --- | --- | --- |
| 1 | **oxidoreduktázy** | prenášajú elektróny (vodík) z jednej látky na druhú | dehydrogenáza, oxidáza, reduktáza | laktátdehydrogenáza |
| 2 | **transferázy** | prenášajú skupinu (fosfát, cukor, metyl, aminoskupinu) | kináza, transamináza, fosforyláza | hexokináza |
| 3 | **hydrolázy** | štiepia väzbu vodou | fosfatáza, lipáza, peptidáza, glykozidáza | alkalická fosfatáza |
| 4 | **lyázy** | štiepia väzbu bez vody a bez oxidácie; vzniká alebo zaniká dvojitá väzba | aldoláza, dekarboxyláza, hydratáza | aldoláza |
| 5 | **izomerázy** | prestavia atómy v tej istej molekule | izomeráza, mutáza, epimeráza | glukóza-6-fosfát-izomeráza |
| 6 | **ligázy** | spoja dve molekuly a zaplatia za to štiepením ATP | syntetáza, karboxyláza | pyruvátkarboxyláza |
| 7 | **translokázy** | presúvajú ióny a molekuly cez membránu | pumpa, transportná ATPáza | sodíkovo-draslíková pumpa |

> [!IMPORTANT]
> **[R] Revízia — šesť alebo sedem tried**
> **Kedysi:** šesť tried (oxidoreduktázy až ligázy); tak to uvádza väčšina učebníc vydaných do roku 2018 a tak to môžeš počuť aj na skúške.
> **Dnes:** v auguste 2018 pridala IUBMB siedmu triedu, **translokázy (EC 7)** – enzýmy, ktorých hlavnou úlohou je preniesť ión alebo molekulu „zo strany 1 na stranu 2“ membrány. Viaceré z nich boli predtým zaradené medzi hydrolázy ako ATPázy (EC 3.6.3), hoci štiepenie ATP je len ich pohon, nie účel. Delia sa podľa toho, čo prenášajú (protóny, anorganické katióny, anióny, aminokyseliny a peptidy, sacharidy, ostatné).

Ako triedy vyzerajú na molekulách, ktoré sa vrátia v kapitolách o sacharidoch, ukazuje Obr. 1.4.

![Obr. 1.4 — Štyri triedy enzýmov na známych molekulách. Hore: tá istá glukóza prejde transferázou (fosfát z ATP), hydrolázou (fosfát odštiepený vodou) a izomerázou (prestavba na fruktózu). Dole: oxidoreduktáza presunie dva vodíky z laktátu na NAD⁺. Hrubé šípky sú nevratné kroky – všimni si, že cesta tam a cesta späť idú iným enzýmom.](fig/fig-triedy-enzymov.svg)

Dve veci z obrázka sa budú opakovať v každej dráhe. **Nevratný krok má pre opačný smer vlastný enzým**: fosfát na glukózu dáva kináza (z ATP), preč ho berie fosfatáza (vodou) – nie tá istá reakcia odzadu. A **vratný krok beží tam, kam ho tlačia koncentrácie**: izomeráza ani laktátdehydrogenáza smer neurčujú, len urýchľujú ustálenie rovnováhy. Prečo je to tak, vysvetlí [→ 1.5](#sec-1-5).

> [!POZOR]
> **Podobné názvy, iná reakcia.** *Kináza* prenáša fosfát z ATP (transferáza). *Fosfatáza* ho odštiepi vodou (hydroláza). *Fosforyláza* štiepi väzbu anorganickým fosfátom (transferáza; glykogénfosforyláza). *Syntáza* spája bez ATP, *syntetáza* s ATP (ligáza).

### 1.4.2 Oxidácia a redukcia

Oxidácia je strata elektrónov, redukcia ich prijatie; elektróny sa nestrácajú, takže obe bežia vždy spolu. V organickej molekule sa oxidácia spozná podľa toho, že uhlík **stratí dva vodíky** alebo **získa kyslík**.

```chain
–CH₂– (uhľovodík) → –CH(OH)– (alkohol) → C=O (aldehyd, ketón) → –COO⁻ (kyselina) → **CO₂**
viac vodíka, viac energie na uhlík ⟶ viac kyslíka, energia odovzdaná
```

Z tohto rebríka sa dá vyčítať aj energetická hodnota živín: uhlíky mastnej kyseliny stoja skoro celé na prvom stupni, uhlíky cukru už na druhom a treťom – gram tuku preto nesie viac energie než gram cukru.

> [!MECH]
> **Kam idú elektróny**
> Dehydrogenáza odoberie substrátu dva vodíky a odovzdá ich koenzýmu: NAD⁺ prijme dva elektróny a jeden protón (→ NADH, druhý protón ostane v roztoku), FAD prijme oba vodíky (→ FADH₂). Redukovaný koenzým ich nesie ďalej – NADH a FADH₂ do dýchacieho reťazca, kde z nich vznikne ATP, NADPH do syntéz. Smer určuje *redoxný potenciál*: elektróny tečú od páru s nižším potenciálom (NAD⁺/NADH −0,32 V) k páru s vyšším (O₂/H₂O +0,81 V).

Laktátdehydrogenáza (Obr. 1.4) je vzorový príklad: laktát stratí dva vodíky → pyruvát, NAD⁺ → NADH. Reakcia je vratná a v tkanive bez kyslíka beží opačne – pyruvát prijme vodíky z NADH, aby sa NAD⁺ uvoľnil pre glykolýzu ([→ 4.3.1 Bez kyslíka: vodíky prevezme pyruvát](04_metabolizmus_glukozy#sub-4-3-1)).

> [!LAB]
> **NADH je vidieť.** NADH pohlcuje svetlo s vlnovou dĺžkou 340 nm, NAD⁺ nie. Prírastok alebo úbytok absorbancie pri 340 nm preto priamo ukazuje, ako rýchlo dehydrogenáza pracuje – na tom stojí väčšina enzýmových stanovení v klinickom laboratóriu.

### 1.4.3 Kondenzácia a hydrolýza

Väzby z [→ 1.2.2](#sub-1-2-2) sa stavajú a rúcajú dvoma protismernými typmi reakcií, ktoré sa líšia tým, či potrebujú energiu.

**Hydrolýza** uvoľňuje energiu a beží samovoľne – stačí enzým, ktorý ju urýchli. Preto trávenie nepotrebuje ATP: amyláza, lipáza aj peptidázy sú hydrolázy a štiepia škrob, tuky a bielkoviny len vodou. Esterovú väzbu tuku rozštiepi aj hydroxid: zásaditá hydrolýza sa volá *zmydelnenie* a popri glycerole dáva soli MK – mydlá (sodné sú tuhé, draselné mazľavé).

**Kondenzácia** energiu spotrebúva, takže obyčajným odštiepením vody v bunke neprebehne. Bunka to obchádza: jednotku najprv na účet ATP (alebo UTP) naviaže väzbou s vysokou energiou a až túto *aktivovanú* jednotku pripojí k rastúcej molekule.

| Čo sa stavia | Aktivovaná jednotka | Čím je aktivovaná | Domov |
| --- | --- | --- | --- |
| glykogén | UDP-glukóza | nukleotid (UTP) | kap. 3 |
| zásobné a membránové lipidy | acyl-CoA | tioester (jeho vznik stojí ATP) | kap. 8, 9 |
| nové uhlíkové reťazce (tuky, steroly) | acetyl-CoA | tioester | kap. 8, 10 |

Z toho plynie pravidlo, ktoré platí v celej knihe: **rozklad a stavba tej istej molekuly nikdy nejdú rovnakou cestou odzadu** – rozklad býva hydrolýza alebo oxidácia, stavba ide cez aktivovaný medziprodukt a stojí ATP.

## 1.5 Energia reakcie: kam pôjde a ako ďaleko

O tom, či reakcia pobeží a ktorým smerom, rozhoduje zmena voľnej (Gibbsovej) energie, ΔG. Sekcia najprv povie, čo ΔG znamená, potom ako závisí od koncentrácií, a nakoniec ako bunka pomocou ATP prinúti bežať aj reakcie, ktoré by samy nešli.

> [!JADRO]
> **ΔG < 0** → reakcia beží sama; **ΔG > 0** → nebeží, kým ju nepoháňa iná. Skutočné ΔG závisí od **koncentrácií**. Bunka spriaha nevýhodnú reakciu so štiepením **ATP** – súčet musí byť záporný. ΔG nič nehovorí o rýchlosti.

Reakcia so záporným ΔG uvoľňuje energiu (*exergonická*) a beží samovoľne; reakcia s kladným ΔG energiu vyžaduje (*endergonická*); pri ΔG = 0 je v rovnováhe. Hodnota má dve zložky, ΔG = ΔH − T·ΔS: teplo, ktoré sa uvoľní alebo spotrebuje (ΔH), a zmenu neusporiadanosti (ΔS).

Tabuľky uvádzajú **štandardnú** hodnotu ΔG°′ – pre koncentrácie 1 mol/l a pH 7. Tá je len iným zápisom rovnovážnej konštanty: ΔG°′ = −R·T·ln K (R = 8,31 J·mol⁻¹·K⁻¹). Pri 25 °C zodpovedá každých ≈ 5,7 kJ/mol desaťnásobku v rovnovážnej konštante. V bunke však koncentrácie nie sú 1 mol/l, a preto o smere rozhoduje skutočná hodnota:

```chain
ΔG = ΔG°′ + R·T·ln ([produkty] / [substráty])
veľa substrátu, málo produktu → logaritmus záporný → ΔG klesá → **reakcia beží dopredu**, aj keď ΔG°′ je mierne kladné
```

Z tejto rovnice vyplýva delenie krokov každej dráhy na dva druhy:

| | Vratný krok | Nevratný krok |
| --- | --- | --- |
| ΔG v bunke | blízko nuly | veľmi záporné |
| Smer | podľa pomeru produktu a substrátu – môže sa otočiť | vždy len jeden |
| Opačná dráha | použije ten istý enzým | potrebuje iný enzým (obchádzku) |
| Regulácia | neoplatí sa – tok by sa hneď vyrovnal | **tu bunka dráhu riadi** |
| Príklad | laktát ⇌ pyruvát | glukóza → glukóza-6-fosfát |

**Spriahnutie.** Hodnoty ΔG°′ reakcií, ktoré majú spoločný medziprodukt, sa sčítavajú. Endergonická reakcia preto prebehne, ak ju enzým spojí s dostatočne exergonickou – najčastejšie so štiepením ATP. Bilancia prvého kroku spracovania glukózy:

| Reakcia | ΔG°′ (kJ/mol) |
| --- | --- |
| glukóza + P<sub>i</sub> → glukóza-6-fosfát + H<sub>2</sub>O | +13,8 |
| ATP + H<sub>2</sub>O → ADP + P<sub>i</sub> | −30,5 |
| **súčet: glukóza + ATP → glukóza-6-fosfát + ADP** (hexokináza) | **−16,7** |

Predpoklad výpočtu: štandardné hodnoty (1 mol/l, pH 7); skutočné ΔG v bunke sa od nich líši podľa koncentrácií, znamienko však ostáva. Enzým pritom vodu vôbec nepoužije – fosfát prenesie z ATP priamo na glukózu; rozpis na dve „polreakcie“ je len účtovníctvo.

**Makroergické zlúčeniny.** Že je práve ATP univerzálnou menou, plynie z jeho stredného postavenia: zlúčeniny s ešte zápornejším ΔG°′ hydrolýzy mu vedia fosfát odovzdať (z ADP urobia ATP), zlúčeniny s menej záporným ho od neho prijímajú.

| Skupina | Typ väzby | Príklad | ΔG°′ hydrolýzy (kJ/mol) |
| --- | --- | --- | --- |
| nad ATP – fosfát odovzdávajú | enolfosfát, zmiešaný anhydrid | fosfoenolpyruvát, 1,3-bisfosfoglycerát | zápornejšie než ATP |
| | fosfoguanidín | kreatínfosfát | −43,1 |
| **ATP** | fosfoanhydrid | ATP → ADP + P<sub>i</sub> | **−30,5** |
| pod ATP – fosfát prijímajú | fosfoester | glukóza-6-fosfát | −13,8 |
| iná skupina než fosfát | tioester | acetyl-CoA | vysoká, porovnateľná s ATP |

Odkiaľ sa ATP berie a prečo má jeho anhydridová väzba takú energiu, je v [→ 7.2.1 Kde je v molekule energia](07_biologicke_oxidacie#sub-7-2-1).

> [!POZOR]
> **ΔG nie je rýchlosť.** Glukóza s kyslíkom má obrovské záporné ΔG a v cukorničke vydrží roky. ΔG hovorí len, *či* reakcia môže bežať; *ako rýchlo*, určuje enzým. Enzým ΔG ani rovnováhu nemení – skracuje cestu k nej.

## 1.6 Koncentrácie, osmolalita a pH

Laboratórny výsledok je číslo s jednotkou a väčšina chýb pri jeho čítaní vzniká práve v jednotke. Sekcia ide od najjednoduchšieho: ako sa vyjadruje množstvo látky v roztoku, ako sa mení pri riedení, čo z neho plynie pre pohyb vody (osmolalita) a čo pre kyslosť (pH a tlmivé roztoky).

> [!JADRO]
> **c = n/V**; mmol/l ↔ mg/dl cez molárnu hmotnosť · **c₁V₁ = c₂V₂** · osmolalita ≈ 2 × Na⁺ + glukóza + močovina · **pH = pK + log (zásada/kyselina)**; v krvi 20 : 1.

### 1.6.1 Látkové množstvo a koncentrácia

Množstvo látky sa dá vyjadriť hmotnosťou alebo počtom častíc; medzi oboma prekladá molárna hmotnosť.

- **Látkové množstvo** n = m / M (mol; m je hmotnosť, M molárna hmotnosť v g/mol).
- **Látková koncentrácia** c = n / V (mol/l; v krvi spravidla mmol/l alebo µmol/l).
- **Hmotnostná koncentrácia** ρ = m / V (g/l; v anglosaskej literatúre mg/dl); c = ρ / M.

Biochémia počíta v moloch, lebo reakcie prebiehajú medzi časticami, nie medzi gramami: jedna molekula glukózy dá dva pyruváty bez ohľadu na to, koľko váži.

| Látka | M (g/mol) | 1 mmol/l = | Príklad |
| --- | --- | --- | --- |
| glukóza | 180,2 | 18,0 mg/dl | 7,0 mmol/l = 126 mg/dl |
| cholesterol | 386,7 | 38,7 mg/dl | 5,17 mmol/l = 200 mg/dl |
| močovina | 60,1 | 6,0 mg/dl | 5,0 mmol/l = 30 mg/dl |

Postup je vždy rovnaký: mg/dl → vynásob 10 (dostaneš mg/l) → vydeľ molárnou hmotnosťou → mmol/l. Opačne: mmol/l × M / 10.

> [!KLINIKA]
> **Číslo bez jednotky je nebezpečné.** Glykémia „100“ je v mg/dl normálna hodnota, v mmol/l by bola nezlučiteľná so životom; „5,5“ je naopak v mmol/l normálna a v mg/dl ťažká hypoglykémia. Európske laboratóriá uvádzajú mmol/l, americká literatúra a mnohé glukomery mg/dl. Aj „čudné“ prahy prezrádzajú prepočet: 5,17 mmol/l cholesterolu je 200 mg/dl.

### 1.6.2 Riedenie

Pri riedení sa pridáva len rozpúšťadlo – látkové množstvo rozpustenej látky ostáva, mení sa objem. Z toho plynie jediná rovnica, ktorú treba vedieť:

```chain
n pred = n po → **c₁ · V₁ = c₂ · V₂** → c₂ = c₁ · V₁ / V₂
zrieďovací faktor = V₂ / V₁ (koľkokrát je vzorka zriedená)
```

Tá istá úvaha platí pri zmiešaní dvoch roztokov jednej látky: látkové množstvá sa sčítajú, objemy tiež, takže c = (c₁ · V₁ + c₂ · V₂) / (V₁ + V₂).

Takto vznikajú aj štandardy pre kalibračnú krivku ([→ 1.7.2](#sub-1-7-2)): zo zásobného roztoku p-nitrofenolu s koncentráciou 30 µmol/l sa do konečného objemu 2,5 ml odmeria 0,1 až 0,5 ml.

Výpočet pre najmenší objem: 30 µmol/l × 0,1 ml / 2,5 ml = 1,2 µmol/l. Každá ďalšia desatina mililitra pridá rovnakých 1,2 µmol/l, takže päť štandardov pokryje rozsah od 1,2 po 6,0 µmol/l v rovnakých krokoch. Výsledok nameraný v zriedenej vzorke sa pred vydaním vždy násobí zrieďovacím faktorom – na to sa zabúda najčastejšie.

### 1.6.3 Osmolalita

Voda prechádza membránami voľne a sťahuje sa tam, kde je viac rozpustených častíc. Nezáleží pritom na tom, aké sú, len koľko ich je: **osmolalita** je počet osmoticky účinných častíc na kilogram vody (mosmol/kg), *osmolarita* to isté na liter roztoku. Soľ, ktorá sa vo vode rozpadne na dva ióny, sa ráta dvakrát.

Príklad: fyziologický roztok obsahuje 9 g NaCl v litri; M = 58,44 g/mol → 154 mmol/l → 154 mmol Na⁺ + 154 mmol Cl⁻ = 308 mosmol/l (pri ideálnom správaní roztoku).

> [!LAB]
> **Osmolalita séra**
> - **Meraná** – osmometrom, podľa zníženia bodu tuhnutia. Referenčné rozpätie 275–295 mosmol/kg (príklad rozpätia slovenského nemocničného laboratória; líši sa podľa laboratória).
> - **Vypočítaná** = 2 × Na⁺ + glukóza + močovina (všetko v mmol/l). Sodík sa násobí dvoma za sprievodné anióny. Napr. 2 × 140 + 5 + 5 = 290 mosmol/kg.
> - **Osmolálne okno** = meraná − vypočítaná; normálne menej než 10 mosmol/kg.

> [!KLINIKA]
> **Osmolálne okno hľadá látku, ktorú nik nemeral.** Ak je meraná osmolalita o viac než 10 mosmol/kg vyššia než vypočítaná, v krvi je veľa malých častíc navyše – najčastejšie etanol, pri otrave etylénglykol alebo iný toxický alkohol, po liečbe manitol. Okno sa vždy hodnotí spolu s pH krvi a klinickým obrazom.

### 1.6.4 pH a tlmivé roztoky

Enzýmy pracujú len v úzkom rozmedzí pH, lebo protóny menia náboj ich bočných reťazcov ([→ 1.3.3](#sub-1-3-3)). Telo pritom kyseliny tvorí neustále – oxid uhličitý z oxidácie živín, laktát, ketolátky. Koncentráciu protónov preto držia *tlmivé roztoky* (pufre): zmesi slabej kyseliny a jej zásady, ktoré pridaný protón zachytia alebo chýbajúci doplnia.

pH je záporný logaritmus koncentrácie H⁺; zmena o jednotku znamená desaťnásobok. Správanie každej slabej kyseliny HA ⇌ H⁺ + A⁻ opisuje **Hendersonova–Hasselbalchova rovnica**:

```chain
pH = pK + log ([A⁻] / [HA])
pH = pK → kyselina je spolovice disociovaná → roztok tlmí najlepšie (účinne v rozmedzí pK ± 1)
```

Hodnota pK je teda „adresa“ skupiny na stupnici pH: pod ňou skupina protón drží, nad ňou ho odovzdala. Z nej sa dá vyčítať náboj každej skupiny z [→ 1.2.1](#sub-1-2-1) – karboxyl s pK okolo 2–5 je pri pH 7 záporný, aminoskupina s pK 9–10 kladná.

> [!REG]
> **Hydrogénuhličitanový systém – tlmivý roztok s dvoma ventilmi**
> - **Rovnica:** pH = 6,1 + log ([HCO₃⁻] / [rozpustený CO₂]). Pri HCO₃⁻ ≈ 24 mmol/l a rozpustenom CO₂ ≈ 1,2 mmol/l (pCO₂ 5,3 kPa) je pomer 20 : 1 a pH 7,40.
> - **Zvláštnosť:** pK 6,1 je ďaleko od 7,4 – v uzavretej nádobe by taký systém tlmil slabo. V tele je však **otvorený**: kyslú zložku (CO₂) odvádzajú pľúca, zásaditú (HCO₃⁻) dopĺňajú obličky.
> - **Slučka ⟳:** ↑ H⁺ → HCO₃⁻ ho naviaže → H₂CO₃ → CO₂ + H₂O (karboanhydráza) → pokles pH dráždi dychové centrum → ↑ ventilácia → CO₂ sa vydýcha → pomer sa vracia k 20 : 1. Riadiaci krok je ventilácia; odpovedá v minútach. Obličky upravia HCO₃⁻ v priebehu hodín až dní.

![Obr. 1.5 — Hydrogénuhličitanový tlmivý systém ako regulačná slučka (⟳). Plné šípky sú premeny látok, zelené prerušované sú vplyvy. Pribudnutý protón sa cez kyselinu uhličitú zmení na oxid uhličitý, ktorý odíde pľúcami; dychové centrum ventiláciu zrýchli práve vtedy, keď pH klesá.](fig/fig-hydrogenuhlicitan.svg)

Ako slučka pracuje, ukáže výpočet. Ak kyseliny z metabolizmu spotrebujú polovicu hydrogénuhličitanu (24 → 12 mmol/l) a CO₂ by ostal rovnaký, pomer klesne na 10 : 1 a pH na 6,1 + 1,0 = 7,10. Keď hyperventilácia zníži rozpustený CO₂ z 1,2 na 0,8 mmol/l, pomer stúpne na 15 : 1 a pH na 7,28 – stále acidóza, ale o poznanie miernejšia.

> [!LAB]
> **Krv – acidobázické hodnoty.** pH 7,36–7,44 · HCO₃⁻ 22–26 mmol/l · pCO₂ 4,64–6,00 kPa (arteriálna krv; príklad rozpätí slovenského nemocničného laboratória).

> [!KLINIKA]
> **Hlboké dýchanie ako laboratórny nález pri lôžku.** Pacient s diabetickou ketoacidózou dýcha zhlboka a rýchlo (Kussmaulovo dýchanie): ketolátky sú kyseliny, spotrebúvajú HCO₃⁻ a pokles pH ženie ventiláciu. V krvi má preto nízke pH, nízky HCO₃⁻ **aj** nízke pCO₂. Ak je pCO₂ pri acidóze naopak vysoké, príčina je v pľúcach, nie v metabolizme. Úplný výklad porúch patrí do časti knihy o acidobázickej rovnováhe.

## 1.7 Laboratórium: fotometria, kalibračná krivka a aktivita enzýmu

Väčšina biochemických stanovení nemeria látku priamo, ale svetlo, ktoré pohltí farebný produkt reakcie. Sekcia vysvetľuje, prečo sa z pohlteného svetla dá vypočítať koncentrácia, ako sa prístroj „naučí“ prekladať absorbanciu na koncentráciu (kalibračná krivka), ako sa tým meria aktivita enzýmu a aké jednoduché farebné reakcie dokazujú prítomnosť jednotlivých skupín.

> [!JADRO]
> Farebný produkt → **absorbancia úmerná koncentrácii** (A = ε·c·l) → štandardy známej koncentrácie dajú priamku → vzorka sa z nej odčíta. Aktivita enzýmu = **množstvo produktu za čas** (katal = mol/s; 1 µkat = 60 U).

### 1.7.1 Absorbancia a Lambertov–Beerov zákon

Fotometer porovná svetlo, ktoré do kyvety vstúpilo (I₀), so svetlom, ktoré z nej vyšlo (I). Absorbancia A = log (I₀ / I) je bezrozmerné číslo a pre zriedené roztoky platí:

```chain
A = ε · c · l
ε – molárny absorpčný koeficient (vlastnosť látky pri danej vlnovej dĺžke) · c – koncentrácia · l – dĺžka dráhy svetla v kyvete
rovnaká látka, rovnaká kyveta → **A je priamo úmerná c**
```

Meria sa pri vlnovej dĺžke, ktorú meraná látka pohlcuje najviac a ostatné zložky čo najmenej. Čo pohltia činidlá a samotná kyveta, odpočíta **slepá vzorka** (*blank*): obsahuje všetko okrem meranej látky a nastavuje sa ňou nula prístroja.

### 1.7.2 Kalibračná krivka p-nitrofenolu

Koeficient ε sa v praxi nepočíta – prístroj sa kalibruje radom roztokov so známou koncentráciou. Postup je rovnaký pre akúkoľvek fotometrickú metódu; tu je ukázaný na produkte, ktorým sa meria alkalická fosfatáza.

Alkalická fosfatáza (ALP) je hydroláza, ktorá pri zásaditom pH odštepuje fosfát z rôznych fosfoesterov. V laboratóriu dostane umelý substrát p-nitrofenylfosfát, ktorý je bezfarebný; produkt, p-nitrofenol, má pK 7,15, takže v zásaditom roztoku je takmer celý vo forme žltého aniónu a pohlcuje svetlo okolo 405 nm (Obr. 1.6). Koľko žltej farby vznikne, toľko substrátu enzým rozštiepil.

![Obr. 1.6 — Princíp stanovenia alkalickej fosfatázy. Modro je fosfát, ktorý enzým odštiepi vodou, a kyslík, ktorý po ňom ostane ako fenolát. Substrát svetlo pri 405 nm nepohlcuje, produkt áno – absorbancia rastie s každou rozštiepenou molekulou.](fig/fig-alp-pnpp.svg)

Kalibračná krivka prekladá absorbanciu na koncentráciu produktu:

```chain
rad štandardov p-nitrofenolu (1,2 – 6,0 µmol/l; riedenie v 1.6.2) → zalkalizovanie → A pri 405 nm proti slepej vzorke
→ body v grafe A proti c → priamka cez nulu → **absorbancia vzorky sa na priamke prečíta ako koncentrácia**
```

![Obr. 1.7 — Kalibračná krivka (schematicky, bez nameraných hodnôt). Päť štandardov leží na priamke; absorbancia neznámej vzorky sa prenesie na priamku a odčíta na vodorovnej osi. Prerušovaný koniec ukazuje, že pri vyšších koncentráciách priamka neplatí.](fig/fig-kalibracna-krivka.svg)

Tri veci rozhodujú, či je odčítaná hodnota správna:

- **Lineárny rozsah.** Úmernosť platí len po určitú koncentráciu. Vzorka, ktorej absorbancia leží nad najvyšším štandardom, sa neodhaduje predĺžením priamky – zriedi sa a zmeria znova (výsledok × zrieďovací faktor).
- **Rovnaké podmienky.** Štandardy aj vzorka musia mať rovnaké pH, objem, kyvetu a vlnovú dĺžku; pri p-nitrofenole by v neutrálnom roztoku bola časť molekúl bezfarebná a absorbancia nižšia.
- **Slepá vzorka.** Bez nej by priamka neprechádzala nulou a každý výsledok by bol posunutý o tú istú chybu.

Príklad s vymyslenými číslami: ak štandard 6,0 µmol/l dá A = 0,300 a vzorka A = 0,150, má vzorka 3,0 µmol/l – polovičná absorbancia, polovičná koncentrácia.

### 1.7.3 Aktivita enzýmu a jej jednotky

Enzýmu je v sére tak málo, že sa nemeria jeho množstvo, ale to, čo dokáže: koľko substrátu premení za jednotku času pri presne daných podmienkach. Podľa toho, kedy sa produkt meria, sú dva spôsoby.

| | Kinetické meranie | Koncové meranie (*end-point*) |
| --- | --- | --- |
| Čo sa sleduje | rast absorbancie v čase, priebežne | absorbancia po pevnom čase |
| Reakcia | beží v kyvete počas merania | po danom čase sa zastaví (pri ALP silno zásaditým roztokom s EDTA) |
| Výhoda | vidno, či je rýchlosť stála | stačí jednoduchý fotometer |
| Riziko | potrebuje prístroj s časovým záznamom | ak sa substrát medzitým minul, aktivita vyjde nižšia |

Výsledok je *katalytická koncentrácia* – aktivita na liter séra. Jednotkou sústavy SI je **katal** (kat) = 1 mol premeneného substrátu za sekundu; staršia a stále bežná je medzinárodná jednotka **U** = 1 µmol za minútu. Prepočet: 1 U = 16,67 nkat, 1 µkat = 60 U.

> [!LAB]
> **ALP v sére.** Dospelý muž 40–125 U/l = 0,67–2,08 µkat/l (podľa učebnice Marks, 2018); slovenské nemocničné laboratórium uvádza 0,50–2,15 µkat/l. Referenčný postup IFCC (2011): 37 °C, substrát 4-nitrofenylfosfát, 405 nm.

> [!KLINIKA]
> **Zvýšená ALP: pečeň alebo kosť.** V sére pochádza ALP najmä z membrán pečeňových buniek obrátených do žlčových ciest a z kostných buniek, ktoré tvoria kosť. Stúpa preto pri prekážke v odtoku žlče (cholestáza, obštrukčný ikterus) a pri chorobách s prestavbou kosti. Fyziologicky je vyššia u rastúcich detí a v tehotenstve (placentárny izoenzým). Odkiaľ zvýšenie pochádza, rozlíšia ďalšie pečeňové testy a izoenzýmy.

### 1.7.4 Dôkazové reakcie

Jednoduché farebné reakcie v skúmavke nedávajú číslo, len odpoveď áno–nie, no každá je priamym dôsledkom jednej funkčnej skupiny z [→ 1.2](#sec-1-2). Delia sa podľa toho, ktorú skupinu alebo štruktúru dokazujú.

| Reakcia | Čo dokazuje | Princíp | Pozitívny výsledok |
| --- | --- | --- | --- |
| Fehlingova, Benedictova | redukujúci sacharid (voľný anomérny uhlík) | v horúcom zásaditom roztoku cukor redukuje Cu²⁺ na Cu⁺ a sám sa oxiduje na kyselinu | modrý roztok → tehlovočervená zrazenina Cu₂O |
| s jódom (Lugolov roztok) | škrob | jód sa uloží do závitnice polysacharidového reťazca | tmavomodré sfarbenie |
| ninhydrínová | voľná aminoskupina (aminokyseliny, fosfatidyletanolamín, fosfatidylserín) | ninhydrín reaguje s aminoskupinou za tepla | modrofialové sfarbenie |
| s orcinolom | pentózy (ribóza v RNA), cukorná zložka glykolipidov | horúca kyselina cukor dehydratuje na furfural, ten s orcinolom dá farebný produkt | modrozelené sfarbenie |

Dvojica Fehling + jód ukazuje aj špecifickosť enzýmov: amyláza štiepi škrob (jódová reakcia zmizne, redukujúce cukry pribudnú), ale sacharózu nie; sacharáza naopak.

## 1.8 Súhrn a rýchle rozlíšenie

Súhrn sleduje tie isté tri jazyky ako [→ 1.1](#sec-1-1): pri každom pojme je otázka, ktorú zodpovedá, a pravidlo, ktoré si z kapitoly odniesť.

| Jazyk | Pojem | Pravidlo | Kde sa vráti |
| --- | --- | --- | --- |
| štruktúra | náboj pri pH 7 | karboxyl a fosfát −, aminoskupina +; nabitá molekula neprejde membránou | každá dráha |
| štruktúra | fosfoester × anhydrid × tioester | prvý má nízku energiu, druhé dva vysokú | kap. 4, 6, 7 |
| štruktúra | anomérny uhlík | voľný = redukujúci cukor; vo väzbe = glykozid (α alebo β) | kap. 3, 5 |
| štruktúra | cis dvojitá väzba | zalomí reťazec → tekutejší lipid; esenciálne len linolová a α-linolénová | kap. 8, 12 |
| reakcia | trieda enzýmu (EC 1–7) | názov hovorí typ reakcie; kináza ≠ fosfatáza ≠ fosforyláza | každá dráha |
| reakcia | oxidácia | strata 2 H alebo zisk O; elektróny berie NAD⁺ alebo FAD | kap. 4, 6, 7, 8 |
| reakcia | hydrolýza × kondenzácia | rozklad ide sám, stavba cez aktivovanú jednotku a ATP | kap. 3, 8, 9 |
| reakcia | ΔG | záporné = beží; nevratný krok = miesto regulácie a obchádzky | kap. 2 |
| číslo | mmol/l ↔ mg/dl | cez molárnu hmotnosť (glukóza × 18) | každý laboratórny údaj |
| číslo | c₁V₁ = c₂V₂ | výsledok zo zriedenej vzorky × zrieďovací faktor | každé meranie |
| číslo | osmolálne okno | meraná − (2 × Na⁺ + glukóza + močovina); > 10 = neznáma látka | otravy |
| číslo | pH = pK + log (zásada/kyselina) | krv: HCO₃⁻ : CO₂ = 20 : 1; pľúca minúty, obličky dni | acidobázická rovnováha |
| číslo | A = ε·c·l | platí len v lineárnom rozsahu; vždy proti slepej vzorke | každé stanovenie |
| číslo | katal × U | 1 µkat = 60 U; aktivita = produkt za čas | kap. 2, enzýmy v diagnostike |

## 1.9 Otázky na zopakovanie

```quiz
? Prečo sacharóza nedá pozitívnu Fehlingovu reakciu, hoci je zložená z glukózy a fruktózy, ktoré ju dávajú obe?
= Redukovať vie len cukor s voľným anomérnym uhlíkom – len vtedy sa kruh otvorí a vznikne skupina, ktorá sa dá oxidovať. V sacharóze sú anomérne uhlíky oboch jednotiek spojené väzbou α(1→2)β, takže sa neotvorí ani jeden kruh. Po hydrolýze (kyselinou alebo sacharázou) sa uvoľnia oba a reakcia je pozitívna. [→ 1.3.1](#sub-1-3-1) · [→ 1.7.4](#sub-1-7-4)
? V schéme vidíš na molekule „P v krúžku“. Podľa čoho spoznáš, či jeho odštiepenie dokáže vyrobiť ATP?
= Podľa toho, na čom fosfát visí. Na hydroxyle (fosfoester, napr. glukóza-6-fosfát, −13,8 kJ/mol) je energia hydrolýzy nižšia než pri ATP (−30,5 kJ/mol) – taký fosfát ATP nevyrobí. Na inom fosfáte alebo na karboxyle (anhydrid), na enole či na guanidínovej skupine kreatínu je energia vyššia – taký fosfát sa dá preniesť na ADP. [→ 1.2.2](#sub-1-2-2) · [→ 1.5](#sec-1-5)
? Reakcia glukóza + fosfát → glukóza-6-fosfát má ΔG°′ +13,8 kJ/mol. Ako to, že v každej bunke beží, a prečo sa nedá otočiť tým istým enzýmom?
= Hexokináza ju spriaha so štiepením ATP (−30,5 kJ/mol): fosfát prenesie z ATP priamo na glukózu a súčet je −16,7 kJ/mol. Také záporné ΔG robí krok nevratným. Opačný smer preto potrebuje iný enzým – glukóza-6-fosfatázu, ktorá fosfát odštiepi vodou (tiež so záporným ΔG). Nevratný krok s vlastným enzýmom pre každý smer je zároveň miesto, kde sa dráha reguluje. [→ 1.5](#sec-1-5) · [→ 1.4.1](#sub-1-4-1)
? Prečo je Na⁺/K⁺-ATPáza podľa dnešného názvoslovia translokáza, a nie hydroláza, hoci štiepi ATP?
= Triedenie enzýmov ide podľa toho, čo je hlavnou úlohou reakcie. Pumpa štiepi ATP len ako pohon; jej zmyslom je presun iónov cez membránu. Preto IUBMB v roku 2018 vyčlenila takéto enzýmy z hydroláz (EC 3.6.3) do novej, siedmej triedy translokáz (EC 7). Staršie učebnice uvádzajú šesť tried. [→ 1.4.1](#sub-1-4-1)
? Laboratórium vydalo cholesterol 240. Čo musíš zistiť, kým výsledok zhodnotíš, a ako ho prepočítaš?
= Jednotku. 240 mmol/l je nemožná hodnota, takže ide o mg/dl. Prepočet: 240 mg/dl = 2 400 mg/l; delené molárnou hmotnosťou cholesterolu 386,7 g/mol = 6,2 mmol/l. Všeobecne mg/dl × 10 / M. [→ 1.6.1](#sub-1-6-1)
? Štandard p-nitrofenolu 30 µmol/l potrebuješ zriediť na 3,6 µmol/l v konečnom objeme 2,5 ml. Koľko zásobného roztoku odmeriaš a prečo sa pred meraním pridáva zásada?
= c₁V₁ = c₂V₂ → V₁ = 3,6 × 2,5 / 30 = 0,3 ml (zvyšok do 2,5 ml tvoria voda a zásaditý roztok). Zásada je nutná, lebo p-nitrofenol má pK 7,15: žltý je len jeho anión. V neutrálnom roztoku by bola časť molekúl bezfarebná a absorbancia by nezodpovedala koncentrácii. [→ 1.6.2](#sub-1-6-2) · [→ 1.7.2](#sub-1-7-2)
? Prípad: muža nájdeného v bezvedomí privezú na urgentný príjem. Na⁺ 140 mmol/l, glukóza 5 mmol/l, močovina 5 mmol/l, meraná osmolalita séra 330 mosmol/kg. Čo ti tieto čísla hovoria?
= Vypočítaná osmolalita je 2 × 140 + 5 + 5 = 290 mosmol/kg. Osmolálne okno 330 − 290 = 40 mosmol/kg je výrazne nad hranicou 10 – v krvi je asi 40 mmol/l malých častíc, ktoré bežné vyšetrenia nemerajú. Najčastejšie je to etanol, treba však vylúčiť etylénglykol a iné toxické alkoholy. [→ 1.6.3](#sub-1-6-3)
? Prípad: pacientka s diabetom dýcha zhlboka a rýchlo. pH 7,15, HCO₃⁻ 10 mmol/l, pCO₂ 3,0 kPa. Prečo je pCO₂ nízke a čo by znamenalo, keby bolo vysoké?
= Kyseliny (ketolátky) spotrebovali hydrogénuhličitan, pomer HCO₃⁻ : CO₂ klesol a s ním pH. Pokles pH dráždi dychové centrum, ventilácia stúpa a CO₂ sa vydýcha – nízke pCO₂ je teda kompenzácia, ktorá pomer čiastočne vracia k 20 : 1. Vysoké pCO₂ pri acidóze by znamenalo, že pľúca CO₂ nevylučujú – príčina alebo spolupríčina by bola respiračná. [→ 1.6.4](#sub-1-6-4)
? Prečo sa aktivita enzýmu v sére udáva v µkat/l alebo U/l, a nie v mg/l ako pri albumíne?
= Enzýmu je v sére veľmi málo a pre diagnostiku nie je dôležitá jeho hmotnosť, ale to, čo dokáže. Meria sa preto rýchlosť, akou mení substrát na produkt pri dohodnutých podmienkach (teplota, pH, nadbytok substrátu): 1 kat = 1 mol/s, 1 U = 1 µmol/min, 1 µkat = 60 U. Výsledky rôznych metód sa preto dajú porovnať len pri rovnakých podmienkach. [→ 1.7.3](#sub-1-7-3)
```

## 1.10 Zdroje

**Učebnice (kontrola faktov)**

- Rodwell V. W., Bender D. A., Botham K. M., Kennelly P. J., Weil P. A.: *Harper's Illustrated Biochemistry*, 31. vyd., New York: McGraw-Hill Education, 2018. ISBN 978-1-25-983793-7. (voda a pH, aminokyseliny a peptidy, triedy enzýmov a meranie ich aktivity, bioenergetika, sacharidy, lipidy, glykácia)
- Lieberman M., Peet A.: *Marks' Basic Medical Biochemistry: A Clinical Approach*, 5. vyd., Philadelphia: Wolters Kluwer, 2018. ISBN 978-1-4963-2481-8. (kyseliny, zásady a tlmivé roztoky, prepočet jednotiek, osmolalita, aminokyseliny, bioenergetika a spriahnuté reakcie)
- Harvey R. A., Ferrier D. R.: *Lippincott's Illustrated Reviews: Biochemistry*, 5. vyd., Philadelphia: Lippincott Williams & Wilkins, 2011. ISBN 978-1-60831-412-6. (bioenergetika, stavba glykogénu)

**Názvoslovie, odporúčania a prehľady**

- NC-IUBMB: Enzyme Nomenclature – EC 7 Translocases. [iubmb.qmul.ac.uk/enzyme/EC7](https://iubmb.qmul.ac.uk/enzyme/EC7/); oznámenie o novej triede (august 2018): [enzyme-database.org](https://www.enzyme-database.org/news.php?id=5)
- Dybkær R.: Unit „katal“ for catalytic activity (IUPAC Technical Report). *Pure Appl Chem* 2001;73(6):927–931. [doi:10.1351/pac200173060927](https://doi.org/10.1351/pac200173060927)
- Schumann G. et al.: IFCC primary reference procedures for the measurement of catalytic activity concentrations of enzymes at 37 °C. Part 9: Reference procedure for the measurement of catalytic concentration of alkaline phosphatase. *Clin Chem Lab Med* 2011;49(9):1439–1446. [doi:10.1515/CCLM.2011.621](https://doi.org/10.1515/CCLM.2011.621)
- American Diabetes Association Professional Practice Committee: 2. Diagnosis and Classification of Diabetes: Standards of Care in Diabetes—2026. *Diabetes Care* 2026;49(Suppl 1):S27–S49. [doi:10.2337/dc26-S002](https://doi.org/10.2337/dc26-S002)
- Chen Z., Shao L., Jiang M., Ba X., Ma B., Zhou T.: Interpretation of HbA1c lies at the intersection of analytical methodology, clinical biochemistry and hematology (Review). *Exp Ther Med* 2022;24(6):707. [doi:10.3892/etm.2022.11643](https://doi.org/10.3892/etm.2022.11643)
- Tan S., Yong A., Saw S., Sethi S.: The Truth Lies Within the Gap. *EJIFCC* 2026;37(4):759–766. [PMC13563528](https://europepmc.org/article/PMC/PMC13563528)
- PubChem (National Center for Biotechnology Information): záznamy zlúčenín – molárne hmotnosti, štruktúry a pK p-nitrofenolu. [pubchem.ncbi.nlm.nih.gov](https://pubchem.ncbi.nlm.nih.gov/)

**Obrázky**

Všetky schémy a vzorce v kapitole sú vlastné kresby (SVG); štruktúry molekúl sú overené v databáze PubChem. Súhrn je v registri `ZDROJE-OBRAZKOV.md`.
