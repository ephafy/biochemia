/* Glosár BIOCHEM — trávenie a odvoz tuku, syntéza a β-oxidácia mastných kyselín, zvláštne reťazce, poruchy, lipáza (kap. 8).
   Formát záznamu: assets/glossary/README.md. Texty sú vlastné (CLAUDE.md §4.1). */
(window.PF_GLOSSARY = window.PF_GLOSSARY || []).push(
{
  id: "emulgacia",
  title: "Emulgácia tuku",
  match: ["emulgáci\\w*", "emulguj\\w*", "emulzi\\w*"],
  short: "Rozbitie tukovej kvapky na množstvo malých; zväčší povrch, na ktorom môže pracovať lipáza.",
  body:
    '<p class="chain">pohyb čreva + soli žlčových kyselín → malé kvapky → veľké rozhranie tuk–voda → lipáza má kde štiepiť</p>' +
    '<p class="why"><b>Prečo.</b> Lipáza je rozpustná vo vode, tuk nie – stretnú sa len na povrchu kvapky.</p>'
},
{
  id: "zlcove-kyseliny", vzorec: ["cholat", "glykocholat", "taurocholat", "deoxycholat"],
  title: "Žlčové kyseliny a ich soli",
  match: ["žlčov\\w* kyselin\\w*", "sol\\w* žlčových kyselín"],
  short: "Amfipatické detergenty zo žlče: emulgujú tuk a s produktmi jeho štiepenia tvoria zmiešané micely.",
  body:
    "<ul>" +
      "<li><b>Stavba</b> — konjugované s glycínom alebo taurínom.</li>" +
      "<li><b>Osud</b> — ostávajú v lúmene, vstrebú sa až v ileu a vracajú sa do pečene.</li>" +
      "<li><b>Keď chýbajú</b> — tuk sa nevstrebe → steatorea.</li>" +
    "</ul>"
},
{
  id: "pankreaticka-lipaza",
  title: "Pankreatická lipáza",
  match: ["pankreatick\\w* lipáz\\w*", "lipáz\\w*"],
  short: "Hlavný enzým trávenia tuku: z triacylglycerolu odštiepi mastné kyseliny v polohách 1 a 3.",
  body:
    '<p class="chain">triacylglycerol → <b>2-monoacylglycerol + 2 mastné kyseliny</b></p>' +
    "<ul>" +
      "<li><b>Pracuje</b> na rozhraní tuk–voda; na povrchu kvapky ju drží kolipáza.</li>" +
      "<li><b>Rezerva</b> — je jej veľký nadbytok; steatorea vzniká až pri poklese sekrécie enzýmov o viac než 90 %.</li>" +
      "<li><b>V sére</b> — stúpa pri poškodení buniek pankreasu; pri akútnej pankreatitíde aspoň na trojnásobok hornej hranice normy.</li>" +
    "</ul>"
},
{
  id: "zaludocna-lipaza", title: "Jazyková a žalúdočná lipáza", match: ["jazykov\\w* lipáz\\w*", "žalúdočn\\w* lipáz\\w*"],
  short: "Lipázy odolné voči kyseline; štiepia najmä triacylglyceroly s krátkymi a stredne dlhými mastnými kyselinami – dôležité u dojčiat a pri nedostatočnosti pankreasu.",
  body: ""
},
{
  id: "kolipaza", title: "Kolipáza", match: ["kolipáz\\w*", "prokolipáz\\w*"],
  short: "Bielkovina pankreasu, ktorá kotví lipázu na povrchu tukovej kvapky, odkiaľ by ju žlčové kyseliny vytlačili; vylučuje sa ako prokolipáza a aktivuje ju trypsín.",
  body: ""
},
{
  id: "orlistat", vzorec: ["orlistat"], title: "Orlistat", match: ["orlistat\\w*"],
  short: "Liek, ktorý sa kovalentne naviaže na serín aktívneho miesta žalúdočnej a pankreatickej lipázy; tuk ostane nerozštiepený a nevstrebe sa.",
  body: ""
},
{
  id: "cholecystokinin", title: "Cholecystokinín (pankreozymín)", match: ["cholecystokinín\\w*", "pankreozymín\\w*"],
  short: "Hormón sliznice dvanástnika a lačníka; na tuk a natrávené bielkoviny v čreve odpovie kontrakciou žlčníka, sekréciou pankreatických enzýmov a spomalením vyprázdňovania žalúdka.",
  body: ""
},
{
  id: "sekretin", title: "Sekretín", match: ["sekretín\\w*"],
  short: "Hormón čreva uvoľnený kyslým obsahom zo žalúdka; pankreas po ňom vylučuje hydrogenuhličitan, takže pH vyhovuje pankreatickým enzýmom.",
  body: ""
},
{
  id: "micela",
  title: "Zmiešaná micela",
  match: ["zmiešan\\w* micel\\w*", "micel\\w*"],
  short: "Drobný útvar zo solí žlčových kyselín, v ktorom sa produkty trávenia tuku prenesú cez vodnú vrstvu k povrchu enterocytu.",
  body:
    "<ul>" +
      "<li><b>Obsah</b> — mastné kyseliny, 2-monoacylglycerol, cholesterol, vitamíny A, D, E a K.</li>" +
      "<li><b>Stavba</b> — hydrofóbne časti dnu, hydrofilné von.</li>" +
      "<li><b>Výnimka</b> — krátke a stredne dlhé mastné kyseliny micelu nepotrebujú.</li>" +
    "</ul>"
},
{
  id: "chylomikron",
  title: "Chylomikrón",
  match: ["chylomikrón\\w*", "apo B-48"],
  short: "Lipoproteín, v ktorom enterocyt posiela znova zložený tuk z potravy lymfou do krvi.",
  body:
    '<p class="chain">enterocyt → lymfa → hrudníkový miazgovod → krv (mimo pečene) → lipoproteínová lipáza v kapilárach</p>' +
    "<ul>" +
      "<li><b>Jadro</b> — triacylglyceroly a estery cholesterolu.</li>" +
      "<li><b>Obal</b> — fosfolipidy, voľný cholesterol a <b>apo B-48</b>, skrátená črevná podoba apolipoproteínu B.</li>" +
      "<li><b>Skladanie</b> — tuk na apo B-48 nakladá MTP; bez neho sa chylomikrón nezloží (abetalipoproteinémia).</li>" +
      "<li><b>Zvyšok</b> po odobratí tuku vychytá pečeň.</li>" +
    "</ul>"
},
{
  id: "lipoproteinova-lipaza",
  title: "Lipoproteínová lipáza",
  match: ["lipoproteínov\\w* lipáz\\w*", "apo C-II"],
  short: "Enzým na endoteli kapilár, ktorý z chylomikrónov uvoľňuje mastné kyseliny pre tkanivo; aktivuje ho apo C-II.",
  body:
    "<ul>" +
      "<li><b>Kde</b> — tukové tkanivo, srdce, kostrový sval, laktujúca mliečna žľaza; nie pečeň dospelého.</li>" +
      "<li><b>Produkty</b> — mastné kyseliny do tkaniva (tuk ich uloží, sval spáli); glycerol krvou do pečene, lebo adipocyt nemá glycerolkinázu.</li>" +
      "<li><b>Riadenie</b> — v tukovom tkanive ju po jedle podporuje inzulín.</li>" +
    "</ul>"
},
{
  id: "steatorea",
  title: "Steatorea",
  match: ["steatore\\w*"],
  short: "Tuk v stolici – znak, že sa tuk nestrávil alebo nevstrebal.",
  body:
    "<ul>" +
      "<li><b>Chýba žlč</b> — prekážka v žlčových cestách, choroba pečene.</li>" +
      "<li><b>Chýbajú enzýmy</b> — chronická pankreatitída, cystická fibróza.</li>" +
      "<li><b>Chorá alebo krátka sliznica</b> — celiakia, skrátené črevo.</li>" +
    "</ul>" +
    '<p class="why"><b>Dôsledok.</b> Strata energie a nedostatok vitamínov A, D, E, K a esenciálnych mastných kyselín.</p>'
},
{
  id: "cysticka-fibroza", title: "Cystická fibróza", match: ["cystick\\w* fibróz\\w*"],
  short: "Choroba, pri ktorej hustý hlien upchá vývody pankreasu; enzýmy sa nedostanú do čreva a tuk sa nestrávi.",
  body: ""
},
{
  id: "atp-citratlyaza",
  title: "ATP-citrátlyáza a citrátový člnok",
  match: ["ATP-citrátlyáz\\w*", "ATP-citrátsyntáz\\w*", "citrátov\\w* člnok", "citrátov\\w* člnk\\w*", "prenášač\\w* trikarboxylátov"],
  short: "Cesta, ktorou sa acetyl-CoA dostane z mitochondrie do cytosolu: vyjde ako citrát a ATP-citrátlyáza ho tam znova rozštiepi.",
  body:
    '<p class="chain">acetyl-CoA + oxalacetát → citrát → von z mitochondrie → citrát + ATP + CoA → <b>acetyl-CoA</b> + oxalacetát</p>' +
    "<ul>" +
      "<li><b>Prečo okľukou</b> — vnútorná membrána koenzým A neprepustí; citrát vyjde prenášačom trikarboxylátov výmenou za malát.</li>" +
      "<li><b>Návrat</b> — oxalacetát → malát (cytosolová malátdehydrogenáza, minie NADH) → pyruvát + <b>NADPH</b> (jablčný enzým) → späť do mitochondrie.</li>" +
      "<li><b>Kedy</b> — keď je v mitochondrii veľa ATP a citrát sa hromadí: signál, že energie aj uhlíka je dosť.</li>" +
      "<li><b>Názov</b> — podľa platného názvoslovia ATP-citrátsyntáza.</li>" +
    "</ul>"
},
{
  id: "jablcny-enzym", title: "Jablčný enzým", match: ["jablčn\\w* enzým\\w*"],
  short: "Cytosolový enzým, ktorý malát dekarboxyluje na pyruvát a pritom redukuje NADP⁺ na NADPH; spolu s pentózofosfátovou dráhou zásobuje syntézu mastných kyselín.",
  body: ""
},
{
  id: "acc",
  title: "ACC — acetyl-CoA-karboxyláza",
  match: ["acetyl-CoA-karboxyláz\\w*", "ACC", "ACC1", "ACC2", "biotínkarboxyláz\\w*", "karboxyltransferáz\\w*"],
  short: "Riadiaci a nevratný krok syntézy mastných kyselín: z acetyl-CoA robí malonyl-CoA.",
  body:
    '<p class="chain">acetyl-CoA + HCO₃⁻ + ATP → <b>malonyl-CoA</b> + ADP + Pᵢ (kofaktor biotín; polkroky biotínkarboxyláza → karboxyltransferáza)</p>' +
    "<ul>" +
      "<li><b>Citrát</b> aktivuje — enzým sa spojí do dlhých polymérov.</li>" +
      "<li><b>Palmitoyl-CoA</b> inhibuje — polymér sa rozpadne.</li>" +
      "<li><b>Fosforylácia</b> (AMPK; glukagón, adrenalín) vypína, <b>inzulín</b> cez fosfatázu zapína.</li>" +
      "<li><b>Množstvo</b> — strava bohatá na sacharidy ho zvyšuje cez SREBP-1c a ChREBP, hladovanie znižuje.</li>" +
      "<li><b>ACC1 × ACC2</b> — ACC1 v cytosole stavia; ACC2 na vonkajšej membráne mitochondrie (pečeň, tuk, kostrový sval) tvorí malonyl-CoA len ako brzdu CPT I.</li>" +
    "</ul>"
},
{
  id: "malonyl-coa", vzorec: ["malonyl-coa"],
  title: "Malonyl-CoA",
  match: ["malonyl-CoA"],
  short: "Trojuhlíkový stavebný článok syntézy mastných kyselín a zároveň inhibítor vstupu mastných kyselín do mitochondrie.",
  body:
    '<p class="chain">syntéza beží → malonyl-CoA ↑ → karnitínpalmitoyltransferáza I zatvorená → β-oxidácia stojí</p>' +
    '<p class="why"><b>Prečo.</b> Jedna molekula zaručí, že čerstvo postavený reťazec sa hneď nespáli.</p>'
},
{
  id: "syntaza-mastnych-kyselin", vzorec: ["acetoacetyl-acp", "3-hydroxybutyryl-acp", "krotonyl-acp", "butyryl-acp"],
  title: "Syntáza mastných kyselín",
  match: ["syntáz\\w* mastných kyselín", "syntáz\\w* MK"],
  short: "Veľký enzým z dvoch rovnakých reťazcov; každý nesie sedem enzýmových aktivít a doménu ACP, na ktorej reťazec rastie.",
  body:
    '<p class="chain">kondenzácia (odíde CO₂) → redukcia (NADPH) → dehydratácia → redukcia (NADPH)</p>' +
    "<ul>" +
      "<li><b>Jedno kolo</b> predĺži reťazec o dva uhlíky z malonyl-CoA.</li>" +
      "<li><b>Sedem kôl</b> → 16 uhlíkov → tioesteráza uvoľní palmitát.</li>" +
    "</ul>"
},
{
  id: "acp", vzorec: ["malonyl-acp"], title: "ACP — bielkovina prenášajúca acyl", match: ["ACP"],
  short: "Doména syntázy mastných kyselín s ramenom 4′-fosfopanteteínu; rastúci reťazec na ňom visí tioesterom rovnako ako na koenzýme A.",
  body: ""
},
{
  id: "palmitat", vzorec: ["palmitat"], title: "Palmitát", match: ["palmitát\\w*"],
  short: "Nasýtená mastná kyselina so 16 uhlíkmi; produkt syntázy mastných kyselín a východisko pre predlžovanie a desaturáciu.",
  body: ""
},
{
  id: "biotin", vzorec: ["biotin"], title: "Biotín", match: ["biotín\\w*"],
  short: "Vitamín kovalentne viazaný na karboxylázy; prenáša CO₂ na substrát. Karboxylácia vždy spotrebuje ATP a hydrogenuhličitan.",
  body: ""
},
{
  id: "acyl-coa-syntetaza", vzorec: ["acyl-coa"], title: "Acyl-CoA-syntetáza (tiokináza)", match: ["acyl-CoA-syntetáz\\w*", "tiokináz\\w*", "acyladenylát\\w*"],
  short: "Aktivuje mastnú kyselinu naviazaním na koenzým A; ATP sa štiepi na AMP a difosfát, takže aktivácia stojí dve makroergické väzby.",
  body:
    '<p class="chain">MK + ATP → acyladenylát (zmiešaný anhydrid s AMP) + PPᵢ → + CoA → <b>acyl-CoA</b> + AMP; PPᵢ → 2 Pᵢ ťahá reakciu</p>' +
    "<ul>" +
      "<li><b>Kde</b> — vonkajšia membrána mitochondrie a ER; v enterocyte pred resyntézou TAG.</li>" +
      "<li><b>Rodina</b> — iný enzým pre stredne dlhé (C4–C11) a iný pre dlhé reťazce.</li>" +
    "</ul>"
},
{
  id: "karnitin", vzorec: ["karnitin", "acylkarnitin"],
  title: "Karnitín a karnitínový člnok",
  match: ["karnitín(?:u|e|om)?", "karnitínov\\w* člnok", "karnitínov\\w* člnk\\w*", "karnitínov\\w* systém\\w*", "acylkarnitín\\w*"],
  short: "Nosič, na ktorom dlhé mastné kyseliny prejdú vnútornou membránou mitochondrie.",
  body:
    '<p class="chain">acyl-CoA + karnitín → acylkarnitín (CPT I) → translokáza dovnútra → acyl-CoA + karnitín (CPT II)</p>' +
    "<ul>" +
      "<li><b>Zmysel</b> — cytosolová a mitochondriová zásoba koenzýmu A ostávajú oddelené.</li>" +
      "<li><b>Zdroj</b> — potrava a syntéza z lyzínu a metionínu v pečeni a obličke.</li>" +
      "<li><b>Výnimka</b> — kyseliny kratšie než 12 uhlíkov karnitín nepotrebujú.</li>" +
    "</ul>"
},
{
  id: "cpt",
  title: "CPT I a CPT II — karnitínpalmitoyltransferázy",
  match: ["karnitínpalmitoyltransferáz\\w* I", "karnitínpalmitoyltransferáz\\w*", "karnitínacyltransferáz\\w*", "CPT I", "CPT II"],
  short: "Dvojica enzýmov karnitínového člnku: CPT I na vonkajšej membráne mitochondrie acyl na karnitín naviaže, CPT II na vnútornej ho vráti koenzýmu A.",
  body:
    "<ul>" +
      "<li><b>CPT I</b> — riadiaci krok odbúrania; inhibuje ju malonyl-CoA, ku ktorému má z vonkajšej membrány priamy prístup.</li>" +
      "<li><b>Revízia</b> — staršie texty kreslia CPT I na vnútornú membránu; dnes vonkajšia.</li>" +
      "<li><b>Deficit CPT I</b> (pečeň) — hypoglykémia bez ketolátok nalačno.</li>" +
      "<li><b>Deficit CPT II</b> (sval dospelých) — bolesť a rozpad svalu, myoglobín v moči po dlhej záťaži alebo hladovaní.</li>" +
    "</ul>"
},
{
  id: "acyl-coa-dehydrogenaza", vzorec: ["acyl-coa", "enoyl-coa"],
  title: "Acyl-CoA-dehydrogenáza",
  match: ["acyl-CoA-dehydrogenáz\\w*"],
  short: "Prvý enzým kola β-oxidácie: s FAD vytvorí dvojitú väzbu medzi uhlíkmi 2 a 3.",
  body:
    "<ul>" +
      "<li><b>Elektróny</b> idú z FADH₂ cez flavoproteín ETF na koenzým Q.</li>" +
      "<li><b>Štyri enzýmy</b> podľa dĺžky reťazca: pre veľmi dlhé, dlhé, stredne dlhé (MCAD) a krátke.</li>" +
    "</ul>"
},
{
  id: "tiolyza", vzorec: ["3-oxoacyl-coa"], title: "Tioláza (β-ketotioláza) a tiolýza", match: ["tioláz\\w*", "tiolýz\\w*", "β-ketotioláz\\w*", "3-ketoacyl-CoA-tioláz\\w*"],
  short: "Posledný krok kola β-oxidácie: koenzým A odštiepi z 3-oxoacyl-CoA acetyl-CoA a ostane acyl-CoA kratší o dva uhlíky. Brzdí ju nahromadený acetyl-CoA; prijatý názov je acetyl-CoA-C-acyltransferáza.",
  body: ""
},
{
  id: "trifunkcny-protein", title: "Mitochondriový trifunkčný proteín", match: ["trifunkčn\\w* proteín\\w*"],
  short: "Enzým vnútornej membrány, ktorý pri dlhých reťazcoch spája druhý až štvrtý krok β-oxidácie; jeho deficit sprevádza kardiomyopatia, retinopatia a neuropatia.",
  body: ""
},
{
  id: "propionyl-coa", vzorec: ["propionyl-coa", "metylmalonyl-coa", "metylmalonat"],
  title: "Propionyl-CoA a jeho cesta na sukcinyl-CoA",
  match: ["propionyl-CoA", "propionyl-CoA-karboxyláz\\w*", "metylmalonyl-CoA", "metylmalonyl-CoA-mutáz\\w*", "metylmalónov\\w*", "racemáz\\w*", "adenozylkobalamín\\w*"],
  short: "Trojuhlíkový zvyšok z mastnej kyseliny s nepárnym počtom uhlíkov; jediná časť mastnej kyseliny, z ktorej môže vzniknúť glukóza.",
  body:
    '<p class="chain">propionyl-CoA → (karboxyláza, biotín, ATP) → D-metylmalonyl-CoA → (racemáza) → L-metylmalonyl-CoA → (mutáza, adenozylkobalamín = B₁₂) → <b>sukcinyl-CoA</b></p>' +
    "<ul>" +
      "<li><b>Zdroje</b> — aj izoleucín, valín, metionín, treonín a bočný reťazec cholesterolu.</li>" +
      "<li><b>Blok</b> — nedostatok B₁₂ alebo deficit mutázy → kyselina metylmalónová v krvi a moči; vrodená forma = metylmalónová acidémia s acidózou u dieťaťa.</li>" +
    "</ul>"
},
{
  id: "peroxizom",
  title: "Peroxizóm a mastné kyseliny",
  match: ["peroxizóm\\w*"],
  short: "Organela, ktorá skracuje veľmi dlhé a rozvetvené mastné kyseliny, s ktorými si mitochondria neporadí.",
  body:
    "<ul>" +
      "<li><b>Prvý krok</b> — oxidáza odovzdá elektróny priamo kyslíku → H₂O₂ (rozloží ho kataláza); ATP z neho nie je.</li>" +
      "<li><b>Vstup</b> — bez karnitínu, vlastným prenášačom.</li>" +
      "<li><b>Dokončenie</b> — skrátené acyly idú do mitochondrie.</li>" +
    "</ul>"
},
{
  id: "adrenoleukodystrofia", title: "X-viazaná adrenoleukodystrofia", match: ["adrenoleukodystrofi\\w*"],
  short: "Chýba prenášač veľmi dlhých mastných kyselín do peroxizómu (gén ABCD1); hromadia sa v krvi, mozgu a nadobličke.",
  body: ""
},
{
  id: "zellwegerov-syndrom", title: "Zellwegerov syndróm", match: ["Zellwegerov\\w* syndróm\\w*"],
  short: "Peroxizómy sa nevytvoria vôbec; hromadia sa veľmi dlhé mastné kyseliny aj kyselina fytánová.",
  body: ""
},
{
  id: "alfa-oxidacia", vzorec: ["fytanat", "pristanat"],
  title: "α-Oxidácia a kyselina fytánová",
  match: ["α-oxidáci\\w*", "fytánov\\w*", "pristánov\\w*"],
  short: "Skrátenie rozvetvenej mastnej kyseliny o jeden uhlík v peroxizóme, aby metyl prestal prekážať β-oxidácii.",
  body:
    '<p class="chain">kyselina fytánová (metyl na β-uhlíku) → hydroxylácia C2, odchod C1 → kyselina pristánová → β-oxidácia</p>' +
    '<p class="why"><b>Zdroj.</b> Fytol chlorofylu – mliečne výrobky, tuk a mäso prežúvavcov, tučné ryby.</p>'
},
{
  id: "refsumova-choroba", title: "Refsumova choroba", match: ["Refsumov\\w* chorob\\w*"],
  short: "Deficit hydroxylázy α-oxidácie: kyselina fytánová sa hromadí → šeroslepota, polyneuropatia, ataxia. Lieči sa diétou; hladovanie hladinu zvyšuje, lebo lipolýza kyselinu uvoľní z tuku.",
  body: ""
},
{
  id: "omega-oxidacia", vzorec: ["suberat"], title: "ω-Oxidácia a dikarboxylové kyseliny", match: ["ω-oxidáci\\w*", "dikarboxylov\\w* kyselin\\w*"],
  short: "Oxidácia metylového konca mastnej kyseliny v endoplazmatickom retikule (monooxygenáza s cytochrómom P450, potom dehydrogenázy) na druhý karboxyl; okrajová dráha, ktorá zosilnie, keď viazne β-oxidácia – dikarboxylové kyseliny (napr. suberát) sa potom objavia v moči.",
  body: ""
},
{
  id: "randlov-cyklus",
  title: "Cyklus glukóza – mastné kyseliny",
  match: ["cykl\\w* glukóza – mastné kyseliny", "Randl\\w*"],
  short: "Keď sval spaľuje mastné kyseliny, šetrí glukózu.",
  body:
    '<p class="chain">β-oxidácia → acetyl-CoA a NADH ↑ → pyruvátdehydrogenázový komplex vypnutý; citrát ↑ → fosfofruktokináza-1 brzdená → menej spálenej glukózy</p>' +
    '<p class="why"><b>Zmysel.</b> Glukóza ostane tkanivám, ktoré mastné kyseliny spaľovať nevedia.</p>'
},
{
  id: "ppar-alfa", title: "PPARα a fibráty", match: ["PPARα", "fibrát\\w*"],
  short: "Jadrový receptor, ktorý po naviazaní mastných kyselín zvyšuje tvorbu enzýmov β-oxidácie v pečeni, srdci a svale; fibráty sa naň viažu a znižujú triacylglyceroly v krvi.",
  body: ""
},
{
  id: "hypoketoticka-hypoglykemia",
  title: "Hypoketotická hypoglykémia",
  match: ["hypoketotick\\w* hypoglykémi\\w*", "hypoglykémi\\w* bez ketolátok"],
  short: "Nízka glukóza bez vzostupu ketolátok pri hladovaní – spoločný znak porúch β-oxidácie.",
  body:
    "<ul>" +
      "<li><b>Chýba acetyl-CoA</b> → pečeň nemá z čoho robiť ketolátky.</li>" +
      "<li><b>Chýba ATP, NADH a aktivátor pyruvátkarboxylázy</b> → glukoneogenéza viazne.</li>" +
      "<li><b>Tkanivá pália glukózu</b> namiesto tuku → zásoba glykogénu sa minie.</li>" +
    "</ul>"
},
{
  id: "deficit-mcad", vzorec: ["oktanoylkarnitin", "hexanoylglycin"],
  title: "Deficit MCAD",
  match: ["deficit\\w* MCAD", "MCAD"],
  short: "Najčastejšia vrodená porucha β-oxidácie: chýba acyl-CoA-dehydrogenáza pre stredne dlhé reťazce.",
  body:
    "<ul>" +
      "<li><b>Kedy</b> — pri dlhšej pauze v jedle alebo bežnej infekcii: vracanie, letargia, kŕče, kóma.</li>" +
      "<li><b>Nález</b> — hypoketotická hypoglykémia, oktanoylkarnitín (C8) v krvi; v moči acylglycíny a dikarboxylové kyseliny; druhotne málo voľného karnitínu.</li>" +
      "<li><b>Liečba</b> — nehladovať; pri chorobe sacharidy, pri vracaní glukóza do žily. Tuky so stredne dlhými MK nepomôžu – vedú priamo k bloku.</li>" +
    "</ul>"
},
{
  id: "novorodenecky-skrining", vzorec: ["oktanoylkarnitin"], title: "Novorodenecký skríning", match: ["novorodeneck\\w* skríning\\w*", "oktanoylkarnitín\\w*", "tandemov\\w* hmotnostn\\w* spektrometri\\w*"],
  short: "Vyšetrenie suchej kvapky krvi novorodenca, ktoré hľadá vrodené poruchy látkovej premeny. Poruchy β-oxidácie prezradí tandemová hmotnostná spektrometria: acyl nahromadený pred blokom sa naviaže na karnitín – pri deficite MCAD oktanoylkarnitín.",
  body: ""
},
{
  id: "primarny-nedostatok-karnitinu", title: "Primárny nedostatok karnitínu", match: ["primárn\\w* nedostat\\w* karnitínu"],
  short: "Porucha prenášača karnitínu: stráca sa močom a nedostane sa do buniek → hypoglykémia bez ketolátok u malých detí, neskôr kardiomyopatia a slabosť svalov; lieči sa karnitínom.",
  body: ""
},
{
  id: "hypoglycin", vzorec: ["hypoglycin-a"], title: "Hypoglycín – jamajská zvracavá choroba", match: ["hypoglycín\\w*", "jamajsk\\w* zvracav\\w* chorob\\w*"],
  short: "Jed z nezrelého plodu aki; jeho metabolit vyradí acyl-CoA-dehydrogenázy pre stredne dlhé a krátke reťazce → získaná porucha β-oxidácie: vracanie a ťažká hypoglykémia po požití.",
  body: ""
},
{
  id: "akutna-pankreatitida",
  title: "Akútna pankreatitída",
  match: ["akútn\\w* pankreatitíd\\w*"],
  short: "Zápal pankreasu; diagnóza stojí na dvoch z troch znakov.",
  body:
    "<ul>" +
      "<li><b>Bolesť</b> — náhla, silná, v nadbrušku, často vyžaruje do chrbta.</li>" +
      "<li><b>Enzým</b> — lipáza alebo amyláza v sére aspoň trojnásobok hornej hranice normy.</li>" +
      "<li><b>Obraz</b> — typický nález na zobrazovacom vyšetrení.</li>" +
    "</ul>" +
    '<p class="why"><b>Lipáza pred amylázou.</b> Je citlivejšia a ostáva zvýšená dlhšie; o závažnosti nehovorí ani jeden enzým.</p>'
},
{
  id: "bempedoova-kyselina", vzorec: ["bempedoova-kyselina"], title: "Kyselina bempedoová", match: ["bempedoov\\w*"],
  short: "Liek, ktorý inhibuje ATP-citrátlyázu; cytosolu tak chýba acetyl-CoA aj na syntézu cholesterolu.",
  body: ""
},
{
  id: "srebp-chrebp", title: "SREBP-1c a ChREBP", match: ["SREBP-1c", "ChREBP"],
  short: "Transkripčné faktory, ktoré pri strave bohatej na sacharidy zvyšujú množstvo enzýmov syntézy mastných kyselín: SREBP-1c odpovedá na inzulín, ChREBP na sacharidy.",
  body: ""
},
{
  id: "lyzofosfolipaza", title: "Lyzofosfolipáza", match: ["lyzofosfolipáz\\w*"],
  short: "Enzým, ktorý z lyzofosfolipidu – fosfolipidu s jedinou mastnou kyselinou – odštiepi aj tú zvyšnú.",
  body: ""
}
);
