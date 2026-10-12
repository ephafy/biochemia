---
num: 4
title: Metabolizmus glukózy
part: Lekárska biochémia
crumb: Glykolýza a glukoneogenéza
eyebrow: Sacharidy · jedna cesta, dva smery
standfirst: Glykolýza rozkladá glukózu na pyruvát a dáva ATP aj bez kyslíka; glukoneogenéza tou istou cestou späť vyrába glukózu, keď jej v krvi ubúda. Kapitola ich číta ako jednu cestu s dvoma smermi – sedem krokov majú spoločných a na troch miestach sa rozchádzajú. Práve tie tri miesta rozhodujú o všetkom podstatnom, od bilancie po laktát v krvi pacienta v šoku.
deps: [→ 1.5 Energia reakcie](01_zaklady_biomolekuly#sec-1-5) · [→ 2.7 Riadiaci krok](02_uvod_regulacia_metabolizmu#sec-2-7) · [→ 3.3 Vstrebávanie a transportéry](03_sacharidy_glykogen#sec-3-3)
next: [→ 5 Pentózofosfátová dráha, fruktóza, galaktóza a glykokonjugáty](05_pentozy_fruktoza_galaktoza)
reviewed: —
---

## 4.1 Východisko a mapa: jedna cesta, dva smery

Glukóza-6-fosfát, pri ktorom skončila predošlá kapitola, má okrem uloženia do glykogénu druhú veľkú možnosť: rozklad na pyruvát. Tá cesta sa volá **glykolýza** a je to jediná dráha, ktorou vie ATP vyrobiť každá bunka tela, aj tá bez mitochondrií a bez kyslíka. Opačným smerom ide **glukoneogenéza**: pečeň a oblička ňou z laktátu, glycerolu a aminokyselín vyrábajú novú glukózu, keď sa pečeňový glykogén míňa ([→ 3.4 Glykémia](03_sacharidy_glykogen#sec-3-4)).

> [!JADRO]
> Glukóza ⇄ pyruvát: **7 vratných krokov spoločných**, **3 nevratné** má každý smer vlastné. Na tých troch miestach sa platí ATP a rozhoduje sa o smere. Dolu ide každá bunka (ATP), hore len pečeň a oblička (glykémia).

Obe dráhy sa oplatí učiť spolu, pretože väčšinu cesty zdieľajú (Obr. 4.1). Zo desiatich krokov glykolýzy je sedem vratných a glukoneogenéza nimi prejde odzadu s tými istými enzýmami. Tri kroky sú nevratné – majú veľmi záporné ΔG – a opačný smer ich musí obísť inými enzýmami ([→ 1.5 Energia reakcie](01_zaklady_biomolekuly#sec-1-5)). Kapitola preto ide takto: glykolýza krok za krokom ([→ 4.2](#sec-4-2)), čo s pyruvátom a s NADH ([→ 4.3](#sec-4-3)), koľko to vynesie ([→ 4.4](#sec-4-4)), cesta späť a jej tri obchádzky ([→ 4.5](#sec-4-5)), regulácia na troch miestach, kde sa smery rozchádzajú ([→ 4.6](#sec-4-6)), spolupráca orgánov ([→ 4.7](#sec-4-7)), poruchy ([→ 4.8](#sec-4-8)) a meranie ([→ 4.9](#sec-4-9)).

![Obr. 4.1 — Mapa kapitoly: glykolýza (vľavo, nadol) a glukoneogenéza (vpravo, nahor). Hrubé šípky sú nevratné kroky – tri dvojice, na ktorých sa smery rozchádzajú. Farebné popisy pri enzýmoch sú regulátory; vráti sa k nim sekcia 4.6. Všimni si, že jeden regulátor často pôsobí na oba enzýmy dvojice opačne.](fig/fig-glukoza-dva-smery.svg)

## 4.2 Glykolýza: desať krokov v dvoch fázach

Glykolýza beží v cytosole a nepotrebuje kyslík ani žiadnu organelu. Glukóza sa k nej dostane jedným z dvoch spôsobov, ktoré opísala predošlá kapitola: do bunky čreva a obličkového kanálika spolu s Na⁺ aj proti spádu (SGLT), do všetkých ostatných buniek po spáde cez prenášače GLUT ([→ 3.3 Vstrebávanie a transportéry](03_sacharidy_glykogen#sec-3-3)). Jej desať krokov sa delí podľa toho, čo sa deje s energiou: v prvej polovici bunka do glukózy ATP vkladá, v druhej si ho vyberie s úrokom. Sekcia prejde obe fázy a potom odbočku, ktorú má navyše erytrocyt.

> [!JADRO]
> **Investícia** (kroky 1–5): 2 ATP → fruktóza-1,6-bisfosfát → 2 triózy. **Výnos** (kroky 6–10): oxidácia (NADH) vytvorí makroergický fosfát → 2 × substrátová fosforylácia → 4 ATP. Nevratné: kroky **1, 3, 10**.

### 4.2.1 Investičná fáza: z hexózy dve triózy

Prvých päť krokov pripraví šesťuhlíkový cukor na rozštiepenie na dve rovnaké polovice (Obr. 4.2). Každý krok má dôvod, ktorý vidno až na tom nasledujúcom.

![Obr. 4.2 — Investičná fáza glykolýzy (kroky 1–5). Modré P je fosfát, ktorý krok pridal. Dve hrubé šípky spotrebujú po jednom ATP; krok 3 je riadiacim krokom celej dráhy. Z jednej glukózy pokračujú ďalej dve molekuly glyceraldehyd-3-fosfátu.](fig/fig-glykolyza-investicia.svg)

> [!MECH]
> **Kroky 1–5 a prečo práve tak**
> 1. **Hexokináza** (v pečeni a β-bunkách **glukokináza**) prenesie fosfát z ATP na uhlík 6. Nevratný. Ako každá kináza pracuje s ATP viazaným na Mg²⁺ ([→ 7.2.1 Kde je v molekule energia](07_biologicke_oxidacie#sub-7-2-1)). Náboj fosfátu uväzní glukózu v bunke ([→ 3.3.2 Transportéry GLUT v tkanivách](03_sacharidy_glykogen#sub-3-3-2)).
> 2. **Glukóza-6-fosfátizomeráza** zmení aldózu na ketózu – fruktóza-6-fosfát. Vratný. Zmysel: uvoľní sa hydroxyl na uhlíku 1 pre druhý fosfát a karbonyl sa posunie tak, aby sa reťazec dal rozštiepiť presne v strede.
> 3. **Fosfofruktokináza-1 (PFK-1)** pridá z ATP druhý fosfát, tentoraz na uhlík 1; vznikne fruktóza-1,6-bisfosfát, v schémach Fru-1,6-P₂. Nevratný, najpomalší a *zaväzujúci* krok: oba predošlé medziprodukty majú ešte iné cesty, produkt tohto kroku už len glykolýzu.
> 4. **Aldoláza** preruší reťazec medzi tretím a štvrtým uhlíkom → dihydroxyacetónfosfát + glyceraldehyd-3-fosfát. Vratný. Každá polovica nesie jeden fosfát – preto boli potrebné dva.
> 5. **Triózafosfátizomeráza** vratne premieňa jednu triózu na druhú. Keďže ďalšie kroky odoberajú len glyceraldehyd-3-fosfát, nakoniec ním prejde všetko.

Od tohto miesta treba všetko násobiť dvoma: z jednej glukózy idú ďalej dve triózy. Glyceraldehyd-3-fosfát a dihydroxyacetónfosfát sú zároveň miestom, kde sa na dráhu pripájajú iné cesty – cez dihydroxyacetónfosfát vstupuje glycerol z tukov ([→ 4.5.1](#sub-4-5-1)) a cez glyceraldehyd-3-fosfát sa vracajú cukry z pentózofosfátovej dráhy ([→ 5.2.2 Neoxidačná časť: preskupenie uhlíkov](05_pentozy_fruktoza_galaktoza#sub-5-2-2)).

### 4.2.2 Výnosná fáza: oxidácia a dve substrátové fosforylácie

Druhá polovica dráhy rieši jedinú úlohu: premeniť obyčajný fosfoester, z ktorého sa ATP vyrobiť nedá, na väzbu s takou energiou, aby fosfát prešiel na ADP ([→ 1.2.2 Väzby medzi stavebnými jednotkami](01_zaklady_biomolekuly#sub-1-2-2)). Podarí sa to dvakrát, zakaždým iným trikom (Obr. 4.3).

![Obr. 4.3 — Výnosná fáza glykolýzy (kroky 6–10) pre jednu triózu; na glukózu prebehne dvakrát. Modro sú dva fosfáty s vysokou energiou hydrolýzy: acylfosfát v 1,3-bisfosfoglyceráte a enolfosfát vo fosfoenolpyruváte. Z oboch prejde fosfát priamo na ADP.](fig/fig-glykolyza-vynos.svg)

> [!MECH]
> **Kroky 6–10**
> 6. **Glyceraldehyd-3-fosfátdehydrogenáza** – jediná oxidácia v glykolýze. Aldehyd sa oxiduje na úroveň kyseliny, elektróny prevezme NAD⁺ (→ NADH) a energia oxidácie sa neuvoľní ako teplo, ale uloží do väzby s anorganickým fosfátom: vznikne **1,3-bisfosfoglycerát** s acylfosfátom na uhlíku 1. Vratný. Ako sa to podarí: aldehyd sa najprv pripojí na SH-skupinu cysteínu v aktívnom mieste, oxidáciou z neho vznikne *tioester* s enzýmom – väzba bohatá na energiu – a ten potom rozštiepi anorganický fosfát namiesto vody. Jódacetát, ktorý tú istú SH-skupinu obsadí, preto zastaví celú dráhu.
> 7. **Fosfoglycerátkináza** prenesie tento fosfát na ADP → ATP + 3-fosfoglycerát. Prvá *substrátová fosforylácia*. Vratný.
> 8. **Fosfoglycerátmutáza** presunie zvyšný fosfát z uhlíka 3 na uhlík 2. Vratný.
> 9. **Enoláza** odštiepi vodu → **fosfoenolpyruvát**. Vratný. Odchod vody preskupí elektróny tak, že z nízkoenergetického esteru sa stane enolfosfát s najvyššou energiou hydrolýzy v celej dráhe.
> 10. **Pyruvátkináza** prenesie fosfát na ADP → ATP + pyruvát. Druhá substrátová fosforylácia. Nevratný.

*Substrátová fosforylácia* znamená, že fosfát prejde na ADP priamo z medziproduktu dráhy – bez membrány, bez kyslíka. To ju odlišuje od oxidačnej fosforylácie v mitochondrii a robí z glykolýzy núdzový zdroj ATP.

> [!POZOR]
> **Kináza je pomenovaná podľa smeru, v ktorom fosfát berie z ATP** – aj keď v dráhe beží opačne. Pyruvátkináza ani fosfoglycerátkináza v glykolýze ATP nespotrebúvajú, ale tvoria.

Glykolýza pritom nie je len zdroj ATP. Jej medziprodukty sú východiskom syntéz: z dihydroxyacetónfosfátu vzniká glycerol-3-fosfát, kostra triacylglycerolov; z 3-fosfoglycerátu aminokyselina serín; z pyruvátu alanín a – cez acetyl-CoA – MK a cholesterol. Preto pečeň po jedle glukózu štiepi, aj keď ATP má dosť – robí z nej tuk ([→ 4.7](#sec-4-7)).

Dva kroky výnosnej fázy sa dajú zvonka pokaziť a obe situácie majú praktický význam.

> [!LAB]
> **Fluorid v odberovej skúmavke.** Erytrocyty vo vzorke krvi glykolýzou ďalej spotrebúvajú glukózu a nameraná hodnota by s časom klesala. Fluorid brzdí enolázu, glykolýzu zastaví a glykémia vo vzorke ostane taká, aká bola pri odbere.

> [!KLINIKA]
> **Arzeničnan: dráha beží, ATP nevzniká.** Päťmocný arzén sa podobá na fosfát a v kroku 6 zaujme jeho miesto. Vzniknutý produkt sa samovoľne rozpadne na 3-fosfoglycerát – glykolýza pokračuje, ale krok 7 s jeho ATP sa preskočí a čistý zisk klesne na nulu. Je to názorný dôkaz, že ATP glykolýzy pochádza z energie uloženej v kroku 6.

### 4.2.3 Odbočka erytrocytu: 2,3-bisfosfoglycerát

Erytrocyt má na glykolýze postavenú ešte jednu funkciu. Časť 1,3-bisfosfoglycerátu nepošle cez krok 7, ale zmení ju na 2,3-bisfosfoglycerát, ktorý potrebuje hemoglobín (Obr. 4.4).

![Obr. 4.4 — Odbočka glykolýzy v erytrocyte. Horná cesta dá ATP; dolná ho obetuje a namiesto toho vyrobí 2,3-bisfosfoglycerát, ktorý reguluje hemoglobín.](fig/fig-bpg-skrat.svg)

V ostatných bunkách je 2,3-bisfosfoglycerátu stopové množstvo, v erytrocyte približne toľko ako hemoglobínu. Viaže sa na hemoglobín bez kyslíka a znižuje jeho afinitu ku kyslíku, takže ho hemoglobín v tkanivách ľahšie odovzdá. Bunka za to platí: molekula, ktorá prejde odbočkou, obíde fosfoglycerátkinázu a nedá ATP.

## 4.3 Pyruvát a laktát: čo s NADH

Glykolýza má jednu slabinu. Krok 6 potrebuje NAD⁺ a bunka ho má málo; keby sa NADH nemal kde zbaviť elektrónov, dráha by sa po chvíli zastavila. Osud pyruvátu preto určuje predovšetkým to, **kto obnoví NAD⁺** – a až potom to, čo organizmus práve potrebuje. Podľa toho má pyruvát štyri cesty (Obr. 4.5). Sekcia ich najprv ukáže všetky a potom prejde obe možnosti obnovy NAD⁺: bez kyslíka ([→ 4.3.1](#sub-4-3-1)) a s ním ([→ 4.3.2](#sub-4-3-2)).

> [!JADRO]
> Krok 6 potrebuje **NAD⁺**. Bez O₂ ho vráti pyruvát → **laktát**. S O₂ odnesú vodíky do mitochondrie **člnky** (NADH sám membránou neprejde) a pyruvát sa spáli cez **acetyl-CoA**. Nalačno v pečeni: pyruvát → **oxalacetát** → glukóza.

![Obr. 4.5 — Štyri osudy pyruvátu. Vodorovne je rozhodnutie o kyslíku: doľava bez neho (laktát), doprava s ním (acetyl-CoA). Zvislo sú dve cesty, ktoré spájajú pyruvát s aminokyselinami a s glukoneogenézou. Jednosmerné sú len hrubé šípky.](fig/fig-pyruvat-osudy.svg)

| Osud | Enzým | Kde a kedy | Zmysel |
| --- | --- | --- | --- |
| **acetyl-CoA** | pyruvátdehydrogenáza (mitochondria), nevratne | bunky s mitochondriami pri dostatku O₂ | úplné spálenie alebo stavba MK – [→ 6.2 Brána: z pyruvátu acetyl-CoA](06_acetyl_coa_citratovy_cyklus#sec-6-2) |
| **laktát** | laktátdehydrogenáza (cytosol), vratne | bez mitochondrií, pri nedostatku O₂, pri prudkej práci | obnova NAD⁺ pre krok 6 |
| **oxalacetát** | pyruvátkarboxyláza (v mitochondrii), nevratne | pečeň a oblička nalačno | štart cesty ku glukóze; inde doplnenie cyklu |
| **alanín** | alanínaminotransferáza, vratne | sval | odvoz dusíka do pečene ([→ 4.7](#sec-4-7)) |

Kvasinky a niektoré baktérie majú piatu možnosť – pyruvát zbavia CO₂ a acetaldehyd, ktorý ostane, zredukujú na etanol. Účel je ten istý ako pri laktáte: vrátiť NAD⁺.

### 4.3.1 Bez kyslíka: vodíky prevezme pyruvát

Kde chýba kyslík alebo mitochondria, ostáva bunke jediný príjemca vodíkov – vlastný koncový produkt glykolýzy. Reakciu robí jeden enzým a je vratná, takže ten istý enzým laktát inde zasa spotrebúva.

> [!MECH]
> **Laktátdehydrogenáza (LD)**
> pyruvát + NADH + H⁺ ⇌ laktát + NAD⁺
> - Konečným príjemcom vodíkov v anaeróbnej glykolýze je teda sám pyruvát. NADH z kroku 6 sa spotrebuje, takže dráha netvorí žiadny NADH navyše.
> - Reakcia je vratná a smer určuje pomer NADH : NAD⁺ a pyruvát : laktát v danej bunke. V pracujúcom svale je NADH veľa → vzniká laktát. V pečeni a v srdci je pomer nižší → tie isté molekuly laktát z krvi oxidujú späť na pyruvát.
> - LD je tetramér z dvoch druhov podjednotiek, svalovej (M) a srdcovej (H); ich kombináciou vzniká päť izoenzýmov od H₄ po M₄.

Laktát je hlavným produktom glykolýzy tam, kde chýbajú mitochondrie alebo cievy: v erytrocytoch a leukocytoch, v šošovke a rohovke oka, v dreni obličky a v semenníkoch. V kostrovom svale vzniká pri prudkej práci, keď krok 6 tvorí NADH rýchlejšie, než ho stíha odoberať dýchací reťazec.

> [!IMPORTANT]
> **[R] Revízia — laktát nie je odpad**
> **Kedysi:** laktát sa považoval za slepú uličku – odpadový produkt, ktorý vzniká len pri nedostatku kyslíka a ktorého sa telo musí zbaviť.
> **Dnes:** laktát vzniká stále, aj pri dostatku kyslíka, a medzi bunkami a orgánmi sa prenáša ako palivo a stavebná látka (*laktátový člnok*). Srdce a pokojové svaly ho spaľujú, neuróny ho dostávajú od astrocytov, pečeň z neho robí glukózu. Cez membrány ho prenášajú vlastné transportéry. Zvýšený laktát v krvi teda neznamená „jed“, ale nepomer medzi jeho tvorbou a odberom.

> [!KLINIKA]
> **Nádor, ktorý kvasí aj pri kyslíku.** Rýchlo rastúce nádorové bunky štiepia glukózu na laktát vysokou rýchlosťou, hoci kyslík majú (Warburgov efekt). Laktát vyvážajú, okolie nádoru sa okysľuje a pečeň z neho späť vyrába glukózu – za cenu vlastného ATP. Chorý tak platí energiu za palivo nádoru.

### 4.3.2 S kyslíkom: vodíky nesú do mitochondrie člnky

Bunka s mitochondriami a kyslíkom laktát tvoriť nemusí: vodíky z NADH môže odovzdať dýchaciemu reťazcu a pyruvát jej ostane na spálenie. Má to jeden háčik. NADH vzniká v cytosole, reťazec leží vo vnútornej membráne mitochondrie – a tá NADH neprepustí. Cez membránu preto necestuje koenzým, ale len jeho vodíky, naložené na malú molekulu, ktorá sa po vyložení vráti po ďalšie. Takému kolobehu sa hovorí **člnok**; bunky majú dva (Obr. 4.6).

![Obr. 4.6 — Dva člnky pre vodíky cytosolového NADH. Hore: malát ich prenesie do matrix a odovzdá tamojšiemu NAD⁺; späť sa vracia ako aspartát, lebo oxalacetát membránou neprejde (⟳). Dole: glycerol-3-fosfát do matrix nevstúpi – vodíky odovzdá enzýmu na vonkajšej strane membrány a ten ich pošle na koenzým Q. Všimni si, že v oboch člnkoch sa v cytosole vracia NAD⁺: to je to, čo potrebuje krok 6 glykolýzy.](fig/fig-clnky.svg)

> [!MECH]
> **Dva člnky: rovnaký náklad, iné miesto vykládky**
> - **Malát-aspartátový člnok.** V cytosole NADH zredukuje oxalacetát na malát. Malát prejde prenášačom do matrix a tam sa oxiduje späť na oxalacetát; vodíky prevezme NAD⁺ v matrix a vzniknutý NADH ich odovzdá na začiatku dýchacieho reťazca. Oxalacetát membránou neprejde, a tak sa von vracia prestavaný na aspartát – aminoskupinu mu požičia glutamát. Výnos: ≈ 2,5 ATP na jeden cytosolový NADH. Pečeň, srdce, oblička.
> - **Glycerolfosfátový člnok.** V cytosole NADH zredukuje dihydroxyacetónfosfát – medziprodukt glykolýzy z kroku 4 – na glycerol-3-fosfát. Ten dovnútra nejde: na vonkajšom povrchu vnútornej membrány ho oxiduje enzým s FAD a vodíky idú rovno na koenzým Q, teda až za prvú protónovú pumpu reťazca. Výnos je preto nižší, ≈ 1,5 ATP. Mozog a rýchly kostrový sval.

Pre glykolýzu robí člnok to isté čo laktátdehydrogenáza v bunke bez kyslíka: vracia cytosolu NAD⁺. Rozdiel je v tom, kde vodíky skončia – v laktáte, ktorý ich z bunky odnesie a využije ich až iné tkanivo, alebo vo vlastnom reťazci, kde z nich bude ATP hneď. Od toho, ktorý člnok bunka použije, závisí aj celková bilancia glukózy ([→ 4.4](#sec-4-4)). Stavbu reťazca, prenášače v membráne a pôvod čísel 2,5 a 1,5 má [→ 7.7 Dovoz a vývoz: prenášače a člnky](07_biologicke_oxidacie#sec-7-7).

> [!POZOR]
> **„NADH ide do mitochondrie“ je skratka.** Molekula NADH z cytosolu sa do matrix nikdy nedostane. Prejdú len dva vodíky – a v glycerolfosfátovom člnku ani tie neskončia na NAD⁺, ale na FAD. Preto ten istý cytosolový NADH nemá vždy rovnakú cenu.

## 4.4 Bilancia glykolýzy

Koľko ATP glykolýza dá, závisí od toho, čo sa stane s dvoma NADH z kroku 6. Sekcia preto ráta tri prípady – bez kyslíka, s kyslíkom po pyruvát a úplné spálenie – a pri každom hovorí, s čím počíta.

> [!JADRO]
> Glykolýza sama: **čistý zisk 2 ATP** na glukózu (4 vzniknú, 2 sa vložili). Bez O₂ je to všetko. S O₂ pribudnú 2 NADH a po úplnom spálení spolu **≈ 30–32 ATP**. Z glykogénu o 1 ATP viac.

| Prípad | Rovnica | Zisk |
| --- | --- | --- |
| **anaeróbne** (po laktát) | glukóza + 2 ADP + 2 P<sub>i</sub> → 2 laktát + 2 ATP + 2 H₂O | 2 ATP; NADH sa vytvorí a hneď spotrebuje |
| **aeróbne** (po pyruvát) | glukóza + 2 NAD⁺ + 2 ADP + 2 P<sub>i</sub> → 2 pyruvát + 2 NADH + 2 H⁺ + 2 ATP + 2 H₂O | 2 ATP + 2 NADH v cytosole; ich vodíky dajú po prenose člnkom ďalšie 3 alebo 5 ATP |
| **úplná oxidácia** na CO₂ a H₂O | glykolýza + pyruvátdehydrogenáza + citrátový cyklus + dýchací reťazec | ≈ 30–32 ATP |

Tá istá bilancia počítaná od fruktóza-1,6-bisfosfátu: jeden mól dá dva móly pyruvátu, štyri móly ATP a dva móly NADH – investícia je už zaplatená. A keď glykolýza štartuje z glykogénu, vstupuje do nej rovno glukóza-6-fosfát, krok 1 odpadá a čistý zisk sú tri ATP na glukózový zvyšok ([→ 3.7 Rozklad glykogénu](03_sacharidy_glykogen#sec-3-7)).

Dve ATP sú len malý zlomok energie glukózy; väčšinu ešte nesie pyruvát či laktát. Výhodou anaeróbnej glykolýzy nie je účinnosť, ale rýchlosť a nezávislosť od kyslíka.

> [!IMPORTANT]
> **[R] Revízia — 36–38 alebo 30–32 ATP?**
> **Kedysi:** rátalo sa s tromi ATP na každý NADH a dvoma na FADH₂; úplná oxidácia glukózy tak vychádzala na 36–38 ATP. Toto číslo je v starších učebniciach aj v mnohých testoch.
> **Dnes:** podľa merania toho, koľko protónov treba na jedno ATP, sa počíta približne s 2,5 ATP na NADH a 1,5 na FADH₂. Výsledok je **30–32 ATP**; rozdiel dvoch ATP závisí od toho, ktorým člnkom sa vodíky cytosolového NADH dostanú k dýchaciemu reťazcu ([→ 4.3.2](#sub-4-3-2)): glycerolfosfátový dá 2 × 1,5, malát-aspartátový 2 × 2,5. Výpočet: 2 (glykolýza) + 3 alebo 5 (dva cytosolové NADH) + 5 (dva NADH z pyruvátdehydrogenázy) + 20 (dve otáčky cyklu) = 30 alebo 32. Odkiaľ sa berú čísla 2,5 a 1,5, vysvetľuje [→ 7.5.1 Bilancia: koľko ATP za pár elektrónov](07_biologicke_oxidacie#sub-7-5-1).

## 4.5 Glukoneogenéza: cesta späť a jej tri obchádzky

Mozog a erytrocyty potrebujú glukózu aj vtedy, keď človek neje a pečeňový glykogén dochádza. Glukoneogenéza ju vyrába z látok, ktoré cukrom nie sú. Nie je to glykolýza pustená odzadu – tri nevratné kroky to nedovolia. Sekcia najprv povie, z čoho a kde glukóza vzniká, potom prejde tri obchádzky a nakoniec spočíta, čo to stojí.

> [!JADRO]
> Pečeň (a oblička) z **laktátu, aminokyselín a glycerolu**. Tri obchádzky: cez oxalacetát späť nad pyruvátkinázu, potom dve fosfatázy namiesto dvoch kináz. Cena: **6 makroergických väzieb** na glukózu. Acetyl-CoA z MK substrátom nie je.

### 4.5.1 Z čoho a kde

Substrátom môže byť každá látka, z ktorej sa dá vyrobiť pyruvát, oxalacetát alebo triózafosfát. Tri hlavné sa líšia pôvodom a tým, kde do dráhy vstupujú.

| Substrát | Odkiaľ | Kde vstupuje | Poznámka |
| --- | --- | --- | --- |
| **laktát** | erytrocyty, pracujúci sval | laktátdehydrogenáza → pyruvát | dostupný hneď; Coriho cyklus ([→ 4.7](#sec-4-7)) |
| **alanín, glutamín** a iné glukogénne aminokyseliny | bielkoviny svalu | pyruvát, alebo cez medziprodukt citrátového cyklu oxalacetát | významný zdroj pri dlhšom lačnení; cenou je svalová hmota |
| **glycerol** | štiepenie triacylglycerolov v tukových bunkách | glycerolkináza a dehydrogenáza → dihydroxyacetónfosfát | vstupuje až nad prvou obchádzkou; kinázu má pečeň, tukové bunky takmer nie |

MK substrátom nie sú, lebo končia ako acetyl-CoA a z neho cesta ku glukóze nevedie ([→ 2.2.2 Tri stupne a tri križovatky](02_uvod_regulacia_metabolizmu#sub-2-2-2)). Jedinou výnimkou je posledný trojuhlíkový zvyšok MK s nepárnym počtom uhlíkov, propionyl-CoA: do citrátového cyklu vstupuje ako sukcinyl-CoA a odtiaľ sa ku glukóze dostať vie ([→ 8.5.1 Nepárny počet uhlíkov: propionyl-CoA](08_lipidy_mastne_kyseliny#sub-8-5-1)). MK však glukoneogenézu poháňajú: ich β-oxidácia dodáva ATP, ktoré dráha spotrebúva, a acetyl-CoA, ktorý ju zapína ([→ 4.6.3](#sub-4-6-3)).

Po nočnom lačnení pripadá asi 90 % glukoneogenézy na pečeň a 10 % na obličku; pri dlhom hladovaní podiel obličky stúpa až k 40 %. Oblička pritom využíva glutamín: odštiepi z neho amoniak, uhlíkovú kostru (2-oxoglutarát) pošle ku glukóze a amoniak v moči viaže kyseliny, ktorých pri hladovaní s ketolátkami pribúda. Glukoneogenézu vie aj črevná sliznica, najmä pri strave bohatej na bielkoviny.

### 4.5.2 Prvá obchádzka: z pyruvátu na fosfoenolpyruvát

Pyruvátkináza je nevratná, a tak cesta od pyruvátu späť vedie okľukou cez štvoruhlíkový oxalacetát a cez mitochondriu (Obr. 4.7). Stojí dve makroergické väzby namiesto jednej, ktorú pyruvátkináza získala.

![Obr. 4.7 — Prvá obchádzka glukoneogenézy. Pyruvát sa v mitochondrii karboxyluje, oxalacetát cestuje do cytosolu „prezlečený“ za malát a tam z neho vznikne fosfoenolpyruvát. CO₂, ktoré jeden enzým pridal, druhý zasa odštiepi – slúžilo len na aktiváciu.](fig/fig-obchadzka-pyruvat.svg)

> [!MECH]
> **Dva enzýmy a jeden člnok**
> 1. **Pyruvátkarboxyláza** (mitochondria): pyruvát + CO₂ + ATP → oxalacetát + ADP + P<sub>i</sub>. Nevratný. CO₂ nesie **biotín** viazaný na enzým. Bez acetyl-CoA je enzým takmer neaktívny.
> 2. **Prenos do cytosolu.** Oxalacetát cez vnútornú membránu mitochondrie neprejde. Zredukuje sa na malát, ten prenesie prenášač a v cytosole sa oxiduje späť. Je to polovica malát-aspartátového člnku pustená opačným smerom ([→ 4.3.2](#sub-4-3-2)): vodíky tentoraz cestujú z matrix von. Vedľajším ziskom je NADH v cytosole – presne ten, ktorý bude glukoneogenéza potrebovať pri obrátenom kroku 6.
> 3. **Fosfoenolpyruvátkarboxykináza (PEPCK)**: oxalacetát + GTP → fosfoenolpyruvát + CO₂ + GDP. Nevratný. Odchod CO₂ pomáha vytvoriť enolfosfát.

Od fosfoenolpyruvátu po fruktóza-1,6-bisfosfát ide dráha vratnými krokmi glykolýzy odzadu. Dva z nich pritom platia: obrátená fosfoglycerátkináza spotrebuje ATP a obrátená glyceraldehyd-3-fosfátdehydrogenáza NADH.

> [!ZAPAMATAJ]
> Pyruvátkarboxylázu má aj sval, hoci glukózu nevyrába. Oxalacetát tam slúži len na dopĺňanie citrátového cyklu – tá istá reakcia, iný účel ([→ 6.6 Križovatka: odber a doplnenie](06_acetyl_coa_citratovy_cyklus#sec-6-6)).

### 4.5.3 Druhá a tretia obchádzka: dve fosfatázy

Zvyšné dve obchádzky sú jednoduchšie: fosfát, ktorý kináza pridala z ATP, odštiepi fosfatáza vodou. ATP sa pritom nezíska späť – a práve preto sú oba smery nevratné.

```chain
fruktóza-1,6-bisfosfát + H₂O → (**fruktóza-1,6-bisfosfatáza**) → fruktóza-6-fosfát + Pᵢ ⇌ glukóza-6-fosfát
glukóza-6-fosfát + H₂O → (**glukóza-6-fosfatáza**, endoplazmatické retikulum) → **glukóza** + Pᵢ → GLUT2 → krv
```

Glukóza-6-fosfatáza je ten istý enzým, ktorý ukončuje rozklad glykogénu ([→ 3.7 Rozklad glykogénu](03_sacharidy_glykogen#sec-3-7)). Majú ju pečeň a oblička, sval a mozog nie – preto glykémiu dopĺňajú len orgány, ktoré vedia glukoneogenézu dotiahnuť do konca.

### 4.5.4 Bilancia: prečo sa glukóza nevyrába zadarmo

Súčet všetkých krokov od dvoch molekúl pyruvátu po glukózu ukazuje cenu:

```chain
2 pyruvát + 4 ATP + 2 GTP + 2 NADH + 2 H⁺ + 6 H₂O → **glukóza** + 4 ADP + 2 GDP + 6 Pᵢ + 2 NAD⁺
```

| Krok (2 × na glukózu) | Spotreba |
| --- | --- |
| pyruvátkarboxyláza | 2 ATP |
| fosfoenolpyruvátkarboxykináza | 2 GTP |
| fosfoglycerátkináza (odzadu) | 2 ATP |
| glyceraldehyd-3-fosfátdehydrogenáza (odzadu) | 2 NADH |

Glykolýza získala dve ATP, cesta späť stojí šesť makroergických väzieb. Rozdiel štyroch väzieb je cena za to, že oba smery majú záporné ΔG a idú samovoľne – a zároveň dôvod, prečo nesmú bežať naraz. Predpoklad výpočtu: východiskom je pyruvát; z laktátu vzniká potrebný NADH už pri jeho oxidácii, pri glycerole odpadá celá prvá obchádzka.

## 4.6 Regulácia: tri miesta, kde sa smery rozchádzajú

Keby glykolýza a glukoneogenéza bežali v jednej bunke súčasne, točili by glukózu v kruhu a každá otáčka by stála štyri makroergické väzby. Riadia sa preto recipročne ([→ 2.6 Hormonálny signál a recipročná regulácia](02_uvod_regulacia_metabolizmu#sec-2-6)), a to presne na tých troch miestach, kde má každý smer vlastný enzým. Sekcia ich prejde zhora nadol a nakoniec pridá pomalú reguláciu množstvom enzýmov; hlavným signálom bude fruktóza-2,6-bisfosfát (Fru-2,6-P₂). Platí najmä pre pečeň; sval a erytrocyt glukoneogenézu nemajú a regulujú len rýchlosť glykolýzy.

> [!JADRO]
> **PFK-1** je hlavný ventil: ↑ AMP a **Fru-2,6-P₂**, ↓ ATP a citrát. Glukagón v pečeni Fru-2,6-P₂ znižuje a pyruvátkinázu vypína fosfátom → cesta nadol stojí, nahor beží. **Acetyl-CoA** zapína pyruvátkarboxylázu.

| Miesto | Nadol (glykolýza) | Nahor (glukoneogenéza) | Čo rozhoduje |
| --- | --- | --- | --- |
| **vstup** – krok 1 | hexokináza, glukokináza | glukóza-6-fosfatáza | glykémia, produkt kroku, množstvo enzýmov |
| **ventil** – krok 3 | PFK-1 | fruktóza-1,6-bisfosfatáza | energia bunky (AMP, ATP, citrát) a hormón (Fru-2,6-P₂) |
| **výstup** – krok 10 | pyruvátkináza | pyruvátkarboxyláza, potom karboxykináza | dopredná aktivácia, fosforylácia, acetyl-CoA |

### 4.6.1 Vstup: hexokináza a glukokináza

Prvé miesto riadi skôr vstup glukózy do bunky než samotnú glykolýzu. Dva izoenzýmy sa správajú opačne, ako ukázala kapitola 2 ([→ 2.4.1 Substrát: Km a Vmax](02_uvod_regulacia_metabolizmu#sub-2-4-1)): **hexokináza** má nízke Km, pracuje naplno aj pri nízkej glykémii a brzdí ju vlastný produkt – keď sa glukóza-6-fosfát nemíňa, bunka prestane glukózu z krvi brať. **Glukokinázu** v pečeni produkt nebrzdí a jej rýchlosť sleduje glykémiu; spolu s GLUT2 je senzorom glukózy v pečeni a v β-bunke. Pri nízkej glykémii teda glukózu fosforyluje hexokináza tkanív, nie glukokináza pečene – mozog má prednosť.

### 4.6.2 Hlavný ventil: fosfofruktokináza-1 a fruktóza-2,6-bisfosfát

Zaväzujúci krok glykolýzy počúva dva druhy signálov naraz: stav vlastnej bunky a stav celého tela.

> [!REG]
> **Fosfofruktokináza-1 a jej protihráč**
> - **Energia bunky.** ATP je substrátom enzýmu, ale vo vyššej koncentrácii ho alostericky brzdí; rovnako citrát, ktorý hlási, že citrátový cyklus má paliva dosť. AMP enzým zapína. Vysoký pomer ATP : AMP teda glykolýzu spomalí, nízky zrýchli. Tým sa vysvetľuje dávno známy *Pasteurov efekt*: keď bunka dostane kyslík a začne tvoriť ATP dýchaním, glukózy spotrebúva menej a laktátu tvorí menej. Opačný jav – útlm dýchania po nadbytku glukózy, pozorovaný najmä v rýchlo sa deliacich bunkách – nesie meno *Crabtreeho efekt*.
> - **Hormón.** Najsilnejším aktivátorom je **fruktóza-2,6-bisfosfát** – zapne enzým aj pri vysokom ATP. Nie je medziproduktom glykolýzy, len signálom.
> - **Recipročne.** Fruktóza-1,6-bisfosfatázu brzdia tie isté dve látky, ktoré kinázu zapínajú: fruktóza-2,6-bisfosfát a AMP. Jeden signál tak otvorí jeden smer a zavrie druhý.

Odkiaľ sa fruktóza-2,6-bisfosfát berie, ukazuje Obr. 4.8. Tvorí aj rozkladá ho jediná bielkovina s dvoma doménami: kinázovou (fosfofruktokináza-2) a fosfatázovou. O tom, ktorá pracuje, rozhoduje v pečeni fosforylácia.

![Obr. 4.8 — Fruktóza-2,6-bisfosfát ako prepínač v pečeni. Hore glykolýza, dole glukoneogenéza, v strede signál. Jedna molekula zapína enzým jedného smeru a brzdí enzým druhého; jej hladinu určuje pomer inzulínu a glukagónu.](fig/fig-fruktoza-26.svg)

```chain
nalačno: ↑ glukagón → ↑ cAMP → proteínkináza A pridá fosfát na enzým s dvoma doménami → kinázová doména vypnutá, fosfatázová zapnutá → ↓ **Fru-2,6-P₂**
→ PFK-1 príde o aktivátor, jej protihráč o brzdu → glykolýza ↓, glukoneogenéza ↑ → pečeň vydáva glukózu → glykémia stúpne → glukagón klesne ⟳
```

Po jedle to isté opačne: inzulín vedie k defosforylácii, fruktóza-2,6-bisfosfátu pribudne a pečeň glukózu spaľuje a mení na tuk.

> [!POZOR]
> **Fosforylácia nemá v každom tkanive rovnaký význam.** Srdce má iný izoenzým bifunkčného enzýmu: keď mu pri nedostatku kyslíka stúpne AMP, kináza AMPK ho fosforyluje a tým kinázovú doménu naopak *zapne*; to isté urobí proteínkináza A, keď srdce povzbudí noradrenalín. Fruktóza-2,6-bisfosfátu pribudne a glykolýza zrýchli – srdce potrebuje ATP, nie šetriť glukózu pre iných ([→ 2.5.2 Alostéria](02_uvod_regulacia_metabolizmu#sub-2-5-2)). Izoenzým kostrového svalu fosforylácia nebrzdí vôbec; tam o rýchlosti glykolýzy rozhoduje energetický stav bunky.

### 4.6.3 Výstup: pyruvátkináza a pyruvátkarboxyláza

Na treťom mieste sa stretávajú tri signály; každý odpovedá na inú otázku.

| Signál | Enzým | Účinok | Čo tým bunka rieši |
| --- | --- | --- | --- |
| **fruktóza-1,6-bisfosfát** | pyruvátkináza | ⊕ | *dopredná aktivácia*: keď ventil hore pustí viac substrátu, koniec dráhy zrýchli vopred a medziprodukty sa nehromadia |
| **glukagón** → proteínkináza A | pyruvátkináza (pečeňový izoenzým) | fosforylácia ⊣ | fosfoenolpyruvát vyrobený glukoneogenézou sa nevráti na pyruvát |
| **alanín** | pyruvátkináza | ⊣ | veľa alanínu znamená prísun aminokyselín zo svalov – signál glukoneogenézy |
| **acetyl-CoA** | pyruvátkarboxyláza ⊕ (a pyruvátdehydrogenáza ⊣) | prepne osud pyruvátu | β-oxidácia beží → pyruvát netreba páliť, má ísť ku glukóze |

Posledný riadok vysvetľuje, prečo hladovanie a spaľovanie tukov idú ruka v ruke s tvorbou glukózy: MK glukózu nedajú, ale ich acetyl-CoA rozhodne, že pyruvát pôjde hore, nie do citrátového cyklu.

### 4.6.4 Pomalá regulácia: množstvo enzýmov

Predošlé mechanizmy zaberú za sekundy až minúty. Keď stav trvá hodiny a dni, mení sa aj počet molekúl enzýmov ([→ 2.5.4 Množstvo enzýmu](02_uvod_regulacia_metabolizmu#sub-2-5-4)). Strava bohatá na sacharidy a inzulín zvyšujú v pečeni prepis génov pre glukokinázu, fosfofruktokinázu-1 a pyruvátkinázu. Glukagón – a pri dlhšej záťaži kortizol a adrenalín – zvyšujú prepis génu pre fosfoenolpyruvátkarboxykinázu a ďalšie enzýmy glukoneogenézy; inzulín ho tlmí. Kortizol navyše uvoľňuje aminokyseliny zo svalových bielkovín, a tým dodáva substrát.

## 4.7 Medzi orgánmi a medzi stavmi

Glykolýza a glukoneogenéza neležia len v jednej bunke proti sebe; častejšie beží každá v inom orgáne a krv ich spája do kruhu. Sekcia najprv ukáže dva také kruhy a potom to, ako sa tok mení v jednotlivých tkanivách a stavoch.

> [!JADRO]
> **Coriho cyklus**: sval a erytrocyt → laktát → pečeň → glukóza → späť. Sval získa 2 ATP, pečeň zaplatí 6 – energia tukov sa tak dostane k tkanivám, ktoré tuk nespália. Alanín navyše odváža dusík.

![Obr. 4.9 — Coriho cyklus a glukózo-alanínový cyklus (⟳). Vľavo tkanivo, ktoré glukózu len štiepi, vpravo pečeň, ktorá ju z trojuhlíkových zvyškov skladá späť. Alanín prenáša okrem uhlíka aj aminoskupinu.](fig/fig-coriho-cyklus.svg)

Na prvý pohľad je Coriho cyklus stratový: za dve ATP získané vo svale zaplatí pečeň šesť. Zmysel dáva až otázka, odkiaľ pečeň tých šesť berie – z β-oxidácie MK. Erytrocyt MK spáliť nevie a sval pri prudkej práci nestíha; cyklus im sprostredkuje energiu tukových zásob vo forme glukózy. Zároveň odvádza laktát z krvi.

| Tkanivo | Glykolýza | Glukoneogenéza | Prečo |
| --- | --- | --- | --- |
| **erytrocyt** | jediný zdroj ATP; vždy po laktát | — | nemá mitochondrie |
| **kostrový sval** | v pokoji málo; pri prudkej práci po laktát | — | chýba glukóza-6-fosfatáza; rýchlosť určujú AMP a Ca²⁺ |
| **srdce** | pri nedostatku O₂ zrýchli (AMPK) | — | bežne spaľuje MK a laktát |
| **mozog** | stála, aeróbna | — | glukóza je hlavné palivo |
| **pečeň** | po jedle, pri nadbytku glukózy | nalačno, pri hladovaní, pri záťaži | prepína pomer inzulín : glukagón |

A to isté pre pečeň v čase – stavy organizmu z kapitoly 2 ([→ 2.3.3 Tri stavy organizmu](02_uvod_regulacia_metabolizmu#sub-2-3-3)):

| Stav | Signál | Fruktóza-2,6-bisfosfát | Tok v pečeni |
| --- | --- | --- | --- |
| **po jedle** | ↑ inzulín | vysoký | glukóza → pyruvát → acetyl-CoA → MK |
| **nalačno** | ↑ glukagón | nízky | laktát, alanín, glycerol → glukóza; glykogén sa štiepi |
| **hladovanie** (dni) | glukagón, kortizol | nízky | glukoneogenéza z aminokyselín a glycerolu; enzýmov pribudlo |
| **telesná záťaž** | adrenalín; laktát zo svalov | nízky | laktát → glukóza (Coriho cyklus) |

## 4.8 Poruchy: keď krok vypadne alebo sa preženie

Poruchy tejto cesty sa dajú zoradiť podľa toho, čo zlyhá: enzým glykolýzy, prísun kyslíka, alebo glukoneogenéza. V každom prípade stačí vedieť, ktoré tkanivo je na danom kroku závislé, a obraz sa dá odvodiť.

> [!JADRO]
> Chýba enzým glykolýzy → trpí **erytrocyt** (hemolytická anémia). Chýba kyslík → glykolýza po **laktát** → laktátová acidóza. Viazne glukoneogenéza (etanol, zlyhanie pečene) → **hypoglykémia nalačno** a laktát sa nemá kde spotrebovať.

### 4.8.1 Blok v glykolýze: deficit pyruvátkinázy

Vrodené defekty enzýmov glykolýzy sú vzácne a takmer vždy sa prejavia na erytrocyte, pretože ten inú cestu k ATP nemá. Asi 95 % pripadá na pyruvátkinázu; druhá je glukóza-6-fosfátizomeráza.

> [!MECH]
> **Od enzýmu k anémii**
> menej aktívna pyruvátkináza → erytrocyt tvorí málo ATP → iónové pumpy v membráne nestíhajú → bunka stráca tvar a pružnosť → slezina ju predčasne odstráni → **chronická hemolytická anémia**. Deficit sa týka len erytrocytov; ostatné tkanivá majú iný zdroj ATP.

> [!KLINIKA]
> **Aktivátor enzýmu ako liek.** Deficit pyruvátkinázy sa dlho liečil len podporne – transfúziami a kyselinou listovou, ktorú kostná dreň pri zrýchlenej tvorbe erytrocytov míňa. Mitapivat je liek, ktorý erytrocytovú pyruvátkinázu aktivuje – liečba tu nenahrádza chýbajúci produkt, ale zrýchľuje zostatkový enzým. V kontrolovanej štúdii sa hemoglobín zvýšil u 40 % liečených a u nikoho s placebom.

Deficit svalovej fosfofruktokinázy-1 má iný obraz – únavu a kŕče pri námahe; patrí medzi svalové glykogenózy ([→ 3.9.2 Prototyp svalovej glykogenózy a ostatné typy](03_sacharidy_glykogen#sub-3-9-2)).

### 4.8.2 Laktátová acidóza: tvorba prevýši odber

Laktát v krvi je výslednicou toho, koľko ho tkanivá tvoria a koľko ho pečeň, srdce a oblička odoberú. Stúpne, keď sa zvýši prvé, zníži druhé, alebo oboje.

```chain
zlyhanie obehu (šok, infarkt, pľúcna embólia, veľké krvácanie) → tkanivá bez O₂ → dýchací reťazec stojí, NADH sa hromadí
→ pyruvát nemá kam, len na laktát → ↑ **laktát** a s ním H⁺ → ↓ pH krvi → slabne srdce a obeh → ešte menej O₂ ⟳ (circulus vitiosus; bod zvratu: obnovenie prekrvenia)
```

| Mechanizmus | Príklady |
| --- | --- |
| **nadmerná tvorba** – chýba kyslík alebo ho nemožno využiť | šok a iné zlyhanie obehu, sepsa, prudká svalová práca; dedičné poruchy dýchacieho reťazca |
| **znížený odber** – pyruvát a laktát sa nemajú kam premeniť | zlyhanie pečene; nedostatok tiamínu (pyruvátdehydrogenáza); etanol |

> [!KLINIKA]
> **Laktát pri lôžku.** Pri podozrení na sepsu sa odporúča laktát zmerať a pri zvýšenej hodnote viesť liečbu tak, aby klesal – jeho pokles je znakom, že sa tkanivám vracia kyslík. Hodnota však nie je sama dosť citlivá ani špecifická: vždy sa číta spolu s krvným tlakom, prekrvením a stavom pacienta.

### 4.8.3 Keď viazne glukoneogenéza

Glukoneogenéza je po vyčerpaní glykogénu jediným zdrojom glukózy v krvi, takže jej útlm sa prejaví hypoglykémiou nalačno.

> [!KLINIKA]
> **Alkohol nalačno.** Oxidácia etanolu v pečeni mení NAD⁺ na NADH. Prebytok NADH posunie dve vratné reakcie: pyruvát → laktát a oxalacetát → malát. Glukoneogenéza tak príde o oba východiskové substráty. Ak je glykogén vyčerpaný – po hladovaní či dlhšom pití bez jedla – hrozí hypoglykémia a zároveň stúpa laktát.

> [!KLINIKA]
> **Metformín.** Najpoužívanejší liek na diabetes 2. typu znižuje glykémiu hlavne tým, že tlmí glukoneogenézu v pečeni. Ako presne, je predmetom sporu: staršie vysvetlenie cez útlm dýchacieho reťazca a aktiváciu AMPK platí len pre koncentrácie vyššie než liečebné; novšie práce ukazujú na zmenu redoxného stavu pečeňovej bunky.

Vrodene môže chýbať aj fruktóza-1,6-bisfosfatáza alebo glukóza-6-fosfatáza; glukoneogenéza sa vtedy zastaví na danom kroku. Druhý prípad je glykogenóza typu Ia ([→ 3.9.1 Prototyp pečeňovej glykogenózy: typ Ia](03_sacharidy_glykogen#sub-3-9-1)) – a teraz je zrejmé, prečo pri nej stúpa laktát: pečeň ho nemá ako premeniť na glukózu.

## 4.9 Laboratórium: laktát a laktátdehydrogenáza

Z celej cesty sa v krvi bežne merajú dve veci: koncový metabolit anaeróbnej glykolýzy a enzým, ktorý ho tvorí. Hovoria o celkom odlišných dejoch – laktát o tom, ako tkanivá práve hospodária s kyslíkom, enzým o tom, či sa bunky rozpadajú. Sekcia ide najprv k metabolitu, potom k enzýmu.

> [!JADRO]
> **Laktát** (plazma 0,5–2,2 mmol/l) = okamžitý obraz rovnováhy tvorby a odberu; meria sa enzýmovo cez NADH. **Laktátdehydrogenáza** v sére = únik z poškodených buniek; izoenzýmy napovedia, z ktorého tkaniva.

> [!LAB]
> **Laktát v plazme:** 0,5–2,2 mmol/l (rozpätie jedného slovenského nemocničného laboratória). Hodnota nad rozpätím je *hyperlaktatémia*; keď pritom klesne pH krvi, hovorí sa o *laktátovej acidóze*. Fyziologicky stúpa po námahe – k číslu preto patrí stav, v akom bola krv odobratá.

> [!LAB]
> **Laktát v mozgovomiechovom moku:** u dospelých približne 1,1–2,4 mmol/l (rozpätie jedného britského nemocničného laboratória); hranice sa s vekom mierne posúvajú. Zvýšenie svedčí napríklad pre bakteriálny zápal mozgových blán alebo ťažký nedostatok kyslíka v mozgu.

Stanovenie využíva tú istú reakciu, ktorou laktát v tele zaniká, pustenú v skúmavke jedným smerom.

> [!LAB]
> **Princíp enzýmového stanovenia laktátu**
> 1. K vzorke sa pridá laktátdehydrogenáza a NAD⁺ v nadbytku. Enzým oxiduje laktát na pyruvát a na každú molekulu laktátu vznikne jedna molekula NADH.
> 2. NADH sa buď meria priamo fotometricky, alebo sa jeho vodíky prenesú na farbivo, ktoré redukciou zmení farbu.
> 3. Absorbancia je úmerná koncentrácii laktátu; koncentrácia sa vypočíta z pomeru absorbancie vzorky a štandardu ([→ 3.10 Laboratórium: glykogén a glukóza vo vzorke](03_sacharidy_glykogen#sec-3-10)).

```chain
c(laktát) = A(vzorka) / A(štandard) × c(štandard)
príklad: štandard 4,0 mmol/l má A = 0,32; vzorka má A = 0,12 → c = 0,12 / 0,32 × 4,0 = **1,5 mmol/l** (v norme)
```

Opačne sa tá istá reakcia používa na meranie enzýmu: vzorka dodá laktátdehydrogenázu, substrát je v nadbytku a sleduje sa, ako rýchlo sa mení množstvo NADH ([→ 1.7.3 Aktivita enzýmu a jej jednotky](01_zaklady_biomolekuly#sub-1-7-3)).

> [!LAB]
> **Laktátdehydrogenáza v sére:** 1,83–4,12 µkat/l (to isté laboratórium). Enzým je v cytosole takmer všetkých buniek, takže zvýšená aktivita znamená rozpad buniek, ale nepovie ktorých. Izoenzýmy sa dajú oddeliť elektroforézou a ich vzor sa líši podľa toho, ktoré tkanivo enzým uvoľnilo – iný je po infarkte myokardu, iný pri chorobe pečene. Celková aktivita býva zvýšená aj pri nádoroch, napríklad pri lymfómoch a nádoroch semenníkov, kde pomáha sledovať priebeh choroby.

> [!POZOR]
> **Vzorka žije ďalej.** Erytrocyty v odobratej krvi pokračujú v glykolýze: glukózy ubúda a laktátu pribúda. Ak vzorka stojí bez fluoridu, nameraná glykémia je falošne nižšia a laktát falošne vyšší, než mal pacient.

## 4.10 Súhrn a rýchle rozlíšenie

Súhrn sleduje mapu z [→ 4.1](#sec-4-1): cesta nadol, pyruvát, cesta nahor, tri miesta regulácie, orgány, poruchy, meranie.

| Otázka | Odpoveď v jednej vete | Sekcia |
| --- | --- | --- |
| Ktoré kroky glykolýzy sú nevratné? | Prvý, tretí a desiaty: hexokináza (glukokináza), fosfofruktokináza-1, pyruvátkináza. | 4.2 |
| Kde vzniká ATP? | V krokoch 7 a 10 substrátovou fosforyláciou – z 1,3-bisfosfoglycerátu a z fosfoenolpyruvátu. | 4.2.2 |
| Kde vzniká NADH? | V kroku 6, glyceraldehyd-3-fosfátdehydrogenázou; je to jediná oxidácia dráhy. | 4.2.2 |
| Načo je 2,3-bisfosfoglycerát? | V erytrocyte znižuje afinitu hemoglobínu ku kyslíku; jeho tvorba stojí jedno ATP. | 4.2.3 |
| Prečo vzniká laktát? | Aby sa NADH zmenil späť na NAD⁺, keď to nemôže urobiť dýchací reťazec. | 4.3.1 |
| Ako sa vodíky cytosolového NADH dostanú k dýchaciemu reťazcu? | Člnkom: malát ich odovzdá NAD⁺ v matrix (≈ 2,5 ATP), glycerol-3-fosfát cez FAD koenzýmu Q (≈ 1,5 ATP). Samotný NADH membránou neprejde. | 4.3.2 |
| Aeróbna × anaeróbna glykolýza? | Obe dajú 2 ATP; aeróbna navyše 2 NADH a pyruvát pre mitochondriu, anaeróbna končí laktátom. | 4.4 |
| Koľko ATP dá glukóza spálená až na CO₂ a vodu? | Približne 30–32 podľa člnku (staršie 36–38). | 4.4 |
| Tri obchádzky na ceste nahor? | Pyruvátkarboxyláza a PEPCK (cez oxalacetát), potom dve fosfatázy namiesto PFK-1 a hexokinázy. | 4.5 |
| Čo stojí jedna glukóza z pyruvátu? | Šesť makroergických väzieb (štyri z ATP, dve z GTP) a dva NADH. | 4.5.4 |
| Hexokináza × glukokináza? | Hexokináza: nízke Km, brzdí ju produkt, všetky tkanivá; glukokináza: vysoké Km, bez inhibície, pečeň a β-bunka. | 4.6.1 |
| Čo robí fruktóza-2,6-bisfosfát? | Zapína fosfofruktokinázu-1 a brzdí fruktóza-1,6-bisfosfatázu; glukagón jeho hladinu znižuje, inzulín zvyšuje. | 4.6.2 |
| Fru-1,6-P₂ × Fru-2,6-P₂? | Prvý je medziprodukt a dopredu aktivuje pyruvátkinázu; druhý je len signál pre PFK-1. | 4.6 |
| Kam pošle pyruvát nadbytok acetyl-CoA? | Ku glukóze: zapne pyruvátkarboxylázu a pribrzdí pyruvátdehydrogenázu. | 4.6.3 |
| Coriho cyklus? | Laktát zo svalu a erytrocytov mení pečeň na glukózu; platí energiou z tukov. | 4.7 |
| Prečo deficit pyruvátkinázy poškodí práve erytrocyt? | Nemá mitochondrie, glykolýza je jeho jediný zdroj ATP. | 4.8.1 |
| Laktát × laktátdehydrogenáza v krvi? | Laktát hovorí o kyslíku v tkanivách, enzým o rozpade buniek. | 4.9 |

## 4.11 Otázky na zopakovanie

```quiz
? Prečo sa glukóza pred rozštiepením fosforyluje dvakrát a medzi tým izomerizuje na fruktózu?
= Aldoláza štiepi väzbu medzi uhlíkmi 3 a 4 a obe polovice majú ostať v bunke a pokračovať tou istou cestou. Izomerizácia posunie karbonyl na uhlík 2, takže štiepenie padne presne do stredu, a uvoľní hydroxyl na uhlíku 1 pre druhý fosfát. Výsledkom sú dve triózy, každá s jedným fosfátom, ktoré izomeráza prevedie na jednu látku. [→ 4.2.1](#sub-4-2-1)
? Fosfoester v 3-fosfoglyceráte ATP nevyrobí, fosfoenolpyruvát áno, hoci ide o ten istý fosfát o dva kroky ďalej. Čo sa zmenilo?
= Typ väzby. Mutáza presunie fosfát na uhlík 2 a enoláza odštiepi vodu; z esteru na hydroxyle vznikne enolfosfát. Jeho hydrolýza uvoľní oveľa viac energie než hydrolýza ATP, pretože uvoľnený enol hneď prejde na stabilný ketón – pyruvát. Preto pyruvátkináza vie fosfát preniesť na ADP a krok je nevratný. [→ 4.2.2](#sub-4-2-2) · [→ 1.2.2 Väzby medzi stavebnými jednotkami](01_zaklady_biomolekuly#sub-1-2-2)
? Čo by sa stalo s glykolýzou v erytrocyte, keby nemal laktátdehydrogenázu?
= Zastavila by sa po spotrebovaní zásoby NAD⁺. Krok 6 mení NAD⁺ na NADH a erytrocyt nemá mitochondrie, ktoré by NADH oxidovali. Jedinou cestou späť k NAD⁺ je redukcia pyruvátu na laktát. Bez nej by nevzniklo ani ATP z krokov 7 a 10. [→ 4.3](#sec-4-3)
? Bunke prudko stúpne AMP. Ktoré dva enzýmy to zaznamenajú a čo sa stane s tokom?
= Fosfofruktokinázu-1 AMP alostericky zapína, fruktóza-1,6-bisfosfatázu brzdí. Glykolýza zrýchli, glukoneogenéza sa zastaví – bunka, ktorej dochádza energia, palivo spaľuje a nevyrába. AMP je citlivý signál, lebo adenylátkináza mení už malý pokles ATP na veľký vzostup AMP. [→ 4.6.2](#sub-4-6-2) · [→ 2.5.2 Alostéria](02_uvod_regulacia_metabolizmu#sub-2-5-2)
? Ako glukagón jedným signálom zastaví glykolýzu v pečeni na dvoch miestach?
= Cez cAMP a proteínkinázu A, ktorá pridá fosfát dvom bielkovinám. Enzým s dvoma doménami sa prepne na fosfatázu a rozloží Fru-2,6-P₂, takže PFK-1 stratí hlavný aktivátor. Pečeňová pyruvátkináza sa fosfátom vypne. Zároveň sa odbrzdí fruktóza-1,6-bisfosfatáza – ten istý signál otvára cestu nahor. [→ 4.6.2](#sub-4-6-2) · [→ 4.6.3](#sub-4-6-3)
? Z acetyl-CoA mastných kyselín glukóza nevznikne. Prečo je napriek tomu ich oxidácia podmienkou glukoneogenézy pri hladovaní?
= Dodáva dve veci. ATP – jedna glukóza z pyruvátu stojí šesť makroergických väzieb. A acetyl-CoA, ktorý alostericky zapína pyruvátkarboxylázu a brzdí pyruvátdehydrogenázu, takže pyruvát ide na oxalacetát a ďalej ku glukóze namiesto spálenia. [→ 4.5.4](#sub-4-5-4) · [→ 4.6.3](#sub-4-6-3)
? Pri glykogenóze typu Ia chýba glukóza-6-fosfatáza. Prečo je hypoglykémia ťažšia než pri deficite pečeňovej fosforylázy a prečo stúpa laktát?
= Glukóza-6-fosfatáza je spoločným posledným krokom rozkladu glykogénu aj glukoneogenézy; jej výpadok zatvorí oba zdroje glukózy naraz. Pri deficite fosforylázy glukoneogenéza funguje. Laktát stúpa, lebo pečeň ho nevie premeniť na glukózu a nahromadený glukóza-6-fosfát sám odteká do glykolýzy. [→ 4.8.3](#sub-4-8-3) · [→ 3.9.1 Prototyp pečeňovej glykogenózy: typ Ia](03_sacharidy_glykogen#sub-3-9-1)
? Bunka srdca má kyslíka dosť a laktát netvorí. Ako obnovuje NAD⁺ pre krok 6, keď NADH do mitochondrie nevstúpi – a prečo by ten istý NADH v rýchlom svale vyniesol menej ATP?
= Vodíky prenesie člnok. V srdci je to malát-aspartátový: NADH zredukuje v cytosole oxalacetát na malát, ten prejde do matrix a odovzdá vodíky tamojšiemu NAD⁺; späť sa vracia ako aspartát. V cytosole ostane NAD⁺ a v matrix NADH, ktorý dá asi 2,5 ATP. Rýchly sval používa glycerolfosfátový člnok: vodíky z glycerol-3-fosfátu prevezme FAD na vonkajšej strane membrány a idú až na koenzým Q – prvá protónová pumpa sa obíde, výnos je asi 1,5 ATP. [→ 4.3.2](#sub-4-3-2) · [→ 7.7 Dovoz a vývoz: prenášače a člnky](07_biologicke_oxidacie#sec-7-7)
? Prípad: 8-ročné dieťa je od narodenia bledé, má žltkasté očné bielka a zväčšenú slezinu. V krvnom obraze anémia so zvýšeným počtom mladých erytrocytov; stavba hemoglobínu je normálna. Ktorá dráha a ktorý enzým sú najpravdepodobnejšie postihnuté?
= Glykolýza erytrocytu, najčastejšie pyruvátkináza. Erytrocyt bez mitochondrií má ATP len z glykolýzy; pri jej spomalení nestíhajú membránové pumpy, bunka stráca tvar a slezina ju predčasne odstráni – chronická hemolytická anémia. Ostatné tkanivá majú iné zdroje ATP alebo iný izoenzým, preto sú bez príznakov. [→ 4.8.1](#sub-4-8-1)
? Prípad: 45-ročného muža nájdu ráno zmäteného; posledné dva dni pil alkohol a nejedol. Glykémia 2,1 mmol/l, laktát 5,8 mmol/l. Vysvetli oba nálezy jedným mechanizmom.
= Oxidácia etanolu v pečeni zvýšila pomer NADH : NAD⁺. Pyruvát sa redukuje na laktát a oxalacetát na malát, takže glukoneogenéza stratí oba východiskové substráty. Glykogén je po dvoch dňoch bez jedla vyčerpaný – iný zdroj glukózy nie je, glykémia klesá. Laktát stúpa z toho istého dôvodu: namiesto premeny na glukózu sa hromadí. [→ 4.8.3](#sub-4-8-3) · [→ 3.4 Glykémia](03_sacharidy_glykogen#sec-3-4)
```

## 4.12 Zdroje

**Učebnice (kontrola faktov)**

- Harvey R. A., Ferrier D. R.: *Lippincott's Illustrated Reviews: Biochemistry*, 5. vyd., Philadelphia: Lippincott Williams & Wilkins, 2011. ISBN 978-1-60831-412-6. (glykolýza a jej regulácia, osudy pyruvátu, deficit pyruvátkinázy, laktátová acidóza; glukoneogenéza – obchádzky, substráty, regulácia)
- Lieberman M., Peet A.: *Marks' Basic Medical Biochemistry: A Clinical Approach*, 5. vyd., Philadelphia: Wolters Kluwer, 2018. ISBN 978-1-4963-2481-8. (celková rovnica glykolýzy, izoenzýmy laktátdehydrogenázy, laktát medzi tkanivami, izoenzým fosfofruktokinázy-2 v srdci, glukózo-alanínový cyklus)
- Rodwell V. W., Bender D. A., Botham K. M., Kennelly P. J., Weil P. A.: *Harper's Illustrated Biochemistry*, 31. vyd., New York: McGraw-Hill Education, 2018. ISBN 978-1-25-983793-7. (enoláza a fluorid, výťažok ATP na NADH a FADH₂, alanín a pyruvátkináza, glykolýza v nádoroch, izoenzýmy laktátdehydrogenázy v sére)

**Názvoslovie, odporúčania a prehľady**

- Evans L., Rhodes A., Alhazzani W. a kol.: Surviving Sepsis Campaign: international guidelines for management of sepsis and septic shock 2021. *Intensive Care Med* 2021;47:1181–1247. [doi:10.1007/s00134-021-06506-y](https://doi.org/10.1007/s00134-021-06506-y)
- Li X., Yang Y., Zhang B., Lin X., Fu X., An Y., Zou Y., Wang J.-X., Wang Z., Yu T.: Lactate metabolism in human health and disease. *Signal Transduct Target Ther* 2022;7:305. [doi:10.1038/s41392-022-01151-3](https://doi.org/10.1038/s41392-022-01151-3)
- Al-Samkari H., Galactéros F., Glenthøj A. a kol.: Mitapivat versus placebo for pyruvate kinase deficiency. *N Engl J Med* 2022;386:1432–1442. [doi:10.1056/NEJMoa2116634](https://doi.org/10.1056/NEJMoa2116634)
- LaMoia T. E., Shulman G. I.: Cellular and molecular mechanisms of metformin action. *Endocr Rev* 2021;42:77–96. [doi:10.1210/endrev/bnaa023](https://doi.org/10.1210/endrev/bnaa023)
- Gautier-Stein A., Mithieux G.: Intestinal gluconeogenesis: metabolic benefits make sense in the light of evolution. *Nat Rev Gastroenterol Hepatol* 2023;20:183–194. [doi:10.1038/s41575-022-00707-6](https://doi.org/10.1038/s41575-022-00707-6)
- Vadlakonda L., Dash A., Pasupuleti M., Anil Kumar K., Reddanna P.: Did we get Pasteur, Warburg, and Crabtree on a right note? *Front Oncol* 2013;3:186. [doi:10.3389/fonc.2013.00186](https://doi.org/10.3389/fonc.2013.00186)
- Leen W. G., Willemsen M. A., Wevers R. A., Verbeek M. M.: Cerebrospinal fluid glucose and lactate: age-specific reference values and implications for clinical practice. *PLoS One* 2012;7:e42745. [doi:10.1371/journal.pone.0042745](https://doi.org/10.1371/journal.pone.0042745)
- Fattizzo B., Cavallaro F., Marcello A. P. M. L., Vercellati C., Barcellini W.: Pyruvate kinase deficiency: current challenges and future prospects. *J Blood Med* 2022;13:461–471. [doi:10.2147/JBM.S353907](https://doi.org/10.2147/JBM.S353907)
- Forkasiewicz A., Dorociak M., Stach K. a kol.: The usefulness of lactate dehydrogenase measurements in current oncological practice. *Cell Mol Biol Lett* 2020;25:35. [doi:10.1186/s11658-020-00228-7](https://doi.org/10.1186/s11658-020-00228-7)
- PubChem (National Center for Biotechnology Information): záznamy zlúčenín – štruktúry molekúl v schémach. [pubchem.ncbi.nlm.nih.gov](https://pubchem.ncbi.nlm.nih.gov/)

**Obrázky**

Všetky schémy a vzorce v kapitole sú vlastné kresby (SVG); štruktúry molekúl sú overené v databáze PubChem. Súhrn je v registri `ZDROJE-OBRAZKOV.md`.
