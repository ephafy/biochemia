---
num: 2
title: Úvod do metabolizmu a princípy jeho regulácie
part: Lekárska biochémia
crumb: Mapa metabolizmu a jeho regulácia
eyebrow: Základy · mapa a riadenie
standfirst: Mapa, do ktorej zapadnú všetky ďalšie kapitoly. Prvá polovica ukazuje, čo telo robí s palivom – tri stupne rozkladu, tri križovatky, zásoby a ich striedanie po jedle a nalačno. Druhá polovica vysvetľuje, čo tento tok riadi – od vlastností jedného enzýmu po hormonálny signál pre celé telo.
deps: [→ 1.4 Reakcie a triedy enzýmov](01_zaklady_biomolekuly#sec-1-4) · [→ 1.5 Energia reakcie](01_zaklady_biomolekuly#sec-1-5)
next: [→ 3 Trávenie sacharidov a metabolizmus glykogénu](03_sacharidy_glykogen)
reviewed: —
---

## 2.1 Východisko a mapa: hospodárenie s palivom

Človek je medzi dvoma jedlami hodiny, v noci pol dňa, a pritom jeho bunky potrebujú energiu bez prestávky. Metabolizmus je spôsob, akým telo tento rozpor rieši: palivo z potravy sčasti hneď spáli, sčasti uloží a zo zásob ho zasa uvoľní presne vtedy a tam, kde treba. Kapitola má preto dve časti. Prvá ([→ 2.2](#sec-2-2), [→ 2.3](#sec-2-3)) opisuje **cesty** – kade palivo prúdi a kde sa ukladá. Druhá ([→ 2.4](#sec-2-4) až [→ 2.7](#sec-2-7)) opisuje **riadenie** – čo rozhoduje, ktorou cestou a ako rýchlo prúdi. Jazyk, ktorým sú zapísané (triedy enzýmov, ΔG, nevratný krok), zaviedla kapitola 1 ([→ 1.4 Reakcie a triedy enzýmov](01_zaklady_biomolekuly#sec-1-4), [→ 1.5 Energia reakcie: kam pôjde a ako ďaleko](01_zaklady_biomolekuly#sec-1-5)).

> [!JADRO]
> Metabolizmus = **cesty** (rozklad → acetyl-CoA → ATP; stavba a zásoby) + **riadenie** (enzým → signál v bunke → hormón). Tok sa prepína podľa stavu: po jedle ukladať, nalačno uvoľňovať.

Každá ďalšia kapitola knihy rozoberá jeden úsek tejto mapy a pýta sa na ňom to isté: načo dráha je, kde a kedy beží, akými krokmi, čo ju riadi, ako sa to zmeria a čo sa stane, keď krok vypadne.

```chain
potrava alebo zásoby → stavebné jednotky (glukóza, mastné kyseliny, aminokyseliny) → acetyl-CoA
→ citrátový cyklus: uhlíky odchádzajú ako CO₂, elektróny na NAD⁺ a FAD → dýchací reťazec + O₂ → **ATP** → práca bunky (pohyb, transport, syntézy)
```

Kyslík, ktorý táto cesta spotrebúva, nesie z pľúc k tkanivám hemoglobín v erytrocytoch ([→ 4.2.3 Odbočka erytrocytu: 2,3-bisfosfoglycerát](04_metabolizmus_glukozy#sub-4-2-3)). Popri ATP pri tom vzniká aj to, s čím sa telo musí vyrovnať: teplo, CO₂, ktorý vydýchnu pľúca, a kyslé splodiny, ktoré zaťažujú pH krvi ([→ 1.6.4 pH a tlmivé roztoky](01_zaklady_biomolekuly#sub-1-6-4)). Metabolizmus tak nie je len otázka energie, ale aj stálosti vnútorného prostredia.

## 2.2 Mapa metabolizmu: tri stupne, tri križovatky

Stovky reakcií sa dajú usporiadať do jednej schémy, ak sa na ne pozrieme podľa toho, čo robia s uhlíkom a s energiou. Sekcia najprv rozlíši dva smery (rozklad a stavbu), potom prejde rozklad po stupňoch a nakoniec povie, kde v bunke ktorá dráha leží.

> [!JADRO]
> **Katabolizmus** oxiduje a zbieha sa: veľa živín → málo medziproduktov → acetyl-CoA → CO₂ + ATP. **Anabolizmus** redukuje a rozbieha sa, platí ATP a NADPH. Križovatky: **glukóza-6-fosfát, pyruvát, acetyl-CoA**.

### 2.2.1 Katabolizmus a anabolizmus

Podľa smeru sa dráhy delia na rozkladné a stavebné; líšia sa vo všetkom, čo je pre reguláciu dôležité.

| | Katabolizmus | Anabolizmus |
| --- | --- | --- |
| Čo robí | veľké molekuly → malé | malé molekuly → veľké |
| Chemicky | oxidácia | redukcia |
| Energia | uvoľňuje – vzniká ATP | spotrebúva ATP |
| Koenzým elektrónov | NAD⁺, FAD (prijímajú) | NADPH (odovzdáva) |
| Tvar mapy | zbieha sa – rôzne živiny končia v tých istých medziproduktoch | rozbieha sa – z mála východísk veľa produktov |
| Kedy prevažuje | nalačno, pri záťaži | po jedle |

Oba smery sú spojené cez ATP a redukované koenzýmy: katabolizmus ich vyrába, anabolizmus míňa. Nikdy však nie sú zrkadlovým obrazom – aspoň jeden krok má každý smer vlastný, a práve tam sa dajú riadiť nezávisle ([→ 1.5 Energia reakcie](01_zaklady_biomolekuly#sec-1-5)).

### 2.2.2 Tri stupne a tri križovatky

Rozklad živín prebieha v troch stupňoch; delia sa podľa toho, aká veľká je molekula, s ktorou sa pracuje, a koľko energie sa pritom získa (Obr. 2.1).

> [!MECH]
> **Tri stupne získavania energie**
> 1. **Trávenie** – hydrolázy rozoberú veľké molekuly potravy na jednotky, ktoré sa dajú vstrebať (cukry, MK, aminokyseliny). ATP nevzniká; cieľom je dostať živiny do krvi.
> 2. **Cesta k acetyl-CoA** – bunky jednotky oxidujú na hŕstku spoločných medziproduktov; väčšina uhlíka skončí ako dvojuhlíkový acetyl zavesený na CoA. Vzniká trochu ATP a redukované koenzýmy.
> 3. **Spoločná oxidácia** – citrátový cyklus spáli acetyl na CO₂ a elektróny odovzdá NAD⁺ a FAD; dýchací reťazec ich prenesie na kyslík a z uvoľnenej energie vznikne väčšina ATP.

![Obr. 2.1 — Mapa metabolizmu v troch stupňoch. Vzorcom sú nakreslené tri križovatky, na ktorých sa rozhoduje o osude uhlíka; hrubé šípky sú nevratné kroky. Všimni si, že cesta od pyruvátu k acetyl-CoA je jednosmerná – z acetyl-CoA sa glukóza späť vyrobiť nedá.](fig/fig-mapa-metabolizmu.svg)

Na mape sú tri miesta, z ktorých vedie viac ciest; o tom, ktorou sa molekula vydá, rozhoduje regulácia.

| Križovatka | Odkiaľ prichádza | Kam môže ísť | Domov |
| --- | --- | --- | --- |
| **glukóza-6-fosfát** | z krvi (po fosforylácii glukózy) alebo zo zásoby | spálenie v glykolýze · uloženie do glykogénu · pentózy a NADPH · v pečeni výdaj do krvi | kap. 3, 4, 5 |
| **pyruvát** | glykolýza, laktát, časť aminokyselín | ďalej na acetyl-CoA · na laktát · späť ku glukóze | kap. 4, 6 |
| **acetyl-CoA** | pyruvát, MK, aminokyseliny | spálenie v citrátovom cykle · stavba MK a cholesterolu · ketolátky | kap. 6, 8, 10, 11 |

> [!POZOR]
> **Z tuku cukor nebude.** Krok od pyruvátu k acetyl-CoA je nevratný a obchádzka neexistuje. MK (okrem malej výnimky z kap. 8) preto glykémiu nezdvihnú – pri hladovaní musí glukózu dodať glukoneogenéza z laktátu, glycerolu a aminokyselín.

### 2.2.3 Kompartmenty bunky

Dráhy nie sú v bunke premiešané; každá má svoj priestor a membrána medzi nimi je sama nástrojom regulácie – čo cez ňu neprejde bez prenášača, to sa dá zadržať alebo pustiť.

| Kompartment | Dráhy |
| --- | --- |
| **cytosol** | glykolýza · pentózofosfátová dráha · glykogén (stavba aj rozklad) · stavba MK |
| **mitochondria** | β-oxidácia · citrátový cyklus · dýchací reťazec, v ktorom vzniká ATP · ketolátky |
| **oba priestory** (časť krokov v každom) | glukoneogenéza · tvorba močoviny |
| **endoplazmatické retikulum** | odštiepenie fosfátu z glukóza-6-fosfátu (pečeň) · stavba zložených lipidov |
| **jadro** | prepis génov – určuje, koľko ktorého enzýmu bunka má |

Rozklad a stavbu MK tak delí membrána: rozklad beží v mitochondrii, stavba v cytosole. Bunka bez mitochondrií – erytrocyt – má z celej mapy len cytosolovú časť, a preto žije výlučne z glukózy.

## 2.3 Palivá, zásoby a stavy organizmu

Mapa z predošlej sekcie platí pre jednu bunku; telo ako celok rieši navyše otázku, **kde** palivo uložiť a **kto** ho dostane, keď ho je málo. Sekcia ide od zásob cez požiadavky jednotlivých tkanív k trom stavom, medzi ktorými sa organizmus denne prepína.

> [!JADRO]
> Zásoba = **tuk** (≈ 85 % energie, bez vody); **glykogén** je malý, rýchly a pečeňový patrí všetkým. Mozog a erytrocyt potrebujú glukózu stále → po jedle ukladať (inzulín), nalačno uvoľňovať (glukagón).

### 2.3.1 Palivá a zásoby

Tri živiny a etanol sa líšia tým, koľko energie nesú na gram; rozhoduje o tom, ako veľmi je ich uhlík redukovaný ([→ 1.4.2 Oxidácia a redukcia](01_zaklady_biomolekuly#sub-1-4-2)).

| Palivo | Energia (kJ/g) | (kcal/g) | Zásobná forma |
| --- | --- | --- | --- |
| sacharidy | 17 | 4 | glykogén |
| bielkoviny | 17 | 4 | žiadna – každá bielkovina má funkciu |
| tuky | 38 | 9 | triacylglyceroly v tukovom tkanive |
| etanol | 29 | 7 | žiadna |

Bilancia zásob 70-kg muža ukazuje, prečo je hlavnou zásobou tuk:

| Zásoba | Množstvo | Energia | Podiel |
| --- | --- | --- | --- |
| triacylglyceroly (tukové tkanivo) | ≈ 15 kg | ≈ 570 MJ | ≈ 85 % uloženej energie |
| glykogén svalov | ≈ 400 g | ≈ 6,8 MJ | spolu s pečeňovým necelé 2 % |
| glykogén pečene (po jedle) | ≈ 100 g | ≈ 1,7 MJ | |

Predpoklad výpočtu: energia = hmotnosť × energetická hodnota z predošlej tabuľky (tuky 38 kJ/g, glykogén 17 kJ/g); ide o orientačné hodnoty pre priemerného muža.

Dôvod je dvojaký. Tuk nesie na gram vyše dvojnásobok energie a ukladá sa takmer bez vody – tukové tkanivo jej má len asi 15 %, kým sval okolo 80 %. Rovnaká energia uložená v glykogéne by vážila mnohonásobne viac. Glykogén má však to, čo tuk nie: dá sa mobilizovať v priebehu minút a dá z neho vzniknúť glukóza.

> [!KLINIKA]
> **Bielkoviny nie sú zásoba.** Telo nemá bielkovinu určenú len na uskladnenie aminokyselín. Keď pri dlhom hladovaní alebo ťažkej chorobe potrebuje aminokyseliny na tvorbu glukózy, berie ich zo svalov – stráca sa funkčné tkanivo. Úbytok svalovej hmoty (sarkopénia) preto nie je kozmetický problém, ale znak, že organizmus siahol na poslednú rezervu.

### 2.3.2 Čo ktoré tkanivo potrebuje

Tkanivá sa líšia výbavou enzýmov a organel, a tým aj palivom, ktoré vedia použiť. Zoradené sú od najprísnejších odberateľov po zásobárne.

| Tkanivo | Palivo | Prečo | Čo z toho plynie |
| --- | --- | --- | --- |
| **erytrocyt** | len glukóza | nemá mitochondrie | glykémia nesmie klesnúť nikdy |
| **mozog** | glukóza, ≈ 150 g denne; pri hladovaní aj ketolátky | MK mu ako palivo neslúžia | hlavný dôvod, prečo telo stráži glykémiu |
| **sval** | glukóza aj MK; k tomu svoj glykogén | chýba mu enzým, ktorý z glukóza-6-fosfátu uvoľní glukózu | jeho glykogén glykémiu nezdvihne |
| **pečeň** | MK a aminokyseliny | tento enzým má a vie glukózu aj vyrobiť | vydáva glukózu a ketolátky pre ostatných |
| **tukové tkanivo** | — (zásobáreň) | ukladá a uvoľňuje triacylglyceroly | nalačno z neho idú MK |

Živiny z čreva pritom nejdú do tela priamo: krv z čreva tečie portálnou žilou najprv do pečene, a až potom do systémového obehu. Pečeň tak vidí zloženie potravy ako prvá a rozhoduje, čo pustí ďalej.

### 2.3.3 Tri stavy organizmu

Podľa toho, ako dávno človek jedol, je telo v jednom z troch stavov; líšia sa hormonálnym signálom a smerom toku na mape.

| Stav | Kedy | Signál | Čo robí pečeň | Čo robí tukové tkanivo | Palivo mozgu |
| --- | --- | --- | --- | --- | --- |
| **po jedle** | hodiny po jedle | ↑ inzulín, ↓ glukagón | ukladá glykogén, tvorí tuk | ukladá triacylglyceroly | glukóza z potravy |
| **nalačno** | medzi jedlami, v noci | ↓ inzulín, ↑ glukagón | štiepi glykogén, spúšťa glukoneogenézu | uvoľňuje MK | glukóza z pečene |
| **hladovanie** | dni | inzulín veľmi nízky, glukagón vysoký | glykogén je vyčerpaný; glukoneogenéza a tvorba ketolátok | uvoľňuje MK naplno | glukóza + ketolátky (od ≈ 3. dňa) |

O smere nerozhoduje jeden hormón, ale **pomer inzulínu a glukagónu**. Tento stav „po jedle × nalačno × hladovanie“ bude sprevádzať každú dráhu v knihe – pri každej sa dá opýtať, v ktorom z troch stĺpcov beží a prečo. Pri telesnej záťaži a strese sa pridáva adrenalín, ktorý pôsobí rovnakým smerom ako glukagón: mobilizuje zásoby.

## 2.4 Enzým: rýchlosť reakcie a čo ju mení

Všetka regulácia nakoniec znamená jedno: zmeniť rýchlosť, akou určitý enzým premieňa substrát. Rýchlosť závisí od troch vecí – koľko je substrátu, či je prítomný inhibítor a v akom prostredí enzým pracuje – a podľa nich je sekcia rozdelená. Enzým pritom nemení ΔG reakcie ani jej rovnováhu, len znižuje aktivačnú energiu ([→ 1.5 Energia reakcie](01_zaklady_biomolekuly#sec-1-5)).

> [!JADRO]
> v = Vmax·[S] / (Km + [S]). **Km** = substrát pri polovičnej rýchlosti: pod ním enzým sleduje koncentráciu, nad ním je nasýtený. Kompetitívny inhibítor zvyšuje Km, nekompetitívny znižuje Vmax. pH a teplota menia tvar enzýmu.

### 2.4.1 Substrát: Km a Vmax

Ako rýchlosť rastie so substrátom, vystihuje rovnica, ktorú odvodili Michaelis a Mentenová; jej dve konštanty povedia o enzýme všetko podstatné.

```chain
v = Vmax · [S] / (Km + [S])
[S] hlboko pod Km → rýchlosť rastie úmerne substrátu · [S] = Km → v = ½ Vmax · [S] vysoko nad Km → enzým je nasýtený, v = Vmax
```

- **Vmax** je rýchlosť pri nasýtení; závisí od toho, koľko molekúl enzýmu bunka má.
- **Km** je koncentrácia substrátu, pri ktorej enzým pracuje polovičnou rýchlosťou; nízke Km znamená vysokú afinitu.

Praktický význam Km je v porovnaní s koncentráciou substrátu v tele. Enzým s Km hlboko pod bežnou koncentráciou je stále nasýtený a zmenu koncentrácie „nevidí“; enzým s Km blízko nej alebo nad ňou pracuje tým rýchlejšie, čím viac substrátu má – správa sa ako senzor. Presne tak sa líšia dva enzýmy, ktoré fosforylujú glukózu (Obr. 2.2).

![Obr. 2.2 — Dva enzýmy, jedna reakcia, rôzne Km (schematicky). Hexokináza je nasýtená už pri zlomku bežnej glykémie – tkanivo si berie glukózu stále rovnako. Glukokináza má Km okolo 10 mmol/l: po jedle, keď glykémia stúpne, pracuje rýchlejšie a pečeň odoberie prebytok.](fig/fig-kinetika.svg)

| | Hexokináza | Glukokináza |
| --- | --- | --- |
| Kde | väčšina tkanív | pečeň, β-bunky pankreasu |
| Km pre glukózu | nízke – nasýtená aj nalačno | vysoké, ≈ 10 mmol/l |
| Vmax | malá | veľká |
| Inhibícia produktom (glukóza-6-fosfát) | áno | nie |
| Zmysel | tkanivo dostane glukózu aj pri nízkej glykémii, ale nevezme viac, než spotrebuje | pečeň berie glukózu až pri nadbytku a vtedy veľa; β-bunka podľa nej „meria“ glykémiu |

Hexokináza a glukokináza sú **izoenzýmy**: katalyzujú tú istú reakciu, ale líšia sa stavbou, kinetikou a tkanivom. Izoenzýmy sú spôsob, akým tá istá dráha dostane v rôznych orgánoch rôzne vlastnosti.

> [!POZOR]
> **Alosterický enzým sa rovnicou Michaelisa a Mentenovej neriadi.** Jeho krivka má tvar S (sigmoidná): v úzkom rozmedzí koncentrácií prejde z takmer nulovej aktivity na takmer plnú. Preto sú riadiace enzýmy dráh spravidla alosterické – správajú sa ako vypínač, nie ako plynulý regulátor ([→ 2.5.2](#sub-2-5-2)).

### 2.4.2 Inhibítory

Látka, ktorá rýchlosť enzýmu znižuje, pôsobí jedným z dvoch spôsobov; rozlišujú sa podľa toho, kam sa na enzým viaže, a z toho plynie, ako menia Km a Vmax.

| | Kompetitívny inhibítor | Nekompetitívny inhibítor |
| --- | --- | --- |
| Kam sa viaže | do aktívneho miesta – podobá sa na substrát | mimo aktívneho miesta |
| Km | zdanlivo ↑ (treba viac substrátu) | nemení sa |
| Vmax | nemení sa | ↓ |
| Dá sa prekonať nadbytkom substrátu? | áno | nie |

> [!KLINIKA]
> **Liek ako kompetitívny inhibítor.** Statíny sa podobajú na substrát enzýmu, ktorý katalyzuje prvý nevratný krok syntézy cholesterolu, a obsadia jeho aktívne miesto. Bunka si cholesterolu vyrobí menej a musí ho viac odoberať z krvi – hladina cholesterolu v krvi klesne. Je to dôkaz pravidla zo sekcie 2.7: kto ovláda riadiaci krok, ovláda celú dráhu. Podrobne [→ 10 Metabolizmus cholesterolu a žlčových kyselín](10_cholesterol_zlcove_kyseliny).

### 2.4.3 Prostredie: pH a teplota

Aktivita enzýmu závisí od jeho priestorového tvaru a ten držia slabé interakcie ([→ 1.2.3 Nekovalentné interakcie](01_zaklady_biomolekuly#sub-1-2-3)). Všetko, čo ich mení, mení aj rýchlosť reakcie – v tele sú to najmä pH a teplota (Obr. 2.3).

![Obr. 2.3 — Vplyv pH a teploty na aktivitu enzýmu (schematicky). Vľavo: každý enzým má optimum pH tam, kde pracuje – pepsín v kyslom žalúdku, enzým cytosolu okolo pH 7. Vpravo: teplo reakciu zrýchľuje, kým enzým nezačne denaturovať; potom aktivita prudko padá.](fig/fig-ph-teplota.svg)

- **pH** mení náboj bočných reťazcov v aktívnom mieste aj na povrchu enzýmu ([→ 1.3.3 Aminokyseliny a bielkoviny](01_zaklady_biomolekuly#sub-1-3-3)). Krivka aktivity má tvar zvona s vrcholom pri *optime pH*, ktoré zodpovedá prostrediu, kde enzým pracuje.
- **Teplota** pôsobí dvoma protichodnými spôsobmi: molekuly sa pohybujú rýchlejšie, takže reakcia sa zrýchľuje, ale od istej teploty sa enzým rozbalí (denaturuje) a aktivita prudko klesá. Optimum väčšiny ľudských enzýmov leží medzi 35 a 40 °C.

> [!LAB]
> **Pepsín ako modelový enzým**
> Pepsín je žalúdočná endopeptidáza: štiepi peptidové väzby vnútri bielkovín potravy a pracuje v kyslej žalúdočnej šťave (pH 2–3). Pokus s ním ukazuje obe krivky z Obr. 2.3 naraz:
> - v kyslom prostredí pri telesnej teplote substrát (bielkovinu) štiepi,
> - po zneutralizovaní alebo zalkalizovaní aktivitu stráca,
> - po povarení je neaktívny aj v správnom pH – denaturácia tepla je nevratná,
> - v chlade pracuje pomaly, ale po zohriatí sa aktivita vráti – chlad enzým nezničí, len spomalí.

## 2.5 Úrovne regulácie: štyri spôsoby, ako zmeniť tok

Bunka má na zmenu rýchlosti enzýmu niekoľko nástrojov. Líšia sa tým, **čo** na enzýme menia, a z toho plynie, **ako rýchlo** zaberú a ako dlho účinok trvá. Zoradené sú od najrýchlejšieho po najpomalší; rýchle nástroje dolaďujú tok zo sekundy na sekundu, pomalé prestavujú bunku na nový režim.

> [!JADRO]
> **Substrát a kompartment** (hneď) → **alostéria** (hneď; signál z bunky) → **fosforylácia** (sekundy až minúty; signál hormónu) → **množstvo enzýmu** (hodiny až dni). Rýchle dolaďujú, pomalé prestavujú.

| Úroveň | Čo sa mení | Ako rýchlo | Odkiaľ prichádza signál | Príklad |
| --- | --- | --- | --- | --- |
| dostupnosť substrátu, kompartment | koľko substrátu sa k enzýmu dostane | okamžite | krv, prenášač cez membránu | glukokináza a glykémia |
| alostéria | tvar a afinita hotového enzýmu | okamžite | metabolity tej istej bunky | inhibícia konečným produktom |
| kovalentná modifikácia | fosfát na enzýme (alebo odštiepený kus reťazca) | sekundy až minúty | hormón cez druhého posla | glykogénfosforyláza |
| množstvo enzýmu | syntéza a rozklad enzýmu | hodiny až dni | hormóny, dlhodobý stav výživy | prestavba pečene pri hladovaní |

### 2.5.1 Dostupnosť substrátu a kompartment

Najjednoduchšia regulácia nepotrebuje žiadny signál: enzým, ktorý nie je nasýtený, zrýchli, keď substrátu pribudne ([→ 2.4.1](#sub-2-4-1)). O tom, koľko substrátu sa k nemu dostane, však často rozhoduje membrána. Glukóza sa do svalu a tukového tkaniva dostáva vo väčšom množstve len na pokyn inzulínu; mastná kyselina vstúpi do mitochondrie len s pomocou prenášača. Prenos cez membránu je preto častým riadiacim krokom – dráha za ním môže byť pripravená, a predsa stojí.

### 2.5.2 Alostéria: signál z vlastnej bunky

Alosterický enzým má okrem aktívneho miesta aj miesto pre *efektor* – malú molekulu, ktorá po naviazaní zmení jeho tvar a tým afinitu k substrátu. Pozitívny efektor enzým zapína, negatívny vypína. Účinok nastupuje okamžite a trvá len dovtedy, kým je efektor prítomný. Efektormi sú metabolity tej istej bunky, takže alostéria prenáša dva druhy správ.

**Správa o produkte.** Konečný produkt dráhy inhibuje enzým na jej začiatku – *spätná inhibícia*. Dráha sa tak sama vypne, keď je produktu dosť, a nespotrebúva substrát zbytočne.

```chain
A → B → C → D → **produkt**
keď produktu pribudne: produkt ⊣ prvý nevratný enzým (A → B) → celá dráha spomalí → produktu ubudne → inhibícia povolí ⟳
```

**Správa o energii.** ATP, ADP a AMP sú efektormi mnohých enzýmov. Citlivým ukazovateľom je najmä AMP: adenylátkináza z dvoch ADP robí ATP a AMP, takže aj malý pokles ATP sa prejaví výrazným vzostupom AMP. AMP potom zapína dráhy, ktoré ATP vyrábajú – vo svale aktivuje fosfofruktokinázu-1 v glykolýze aj glykogénfosforylázu.

> [!IMPORTANT]
> **[R] Revízia — energetický stav bunky číta aj kináza**
> **Kedysi:** energetický stav sa vysvetľoval len priamym, alosterickým pôsobením ATP, ADP a AMP na jednotlivé enzýmy.
> **Dnes:** bunka má navyše spoločný senzor – **AMP-aktivovanú proteínkinázu (AMPK)**. Aktivuje ju vzostup pomerov AMP : ATP a ADP : ATP; AMPK potom fosforyláciou zapína dráhy, ktoré ATP tvoria, a tlmí deje, ktoré ho spotrebúvajú. Signál „málo energie“ sa tak z alostérie prenáša aj na úroveň kovalentnej modifikácie a zasiahne naraz veľa dráh.

### 2.5.3 Kovalentná modifikácia: fosforylácia a zymogény

Pri kovalentnej modifikácii sa na hotovom enzýme zmení kovalentná väzba. Podľa toho, či sa zmena dá vrátiť, ide o dva odlišné nástroje.

**Vratná: fosforylácia.** Proteínkináza prenesie fosfát z ATP na hydroxyl serínu, treonínu alebo tyrozínu v enzýme; fosfoproteínfosfatáza ho vodou odštiepi. Dva záporné náboje fosfátu zmenia tvar enzýmu – niektoré enzýmy fosforylácia zapne, iné vypne. V tom je jej sila: jedna kináza môže tým istým krokom zapnúť rozklad a vypnúť syntézu tej istej látky.

| Enzým | S fosfátom | Bez fosfátu |
| --- | --- | --- |
| glykogénfosforyláza (štiepi glykogén) | **aktívna** | neaktívna |
| glykogénsyntáza (stavia glykogén) | neaktívna | **aktívna** |

Signál na fosforyláciu prichádza spravidla zvonka bunky, od hormónu ([→ 2.6](#sec-2-6)). Oproti alostérii je o niečo pomalšia (sekundy až minúty), ale účinok vydrží, aj keď signál na chvíľu zoslabne, a jedna molekula hormónu ho cez kaskádu kináz mnohonásobne zosilní.

**Nevratná: aktivácia zymogénu.** Niektoré enzýmy sa tvoria ako neaktívny predstupeň – *zymogén* (proenzým) – s úsekom reťazca navyše, ktorý bráni aktivite. Odštiepením tohto úseku vznikne aktívny enzým; cesta späť neexistuje, enzým sa dá už len rozložiť.

```chain
hlavné bunky žalúdka → pepsinogén (neaktívny) → v žalúdku: HCl zmení jeho tvar → odštiepi sa úsek reťazca → **pepsín**
pepsín sám štiepi ďalší pepsinogén (autokatalýza) → aktivácia sa lavínovite zrýchľuje ⟳
```

Zmysel je ochranný: proteáza, ktorá by bola aktívna už v bunke, kde vzniká, by ju strávila. Rovnako vznikajú trypsín a chymotrypsín v pankrease, inzulín (z proinzulínu) a faktory zrážania krvi.

> [!ZAPAMATAJ]
> Kyselina chlorovodíková má v žalúdku dve úlohy naraz: aktivuje pepsinogén a denaturuje bielkoviny potravy, čím odkryje ich peptidové väzby. Sama bielkoviny neštiepi – na to je príliš zriedená.

### 2.5.4 Množstvo enzýmu

Najpomalšia, ale najtrvalejšia regulácia mení počet molekúl enzýmu, a teda Vmax. Bunka zrýchli alebo spomalí prepis génu a syntézu enzýmu (*indukcia* a *represia*) alebo zmení rýchlosť, akou enzým rozkladá. Účinok sa prejaví po hodinách až dňoch.

Podľa toho sa enzýmy delia na *konštitutívne*, ktorých je v bunke stále rovnako, a *indukovateľné*, ktorých množstvo sa prispôsobuje potrebe. Takto sa pečeň pri prechode z bežného striedania jedla a lačnenia do dlhého hladovania postupne prestaví: enzýmov glukoneogenézy pribudne, enzýmov na ukladanie tuku ubudne. Rýchle nástroje rozhodujú o tom, čo bunka robí v tejto chvíli; množstvo enzýmov určuje, čo vôbec dokáže.

## 2.6 Hormonálny signál a recipročná regulácia

Nástroje z predošlej sekcie pracujú v jednej bunke. Aby sa pečeň, sval a tukové tkanivo správali ako celok, musí im niekto povedať, v akom stave telo je – to je úloha hormónov. Sekcia ukazuje na jednom príklade celú cestu: od zmeny glykémie cez hormón a signál v bunke až po fosforyláciu dvoch protismerných enzýmov.

> [!JADRO]
> ↓ glykémia → **glukagón** → cAMP → proteínkináza A → **fosforylácia**: rozklad glykogénu zap., syntéza vyp. ↑ glykémia → **inzulín** → fosfatáza → **defosforylácia**: opačne. Protismerné dráhy nikdy nebežia naraz.

> [!REG]
> **Glykémia – regulačná slučka so dvoma hormónmi**
> - **Snímač:** bunky Langerhansových ostrovčekov. V β-bunke rozhoduje glukokináza a pomer ATP/ADP: viac glukózy → viac ATP → zavrie sa draslíkový kanál závislý od ATP → výdaj inzulínu. Pri poklese glykémie vydajú α-bunky glukagón.
> - **Prenos do bunky:** glukagón (a adrenalín) sa naviaže zvonka na membránu; v bunke stúpne cAMP, ten prebudí proteínkinázu A a tá rozdá fosfáty enzýmom. Receptor inzulínu je sám tyrozínkináza; na konci jeho signálnej cesty stojí fosfoproteínfosfatáza, ktorá fosfáty z enzýmov zasa odoberie.
> - **Riadiaci krok:** fosforylácia a defosforylácia enzýmov, ktoré stoja na nevratných krokoch protismerných dráh.
> - **Výsledok ⟳:** pečeň glukózu vydá alebo uloží → glykémia sa vráti → podnet na výdaj hormónu zanikne.

![Obr. 2.4 — Regulačná slučka glykémie na príklade pečeňového glykogénu (⟳). Zelené „↑“ a červené „↓“ pri enzýmoch ukazujú, že ten istý zásah – fosforylácia – jeden enzým zapne a druhý vypne. Glukagón a inzulín sa stretávajú na tých istých enzýmoch z opačných strán.](fig/fig-hormonalna-slucka.svg)

Usporiadanie na obrázku sa volá **recipročná regulácia** a opakuje sa pri každej dvojici protismerných dráh. Jeho zmysel vidno, keď si predstavíme opak: keby rozklad aj syntéza glykogénu bežali naraz, glukóza by sa točila v kruhu a jediným výsledkom by bola spotreba ATP – *jalový cyklus*. Pretože oba enzýmy počúvajú ten istý signál s opačným znamienkom, zapnutie jednej dráhy druhú automaticky vypne.

| Dvojica protismerných dráh | Zapína inzulín (po jedle) | Zapína glukagón (nalačno) | Domov |
| --- | --- | --- | --- |
| glykogén | syntézu | rozklad | kap. 3 |
| glukóza | glykolýzu (v pečeni) | glukoneogenézu | kap. 4 |
| MK | stavbu | β-oxidáciu | kap. 8 |
| triacylglyceroly v tukovom tkanive | ukladanie | lipolýzu | kap. 9 |

Mechanizmy v jednotlivých dráhach sa líšia v detailoch, logika je rovnaká. Receptory a druhí poslovia tu vystupujú len v rozsahu, ktorý treba na pochopenie regulácie dráh; ich úplný výklad patrí do časti knihy o prenose signálu.

> [!KLINIKA]
> **Diabetes ako porucha signálu, nie nedostatok paliva.** Keď pri diabete 1. typu chýba inzulín, bunky dostávajú len signál glukagónu – „hladovanie“ – hoci glukózy je v krvi nadbytok. Pečeň ďalej vydáva glukózu, z tukových zásob prúdia MK a pečeň z nich robí ketolátky: hyperglykémia a ketoacidóza súčasne ([→ 1.6.4 pH a tlmivé roztoky](01_zaklady_biomolekuly#sub-1-6-4)). Podanie inzulínu vráti signál, a tým aj smer všetkých dráh.

## 2.7 Riadiaci krok: ako ho v dráhe nájsť

Dráha s desiatimi enzýmami sa neriadi na desiatich miestach. Tok určuje jeden alebo niekoľko krokov a bunka sústreďuje všetky nástroje regulácie práve na ne. Sekcia dáva pravidlá, podľa ktorých sa riadiaci krok spozná aj v dráhe, ktorú čitateľ vidí prvý raz, a ukazuje, čo sa stane, keď enzým chýba úplne.

> [!JADRO]
> Riadiaci krok = **nevratný**, spravidla **prvý, ktorý dráhu zaväzuje**, najpomalší, s **alosterickým** enzýmom, ktorý počúva aj hormón. Blok enzýmu: pred ním sa hromadí substrát, za ním chýba produkt, substrát uniká bočnou cestou.

Riadiaci enzým má spravidla všetky tieto vlastnosti naraz:

- **katalyzuje nevratný krok** – len tam zmena aktivity enzýmu zmení tok; vratný krok by sa jednoducho ustálil v novej rovnováhe ([→ 1.5 Energia reakcie](01_zaklady_biomolekuly#sec-1-5)),
- **stojí na začiatku alebo hneď za vetvením** – je to prvý krok, po ktorom už medziprodukt nemá inú cestu (*zaväzujúci krok*); regulovať neskôr by znamenalo hromadiť medziprodukty,
- **je najpomalší** – jeho rýchlosť určuje rýchlosť celej dráhy,
- **je alosterický** a zároveň podlieha fosforylácii alebo zmene množstva – spája signál z bunky so signálom od hormónu,
- **v opačnej dráhe ho nahrádza iný enzým** – a ten je regulovaný opačne.

| Dráha | Riadiaci enzým | Domov |
| --- | --- | --- |
| glykolýza | fosfofruktokináza-1 | kap. 4 |
| rozklad a syntéza glykogénu | glykogénfosforyláza, glykogénsyntáza | kap. 3 |
| syntéza cholesterolu | enzým prvého nevratného kroku (cieľ statínov) | kap. 10 |

Kto v novej dráhe hľadá, kde sa reguluje, hľadá teda hrubé šípky v jej schéme – nevratné kroky – a pýta sa, ktorá z nich je prvá, za ktorou už niet odbočky.

> [!KLINIKA]
> **Čo sa stane, keď enzým chýba.** Vrodený defekt enzýmu je trvalý blok na jednom mieste mapy a jeho následky sa dajú predpovedať bez učenia naspamäť: (1) **pred blokom** sa hromadí substrát a to, čo z neho vzniká bočnými cestami; (2) **za blokom** chýba produkt; (3) príznaky spôsobuje jedno, druhé alebo oboje. Diagnostika hľadá nahromadenú látku v krvi alebo moči, liečba obmedzuje prísun substrátu alebo dopĺňa chýbajúci produkt. Tento postup sa vráti pri každej dedičnej poruche v knihe.

## 2.8 Laboratórium a klinika

Metabolizmus prebieha vnútri buniek, kam sa pri vyšetrení pacienta nedostaneme. Laboratórna medicína preto stojí na jednom predpoklade: zloženie krvi a moču odráža to, čo sa deje v tkanivách. Sekcia vysvetľuje, kedy tento predpoklad platí, a ukazuje ho na glykémii – veličine, ktorú strážia všetky mechanizmy tejto kapitoly.

> [!JADRO]
> Meriame **mimo bunky** (krv, moč) a usudzujeme na dej **v bunke**. Hodnota má zmysel len so stavom organizmu: glykémia nalačno < 5,6 mmol/l; ≥ 7,0 mmol/l = diabetes.

Najčastejšie sa vyšetruje krv a moč, pri cielenej otázke aj iná telesná tekutina, napríklad mozgovomiechový mok. Krv prináša tkanivám substráty a odnáša ich produkty, takže koncentrácia metabolitu v plazme je výslednicou toho, koľko ho tkanivá vydávajú a koľko odoberajú. Z jednej hodnoty sa preto nedá povedať, ktorá strana sa zmenila – vysoká glykémia môže znamenať, že pečeň vydáva priveľa, alebo že sval a tukové tkanivo odoberajú primálo. Rozlíši to až súvislosť: stav organizmu (nalačno, po jedle), ďalšie parametre a časový priebeh.

> [!LAB]
> **Glukóza v plazme nalačno** (najmenej 8 hodín bez jedla; kritériá ADA 2026)
> - menej než 5,6 mmol/l – norma,
> - 5,6–6,9 mmol/l – porušená glykémia nalačno,
> - 7,0 mmol/l (126 mg/dl) a viac – diabetes mellitus; bez jasných príznakov treba nález potvrdiť druhým vyšetrením.
>
> Tá istá hodnota 7,5 mmol/l je dve hodiny po jedle bežná, nalačno je nálezom – preto patrí k číslu vždy aj stav, v ktorom bola krv odobratá.

Že je glykémia nalačno u zdravého človeka taká stála, je priamym dôsledkom slučky z [→ 2.6](#sec-2-6): každá odchýlka vyvolá hormón, ktorý ju vráti. Laboratórna hodnota mimo rozpätia preto neznamená len „veľa glukózy“, ale „regulácia, ktorá ju mala vrátiť, zlyhala“ – a otázka znie, na ktorom mieste slučky: chýba hormón, neodpovedá naň tkanivo, alebo zlyháva orgán, ktorý má glukózu vydať či odobrať.

> [!KLINIKA]
> **Nízka glykémia ohrozuje mozog skôr než čokoľvek iné.** Mozog a erytrocyty nemajú za glukózu rýchlu náhradu (ketolátky nastupujú až po dňoch hladovania). Pri prudkom poklese glykémie – typicky po nadmernej dávke inzulínu – preto prichádzajú najprv príznaky z mozgu: zmätenosť, poruchy vedomia, kŕče. Glukóza podaná včas ich odstráni v priebehu minút.

## 2.9 Súhrn a rýchle rozlíšenie

Súhrn sleduje dve časti kapitoly z [→ 2.1](#sec-2-1): najprv cesty, potom riadenie.

| Otázka | Odpoveď v jednej vete | Sekcia |
| --- | --- | --- |
| Kade prúdi palivo? | Tri stupne: trávenie → acetyl-CoA → citrátový cyklus a dýchací reťazec; križovatky glukóza-6-fosfát, pyruvát, acetyl-CoA. | 2.2 |
| Čím sa líši rozklad od stavby? | Rozklad oxiduje, zbieha sa a dáva ATP a NADH; stavba redukuje, rozbieha sa a míňa ATP a NADPH. | 2.2.1 |
| Kde je energia uložená? | Asi 85 % v tuku; glykogén je malý a rýchly, bielkoviny nie sú zásoba. | 2.3.1 |
| Kto potrebuje glukózu stále? | Erytrocyt (nemá mitochondrie) a mozog (≈ 150 g denne). | 2.3.2 |
| Čo prepína stav organizmu? | Pomer inzulínu a glukagónu: po jedle ukladať, nalačno uvoľňovať. | 2.3.3 |
| Čo hovorí Km? | Koncentráciu substrátu pri polovičnej rýchlosti – enzým s vysokým Km sleduje koncentráciu, s nízkym je stále nasýtený. | 2.4.1 |
| Kompetitívny × nekompetitívny inhibítor? | Prvý zvyšuje Km a dá sa prekonať substrátom, druhý znižuje Vmax a nedá. | 2.4.2 |
| Ako rýchlo zaberie regulácia? | Substrát a alostéria hneď, fosforylácia do minút, množstvo enzýmu za hodiny až dni. | 2.5 |
| Alostéria × fosforylácia? | Alostéria nesie signál z vlastnej bunky (produkt, energia), fosforylácia signál hormónu. | 2.5.2, 2.5.3 |
| Prečo zymogény? | Proteáza má byť aktívna až tam, kde nič nepoškodí; aktivácia je nevratná. | 2.5.3 |
| Čo je recipročná regulácia? | Ten istý signál zapne jednu dráhu a vypne opačnú – nevznikne jalový cyklus. | 2.6 |
| Ako spoznám riadiaci krok? | Nevratný, prvý zaväzujúci, najpomalší, alosterický; v opačnej dráhe ho nahrádza iný enzým. | 2.7 |
| Čo spôsobí blok enzýmu? | Hromadenie pred blokom, nedostatok za ním, únik substrátu bočnou cestou. | 2.7 |

## 2.10 Otázky na zopakovanie

```quiz
? Prečo má telo ako hlavnú zásobu energie tuk, a nie glykogén, hoci glykogén sa mobilizuje rýchlejšie?
= Tuk nesie na gram viac než dvojnásobok energie (38 oproti 17 kJ/g) a ukladá sa takmer bez vody – tukové tkanivo jej má asi 15 %, sval okolo 80 %. Pätnásť kilogramov tuku tak drží asi 85 % uloženej energie; rovnaká energia v glykogéne by vážila mnohonásobne viac. Glykogén ostáva ako malá rýchla rezerva, z ktorej sa dá uvoľniť glukóza. [→ 2.3.1](#sub-2-3-1)
? Prečo svalový glykogén nepomôže mozgu pri hypoglykémii, hoci ho je štyrikrát viac než pečeňového?
= Aby sa glukóza dostala z bunky do krvi, musí z nej enzým odštiepiť fosfát – nabitý glukóza-6-fosfát cez membránu neprejde. Enzým, ktorý to robí (glukóza-6-fosfatáza), pečeň má, sval nie. Svalový glykogén preto skončí v glykolýze vlastnej bunky. [→ 2.3.2](#sub-2-3-2) · [→ 1.2.1 Funkčné skupiny](01_zaklady_biomolekuly#sub-1-2-1)
? Hexokináza a glukokináza katalyzujú tú istú reakciu. Čo by sa stalo po jedle bohatom na sacharidy, keby mala pečeň len hexokinázu?
= Hexokináza má nízke Km a je nasýtená už pri glykémii nalačno, navyše ju brzdí vlastný produkt glukóza-6-fosfát. Pečeň by po jedle nedokázala zvýšiť odber glukózy, prebytok by ostal v krvi a glykémia by stúpla vyššie a na dlhšie. Glukokináza s Km okolo 10 mmol/l zrýchľuje práve vtedy, keď glykémia rastie, a produkt ju nebrzdí. [→ 2.4.1](#sub-2-4-1)
? Podľa čoho v pokuse rozlíšiš kompetitívny inhibítor od nekompetitívneho?
= Pridaním veľkého nadbytku substrátu. Kompetitívny inhibítor súťaží o aktívne miesto, takže ho substrát vytlačí a rýchlosť dosiahne pôvodnú Vmax (zvýšené je len Km). Nekompetitívny sa viaže inde; nadbytok substrátu nepomôže a Vmax ostane znížená. [→ 2.4.2](#sub-2-4-2)
? Prečo sa pepsín po povarení neobnoví, ale po vybratí z chladničky áno?
= Var enzým denaturuje – rozbije slabé interakcie, ktoré držia jeho priestorový tvar, a reťazec sa už správne nezloží. Chlad tvar nemení, len spomaľuje pohyb molekúl; po zohriatí sa rýchlosť vráti. [→ 2.4.3](#sub-2-4-3) · [→ 1.2.3 Nekovalentné interakcie](01_zaklady_biomolekuly#sub-1-2-3)
? Prečo je výhodné, že glukagón reguluje glykogénfosforylázu fosforyláciou, a nie zmenou jej množstva?
= Glykémiu treba vrátiť v priebehu minút. Fosforylácia mení hotový enzým za sekundy až minúty, je vratná a signál sa kaskádou kináz zosilní; syntéza nového enzýmu by trvala hodiny. Tá istá kináza navyše tým istým krokom vypne glykogénsyntázu, takže nevznikne jalový cyklus. [→ 2.5.3](#sub-2-5-3) · [→ 2.6](#sec-2-6)
? V neznámej dráhe sú štyri kroky; prvý a tretí sú nevratné, za prvým sa dráha vetví. Ktorý enzým bude najskôr riadiaci a prečo nie druhý?
= Tretí: je nevratný a je prvý, po ktorom už medziprodukt nemá inú cestu (zaväzujúci krok). Prvý krok síce tiež môže byť regulovaný, ale jeho produkt slúži aj druhej vetve. Druhý krok je vratný – zmena aktivity enzýmu by len posunula rovnováhu, tok by nezmenila. [→ 2.7](#sec-2-7) · [→ 1.5 Energia reakcie](01_zaklady_biomolekuly#sec-1-5)
? Prípad: 19-ročný pacient, niekoľko dní smäd a časté močenie, teraz vracia a dýcha zhlboka. Glykémia 24 mmol/l, v moči ketolátky. Ako môže mať naraz nadbytok glukózy a „hladovať“?
= Chýba inzulín (diabetes 1. typu). Bez neho sval ani tuk glukózu z krvi neberú a všetky tkanivá dostávajú len signál glukagónu – ako pri hladovaní. Pečeň štiepi glykogén a tvorí ďalšiu glukózu, z tukových zásob prúdia MK a pečeň z nich robí ketolátky. Tie sú kyseliny: pH klesá a hlboké dýchanie je kompenzácia. [→ 2.6](#sec-2-6) · [→ 1.6.4 pH a tlmivé roztoky](01_zaklady_biomolekuly#sub-1-6-4)
? Prípad: dieťa s vrodeným defektom enzýmu, ktorý mení látku B na látku C v dráhe A → B → C → D. Čo budeš hľadať v krvi a moči a z čoho môžu byť príznaky?
= Pred blokom sa hromadí B (a možno A) a látky, ktoré z B vznikajú bočnými cestami – tie hľadáme v krvi a moči. Za blokom chýbajú C a D. Príznaky môžu byť z toxicity nahromadeného B, z nedostatku D alebo z oboch; podľa toho liečba obmedzuje prísun A alebo dopĺňa D. [→ 2.7](#sec-2-7)
```

## 2.11 Zdroje

**Učebnice (kontrola faktov)**

- Harvey R. A., Ferrier D. R.: *Lippincott's Illustrated Reviews: Biochemistry*, 5. vyd., Philadelphia: Lippincott Williams & Wilkins, 2011. ISBN 978-1-60831-412-6. (enzýmy – kinetika, inhibícia, regulácia a jej rýchlosť; úvod do metabolizmu; glykogén; trávenie bielkovín; inzulín a glukagón)
- Lieberman M., Peet A.: *Marks' Basic Medical Biochemistry: A Clinical Approach*, 5. vyd., Philadelphia: Wolters Kluwer, 2018. ISBN 978-1-4963-2481-8. (palivá a zásoby, stav po jedle a nalačno, požiadavky tkanív, regulačné enzýmy)
- Rodwell V. W., Bender D. A., Botham K. M., Kennelly P. J., Weil P. A.: *Harper's Illustrated Biochemistry*, 31. vyd., New York: McGraw-Hill Education, 2018. ISBN 978-1-25-983793-7. (kinetika enzýmov, regulácia aktivity, proenzýmy)

**Názvoslovie, odporúčania a prehľady**

- American Diabetes Association Professional Practice Committee: 2. Diagnosis and Classification of Diabetes: Standards of Care in Diabetes—2026. *Diabetes Care* 2026;49(Suppl 1):S27–S49. [doi:10.2337/dc26-S002](https://doi.org/10.2337/dc26-S002)
- Steinberg G. R., Hardie D. G.: New insights into activation and function of the AMPK. *Nat Rev Mol Cell Biol* 2023;24:255–272. [doi:10.1038/s41580-022-00547-x](https://doi.org/10.1038/s41580-022-00547-x)
- PubChem (National Center for Biotechnology Information): záznamy zlúčenín – štruktúry molekúl v schémach. [pubchem.ncbi.nlm.nih.gov](https://pubchem.ncbi.nlm.nih.gov/)

**Obrázky**

Všetky schémy a vzorce v kapitole sú vlastné kresby (SVG); štruktúry molekúl sú overené v databáze PubChem. Súhrn je v registri `ZDROJE-OBRAZKOV.md`.
