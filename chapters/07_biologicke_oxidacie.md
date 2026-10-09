---
num: 7
title: Biologické oxidácie, dýchací reťazec a tvorba ATP
part: Lekárska biochémia
crumb: Dýchací reťazec a ATP
eyebrow: Mitochondria · spád, priehrada, turbína
standfirst: Predošlé kapitoly končili vždy rovnako – „vodíky prevezme NAD⁺ a o zvyšok sa postará dýchací reťazec“. Táto kapitola ten zvyšok otvára. Elektróny z paliva padajú po spáde ku kyslíku, ich pád pumpuje protóny cez membránu ako vodu do priehrady a jediná turbína, ATP-syntáza, z toho robí ATP. Kto pozná tieto tri časti, vie povedať, čo urobí kyanid, čo dinitrofenol a prečo sa novorodenec zohreje bez triašky.
deps: [→ 1.5 Energia reakcie](01_zaklady_biomolekuly#sec-1-5) · [→ 4.4 Bilancia glykolýzy](04_metabolizmus_glukozy#sec-4-4) · [→ 6.4 Bilancia: čo koleso vynesie](06_acetyl_coa_citratovy_cyklus#sec-6-4)
next: [→ 8 Trávenie lipidov a metabolizmus mastných kyselín](08_lipidy_mastne_kyseliny)
reviewed: —
---

## 7.1 Východisko a mapa: spád, priehrada, turbína

Glykolýza, brána aj koleso citrátového cyklu odoberali palivu vodíky a ukladali ich na koenzýmy. Samy pritom vyrobili len hŕstku ATP priamo na substráte ([→ 6.4 Bilancia: čo koleso vynesie](06_acetyl_coa_citratovy_cyklus#sec-6-4)). Takmer všetka energia paliva je v tej chvíli uložená v NADH a FADH₂ – a až vnútorná membrána mitochondrie ju premení na ATP. Kapitola ide po ceste tej energie.

> [!JADRO]
> **Spád**: elektróny z NADH a FADH₂ → štyri komplexy → O₂. **Priehrada**: komplexy I, III, IV pumpujú H⁺ z matrix. **Turbína**: H⁺ späť cez ATP-syntázu → ATP. Tempo určuje **ADP**.

![Obr. 7.1 — Mapa kapitoly. Hore spád: vodíky z palív idú cez koenzýmy do reťazca. Vpravo priehrada a turbína. Dolu a vľavo obeh ATP a ADP; zelená čiara je spätná väzba, ktorou spotreba ATP riadi celý dej (⟳). Sivá prerušovaná čiara je únik energie ako teplo; dolu je rýchla zásoba. Krúžky so šípkou vedú na schémy jednotlivých častí.](fig/fig-energia-mapa.svg)

Poradie sekcií sleduje mapu: najprv mena, ktorou bunka platí ([→ 7.2](#sec-7-2)), potom pravidlá, podľa ktorých elektróny tečú ([→ 7.3](#sec-7-3)), samotný reťazec ([→ 7.4](#sec-7-4)), premena gradientu na ATP a jej výnos ([→ 7.5](#sec-7-5)), riadenie ([→ 7.6](#sec-7-6)), prenos cez membránu ([→ 7.7](#sec-7-7)), poruchy a jedy ([→ 7.8](#sec-7-8)) a meranie ([→ 7.9](#sec-7-9)).

## 7.2 ATP: obeživo, nie zásoba

ATP spája deje, ktoré energiu uvoľňujú, s dejmi, ktoré ju potrebujú ([→ 1.5 Energia reakcie](01_zaklady_biomolekuly#sec-1-5)). Bunka ho má málo – zásoba vystačí na sekundy – a preto ho nepretržite obnovuje. Sekcia najprv ukáže, kde v molekule energia je, a potom dva mechanizmy, ktoré hladinu ATP udržia, kým dobehne mitochondria.

> [!JADRO]
> V ATP sú makroergické len **dve anhydridové väzby** medzi fosfátmi (≈ −30,5 kJ/mol). ATP stojí uprostred rebríčka: nad ním fosfoenolpyruvát, 1,3-bisfosfoglycerát, kreatínfosfát; pod ním fosfoestery. **Kreatínfosfát** a **adenylátkináza** tlmia výkyvy.

### 7.2.1 Kde je v molekule energia

ATP má tri časti a tri fosfáty, no nie každá väzba fosfátu je rovnaká (Obr. 7.2).

![Obr. 7.2 — Adenozíntrifosfát. Modré kyslíky spájajú fosfáty anhydridovou väzbou; ich hydrolýza uvoľní veľa energie. Väzba prvého fosfátu na ribózu je obyčajný ester – rovnaký ako v glukóza-6-fosfáte. Výrez ukazuje dva spôsoby, akými bunka ATP štiepi.](fig/fig-atp-vzorec.svg)

> [!CHEM]
> **Čo znamená „makroergická“.** Hydrolýza koncového fosfátu ATP má ΔG°′ približne −30,5 kJ/mol; v bunke, kde je ATP oveľa viac než ADP a fosfátu, je to okolo −50 kJ/mol. Zlúčenina sa volá makroergická, ak jej hydrolýza uvoľní aspoň toľko. Nie je to vlastnosť „silnej“ väzby – naopak, produkty hydrolýzy sú oveľa stabilnejšie než východisková látka. V bunke je ATP viazaný na Mg²⁺.

Podľa toho, či zlúčenina stojí nad ATP alebo pod ním, sa dá povedať, ktorým smerom fosfát pôjde.

| | Nad ATP – fosfát odovzdajú na ADP {zel} | Pod ATP – fosfát z ATP prijímajú {fial} |
| --- | --- | --- |
| Typ väzby | enolfosfát, acylfosfát, fosfát na dusíku guanidínu | fosfoester, teda fosfát na hydroxyle |
| Príklady | fosfoenolpyruvát, 1,3-bisfosfoglycerát, kreatínfosfát | glukóza-6-fosfát, glycerol-3-fosfát, AMP |
| Kde sa s nimi čitateľ stretol | substrátové fosforylácie glykolýzy ([→ 4.2.2 Výnosná fáza: oxidácia a dve substrátové fosforylácie](04_metabolizmus_glukozy#sub-4-2-2)) | prvé kroky glykolýzy – „investícia“ |

Makroergické sú aj tioestery koenzýmu A, hoci fosfát neobsahujú: energia sukcinyl-CoA stačí na vznik GTP ([→ 6.3 Koleso: osem krokov citrátového cyklu](06_acetyl_coa_citratovy_cyklus#sec-6-3)). GTP a ostatné nukleozidtrifosfáty sú s ATP rovnocenné a fosfát si s ním vymieňajú (enzým *nukleoziddifosfátkináza*). Medzi makroergické zlúčeniny patria aj aktivované stavebné jednotky – UDP-glukóza pri stavbe glykogénu a aminoacyl-tRNA pri stavbe bielkovín: energia na novú väzbu je v nich vložená vopred ([→ 1.4.3 Kondenzácia a hydrolýza](01_zaklady_biomolekuly#sub-1-4-3)).

Bunka štiepi ATP dvoma spôsobmi. Väčšinou odchádza koncový fosfát a ostane ADP. Reakcie, ktoré potrebujú viac energie – napríklad aktivácia cukru nukleotidom ([→ 3.6 Syntéza glykogénu](03_sacharidy_glykogen#sec-3-6)) –, odštiepia dva fosfáty naraz ako difosfát; ten sa hneď rozloží, a tým sa reakcia stáva nevratnou (výrez v Obr. 7.2).

> [!POZOR]
> **ATP má tri fosfáty, ale len dve makroergické väzby.** Tretia – medzi ribózou a prvým fosfátom – je ester. Preto AMP medzi makroergické zlúčeniny nepatrí.

### 7.2.2 Rýchle zásobníky: kreatínfosfát a adenylátkináza

Sval, srdce a mozog vedia spotrebu ATP zvýšiť za zlomok sekundy; mitochondria tak rýchlo nezareaguje. Medzeru vypĺňajú dva enzýmy, ktoré nič nespaľujú – len presúvajú fosfát (Obr. 7.3).

![Obr. 7.3 — Kreatínkináza. Fosfát z ATP sa prenesie na dusík kreatínu; väzba N–P (modro) má viac energie než anhydrid v ATP, takže reakcia sa ľahko obráti. Výrez: čo sa so zásobou deje, keď sa nepoužije.](fig/fig-kreatinkinaza.svg)

> [!MECH]
> **Dva tlmiče výkyvov**
> - **Kreatínkináza**: kreatín + ATP ⇌ kreatínfosfát + ADP. V pokoji, pri nadbytku ATP, sa zásoba plní; pri práci reakcia beží späť a kreatínfosfát dopĺňa ATP v prvých sekundách.
> - **Adenylátkináza** (vo svale sa jej hovorí aj *myokináza*): 2 ADP ⇌ ATP + AMP. Z dvoch „napoly minutých“ molekúl vyrobí jednu plnú. Vedľajší produkt je zároveň signál: už malý pokles ATP znamená veľký vzostup AMP, a ten zapína glykolýzu a kinázu AMPK ([→ 2.5.2 Alostéria: signál z vlastnej bunky](02_uvod_regulacia_metabolizmu#sub-2-5-2)).

Kreatínfosfát sa samovoľne, bez enzýmu, uzatvára do kruhu na kreatinín, ktorý odchádza močom – jeho množstvo preto odráža svalovú hmotu (výrez v Obr. 7.3).

> [!LAB]
> **Kreatínkináza v sére:** menej než 2,85 µkat/l (rozpätie jedného slovenského nemocničného laboratória). Enzým je vnútri svalových a nervových buniek; v krvi stúpa, keď sa rozpadajú. Tri izoenzýmy – svalový, srdcový a mozgový – pomáhajú určiť tkanivo ([→ 4.9 Laboratórium: laktát a laktátdehydrogenáza](04_metabolizmus_glukozy#sec-4-9)).

## 7.3 Biologické oxidácie: odkiaľ a kam elektróny tečú

Oxidácia je strata elektrónov, v biochémii najčastejšie spolu s protónom ako vodík ([→ 1.4.2 Oxidácia a redukcia](01_zaklady_biomolekuly#sub-1-4-2)). Čím viac vodíkov na uhlíkoch palivo nesie, tým viac energie jeho oxidácia dá – preto má gram tuku vyše dvojnásobok energie gramu cukru ([→ 2.3.1 Palivá a zásoby](02_uvod_regulacia_metabolizmu#sub-2-3-1)). Aby sa dalo predpovedať, ktorá látka elektróny odovzdá a ktorá prijme, treba jedinú veličinu. Sekcia ju zavedie, potom roztriedi enzýmy podľa toho, čo robia s kyslíkom, a nakoniec predstaví tri prenášače, ktoré elektróny medzi enzýmami nosia.

> [!JADRO]
> Elektróny idú od nižšieho **redoxného potenciálu** k vyššiemu: NADH (−0,32 V) → … → O₂ (+0,82 V). Rozdiel 1,14 V = ≈ −220 kJ/mol. Dehydrogenázy dávajú vodík koenzýmu, oxidázy kyslíku, oxygenázy kyslík vkladajú do substrátu.

### 7.3.1 Redoxný potenciál: miera ochoty odovzdať elektrón

Každá dvojica oxidovanej a redukovanej formy má svoj štandardný redoxný potenciál E°′. Čím je zápornejší, tým ochotnejšie redukovaná forma elektróny odovzdá.

> [!MECH]
> **Od potenciálu k energii**
> - Elektróny tečú samovoľne od páru s nižším potenciálom k páru s vyšším.
> - Uvoľnená energia je úmerná rozdielu: ΔG°′ = −n · F · ΔE°′, kde n je počet elektrónov a F Faradayova konštanta (96,5 kJ na volt a mol).
> - Tabuľkové potenciály platia pre štandardné podmienky. Skutočný potenciál závisí od pomeru oxidovanej a redukovanej formy páru; vyjadruje to *Nernstova rovnica*: E = E°′ + (RT / nF) · ln([ox] / [red]).
> - NAD⁺/NADH má −0,32 V, ½ O₂/H₂O +0,82 V. Rozdiel 1,14 V pri dvoch elektrónoch dáva približne **−220 kJ/mol**.

Jedno ATP stojí 30,5 kJ/mol. Keby NADH odovzdal elektróny kyslíku naraz, energia by sa uvoľnila ako teplo. Reťazec ju preto rozkladá na menšie schody (Obr. 7.5), z ktorých niektoré stačia na prácu.

### 7.3.2 Štyri skupiny oxidoreduktáz

Enzýmy, ktoré katalyzujú oxidáciu a redukciu, tvoria prvú triedu názvoslovia ([→ 1.4.1 Sedem tried enzýmov](01_zaklady_biomolekuly#sub-1-4-1)). Podľa toho, akú úlohu má v reakcii kyslík, sa delia na štyri skupiny.

| Skupina | Čo robí s vodíkom a kyslíkom | Príklady |
| --- | --- | --- |
| **dehydrogenázy** | vodík prenesú na koenzým, kyslík nepotrebujú – oxidácia môže bežať aj bez neho | laktátdehydrogenáza (NAD⁺), glukóza-6-fosfátdehydrogenáza (NADP⁺), sukcinátdehydrogenáza (FAD) |
| **oxidázy** | vodík prenesú priamo na O₂; vznikne voda alebo peroxid vodíka | cytochróm-c-oxidáza (voda); xantínoxidáza, glukózaoxidáza, oxidáza L-aminokyselín (peroxid) |
| **hydroperoxidázy** | odstraňujú peroxidy | kataláza: 2 H₂O₂ → 2 H₂O + O₂; glutatiónperoxidáza ([→ 5.3 NADPH: redukčná sila bunky](05_pentozy_fruktoza_galaktoza#sec-5-3)) |
| **oxygenázy** | kyslík zabudujú do substrátu – oba atómy (dioxygenázy) alebo jeden, pričom druhý skončí vo vode (monooxygenázy, hydroxylázy) | monooxygenázy: cytochróm P450, fenylalanínhydroxyláza, dopamín-β-hydroxyláza; dioxygenáza: tryptofán-2,3-dioxygenáza |

> [!POZOR]
> **Oxidáza nie je dehydrogenáza.** Obe substrát oxidujú; rozdiel je v príjemcovi. Dehydrogenáza odovzdá vodík koenzýmu a o kyslíku „nevie“. Oxidáza ho odovzdá kyslíku. Väčšinu kyslíka, ktorý človek vdýchne, spotrebuje jediná oxidáza na konci dýchacieho reťazca.

### 7.3.3 Prenášače vodíka: NAD⁺, flavíny, koenzým Q

Medzi substrátom a kyslíkom stoja tri malé molekuly. Líšia sa tým, čo presne prenášajú a ako voľne sa pohybujú (Obr. 7.4).

![Obr. 7.4 — Tri prenášače vodíka. Vľavo celá molekula NAD⁺; pracuje len nikotínamidový kruh hore. Vpravo oxidované a redukované formy pracovných častí; modro sú atómy, ktoré vodík prijímajú. Krúžok pri flavíne rozbalí celý vzorec FAD.](fig/fig-prenasace-vodika.svg)

| | NAD⁺ / NADH | FAD, FMN | Koenzým Q (ubichinón) |
| --- | --- | --- | --- |
| Vitamín | niacín (B₃) | riboflavín (B₂) | — |
| Čo prijme | hydridový ión: dva elektróny a jeden protón; druhý protón ostane v roztoku | dva vodíky; vie aj po jednom elektróne | dva vodíky; aj po jednom |
| Väzba na enzým | voľný – putuje od enzýmu k enzýmu | pevne viazaný, súčasť enzýmu | voľný, ale len v membráne |
| Úloha | zbiera vodíky z dehydrogenáz matrix aj cytosolu | most medzi darcom dvoch elektrónov a prenášačmi jedného | zberné miesto elektrónov v reťazci |

Flavíny sú stavané po vrstvách: kruh s ribitolom je riboflavín, s jedným fosfátom FMN, s pripojeným AMP FAD (výrez v Obr. 7.4). Enzým, ktorý má flavín pevne viazaný, sa volá flavoproteín.

NADP⁺ sa od NAD⁺ líši jedným fosfátom (šípka v Obr. 7.4) a tým, kam elektróny nesie ([→ 5.3 NADPH: redukčná sila bunky](05_pentozy_fruktoza_galaktoza#sec-5-3)). Ďalej v reťazci už elektróny nenesú organické molekuly, ale železo: v centrách železo–síra a v héme cytochrómov, kde sa strieda Fe²⁺ a Fe³⁺ – na rozdiel od hemoglobínu, v ktorom železo ostáva dvojmocné.

## 7.4 Dýchací reťazec: spád, ktorý pumpuje protóny

Reťazec leží vo vnútornej membráne mitochondrie. Tá je – na rozdiel od vonkajšej, ktorá väčšinu malých molekúl prepustí – nepriepustná pre ióny vrátane protónov a je zriasená do záhybov (*kristy*), aby sa do nej reťazcov zmestilo čo najviac. Priestor medzi oboma membránami sa preto zložením podobá cytosolu; vnútro uzavreté vnútornou membránou je *matrix*. Štyri bielkovinové komplexy a dva pohyblivé prenášače sú zoradené podľa stúpajúceho redoxného potenciálu (Obr. 7.5).

> [!JADRO]
> NADH → **I** → Q → **III** → cytochróm c → **IV** → O₂. Sukcinát vstupuje cez **II** až na Q. Pumpujú I (4 H⁺), III (4 H⁺), IV (2 H⁺); II nie → NADH 10 H⁺, FADH₂ 6.

![Obr. 7.5 — Dýchací reťazec a ATP-syntáza. Tenké šípky sú cesta elektrónov, hrubé cesta protónov. Červeno sú inhibítory pri mieste, ktoré blokujú. Dolná os ukazuje, že každý ďalší člen má vyšší redoxný potenciál. Tri miesta sa dajú rozkliknúť: vnútro komplexov, ATP-syntáza a rozpojovač.](fig/fig-dychaci-retazec.svg)

> [!ZAPAMATAJ]
> **Cytochróm c mimo reťazca.** Keď sa naruší vonkajšia membrána a cytochróm c unikne do cytosolu, spustí tam kaskádu proteáz – kaspáz – a bunka riadene zanikne (*apoptóza*). Prenášač elektrónov je tak zároveň signálom, že mitochondria je poškodená.

> [!MECH]
> **Štyri komplexy a dva spoje**
> - **Komplex I** (NADH-Q-oxidoreduktáza). Prevezme z NADH dva elektróny, cez FMN a centrá železo–síra ich odovzdá koenzýmu Q a prečerpá 4 H⁺.
> - **Komplex II** je sukcinátdehydrogenáza z citrátového cyklu. Elektróny zo sukcinátu idú cez FAD a železo–síru tiež na Q. Energie je tu málo – nepumpuje.
> - **Koenzým Q** zbiera elektróny z oboch komplexov a z ďalších flavoproteínov membrány: z glycerol-3-fosfátdehydrogenázy ([→ 7.7](#sec-7-7)) a z prvého kroku β-oxidácie MK.
> - **Komplex III** (Q-cytochróm-c-oxidoreduktáza). Z redukovaného Q prenesie elektróny na cytochróm c a prečerpá 4 H⁺.
> - **Cytochróm c** je malá bielkovina na vonkajšom povrchu membrány; nosí po jednom elektróne.
> - **Komplex IV** (cytochróm-c-oxidáza) má hémy a a a₃ a meď. Štyri elektróny odovzdá molekule kyslíka: O₂ + 4 e⁻ + 4 H⁺ → 2 H₂O. Na pár elektrónov prečerpá 2 H⁺. Je to jediné miesto, kde sa dýchaný kyslík spotrebúva.

Miesto vstupu rozhoduje o výnose. Elektróny z NADH prejdú cez tri pumpy, elektróny z FADH₂ prvú obídu. To je celý dôvod, prečo FADH₂ „stojí“ menej ATP ([→ 6.3 Koleso: osem krokov citrátového cyklu](06_acetyl_coa_citratovy_cyklus#sec-6-3)).

> [!IMPORTANT]
> **[R] Revízia — komplexy nie sú osamelé ostrovy**
> **Kedysi:** štyri komplexy sa kreslili ako samostatné častice, ktoré v membráne voľne plávajú a elektróny si odovzdávajú pri náhodných stretnutiach.
> **Dnes:** kryoelektrónová mikroskopia ukázala, že sa v membráne spájajú do väčších celkov, *superkomplexov*. Aký to má význam pre rýchlosť a riadenie reťazca, sa ešte skúma; poradie prenosu elektrónov ani počty protónov sa tým nemenia.

## 7.5 Oxidačná fosforylácia: priehrada a turbína

Reťazec sám ATP netvorí. Jeho výsledkom je rozdiel koncentrácie protónov a náboja na dvoch stranách membrány; ATP vzniká až pri ich návrate. Sekcia opíše tento princíp, enzým, ktorý ho využíva, a nakoniec spočíta výnos.

> [!JADRO]
> **Chemiosmotický princíp**: prenos elektrónov a syntézu ATP nespája chemický medziprodukt, ale **protónový gradient**. ATP-syntáza je rotor poháňaný prúdom H⁺. Výnos: **≈ 2,5 ATP na NADH, ≈ 1,5 na FADH₂** (staršie 3 a 2).

> [!MECH]
> **Od gradientu k ATP**
> 1. Pumpy vytlačia H⁺ z matrix. Vonku je kyslejšie a kladnejšie; rozdiel pH a rozdiel náboja spolu tvoria *protónmotívnu silu*.
> 2. Membrána protóny späť nepustí. Jediná cesta vedie cez **ATP-syntázu**.
> 3. Syntáza má dve časti. **F₀** v membráne je kanál s prstencom podjednotiek, ktorý sa prúdom protónov otáča. **F₁** v matrix má tri katalytické miesta; do jej stredu zasahuje os spojená s prstencom.
> 4. Otáčanie osi mení tvar katalytických miest: miesto ADP a fosfát naviaže, spojí a hotové ATP uvoľní. V každej chvíli je každé z troch miest v inom z týchto stavov. Energiu si žiada najmä uvoľnenie ATP, nie vznik väzby (výrez v Obr. 7.5).

Mechanizmus vysvetľuje dve pozorovania, ktoré by inak boli záhadou: prečo syntéza ATP potrebuje neporušenú, uzavretú membránu a prečo látka, ktorá membránu pre protóny „prederaví“, zastaví tvorbu ATP, hoci enzýmy nepoškodí ([→ 7.8](#sec-7-8)).

### 7.5.1 Bilancia: koľko ATP za pár elektrónov

Výnos sa udáva ako pomer P/O – počet ATP na jeden atóm kyslíka, teda na pár elektrónov. Ráta sa z protónov.

| Darca | H⁺ prečerpané | H⁺ na 1 ATP | ATP (pomer P/O) | Predpoklad |
| --- | --- | --- | --- | --- |
| NADH (cez komplex I) | 4 + 4 + 2 = 10 | ≈ 4 | **≈ 2,5** | ≈ 3 H⁺ pretečú syntázou, ≈ 1 H⁺ stojí dovoz fosfátu a výmena ADP za ATP |
| FADH₂ (cez Q) | 4 + 2 = 6 | ≈ 4 | **≈ 1,5** | to isté |

Zo 220 kJ, ktoré uvoľní oxidácia jedného mólu NADH, sa v 2,5 mol ATP zachytí asi 76 kJ, teda zhruba 35 až 40 %. Zvyšok je teplo – nie strata, ale hlavný zdroj telesnej teploty.

> [!IMPORTANT]
> **[R] Revízia — 3 a 2, alebo 2,5 a 1,5?**
> **Kedysi:** na NADH sa rátali tri ATP a na FADH₂ dve – celé čísla, akoby každý komplex „vyrobil“ jedno ATP. S nimi vychádzalo 12 ATP na otáčku citrátového cyklu a 36–38 na glukózu.
> **Dnes:** výnos sa odvodzuje z počtu protónov, a tie na celé ATP nevychádzajú: približne **2,5 a 1,5**. Odtiaľ 10 ATP na otáčku a 30–32 na glukózu ([→ 4.4 Bilancia glykolýzy](04_metabolizmus_glukozy#sec-4-4)). Ani to nie sú presné konštanty: rotor syntázy stavovcov má osem podjednotiek a na jednu otáčku, teda tri ATP, treba osem protónov – skutočný výnos je preto o niečo vyšší než 2,5. Na skúške aj v učebniciach platí 2,5 a 1,5.

## 7.6 Regulácia: tempo určuje spotreba ATP

Reťazec nemá hormón ani kinázu, ktorá by ho zapínala. Riadi ho to, že je so syntázou *spriahnutý*: jedno bez druhého nebeží. Sekcia ukáže túto slučku a potom to, ako sa prejaví v štyroch stavoch bunky.

> [!JADRO]
> **Respiračná kontrola**: bez ADP sa H⁺ nevracajú → gradient narastie → pumpy nevládzu → prenos elektrónov a spotreba O₂ sa spomalí → NADH sa hromadí → brzdí cyklus aj bránu. Viac práce → viac ADP → všetko zrýchli.

> [!REG]
> **Riadiacim „krokom“ je dostupnosť ADP**
> - ATP-syntáza potrebuje ADP a fosfát. Keď bunka ATP nemíňa, ADP dôjde a syntáza zastane.
> - Protóny sa nemajú kadiaľ vrátiť, gradient stúpne na maximum a pumpy proti nemu už nedokážu čerpať. Elektróny v reťazci stoja, kyslík sa nespotrebúva.
> - NADH sa nemá kde oxidovať. Jeho nadbytok pribrzdí izocitrátdehydrogenázu, ďalšie dehydrogenázy cyklu a pyruvátdehydrogenázový komplex ([→ 6.5 Regulácia kolesa](06_acetyl_coa_citratovy_cyklus#sec-6-5)).

```chain
sval začne pracovať → ATP → ADP + Pᵢ → syntáza má substrát → H⁺ pretekajú → gradient klesne → pumpy a prenos elektrónov zrýchlia → ↑ spotreba O₂
→ NADH sa oxiduje → citrátový cyklus a glykolýza zrýchlia → ATP sa doplní → ADP klesne → dej sa spomalí ⟳
```

Jedna premenná – ADP – tak spája spotrebu kyslíka v pľúcach s prácou svalu. Tkanivo teda neberie viac kyslíka preto, že ho má viac k dispozícii, ale preto, že míňa ATP.

| Stav | Čo obmedzuje tempo | Spotreba O₂ | Tvorba ATP | Teplo |
| --- | --- | --- | --- | --- |
| **pokoj** | málo ADP | nízka | nízka, zodpovedá potrebe | základné |
| **práca** | kapacita reťazca a prísun paliva | vysoká | vysoká | vyššie – svalová triaška využíva práve toto |
| **nedostatok O₂** | chýba príjemca elektrónov | nulová | len glykolýza → laktát ([→ 4.8.2 Laktátová acidóza: tvorba prevýši odber](04_metabolizmus_glukozy#sub-4-8-2)) | klesá |
| **rozpojenie** | nič – gradient sa vybíja mimo syntázy | najvyššia | nízka až nulová | veľmi vysoké |

V pokusoch s izolovanými mitochondriami sa tie isté situácie označujú číslami. *Stav 3* je rýchle dýchanie, keď je substrátu aj ADP nadbytok a tempo obmedzuje len kapacita reťazca. *Stav 4* je pomalé dýchanie po vyčerpaní ADP – v ňom je väčšina buniek v pokoji. *Stav 5* je zastavenie pre nedostatok kyslíka. Stavy 1 a 2 sú východiskové: mitochondriám chýba substrát.

> [!MECH]
> **Ako telo zaznamená, že kyslíka ubúda**
> - **Za sekundy – karotické teliesko** pri vetvení krčnej tepny. Pokles kyslíka zatvorí v jeho bunkách draslíkové kanály; bunka sa depolarizuje, vstúpi do nej Ca²⁺ a uvoľnený prenášač podráždi nerv, ktorý zrýchli dýchanie.
> - **Za hodiny – každá bunka** zmenou prepisu génov. Faktor HIF-1α sa pri dostatku kyslíka neustále hydroxyluje na prolíne; bielkovina VHL ho podľa tejto značky pošle na rozklad. Bez kyslíka hydroxylázy nepracujú, HIF-1α sa hromadí a zapne gény pre erytropoetín, nové cievy a prestavbu metabolizmu ([→ 6.7.3 Onkometabolity: keď medziprodukt mení gény](06_acetyl_coa_citratovy_cyklus#sub-6-7-3)).

## 7.7 Dovoz a vývoz: prenášače a člnky

Nepriepustnosť vnútornej membrány je podmienkou gradientu, no zároveň prekážkou: ATP vzniká vnútri a treba ho vonku, a NADH z glykolýzy vzniká vonku a reťazec je vnútri. Sekcia prejde najprv prenos nukleotidov a potom dve cesty pre elektróny cytosolového NADH.

> [!JADRO]
> ADP dnu a ATP von vymieňa translokáza. NADH membránou neprejde – jeho elektróny nesú **člnky**: malát-aspartátový ich odovzdá matrixovému NAD⁺ (≈ 2,5 ATP), glycerolfosfátový rovno koenzýmu Q (≈ 1,5 ATP).

ATP z matrix vynáša a ADP dováža *translokáza adenínových nukleotidov* – jedno za jedno; brzdí ju jed atraktylozid, ktorý tak zastaví oxidačnú fosforyláciu bez toho, aby sa dotkol reťazca či syntázy. Fosfát má vlastný prenášač a vstupuje spolu s protónom; to je ten „štvrtý“ protón z bilancie ([→ 7.5.1](#sub-7-5-1)).

Pre NADH prenášač neexistuje. Bunka preto neprenáša koenzým, ale len jeho vodíky – na malej molekule, ktorá membránou prejde alebo sa oxiduje priamo na jej povrchu (Obr. 7.6).

![Obr. 7.6 — Dva člnky. Hore: malát prenesie vodíky do matrix; späť sa vracia ako aspartát, lebo oxalacetát membránou neprejde (⟳). Dole: glycerol-3-fosfát odovzdá vodíky enzýmu na vonkajšej strane membrány a ten ich pošle na koenzým Q. Obe redoxné reakcie horného člnku robí malátdehydrogenáza – jedna v cytosole, druhá v matrix.](fig/fig-clnky.svg)

| | Malát-aspartátový člnok | Glycerolfosfátový člnok |
| --- | --- | --- |
| Čo nesie vodíky | malát | glycerol-3-fosfát |
| Kde vodíky skončia | NAD⁺ v matrix → komplex I | FAD enzýmu v membráne → koenzým Q |
| Výnos na cytosolový NADH | ≈ 2,5 ATP | ≈ 1,5 ATP |
| Smer | vratný – ide len vtedy, keď je NADH v cytosole pomerne viac než v matrix | jednosmerný |
| Tkanivá | pečeň, srdce, oblička | mozog, rýchly kostrový sval |

Odtiaľ pochádza rozpätie „30 až 32 ATP na glukózu“: dva cytosolové NADH z glykolýzy dajú tri alebo päť ATP podľa toho, ktorým člnkom idú ([→ 4.4 Bilancia glykolýzy](04_metabolizmus_glukozy#sec-4-4)).

> [!ZAPAMATAJ]
> Malát ako „prezlečený“ oxalacetát už vystupoval v glukoneogenéze, tam opačným smerom – von z mitochondrie ([→ 4.5.2 Prvá obchádzka: z pyruvátu na fosfoenolpyruvát](04_metabolizmus_glukozy#sub-4-5-2)). Tá istá dvojica enzýmov, iný účel.

## 7.8 Poruchy: keď spád, priehrada alebo turbína zlyhá

Čo sa stane po zásahu do oxidačnej fosforylácie, sa dá odvodiť z jedinej otázky: zastavil sa tok elektrónov, alebo sa len odpojil od syntázy? Sekcia podľa toho rozlišuje inhibítory a rozpojovače a nakoniec pridáva vrodené poruchy.

> [!JADRO]
> **Inhibítor** zastaví elektróny aj ATP; spotreba O₂ klesne (kyanid, rotenón, oligomycín). **Rozpojovač** vybije gradient: elektróny bežia rýchlejšie, O₂ sa míňa, ATP nevzniká, uvoľní sa teplo (dinitrofenol, termogenín). Mutácie mitochondriovej DNA postihnú tkanivá s najväčšou spotrebou ATP.

### 7.8.1 Inhibítory: kde sa tok zastaví

Každý inhibítor má svoje miesto (červené popisy v Obr. 7.5) a jedno spoločné pravidlo: všetko pred blokom ostane redukované, všetko za ním oxidované.

| Miesto | Inhibítory | Čo ešte beží |
| --- | --- | --- |
| komplex I | rotenón (rybí jed, insekticíd), amobarbital | oxidácia sukcinátu a iných substrátov cez Q |
| komplex II | malonát | oxidácia NADH |
| komplex III | antimycín A | nič za koenzýmom Q |
| komplex IV | kyanid, azid, oxid uhoľnatý, sulfán | nič – kyslík sa nespotrebúva |
| ATP-syntáza | oligomycín (uzavrie kanál F₀) | nič: gradient narastie a zastaví aj reťazec |

Posledný riadok je priamym dôkazom spriahnutia. Oligomycín sa reťazca nedotkne, a predsa ho zastaví – tak isto ako nedostatok ADP.

> [!KLINIKA]
> **Kyanid: kyslíka dosť, a nedá sa použiť.** Kyanid sa viaže na trojmocné železo cytochrómu a₃ a zablokuje posledný krok. Krv je okysličená, no tkanivá kyslík neodoberú; ATP ostane len z glykolýzy a laktát prudko stúpa – v publikovaných súboroch až nad 20 mmol/l (norma 0,5–2,2). Najčastejším zdrojom je dym pri požiari v uzavretom priestore. Protilátka hydroxokobalamín, prekurzor vitamínu B₁₂, kyanid naviaže na svoj kobalt a vzniknutý kyanokobalamín odíde močom.

### 7.8.2 Rozpojovače: spád bez turbíny

Rozpojovač je látka, ktorá prenesie protón cez membránu mimo syntázy. Gradient sa vybíja naprázdno a s ním mizne aj brzda, ktorou gradient reťazec pribrzďoval. Chemické rozpojovače, ako dinitrofenol, patria medzi *ionofóry* – látky rozpustné v tukoch, ktoré cez membránu prevedú určitý ión: dinitrofenol protón, valinomycín draslík.

| | Inhibítor reťazca {ruz} | Rozpojovač {tyrk} |
| --- | --- | --- |
| Prenos elektrónov | zastavený | zrýchlený |
| Spotreba O₂ | klesne | stúpne |
| Protónový gradient | podľa miesta bloku klesne alebo ostane | vybitý |
| Tvorba ATP | klesne | klesne |
| Teplo | klesne | **stúpne** |
| Príklad | kyanid | 2,4-dinitrofenol, termogenín |

> [!MECH]
> **Dva druhy rozpojovačov**
> - **2,4-dinitrofenol** je slabá kyselina rozpustná v tukoch. Na kyslej strane membrány protón prijme, v neutrálnej forme membránou prejde a v matrix ho odovzdá (výrez v Obr. 7.5). Vysoké dávky salicylátov pôsobia podobne.
> - **Termogenín** (UCP1) je bielkovina vnútornej membrány hnedého tukového tkaniva – protónový kanál, ktorý otvárajú MK. Noradrenalín spustí v hnedom tuku štiepenie tukov; uvoľnené MK sú zároveň palivom aj signálom na rozpojenie. Výsledkom je teplo bez svalovej práce, *netrasová termogenéza*.

> [!KLINIKA]
> **Tabletka, ktorá „páli tuk“.** Dinitrofenol sa kedysi skúšal ako prostriedok na chudnutie a dodnes sa predáva cez internet. Logika je správna – palivo sa spaľuje naprázdno – a práve preto je nebezpečný: teplo sa nedá regulovať. Otrava sa prejaví prehriatím, potením, zrýchleným pulzom a dýchaním; v literatúre je opísaných vyše šesťdesiat úmrtí.

> [!KLINIKA]
> **Teplo bez triašky.** Triaška vyrába teplo svalovou prácou, teda zvýšenou spotrebou ATP – reťazec pri nej ostáva spriahnutý. Novorodenec sa zohrieva najmä druhým spôsobom: hnedým tukom s termogenínom. U dospelého človeka ho ostáva málo.

### 7.8.3 Vrodené poruchy: mitochondriová DNA

Mitochondria má vlastnú kruhovú DNA. Kóduje len trinásť bielkovín – všetko podjednotky komplexov reťazca a ATP-syntázy – a k nim vlastné tRNA a rRNA; ostatné bielkoviny dodáva jadro. Jej osobitosti vysvetľujú, prečo sa tieto choroby dedia a prejavujú inak než bežné enzymopatie.

> [!MECH]
> **Tri zvláštnosti**
> - **Dedí sa po matke.** Mitochondrie zárodku pochádzajú z vajíčka.
> - **Mutuje častejšie** než jadrová DNA.
> - **V bunke je v mnohých kópiách.** Bunka môže niesť zmes zdravých a zmenených molekúl; závažnosť závisí od ich pomeru, a ten nemusí byť vo všetkých tkanivách rovnaký.

Postihnuté sú orgány, ktoré majú najväčšiu spotrebu ATP: mozog, zrakový nerv a sietnica, sval a srdce. Príklady: *Leberova dedičná neuropatia zrakového nervu* – mutácie podjednotiek komplexu I vedú u mladých dospelých k strate centrálneho videnia – a syndróm *MELAS*, ktorý v názve nesie svoje hlavné znaky: myopatiu, encefalopatiu, laktátovú acidózu a príhody podobné mozgovej mŕtvici. K tej istej skupine patrí *MERRF* – myoklonická epilepsia s „roztrhanými“ červenými svalovými vláknami, najčastejšie z mutácie génu pre tRNA – a Pearsonov syndróm z rozsiahlej delécie mitochondriovej DNA.

> [!KLINIKA]
> **Laktát ako stopa.** Keď reťazec viazne, NADH sa hromadí a pyruvát sa redukuje na laktát. Zvýšený laktát bez zjavnej príčiny v obehu, spolu so svalovou slabosťou či postihnutím nervov, vedie k podozreniu na mitochondriovú chorobu. Oproti deficitu pyruvátdehydrogenázy ([→ 6.7.1 Zatvorená brána](06_acetyl_coa_citratovy_cyklus#sub-6-7-1)) tu pre nadbytok NADH stúpa laktát viac než pyruvát.

Reťazec je aj hlavným miestom, kde v bunke vznikajú reaktívne formy kyslíka: elektrón občas unikne, najmä z polovične redukovaného koenzýmu Q, priamo na kyslík a vznikne superoxid; z neho peroxid vodíka a hydroxylový radikál. Ochrana pred nimi – glutatión a hydroperoxidázy – bola v kapitole 5; podrobnosti patria do ďalšej časti knihy. A ešte jedna úloha mitochondrie mimo energie: cytochróm c uvoľnený do cytosolu je signálom, ktorý spúšťa programovanú smrť bunky.

## 7.9 Laboratórium: farbivo, ktoré ukáže oxidáciu

Dehydrogenácia sa dá urobiť viditeľnou, ak sa prirodzený príjemca vodíka nahradí farbivom. Sekcia opíše tento pokus a jeho klinickú podobu, a pripomenie merania, ktoré o oxidačnej fosforylácii vypovedajú nepriamo.

> [!JADRO]
> **Metylénová modrá** prijme vodíky → bezfarebná leukoforma; kyslík ju vráti späť. Odfarbenie = beží dehydrogenácia. Ten istý princíp lieči methemoglobinémiu – ak má erytrocyt NADPH. Nepriame ukazovatele poruchy reťazca: laktát, kreatínkináza.

![Obr. 7.7 — Metylénová modrá a jej leukoforma (⟳). Modrý dusík v strede prijíma vodík; tým sa preruší sústava striedavých dvojitých väzieb, ktorá dáva farbu. Výrez ukazuje, ako to isté farbivo pracuje v erytrocyte ako liek.](fig/fig-metylenova-modra.svg)

> [!LAB]
> **Oxidoredukčná reakcia s metylénovou modrou**
> 1. Farbivo je *umelý akceptor vodíka*: v oxidovanej forme modré, v redukovanej bezfarebné.
> 2. V skúmavke s tkanivom alebo enzýmom a substrátom prevezme vodíky, ktoré dehydrogenáza substrátu odobrala. Roztok sa odfarbí – tým rýchlejšie, čím je enzým aktívnejší.
> 3. Kyslík zo vzduchu leukoformu bez enzýmu oxiduje späť. Po pretrepaní roztok znova zmodrie; pod vrstvou, ktorá bráni prístupu vzduchu, ostane bezfarebný.
>
> Pokus ukazuje dve veci naraz: že oxidácia substrátu je odoberanie vodíka a že kyslík je až posledným príjemcom.

> [!KLINIKA]
> **Farbivo ako liek – a kedy zlyhá.** Pri methemoglobinémii je železo hemoglobínu oxidované na Fe³⁺ a kyslík neviaže. Metylénová modrá sa v erytrocyte redukuje pomocou NADPH a jej leukoforma vráti železo na Fe²⁺. NADPH má erytrocyt len z pentózofosfátovej dráhy: pri deficite glukóza-6-fosfátdehydrogenázy liek nezaberie a sám pôsobí ako oxidačná záťaž – môže vyvolať hemolýzu ([→ 5.4 Deficit glukóza-6-fosfátdehydrogenázy](05_pentozy_fruktoza_galaktoza#sec-5-4)).

Meranie, ktoré stojí na rovnakom základe, čitateľ už pozná: NADH a NADPH pohlcujú svetlo pri 340 nm, ich oxidované formy nie, takže každá dehydrogenázová reakcia sa dá sledovať fotometrom ([→ 6.8 Laboratórium: glukóza v sére a čo sa stane vo vzorke](06_acetyl_coa_citratovy_cyklus#sec-6-8)).

## 7.10 Súhrn a rýchle rozlíšenie

Súhrn sleduje mapu z [→ 7.1](#sec-7-1): mena, spád, priehrada, turbína, riadenie, prenos, poruchy.

| Otázka | Odpoveď v jednej vete | Sekcia |
| --- | --- | --- |
| Koľko makroergických väzieb má ATP? | Dve – anhydridové medzi fosfátmi; väzba na ribózu je ester. | 7.2.1 |
| Čo robí kreatínkináza? | Vratne prenáša fosfát medzi ATP a kreatínom; kreatínfosfát je zásoba na prvé sekundy práce. | 7.2.2 |
| Načo je adenylátkináza? | Z dvoch ADP robí ATP a AMP; AMP je signál nedostatku energie. | 7.2.2 |
| Kam tečú elektróny? | Od páru s nižším redoxným potenciálom k vyššiemu: od NADH ku kyslíku. | 7.3.1 |
| Dehydrogenáza × oxidáza × oxygenáza? | Vodík na koenzým × vodík na kyslík × kyslík do substrátu. | 7.3.2 |
| Čo prijíma NAD⁺? | Hydridový ión – dva elektróny a jeden protón. | 7.3.3 |
| Ktoré komplexy pumpujú protóny? | I, III a IV (4, 4 a 2 na pár elektrónov); II nie. | 7.4 |
| Čo je koenzým Q a cytochróm c? | Dva pohyblivé prenášače: Q v membráne medzi I/II a III, cytochróm c na povrchu medzi III a IV. | 7.4 |
| Kde sa spotrebúva kyslík? | V komplexe IV, ktorý ho redukuje na vodu. | 7.4 |
| Čo spája reťazec so syntézou ATP? | Protónový gradient cez vnútornú membránu. | 7.5 |
| Koľko ATP dá NADH a FADH₂? | Približne 2,5 a 1,5 (staršie 3 a 2). | 7.5.1 |
| Čo riadi rýchlosť dýchania bunky? | Dostupnosť ADP, teda spotreba ATP. | 7.6 |
| Ktorý člnok dá viac ATP? | Malát-aspartátový (≈ 2,5); glycerolfosfátový len ≈ 1,5. | 7.7 |
| Inhibítor × rozpojovač? | Prvý zastaví elektróny aj spotrebu O₂; druhý ich zrýchli a energiu zmení na teplo. | 7.8.2 |
| Čo blokuje kyanid a čo oligomycín? | Kyanid komplex IV, oligomycín kanál ATP-syntázy. | 7.8.1 |
| Načo je termogenín? | Rozpája v hnedom tuku reťazec od syntázy – teplo bez triašky. | 7.8.2 |
| Ako sa dedí mitochondriová DNA? | Po matke; kóduje 13 podjednotiek reťazca a syntázy. | 7.8.3 |
| Čo ukazuje odfarbenie metylénovej modrej? | Že v skúmavke beží dehydrogenácia; kyslík farbu vráti. | 7.9 |

## 7.11 Otázky na zopakovanie

```quiz
? Prečo sa elektróny z NADH neodovzdajú kyslíku jedným krokom, ale cez niekoľko prenášačov?
= Rozdiel potenciálov 1,14 V zodpovedá asi 220 kJ/mol – jediným krokom by sa uvoľnili ako teplo. Rozdelením na menšie schody sa dá energia troch z nich použiť na čerpanie protónov. Bunka tak z jedného NADH získa približne 2,5 ATP namiesto žiadneho. [→ 7.3.1](#sub-7-3-1) · [→ 7.4](#sec-7-4)
? FADH₂ zo sukcinátu dá menej ATP než NADH. Kde presne ten rozdiel vzniká?
= V mieste vstupu. Elektróny z NADH prejdú komplexom I, ktorý prečerpá štyri protóny. Elektróny zo sukcinátu vstupujú cez komplex II až na koenzým Q a prvú pumpu obídu: 6 protónov namiesto 10, teda asi 1,5 ATP namiesto 2,5. Komplex II nepumpuje, lebo rozdiel potenciálov medzi sukcinátom a Q je malý. [→ 7.4](#sec-7-4) · [→ 7.5.1](#sub-7-5-1)
? K izolovaným mitochondriám so substrátom a kyslíkom pridáme oligomycín. Spotreba kyslíka klesne. Potom pridáme dinitrofenol a spotreba prudko stúpne. Vysvetli oba kroky.
= Oligomycín uzavrie kanál syntázy; protóny sa nevracajú, gradient narastie na maximum a pumpy proti nemu nevládzu – reťazec zastane, hoci sám poškodený nie je. Dinitrofenol prenesie protóny cez membránu mimo syntázy, gradient sa vybije, brzda zmizne a elektróny tečú naplno. ATP však nevzniká ani v jednom prípade. [→ 7.8.1](#sub-7-8-1) · [→ 7.8.2](#sub-7-8-2)
? Človek otrávený kyanidom má v žilovej krvi nezvyčajne veľa kyslíka a vysoký laktát. Prečo?
= Kyanid blokuje komplex IV, takže tkanivá kyslík z krvi neodoberajú – vracia sa do žíl okysličená. Reťazec stojí, NADH sa hromadí, citrátový cyklus sa zastaví a jediným zdrojom ATP ostane glykolýza. Aby mohla bežať, pyruvát sa redukuje na laktát. [→ 7.8.1](#sub-7-8-1) · [→ 4.3 Pyruvát a laktát: čo s NADH](04_metabolizmus_glukozy#sec-4-3)
? Úplná oxidácia glukózy dá 30 alebo 32 ATP. Od čoho závisí, ktoré číslo platí? (Vráť sa ku kapitole 4.)
= Od člnku, ktorým sa do mitochondrie dostanú elektróny dvoch NADH z glykolýzy. Malát-aspartátový ich odovzdá matrixovému NAD⁺ a každý dá asi 2,5 ATP – spolu 32. Glycerolfosfátový ich odovzdá cez FAD koenzýmu Q, komplex I sa obíde a každý dá len asi 1,5 – spolu 30. [→ 7.7](#sec-7-7) · [→ 4.4 Bilancia glykolýzy](04_metabolizmus_glukozy#sec-4-4)
? Prečo je kreatínfosfát vhodná rýchla zásoba, a glukóza-6-fosfát nie, hoci oba nesú fosfát?
= Rozhoduje typ väzby. V kreatínfosfáte je fosfát na dusíku guanidínovej skupiny a jeho hydrolýza uvoľní viac energie než hydrolýza ATP – kreatínkináza ho preto vie preniesť na ADP. Glukóza-6-fosfát je obyčajný ester s nízkou energiou; fosfát z ATP prijal a späť ho na ADP odovzdať nevie. [→ 7.2.1](#sub-7-2-1) · [→ 7.2.2](#sub-7-2-2)
? Sval prejde z pokoja do práce a spotreba kyslíka stúpne mnohonásobne v priebehu sekúnd. Ktorý signál to spôsobí a prečo netreba hormón?
= ADP. Práca štiepi ATP, ADP dá syntáze substrát, protóny začnú pretekať, gradient klesne a pumpy s prenosom elektrónov zrýchlia. NADH sa oxiduje a odbrzdí cyklus. Reťazec je so syntázou spriahnutý, takže spotreba ATP sa prenesie až na spotrebu kyslíka sama. [→ 7.6](#sec-7-6) · [→ 6.5 Regulácia kolesa](06_acetyl_coa_citratovy_cyklus#sec-6-5)
? Prípad: 19-ročný muž si objednal na internete „spaľovač tukov“. Privezú ho s teplotou 40,5 °C, spoteného, s pulzom 150/min a zrýchleným dýchaním. Čo prípravok najskôr obsahoval a prečo antipyretikum nepomôže?
= Rozpojovač, najskôr 2,4-dinitrofenol. Prenáša protóny cez vnútornú membránu mimo ATP-syntázy; reťazec beží naplno, kyslík sa míňa, ATP nevzniká a energia paliva sa mení na teplo. Teplota nie je nastavená v mozgu ako pri horúčke, ale vzniká priamo v mitochondriách – liek na horúčku jej príčinu neovplyvní. [→ 7.8.2](#sub-7-8-2)
? Prípad: pacient s deficitom glukóza-6-fosfátdehydrogenázy dostane pre methemoglobinémiu metylénovú modrú. Stav sa nezlepší a objaví sa hemolýza. Prečo?
= Metylénová modrá lieči len ako leukoforma, a na jej redukciu erytrocyt potrebuje NADPH. Ten má iba z pentózofosfátovej dráhy, ktorej prvý enzým pacientovi chýba. Farbivo ostane oxidované, methemoglobín neredukuje a samo zaťažuje bunku oxidačne – glutatión sa minie a krvinky sa rozpadnú. [→ 7.9](#sec-7-9) · [→ 5.4 Deficit glukóza-6-fosfátdehydrogenázy](05_pentozy_fruktoza_galaktoza#sec-5-4)
```

## 7.12 Zdroje

**Učebnice (kontrola faktov)**

- Rodwell V. W., Bender D. A., Botham K. M., Kennelly P. J., Weil P. A.: *Harper's Illustrated Biochemistry*, 31. vyd., New York: McGraw-Hill Education, 2018. ISBN 978-1-25-983793-7. (makroergické zlúčeniny a dva spôsoby štiepenia ATP, adenylátkináza, skupiny oxidoreduktáz, počty protónov a pomer P/O, stavba a chod ATP-syntázy, inhibítory vrátane atraktylozidu, člnky, metylénová modrá a NADPH)
- Harvey R. A., Ferrier D. R.: *Lippincott's Illustrated Reviews: Biochemistry*, 5. vyd., Philadelphia: Lippincott Williams & Wilkins, 2011. ISBN 978-1-60831-412-6. (redoxné potenciály, zložky reťazca, ATP-syntáza a oligomycín, rozpojovacie bielkoviny, mitochondriová DNA, methemoglobinémia)
- Lieberman M., Peet A.: *Marks' Basic Medical Biochemistry: A Clinical Approach*, 5. vyd., Philadelphia: Wolters Kluwer, 2018. ISBN 978-1-4963-2481-8. (dinitrofenol, hnedý tuk u dospelých, vznik superoxidu)

**Názvoslovie, odporúčania a prehľady**

- Vercellino I., Sazanov L. A.: The assembly, regulation and function of the mitochondrial respiratory chain. *Nat Rev Mol Cell Biol* 2022;23:141–161. [doi:10.1038/s41580-021-00415-0](https://doi.org/10.1038/s41580-021-00415-0)
- Watt I. N., Montgomery M. G., Runswick M. J., Leslie A. G. W., Walker J. E.: Bioenergetic cost of making an adenosine triphosphate molecule in animal mitochondria. *Proc Natl Acad Sci USA* 2010;107:16823–16827. [doi:10.1073/pnas.1011099107](https://doi.org/10.1073/pnas.1011099107)
- Dunne R., Goodloe J. M., Augustine J. J. a kol.: Intravenous hydroxocobalamin for cyanide poisoning from smoke inhalation: a comprehensive scoping review. *J Am Coll Emerg Physicians Open* 2026;7:100340. [doi:10.1016/j.acepjo.2026.100340](https://doi.org/10.1016/j.acepjo.2026.100340)
- Grundlingh J., Dargan P. I., El-Zanfaly M., Wood D. M.: 2,4-dinitrophenol (DNP): a weight loss agent with significant acute toxicity and risk of death. *J Med Toxicol* 2011;7:205–212. [doi:10.1007/s13181-011-0162-6](https://doi.org/10.1007/s13181-011-0162-6)
- Kasturiarachi B. M., Robinson D., Karkoska K., Gollamudi J.: Uncovering an undisclosed diagnosis: a glucose-6-phosphate dehydrogenase deficiency diagnosis in a critically ill adult. *EJHaem* 2024;5:231–234. [doi:10.1002/jha2.853](https://doi.org/10.1002/jha2.853)
- The Nobel Assembly at Karolinska Institutet: The Nobel Prize in Physiology or Medicine 2019 – tlačová správa (ako bunky vnímajú kyslík). [nobelprize.org/prizes/medicine/2019/press-release](https://www.nobelprize.org/prizes/medicine/2019/press-release/)
- Buckler K. J.: TASK channels in arterial chemoreceptors and their role in oxygen and acid sensing. *Pflugers Arch* 2015;467:1013–1025. [doi:10.1007/s00424-015-1689-1](https://doi.org/10.1007/s00424-015-1689-1)
- PubChem (National Center for Biotechnology Information): záznamy zlúčenín – štruktúry molekúl v schémach (medzi nimi ATP, CID 5957; NAD⁺, CID 5892; FAD, CID 643975; kreatinín, CID 588; 2,4-dinitrofenol, CID 1493). [pubchem.ncbi.nlm.nih.gov](https://pubchem.ncbi.nlm.nih.gov/)

**Obrázky**

Všetky schémy a vzorce v kapitole sú vlastné kresby (SVG); štruktúry molekúl sú overené v databáze PubChem. Súhrn je v registri `ZDROJE-OBRAZKOV.md`.
