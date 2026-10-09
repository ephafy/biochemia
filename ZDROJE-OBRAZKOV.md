# Register obrázkov — BIOCHEM

Licenčný doklad ku každému obrázku (CLAUDE.md §4.5). **Bez záznamu sa obrázok nezverejní.**
Kniha používa výhradne (a) vlastné schémy a štruktúrne vzorce v SVG, nakreslené z faktov, nie prekreslené
z cudzej schémy, a (b) obrázky s voľnou licenciou (Wikimedia Commons a pod.), overenou na stránke súboru
cez API, nie z popisky.

## Súhrn

| Druh | Počet | Stav |
|---|---|---|
| Vlastné schémy a vzorce (SVG) | 60 schém · 109 vzorcov v knižnici | kap. 1–8 |
| Obrázky s voľnou licenciou (CC0, CC BY, CC BY-SA, public domain) | 0 | — |

**Licenčné podmienky:** CC BY a CC BY-SA vyžadujú uvedenie autora, zdroja a licencie (TASL) — je pri každom obrázku
v popisku (odkaz na stránku súboru). Prevzatý obrázok sa neupravuje okrem zmenšenia; každá iná úprava (orezanie,
preklad popiskov, dokreslenie) sa označí pri obrázku ako „upravené“ a zapíše sem — pri CC BY-SA ostáva upravená
verzia pod CC BY-SA (§4.4).

## Knižnica vzorcov

Štruktúrne vzorce sú vlastné kresby: z opisu v `chapters/fig/mol/<id>.txt` ich kreslí `tools/vzorce.js`
(CLAUDE.md §5.2). Štruktúra molekuly je fakt; odkiaľ je a kedy bola overená, hovorí riadok `zdroj:` v hlavičke
každého súboru (identifikátor databázy a dátum). Žiadny vzorec nie je prevzatý ani obkreslený z cudzieho obrázka.
Zoznam s rozmermi vypíše `node tools/vzorce.js`. Schémy, ktoré vzorce používajú, majú riadok v registri nižšie.

## Register

