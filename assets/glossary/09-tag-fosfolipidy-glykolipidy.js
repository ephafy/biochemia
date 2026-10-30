/* Glosár BIOCHEM — syntéza triacylglycerolu, tukové tkanivo a lipolýza, glycerofosfolipidy, fosfolipázy, sfingolipidy,
   sfingolipidózy, triacylglyceroly v sére (kap. 9).
   Formát záznamu: assets/glossary/README.md. Texty sú vlastné (CLAUDE.md §4.1). */
(window.PF_GLOSSARY = window.PF_GLOSSARY || []).push(
{
  id: "kyselina-fosfatidova", vzorec: ["fosfatidat"],
  title: "Kyselina fosfatidová (fosfatidát)",
  match: ["kyselin\\w* fosfatidov\\w*", "fosfatidát\\w*"],
  short: "1,2-diacylglycerol-3-fosfát – najjednoduchší glycerofosfolipid a križovatka, z ktorej vzniká triacylglycerol aj ostatné fosfolipidy.",
  body:
    '<p class="chain">glycerol-3-fosfát + 2 acyl-CoA → <b>kyselina fosfatidová</b></p>' +
    '<div class="fork"><div><b>− fosfát</b> → diacylglycerol → TAG, PC, PE</div><div><b>+ CTP</b> → CDP-diacylglycerol → PI, PG, kardiolipín</div></div>' +
    '<p class="why"><b>Prečo je dôležitá.</b> Je spoločným medziproduktom zásobného tuku a membránových fosfolipidov – v testoch „spoločný substrát syntézy TAG a fosfolipidov“.</p>'
},
{
  id: "lyzofosfatidat", vzorec: ["lyzofosfatidat"], title: "Lyzofosfatidát (1-acylglycerol-3-fosfát)",
  match: ["lyzofosfatidát\\w*"],
  short: "Glycerol-3-fosfát s jednou MK na C1 – produkt prvej acyltransferázy (GPAT) pri syntéze TAG a fosfolipidov.",
  body: ""
},
{
  id: "diacylglycerol", vzorec: ["diacylglycerol"],
  title: "1,2-Diacylglycerol (DAG)",
  match: ["diacylglycerol(?:u|om|e|a|y|ov|mi)?", "DAG"],
  short: "Glycerol s dvoma MK na C1 a C2 a voľným hydroxylom na C3; medziprodukt syntézy TAG a fosfolipidov a zároveň druhý posol.",
  body:
    "<ul>" +
      "<li><b>Vzniká</b> — z kyseliny fosfatidovej (fosfatidátfosfatáza), v čreve z 2-monoacylglycerolu, pri signáli z PIP₂ (fosfolipáza C), v tukovej bunke z TAG (ATGL).</li>" +
      "<li><b>Mení sa</b> — + acyl-CoA (DGAT) → TAG; + CDP-cholín → fosfatidylcholín; HSL → monoacylglycerol.</li>" +
      "<li><b>Signál</b> — s Ca²⁺ aktivuje proteínkinázu C.</li>" +
    "</ul>"
},
{
  id: "gpat", title: "GPAT — glycerol-3-fosfátacyltransferáza",
  match: ["GPAT", "glycerol-3-fosfátacyltransferáz\\w*"],
  short: "Prvý krok syntézy TAG aj fosfolipidov: pripojí acyl z acyl-CoA na C1 glycerol-3-fosfátu; inzulín ju zapína, AMPK fosforyláciou tlmí.",
  body: ""
},
{
  id: "fosfatidatfosfataza", title: "Fosfatidátfosfatáza (lipín)",
  match: ["fosfatidátfosfatáz\\w*", "lipín\\w*"],
  short: "Odstráni fosfát z kyseliny fosfatidovej – vznikne diacylglycerol; potrebuje Mg²⁺ a pracuje naviazaná na membránu. Lipíny sú zároveň transkripčné faktory génov metabolizmu lipidov.",
  body: ""
},
{
  id: "dgat", title: "DGAT — diacylglycerolacyltransferáza",
  match: ["DGAT", "diacylglycerolacyltransferáz\\w*"],
  short: "Pripojí tretiu MK na diacylglycerol; jediný krok, ktorý slúži len syntéze triacylglycerolu, a za bežných okolností rýchlosť určujúci.",
  body: ""
},
{
  id: "glycerol-3-fosfatdehydrogenaza", vzorec: ["dihydroxyacetonfosfat", "glycerol-3-fosfat"],
  title: "Glycerol-3-fosfátdehydrogenáza",
  match: ["glycerol-3-fosfátdehydrogenáz\\w*", "glycerolfosfátdehydrogenáz\\w*"],
  short: "Redukuje dihydroxyacetónfosfát s NADH na glycerol-3-fosfát (a naopak) – jediný zdroj akceptora MK v bielom tukovom tkanive.",
  body: '<p class="why"><b>Pozor.</b> Tá istá reakcia v cytosole je súčasťou glycerolfosfátového člnka; jeho druhá, mitochondriová polovica pracuje s FAD.</p>'
},
{
  id: "glyceroneogeneza", title: "Glyceroneogenéza",
  match: ["glyceroneogenéz\\w*"],
  short: "Tvorba glycerol-3-fosfátu v tukovej bunke skrátenou glukoneogenézou (z pyruvátu cez oxalacetát a fosfoenolpyruvát po DHAP, aj z aminokyselín a laktátu); umožní reesterifikáciu MK nalačno a zníži ich výdaj do krvi.",
  body: ""
},
{
  id: "reesterifikacia", title: "Cyklus lipolýza – reesterifikácia",
  match: ["reesterifikáci\\w*", "reesterifik\\w*"],
  short: "V tukovej bunke sa časť MK, ktoré lipázy uvoľnili, znova aktivuje a esterifikuje na TAG; koľko MK odíde do krvi, určuje rovnováha oboch dejov a ponuka glycerol-3-fosfátu.",
  body: ""
},
{
  id: "cgi-58", title: "CGI-58 a perilipín 1",
  match: ["CGI-58"],
  short: "CGI-58 je koaktivátor ATGL. V kľude ho drží perilipín 1 na povrchu tukovej kvapky; keď proteínkináza A perilipín fosforyluje, CGI-58 sa uvoľní a zapne ATGL.",
  body: '<p class="why"><b>Klinika.</b> Deficit CGI-58 = Chanarinov-Dorfmanov syndróm (ichtyóza, tukové vakuoly v granulocytoch).</p>'
},
{
  id: "chanarin-dorfman", title: "Choroby z ukladania neutrálnych lipidov",
  match: ["chorob\\w* z ukladania neutrálnych lipidov", "Chanarin\\w*-Dorfman\\w*"],
  short: "Vrodený deficit ATGL alebo jej koaktivátora CGI-58: TAG sa nevie rozložiť a hromadí sa v mnohých tkanivách; pri deficite CGI-58 ichtyóza a tukové vakuoly v granulocytoch (Jordansova anomália).",
  body: ""
},
{
  id: "leptin-adiponektin", title: "Leptín a adiponektín (adipokíny)",
  match: ["leptín\\w*", "adiponektín\\w*", "adipokín\\w*"],
  short: "Hormóny tukového tkaniva: leptín vylučujú adipocyty pri pribúdaní TAG a v hypotalame tlmí príjem potravy; adiponektín zvyšuje citlivosť tkanív na inzulín.",
  body: '<p class="why"><b>Prečo.</b> Tukové tkanivo nie je len sklad: o stave zásob informuje mozog a ostatné tkanivá.</p>'
},
{
  id: "kyselina-nikotinova", vzorec: ["kyselina-nikotinova"], title: "Kyselina nikotínová (niacín) ako liek",
  match: ["kyselin\\w* nikotínov\\w*", "niacín\\w*"],
  short: "V liečebných dávkach tlmí adenylátcyklázu tukovej bunky, a tým lipolýzu; do pečene príde menej MK a klesne tvorba VLDL a TAG v krvi.",
  body: ""
},
{
  id: "metylxantiny", vzorec: ["kofein", "teofylin"], title: "Metylxantíny: kofeín a teofylín",
  match: ["metylxantín\\w*", "kofeín\\w*", "teofylín\\w*"],
  short: "Tlmia fosfodiesterázu, ktorá rozkladá cAMP; signál cAMP trvá dlhšie a v tukovom tkanive sa zrýchli lipolýza.",
  body: ""
},
{
  id: "acetaldehyd-acetat", vzorec: ["acetaldehyd", "acetat"], title: "Acetaldehyd a acetát",
  match: ["acetaldehyd\\w*", "acetát(?:u|om)?"],
  short: "Produkty oxidácie etanolu v pečeni: alkoholdehydrogenáza ho zmení na acetaldehyd a aldehyddehydrogenáza na acetát; oba kroky tvoria NADH.",
  body: '<p class="why"><b>Dôsledok.</b> Nadbytok NADH brzdí oxidáciu MK → TAG, VLDL a stukovatenie pečene; laktát ↑ → hyperurikémia.</p>'
},
{
  id: "cholin", vzorec: ["cholin", "fosfocholin"], title: "Cholín a fosfocholín",
  match: ["cholín(?:u|om|e|a)?", "fosfocholín\\w*"],
  short: "Hlava fosfatidylcholínu a sfingomyelínu; esenciálna živina (dostatočný príjem 425 mg/deň ženy, 550 mg/deň muži). Cholínkináza ho s ATP fosforyluje na fosfocholín.",
  body: '<p class="why"><b>Klinika.</b> Pri nedostatku cholínu (napr. dlhodobá výživa len do žily) pečeň nemá fosfolipidy na VLDL a stukovatie.</p>'
},
{
  id: "etanolamin", vzorec: ["etanolamin", "fosfoetanolamin"], title: "Etanolamín a fosfoetanolamín",
  match: ["etanolamín(?:u|om|e|a)?", "fosfoetanolamín\\w*"],
  short: "Hlava fosfatidyletanolamínu; aktivuje sa rovnako ako cholín – fosforyláciou a spojením s CTP na CDP-etanolamín.",
  body: ""
},
{
  id: "cdp-cholin", vzorec: ["cdp-cholin", "cdp-etanolamin"], title: "CDP-cholín a CDP-etanolamín",
  match: ["CDP-cholín\\w*", "CDP-etanolamín\\w*"],
  short: "Aktivované hlavy fosfolipidov: fosfocholín (fosfoetanolamín) spojený s CMP. Z nich sa hlava prenesie na diacylglycerol a CMP odíde.",
  body: ""
},
{
  id: "ctp-cdp", vzorec: ["ctp", "cmp"], title: "CTP, CDP a CMP pri syntéze fosfolipidov",
  match: ["CTP", "CDP", "cytidíntrifosfát\\w*", "cytidíndifosfát\\w*"],
  short: "CTP aktivuje buď hlavu (vznikne CDP-cholín, CDP-etanolamín), alebo kyselinu fosfatidovú (CDP-diacylglycerol); pri prenose na partnera odchádza CMP.",
  body: '<p class="why"><b>Analógia.</b> Tak ako UDP aktivuje cukry pri stavbe glykogénu, CDP aktivuje zložky fosfolipidov.</p>'
},
{
  id: "cct", title: "CCT — CTP:fosfocholíncytidylyltransferáza",
  match: ["CCT", "cytidylyltransferáz\\w*", "fosfocholíncytidylyltransferáz\\w*"],
  short: "Riadiaci krok syntézy fosfatidylcholínu (fosfocholín + CTP → CDP-cholín). Je aktívna len naviazaná na membránu – a tá ju viaže, keď jej chýba fosfatidylcholín alebo má veľa MK či kyseliny fosfatidovej.",
  body: '<p class="chain">málo PC v membráne → CCT sa naviaže → ↑ CDP-cholín → ↑ PC → CCT odpadne ⟳</p>'
},
{
  id: "fosfatidylcholin", vzorec: ["fosfatidylcholin-r", "fosfatidylcholin"], title: "Fosfatidylcholín (lecitín, PC)",
  match: ["fosfatidylcholín\\w*", "lecitín\\w*"], csMatch: ["PC"],
  short: "Najhojnejší fosfolipid membrán: diacylglycerol, fosfát a cholín. Vzniká z CDP-cholínu a diacylglycerolu, v pečeni aj metyláciou fosfatidyletanolamínu.",
  body:
    "<ul>" +
      "<li><b>Mimo membrán</b> — žlč, obal lipoproteínov, surfaktant (dipalmitoylfosfatidylcholín).</li>" +
      "<li><b>Daruje</b> — fosfocholín sfingomyelínu, MK z C2 cholesterolu (LCAT).</li>" +
    "</ul>"
},
{
  id: "fosfatidyletanolamin", vzorec: ["fosfatidyletanolamin"], title: "Fosfatidyletanolamín (kefalín, PE)",
  match: ["fosfatidyletanolamín\\w*", "kefalín\\w*"], csMatch: ["PE"],
  short: "Fosfolipid s etanolamínom: vzniká z CDP-etanolamínu alebo dekarboxyláciou fosfatidylserínu; v pečeni tromi metylmi zo SAM prechádza na fosfatidylcholín.",
  body: ""
},
{
  id: "fosfatidylserin", vzorec: ["fosfatidylserin"], title: "Fosfatidylserín (PS)",
  match: ["fosfatidylserín\\w*"],
  short: "Fosfolipid so serínom, s čistým záporným nábojom hlavy. Vzniká výmenou báz – etanolamín fosfatidyletanolamínu sa vymení za serín – a dekarboxylázou s pyridoxalfosfátom sa mení späť na PE.",
  body: ""
},
{
  id: "pemt-sam", vzorec: ["s-adenozylmetionin", "s-adenozylhomocystein"], title: "S-adenozylmetionín (SAM) a metylácia PE",
  match: ["S-adenozylmetionín\\w*", "S-adenozylhomocysteín\\w*", "SAM", "SAH", "N-metyltransferáz\\w*"],
  short: "SAM je darca metylových skupín; v pečeni dodá tri metyly, ktorými fosfatidyletanolamín-N-metyltransferáza zmení PE na fosfatidylcholín. Zo SAM ostane S-adenozylhomocysteín.",
  body: ""
},
{
  id: "cdp-diacylglycerol", vzorec: ["cdp-diacylglycerol"], title: "CDP-diacylglycerol",
  match: ["CDP-diacylglycerol\\w*", "CDP-DAG"],
  short: "Aktivovaná kyselina fosfatidová (s CMP); odovzdá fosfatidyl inozitolu (PI), glycerol-3-fosfátu (→ PG) alebo fosfatidylglycerolu (→ kardiolipín).",
  body: ""
},
{
  id: "inozitol", vzorec: ["inozitol"], title: "myo-Inozitol",
  match: ["myo-inozitol\\w*", "inozitol(?:u|om)?"],
  short: "Cyklický alkohol so šiestimi hydroxylmi – hlava fosfatidylinozitolu; pripája sa ako voľná látka na CDP-diacylglycerol.",
  body: ""
},
{
  id: "fosfatidylinozitol", vzorec: ["fosfatidylinozitol"], title: "Fosfatidylinozitol (PI)",
  match: ["fosfatidylinozitol(?:u|om)?"], csMatch: ["PI"],
  short: "Fosfolipid s inozitolom, často so stearovou kyselinou na C1 a arachidónovou na C2; zásobáreň arachidónovej kyseliny, zdroj PIP₂ a kotva GPI.",
  body: ""
},
{
  id: "pip2", vzorec: ["pip2"], title: "PIP₂ — fosfatidylinozitol-4,5-bisfosfát",
  match: ["fosfatidylinozitol-4,5-bisfosfát\\w*", "PIP₂"],
  short: "Fosfatidylinozitol s fosfátmi na C4 a C5 inozitolu; fosfolipáza C ho po hormonálnom signáli rozštiepi na IP₃ a diacylglycerol.",
  body: ""
},
{
  id: "ip3", vzorec: ["ip3"], title: "IP₃ — inozitol-1,4,5-trisfosfát",
  match: ["inozitol-1,4,5-trisfosfát\\w*", "inozitoltrisfosfát\\w*", "IP₃"],
  short: "Druhý posol: rozpustný vo vode, odíde do cytosolu, naviaže sa na receptor endoplazmatického retikula a uvoľní Ca²⁺.",
  body: '<p class="chain">hormón → receptor → Gq → fosfolipáza C → PIP₂ → <b>IP₃</b> (Ca²⁺) + DAG (proteínkináza C)</p>'
},
{
  id: "proteinkinaza-c", title: "Proteínkináza C",
  match: ["proteínkináz\\w* C"],
  short: "Kináza, ktorú aktivuje diacylglycerol spolu s Ca²⁺; fosforyluje bielkoviny, ktoré sprostredkujú odpoveď bunky na hormóny pôsobiace cez fosfolipázu C.",
  body: ""
},
{
  id: "fosfatidylglycerol-kardiolipin", vzorec: ["fosfatidylglycerol", "kardiolipin"], title: "Fosfatidylglycerol a kardiolipín",
  match: ["fosfatidylglycerol\\w*", "kardiolipín\\w*", "difosfatidylglycerol\\w*"], csMatch: ["PG"],
  short: "Fosfatidylglycerol vzniká z CDP-diacylglycerolu a glycerol-3-fosfátu; ďalší fosfatidyl z neho urobí kardiolipín – dve kyseliny fosfatidové spojené glycerolom, takmer výlučne vo vnútornej membráne mitochondrií.",
  body: '<p class="why"><b>Význam.</b> Kardiolipín potrebujú niektoré komplexy dýchacieho reťazca.</p>'
},
{
  id: "paf", vzorec: ["paf"], title: "PAF — faktor aktivujúci trombocyty",
  match: ["PAF", "faktor\\w* aktivujúc\\w* trombocyty"],
  short: "Éterový fosfolipid (alkyl na C1, acetyl na C2, fosfocholín na C3); už v nepatrnom množstve spôsobí agregáciu trombocytov, zápal, edém a pokles tlaku a podieľa sa na alergii.",
  body: ""
},
{
  id: "surfaktant", vzorec: ["fosfatidylcholin"], title: "Surfaktant a dipalmitoylfosfatidylcholín",
  match: ["surfaktant\\w*", "dipalmitoylfosfatidylcholín\\w*", "dipalmitoyllecitín\\w*", "DPPC"],
  short: "Vrstva na vnútornom povrchu alveol, ktorá znižuje povrchové napätie a bráni ich zrúteniu; hlavnou zložkou je fosfatidylcholín s dvoma palmitátmi (DPPC), tvoria ho pneumocyty II. typu.",
  body:
    "<ul>" +
      "<li><b>Zloženie</b> — asi 90 % lipidy (DPPC, fosfatidylglycerol, cholesterol), 10 % bielkoviny (SP-A, SP-B, SP-C).</li>" +
      "<li><b>Zrelosť pľúc</b> — pomer lecitín/sfingomyelín v plodovej vode ≥ 2 (dnes sa používa menej).</li>" +
    "</ul>"
},
{
  id: "rds", title: "Syndróm respiračnej tiesne novorodenca",
  match: ["syndróm\\w* respiračnej tiesne", "RDS"],
  short: "Dychová tieseň predčasne narodeného dieťaťa z nedostatku surfaktantu; lieči sa podaním surfaktantu do dýchacích ciest, pri hroziacom pôrode pred 34. týždňom dostane matka kortikosteroidy.",
  body: ""
},
{
  id: "fosfolipazy", title: "Fosfolipázy A₁, C a D",
  match: ["fosfolipáz\\w* A₁", "fosfolipáz\\w* C", "fosfolipáz\\w* D", "fosfolipáz\\w*"],
  short: "Enzýmy pomenované podľa väzby fosfolipidu, ktorú štiepia: A₁ ester na C1, A₂ ester na C2, C väzbu C3–fosfát (DAG + fosfohlava), D väzbu fosfát–hlava (kyselina fosfatidová + alkohol).",
  body:
    "<ul>" +
      "<li><b>C</b> — z PIP₂ vyrobí IP₃ a DAG; je aj toxínom baktérií (α-toxín klostrídií).</li>" +
      "<li><b>A₂</b> — arachidónová kyselina pre eikozanoidy, oprava membrány; tlmia ju glukokortikoidy.</li>" +
    "</ul>"
},
{
  id: "remodelacia", title: "Remodelácia fosfolipidov",
  match: ["remodeláci\\w*"],
  short: "Výmena MK v hotovom fosfolipide: fosfolipáza A odštiepi MK a acyltransferáza s acyl-CoA pripojí inú. Tak vzniká DPPC surfaktantu, arachidónová na C2 PI a opravujú sa MK poškodené radikálmi.",
  body: ""
},
{
  id: "gpi", title: "Kotva GPI (glykozylfosfatidylinozitol)",
  match: ["GPI", "glykozylfosfatidylinozitol\\w*"],
  short: "Bielkovina pripojená cez oligosacharid s glukozamínom na fosfatidylinozitol membrány (napr. alkalická fosfatáza čreva, acetylcholínesteráza); fosfolipáza C ju vie uvoľniť.",
  body: ""
},
{
  id: "pnh", title: "Paroxyzmálna nočná hemoglobinúria",
  match: ["paroxyzmáln\\w* nočn\\w* hemoglobinúri\\w*"],
  short: "Získaná mutácia krvotvornej bunky v géne enzýmu stavby kotvy GPI: erytrocytom chýbajú GPI-kotvené bielkoviny, ktoré ich chránia pred komplementom (DAF, CD59), a rozpadajú sa – hemoglobín v moči.",
  body: ""
},
{
  id: "serinpalmitoyltransferaza", vzorec: ["serin", "3-oxosfinganin"], title: "Serínpalmitoyltransferáza",
  match: ["serínpalmitoyltransferáz\\w*"],
  short: "Prvý a rýchlosť určujúci enzým syntézy všetkých sfingolipidov: spojí serín s palmitoyl-CoA na 3-oxosfinganín, odíde CO₂ a CoA; koenzým pyridoxalfosfát.",
  body: ""
},
{
  id: "sfinganin", vzorec: ["3-oxosfinganin", "sfinganin", "dihydroceramid"], title: "3-Oxosfinganín, sfinganín a dihydroceramid",
  match: ["3-oxosfinganín\\w*", "sfinganín\\w*", "dihydrosfingozín\\w*", "dihydroceramid\\w*"],
  short: "Medziprodukty cesty k ceramidu: 3-oxosfinganín sa s NADPH redukuje na sfinganín, ten dostane MK amidovou väzbou (dihydroceramid) a desaturáza vloží dvojitú väzbu C4=C5 – ceramid.",
  body: ""
},
{
  id: "ceramidsyntaza", title: "Ceramidsyntázy",
  match: ["ceramidsyntáz\\w*"],
  short: "Enzýmy, ktoré na aminoskupinu sfinganínu pripoja MK z acyl-CoA; je ich niekoľko a každá uprednostňuje inú dĺžku reťazca – preto sa ceramidy líšia MK.",
  body: ""
},
{
  id: "sfingomyelinsyntaza", vzorec: ["sfingomyelin-r"], title: "Sfingomyelínsyntáza",
  match: ["sfingomyelínsyntáz\\w*"],
  short: "Prenesie fosfocholín z fosfatidylcholínu na C1 ceramidu – vznikne sfingomyelín a z PC ostane diacylglycerol; pracuje hlavne v Golgiho aparáte.",
  body: ""
},
{
  id: "glykosfingolipid", vzorec: ["glukocerebrozid", "sulfatid"], title: "Glykosfingolipidy",
  match: ["glykosfingolipid\\w*", "glykolipid\\w*"],
  short: "Ceramid s cukrom alebo oligosacharidom na C1 (O-glykozidová väzba), bez fosfátu. Neutrálne: cerebrozidy, globozidy; kyslé: sulfatidy, gangliozidy.",
  body:
    "<ul>" +
      "<li><b>Kde</b> — vonkajšia vrstva plazmatickej membrány, cukry von (glykokalyx); najviac v nervovom tkanive.</li>" +
      "<li><b>Úlohy</b> — rozpoznávanie a prilnutie buniek, antigény (ABO), receptory toxínov a vírusov.</li>" +
      "<li><b>Syntéza</b> — glykozyltransferázy v Golgiho aparáte z UDP-cukrov a CMP-NANA; rozklad v lyzozóme.</li>" +
    "</ul>"
},
{
  id: "cerebrozid", vzorec: ["glukocerebrozid", "galaktocerebrozid"], title: "Cerebrozidy: gluko- a galaktocerebrozid",
  match: ["cerebrozid(?:u|om|y|ov|e|mi)?", "glukocerebrozid(?:u|om|y|ov|e)?", "glukozylceramid(?:u|om|y|ov)?"],
  short: "Ceramid s jedným cukrom: galaktocerebrozid (z UDP-galaktózy) je hlavným lipidom myelínu, glukocerebrozid (z UDP-glukózy) hlavným glykosfingolipidom mimo nervov a východiskom zložitejších glykolipidov.",
  body: '<p class="why"><b>Klinika.</b> Glukocerebrozid sa hromadí pri Gaucherovej, galaktocerebrozid pri Krabbeho chorobe.</p>'
},
{
  id: "sulfatid", vzorec: ["sulfatid"], title: "Sulfatid",
  match: ["sulfatid\\w*"],
  short: "Galaktocerebrozid so sulfátom na C3 galaktózy (darca PAPS, sulfotransferáza); hlavný sulfolipid mozgu, je aj v obličke. Rozkladá ho arylsulfatáza A.",
  body: ""
},
{
  id: "gangliozid", title: "Gangliozidy a globozidy",
  match: ["gangliozid\\w*", "globozid\\w*", "globotriaozylceramid\\w*", "laktozylceramid\\w*"], csMatch: ["GM[123]"],
  short: "Ceramid s oligosacharidom; gangliozidy navyše nesú jednu či viac kyselín N-acetylneuramínových (G + M/D/T podľa ich počtu + číslo podľa sledu cukrov). Najviac v nervových bunkách.",
  body: '<p class="why"><b>Príklad.</b> Na gangliozid GM1 sa v čreve viaže toxín cholery; GM2 sa hromadí pri Tay-Sachsovej chorobe.</p>'
},
{
  id: "sfingolipidozy", title: "Sfingolipidózy",
  match: ["sfingolipidóz\\w*", "lyzozómov\\w* chorob\\w* z ukladania"],
  short: "Vrodené deficity lyzozómovej hydrolázy, ktorá rozkladá sfingolipid: hromadí sa jej substrát (syntéza je normálna), často v neurónoch. Dedia sa autozómovo recesívne, Fabryho choroba X-viazane.",
  body:
    '<p class="chain">posledný pripojený cukor odchádza prvý → chýba enzým → rozklad sa zastaví pred ním → hromadenie</p>' +
    '<p class="why"><b>Liečba ako dôkaz.</b> Dodať enzým, znížiť tvorbu substrátu, transplantovať krvotvorné bunky.</p>'
},
{
  id: "gaucher", vzorec: ["glukocerebrozid"], title: "Gaucherova choroba",
  match: ["Gaucher\\w*", "glukocerebrozidáz\\w*", "glukozylceramidáz\\w*", "β-glukozidáz\\w*"],
  short: "Najčastejšia lyzozómová choroba z ukladania: chýba kyslá β-glukozidáza (gén GBA1) a glukocerebrozid sa hromadí v makrofágoch. Typ 1: zväčšená slezina a pečeň, anémia, trombocytopénia, choroba kostí.",
  body:
    "<ul>" +
      "<li><b>Laboratórium</b> — nízka aktivita enzýmu v leukocytoch; biomarker glukozylsfingozín.</li>" +
      "<li><b>Liečba</b> — enzýmová substitúcia (imigluceráza) alebo redukcia substrátu (miglustat, eliglustat).</li>" +
    "</ul>"
},
{
  id: "glukozylsfingozin", vzorec: ["glukozylsfingozin"], title: "Glukozylsfingozín (lyzo-Gb1)",
  match: ["glukozylsfingozín\\w*", "lyzo-Gb1"],
  short: "Glukocerebrozid bez mastnej kyseliny; pri Gaucherovej chorobe je v plazme a v suchej kvapke krvi výrazne zvýšený a slúži na diagnostiku a sledovanie liečby.",
  body: ""
},
{
  id: "redukcia-substratu", vzorec: ["miglustat", "eliglustat"], title: "Enzýmová substitúcia a redukcia substrátu",
  match: ["enzýmov\\w* substitučn\\w*", "redukci\\w* substrátu", "miglustat\\w*", "eliglustat\\w*", "glukozylceramidsyntáz\\w*"],
  short: "Dva princípy liečby lyzozómových chorôb: dodať chýbajúci enzým do žily, alebo liekom (miglustat, eliglustat) brzdiť enzým, ktorý substrát vyrába – pri Gaucherovej chorobe glukozylceramidsyntázu.",
  body: ""
},
{
  id: "tay-sachs", title: "Tay-Sachsova a Sandhoffova choroba (GM2-gangliozidózy)",
  match: ["Tay-Sachs\\w*", "Sandhoff\\w*", "hexozaminidáz\\w*"],
  short: "Tay-Sachs: chýba hexozaminidáza A (gén HEXA) a v neurónoch sa hromadí gangliozid GM2 – rýchla neurodegenerácia. Sandhoff: gén HEXB, chýba hexozaminidáza A aj B, hromadí sa aj globozid.",
  body: ""
},
{
  id: "niemann-pick", vzorec: ["sfingomyelin-r"], title: "Niemannova-Pickova choroba (deficit kyslej sfingomyelinázy)",
  match: ["Niemann\\w*-Pick\\w*", "ASMD", "sfingomyelináz\\w*"],
  short: "Chýba lyzozómová kyslá sfingomyelináza (gén SMPD1), hromadí sa sfingomyelín. Typ A: obrovská pečeň a slezina, neurodegenerácia, smrť do 3 rokov; typ B bez postihnutia mozgu.",
  body: '<p class="why"><b>Dnes.</b> Jedna choroba s plynulým rozpätím (ASMD); na mimonervové prejavy enzýmová substitúcia olipudázou alfa.</p>'
},
{
  id: "fabry", title: "Fabryho choroba",
  match: ["Fabry\\w*", "α-galaktozidáz\\w*"],
  short: "X-viazaný deficit α-galaktozidázy A: hromadí sa globotriaozylceramid. Pálivé bolesti končatín, angiokeratómy, porucha potenia, postihnutie obličiek, srdca a ciev mozgu.",
  body: ""
},
{
  id: "leukodystrofie", vzorec: ["sulfatid", "galaktocerebrozid"], title: "Krabbeho choroba a metachromatická leukodystrofia",
  match: ["Krabbe\\w*", "metachromatick\\w* leukodystrofi\\w*", "arylsulfatáz\\w*", "galaktocerebrozidáz\\w*", "leukodystrofi\\w*"],
  short: "Choroby myelínu: pri Krabbeho chýba galaktocerebrozidáza (hromadí sa galaktocerebrozid), pri metachromatickej leukodystrofii arylsulfatáza A (sulfatidy). Rozpad myelínu a neurologický regres.",
  body: ""
},
{
  id: "farber-gm1", title: "Farberova choroba a GM1-gangliozidóza",
  match: ["Farber\\w*", "GM1-gangliozidóz\\w*", "ceramidáz\\w*"],
  short: "Farber: chýba ceramidáza, hromadí sa ceramid – bolestivé deformity kĺbov, podkožné uzlíky, chrapľavý hlas. GM1-gangliozidóza: chýba β-galaktozidáza, hromadí sa GM1 – neurologický úpadok.",
  body: ""
},
{
  id: "fukozidoza", title: "Fukozidóza",
  match: ["fukozidóz\\w*"],
  short: "Deficit α-L-fukozidázy; predovšetkým porucha rozkladu glykoproteínov, hromadia sa aj glykolipidy s fukózou. Postihuje hlavne nervový systém: vývojové oneskorenie a regres.",
  body: ""
},
{
  id: "demyelinizacia", title: "Demyelinizácia a roztrúsená skleróza",
  match: ["demyelinizáci\\w*", "demyelinizačn\\w*", "roztrúsen\\w* skleróz\\w*"],
  short: "Rozpad myelínu bez chýbajúceho enzýmu: biela hmota stráca fosfolipidy (najmä etanolamínový plazmalogén) a sfingolipidy, v likvore pribúda fosfolipidov. Opačný mechanizmus než pri sfingolipidóze.",
  body: ""
},
{
  id: "hypertriglyceridemia", title: "Hypertriglyceridémia",
  match: ["hypertriglyceridémi\\w*"],
  short: "Zvýšené TAG v krvi – priveľa lipoproteínov bohatých na TAG (VLDL, chylomikróny). Príčiny: obezita a inzulínová rezistencia, diabetes, alkohol, lieky, tehotenstvo, deficit LPL; nad 10 mmol/l hrozí pankreatitída.",
  body:
    "<ul>" +
      "<li><b>Referencia</b> — 0,4–1,7 mmol/l; nenalačno sa hlási ≥ 2,0 mmol/l.</li>" +
      "<li><b>Riziká</b> — akútna pankreatitída (ťažká), ateroskleróza (mierna, trvalá).</li>" +
    "</ul>"
},
{
  id: "pseudohypertriglyceridemia", title: "Pseudohypertriglyceridémia",
  match: ["pseudohypertriglyceridémi\\w*"],
  short: "Falošne vysoké TAG pri vysokom voľnom glyceroli v krvi (deficit glycerolkinázy): enzýmová metóda meria glycerol a nerozlíši, či pochádza z TAG; sérum nie je zakalené.",
  body: ""
},
{
  id: "glycerol-3-fosfatoxidaza", vzorec: ["glycerol-3-fosfat", "dihydroxyacetonfosfat"], title: "Glycerol-3-fosfátoxidáza (stanovenie TAG)",
  match: ["glycerol-3-fosfátoxidáz\\w*"],
  short: "Flavoproteín, ktorý v súpravách na TAG oxiduje glycerol-3-fosfát kyslíkom na DHAP a peroxid vodíka; peroxidáza potom s H₂O₂ vytvorí farbivo, ktorého absorbancia sa meria.",
  body: ""
},
{
  id: "mastne-kyseliny-c18", vzorec: ["stearat", "oleat", "palmitoleat"], title: "Kyselina stearová, olejová a palmitoolejová",
  match: ["kyselin\\w* stearov\\w*", "stearát\\w*", "kyselin\\w* olejov\\w*", "oleát\\w*", "kyselin\\w* palmitoolejov\\w*", "palmitoleát\\w*"],
  short: "Stearová 18:0 (nasýtená), olejová 18:1 Δ9 (ω-9, najbežnejšia nenasýtená, väzba cis), palmitoolejová 16:1 Δ9 (ω-7) – bežné MK triacylglycerolov a fosfolipidov.",
  body: ""
},
{
  id: "neuraminidaza", title: "Neuraminidáza (sialidáza)",
  match: ["neuraminidáz\\w*", "sialidáz\\w*"],
  short: "Lyzozómová glykozidáza, ktorá z gangliozidov a glykoproteínov odštiepi koncovú kyselinu N-acetylneuramínovú (sialovú); je jedným z krokov postupného rozkladu glykosfingolipidov od konca.",
  body: ""
},
{
  id: "remnanty", title: "Remnanty (zvyšky lipoproteínov)",
  match: ["remnant\\w*"],
  short: "Zvyšky chylomikrónov a VLDL po tom, čo z nich lipoproteínová lipáza odštiepila časť TAG; nesú cholesterol a sú aterogénne – preto aj mierne, ale trvalo zvýšené TAG zvyšujú riziko aterosklerózy.",
  body: ""
},
{
  id: "glyceroglykolipidy", title: "Glyceroglykolipidy",
  match: ["glyceroglykolipid\\w*", "seminolipid\\w*"],
  short: "Glykolipidy s cukrom na glycerolovej kostre. U človeka sú vzácne – príkladom je seminolipid, éterový lipid so sulfátovanou galaktózou v membráne spermií; väčšinu glykolipidov tela tvoria glykosfingolipidy.",
  body: ""
}
);
