---
num: 6
title: Tvorba acetyl-CoA a citrátový cyklus
part: Lekárska biochémia
crumb: Acetyl-CoA a citrátový cyklus
eyebrow: Mitochondria · brána, koleso, križovatka
standfirst: Všetko palivo – cukor, tuk aj aminokyseliny – sa v mitochondrii zbieha do jedinej dvojuhlíkovej jednotky, acetyl-CoA, a tá sa spaľuje v jedinom kolese, citrátovom cykle. Kapitola ide tromi krokmi – jednosmerná brána od pyruvátu, koleso, ktoré z acetylu vyťaží elektróny, a križovatka, z ktorej bunka medziprodukty odoberá na stavbu a zasa ich dopĺňa.
deps: [→ 2.2.2 Tri stupne a tri križovatky](02_uvod_regulacia_metabolizmu#sub-2-2-2) · [→ 4.3 Pyruvát a laktát: čo s NADH](04_metabolizmus_glukozy#sec-4-3) · [→ 1.2.2 Väzby medzi stavebnými jednotkami](01_zaklady_biomolekuly#sub-1-2-2)
next: [→ 7 Biologické oxidácie, dýchací reťazec a tvorba ATP](07_biologicke_oxidacie)
reviewed: —
---

## 6.1 Východisko a mapa: brána, koleso, križovatka

Glykolýza skončila pri pyruváte a z energie glukózy dovtedy vyťažila len zlomok ([→ 4.4 Bilancia glykolýzy](04_metabolizmus_glukozy#sec-4-4)). Zvyšok sa uvoľní až v mitochondrii, kde sa uhlíky pyruvátu spália na CO₂. Deje sa to v dvoch krokoch, ktoré majú odlišnú logiku, a kapitola sa delí podľa nich: najprv **brána**, ktorou pyruvát do spaľovania vstupuje, potom **koleso**, ktoré spaľuje.

> [!JADRO]
> **Brána**: pyruvát → acetyl-CoA, nevratne (pyruvátdehydrogenázový komplex). **Koleso**: acetyl → 2 CO₂; energia ide do 3 NADH, FADH₂ a GTP. **Križovatka**: medziprodukty kolesa sú aj stavebný materiál – čo sa odoberie, musí sa doplniť.

Acetyl-CoA nevzniká len z pyruvátu. Zbiehajú sa doň aj MK, ketogénne aminokyseliny, ketolátky a etanol – je to križovatka, ktorú už ukázala mapa metabolizmu ([→ 2.2.2 Tri stupne a tri križovatky](02_uvod_regulacia_metabolizmu#sub-2-2-2)). Citrátový cyklus – nazývaný aj Krebsov (H. A. Krebs zaň dostal v roku 1953 Nobelovu cenu) alebo cyklus trikarboxylových kyselín – je preto spoločnou konečnou cestou oxidácie všetkých palív (Obr. 6.1). Kyslík v ňom priamo nevystupuje, a predsa beží len za jeho prítomnosti: elektróny, ktoré koleso zachytí na koenzýmoch, musí odobrať dýchací reťazec ([→ 7.4 Dýchací reťazec: spád, ktorý pumpuje protóny](07_biologicke_oxidacie#sec-7-4)). Erytrocyt, ktorý mitochondrie nemá, nemá ani bránu, ani koleso.

![Obr. 6.1 — Mapa kapitoly. Zvislá hrubá šípka je brána – jednosmerný vstup pyruvátu. Vodorovná vedie do kolesa. Horný oblúk je druhá cesta pyruvátu: nie do kolesa ako palivo, ale ako doplnenie jeho medziproduktov. Dolu sú ostatné osudy acetyl-CoA. Krúžky so šípkou vedú na schémy, kde je daná časť nakreslená podrobne.](fig/fig-acetyl-coa-mapa.svg)

Kapitola ide v tomto poradí: brána a jej riadenie ([→ 6.2](#sec-6-2)), osem krokov kolesa ([→ 6.3](#sec-6-3)), čo vynesie ([→ 6.4](#sec-6-4)) a čo ho riadi ([→ 6.5](#sec-6-5)), koleso ako križovatka ([→ 6.6](#sec-6-6)), poruchy ([→ 6.7](#sec-6-7)) a meranie glukózy, ktoré s touto kapitolou súvisí cez odber vzorky ([→ 6.8](#sec-6-8)).

## 6.2 Brána: z pyruvátu acetyl-CoA

Pyruvát vzniká v cytosole a do matrix mitochondrie ho cez vnútornú membránu prenáša vlastný prenášač. Tam ho čaká reakcia, ktorá rozhoduje o osude uhlíkov glukózy viac než ktorákoľvek iná: po nej už z nich glukóza nevznikne. Sekcia najprv predstaví nosič, na ktorom acetyl cestuje, potom samotný enzýmový komplex a nakoniec jeho riadenie.

> [!JADRO]
> Pyruvát stratí CO₂ a zvyšok sa oxidovaný naviaže na CoA; matrix, **nevratne**, vzniká NADH. Tri enzýmy, päť koenzýmov (štyri z vitamínov B). Bránu vypína fosfát: kinázu spúšťa nadbytok ATP, NADH a acetylu, fosfatázu Ca²⁺ a inzulín.

> [!ZAPAMATAJ]
> **Rastliny a baktérie to vedia obísť.** Majú dva enzýmy navyše – izocitrátlyázu a malátsyntázu –, ktoré v *glyoxylátovom cykle* preskočia obe dekarboxylácie kolesa. Z dvoch acetylov tak získajú sukcinát a z tuku vedia vyrobiť cukor. Človek tieto enzýmy nemá.

### 6.2.1 Koenzým A a tioester

Acetyl sám osebe je nereaktívny zvyšok kyseliny octovej. Aby ho enzýmy vedeli prenášať, musí byť naviazaný na nosič – koenzým A (Obr. 6.2).

![Obr. 6.2 — Koenzým A. Dlhé rameno končí SH-skupinou (modro), na ktorú sa viaže acyl. Stredná časť ramena je vitamín; nukleotid na druhom konci slúži enzýmom ako rukoväť. Krúžok s plusom rozbalí celý vzorec aj s nukleotidom.](fig/fig-koenzym-a.svg)

> [!CHEM]
> **Prečo tioester.** Acyl sa na síru koenzýmu viaže tioesterovou väzbou. Jej hydrolýza uvoľní toľko energie ako hydrolýza ATP – patrí medzi makroergické väzby ([→ 1.2.2 Väzby medzi stavebnými jednotkami](01_zaklady_biomolekuly#sub-1-2-2)). Acetyl na koenzýme A je teda *aktivovaný*: jeho prenos na inú molekulu ide samovoľne. V kolese sa tá energia využije dvakrát – raz na vznik citrátu, raz na vznik GTP.

Koenzým A ani jeho acyly sa z matrix von nedostanú – membrána ich neprepustí. Acetyl-CoA vyrobený v matrix tam aj ostáva; ak ho bunka potrebuje v cytosole, musí ho vyviezť v inej podobe ([→ 6.6](#sec-6-6)).

### 6.2.2 Pyruvátdehydrogenázový komplex: tri enzýmy, päť koenzýmov

Reakcia v bráne je *oxidačná dekarboxylácia*: odíde CO₂ a to, čo ostane, sa oxiduje. Robí to veľký zhluk troch enzýmov, v ktorom si medziprodukt podávajú z ruky do ruky a von sa nedostane (Obr. 6.3).

![Obr. 6.3 — Pyruvátdehydrogenázový komplex. Hore celková reakcia; modrý je karboxyl, ktorý odíde ako CO₂. V strede tri enzýmy v poradí, v akom pracujú, s koenzýmami a vitamínmi, z ktorých vznikajú. Dole rameno enzýmu E2: lipoamid striedavo nesie acetyl a vodíky a E3 ho vracia do východiskového stavu. Výrezy ukazujú vzorec tiamíndifosfátu s uhlíkom, ktorý pracuje, a rameno vo všetkých troch stavoch.](fig/fig-pdh-komplex.svg)

> [!MECH]
> **Štafeta troch enzýmov**
> 1. **E1** (vlastná pyruvátdehydrogenáza) má **tiamíndifosfát**. Pyruvát sa ketouhlíkom naviaže na jeho tiazolový kruh; tým sa preruší väzba ku karboxylu, ten odíde ako CO₂ a dvojuhlíkový zvyšok ostane visieť na tiamíne.
> 2. **E2** (transacetyláza) má dlhé pohyblivé rameno s **lipoamidom** – disulfidom na konci. Zvyšok z tiamínu naň prejde a pri tom sa oxiduje na acetyl; disulfid sa otvorí na dve SH-skupiny. Rameno acetyl prenesie na **koenzým A**: vzniká acetyl-CoA.
> 3. **E3** (dihydrolipoyldehydrogenáza) vráti rameno do pôvodného stavu. Vodíky z dvoch SH-skupín prevezme **FAD** viazaný v enzýme a od neho **NAD⁺** – výsledkom je NADH.

| Koenzým | Vitamín | Čo v komplexe robí |
| --- | --- | --- |
| tiamíndifosfát | B₁ (tiamín) | drží zvyšok po dekarboxylácii |
| lipoamid | — (kyselina lipoová) | prenáša acetyl a vodíky |
| koenzým A | B₅ (kyselina pantoténová) | preberá acetyl |
| FAD | B₂ (riboflavín) | preberá vodíky z lipoamidu |
| NAD⁺ | B₃ (niacín) | konečný príjemca vodíkov |

Rovnakú stavbu a tých istých päť koenzýmov má aj 2-oxoglutarátdehydrogenáza v kolese ([→ 6.3](#sec-6-3)); enzým E3 je dokonca tá istá bielkovina. Čokoľvek poškodí jeden komplex – nedostatok tiamínu, jed viažuci sa na lipoamid –, poškodí aj druhý.

> [!ZAPAMATAJ]
> Tiamíndifosfát je koenzýmom aj transketolázy ([→ 5.2.2 Neoxidačná časť: preskupenie uhlíkov](05_pentozy_fruktoza_galaktoza#sub-5-2-2)). Vždy drží zvyšok, ktorý vznikol prerušením väzby vedľa karbonylu – preto sa jeho nedostatok testuje práve aktivitou transketolázy.

### 6.2.3 Regulácia brány

Keďže je reakcia nevratná, komplex rozhoduje o tom, či sa trojuhlíkové zvyšky glukózy spália, alebo ušetria pre glukoneogenézu. Riadi sa preto dvoma spôsobmi naraz: rýchlo vlastnými produktmi a prepínačom, ktorý ho celý vypína (Obr. 6.4).

![Obr. 6.4 — Prepínač brány (⟳). Kináza komplex fosfátom vypína, fosfatáza ho zapína. Zelené a červené popisy sú signály, ktoré na ne pôsobia: nadbytok produktov a energie zapína kinázu, vápnik a inzulín fosfatázu. Pri kináze je aj liek, ktorý ju brzdí.](fig/fig-pdh-regulacia.svg)

> [!REG]
> **Dve úrovne**
> - **Produkty brzdia priamo.** Acetyl-CoA pribrzdí E2, NADH pribrzdí E3.
> - **Fosforylácia.** Ku komplexu sú pripojené dva regulačné enzýmy. *Kináza* pridá na E1 fosfát a komplex vypne; *fosfatáza* fosfát odštiepi a komplex zapne. Cyklický AMP sa tu nezúčastňuje.
> - **Čo riadi kinázu.** Zapínajú ju ATP, NADH a acetyl-CoA – teda znaky, že energie aj acetylu je dosť. Brzdia ju pyruvát a ADP – substrát čaká a energia chýba. Pri hladovaní a pri strave bohatej na tuk kinázy navyše pribudne: prepis jej génu zvyšujú glukokortikoidy a signály z MK, inzulín ho tlmí.
> - **Čo riadi fosfatázu.** Na prácu potrebuje Mg²⁺. Zapína ju Ca²⁺, ktorý vo svale stúpa pri kontrakcii – v srdci aj po adrenalíne –, a inzulín – najmä v tukovom tkanive, kde bránou prechádza glukóza na ceste k tuku.

```chain
hladovanie: pečeň páli MK → v matrix pribúda acetyl-CoA a NADH → kináza pridá na E1 fosfát → brána sa zatvorí → trojuhlíkové zvyšky ostanú ušetrené
→ nadbytok acetylu zároveň zapne karboxylázu z kapitoly 4 → z pyruvátu je oxalacetát a z neho glukóza pre mozog ⟳ (spätná väzba: produkt zatvára cestu, ktorou vzniká)
```

Prepínač tak spája túto kapitolu s predošlými: acetyl-CoA z tukov jedným signálom zatvorí bránu a otvorí glukoneogenézu ([→ 4.6.3 Výstup: pyruvátkináza a pyruvátkarboxyláza](04_metabolizmus_glukozy#sub-4-6-3)).

| Stav | Signál v mitochondrii | Brána | Kam ide pyruvát |
| --- | --- | --- | --- |
| **po jedle** | inzulín; veľa pyruvátu, málo acetyl-CoA z tukov | otvorená | acetyl-CoA → koleso, v pečeni a tukovom tkanive aj syntéza MK |
| **nalačno, hladovanie** | produkty β-oxidácie v matrix | zatvorená | oxalacetát → glukoneogenéza (pečeň); vo svale sa šetrí |
| **svalová práca** | ↑ Ca²⁺, ↑ ADP, ↑ pyruvát | otvorená | acetyl-CoA → koleso → ATP |
| **nedostatok kyslíka** | NADH sa hromadí, reťazec stojí | pribrzdená | laktát ([→ 4.8.2 Laktátová acidóza: tvorba prevýši odber](04_metabolizmus_glukozy#sub-4-8-2)) |

## 6.3 Koleso: osem krokov citrátového cyklu

Cyklus má osem krokov, ale len tri úlohy, a podľa nich sa dá čítať: acetyl **naviazať** na nosič (kroky 1–2), dva uhlíky **spáliť** (kroky 3–4) a nosič **obnoviť** (kroky 5–8). Nosičom je štvoruhlíkový oxalacetát; na konci otáčky je späť a môže prijať ďalší acetyl (Obr. 6.5).

> [!JADRO]
> Acetyl (2 C) + oxalacetát (4 C) → citrát (6 C) → dve dekarboxylácie → štyri uhlíky sa upravia späť na oxalacetát. Nevratné sú kroky **1, 3, 4**. Vodíky zbierajú 3 NAD⁺ a 1 FAD; jedna substrátová fosforylácia (GTP).

![Obr. 6.5 — Citrátový cyklus v smere hodinových ručičiek. Hrubé šípky sú tri nevratné kroky; pri nich sú aj regulátory. Žlté štítky ukazujú, kde koleso odovzdáva vodíky koenzýmom a kde vzniká GTP. Modro je vždy skupina, o ktorú v nasledujúcom kroku pôjde. Tri kroky sa dajú rozkliknúť: akonitáza a izocitrátdehydrogenáza ukážu svoj medzistupeň, sukcinátdehydrogenáza svoj inhibítor.](fig/fig-citratovy-cyklus.svg)

> [!MECH]
> **Naviazať: kroky 1 a 2**
> 1. **Citrátsyntáza** spojí acetyl s oxalacetátom; vznikne citrát a koenzým A sa uvoľní. Energiu dodá rozštiepený tioester – krok je nevratný.
> 2. **Akonitáza** presunie hydroxyl na susedný uhlík: citrát ⇌ izocitrát. Robí to okľukou – vodu odštiepi a pripojí naopak, cez medzistupeň s dvojitou väzbou (cis-akonitát). Dôvod: hydroxyl citrátu sedí na uhlíku bez vodíka a oxidovať sa nedá; hydroxyl izocitrátu áno.

> [!MECH]
> **Spáliť: kroky 3 a 4**
> 3. **Izocitrátdehydrogenáza** oxiduje hydroxyl na ketón a odštiepi karboxyl: 2-oxoglutarát (staršie α-ketoglutarát) + CO₂ + NADH. Poradie je dané chémiou: až ketoskupina uvoľní susedný karboxyl; medzistupeň (oxalosukcinát) enzým neopustí. Nevratný; hlavný riadiaci krok.
> 4. **2-oxoglutarátdehydrogenázový komplex** zopakuje to, čo brána urobila s pyruvátom: oxidačná dekarboxylácia oxokyseliny, produktom je tioester – sukcinyl-CoA –, druhé CO₂ a NADH. Nevratný.

> [!MECH]
> **Obnoviť: kroky 5 až 8**
> 5. **Sukcinyl-CoA-syntetáza** (sukcináttiokináza) rozštiepi tioester a jeho energiou pripojí fosfát na GDP: sukcinát + GTP. Jediná substrátová fosforylácia kolesa. GTP odovzdá fosfát na ADP, takže výsledkom je ATP; jeden z izoenzýmov fosforyluje ADP rovno.
> 6. **Sukcinátdehydrogenáza** odoberie dva vodíky a vytvorí dvojitú väzbu: fumarát + FADH₂. Enzým sedí vo vnútornej membráne a je zároveň súčasťou dýchacieho reťazca.
> 7. **Fumaráza** pripojí na dvojitú väzbu vodu: malát.
> 8. **Malátdehydrogenáza** oxiduje hydroxyl na ketón: oxalacetát + tretí NADH. Rovnováha tejto reakcie leží silno na strane malátu; dopredu ju ťahá len to, že citrátsyntáza oxalacetát vzápätí odoberie a dýchací reťazec odoberie NADH ([→ 1.5 Energia reakcie: kam pôjde a ako ďaleko](01_zaklady_biomolekuly#sec-1-5)).

Kroky 6 až 8 tvoria trojicu, ktorá sa v biochémii opakuje: dehydrogenácia na dvojitú väzbu, hydratácia, oxidácia hydroxylu. Tým istým postupom sa pri β-oxidácii upravuje reťazec MK ([→ 8.4.2 Štyri reakcie jedného kola](08_lipidy_mastne_kyseliny#sub-8-4-2)).

> [!POZOR]
> **Prečo FAD, a nie NAD⁺.** Vznik dvojitej väzby medzi dvoma uhlíkmi neuvoľní dosť energie na redukciu NAD⁺. FAD má vyšší redoxný potenciál a vodíky prijme; platí sa za to menším výnosom ATP ([→ 6.4](#sec-6-4)).

> [!POZOR]
> **Rovnováha ôsmeho kroku je „naopak“.** Posledná oxidácia má kladné ΔG°′; sama od seba by išla späť. Smer jej určujú susedia: prvý krok kolesa okamžite míňa jej štvoruhlíkový produkt a reťazec v membráne jej berie NADH.

Všetkých osem krokov dohromady:

```chain
acetyl-CoA + 2 H₂O + GDP + Pᵢ + FAD + 3 NAD⁺ → CoA–SH + **2 CO₂** + GTP + FADH₂ + 3 NADH + 3 H⁺
```

Oxalacetát v rovnici nie je – vstúpi a vystúpi nezmenený. Koleso teda z acetylu nevie vyrobiť žiadny medziprodukt navyše: dva uhlíky pribudli, dva odišli. Nie sú to však tie isté atómy: CO₂ z prvej otáčky nesie uhlíky, ktoré priniesol oxalacetát, a uhlíky acetylu ostanú v nosiči na ďalšie otáčky. Na bilancii to nič nemení. To je presný dôvod, prečo sa z acetyl-CoA, a teda z MK, nedá postaviť glukóza ([→ 4.5.1 Z čoho a kde](04_metabolizmus_glukozy#sub-4-5-1)).

## 6.4 Bilancia: čo koleso vynesie

Koleso samo vyrobí jedinú makroergickú väzbu. Jeho skutočným produktom sú redukované koenzýmy; koľko ATP z nich bude, závisí od dýchacieho reťazca. Bilancia preto vždy hovorí, s akým kurzom počíta.

> [!JADRO]
> Jedna otáčka: **3 NADH + 1 FADH₂ + 1 GTP ≈ 10 ATP** (pri 2,5 ATP na NADH a 1,5 na FADH₂). Z pyruvátu 12,5. Staršie číslo 12 na acetyl-CoA rátalo s kurzom 3 a 2.

| Krok | Čo vznikne | ATP | Predpoklad |
| --- | --- | --- | --- |
| 3, 4, 8 | 3 NADH | 7,5 | 2,5 ATP na NADH |
| 6 | 1 FADH₂ | 1,5 | 1,5 ATP na FADH₂ |
| 5 | 1 GTP | 1 | GTP je s ATP rovnocenný |
| **jedna otáčka** | | **10** | |
| brána (pyruvát → acetyl-CoA) | 1 NADH | 2,5 | |
| **pyruvát celkom** | | **12,5** | |

Glukóza dá dva pyruváty, teda 25 ATP z mitochondrie; s glykolýzou a jej dvoma cytosolovými NADH je to 30 až 32 – číslo, ktoré kapitola 4 uviedla vopred ([→ 4.4 Bilancia glykolýzy](04_metabolizmus_glukozy#sec-4-4)).

> [!IMPORTANT]
> **[R] Revízia — 12 alebo 10 ATP na acetyl-CoA?**
> **Kedysi:** tri ATP na NADH a dve na FADH₂ dávali 9 + 2 + 1 = 12 ATP na jednu otáčku. Číslo je v starších učebniciach a v testoch.
> **Dnes:** s kurzom 2,5 a 1,5 vychádza 7,5 + 1,5 + 1 = **10 ATP**. Koleso sa nezmenilo – zmenil sa odhad toho, koľko protónov treba na jedno ATP; vysvetlí ho kapitola 7.

## 6.5 Regulácia kolesa

Koleso nemá jeden vypínač ako brána. Riadi sa tým, čo doň vstupuje, a tým, ako rýchlo sa mu odoberajú produkty – a keďže jeho produktmi sú NADH a FADH₂, v skutočnosti ho riadi dýchací reťazec. Sekcia prejde tri enzýmy, na ktorých sa signály stretávajú, a potom slučku, ktorá koleso viaže na spotrebu ATP.

> [!JADRO]
> Hlavný signál je **pomer NADH : NAD⁺ a ATP : ADP**. Izocitrátdehydrogenázu zapína ADP a Ca²⁺, vypínajú ATP a NADH. Koleso sa teda točí len tak rýchlo, ako bunka míňa ATP.

> [!REG]
> **Tri miesta, tie isté signály**
> - **Izocitrátdehydrogenáza** – riadiaci enzým. ADP ju alostericky zapína, ATP a NADH brzdia.
> - **2-oxoglutarátdehydrogenáza** – brzdia ju vlastné produkty, NADH a sukcinyl-CoA. Na rozdiel od brány nemá kinázu ani fosfatázu.
> - **Citrátsyntáza** – brzdí ju jej produkt citrát; rýchlosť závisí aj od toho, koľko je oxalacetátu.
> - **Ca²⁺** zapína oba dehydrogenázové kroky aj fosfatázu brány. Vo svale stúpa pri kontrakcii, takže tvorba ATP sa zrýchli skôr, než ATP stihne klesnúť.

```chain
bunka míňa ATP → ↑ ADP → dýchací reťazec zrýchli → NADH sa oxiduje na NAD⁺ → ↓ NADH : NAD⁺ a ↑ ADP
→ izocitrátdehydrogenáza a ďalšie dehydrogenázy zrýchlia → koleso dodá viac NADH → reťazec dodá viac ATP → ADP klesne ⟳
```

Keď sa spotreba ATP zastaví, slučka beží opačne: NADH sa hromadí, koleso spomalí, citrát pribudne. Citrát vtedy pôsobí aj mimo mitochondrie – brzdí fosfofruktokinázu-1 a zapína prvý enzým syntézy MK. Jedna molekula tak hlási cytosolu, že paliva je nadbytok a má sa ukladať ([→ 4.6.2 Hlavný ventil: fosfofruktokináza-1 a fruktóza-2,6-bisfosfát](04_metabolizmus_glukozy#sub-4-6-2)).

## 6.6 Križovatka: odber a doplnenie

Koleso nie je len pec. Jeho medziprodukty sú východiskom viacerých syntéz, takže dráha je zároveň katabolická aj anabolická (*amfibolická*). Kto však z kolesa berie, musí doň aj vracať – inak sa minie oxalacetát a acetyl sa nemá na čo naviazať. Sekcia sa preto delí na odber a na doplnenie (Obr. 6.6).

> [!JADRO]
> **Odber**: citrát → MK a cholesterol; 2-oxoglutarát → glutamát; sukcinyl-CoA → hém; malát, oxalacetát → glukóza. **Doplnenie** (*anaplerotické* reakcie): hlavne **karboxylácia pyruvátu**, ktorú spúšťa nadbytok acetylu, a zvyšky aminokyselín.

![Obr. 6.6 — Koleso ako križovatka. Ružové uzly sú ciele odberu, modré zdroje doplnenia. Hrubá šípka vľavo hore je najdôležitejšia doplňovacia reakcia. Výrez pri aminokyselinách ukazuje, čím sa od medziproduktov kolesa líšia.](fig/fig-cyklus-krizovatka.svg)

| Miesto na kolese | Odber | Doplnenie |
| --- | --- | --- |
| **citrát** | von z mitochondrie; tam dá acetyl na stavbu MK a cholesterolu | — |
| **2-oxoglutarát** | aminokyselina glutamát a z nej glutamín; v mozgu aj prenášač GABA | tie isté dve aminokyseliny |
| **sukcinyl-CoA** | hém (s glycínom) | tri aminokyseliny (valín, metionín, izoleucín) a MK, ktoré majú nepárny počet uhlíkov |
| **fumarát** | — | fenylalanín, tyrozín |
| **malát, oxalacetát** | glukoneogenéza; aspartát → nukleotidy | **pyruvát** (pyruvátkarboxyláza); aspartát |

Posledný riadok má pokračovanie: z aspartátu a z glutamínu – teda z oxalacetátu a z 2-oxoglutarátu – pochádza časť atómov purínového aj pyrimidínového kruhu ([→ 13 Metabolizmus nukleotidov](13_nukleotidy)).

Prvý riadok rieši problém zo sekcie 6.2.1: acetyl-CoA cez membránu neprejde, citrát áno. V cytosole sa z neho acetyl-CoA uvoľní a oxalacetát sa vráti späť.

> [!REG]
> **Prečo pyruvátkarboxylázu zapína acetyl-CoA.** Keď acetyl-CoA pribúda, znamená to, že sa nemá s čím spájať – chýba oxalacetát. Enzým, ktorý oxalacetát vyrába z pyruvátu, je bez acetyl-CoA takmer neaktívny a s ním naplno pracuje ([→ 4.5.2 Prvá obchádzka: z pyruvátu na fosfoenolpyruvát](04_metabolizmus_glukozy#sub-4-5-2)). Koleso si tak samo objednáva vlastný nosič.

Dva enzýmy, ktoré obe začínajú na „pyruvát-“ a obe sú v mitochondrii, sa na skúške pletú. Robia s pyruvátom opačné veci a acetyl-CoA na ne pôsobí opačne.

| | Brána – dehydrogenázový komplex {fial} | Karboxyláza {zel} |
| --- | --- | --- |
| Čo urobí s pyruvátom | odštiepi CO₂, zvyšok oxiduje a naviaže na CoA | CO₂ naopak pripojí |
| Počet uhlíkov produktu | dva (acetyl) | štyri (oxalacetát) |
| Čo potrebuje | päť koenzýmov z [→ 6.2.2](#sub-6-2-2) | biotín a ATP |
| Ako na ňu pôsobí acetyl-CoA | brzdí ju | zapína ju |
| Zmysel | palivo pre koleso | nosič pre koleso; štart cesty ku glukóze |
| Kedy prevažuje | po jedle, pri práci | nalačno, pri hladovaní |

> [!KLINIKA]
> **Hladovanie, diabetes a ketolátky.** V pečeni pri hladovaní odchádza oxalacetát do glukoneogenézy, kým β-oxidácia dodáva acetyl-CoA viac než inokedy. Koleso ho nestíha prijať – chýba mu nosič. Nadbytočný acetyl-CoA sa spája sám so sebou na ketolátky, ktoré pečeň vyváža ako palivo pre mozog a sval ([→ 11 Lipoproteíny a ketolátky](11_lipoproteiny_ketolatky)). Rovnaký mechanizmus, len bez brzdy, beží pri nedostatku inzulínu.

## 6.7 Poruchy: keď brána alebo koleso viazne

Úplný výpadok enzýmu kolesa nie je zlučiteľný so životom, takže poruchy sú čiastočné a prejavia sa tam, kde je spotreba ATP najväčšia – v mozgu. Sekcia ich radí podľa miesta: brána, koleso a nakoniec zvláštny prípad, keď zmenený enzým kolesa nespôsobí nedostatok energie, ale nádor.

> [!JADRO]
> Blok brány (vrodený deficit, **tiamín**, arzén) → pyruvát nemá kam → **laktát a alanín ↑**, mozog bez ATP. Jedy kolesa: fluóracetát (akonitáza), malonát (sukcinátdehydrogenáza). Mutácie enzýmov kolesa → **onkometabolity** → nádory.

### 6.7.1 Zatvorená brána

Prototypom je vrodený deficit pyruvátdehydrogenázového komplexu – najčastejšia biochemická príčina vrodenej laktátovej acidózy. Získané poruchy brány sa od neho líšia len príčinou.

> [!MECH]
> **Od bloku k obrazu**
> komplex nepracuje → pyruvát sa hromadí → laktátdehydrogenáza ho redukuje na **laktát**, aminotransferáza mení na **alanín** → laktátová acidóza · mozog, ktorý žije z glukózy, nedostane z pyruvátu acetyl-CoA → málo ATP → **neurologický obraz**

Väčšinu prípadov spôsobuje gén pre podjednotku E1α na chromozóme X; ochorejú však aj dievčatá. Najčastejšími nálezmi v dojčenskom veku sú znížené svalové napätie a oneskorený vývin, často so štrukturálnymi zmenami mozgu.

> [!KLINIKA]
> **Obísť bránu.** Liečba vychádza priamo z mapy. *Ketogénna diéta* dodá mozgu ketolátky, z ktorých acetyl-CoA vzniká bez pyruvátdehydrogenázy. *Tiamín* vo vysokej dávke sa odporúča všetkým – niektoré varianty E1 naň odpovedajú. *Dichlóracetát* brzdí kinázu, takže zvyšok komplexu ostane zapnutý: v štúdii fázy III u 34 detí znížil laktát asi o pätinu, no motorické skóre sa po štyroch mesiacoch od placeba nelíšilo; zlepšenie sa ukázalo až pri dlhšom podávaní.

| Príčina | Čo zlyhá | Čím sa líši od vrodeného deficitu |
| --- | --- | --- |
| **nedostatok tiamínu** (alkoholizmus, podvýživa) | E1 brány aj 2-oxoglutarátdehydrogenáza | získaný a liečiteľný; Wernickeho-Korsakovov syndróm, beri-beri |
| **arzenitan, ortuť** | lipoamid – jed sa viaže na jeho SH-skupiny | otrava; postihne aj krok 4 kolesa |
| **nadbytok acetyl-CoA a NADH** | kináza komplex vypne | fyziologický stav pri hladovaní, nie choroba |

> [!KLINIKA]
> **Mozog bez tiamínu.** U podvyživeného človeka so závislosťou od alkoholu je zásoba tiamínu nízka. Brána aj štvrtý krok kolesa bez neho viaznu: pyruvát sa mení na laktát a neuróny, ktoré žijú z glukózy, strácajú ATP. Výsledkom je Wernickeho-Korsakovov syndróm – postihnutie mozgu s poruchou vedomia a pamäti. Príčina je odstrániteľná, preto sa na ňu pri takomto pacientovi myslí ako na prvú.

### 6.7.2 Jedy a poruchy kolesa

Dva klasické inhibítory ukazujú dva rôzne princípy, ktoré kapitola 2 opísala všeobecne ([→ 2.4.2 Inhibítory](02_uvod_regulacia_metabolizmu#sub-2-4-2)).

| Látka | Miesto | Princíp |
| --- | --- | --- |
| **fluóracetát** (jed na hlodavce) | akonitáza | bunka ho sama premení na fluórcitrát – až ten enzým blokuje; citrát sa hromadí („smrtiaca syntéza“) |
| **malonát** | sukcinátdehydrogenáza | kompetitívny inhibítor: podobá sa na sukcinát, ale je o uhlík kratší a dvojitú väzbu vytvoriť nemôže |
| **arzenitan** | 2-oxoglutarátdehydrogenáza | viaže sa na lipoamid, rovnako ako v bráne |

Koleso oslabí aj nadbytok amoniaku. Pri jeho zneškodňovaní sa 2-oxoglutarát mení na glutamát a glutamín, teda z kolesa odchádza, a amoniak navyše brzdí 2-oxoglutarátdehydrogenázu. V mozgu je to jeden z mechanizmov poruchy vedomia pri vysokej hladine amoniaku. Z vrodených porúch je známy deficit fumarázy – ťažké postihnutie mozgu od raného detstva.

### 6.7.3 Onkometabolity: keď medziprodukt mení gény

Dva enzýmy kolesa a dvaja blízki príbuzní tretieho majú druhú, nečakanú tvár. Ich mutácie nevedú k nedostatku energie, ale k nádorom – a mechanizmus stojí na podobnosti štyroch malých molekúl (Obr. 6.7).

![Obr. 6.7 — 2-oxoglutarát a tri molekuly, ktoré sa naň podobajú. 2-oxoglutarát je kosubstrátom skupiny dioxygenáz; ostatné tri ich brzdia. Modrý hydroxyl je jediný rozdiel medzi 2-hydroxyglutarátom a 2-oxoglutarátom. Výrez porovnáva reakciu zdravého a zmutovaného enzýmu.](fig/fig-onkometabolity.svg)

> [!MECH]
> **Od mutácie k zmenenej expresii génov**
> - Mutácia **sukcinátdehydrogenázy** alebo **fumarázy** → hromadí sa sukcinát, resp. fumarát.
> - Mutácia **izocitrátdehydrogenázy** 1 alebo 2 (zámena jednej aminokyseliny v aktívnom mieste) dá enzýmu novú schopnosť: 2-oxoglutarát redukuje na **2-hydroxyglutarát**. Izoenzýmy 1 a 2 pracujú s NADP⁺ – prvý v cytosole, druhý v mitochondrii; izoenzým kolesa (3, s NAD⁺) sa v nádoroch nemení.
> - Všetky tri látky brzdia enzýmy, ktoré potrebujú 2-oxoglutarát: demetylázy histónov a DNA a hydroxylázy, ktoré pri dostatku kyslíka značia transkripčný faktor HIF na rozklad. Bunka sa správa, akoby jej chýbal kyslík, a mení sa prepis mnohých génov.

Mutácie sukcinátdehydrogenázy sa našli v paragangliómoch, mutácie fumarázy v leiomyómoch maternice, mutácie izocitrátdehydrogenázy v gliómoch a v akútnej myeloidnej leukémii.

> [!KLINIKA]
> **Liek proti zmenenému enzýmu.** Vorasidenib brzdí mutovanú izocitrátdehydrogenázu 1 aj 2, a tým tvorbu 2-hydroxyglutarátu. U pacientov s gliómom 2. stupňa predĺžil medián času do zhoršenia choroby z 11,1 na 27,7 mesiaca oproti placebu. Je to priamy dôkaz, že nádor poháňa metabolit, nie nedostatok energie.

> [!KLINIKA]
> **Tkanivo, ktoré koleso úmyselne brzdí.** Bunky zdravej prostaty hromadia zinok. Ten tlmí oxidáciu citrátu, takže citrát sa nespáli a žľaza ho vylučuje do sekrétu. Nádorové bunky prostaty zinok strácajú a citrát začnú spaľovať – zmena opačná, než akú robí väčšina nádorov.

## 6.8 Laboratórium: glukóza v sére a čo sa stane vo vzorke

Meranie glukózy je najčastejšie biochemické vyšetrenie a jeho princíp i úskalia sa dajú odvodiť z kapitol 3 až 6. Sekcia pridáva k metóde z kapitoly 3 druhú, a potom otázku, na ktorú odpovedá glykolýza: čo sa s glukózou deje v skúmavke po odbere.

> [!JADRO]
> Dve enzýmové metódy: **glukózaoxidáza** (farba) a **hexokináza + glukóza-6-fosfátdehydrogenáza** (NADPH pri 340 nm). Erytrocyty vo vzorke glukózu ďalej spaľujú; fluorid to zastaví až po hodinách → dnes citrátový pufor alebo ľad a rýchle odstredenie.

> [!LAB]
> **Glukóza v sére nalačno:** 4,1–5,9 mmol/l (rozpätie jedného slovenského nemocničného laboratória; iné laboratóriá uvádzajú mierne odlišné hranice). Hodnota 7,0 mmol/l a viac nalačno je kritériom diabetu ([→ 2.8 Laboratórium a klinika](02_uvod_regulacia_metabolizmu#sec-2-8)). Fyziologicky je glykémia vyššia po jedle.

Prvú metódu – glukózaoxidázu s peroxidázou – opísala kapitola 3 ([→ 3.10 Laboratórium: glykogén a glukóza vo vzorke](03_sacharidy_glykogen#sec-3-10)). Druhá používa dva enzýmy, ktoré čitateľ pozná z dráh.

> [!LAB]
> **Hexokinázová metóda**
> 1. Hexokináza z činidla fosforyluje glukózu vzorky: glukóza + ATP → glukóza-6-fosfát.
> 2. Glukóza-6-fosfátdehydrogenáza ho oxiduje a redukuje NADP⁺ na NADPH ([→ 5.2.1 Oxidačná časť: dva NADPH a jeden CO₂](05_pentozy_fruktoza_galaktoza#sub-5-2-1)).
> 3. NADPH pohlcuje svetlo pri 340 nm, NADP⁺ nie. Prírastok absorbancie je úmerný množstvu glukózy; koncentrácia sa vypočíta z pomeru k štandardu.

```chain
c(glukóza) = A(vzorka) / A(štandard) × c(štandard)
príklad: štandard 5,0 mmol/l má A = 0,40; vzorka má A = 0,52 → c = 0,52 / 0,40 × 5,0 = **6,5 mmol/l** (nad rozpätím)
```

Niektoré postupy pred meraním odstraňujú bielkoviny: vyzrážajú sa, odstredia a meria sa číra tekutina nad zrazeninou, aby bielkoviny a zákal farebnú reakciu nerušili.

> [!IMPORTANT]
> **[R] Revízia — fluorid nestačí**
> **Kedysi:** krv na glukózu sa odoberala do skúmavky s fluoridom sodným s predstavou, že glykolýzu erytrocytov zastaví hneď.
> **Dnes:** glukóza vo vzorke s fluoridom klesá ešte približne štyri hodiny. Fluorid brzdí enolázu, až deviaty krok glykolýzy; kroky nad ňou glukózu fosforylujú ďalej, kým majú ATP ([→ 4.2.2 Výnosná fáza: oxidácia a dve substrátové fosforylácie](04_metabolizmus_glukozy#sub-4-2-2)). Odporúčanie z roku 2023 preto uprednostňuje skúmavky s citrátovým pufrom – nízke pH zastaví glykolýzu okamžite – a kde nie sú, vzorku hneď na ľad a odstrediť do 15 až 30 minút.

> [!KLINIKA]
> **Nízka glykémia, ktorá vznikla v skúmavke.** Vzorka, ktorá stála hodiny pri izbovej teplote neodstredená, môže ukázať glukózu pod normou u človeka, ktorý hypoglykémiu nemal – a zároveň zakryť hranične zvýšenú hodnotu u človeka s diabetom. Pri nečakanom výsledku sa preto najprv pýta, ako dlho a v čom vzorka čakala.

## 6.9 Súhrn a rýchle rozlíšenie

Súhrn sleduje mapu z [→ 6.1](#sec-6-1): brána, koleso, križovatka, poruchy, meranie.

| Otázka | Odpoveď v jednej vete | Sekcia |
| --- | --- | --- |
| Čo sa deje v bráne? | Trojuhlíkový pyruvát príde o CO₂ a zvyšok sa oxidovaný naviaže na CoA – nevratne, vnútri mitochondrie. | 6.2 |
| Čo k tomu brána potrebuje? | Päť koenzýmov: štyri z vitamínov B₁, B₂, B₃ a B₅ a k nim lipoamid. | 6.2.2 |
| Ako sa vypína? | Kináza pridá na E1 fosfát; spúšťa ju nadbytok energie (ATP, NADH) a acetylu. | 6.2.3 |
| Čo ho zapína? | Fosfatáza, ktorú aktivuje Ca²⁺ a inzulín; kinázu brzdí pyruvát a ADP. | 6.2.3 |
| Ktoré kroky kolesa sú nevratné? | Citrátsyntáza, izocitrátdehydrogenáza a 2-oxoglutarátdehydrogenáza. | 6.3 |
| Kde odchádza CO₂? | V krokoch 3 a 4 – a ešte jeden v bráne. | 6.3 |
| Kde koleso vyrobí makroergickú väzbu priamo? | V kroku 5 – z energie tioesteru vznikne GTP. | 6.3 |
| Ktorý krok neleží v matrix, ale v membráne? | Šiesty: dehydrogenáza s FAD, ktorá je zároveň komplexom II. | 6.3 |
| Koľko ATP dá jedna otáčka? | Približne 10 (staršie 12). | 6.4 |
| Čo riadi rýchlosť kolesa? | Pomer NADH : NAD⁺ a ATP : ADP; izocitrátdehydrogenázu zapína ADP a Ca²⁺. | 6.5 |
| Prečo sa z acetyl-CoA nedá urobiť glukóza? | Brána je nevratná a v kolese dva uhlíky pribudnú a dva odídu – oxalacetátu nepribudne. | 6.3 |
| Hlavná anaplerotická reakcia? | Karboxylácia pyruvátu na oxalacetát – enzým s biotínom, platí sa ATP, spúšťa ju acetyl-CoA. | 6.6 |
| Pyruvátdehydrogenáza × pyruvátkarboxyláza? | Prvá uhlík odoberá a acetyl-CoA ju brzdí, druhá uhlík pridáva a acetyl-CoA ju zapína. | 6.6 |
| Čo spôsobí nedostatok tiamínu? | Viazne brána aj krok 4 kolesa: laktát stúpa, mozog nemá ATP. | 6.7.1 |
| Fluóracetát × malonát? | Prvý sa v bunke mení na inhibítor akonitázy, druhý súťaží so sukcinátom. | 6.7.2 |
| Čo je onkometabolit? | Sukcinát, fumarát alebo 2-hydroxyglutarát, ktorý brzdí enzýmy závislé od 2-oxoglutarátu a mení expresiu génov. | 6.7.3 |
| Prečo fluorid v skúmavke nestačí? | Brzdí až enolázu; glukóza klesá ešte hodiny. | 6.8 |

## 6.10 Otázky na zopakovanie

```quiz
? Prečo je práve premena pyruvátu na acetyl-CoA krokom, ktorý organizmus stráži najprísnejšie – fosforyláciou aj produktmi?
= Je nevratná a po nej z uhlíkov glukózy už glukóza nevznikne. Človek má zásobu sacharidov na deň, kým tuku na týždne; keby brána ostala otvorená pri hladovaní, pyruvát z laktátu a alanínu by sa spálil namiesto toho, aby z neho pečeň urobila glukózu pre mozog. Preto ju acetyl-CoA a NADH z β-oxidácie zatvárajú. [→ 6.2.3](#sub-6-2-3)
? Citrát sa najprv izomerizuje na izocitrát a až ten sa oxiduje. Prečo sa neoxiduje rovno citrát?
= Hydroxyl citrátu sedí na uhlíku, ktorý nemá vodík – je to terciárny alkohol a na ketón sa oxidovať nedá. Akonitáza presunie hydroxyl na susedný uhlík, kde vodík je. Až potom môže dehydrogenáza vytvoriť ketoskupinu, ktorá uľahčí odštiepenie karboxylu. [→ 6.3](#sec-6-3)
? Do jednej otáčky kolesa vstúpia dva uhlíky a dva z neho odídu. Prečo teda bunka z mastných kyselín glukózu nevyrobí, hoci oxalacetát je substrátom glukoneogenézy?
= Lebo oxalacetátu v kolese nepribúda: jeden sa na začiatku spotrebuje a jeden sa na konci obnoví. Ak ho bunka odoberie na glukózu, musí ho doplniť z niečoho iného než z acetyl-CoA – z pyruvátu alebo z aminokyselín. Acetyl koleso len „pretočí“. [→ 6.3](#sec-6-3) · [→ 4.5.1 Z čoho a kde](04_metabolizmus_glukozy#sub-4-5-1)
? Sval sa začne prudko sťahovať. Ktoré dva signály zrýchlia bránu aj koleso skôr, než klesne ATP, a cez ktoré enzýmy?
= Ca²⁺, ktorý sa pri kontrakcii uvoľní a vstúpi aj do mitochondrie, zapne fosfatázu pyruvátdehydrogenázového komplexu, izocitrátdehydrogenázu a 2-oxoglutarátdehydrogenázu. ADP, ktoré vzniká zo spotrebovaného ATP, brzdí kinázu brány a alostericky zapína izocitrátdehydrogenázu. [→ 6.2.3](#sub-6-2-3) · [→ 6.5](#sec-6-5)
? Acetyl-CoA brzdí pyruvátdehydrogenázu a zapína pyruvátkarboxylázu. Aký zmysel má, že tá istá molekula pôsobí na dva enzýmy pyruvátu opačne?
= Nadbytok acetyl-CoA hlási dve veci naraz: paliva pre koleso je dosť a chýba nosič, na ktorý by sa acetyl naviazal. Zatvorenie brány šetrí pyruvát, zapnutie karboxylázy z neho robí oxalacetát. V pečeni nalačno ten oxalacetát pokračuje do glukoneogenézy – tuk tak riadi tvorbu glukózy, hoci sa na ňu sám nepremení. [→ 6.6](#sec-6-6) · [→ 4.6.3 Výstup: pyruvátkináza a pyruvátkarboxyláza](04_metabolizmus_glukozy#sub-4-6-3)
? Nedostatok tiamínu zvýši laktát v krvi a zároveň zníži aktivitu transketolázy v erytrocytoch. Čo majú tieto dva nálezy spoločné? (Vráť sa ku kapitole 5.)
= Koenzým. Tiamíndifosfát potrebuje E1 pyruvátdehydrogenázového komplexu – bez neho pyruvát nemá kam a redukuje sa na laktát – aj transketoláza pentózofosfátovej dráhy. Erytrocyt bránu nemá, ale transketolázu áno, a tá sa dá ľahko zmerať; preto slúži ako okno do zásob vitamínu. [→ 6.7.1](#sub-6-7-1) · [→ 5.2.2 Neoxidačná časť: preskupenie uhlíkov](05_pentozy_fruktoza_galaktoza#sub-5-2-2)
? Mutovaná izocitrátdehydrogenáza v glióme neznižuje tvorbu ATP, a predsa vedie k nádoru. Akým mechanizmom?
= Enzým získa novú aktivitu – 2-oxoglutarát redukuje na 2-hydroxyglutarát. Ten sa na 2-oxoglutarát podobá a brzdí enzýmy, ktoré ho potrebujú ako kosubstrát: demetylázy histónov a DNA a hydroxylázy, ktoré značia HIF na rozklad. Mení sa prepis génov, nie zásoba energie. Dôkazom je liek, ktorý mutovaný enzým brzdí a rast nádoru spomalí. [→ 6.7.3](#sub-6-7-3)
? Prípad: trojmesačný chlapec má znížené svalové napätie a zaostáva vo vývine. Laktát v plazme je 6,2 mmol/l (norma 0,5–2,2), zvýšený je aj pyruvát a alanín; glykémia je v norme. Kde je blok a prečo stúpa práve táto trojica?
= V pyruvátdehydrogenázovom komplexe. Pyruvát sa nemôže zmeniť na acetyl-CoA, hromadí sa a odteká dvoma vratnými reakciami, ktoré mu ostali: redukciou na laktát a transamináciou na alanín. Mozog bez acetyl-CoA z glukózy nemá dosť ATP. Liečba obchádza bránu ketolátkami a skúša zvyšok enzýmu udržať zapnutý. [→ 6.7.1](#sub-6-7-1)
? Prípad: z ambulancie príde do laboratória krv odobratá ráno do skúmavky s fluoridom, odstredená až popoludní. Glykémia je 3,4 mmol/l, pacient bol bez ťažkostí. Čomu veriť?
= Výsledok je pravdepodobne falošne nízky. Fluorid brzdí enolázu, no hexokináza a fosfofruktokináza-1 erytrocytov fosforylujú glukózu ďalej, kým majú ATP – prvé hodiny po odbere teda glukóza klesá aj vo „fluoridovej“ skúmavke. Odber treba zopakovať a vzorku spracovať hneď, alebo použiť skúmavku s citrátovým pufrom. [→ 6.8](#sec-6-8)
```

## 6.11 Zdroje

**Učebnice (kontrola faktov)**

- Harvey R. A., Ferrier D. R.: *Lippincott's Illustrated Reviews: Biochemistry*, 5. vyd., Philadelphia: Lippincott Williams & Wilkins, 2011. ISBN 978-1-60831-412-6. (pyruvátdehydrogenázový komplex a jeho regulácia, kroky a regulácia citrátového cyklu, tiamín, arzén, fluóracetát)
- Rodwell V. W., Bender D. A., Botham K. M., Kennelly P. J., Weil P. A.: *Harper's Illustrated Biochemistry*, 31. vyd., New York: McGraw-Hill Education, 2018. ISBN 978-1-25-983793-7. (výťažok 10 ATP na otáčku, rovnováha malátdehydrogenázy, medzistupne akonitázy a izocitrátdehydrogenázy, izoenzýmy izocitrátdehydrogenázy a sukcinyl-CoA-syntetázy, inzulín a brána v tukovom tkanive, amoniak a 2-oxoglutarátdehydrogenáza, dichlóracetát)
- Lieberman M., Peet A.: *Marks' Basic Medical Biochemistry: A Clinical Approach*, 5. vyd., Philadelphia: Wolters Kluwer, 2018. ISBN 978-1-4963-2481-8. (anaplerotické reakcie; úloha tiamíndifosfátu; mutácie sukcinátdehydrogenázy, fumarázy a izoenzýmov izocitrátdehydrogenázy v nádoroch)

**Názvoslovie, odporúčania a prehľady**

- Keshavan N., Neugebauer J., Bellusci M. a kol.: Consensus guidelines for diagnosis and management of pyruvate dehydrogenase complex deficiency. *J Inherit Metab Dis* 2026;49:e70226. [doi:10.1002/jimd.70226](https://doi.org/10.1002/jimd.70226)
- Stacpoole P. W., Abdenur J. E., Bedoyan J. K. a kol.: Phase III trial of sodium dichloroacetate for pyruvate dehydrogenase complex deficiency in children. *JCI Insight* 2026;11:e200149. [doi:10.1172/jci.insight.200149](https://doi.org/10.1172/jci.insight.200149)
- Arnold P. K., Finley L. W. S.: Regulation and function of the mammalian tricarboxylic acid cycle. *J Biol Chem* 2023;299:102838. [doi:10.1016/j.jbc.2022.102838](https://doi.org/10.1016/j.jbc.2022.102838)
- Mellinghoff I. K., van den Bent M. J., Blumenthal D. T. a kol.: Vorasidenib in IDH1- or IDH2-mutant low-grade glioma. *N Engl J Med* 2023;389:589–601. [doi:10.1056/NEJMoa2304194](https://doi.org/10.1056/NEJMoa2304194)
- Sacks D. B., Arnold M., Bakris G. L. a kol.: Guidelines and recommendations for laboratory analysis in the diagnosis and management of diabetes mellitus. *Diabetes Care* 2023;46:e151–e199. [doi:10.2337/dci23-0036](https://doi.org/10.2337/dci23-0036)
- Patel M. S., Rideout T. C.: Regulation of pyruvate dehydrogenase complex: dancing to different drums in cancer. *Int J Cancer* 2026;158:1464–1480. [doi:10.1002/ijc.70189](https://doi.org/10.1002/ijc.70189)
- Jeong J. Y., Jeoung N. H., Park K.-G., Lee I.-K.: Transcriptional regulation of pyruvate dehydrogenase kinase. *Diabetes Metab J* 2012;36:328–335. [doi:10.4093/dmj.2012.36.5.328](https://doi.org/10.4093/dmj.2012.36.5.328)
- McCormack J. G., Denton R. M.: The activation of pyruvate dehydrogenase in the perfused rat heart by adrenaline and other inotropic agents. *Biochem J* 1981;194:639–643. [doi:10.1042/bj1940639](https://doi.org/10.1042/bj1940639)
- Eidelman E., Twum-Ampofo J., Ansari J., Siddiqui M. M.: The metabolic phenotype of prostate cancer. *Front Oncol* 2017;7:131. [doi:10.3389/fonc.2017.00131](https://doi.org/10.3389/fonc.2017.00131)
- Kondrashov F. A., Koonin E. V., Morgunov I. G., Finogenova T. V., Kondrashova M. N.: Evolution of glyoxylate cycle enzymes in Metazoa: evidence of multiple horizontal transfer events and pseudogene formation. *Biol Direct* 2006;1:31. [doi:10.1186/1745-6150-1-31](https://doi.org/10.1186/1745-6150-1-31)
- Nomenclature Committee of the IUBMB: The glyoxylate cycle (prehľad reakcií a enzýmov). [iubmb.qmul.ac.uk/enzyme/reaction/misc/glyox.html](https://iubmb.qmul.ac.uk/enzyme/reaction/misc/glyox.html)
- Nobel Prize Outreach: The Nobel Prize in Physiology or Medicine 1953. [nobelprize.org/prizes/medicine/1953/summary](https://www.nobelprize.org/prizes/medicine/1953/summary/)
- PubChem (National Center for Biotechnology Information): záznamy zlúčenín – štruktúry molekúl v schémach (medzi nimi koenzým A, CID 87642; tiamíndifosfát, CID 5431; cis-akonitát, CID 643757; oxalosukcinát, CID 972). [pubchem.ncbi.nlm.nih.gov](https://pubchem.ncbi.nlm.nih.gov/)

**Obrázky**

Všetky schémy a vzorce v kapitole sú vlastné kresby (SVG); štruktúry molekúl sú overené v databáze PubChem. Súhrn je v registri `ZDROJE-OBRAZKOV.md`.
