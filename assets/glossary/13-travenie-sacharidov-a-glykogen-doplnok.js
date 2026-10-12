/* Glosár BIOCHEM — doplnok k celku „trávenie sacharidov a glykogén“ (kap. 3).
   Formát záznamu: assets/glossary/README.md. Texty sú vlastné (CLAUDE.md §4.1), písané z faktov kapitoly. */
(window.PF_GLOSSARY = window.PF_GLOSSARY || []).push(
{
  id: "endoglukozidaza",
  title: "Endoglukozidáza",
  match: ["endoglukozidáz\\w*"],
  short: "Enzým, ktorý štiepi glykozidové väzby kdekoľvek vnútri reťazca (α-amyláza), na rozdiel od enzýmov, ktoré obhrýzajú reťazec od konca.",
  body: ""
},
{
  id: "dextriny-maltotrioza",
  title: "Dextríny, maltotrióza a maltóza ako produkty amylázy",
  match: ["dextrín\\w*", "maltotrióz\\w*"],
  short: "Krátke oligosacharidy a disacharidy, na ktoré α-amyláza rozseká škrob; voľná glukóza z nej takmer nevzniká.",
  body:
    '<p class="chain">škrob → (α-amyláza) → <b>maltóza, maltotrióza, hraničné dextríny</b> → (kefkový lem) → glukóza</p>'
},
{
  id: "maltaza-glukoamylaza",
  title: "Maltáza–glukoamyláza",
  match: ["maltáz\\w*", "glukoamyláz\\w*"],
  short: "Enzým kefkového lemu, ktorý štiepi α(1→4) od konca reťazca (maltóza, maltotrióza, dextríny → glukóza).",
  body: ""
},
{
  id: "sacharaza-izomaltaza",
  title: "Sacharáza–izomaltáza",
  match: ["sacharáz\\w*", "izomaltáz\\w*"],
  short: "Komplex dvoch podjednotiek z jedného reťazca: sacharáza štiepi sacharózu na glukózu a fruktózu, izomaltáza väzbu α(1→6) v miestach vetvenia dextrínov.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Komplex štiepi aj väčšinu maltózy, takže jeho strata sa pri škrobe prejaví menej než chýbajúca laktáza pri laktóze.</p>'
},
{
  id: "trehalaza",
  title: "Trehaláza a trehalóza",
  match: ["trehaláz\\w*", "trehalóz\\w*"],
  short: "Trehaláza štiepi väzbu α(1→1) trehalózy z húb na dve glukózy.",
  body: ""
},
{
  id: "enterocyt",
  title: "Enterocyt",
  match: ["enterocyt\\w*"],
  short: "Bunka črevného epitelu s dvoma rozdielnymi stranami: na strane lúmenu (kefkový lem) cukor vstupuje, na strane krvi opúšťa bunku.",
  body: ""
},
{
  id: "kvasenie-hrube-crevo",
  title: "Kvasenie v hrubom čreve a krátke mastné kyseliny",
  match: ["kvasenie", "kvasia", "krátk\\w* MK", "krátk\\w* mastn\\w*"],
  short: "Baktérie hrubého čreva kvasia nestrávené sacharidy na plyny (vodík, CO₂, metán) a krátke MK s 2–4 uhlíkmi (octová, propiónová, maslová), ktoré sliznica vstrebáva.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Rozdiel medzi vlákninou a nestrávenou laktózou je len v rýchlosti a množstve – preto nadúvanie a hnačka pri laktázovom deficite.</p>'
},
{
  id: "vodikovy-dychovy-test",
  title: "Vodík vo vydychovanom vzduchu",
  match: ["vodík vo vydychovanom vzduchu", "vydychovan\\w* vzduch\\w*"],
  short: "Dôkaz neštiepenej laktózy: baktérie ju kvasia a vzniknutý vodík sa objaví v dychu po dávke laktózy.",
  body: ""
},
{
  id: "malabsorpcia-intolerancia",
  title: "Malabsorpcia × intolerancia, sekundárny deficit laktázy",
  match: ["malabsorpci\\w*", "intolerancia", "intolerancie", "sekundárn\\w* deficit\\w*", "celiaki\\w*", "Crohnov\\w* chorob\\w*"],
  short: "Nízku aktivitu laktázy má veľa dospelých, príznaky len časť z nich; častejšie než vrodený deficit laktáza dočasne chýba po poškodení sliznice (infekcia, celiakia, Crohnova choroba).",
  body: ""
},
{
  id: "manitol-cukrove-alkoholy",
  title: "Cukrové alkoholy: sorbitol a manitol",
  match: ["cukrov\\w* alkohol\\w*", "manitol\\w*"],
  short: "Cukry s karbonylom zredukovaným na hydroxyl; sorbitol si telo vyrába aj z glukózy a pri dlhodobo vysokej glykémii sa hromadí v šošovke oka.",
  body: ""
},
{
  id: "symport",
  title: "Symport a sekundárny aktívny transport",
  match: ["symport\\w*", "sekundárn\\w* aktívn\\w* transport\\w*"],
  short: "Prenášač vezie cukor spolu so sodíkom, ktorý ide po svojom spáde; ATP sa spotrebuje až o krok ďalej, v Na⁺/K⁺-ATPáze, ktorá spád udržiava.",
  body: ""
},
{
  id: "ulahcena-difuzia",
  title: "Uľahčená difúzia",
  match: ["uľahčen\\w* difúzi\\w*"],
  short: "Prenos cez membránu prenášačom len po koncentračnom spáde, bez energie a obojsmerne (rodina GLUT).",
  body: ""
},
{
  id: "glut1-glut3",
  title: "GLUT1 a GLUT3",
  match: ["GLUT1", "GLUT3"],
  short: "Transportéry s trvalým príjmom glukózy bez inzulínu: GLUT1 v erytrocytoch a cievach mozgu, GLUT3 v neurónoch.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Bunky odkázané na glukózu ju dostanú vždy – ale pracujú blízko hornej hranice, takže mozog obmedzí už mierny pokles glykémie.</p>'
},
{
  id: "glut5",
  title: "GLUT5",
  match: ["GLUT5"],
  short: "Transportér tenkého čreva, ktorý prenáša fruktózu uľahčenou difúziou, len po spáde.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Veľká dávka fruktózy sa preto nemusí vstrebať celá.</p>'
},
{
  id: "sglt1",
  title: "SGLT1",
  match: ["SGLT1"],
  short: "Črevný symport, ktorý viaže 2 Na⁺ a jednu molekulu glukózy alebo galaktózy a prenesie ich spolu do enterocytu; glukóza a galaktóza oň súťažia.",
  body: ""
},
{
  id: "hematoencefalicka-bariera",
  title: "Hematoencefalická bariéra",
  match: ["hematoencefalick\\w* bariér\\w*"],
  short: "Cievy mozgu majú GLUT1, takže glukóza do mozgu prechádza bez inzulínu.",
  body: ""
},
{
  id: "rehydratacny-roztok",
  title: "Rehydratačný roztok",
  match: ["rehydratačn\\w* roztok\\w*", "choler\\w*"],
  short: "Roztok s glukózou aj Na⁺ využije symport SGLT1: s cukrom sa vstrebe sodík a za nimi osmoticky voda; samotná voda alebo soľ by taký účinok nemali.",
  body: ""
},
{
  id: "proximalny-tubulus",
  title: "Proximálny tubulus obličky",
  match: ["proximáln\\w* tubul\\w*", "tubul\\w*"],
  short: "Má rovnaké usporiadanie ako enterocyt (SGLT na strane moču, GLUT na strane krvi) a vráti do krvi asi 180 g glukózy denne.",
  body: ""
},
{
  id: "agonista-glp1",
  title: "Agonisty GLP-1",
  match: ["agonist\\w* \\w*GLP-1", "agonist\\w* receptora GLP-1"],
  short: "Lieky napodobňujúce GLP-1, ktoré DPP-4 neštiepi; účinok závisí od glykémie, preto hypoglykémia hrozí menej než pri inzulíne, a tlmia chuť do jedla.",
  body: ""
},
{
  id: "rastovy-hormon",
  title: "Rastový hormón",
  match: ["rastov\\w* hormón\\w*"],
  short: "Spolu s kortizolom pôsobí pomalšie než glukagón a adrenalín: mení skôr množstvo enzýmov a spotrebu glukózy v tkanivách.",
  body: ""
},
{
  id: "utp",
  title: "UTP — uridíntrifosfát",
  match: ["UTP", "uridíntrifosfát\\w*"],
  short: "Nukleotid, ktorým sa aktivuje glukóza (glukóza-1-fosfát + UTP → UDP-glukóza); uvoľnené UDP sa späť na UTP dobije z ATP.",
  body: ""
},
{
  id: "udp-glukozapyrofosforylaza",
  title: "UDP-glukózapyrofosforyláza a pyrofosfatáza",
  match: ["UDP-glukózapyrofosforyláz\\w*", "pyrofosfatáz\\w*"],
  short: "Prvý enzým pripojí glukóza-1-fosfát na UTP, pyrofosfatáza hneď rozloží uvoľnený difosfát na dva fosfáty – tým je krok prakticky jednosmerný.",
  body: ""
},
{
  id: "glukoza-1-fosfat",
  title: "Glukóza-1-fosfát",
  match: ["glukóza-1-fosfát\\w*"],
  short: "Medziprodukt, v ktorom sa stretávajú syntéza aj rozklad glykogénu; vzniká fosforolýzou väzby α(1→4) a fosfoglukomutáza ho mení na glukóza-6-fosfát.",
  body: ""
},
{
  id: "fosforolyza",
  title: "Fosforolýza",
  match: ["fosforolýz\\w*"],
  short: "Štiepenie väzby anorganickým fosfátom, nie vodou; glukóza opúšťa glykogén už fosforylovaná, takže sa ušetrí ATP.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Vo svale, ktorý pracuje naplno, je to rozdiel medzi ziskom dvoch a troch ATP na glukózu v glykolýze; fosfát navyše drží produkt v bunke.</p>'
},
{
  id: "pyridoxalfosfat",
  title: "Pyridoxalfosfát (vitamín B₆)",
  match: ["pyridoxalfosfát\\w*", "vitamín\\w* B₆"],
  short: "Koenzým glykogénfosforylázy, derivát vitamínu B₆.",
  body: ""
},
{
  id: "g-protein-adenylatcyklaza",
  title: "G-proteín a adenylátcykláza",
  match: ["G-proteín\\w*", "adenylátcyklá\\w*"],
  short: "Hormón sa naviaže na receptor, ten cez G-proteín zapne adenylátcyklázu a v bunke stúpne cAMP.",
  body: ""
},
{
  id: "fosfodiesteraza",
  title: "Fosfodiesteráza",
  match: ["fosfodiesteráz\\w*"],
  short: "Enzým, ktorý rozloží cAMP; inzulín ho aktivuje, takže signál „rozkladaj“ doznie.",
  body: ""
},
{
  id: "akt-gsk3",
  title: "Kináza Akt a GSK-3",
  match: ["GSK-3", "kináz\\w* Akt"],
  short: "Inzulín cez kinázu Akt vypne kinázu glykogénsyntázy 3 (GSK-3), jednu z kináz, ktoré syntázu držia vypnutú.",
  body: ""
},
{
  id: "kalmodulin-vapnik",
  title: "Kalmodulín a Ca²⁺",
  match: ["sarkoplazmatick\\w* retikul\\w*"],
  short: "Podjednotka fosforylázakinázy viažuca Ca²⁺; vápnik uvoľnený pri kontrakcii zapne rozklad glykogénu vo chvíli, keď sa začne míňať palivo, bez čakania na hormón.",
  body: ""
},
{
  id: "pompe",
  title: "Pompeho choroba (typ II)",
  match: ["Pompe\\w*", "kyslá α-glukozidáz\\w*", "lyzozómov\\w* kysl\\w*"],
  short: "Chýba lyzozómová kyslá α-glukozidáza; glykogén sa hromadí v lyzozómoch, glykémia je normálna, u dojčiat je zväčšené srdce a slabé svaly; lieči sa dodávaním enzýmu.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Jediná glykogenóza, ktorá je zároveň lyzozómovou chorobou – cytosolové dráhy sú neporušené.</p>'
},
{
  id: "cori-forbes",
  title: "Coriho choroba (typ III)",
  match: ["Cori"],
  short: "Chýba odvetvujúci enzým; fosforyláza zastane pri vetveniach a vzniká glykogén s krátkymi vonkajšími vetvami; hypoglykémia je miernejšia než pri type I, lebo glukoneogenéza funguje.",
  body: ""
},
{
  id: "andersen",
  title: "Andersenova choroba (typ IV)",
  match: ["Andersen"],
  short: "Chýba vetviaci enzým; glykogén má dlhé nerozvetvené reťazce a zle sa rozpúšťa, čo v detstve poškodzuje pečeň.",
  body: ""
},
{
  id: "hers",
  title: "Hersova choroba (typ VI)",
  match: ["Hers"],
  short: "Deficit pečeňovej fosforylázy; mierna hypoglykémia nalačno a hepatomegália.",
  body: ""
},
{
  id: "tarui",
  title: "Taruiho choroba (typ VII)",
  match: ["Tarui"],
  short: "Deficit svalovej fosfofruktokinázy-1; obraz ako typ V, ale blok je až v glykolýze.",
  body: ""
},
{
  id: "kyselina-mocova",
  title: "Kyselina močová",
  match: ["kyselin\\w* močov\\w*"],
  short: "Pri glykogenóze typu Ia stúpa spolu s tukmi v krvi, lebo nadbytok substrátu a signál hladovania ju zvyšujú.",
  body: ""
},
{
  id: "myoglobinuria",
  title: "Myoglobín v moči a záťažový test",
  match: ["myoglobín\\w*", "záťažov\\w* test\\w*"],
  short: "Tmavý moč po námahe signalizuje myoglobín z poškodených svalových vlákien; pri McArdleho chorobe po záťaži laktát nestúpne.",
  body: ""
},
{
  id: "chromogen",
  title: "Chromogén",
  match: ["chromogén\\w*"],
  short: "Bezfarebná látka, ktorú peroxidáza peroxidom vodíka oxiduje na farebný produkt; farby vznikne toľko, koľko bolo glukózy.",
  body: ""
},
{
  id: "peroxid-vodika",
  title: "Peroxid vodíka (H₂O₂)",
  match: ["peroxid\\w* vodíka", "H₂O₂"],
  short: "Vedľajší produkt oxidácie glukózy glukózaoxidázou; v ďalšom kroku ním peroxidáza oxiduje chromogén.",
  body: ""
},
{
  id: "ketogenna-pripomenutie-epilepsia",
  title: "Odporúčaný príjem sacharidov",
  match: ["odporúčan\\w* denn\\w* príjem\\w*"],
  short: "Odporúčaný denný príjem sacharidov 130 g je odvodený od spotreby mozgu; dostatok sacharidov „šetrí“ svalové bielkoviny.",
  body: ""
},
{
  id: "lumen-creva",
  title: "Lúmen čreva a duodenum",
  match: ["lúmen\\w*", "duodén\\w*", "duodenum"],
  short: "Vnútorný priestor čreva, kde hydrolázy rozoberú veľké molekuly na monosacharidy; v duodene zneutralizuje obsah pankreatický hydrogenuhličitan.",
  body: ""
}
);