| Súbor | Stránka súboru | Autor | Licencia | Úpravy | Kde je použitý | Overené | Stav |
|---|---|---|---|---|---|---|---|
| `chapters/fig/fig-glykozidova-vazba.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 1, Obr. 1.1 | 2026-10-06 | vlastná SVG zo vzorcov (maltoza, glukoza); nakreslená z textu kapitoly |
| `chapters/fig/fig-glukoza-formy.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 1, Obr. 1.2 | 2026-10-06 | vlastná SVG zo vzorcov (glukoza, glukoza-fischer, glukoza-beta) |
| `chapters/fig/fig-alanin-naboj.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 1, Obr. 1.3 | 2026-10-06 | vlastná SVG zo vzorcov (alanin, alanin-kation, alanin-anion) |
| `chapters/fig/fig-triedy-enzymov.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 1, Obr. 1.4 | 2026-10-06 | vlastná SVG zo vzorcov (glukoza, glukoza-6-fosfat, fruktoza-6-fosfat, laktat, pyruvat) |
| `chapters/fig/fig-hydrogenuhlicitan.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 1, Obr. 1.5 | 2026-10-06 | vlastná SVG (uzly a šípky; regulačná slučka) |
| `chapters/fig/fig-alp-pnpp.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 1, Obr. 1.6 | 2026-10-06 | vlastná SVG zo vzorcov (p-nitrofenylfosfat, p-nitrofenolat) |
| `chapters/fig/fig-kalibracna-krivka.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 1, Obr. 1.7 | 2026-10-06 | vlastný graf, schematický (bez nameraných hodnôt) |
| `chapters/fig/fig-mapa-metabolizmu.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 2, Obr. 2.1 | 2026-10-06 | vlastná SVG; križovatky vzorcom (glukoza-6-fosfat, pyruvat, acetyl-coa), ostatné uzly |
| `chapters/fig/fig-kinetika.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 2, Obr. 2.2 | 2026-10-06 | vlastný graf, schematický (krivky vypočítané z rovnice, Km ≈ 10 mmol/l) |
| `chapters/fig/fig-ph-teplota.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 2, Obr. 2.3 | 2026-10-06 | vlastný graf, schematický |
| `chapters/fig/fig-hormonalna-slucka.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 2, Obr. 2.4 | 2026-10-06 | vlastná SVG (uzly a šípky; regulačná slučka) |
| `chapters/fig/fig-cesta-sacharidov.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 3, Obr. 3.1 | 2026-10-06 | vlastná SVG – mapa kapitoly; križovatka vzorcom (glukoza-6-fosfat), ostatné uzly |
| `chapters/fig/fig-disacharidy.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 3, Obr. 3.2 | 2026-10-06 | vlastná SVG zo vzorcov (laktoza, galaktoza, glukoza, sacharoza, fruktoza) |
| `chapters/fig/fig-enterocyt.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 3, Obr. 3.3 | 2026-10-06 | vlastná SVG (uzly a šípky; lúmen hore, krv dole – iné rozloženie než v podkladoch) |
| `chapters/fig/fig-glykogen-drahy.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 3, Obr. 3.4 | 2026-10-06 | vlastná SVG zo vzorcov (glukoza, glukoza-6-fosfat, glukoza-1-fosfat, udp-glukoza); súhrnná schéma dráhy |
| `chapters/fig/fig-glykogen-stavba.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 3, Obr. 3.5 | 2026-10-06 | vlastná SVG (krúžky = zvyšky glukózy; tri panely vedľa seba – iné rozloženie než v podkladoch) |
| `chapters/fig/fig-regulacia-glykogenu.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 3, Obr. 3.6 | 2026-10-06 | vlastná SVG (uzly a čiary vplyvu; dva panely pečeň × sval) |
| `chapters/fig/fig-glukoza-dva-smery.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 4, Obr. 4.1 | 2026-10-06 | vlastná SVG – mapa kapitoly (uzly; nadol glykolýza, nahor glukoneogenéza, regulátory pri enzýmoch) |
| `chapters/fig/fig-glykolyza-investicia.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 4, Obr. 4.2 | 2026-10-06 | vlastná SVG zo vzorcov (glukoza, glukoza-6-fosfat, fruktoza-6-fosfat, fruktoza-1-6-bisfosfat, dihydroxyacetonfosfat, glyceraldehyd-3-fosfat) |
| `chapters/fig/fig-glykolyza-vynos.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 4, Obr. 4.3 | 2026-10-06 | vlastná SVG zo vzorcov (glyceraldehyd-3-fosfat, 1-3-bisfosfoglycerat, 3-fosfoglycerat, 2-fosfoglycerat, fosfoenolpyruvat, pyruvat) |
| `chapters/fig/fig-bpg-skrat.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 4, Obr. 4.4 | 2026-10-06 | vlastná SVG zo vzorcov (1-3-bisfosfoglycerat, 2-3-bisfosfoglycerat, 3-fosfoglycerat) |
| `chapters/fig/fig-pyruvat-osudy.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 4, Obr. 4.5 | 2026-10-06 | vlastná SVG zo vzorcov (pyruvat, laktat, acetyl-coa, alanin, oxalacetat); pyruvát v strede, štyri smery |
| `chapters/fig/fig-obchadzka-pyruvat.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 4, Obr. 4.7 | 2026-10-06 | vlastná SVG zo vzorcov (pyruvat, oxalacetat, fosfoenolpyruvat); mitochondria × cytosol |
| `chapters/fig/fig-fruktoza-26.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 4, Obr. 4.8 | 2026-10-06 | vlastná SVG zo vzorcov (fruktoza-6-fosfat, fruktoza-1-6-bisfosfat, fruktoza-2-6-bisfosfat); signál v strede medzi dvoma smermi |
| `chapters/fig/fig-coriho-cyklus.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 4, Obr. 4.9 | 2026-10-06 | vlastná SVG (glukoza, laktat, alanin vzorcom v krvi; uzly v tkanivách) |
| `chapters/fig/fig-hexozy-mapa.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 5, Obr. 5.1 | 2026-10-08 | vlastná SVG (uzly); glykolýza ako zvislá os, tri odbočky po stranách; revízia 8. 10. 2026: glukóza-1-fosfát ako uzol, odkazy na podrobné schémy, výrez „triózafosfáty“ zo vzorcov (dihydroxyacetonfosfat, glyceraldehyd-3-fosfat) |
| `chapters/fig/fig-ppp-oxidacna.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 5, Obr. 5.2 | 2026-10-08 | vlastná SVG zo vzorcov (glukoza-6-fosfat-beta, 6-fosfoglukonolakton, 6-fosfoglukonat, ribuloza-5-fosfat, xyluloza-5-fosfat, riboza-5-fosfat); uhlík 1 zvýraznený; revízia 8. 10. 2026: β-anomér substrátu, laktonáza nevratná, výrez „NADP⁺ → NADPH“ (nadp, nikotinamid-ox, nikotinamid-red) |
| `chapters/fig/fig-ppp-preskupenie.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 5, Obr. 5.3 | 2026-10-08 | vlastná SVG zo vzorcov vo Fischerovej projekcii (xyluloza-5-fosfat, riboza-5-fosfat, sedoheptuloza-7-fosfat, erytroza-4-fosfat, fruktoza-6-fosfat-fischer, glyceraldehyd-3-fosfat-fischer); tri výmeny pod sebou v troch stĺpcoch podľa osudu kostry, prenášaný zvyšok modrou šípkou, výstup do glykolýzy (prekreslené 8. 10. 2026) |
| `chapters/fig/fig-nadph-glutation.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 5, Obr. 5.4 | 2026-10-08 | vlastná SVG (uzly); tri spriahnuté kolesá pod sebou; revízia 8. 10. 2026: výrez „glutatión“ zo vzorca (glutation), oxidovaná forma schematicky |
| `chapters/fig/fig-fruktoza-vstup.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 5, Obr. 5.5 | 2026-10-08 | vlastná SVG zo vzorcov (fruktoza, fruktoza-1-fosfat, dihydroxyacetonfosfat, glyceraldehyd, glyceraldehyd-3-fosfat); glukóza vľavo ako uzly na porovnanie; revízia 8. 10. 2026: oba triózafosfáty v spoločnom rámci, regulátory fosfofruktokinázy-1, výrezy „blok aldolázy B“ (uzly) a „kam idú triózy“ (glycerol-3-fosfat) |
| `chapters/fig/fig-polyolova-draha.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 5, Obr. 5.6 | 2026-10-08 | vlastná SVG zo vzorcov (glukoza-fischer, sorbitol, fruktoza-fischer); revízia 8. 10. 2026: spresnené tkanivá pri oboch enzýmoch |
| `chapters/fig/fig-galaktoza-leloir.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 5, Obr. 5.7 | 2026-10-08 | vlastná SVG zo vzorcov (galaktoza, galaktoza-1-fosfat, glukoza-1-fosfat, udp-glukoza, udp-galaktoza, galaktitol); horný rad uhlíky, dolný rad nosič; revízia 8. 10. 2026: fosfoglukomutáza, tri výrezy – mutarotáza (galaktoza-beta), plná UDP-glukóza (udp-glukoza-plna), mechanizmus epimerázy |
| `chapters/fig/fig-udp-glukuronat.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 5, Obr. 5.8 | 2026-10-08 | vlastná SVG zo vzorcov (udp-glukoza, udp-glukuronat); revízia 8. 10. 2026: výrez „dráha kyseliny urónovej“ (uzly) |
| `chapters/fig/fig-acetyl-coa-mapa.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 6, Obr. 6.1 | 2026-10-08 | vlastná SVG (uzly); brána zvislo, koleso vpravo; revízia 8. 10. 2026: odkazy na podrobné schémy (kap. 4, 6, 7, 8); pri karboxyláze CO₂ a ATP |
| `chapters/fig/fig-koenzym-a.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 6, Obr. 6.2 | 2026-10-08 | vlastná SVG zo vzorca (koenzym-a) s popisom častí; nukleotid skrátene; revízia 8. 10. 2026: výrez s celým vzorcom (koenzym-a-plny) |
| `chapters/fig/fig-pdh-komplex.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 6, Obr. 6.3 | 2026-10-08 | vlastná SVG zo vzorcov (pyruvat, acetyl-coa, lipoamid, dihydrolipoamid) a uzlov E1–E3; revízia 8. 10. 2026: výrezy „tiamíndifosfát“ (tiamindifosfat) a „tri stavy ramena“ (lipoamid, acetyl-dihydrolipoamid, dihydrolipoamid) |
| `chapters/fig/fig-pdh-regulacia.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 6, Obr. 6.4 | 2026-10-08 | vlastná SVG (uzly); dva stavy komplexu a dva regulačné enzýmy; revízia 8. 10. 2026: doplnený dichlóracetát a stav organizmu pri oboch formách |
| `chapters/fig/fig-citratovy-cyklus.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 6, Obr. 6.5 | 2026-10-08 | vlastná SVG zo vzorcov (acetyl-coa, oxalacetat, citrat, izocitrat, 2-oxoglutarat, sukcinyl-coa, sukcinat, fumarat, malat); kruh v smere hodín, výnos v strede; revízia 8. 10. 2026: tri výrezy – akonitáza (cis-akonitat), izocitrátdehydrogenáza (oxalosukcinat), sukcinátdehydrogenáza a malonát (malonat); odkazy na Obr. 6.3 a kap. 7 |
| `chapters/fig/fig-cyklus-krizovatka.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 6, Obr. 6.6 | 2026-10-08 | vlastná SVG (uzly); odber ružovo, doplnenie modro; revízia 8. 10. 2026: odkazy na kap. 4 a 8; výrez „oxokyselina ⇌ aminokyselina“ (2-oxoglutarat, glutamat, oxalacetat, aspartat) |
| `chapters/fig/fig-onkometabolity.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 6, Obr. 6.7 | 2026-10-08 | vlastná SVG zo vzorcov (2-oxoglutarat, sukcinat, fumarat, 2-hydroxyglutarat); revízia 8. 10. 2026: výrez „zdravá a zmutovaná izocitrátdehydrogenáza“ (izocitrat, 2-oxoglutarat, 2-hydroxyglutarat) |
| `chapters/fig/fig-energia-mapa.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 7, Obr. 7.1 | 2026-10-08 | vlastná SVG (uzly); spád – priehrada – turbína a obeh ATP/ADP; revízia 8. 10. 2026: kreatínfosfát presunutý pod ATP; odkazy na schémy jednotlivých častí |
| `chapters/fig/fig-atp-vzorec.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 7, Obr. 7.2 | 2026-10-08 | vlastná SVG zo vzorca (atp) s popisom väzieb; revízia 8. 10. 2026: výrez „dva spôsoby štiepenia ATP“ (uzly) |
| `chapters/fig/fig-kreatinkinaza.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 7, Obr. 7.3 | 2026-10-08 | vlastná SVG zo vzorcov (kreatin, kreatinfosfat); revízia 8. 10. 2026: výrez „z kreatínfosfátu kreatinín“ (kreatinfosfat, kreatinin) |
| `chapters/fig/fig-prenasace-vodika.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 7, Obr. 7.4 | 2026-10-08 | vlastná SVG zo vzorcov (nad, nikotinamid-ox, nikotinamid-red, flavin-ox, flavin-red, ubichinon, ubichinol); revízia 8. 10. 2026: výrez „FAD celý“ (fad) |
| `chapters/fig/fig-dychaci-retazec.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 7, Obr. 7.5 | 2026-10-08 | vlastná SVG; komplexy ako bloky v páse membrány, cesta elektrónov a protónov, inhibítory, os redoxného potenciálu; revízia 8. 10. 2026: odkazy (koenzým Q, člnok, citrátový cyklus), ďalšie vstupy na Q; tri výrezy – prenášače vnútri komplexov (uzly), ATP-syntáza (vlastná schematická kresba rotora, osi a hlavice), rozpojovač (2-4-dinitrofenol, 2-4-dinitrofenolat) |
| `chapters/fig/fig-clnky.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 7, Obr. 7.6; kap. 4, Obr. 4.6 (tá istá schéma, od 8. 10. 2026) | 2026-10-08 | vlastná SVG zo vzorcov (dihydroxyacetonfosfat, glycerol-3-fosfat, oxalacetat, malat, aspartat); dva panely; revízia 8. 10. 2026: pomenovaná malátdehydrogenáza; odkazy na Obr. 7.5 |
| `chapters/fig/fig-metylenova-modra.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 7, Obr. 7.7 | 2026-10-08 | vlastná SVG zo vzorcov (metylenova-modra, leukometylenova-modra); revízia 8. 10. 2026: výrez „farbivo ako liek“ (uzly; odkaz na kap. 5) |
| `chapters/fig/fig-lipidy-mapa.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 8, Obr. 8.1 | 2026-10-07 | vlastná SVG (uzly); cesta tuku z potravy do krvi, zásoba a prenos krvou, dve dráhy v bunke; malonyl-CoA ako výhybka |
| `chapters/fig/fig-travenie-tag.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 8, Obr. 8.2 | 2026-10-07 | vlastná SVG zo vzorcov (triacylglycerol, 2-monoacylglycerol, mastna-kyselina) |
| `chapters/fig/fig-enterocyt-lipidy.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 8, Obr. 8.3 | 2026-10-07 | vlastná SVG (uzly); dve cesty cez enterocyt – chylomikrón do lymfy, krátke a stredne dlhé reťazce do portálnej krvi |
| `chapters/fig/fig-citrat-clnok.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 8, Obr. 8.4 | 2026-10-07 | vlastná SVG zo vzorcov (acetyl-coa, citrat, oxalacetat, malat, pyruvat) |
| `chapters/fig/fig-acc.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 8, Obr. 8.5 | 2026-10-07 | vlastná SVG zo vzorcov (acetyl-coa, malonyl-coa) s reguláciou enzýmu |
| `chapters/fig/fig-synteza-mk.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 8, Obr. 8.6 | 2026-10-07 | vlastná SVG zo vzorcov (acetyl-coa, malonyl-acp, acetoacetyl-acp, 3-hydroxybutyryl-acp, krotonyl-acp, butyryl-acp, palmitat) |
| `chapters/fig/fig-karnitin-clnok.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 8, Obr. 8.7 | 2026-10-07 | vlastná SVG zo vzorcov (mastna-kyselina, acyl-coa, karnitin, acylkarnitin) |
| `chapters/fig/fig-beta-oxidacia.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 8, Obr. 8.8 | 2026-10-07 | vlastná SVG zo vzorcov (acyl-coa, enoyl-coa, 3-hydroxyacyl-coa, 3-oxoacyl-coa, acetyl-coa) |
| `chapters/fig/fig-propionyl.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 8, Obr. 8.9 | 2026-10-07 | vlastná SVG zo vzorcov (propionyl-coa, metylmalonyl-coa, sukcinyl-coa) |
| `chapters/fig/fig-mk-miesta-utoku.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 8, Obr. 8.10 | 2026-10-07 | vlastná SVG zo vzorcov (palmitat, fytanat, pristanat); miesta α-, β- a ω-oxidácie |
| `chapters/fig/fig-malonyl-vyhybka.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 8, Obr. 8.11 | 2026-10-07 | vlastná SVG (uzly); tá istá pečeňová bunka po jedle a nalačno |
| `chapters/fig/fig-mcad-blok.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 8, Obr. 8.12 | 2026-10-07 | vlastná SVG (uzly); čo sa pri bloku hromadí, čo chýba a kam substrát ujde |
| `chapters/fig/fig-lipaza-titracia.svg` | — (vlastná) | autor knihy | CC BY-SA 4.0 | — | kap. 8, Obr. 8.13 | 2026-10-07 | vlastná SVG; princíp titračného stanovenia aktivity lipázy |
