/* Glosár BIOCHEM — pyruvátdehydrogenázový komplex, citrátový cyklus, anaplerotické reakcie, onkometabolity (kap. 6).
   Formát záznamu: assets/glossary/README.md. Texty sú vlastné (CLAUDE.md §4.1). */
(window.PF_GLOSSARY = window.PF_GLOSSARY || []).push(
{
  id: "oxidacna-dekarboxylacia",
  title: "Oxidačná dekarboxylácia",
  match: ["oxidačn\\w* dekarboxyláci\\w*"],
  short: "Reakcia, pri ktorej z oxokyseliny odíde CO₂ a zvyšok sa oxiduje a naviaže na koenzým A; vzniká NADH.",
  body:
    "<ul>" +
      "<li><b>Pyruvát</b> → acetyl-CoA (pyruvátdehydrogenázový komplex).</li>" +
      "<li><b>2-oxoglutarát</b> → sukcinyl-CoA (krok 4 citrátového cyklu).</li>" +
      "<li><b>Oba komplexy</b> majú tých istých päť koenzýmov: tiamíndifosfát, lipoamid, koenzým A, FAD, NAD⁺.</li>" +
    "</ul>"
},
{
  id: "pdh-komplex",
  title: "Pyruvátdehydrogenázový komplex",
  match: ["pyruvátdehydrogenázov\\w* komplex\\w*"],
  short: "Zhluk troch enzýmov (E1, E2, E3) v matrix mitochondrie, ktorý nevratne mení pyruvát na acetyl-CoA, CO₂ a NADH – brána do citrátového cyklu.",
  body:
    "<ul>" +
      "<li><b>E1</b> odštiepi CO₂ (tiamíndifosfát), <b>E2</b> prenesie acetyl na koenzým A (lipoamid), <b>E3</b> obnoví lipoamid (FAD, NAD⁺).</li>" +
      "<li><b>Vypína ho</b> kináza (zapínajú ju ATP, NADH, acetyl-CoA); <b>zapína</b> fosfatáza (Ca²⁺, inzulín).</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Po tomto kroku z uhlíkov glukózy už glukóza nevznikne – preto ho pri hladovaní acetyl-CoA z tukov zatvára.</p>'
},
{
  id: "lipoamid", title: "Lipoamid", match: ["lipoamid\\w*", "kyselin\\w* lipoov\\w*"],
  short: "Kyselina lipoová viazaná na enzým E2; jej disulfid prijme acetyl a vodíky a otvorí sa na dve SH-skupiny. Na tie sa viaže arzenitan a ortuť.",
  body: ""
},
{
  id: "deficit-pdh",
  title: "Deficit pyruvátdehydrogenázového komplexu",
  match: ["deficit\\w* pyruvátdehydrogenázov\\w* komplex\\w*"],
  short: "Najčastejšia biochemická príčina vrodenej laktátovej acidózy; pyruvát nemá kam, stúpa laktát a alanín a mozog nemá dosť ATP.",
  body:
    "<ul>" +
      "<li><b>Príčina</b> — najčastejšie gén pre podjednotku E1α na chromozóme X.</li>" +
      "<li><b>Liečba</b> — ketogénna diéta (obchádza bránu), tiamín, dichlóracetát (brzdí kinázu komplexu).</li>" +
    "</ul>"
},
{
  id: "dichloracetat", title: "Dichlóracetát", match: ["dichlóracetát\\w*"],
  short: "Látka, ktorá brzdí kinázu pyruvátdehydrogenázového komplexu, takže komplex ostáva zapnutý; skúša sa pri jeho vrodenom deficite.",
  body: ""
},
{
  id: "wernicke-korsakov", title: "Wernickeho-Korsakovov syndróm", match: ["Wernickeho-Korsakovov\\w* syndróm\\w*", "beri-beri"],
  short: "Postihnutie mozgu pri nedostatku tiamínu, typicky pri závislosti od alkoholu: bez tiamíndifosfátu viazne brána aj štvrtý krok citrátového cyklu.",
  body: ""
},
{
  id: "citrat",
  title: "Citrát",
  match: ["citrát", "citrátu", "citrátom", "citráte"],
  short: "Šesťuhlíkový prvý medziprodukt citrátového cyklu; vzniká spojením acetylu s oxalacetátom.",
  body:
    "<ul>" +
      "<li><b>Signál nadbytku</b> — brzdí fosfofruktokinázu-1 a zapína syntézu mastných kyselín.</li>" +
      "<li><b>Vývoz acetylu</b> — prejde membránou mitochondrie; v cytosole sa z neho uvoľní acetyl-CoA.</li>" +
    "</ul>"
},
{
  id: "citratsyntaza", title: "Citrátsyntáza", match: ["citrátsyntáz\\w*"],
  short: "Enzým prvého, nevratného kroku citrátového cyklu: acetyl-CoA + oxalacetát → citrát; brzdí ju citrát.",
  body: ""
},
{
  id: "akonitaza", title: "Akonitáza", match: ["akonitáz\\w*"],
  short: "Enzým so železom a sírou, ktorý vratne mení citrát na izocitrát – presunie hydroxyl na uhlík, kde sa dá oxidovať. Blokuje ju fluórcitrát.",
  body: ""
},
{
  id: "izocitratdehydrogenaza",
  title: "Izocitrátdehydrogenáza",
  match: ["izocitrátdehydrogenáz\\w*"],
  short: "Riadiaci enzým citrátového cyklu (krok 3): izocitrát → 2-oxoglutarát + CO₂ + NADH; nevratne.",
  body:
    "<ul>" +
      "<li><b>Zapína</b> — ADP, Ca²⁺. <b>Brzdí</b> — ATP, NADH.</li>" +
      "<li><b>Mutácia</b> izoenzýmu 1 alebo 2 v nádoroch dá enzýmu novú aktivitu – tvorbu 2-hydroxyglutarátu.</li>" +
    "</ul>"
},
{
  id: "2-oxoglutarat",
  title: "2-oxoglutarát (α-ketoglutarát)",
  match: ["2-oxoglutarát\\w*", "α-ketoglutarát\\w*"],
  short: "Päťuhlíková oxokyselina citrátového cyklu; spojka s aminokyselinami (glutamát) a kosubstrát skupiny dioxygenáz.",
  body: ""
},
{
  id: "2-oxoglutaratdehydrogenaza", title: "2-oxoglutarátdehydrogenáza", match: ["2-oxoglutarátdehydrogenáz\\w*", "2-oxoglutarátdehydrogenázov\\w* komplex\\w*"],
  short: "Komplex kroku 4 citrátového cyklu, stavbou zhodný s pyruvátdehydrogenázovým: 2-oxoglutarát → sukcinyl-CoA + CO₂ + NADH. Brzdia ho produkty, zapína Ca²⁺; fosforyláciou sa neriadi.",
  body: ""
},
{
  id: "sukcinyl-coa", title: "Sukcinyl-CoA", match: ["sukcinyl-CoA", "sukcinyl-CoA-syntetáz\\w*", "sukcináttiokináz\\w*"],
  short: "Tioester citrátového cyklu; jeho štiepením (sukcinyl-CoA-syntetáza) vzniká GTP – jediná substrátová fosforylácia cyklu. Je aj východiskom syntézy hému.",
  body: ""
},
{
  id: "sukcinatdehydrogenaza",
  title: "Sukcinátdehydrogenáza",
  match: ["sukcinátdehydrogenáz\\w*"],
  short: "Enzým kroku 6: sukcinát → fumarát + FADH₂. Sedí vo vnútornej membráne mitochondrie a je zároveň komplexom II dýchacieho reťazca.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Kompetitívne ju brzdí malonát; jej mutácie vedú k hromadeniu sukcinátu a k nádorom.</p>'
},
{
  id: "fumaraza", title: "Fumaráza", match: ["fumaráz\\w*"],
  short: "Enzým kroku 7: pripojí vodu na dvojitú väzbu fumarátu → malát. Vrodený deficit ťažko poškodzuje mozog; mutácie sa našli v leiomyómoch.",
  body: ""
},
{
  id: "malatdehydrogenaza", title: "Malátdehydrogenáza", match: ["malátdehydrogenáz\\w*"],
  short: "Enzým kroku 8: malát → oxalacetát + NADH. Rovnováha je na strane malátu; dopredu ju ťahá odber oxalacetátu a NADH. V cytosole pracuje v malát-aspartátovom člnku.",
  body: ""
},
{
  id: "anapleroticke-reakcie",
  title: "Anaplerotické reakcie",
  match: ["anaplerotick\\w* reakci\\w*", "anapleróz\\w*"],
  short: "Reakcie, ktoré dopĺňajú medziprodukty citrátového cyklu odobraté na syntézy.",
  body:
    "<ul>" +
      "<li><b>Hlavná</b> — pyruvát + CO₂ + ATP → oxalacetát (pyruvátkarboxyláza, biotín); zapína ju acetyl-CoA.</li>" +
      "<li><b>Ďalšie</b> — uhlíkové kostry aminokyselín (glutamát → 2-oxoglutarát a iné).</li>" +
    "</ul>"
},
{
  id: "amfibolicka-draha", title: "Amfibolická dráha", match: ["amfibolick\\w*"],
  short: "Dráha, ktorá je zároveň katabolická aj anabolická; príkladom je citrátový cyklus – spaľuje acetyl a jeho medziprodukty sú stavebným materiálom.",
  body: ""
},
{
  id: "fluoracetat", title: "Fluóracetát", match: ["fluóracetát\\w*", "fluórcitrát\\w*"],
  short: "Jed, ktorý bunka sama premení na fluórcitrát; ten blokuje akonitázu a citrát sa hromadí („smrtiaca syntéza“).",
  body: ""
},
{
  id: "malonat", title: "Malonát", match: ["malonát\\w*"],
  short: "Kompetitívny inhibítor sukcinátdehydrogenázy (komplexu II): podobá sa na sukcinát, ale je o uhlík kratší.",
  body: ""
},
{
  id: "onkometabolit",
  title: "Onkometabolit",
  match: ["onkometabolit\\w*", "2-hydroxyglutarát\\w*"],
  short: "Metabolit, ktorý sa pri mutácii enzýmu hromadí a prispieva k vzniku nádoru: sukcinát, fumarát, 2-hydroxyglutarát.",
  body:
    '<p class="chain">podobnosť s 2-oxoglutarátom → útlm dioxygenáz (demetylázy histónov a DNA, hydroxylázy pre HIF) → zmenený prepis génov</p>' +
    '<p class="why"><b>Prečo to je dôležité.</b> Inhibítor mutovanej izocitrátdehydrogenázy (vorasidenib) spomaľuje rast gliómu – liek ako dôkaz mechanizmu.</p>'
},
{
  id: "hif", title: "HIF – faktor indukovaný hypoxiou", match: ["HIF"],
  short: "Transkripčný faktor, ktorý bunka pri dostatku kyslíka značí hydroxyláciou na rozklad; pri hypoxii – alebo pri útlme hydroxyláz onkometabolitmi – ostáva aktívny.",
  body: ""
},
{
  id: "ketogenna-dieta", title: "Ketogénna diéta", match: ["ketogénn\\w* diét\\w*"],
  short: "Strava s minimom sacharidov a veľkým podielom tuku; mozog dostáva ketolátky, z ktorých acetyl-CoA vzniká bez pyruvátdehydrogenázy.",
  body: ""
},
{
  id: "hexokinazova-metoda",
  title: "Hexokinázová metóda",
  match: ["hexokinázov\\w* metód\\w*"],
  short: "Stanovenie glukózy dvoma enzýmami: hexokináza ju fosforyluje, glukóza-6-fosfátdehydrogenáza oxiduje; vzniknutý NADPH sa meria pri 340 nm.",
  body: ""
},
{
  id: "fluorid-v-odbere", title: "Fluorid a citrát v odberovej skúmavke", match: ["citrátov\\w* pufr\\w*", "fluorid\\w* sodn\\w*"],
  short: "Fluorid brzdí enolázu, no glukóza vo vzorke klesá ešte hodiny; citrátový pufor zastaví glykolýzu erytrocytov hneď nízkym pH.",
  body: ""
},
{
  id: "cis-akonitat", title: "cis-Akonitát", match: ["cis-akonitát\\w*"],
  short: "Medzistupeň akonitázy: citrát bez vody, s dvojitou väzbou. Po pripojení vody v opačnom smere z neho vznikne izocitrát.",
  body: ""
},
{
  id: "oxalosukcinat", title: "Oxalosukcinát", match: ["oxalosukcinát\\w*"],
  short: "Medzistupeň izocitrátdehydrogenázy, ktorý enzým neopúšťa: izocitrát po oxidácii hydroxylu na ketoskupinu, tesne pred odštiepením CO₂.",
  body: ""
},
{
  id: "tiazolovy-kruh", title: "Tiazolový kruh tiamíndifosfátu", match: ["tiazolov\\w* kruh\\w*"],
  short: "Päťčlenný kruh so sírou a dusíkom v tiamíndifosfáte. Uhlík medzi nimi je pracovné miesto koenzýmu: naviaže ketouhlík substrátu a väzba vedľa neho sa preruší.",
  body: ""
},
{
  id: "glyoxylatovy-cyklus", title: "Glyoxylátový cyklus", match: ["glyoxylátov\\w* cykl\\w*"],
  short: "Obmena citrátového cyklu u rastlín a baktérií: izocitrátlyáza a malátsyntáza preskočia obe dekarboxylácie, takže z acetyl-CoA vznikne sukcinát a z tuku cukor. Človek ho nemá.",
  body: ""
}
);
