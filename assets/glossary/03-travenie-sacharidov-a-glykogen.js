/* Glosár BIOCHEM — trávenie a vstrebávanie sacharidov, glykémia, glykogén (kap. 3).
   Formát záznamu: assets/glossary/README.md. Texty sú vlastné (CLAUDE.md §4.1). */
(window.PF_GLOSSARY = window.PF_GLOSSARY || []).push(
{
  id: "glukoza",
  title: "Glukóza",
  match: ["glukóz(?:a|y|e|u|ou)"],
  short: "Aldohexóza; hlavný cukor krvi a palivo, ktoré vie využiť každá bunka.",
  body:
    "<ul>" +
      "<li><b>V roztoku</b> — kruh (pyranóza) s anomérmi α a β; voľný anomérny uhlík redukuje.</li>" +
      "<li><b>V bunke</b> — hneď za membránou sa fosforyluje na glukóza-6-fosfát.</li>" +
      "<li><b>Odkázané na ňu</b> — erytrocyt (nemá mitochondrie) a mozog (≈ 150 g denne).</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Voľnú glukózu do krvi vedia vydať len pečeň a oblička – majú glukóza-6-fosfatázu.</p>'
},
{
  id: "alfa-amylaza",
  title: "α-Amyláza",
  match: ["α-amyláz\\w*", "amyláz\\w*"],
  short: "Endoglukozidáza slín a pankreasu; hydrolyzuje väzby α(1→4) vnútri reťazca škrobu.",
  body:
    '<p class="chain">ústa: slinná amyláza → žalúdok: kyslé pH ju inaktivuje → duodenum: pankreatická amyláza → <b>maltóza, maltotrióza, hraničné dextríny</b></p>' +
    "<ul>" +
      "<li><b>Neštiepi</b> — väzbu α(1→6) ani jej tesné okolie, disacharidy, väzbu β(1→4) celulózy.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Jej produktom takmer nie je voľná glukóza – trávenie musia dokončiť enzýmy kefkového lemu.</p>'
},
{
  id: "hranicny-dextrin",
  title: "Hraničný dextrín",
  match: ["hraničn\\w* dextrín\\w*", "dextrín\\w*"],
  short: "Krátky oligosacharid zo štyroch až deviatich glukóz s jedným vetvením; ostane z každého miesta vetvenia amylopektínu po α-amyláze.",
  body: ""
},
{
  id: "kefkovy-lem",
  title: "Enzýmy kefkového lemu (disacharidázy)",
  match: ["kefkov\\w* lem\\w*", "disacharidáz\\w*", "glykozidáz\\w*", "α-glukozidáz\\w*", "maltáz\\w*", "glukoamyláz\\w*", "sacharáz\\w*", "izomaltáz\\w*", "trehaláz\\w*"],
  short: "Glykozidázy zakotvené v membráne mikroklkov enterocytu; z disacharidov a dextrínov robia monosacharidy tesne pri prenášači.",
  body:
    "<ul>" +
      "<li><b>Maltáza–glukoamyláza</b> — α(1→4) od konca reťazca → glukóza.</li>" +
      "<li><b>Sacharáza–izomaltáza</b> — sacharóza → glukóza + fruktóza; α(1→6) v miestach vetvenia.</li>" +
      "<li><b>Laktáza</b> — laktóza → galaktóza + glukóza.</li>" +
      "<li><b>Trehaláza</b> — trehalóza z húb → 2 glukózy.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Maltózu štiepi viac enzýmov, laktózu len jeden – preto sa výpadok laktázy prejaví najvýraznejšie.</p>'
},
{
  id: "laktaza",
  title: "Laktáza a laktózová intolerancia",
  match: ["laktáz\\w*", "laktózov\\w* intoleranci\\w*", "malabsorpci\\w*"],
  short: "Laktáza (β-galaktozidáza) štiepi laktózu na galaktózu a glukózu; po dojčenskom veku jej u väčšiny ľudí ubúda.",
  body:
    '<p class="chain">málo laktázy → laktóza ostane v lúmene → viaže vodu → baktérie hrubého čreva ju kvasia na krátke mastné kyseliny a plyny → nadúvanie, bolesť, hnačka</p>' +
    "<ul>" +
      "<li><b>Dôkaz</b> — vodík vo vydychovanom vzduchu po dávke laktózy.</li>" +
      "<li><b>Malabsorpcia ≠ intolerancia</b> — nízku aktivitu má veľa dospelých, príznaky len časť z nich.</li>" +
      "<li><b>Sekundárny deficit</b> — po poškodení sliznice (infekcia, celiakia).</li>" +
    "</ul>"
},
{
  id: "vlaknina",
  title: "Vláknina",
  match: ["vláknin\\w*", "celulóz\\w*"],
  short: "Polysacharidy, na ktorých väzby človek nemá enzým (celulóza má β(1→4)); tenkým črevom prejdú nezmenené.",
  body:
    '<p class="chain">vláknina → hrubé črevo → baktérie ju kvasia → plyny + krátke mastné kyseliny (octová, propiónová, maslová), ktoré sliznica vstrebáva</p>'
},
{
  id: "glykemicky-index",
  title: "Glykemický index",
  match: ["glykemick\\w* index\\w*"],
  short: "Porovnáva vzostup glykémie po potravine so vzostupom po čistej glukóze (= 100).",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Nevyjadruje sladkosť ani obsah cukru, ale dostupnosť glukózy – mení ju aj vláknina, tuk v jedle a spôsob prípravy.</p>'
},
{
  id: "akarboza",
  title: "Akarbóza",
  match: ["akarbóz\\w*"],
  short: "Liek, ktorý brzdí pankreatickú α-amylázu aj α-glukozidázy kefkového lemu; glykémia po jedle stúpa miernejšie.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Daňou je to isté ako pri deficite disacharidázy: nestrávený cukor dostanú baktérie a pacient má plynatosť.</p>'
},
{
  id: "sglt",
  title: "SGLT — symport glukózy so sodíkom",
  match: ["SGLT1", "SGLT2", "SGLT", "symport\\w*", "sekundárn\\w* aktívn\\w* transport\\w*"],
  short: "Prenášač, ktorý vezie cukor do bunky spolu s Na⁺; vie ísť aj proti koncentračnému spádu cukru.",
  body:
    '<p class="chain">Na<sup>+</sup>/K<sup>+</sup>-ATPáza drží v bunke málo Na<sup>+</sup> → Na<sup>+</sup> ide po spáde a cukor „vezie“ so sebou</p>' +
    "<ul>" +
      "<li><b>SGLT1</b> — črevo: 2 Na<sup>+</sup> + glukóza alebo galaktóza.</li>" +
      "<li><b>SGLT2</b> — proximálny tubul obličky: vracia glukózu z filtrátu.</li>" +
      "<li><b>Sekundárny</b> aktívny transport – ATP sa spotrebúva o krok ďalej, na pumpe.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Rehydratačný roztok obsahuje glukózu aj Na<sup>+</sup>: s cukrom sa vstrebe sodík a za nimi osmoticky voda.</p>'
},
{
  id: "na-k-atpaza",
  title: "Na⁺/K⁺-ATPáza",
  match: ["Na⁺/K⁺-ATPáz\\w*", "sodíkovo-draslíkov\\w* pump\\w*"],
  short: "Pumpa v membráne: za jedno ATP vyčerpá z bunky 3 Na⁺ a vráti 2 K⁺; patrí medzi translokázy.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Udržiava spád Na<sup>+</sup>, ktorý poháňa SGLT – ATP sa pri vstrebávaní glukózy spotrebúva práve tu.</p>'
},
{
  id: "glut",
  title: "GLUT — uľahčená difúzia glukózy",
  match: ["GLUT", "GLUT1", "GLUT3", "GLUT5", "uľahčen\\w* difúzi\\w*"],
  short: "Rodina prenášačov, ktoré prenášajú monosacharid cez membránu len po spáde a bez energie.",
  body:
    "<ul>" +
      "<li><b>GLUT1</b> — erytrocyty, cievy mozgu; stály príjem bez inzulínu.</li>" +
      "<li><b>GLUT3</b> — neuróny.</li>" +
      "<li><b>GLUT2</b> — pečeň, β-bunky, strana krvi v čreve a obličke; vysoké Km.</li>" +
      "<li><b>GLUT4</b> — sval a tuková bunka; čaká na inzulín.</li>" +
      "<li><b>GLUT5</b> — tenké črevo; fruktóza.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> O tom, ktoré tkanivo glukózu dostane, rozhoduje typ GLUT, ktorý má v membráne.</p>'
},
{
  id: "glut2",
  title: "GLUT2",
  match: ["GLUT2"],
  short: "Obojsmerný prenášač glukózy s vysokým Km (≈ 10 mmol/l) v pečeni, β-bunkách a na strane krvi v čreve a obličke.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Má rovnako vysoké Km ako glukokináza: pečeň berie glukózu pri nadbytku a vydáva nalačno, β-bunka ním glykémiu „meria“.</p>'
},
{
  id: "glut4",
  title: "GLUT4",
  match: ["GLUT4"],
  short: "Prenášač glukózy svalu (kostrového aj srdca) a tukovej bunky; v pokoji je uložený v zásobných vezikulách.",
  body:
    '<p class="chain">inzulín → GLUT4 sa presunie do membrány → tkanivo odoberie glukózu po jedle</p>' +
    '<p class="why"><b>Prečo to je dôležité.</b> Príklad regulácie dostupnosťou substrátu: enzýmy svalu sú pripravené, ale glukóza sa k nim dostane až na pokyn inzulínu.</p>'
},
{
  id: "glukozuria",
  title: "Glukozúria a obličkový prah",
  match: ["glukozúri\\w*", "obličkov\\w* prah\\w*"],
  short: "Glukóza v moči; objaví sa, keď glykémia prekročí približne 10 mmol/l a tubuly ju nestíhajú vrátiť do krvi.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Tubuly denne vrátia okolo 180 g glukózy. Nález hovorí, že glykémia prah prekročila – alebo že prenášač nepracuje.</p>'
},
{
  id: "gliflozin",
  title: "Gliflozíny (inhibítory SGLT2)",
  match: ["gliflozín\\w*"],
  short: "Lieky, ktoré znížia spätné vstrebávanie glukózy v obličkovom tubule asi o polovicu; glukóza odchádza močom a glykémia klesá.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Obchádzajú inzulín úplne – dôkaz, že glykémiu určuje aj oblička.</p>'
},
{
  id: "inkretiny",
  title: "Inkretíny: GIP a GLP-1",
  match: ["inkretín\\w*", "inkretínov\\w* efekt\\w*", "GIP", "GLP-1"],
  short: "Hormóny čreva, ktoré hlásia jedlo β-bunke vopred a zosilnia výdaj inzulínu – ale len pri zvýšenej glykémii.",
  body:
    "<ul>" +
      "<li><b>GIP</b> — K-bunky duodena a horného jejuna. <b>GLP-1</b> — L-bunky ilea a hrubého čreva.</li>" +
      "<li><b>GLP-1 navyše</b> tlmí glukagón, spomaľuje vyprázdňovanie žalúdka a znižuje chuť do jedla.</li>" +
      "<li><b>Inkretínový efekt</b> — 50–70 % inzulínovej odpovede na jedlo; pri diabete 2. typu oslabený.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Glukóza podaná ústami vyvolá väčšiu sekréciu inzulínu než tá istá glykémia dosiahnutá infúziou.</p>'
},
{
  id: "dpp-4",
  title: "DPP-4 a gliptíny",
  match: ["DPP-4", "dipeptidylpeptidáz\\w*", "gliptín\\w*"],
  short: "Dipeptidylpeptidáza 4 inaktivuje inkretíny v priebehu 1–2 minút; gliptíny ju brzdia a predĺžia život vlastným inkretínom.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Agonisty receptora GLP-1 hormón napodobňujú, ale DPP-4 ich neštiepi. Účinok závisí od glykémie, hypoglykémia preto hrozí menej než pri inzulíne.</p>'
},
{
  id: "kortizol",
  title: "Kortizol",
  match: ["kortizol\\w*"],
  short: "Hormón, ktorý pôsobí proti poklesu glykémie pomalšie než glukagón: zvyšuje množstvo enzýmov glukoneogenézy a uvoľňuje aminokyseliny zo svalových bielkovín.",
  body: ""
},
{
  id: "glykogen",
  title: "Glykogén",
  match: ["glykogén\\w*"],
  short: "Rozvetvený polymér glukózy – rýchla zásoba živočíšnej bunky: α(1→4) v reťazci, α(1→6) vo vetvení po 8–10 zvyškoch.",
  body:
    "<ul>" +
      "<li><b>Konce</b> — jediný redukujúci koniec v strede, veľa neredukujúcich na povrchu; len na nich pracujú enzýmy.</li>" +
      "<li><b>Pečeň</b> (≈ 100 g) — drží glykémiu; štiepi sa nalačno a v strese.</li>" +
      "<li><b>Sval</b> (≈ 400 g) — len pre vlastnú bunku; štiepi sa pri kontrakcii.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Viac vetiev znamená viac koncov, a teda viac miest, kde enzýmy pracujú naraz – preto sa dá mobilizovať v minútach.</p>'
},
{
  id: "glykogenin",
  title: "Glykogenín",
  match: ["glykogenín\\w*"],
  short: "Bielkovina v strede molekuly glykogénu; na vlastný tyrozín si pripojí glukózu z UDP-glukózy a vytvorí krátky reťazec, ktorý preberie syntáza.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Dlho sa mal za nevyhnutný „primér“. Novšie práce ukazujú, že sval vie glykogén ukladať aj bez neho – jeho skutočná úloha ostáva otvorená.</p>'
},
{
  id: "glykogeneza",
  title: "Glykogenéza (syntéza glykogénu)",
  match: ["glykogenéz\\w*"],
  short: "Stavba glykogénu v cytosole pečene a svalu po jedle; predlžuje existujúci strom po jednej glukóze.",
  body:
    '<p class="chain">glukóza-6-fosfát ⇌ glukóza-1-fosfát → <b>UDP-glukóza</b> (UTP) → glykogénsyntáza: α(1→4) na neredukujúci koniec → vetviaci enzým: α(1→6)</p>' +
    "<ul>" +
      "<li><b>Cena</b> — dve makroergické väzby na voľnú glukózu (ATP + UTP).</li>" +
    "</ul>"
},
{
  id: "glykogenolyza",
  title: "Glykogenolýza (rozklad glykogénu)",
  match: ["glykogenolýz\\w*"],
  short: "Rozklad glykogénu od neredukujúcich koncov; nie je to syntéza odzadu – má vlastné enzýmy a vlastný nevratný krok.",
  body:
    '<p class="chain">glykogénfosforyláza → glukóza-1-fosfát → fosfoglukomutáza → glukóza-6-fosfát<br>pečeň: glukóza-6-fosfatáza → glukóza do krvi · sval: glykolýza</p>' +
    "<ul>" +
      "<li><b>Vetvenie</b> rieši odvetvujúci enzým; z každého vetvenia vyjde jedna voľná glukóza.</li>" +
      "<li><b>Pomer</b> — asi osem glukóza-1-fosfátov na jednu voľnú glukózu.</li>" +
    "</ul>"
},
{
  id: "udp-glukoza",
  title: "UDP-glukóza",
  match: ["UDP-glukóz(?:a|y|u|e|ou)", "UDP-Glc"],
  short: "Aktivovaná glukóza pre syntézu glykogénu: glukóza zavesená na difosfáte nukleotidu.",
  body:
    '<p class="chain">glukóza-1-fosfát + UTP → <b>UDP-glukóza</b> + difosfát → pyrofosfatáza difosfát rozloží → krok je jednosmerný</p>' +
    '<p class="why"><b>Prečo to je dôležité.</b> Difosfát je výborná odstupujúca skupina – prenos glukózy na glykogén má vďaka nemu záporné ΔG.</p>'
},
{
  id: "fosfoglukomutaza",
  title: "Fosfoglukomutáza",
  match: ["fosfoglukomutáz\\w*"],
  short: "Vratne presúva fosfát medzi uhlíkom 6 a 1 glukózy: glukóza-6-fosfát ⇌ glukóza-1-fosfát; spája glykogén s glykolýzou.",
  body: ""
},
{
  id: "glykogensyntaza",
  title: "Glykogénsyntáza",
  match: ["glykogénsyntáz\\w*"],
  short: "Riadiaci enzým syntézy glykogénu: prenesie glukózu z UDP-glukózy na neredukujúci koniec väzbou α(1→4).",
  body:
    "<ul>" +
      "<li><b>Fosforylácia ju vypína</b> — proteínkináza A a ďalšie kinázy (napr. GSK-3); čím viac fosfátov, tým menšia aktivita.</li>" +
      "<li><b>Inzulín ju zapína</b> — cez proteínfosfatázu 1 a vypnutím GSK-3.</li>" +
      "<li><b>Glukóza-6-fosfát</b> ju alostericky zapne aj fosforylovanú.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Vie reťazec len predlžovať, nezačne ho. A na fosfát reaguje opačne než fosforyláza – preto obe nikdy nebežia naraz.</p>'
},
{
  id: "vetviaci-enzym",
  title: "Vetviaci enzým",
  match: ["vetviac\\w* enzým\\w*"],
  short: "Odštiepi z konca narasteného reťazca úsek šiestich až ôsmich glukóz a pripojí ho väzbou α(1→6) hlbšie v reťazci – vzniknú dva konce namiesto jedného.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Keď chýba (glykogenóza typu IV), glykogén má dlhé nerozvetvené reťazce, je zle rozpustný a poškodzuje pečeň.</p>'
},
{
  id: "glykogenfosforylaza",
  title: "Glykogénfosforyláza",
  match: ["glykogénfosforyláz\\w*", "fosforyláz\\w*", "fosforolýz\\w*"],
  short: "Riadiaci enzým rozkladu glykogénu: štiepi koncovú väzbu α(1→4) anorganickým fosfátom (fosforolýza) na glukóza-1-fosfát.",
  body:
    "<ul>" +
      "<li><b>Koenzým</b> — pyridoxalfosfát (derivát vitamínu B<sub>6</sub>).</li>" +
      "<li><b>Zastane</b> štyri zvyšky pred vetvením.</li>" +
      "<li><b>Forma <i>b</i></b> (bez fosfátu) je neaktívna, <b>forma <i>a</i></b> (s fosfátom) aktívna.</li>" +
      "<li><b>Alostéria</b> — v pečeni ju brzdí glukóza, vo svale zapína AMP; všade ju brzdí glukóza-6-fosfát a ATP.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Glukóza opúšťa glykogén už fosforylovaná – bunka ušetrí ATP a z glykogénu má glykolýza čistý zisk tri ATP namiesto dvoch.</p>'
},
{
  id: "fosforylazakinaza",
  title: "Fosforylázakináza",
  match: ["fosforylázakináz\\w*", "kalmodulín\\w*"],
  short: "Kináza, ktorá pridá fosfát glykogénfosforyláze; sama je zapínaná proteínkinázou A a vápnikom.",
  body:
    '<p class="chain">proteínkináza A → fosforylázakináza–Ⓟ → fosforyláza <i>a</i> (aktívna)</p>' +
    "<ul>" +
      "<li><b>Kalmodulín</b> je jednou z jej podjednotiek – viaže Ca<sup>2+</sup>.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Ca<sup>2+</sup>, ktorý spustí kontrakciu svalu, tým istým iónom zapne aj rozklad glykogénu – bez čakania na hormón.</p>'
},
{
  id: "odvetvujuci-enzym",
  title: "Odvetvujúci enzým",
  match: ["odvetvujúc\\w* enzým\\w*"],
  short: "Enzým s dvoma aktivitami, ktorý rieši miesto vetvenia glykogénu: transferáza presunie tri zvyšky, α(1→6)-glukozidáza štvrtý odštiepi vodou ako voľnú glukózu.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Keď chýba (glykogenóza typu III), fosforyláza zastane pri vetveniach a ostane glykogén s krátkymi vonkajšími vetvami.</p>'
},
{
  id: "glukoza-6-fosfataza",
  title: "Glukóza-6-fosfatáza",
  match: ["glukóza-6-fosfatáz\\w*"],
  short: "Enzým endoplazmatického retikula pečene a obličky: odštiepi fosfát z glukóza-6-fosfátu a uvoľní glukózu do krvi.",
  body:
    "<ul>" +
      "<li><b>Ukončuje dve dráhy</b> — rozklad glykogénu aj glukoneogenézu.</li>" +
      "<li><b>Sval a mozog</b> ju nemajú.</li>" +
      "<li><b>Translokáza</b> najprv prenesie glukóza-6-fosfát do retikula.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Jeden enzým rozhoduje, že štyristo gramov svalového glykogénu nezdvihne glykémiu. Jej deficit je glykogenóza typu Ia.</p>'
},
{
  id: "glykogenozy",
  title: "Glykogenózy",
  match: ["glykogenóz\\w*"],
  short: "Vrodené defekty enzýmov metabolizmu glykogénu; glykogén sa hromadí, má chybnú stavbu alebo sa nedá použiť.",
  body:
    "<ul>" +
      "<li><b>Pečeňové</b> — hypoglykémia nalačno + zväčšená pečeň (prototyp: typ Ia).</li>" +
      "<li><b>Svalové</b> — slabosť a kŕče pri námahe, glykémia v norme (prototyp: typ V).</li>" +
      "<li><b>Typ II (Pompe)</b> — lyzozómová α-glukozidáza; hromadenie v lyzozómoch, glykémia normálna.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Stačí vedieť, ktorý enzým a v ktorom tkanive chýba – obraz sa dá odvodiť z úlohy glykogénu v ňom.</p>'
},
{
  id: "von-gierke",
  title: "Glykogenóza typu Ia (von Gierkeho choroba)",
  match: ["von Gierkeho chorob\\w*", "typ\\w* Ia"],
  short: "Deficit glukóza-6-fosfatázy; pečeň nevie vydať glukózu z glykogénu ani z glukoneogenézy.",
  body:
    '<p class="chain">za blokom chýba glukóza → ťažká hypoglykémia nalačno<br>pred blokom sa hromadí glukóza-6-fosfát → viac glykogénu → hepatomegália<br>bočnou cestou do glykolýzy → ↑ laktát</p>' +
    "<ul>" +
      "<li><b>Laboratórium</b> — nízka glykémia nalačno, zvýšený laktát, triacylglyceroly a kyselina močová.</li>" +
      "<li><b>Liečba</b> — nepretržitý prísun glukózy: časté jedlá, surový kukuričný škrob.</li>" +
    "</ul>"
},
{
  id: "mcardle",
  title: "Glykogenóza typu V (McArdleho choroba)",
  match: ["McArdleho chorob\\w*"],
  short: "Deficit svalovej glykogénfosforylázy; sval nevie použiť vlastný glykogén.",
  body:
    "<ul>" +
      "<li><b>Obraz</b> — bolesť a kŕče svalov pri námahe, niekedy tmavý moč (myoglobín).</li>" +
      "<li><b>Záťažový test</b> — laktát nestúpne.</li>" +
      "<li><b>Glykémia</b> normálna – pečeň má vlastný izoenzým.</li>" +
    "</ul>"
},
{
  id: "hepatomegalia",
  title: "Hepatomegália",
  match: ["hepatomegáli\\w*"],
  short: "Zväčšenie pečene; pri pečeňových glykogenózach z nahromadeného glykogénu.",
  body: ""
},
{
  id: "glukozaoxidaza",
  title: "Glukózaoxidáza a peroxidáza",
  match: ["glukózaoxidáz\\w*", "peroxidáz\\w*"],
  short: "Dva spriahnuté enzýmy, ktorými sa stanovuje glukóza: prvý ju špecificky oxiduje a vzniká peroxid vodíka, druhý ním vyfarbí chromogén.",
  body:
    '<p class="chain">glukóza + O<sub>2</sub> → (glukózaoxidáza) → kyselina glukónová + H<sub>2</sub>O<sub>2</sub><br>H<sub>2</sub>O<sub>2</sub> + bezfarebný chromogén → (peroxidáza) → farebný produkt → absorbancia ∝ glukóza</p>' +
    '<p class="why"><b>Prečo to je dôležité.</b> Staršie redukčné skúšky reagovali aj s inými redukujúcimi látkami. Enzým reaguje len s glukózou – na tom istom princípe pracujú prúžky glukomerov.</p>'
},
{
  id: "lyzozym", title: "Lyzozým", match: ["lyzozým\\w*"],
  short: "Enzým vrodenej obrany: rozrušuje stenu baktérií tým, že vodou rozpája cukrové jednotky jej polysacharidu. Glykozidáza, ktorá neslúži tráveniu.",
  body: ""
},
{
  id: "fruktozovy-sirup", title: "Fruktózový sirup", match: ["fruktózov\\w* sirup\\w*"],
  short: "Sladidlo z kukuričného škrobu: zmes voľnej glukózy a fruktózy približne pol na pol. Zložením ako sacharóza, ktorú netreba štiepiť.",
  body: ""
},
{
  id: "prebiotikum", title: "Prebiotikum a probiotikum", match: ["prebiotik\\w*", "probiotik\\w*"],
  short: "Prebiotikum je látka, ktorú črevné mikroorganizmy výberovo využívajú s prospechom pre hostiteľa. Probiotikum sú živé mikroorganizmy podávané pre ich zdravotný účinok.",
  body: ""
}
);
