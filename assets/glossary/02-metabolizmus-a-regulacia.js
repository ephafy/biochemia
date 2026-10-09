/* Glosár BIOCHEM — mapa metabolizmu a princípy regulácie (kap. 2).
   Formát záznamu: assets/glossary/README.md. Texty sú vlastné (CLAUDE.md §4.1). */
(window.PF_GLOSSARY = window.PF_GLOSSARY || []).push(
{
  id: "katabolizmus-anabolizmus",
  title: "Katabolizmus × anabolizmus",
  match: ["katabolizm\\w*", "anabolizm\\w*"],
  short: "Dva smery metabolizmu: katabolizmus rozkladá, oxiduje a dáva ATP; anabolizmus stavia, redukuje a ATP míňa.",
  body:
    "<ul>" +
      "<li><b>Katabolizmus</b> — zbieha sa: rôzne živiny končia v tých istých medziproduktoch; elektróny prijíma NAD<sup>+</sup> a FAD; prevažuje nalačno a pri záťaži.</li>" +
      "<li><b>Anabolizmus</b> — rozbieha sa: z mála východísk veľa produktov; elektróny dodáva NADPH; prevažuje po jedle.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Nikdy nie sú zrkadlovým obrazom – aspoň jeden krok má každý smer vlastný, a práve tam sa dajú riadiť nezávisle.</p>'
},
{
  id: "tri-stupne",
  title: "Tri stupne získavania energie",
  match: ["tri stupne"],
  short: "Rozklad živín prebieha v troch stupňoch: trávenie → cesta k acetyl-CoA → spoločná oxidácia v citrátovom cykle a dýchacom reťazci.",
  body:
    '<p class="chain">trávenie (hydrolázy; ATP nevzniká)<br>→ cesta k acetyl-CoA (trochu ATP, redukované koenzýmy)<br>→ citrátový cyklus + dýchací reťazec (väčšina ATP)</p>'
},
{
  id: "krizovatky",
  title: "Križovatky metabolizmu",
  match: ["križovatk\\w*", "križovatiek"],
  short: "Tri miesta mapy, z ktorých vedie viac ciest: glukóza-6-fosfát, pyruvát a acetyl-CoA; o smere rozhoduje regulácia.",
  body:
    "<ul>" +
      "<li><b>Glukóza-6-fosfát</b> → glykolýza · glykogén · pentózy a NADPH · v pečeni výdaj do krvi.</li>" +
      "<li><b>Pyruvát</b> → acetyl-CoA · laktát · späť ku glukóze.</li>" +
      "<li><b>Acetyl-CoA</b> → citrátový cyklus · mastné kyseliny a cholesterol · ketolátky.</li>" +
    "</ul>"
},
{
  id: "acetyl-coa",
  title: "Acetyl-CoA",
  match: ["acetyl-CoA"],
  short: "Dvojuhlíkový acetyl zavesený tioesterovo na koenzýme A; spoločný medziprodukt rozkladu cukrov, mastných kyselín aj aminokyselín.",
  body:
    "<ul>" +
      "<li><b>Odkiaľ</b> — z pyruvátu, z mastných kyselín, z aminokyselín.</li>" +
      "<li><b>Kam</b> — spálenie v citrátovom cykle, stavba mastných kyselín a cholesterolu, ketolátky.</li>" +
      "<li><b>Ako signál</b> — zapína pyruvátkarboxylázu a brzdí pyruvátdehydrogenázu.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Krok od pyruvátu k acetyl-CoA je nevratný a obchádzka neexistuje – z tuku cukor nebude.</p>'
},
{
  id: "glukoza-6-fosfat",
  title: "Glukóza-6-fosfát (Glc-6-P)",
  match: ["glukóza-6-fosfát(?:u|e|om|y)?", "Glc-6-P"],
  short: "Glukóza s fosfátom na uhlíku 6; prvý medziprodukt po vstupe glukózy do bunky a križovatka štyroch ciest.",
  body:
    "<ul>" +
      "<li><b>Vzniká</b> fosforyláciou glukózy (hexokináza, glukokináza) alebo z glykogénu.</li>" +
      "<li><b>Náboj fosfátu</b> ho drží v bunke – cez GLUT späť neprejde.</li>" +
      "<li><b>Ako efektor</b> brzdí hexokinázu a glykogénfosforylázu, zapína glykogénsyntázu.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Do krvi sa z neho glukóza dostane len tam, kde je glukóza-6-fosfatáza – v pečeni a obličke, nie vo svale.</p>'
},
{
  id: "citratovy-cyklus",
  title: "Citrátový cyklus",
  match: ["citrátov\\w* cykl\\w*"],
  short: "Mitochondriová dráha, ktorá spáli acetyl z acetyl-CoA na CO₂ a elektróny odovzdá NAD⁺ a FAD.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Je to tretí, spoločný stupeň rozkladu všetkých živín; ATP z neho vzniká až v dýchacom reťazci.</p>'
},
{
  id: "dychaci-retazec",
  title: "Dýchací reťazec",
  match: ["dýchac\\w* reťaz\\w*"],
  short: "Mitochondriová dráha, ktorá prenesie elektróny z NADH a FADH₂ na kyslík; z uvoľnenej energie vzniká väčšina ATP.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Keď stojí – pre nedostatok kyslíka – NADH sa hromadí a pyruvát nemá kam, len na laktát.</p>'
},
{
  id: "kompartment",
  title: "Kompartment bunky",
  match: ["kompartment\\w*", "cytosol\\w*", "mitochondri\\w*"],
  short: "Priestor bunky ohraničený membránou; každá dráha má svoj a membrána medzi nimi je sama nástrojom regulácie.",
  body:
    "<ul>" +
      "<li><b>Cytosol</b> — glykolýza, pentózofosfátová dráha, glykogén, stavba mastných kyselín.</li>" +
      "<li><b>Mitochondria</b> — β-oxidácia, citrátový cyklus, dýchací reťazec, ketolátky.</li>" +
      "<li><b>Oba priestory</b> — glukoneogenéza, tvorba močoviny.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Erytrocyt nemá mitochondrie, má teda len cytosolovú časť mapy – žije výlučne z glukózy.</p>'
},
{
  id: "beta-oxidacia",
  title: "β-Oxidácia",
  match: ["β-oxidáci\\w*"],
  short: "Rozklad mastných kyselín v mitochondrii na acetyl-CoA; dodáva ATP a redukované koenzýmy.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Nalačno poháňa glukoneogenézu: dodáva ATP, ktoré dráha spotrebúva, a acetyl-CoA, ktorý ju zapína.</p>'
},
{
  id: "ketolatky",
  title: "Ketolátky",
  match: ["ketolát\\w*", "ketoacidóz\\w*"],
  short: "Palivo, ktoré pečeň vyrába z acetyl-CoA pri hladovaní; mozog ho začne využívať približne od tretieho dňa.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Sú to kyseliny. Keď pri diabete 1. typu chýba inzulín, vzniká ich priveľa – ketoacidóza s nízkym pH, nízkym HCO<sub>3</sub><sup>−</sup> a hlbokým dýchaním.</p>'
},
{
  id: "lipolyza",
  title: "Lipolýza",
  match: ["lipolýz\\w*", "hormónsenzitívn\\w* lipáz\\w*"],
  short: "Štiepenie triacylglycerolov v tukovom tkanive na mastné kyseliny a glycerol; beží nalačno na signál glukagónu, po jedle ju inzulín prepína na ukladanie.",
  body: ""
},
{
  id: "stavy-organizmu",
  title: "Stavy organizmu: po jedle × nalačno × hladovanie",
  match: ["stav\\w* organizmu", "hladovan\\w*", "lačnen\\w*"],
  short: "Tri stavy, medzi ktorými sa telo prepína podľa toho, ako dávno človek jedol; líšia sa hormonálnym signálom a smerom toku.",
  body:
    "<ul>" +
      "<li><b>Po jedle</b> — ↑ inzulín: pečeň ukladá glykogén a tvorí tuk.</li>" +
      "<li><b>Nalačno</b> — ↑ glukagón: pečeň štiepi glykogén a spúšťa glukoneogenézu, tukové tkanivo uvoľňuje mastné kyseliny.</li>" +
      "<li><b>Hladovanie</b> (dni) — glykogén vyčerpaný; glukoneogenéza a ketolátky.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> O smere nerozhoduje jeden hormón, ale pomer inzulínu a glukagónu. Pri každej dráhe sa dá opýtať, v ktorom stave beží a prečo.</p>'
},
{
  id: "inzulin",
  title: "Inzulín",
  match: ["inzulín\\w*", "proinzulín\\w*"],
  short: "Hormón β-buniek pankreasu; signál „po jedle“ – ukladať.",
  body:
    '<p class="chain">↑ glykémia → v β-bunke viac ATP → zavrie sa draslíkový kanál závislý od ATP → <b>výdaj inzulínu</b></p>' +
    "<ul>" +
      "<li><b>Receptor</b> je sám tyrozínkináza; na konci signálnej cesty stojí fosfatáza, ktorá fosfáty z enzýmov odoberie.</li>" +
      "<li><b>Účinok</b> — syntéza glykogénu, glykolýza v pečeni, stavba mastných kyselín, ukladanie tuku; GLUT4 do membrány svalu a tukovej bunky.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Keď chýba, bunky dostávajú len signál „hladovanie“, hoci glukózy je v krvi nadbytok.</p>'
},
{
  id: "glukagon",
  title: "Glukagón",
  match: ["glukagón\\w*"],
  short: "Hormón α-buniek pankreasu; signál „nalačno“ – uvoľňovať. Pôsobí na pečeň, na sval nie.",
  body:
    '<p class="chain">↓ glykémia → glukagón → ↑ cAMP → proteínkináza A → fosforylácia enzýmov → pečeň štiepi glykogén a tvorí glukózu</p>' +
    '<p class="why"><b>Prečo to je dôležité.</b> Sval nemá jeho receptor – svalový glykogén preto na pokles glykémie neodpovie.</p>'
},
{
  id: "adrenalin",
  title: "Adrenalín",
  match: ["adrenalín\\w*"],
  short: "Hormón záťaže a stresu; pôsobí rovnakým smerom ako glukagón – mobilizuje zásoby – ale aj na sval.",
  body: ""
},
{
  id: "km-vmax",
  title: "Km a Vmax",
  match: ["Km", "Vmax", "Michaelis\\w*"],
  short: "Dve konštanty enzýmu: Vmax je rýchlosť pri nasýtení, Km koncentrácia substrátu, pri ktorej enzým pracuje polovičnou rýchlosťou.",
  body:
    '<p class="chain">v = Vmax · [S] / (Km + [S])</p>' +
    "<ul>" +
      "<li><b>Vmax</b> závisí od toho, koľko molekúl enzýmu bunka má.</li>" +
      "<li><b>Nízke Km</b> = vysoká afinita; enzým je stále nasýtený a zmenu koncentrácie „nevidí“.</li>" +
      "<li><b>Km blízko bežnej koncentrácie</b> – enzým sa správa ako senzor.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Kompetitívny inhibítor zvyšuje Km, nekompetitívny znižuje Vmax.</p>'
},
{
  id: "hexokinaza-glukokinaza",
  title: "Hexokináza × glukokináza",
  match: ["hexokináz\\w*", "glukokináz\\w*"],
  short: "Dva izoenzýmy, ktoré fosforylujú glukózu na glukóza-6-fosfát; líšia sa Km, tkanivom a tým, či ich brzdí produkt.",
  body:
    "<ul>" +
      "<li><b>Hexokináza</b> — väčšina tkanív; nízke Km, nasýtená aj nalačno; brzdí ju glukóza-6-fosfát.</li>" +
      "<li><b>Glukokináza</b> — pečeň a β-bunky; vysoké Km (≈ 10 mmol/l), veľká Vmax, produkt ju nebrzdí.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Pri nízkej glykémii fosforyluje glukózu hexokináza tkanív, nie glukokináza pečene – mozog má prednosť. Glukokináza je spolu s GLUT2 senzorom glukózy.</p>'
},
{
  id: "izoenzym",
  title: "Izoenzým",
  match: ["izoenzým\\w*"],
  short: "Enzýmy, ktoré katalyzujú tú istú reakciu, ale líšia sa stavbou, kinetikou a tkanivom.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Vďaka izoenzýmom má tá istá dráha v rôznych orgánoch rôzne vlastnosti. V sére prezradia, z ktorého tkaniva enzým unikol.</p>'
},
{
  id: "inhibitor",
  title: "Kompetitívny × nekompetitívny inhibítor",
  match: ["kompetitívn\\w*", "nekompetitívn\\w*", "inhibítor\\w*"],
  short: "Dva spôsoby, akými látka znižuje rýchlosť enzýmu; líšia sa miestom väzby.",
  body:
    "<ul>" +
      "<li><b>Kompetitívny</b> — viaže sa do aktívneho miesta, podobá sa na substrát; Km zdanlivo ↑, Vmax sa nemení; dá sa prekonať nadbytkom substrátu.</li>" +
      "<li><b>Nekompetitívny</b> — viaže sa mimo aktívneho miesta; Vmax ↓, Km sa nemení; substrátom sa neprekoná.</li>" +
    "</ul>"
},
{
  id: "statiny",
  title: "Statíny",
  match: ["statín\\w*"],
  short: "Lieky, ktoré kompetitívne inhibujú enzým prvého nevratného kroku syntézy cholesterolu.",
  body:
    '<p class="chain">statín obsadí aktívne miesto → bunka vyrobí menej cholesterolu → viac ho odoberá z krvi → hladina v krvi klesne</p>'
},
{
  id: "pepsin",
  title: "Pepsín a pepsinogén",
  match: ["pepsín\\w*", "pepsinogén\\w*"],
  short: "Žalúdočná endopeptidáza s optimom pH 2–3; vzniká z neaktívneho pepsinogénu.",
  body:
    '<p class="chain">pepsinogén → HCl zmení jeho tvar → odštiepi sa úsek reťazca → <b>pepsín</b> → ten štiepi ďalší pepsinogén (autokatalýza)</p>'
},
{
  id: "zymogen",
  title: "Zymogén (proenzým)",
  match: ["zymogén\\w*", "proenzým\\w*"],
  short: "Neaktívny predstupeň enzýmu s úsekom reťazca navyše; jeho odštiepením vznikne aktívny enzým a cesta späť neexistuje.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Proteáza, ktorá by bola aktívna už v bunke, kde vzniká, by ju strávila. Rovnako vznikajú trypsín, chymotrypsín a faktory zrážania krvi.</p>'
},
{
  id: "alosteria",
  title: "Alostéria",
  match: ["alostéri\\w*", "alosterick\\w*", "efektor\\w*"],
  short: "Regulácia, pri ktorej sa malá molekula (efektor) naviaže mimo aktívneho miesta a zmení tvar enzýmu a jeho afinitu k substrátu.",
  body:
    "<ul>" +
      "<li><b>Rýchlosť</b> — okamžite; trvá, kým je efektor prítomný.</li>" +
      "<li><b>Signál</b> — z vlastnej bunky: správa o produkte alebo o energii.</li>" +
      "<li><b>Krivka</b> má tvar S – enzým sa správa ako vypínač.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Riadiace enzýmy dráh sú spravidla alosterické a zároveň podliehajú fosforylácii – spájajú signál z bunky so signálom od hormónu.</p>'
},
{
  id: "spatna-inhibicia",
  title: "Spätná inhibícia",
  match: ["spätn\\w* inhibíci\\w*", "inhibíci\\w* konečným produktom", "spätn\\w* väzb\\w*"],
  short: "Konečný produkt dráhy inhibuje enzým na jej začiatku; dráha sa sama vypne, keď je produktu dosť.",
  body:
    '<p class="chain">A → B → C → D → produkt<br>produkt ⊣ prvý nevratný enzým → dráha spomalí → produktu ubudne → inhibícia povolí ⟳</p>'
},
{
  id: "amp",
  title: "AMP — signál nedostatku energie",
  match: ["AMP"],
  short: "Adenozínmonofosfát; citlivý ukazovateľ energetického stavu bunky.",
  body:
    '<p class="chain">adenylátkináza: 2 ADP → ATP + AMP → malý pokles ATP = výrazný vzostup <b>AMP</b></p>' +
    '<p class="why"><b>Prečo to je dôležité.</b> AMP zapína dráhy, ktoré ATP vyrábajú – vo svale fosfofruktokinázu-1 aj glykogénfosforylázu.</p>'
},
{
  id: "ampk",
  title: "AMPK — AMP-aktivovaná proteínkináza",
  match: ["AMPK"],
  short: "Spoločný senzor energie bunky: aktivuje ju vzostup pomerov AMP : ATP a ADP : ATP.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Fosforyláciou zapína dráhy, ktoré ATP tvoria, a tlmí deje, ktoré ho spotrebúvajú – signál „málo energie“ tak zasiahne naraz veľa dráh.</p>'
},
{
  id: "fosforylacia",
  title: "Fosforylácia a defosforylácia enzýmu",
  match: ["kovalentn\\w* modifikáci\\w*", "fosforyláci\\w*", "defosforyláci\\w*", "fosforylovan\\w*", "fosforyluj\\w*"],
  short: "Vratná kovalentná modifikácia: proteínkináza prenesie fosfát z ATP na serín, treonín alebo tyrozín enzýmu, fosfatáza ho vodou odštiepi.",
  body:
    "<ul>" +
      "<li><b>Účinok</b> — dva záporné náboje zmenia tvar enzýmu: niektoré zapne, iné vypne.</li>" +
      "<li><b>Rýchlosť</b> — sekundy až minúty; signál prichádza od hormónu.</li>" +
      "<li><b>Zosilnenie</b> — jedna molekula hormónu cez kaskádu kináz zasiahne veľa molekúl enzýmu.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Jedna kináza môže tým istým krokom zapnúť rozklad a vypnúť syntézu tej istej látky.</p>'
},
{
  id: "camp",
  title: "cAMP",
  match: ["cAMP"],
  short: "Cyklický AMP – signál vnútri bunky (druhý posol) glukagónu a adrenalínu; zapína proteínkinázu A.",
  body:
    '<p class="chain">hormón na receptore → G-proteín → adenylátcykláza → ↑ <b>cAMP</b> → proteínkináza A</p>' +
    '<p class="why"><b>Prečo to je dôležité.</b> Rozkladá ho fosfodiesteráza, ktorú aktivuje inzulín – signál sa tak dá rýchlo ukončiť.</p>'
},
{
  id: "proteinkinaza-a",
  title: "Proteínkináza A",
  match: ["proteínkináz\\w*"],
  short: "Kináza, ktorú zapína cAMP: odpojí z nej regulačné podjednotky. Rozdáva fosfáty enzýmom na nevratných krokoch protismerných dráh.",
  body:
    "<ul>" +
      "<li><b>Glykogén</b> — cez fosforylázakinázu zapne fosforylázu, priamo vypne syntázu.</li>" +
      "<li><b>Glukóza</b> — v pečeni vypne pyruvátkinázu a zníži fruktóza-2,6-bisfosfát.</li>" +
    "</ul>"
},
{
  id: "proteinfosfataza",
  title: "Proteínfosfatáza 1",
  match: ["fosfoproteínfosfatáz\\w*", "proteínfosfatáz\\w*"],
  short: "Fosfatáza, ktorá vodou odštepuje fosfáty z enzýmov; aktivuje ju inzulín.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Vracia enzýmy do stavu „po jedle“: fosforylázu vypne, syntázu zapne. Kým trvá signál cAMP, drží ju vypnutú jej inhibítor.</p>'
},
{
  id: "indukcia-represia",
  title: "Indukcia a represia enzýmu",
  match: ["indukci\\w*", "represi\\w*", "indukovateľn\\w*", "konštitutívn\\w*", "množstv\\w* enzým\\w*"],
  short: "Najpomalšia regulácia: bunka zmení prepis génu a syntézu enzýmu, a tým počet jeho molekúl (Vmax); účinok za hodiny až dni.",
  body:
    "<ul>" +
      "<li><b>Konštitutívny enzým</b> — v bunke je ho stále rovnako.</li>" +
      "<li><b>Indukovateľný</b> — jeho množstvo sa prispôsobuje potrebe.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Rýchle nástroje rozhodujú, čo bunka robí v tejto chvíli; množstvo enzýmov určuje, čo vôbec dokáže.</p>'
},
{
  id: "reciprocna-regulacia",
  title: "Recipročná regulácia",
  match: ["recipročn\\w*"],
  short: "Ten istý signál zapne jednu dráhu a vypne opačnú; enzýmy dvoch protismerných dráh ho počúvajú s opačným znamienkom.",
  body:
    "<ul>" +
      "<li><b>Glykogén</b> — inzulín syntézu, glukagón rozklad.</li>" +
      "<li><b>Glukóza</b> — inzulín glykolýzu, glukagón glukoneogenézu.</li>" +
      "<li><b>Mastné kyseliny</b> — inzulín stavbu, glukagón β-oxidáciu.</li>" +
    "</ul>"
},
{
  id: "jalovy-cyklus",
  title: "Jalový cyklus",
  match: ["jalov\\w* cykl\\w*"],
  short: "Stav, keď dve protismerné dráhy bežia naraz: látka sa točí v kruhu a jediným výsledkom je spotreba ATP.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Bráni mu recipročná regulácia – zapnutie jednej dráhy druhú automaticky vypne.</p>'
},
{
  id: "riadiaci-krok",
  title: "Riadiaci (zaväzujúci) krok",
  match: ["riadiac\\w* krok\\w*", "riadiac\\w* enzým\\w*", "zaväzujúc\\w* krok\\w*"],
  short: "Krok, ktorý určuje tok celou dráhou; bunka naň sústreďuje všetky nástroje regulácie.",
  body:
    "<ul>" +
      "<li><b>Nevratný</b> – len tam zmena aktivity enzýmu zmení tok.</li>" +
      "<li><b>Prvý, ktorý dráhu zaväzuje</b> – medziprodukt už nemá inú cestu.</li>" +
      "<li><b>Najpomalší</b>, <b>alosterický</b> a zároveň počúva hormón.</li>" +
      "<li><b>V opačnej dráhe</b> ho nahrádza iný enzým, regulovaný opačne.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Kto ovláda riadiaci krok, ovláda celú dráhu – preto naň mieria lieky.</p>'
},
{
  id: "blok-enzymu",
  title: "Blok enzýmu",
  match: ["blok\\w* enzým\\w*", "pred blokom", "za blokom"],
  short: "Trvalý výpadok jedného kroku dráhy, najčastejšie vrodený defekt enzýmu; následky sa dajú predpovedať z mapy.",
  body:
    '<p class="chain">pred blokom sa hromadí substrát → uniká bočnými cestami<br>za blokom chýba produkt</p>' +
    '<p class="why"><b>Prečo to je dôležité.</b> Diagnostika hľadá nahromadenú látku v krvi alebo moči; liečba obmedzuje prísun substrátu alebo dopĺňa chýbajúci produkt.</p>'
},
{
  id: "glykemia",
  title: "Glykémia",
  match: ["glykémi\\w*", "hypoglykémi\\w*", "hyperglykémi\\w*"],
  short: "Koncentrácia glukózy v krvi; nalačno ju v úzkom pásme drží slučka inzulínu a glukagónu.",
  body:
    "<ul>" +
      "<li><b>Nalačno</b> — menej než 5,6 mmol/l norma; 5,6–6,9 porušená glykémia nalačno; ≥ 7,0 mmol/l diabetes.</li>" +
      "<li><b>Zdroj glukózy</b> sa strieda: potrava → pečeňový glykogén → glukoneogenéza.</li>" +
      "<li><b>Hypoglykémia</b> ohrozuje najprv mozog: zmätenosť, poruchy vedomia, kŕče.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Hodnota má zmysel len so stavom organizmu: 7,5 mmol/l je dve hodiny po jedle bežná, nalačno je nálezom.</p>'
},
{
  id: "diabetes",
  title: "Diabetes mellitus",
  match: ["diabetes", "diabet(?:e|u|om)", "diabetick\\w*"],
  short: "Porucha signálu inzulínu, ktorá sa prejaví hyperglykémiou; pri 1. type inzulín chýba.",
  body:
    '<p class="chain">chýba inzulín → bunky dostávajú len signál glukagónu → pečeň vydáva glukózu, z tuku prúdia mastné kyseliny → ketolátky → hyperglykémia a ketoacidóza súčasne</p>' +
    '<p class="why"><b>Prečo to je dôležité.</b> Nie je to nedostatok paliva, ale porucha signálu – podanie inzulínu vráti smer všetkých dráh.</p>'
}
);
