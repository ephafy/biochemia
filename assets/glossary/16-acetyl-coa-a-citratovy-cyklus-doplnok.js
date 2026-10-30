/* Glosár BIOCHEM — doplnok k celku „acetyl-CoA a citrátový cyklus“ (kap. 6).
   Formát záznamu: assets/glossary/README.md. Texty sú vlastné (CLAUDE.md §4.1), písané z faktov kapitoly. */
(window.PF_GLOSSARY = window.PF_GLOSSARY || []).push(
{
  id: "krebs",
  title: "Krebsov cyklus (cyklus trikarboxylových kyselín)",
  match: ["Krebs\\w*", "trikarboxylov\\w* kyselin\\w*"],
  short: "Iné názvy citrátového cyklu; H. A. Krebs zaň dostal v roku 1953 Nobelovu cenu. Cyklus je spoločnou konečnou cestou oxidácie všetkých palív.",
  body: ""
},
{
  id: "pdh-e1",
  title: "E1 — pyruvátdehydrogenáza",
  match: ["E1α", "E1"],
  short: "Prvý enzým komplexu: pyruvát sa ketouhlíkom naviaže na tiazolový kruh tiamíndifosfátu, karboxyl odíde ako CO₂ a dvojuhlíkový zvyšok ostane visieť na tiamíne.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Väčšinu vrodených porúch komplexu spôsobuje gén pre podjednotku E1α na chromozóme X.</p>'
},
{
  id: "pdh-e2", vzorec: ["acetyl-dihydrolipoamid"],
  title: "E2 — transacetyláza (rameno s lipoamidom)",
  match: ["E2", "transacetyláz\\w*"],
  short: "Dlhé pohyblivé rameno s lipoamidom: zvyšok z tiamínu naň prejde a oxiduje sa na acetyl, rameno ho odovzdá koenzýmu A; na ramene ostanú dve SH-skupiny.",
  body: ""
},
{
  id: "pdh-e3",
  title: "E3 — dihydrolipoyldehydrogenáza",
  match: ["E3", "dihydrolipoyldehydrogenáz\\w*"],
  short: "Vráti rameno do pôvodného stavu: vodíky z dvoch SH-skupín prevezme FAD a od neho NAD⁺ – výsledkom je NADH. Je to tá istá bielkovina vo všetkých troch komplexoch.",
  body: ""
},
{
  id: "pdh-kinaza-fosfataza",
  title: "Kináza a fosfatáza pyruvátdehydrogenázy",
  match: ["kináz\\w* brán\\w*", "kináza komplexu"],
  short: "Kináza pridá na E1 fosfát a komplex vypne, fosfatáza fosfát odštiepi a komplex zapne; cAMP sa tu nezúčastňuje.",
  body:
    "<ul>" +
      "<li><b>Kinázu zapínajú</b> ATP, NADH a acetyl-CoA; brzdia ju pyruvát a ADP.</li>" +
      "<li><b>Fosfatázu zapínajú</b> Ca²⁺ a inzulín; potrebuje Mg²⁺.</li>" +
    "</ul>"
},
{
  id: "dehydrogenaza-oxokyselin",
  title: "Dehydrogenáza rozvetvených oxokyselín",
  match: ["dehydrogenáz\\w* rozvetven\\w* oxokyselín"],
  short: "Tretí komplex rovnakej stavby a s tými istými piatimi koenzýmami; odbúrava oxokyseliny vzniknuté z valínu, leucínu a izoleucínu.",
  body: ""
},
{
  id: "kyselina-pantotenova", vzorec: ["pantotenat"],
  title: "Kyselina pantoténová (B₅)",
  match: ["kyselin\\w* pantoténov\\w*"],
  short: "Vitamín v strede ramena koenzýmu A.",
  body: ""
},
{
  id: "arzenitan-ortut", vzorec: ["arzenitan"],
  title: "Arzenitan a ortuť",
  match: ["arzenitan\\w*", "ortuť\\w*", "ortuti"],
  short: "Viažu sa na SH-skupiny lipoamidu a blokujú bránu aj 2-oxoglutarátdehydrogenázu (krok 4 kolesa).",
  body: ""
},
{
  id: "izocitrat", vzorec: ["izocitrat"],
  title: "Izocitrát",
  match: ["izocitrát\\w*"],
  short: "Produkt akonitázy: hydroxyl izocitrátu sedí na uhlíku s vodíkom, takže sa dá oxidovať (hydroxyl citrátu nie).",
  body: ""
},
{
  id: "izocitratlyaza-malatsyntaza",
  title: "Izocitrátlyáza a malátsyntáza",
  match: ["izocitrátlyáz\\w*", "malátsyntáz\\w*"],
  short: "Dva enzýmy rastlín a baktérií, ktoré v glyoxylátovom cykle preskočia obe dekarboxylácie kolesa; človek ich nemá.",
  body: ""
},
{
  id: "bilancia-kolesa",
  title: "Bilancia jednej otáčky: 10 ATP",
  match: ["10 ATP", "12,5 ATP"],
  short: "3 NADH × 2,5 + FADH₂ × 1,5 + GTP × 1 = 10 ATP na acetyl-CoA; z pyruvátu 12,5 (brána pridá NADH).",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> <i>Kedysi</i> 12 ATP (kurz 3 a 2), <i>dnes</i> 10 – koleso sa nezmenilo, zmenil sa odhad protónov na ATP.</p>'
},
{
  id: "kurz-atp-na-nadh",
  title: "Kurz 2,5 a 1,5 ATP na NADH a FADH₂",
  match: ["2,5 ATP", "1,5 ATP"],
  short: "Súčasný odhad ATP z jedného NADH (2,5) a FADH₂ (1,5); staršie učebnice rátali s 3 a 2.",
  body: ""
},
{
  id: "trojica-dehydrogenacia",
  title: "Trojica: dehydrogenácia – hydratácia – oxidácia",
  match: ["dehydrogenáci\\w*", "hydratáci\\w*"],
  short: "Kroky 6–8 kolesa sa opakujú v biochémii: vznik dvojitej väzby, pripojenie vody, oxidácia hydroxylu; rovnako sa upravuje reťazec MK pri β-oxidácii.",
  body: ""
},
{
  id: "centrum-zelezo-sira",
  title: "Centrum železo–síra",
  match: ["centr\\w* železo–síra", "centr\\w* železo-síra"],
  short: "Súčasť akonitázy, enzýmu, ktorý presúva hydroxyl citrátu na susedný uhlík.",
  body: ""
},
{
  id: "sukcinat-fumarat", vzorec: ["sukcinat", "fumarat"],
  title: "Sukcinát a fumarát",
  match: ["sukcinát\\w*", "fumarát\\w*"],
  short: "Štvoruhlíkové medziprodukty kolesa: sukcinát vzniká v kroku 5 a dehydrogenáza z neho robí fumarát; pri mutácii sukcinátdehydrogenázy alebo fumarázy sa hromadia.",
  body: ""
},
{
  id: "hem", vzorec: ["hem", "protoporfyrin-ix"],
  title: "Hém",
  match: ["hém\\w*"],
  short: "Zloženie hému odoberá z kolesa sukcinyl-CoA (spolu s glycínom).",
  body: ""
},
{
  id: "gaba", vzorec: ["gaba"],
  title: "GABA",
  match: ["GABA"],
  short: "Prenášač nervového vzruchu v mozgu, ktorý vzniká z glutamátu – aminokyseliny odvodenej od 2-oxoglutarátu z kolesa.",
  body: ""
},
{
  id: "dioxygenazy-demetylazy",
  title: "Dioxygenázy a demetylázy závislé od 2-oxoglutarátu",
  match: ["dioxygenáz\\w*", "demetyláz\\w*"],
  short: "Skupina enzýmov, ktorá potrebuje 2-oxoglutarát ako kosubstrát; sukcinát, fumarát a 2-hydroxyglutarát ich brzdia a bunka sa správa, akoby jej chýbal kyslík.",
  body: ""
},
{
  id: "nadory-enzymov-kolesa",
  title: "Nádory pri mutáciách enzýmov kolesa",
  match: ["paragangliómy", "paragangliómo\\w*", "leiomyóm\\w*", "gliómy", "gliómo\\w*", "myeloidn\\w* leukémi\\w*"],
  short: "Mutácie sukcinátdehydrogenázy sa našli v paragangliómoch, fumarázy v leiomyómoch maternice, izocitrátdehydrogenázy v gliómoch a v akútnej myeloidnej leukémii.",
  body: ""
},
{
  id: "hyperamonemia-koleso",
  title: "Nadbytok amoniaku a koleso",
  match: ["nadbytok amoniaku", "vysokej hladine amoniaku"],
  short: "Pri zneškodňovaní amoniaku 2-oxoglutarát odchádza z kolesa na glutamát a glutamín a amoniak navyše brzdí 2-oxoglutarátdehydrogenázu; v mozgu je to jeden z mechanizmov poruchy vedomia.",
  body: ""
},
{
  id: "nystagmus",
  title: "Wernickeho encefalopatia: klasická trojica",
  match: ["nystagm\\w*"],
  short: "Zmätenosť, poruchy pohybov očí (nystagmus až obrna očných svalov) a neistá chôdza; celú trojicu má len asi šestina chorých.",
  body: ""
},
{
  id: "hypotonia-oneskoreny-vyvin",
  title: "Dojčenské príznaky deficitu brány",
  match: ["znížen\\w* svalov\\w* napätie"],
  short: "Najčastejšie nálezy pri deficite pyruvátdehydrogenázového komplexu v dojčenskom veku: znížené svalové napätie a oneskorený vývin, často so štrukturálnymi zmenami mozgu.",
  body: ""
},
{
  id: "vnutorna-membrana-mitochondrie",
  title: "Vnútorná membrána mitochondrie",
  match: ["vnútorn\\w* membrán\\w*"],
  short: "Neprepustí koenzým A ani acetyl-CoA, oxalacetát ani NADH; sedí v nej sukcinátdehydrogenáza a dýchací reťazec.",
  body: ""
},
{
  id: "ca-signal",
  title: "Ca²⁺ ako signál kontrakcie",
  match: ["Ca²⁺"],
  short: "Vo svale stúpa pri kontrakcii a zapína fosfatázu brány aj oba dehydrogenázové kroky kolesa, takže tvorba ATP sa zrýchli skôr, než ATP stihne klesnúť.",
  body: ""
},
{
  id: "karboxylacia-pyruvatu",
  title: "Karboxylácia pyruvátu (hlavná anaplerotická reakcia)",
  match: ["karboxyláci\\w* pyruvát\\w*"],
  short: "Pyruvátkarboxyláza dopĺňa oxalacetát v kolese; spúšťa ju nadbytok acetyl-CoA, ktorý hlási, že chýba nosič.",
  body: ""
},
{
  id: "rozvetvene-aminokyseliny", vzorec: ["valin", "leucin", "izoleucin"],
  title: "Valín, leucín, izoleucín",
  match: ["valín\\w*", "leucín\\w*", "izoleucín\\w*"],
  short: "Ich oxokyseliny odbúrava dehydrogenáza rozvetvených oxokyselín; valín a izoleucín dopĺňajú koleso cez propionyl-CoA a sukcinyl-CoA.",
  body: ""
},
{
  id: "glukokortikoidy", vzorec: ["kortizol"],
  title: "Glukokortikoidy",
  match: ["glukokortikoid\\w*"],
  short: "Pri hladovaní zvyšujú prepis génu pre kinázu pyruvátdehydrogenázy, takže brána ostáva zatvorená.",
  body: ""
}
);
