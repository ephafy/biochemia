/* Glosár BIOCHEM — doplnok k celku „lipidy a mastné kyseliny“ (kap. 8).
   Formát záznamu: assets/glossary/README.md. Texty sú vlastné (CLAUDE.md §4.1), písané z faktov kapitoly. */
(window.PF_GLOSSARY = window.PF_GLOSSARY || []).push(
{
  id: "monoacylglycerol", vzorec: ["2-monoacylglycerol"],
  title: "2-Monoacylglycerol",
  match: ["2-monoacylglycerol\\w*", "monoacylglycerol\\w*"],
  short: "Produkt pankreatickej lipázy: glycerol s jednou mastnou kyselinou v strednej polohe. Enterocyt na ňom stavia TAG nanovo, stačí pripojiť dve MK.",
  body:
    '<p class="chain">TAG → (lipáza, polohy 1 a 3) → <b>2-monoacylglycerol + 2 MK</b> → micela → enterocyt → resyntéza TAG</p>'
},
{
  id: "cholesterolesteraza-fosfolipaza", vzorec: ["fosfatidylcholin", "lyzolecitin"],
  title: "Cholesterolesteráza a fosfolipáza A₂",
  match: ["cholesterolesteráz\\w*", "cholesterylesterhydroláz\\w*", "fosfolipáz\\w* A₂", "lyzolecitín\\w*"],
  short: "Cholesterolesteráza rozloží estery cholesterolu na voľný cholesterol a MK; fosfolipáza A₂ (proenzým aktivovaný trypsínom) odštiepi MK z polohy 2 fosfolipidu, ostane lyzofosfolipid – sám dobrý detergent.",
  body: ""
},
{
  id: "glycin-taurin", vzorec: ["glycin", "taurin"],
  title: "Konjugácia žlčových kyselín s glycínom a taurínom",
  match: ["glycín\\w*", "taurín\\w*"],
  short: "Aminokyseliny glycín a taurín; v pečeni sa s nimi spájajú žlčové kyseliny (amfipatické deriváty cholesterolu), ktoré potom pôsobia ako detergent.",
  body: ""
},
{
  id: "vitaminy-rozpustne-v-tukoch", vzorec: ["retinol", "cholekalciferol", "alfa-tokoferol", "fylochinon"],
  title: "Vitamíny rozpustné v tukoch (A, D, E, K)",
  match: ["vitamín\\w* A, D, E a K", "vitamín\\w* A, D, E, K", "vitamín\\w* rozpustn\\w* v tukoch", "vitamínov A, D, E a K"],
  short: "Zmiešaná micela ich prenesie k enterocytu spolu s MK a cholesterolom; pri steatorei sa vstrebávajú horšie.",
  body:
    "<ul>" +
      "<li><b>Vitamín A</b> — zrak (rodopsín); nedostatok: šeroslepota.</li>" +
      "<li><b>Vitamín D</b> — hospodárenie s vápnikom; nedostatok: rachitída, osteomalácia.</li>" +
      "<li><b>Vitamín E</b> — antioxidant v membránach.</li>" +
      "<li><b>Vitamín K</b> — zrážanie krvi; nedostatok: krvácavosť.</li>" +
    "</ul>"
},
{
  id: "vitamin-k", vzorec: ["fylochinon"],
  title: "Vitamín K a krvácavosť",
  match: ["vitamín\\w* K", "krvácavos\\w*"],
  short: "Pri cystickej fibróze a iných poruchách vstrebávania tuku chýba vitamín K, čo sa prejaví krvácavosťou.",
  body: ""
},
{
  id: "resynteza-tag",
  title: "Resyntéza TAG v enterocyte",
  match: ["resyntéz\\w*", "acyltransferáz\\w*"],
  short: "Dlhé MK sa v hladkom ER enterocytu aktivujú na acyl-CoA a acyltransferázy ich pripoja späť na 2-monoacylglycerol; vznikne znova TAG pre jadro chylomikrónu.",
  body:
    '<p class="chain">2-monoacylglycerol + 2 acyl-CoA → <b>TAG</b> → + estery cholesterolu, apo B-48 (MTP) → chylomikrón → lymfa</p>' +
    '<p class="why"><b>Prečo to je dôležité.</b> Do bunky vstupujú len produkty štiepenia; na cestu vodou lymfy a krvi musí tuk znova zbaliť do TAG v nosiči. Krátke a stredne dlhé MK sa nezbaľujú – idú rovno do portálnej krvi.</p>'
},
{
  id: "lymfa-miazgovod",
  title: "Lymfa a hrudníkový miazgovod",
  match: ["lymf(?:a|y|e|u|ou)", "miazgovod\\w*", "exocytóz\\w*"],
  short: "Chylomikrón sa vylúči exocytózou do lymfy, tá ho hrudníkovým miazgovodom odvedie do ľavej podkľúčnej žily; tuk z potravy tak obchádza pečeň pri prvom prechode.",
  body: ""
},
{
  id: "albumin",
  title: "Albumín",
  match: ["albumín\\w*"],
  short: "Krvná bielkovina, ktorá nesie voľné mastné kyseliny uvoľnené z tukových zásob (a krátke a stredne dlhé MK z portálnej krvi).",
  body: ""
},
{
  id: "vldl-hdl",
  title: "VLDL a HDL",
  match: ["VLDL", "HDL"],
  short: "VLDL vyvážajú z pečene TAG vyrobené z mastných kyselín; HDL odovzdá chylomikrónu apo C-II, ktorý aktivuje lipoproteínovú lipázu.",
  body: ""
},
{
  id: "stukovatena-pecen",
  title: "Stukovatená pečeň (MASLD)",
  match: ["stukovaten\\w*", "MASLD", "NAFLD", "steatotick\\w* chorob\\w* pečene"],
  short: "Hromadenie TAG v pečeni pri nadbytku paliva; od roku 2023 sa volá steatotická choroba pečene spojená s metabolickou dysfunkciou (MASLD), predtým nealkoholová (NAFLD).",
  body:
    '<p class="chain">tuk z potravy + MK z tukového tkaniva + <b>tuk vyrobený z cukru</b> (ATP-citrátlyáza, ACC, syntáza MK – v pečeni ich je viac) → TAG v pečeni</p>' +
    "<ul>" +
      "<li><b>Definícia MASLD</b> — stukovatenie + aspoň jeden z piatich kardiometabolických rizikových faktorov; nie vylúčenie alkoholu.</li>" +
      "<li><b>Fruktóza</b> — obzvlášť ochotný substrát: do glykolýzy vstupuje pod jej riadiacim krokom.</li>" +
      "<li><b>Lieky</b> — inhibítory enzýmov lipogenézy sa skúšajú klinicky.</li>" +
    "</ul>"
},
{
  id: "cftr",
  title: "Chloridový kanál pri cystickej fibróze",
  match: ["chloridov\\w* kanál\\w*"],
  short: "Chybný chloridový kanál zhustí sekrét pankreasu, ktorý upcháva vývody; enzýmy sa do čreva nedostanú a liečbou sú pankreatické enzýmy v kapsule ku každému jedlu.",
  body: ""
},
{
  id: "tioesteraza",
  title: "Tioesteráza syntázy MK",
  match: ["tioesteráz\\w*", "palmitoyltioesteráz\\w*"],
  short: "Po siedmich kolách uvoľní hotový 16-uhlíkový reťazec ako palmitát.",
  body: ""
},
{
  id: "fosfopantetein", vzorec: ["fosfopantetein"],
  title: "4′-Fosfopanteteín",
  match: ["fosfopanteteín\\w*"],
  short: "Rameno z kyseliny pantoténovej s koncovou SH-skupinou, na ktorom sedí acyl; je súčasťou koenzýmu A aj domény ACP.",
  body: ""
},
{
  id: "desaturazy-elongazy",
  title: "Elongácia a desaturácia mastných kyselín",
  match: ["desaturáz\\w*", "desaturáci\\w*", "elongáci\\w*"],
  short: "Enzýmy endoplazmatického retikula predlžujú palmitát po dvoch uhlíkoch (z malonyl-CoA a s NADPH) a desaturázy doň vkladajú dvojité väzby.",
  body:
    "<ul>" +
      "<li><b>Hranica</b> — ľudské desaturázy vkladajú väzbu najďalej po C9 počítaný od karboxylu (prvá: olejová 18:1, Δ9).</li>" +
      "<li><b>Dôsledok</b> — linolová (ω-6) a α-linolénová (ω-3) sa musia prijať v potrave; z linolovej elongáciou a desaturáciou arachidónová.</li>" +
    "</ul>"
},
{
  id: "transkripcny-faktor",
  title: "Transkripčný faktor",
  match: ["transkripčn\\w* faktor\\w*"],
  short: "Bielkovina, ktorá zapína prepis génov: SREBP-1c odpovedá na inzulín, ChREBP na sacharidy; HIF-1α na nedostatok kyslíka.",
  body: ""
},
{
  id: "jadrovy-receptor-ligand",
  title: "Jadrový receptor a ligand",
  match: ["jadrov\\w* receptor\\w*", "ligand\\w*"],
  short: "PPARα je jadrový receptor, ktorého ligandom sú samy mastné kyseliny; pri dlhšom hladovaní zvýši v pečeni, srdci a svale expresiu enzýmov β-oxidácie vrátane CPT I.",
  body: ""
},
{
  id: "etf",
  title: "ETF — prenosový flavoproteín",
  match: ["ETF"],
  short: "Prevezme elektróny z FADH₂ acyl-CoA-dehydrogenázy a odovzdá ich koenzýmu Q.",
  body: ""
},
{
  id: "enoyl-coa-hydrataza", vzorec: ["enoyl-coa", "3-hydroxyacyl-coa"],
  title: "Enoyl-CoA-hydratáza (krotonáza)",
  match: ["enoyl-CoA-hydratáz\\w*", "krotonáz\\w*"],
  short: "Druhý krok β-oxidácie: na dvojitú väzbu trans naviaže vodu a C3 tým získa skupinu OH v konfigurácii L (pri syntéze MK vzniká D-hydroxyacyl).",
  body: ""
},
{
  id: "hydroxyacyl-dehydrogenaza", vzorec: ["3-hydroxyacyl-coa", "3-oxoacyl-coa"],
  title: "3-Hydroxyacyl-CoA-dehydrogenáza",
  match: ["3-hydroxyacyl-CoA-dehydrogenáz\\w*"],
  short: "Tretí krok β-oxidácie: skupinu OH na C3 zmení na oxoskupinu a vodíky prijme NAD⁺; oxoskupina na β-uhlíku umožní štiepenie.",
  body: ""
},
{
  id: "stredne-dlhe-mk",
  title: "Krátke a stredne dlhé mastné kyseliny",
  match: ["stredn\\w* dlh\\w* MK", "stredn\\w* dlh\\w* mastn\\w*", "krátk\\w* a stredn\\w*"],
  short: "Reťazce kratšie než približne 12 uhlíkov idú do portálnej žily bez micely a chylomikrónu (krvou ich nesie albumín) a do mitochondrie vstupujú bez karnitínu.",
  body: ""
},
{
  id: "velmi-dlhe-mk",
  title: "Veľmi dlhé mastné kyseliny",
  match: ["veľmi dlh\\w* MK", "veľmi dlh\\w* mastn\\w*", "veľmi dlh\\w* reťaz\\w*", "veľmi dlh\\w* acyl\\w*"],
  short: "Reťazce od približne 22 uhlíkov mitochondriové enzýmy nespracujú; skracuje ich peroxizóm cez vlastný prenášač, bez karnitínu.",
  body: ""
},
{
  id: "uhliky-alfa-beta-omega",
  title: "Uhlíky α, β a ω",
  match: ["β-uhlík\\w*", "ω-uhlík\\w*"],
  short: "Uhlíky sa počítajú od karboxylu: C1 je karboxyl, C2 α, C3 β a posledný, metylový uhlík ω – podľa nich sú pomenované tri druhy oxidácie.",
  body: ""
},
{
  id: "palmitoyl-coa", vzorec: ["palmitoyl-coa"],
  title: "Palmitoyl-CoA",
  match: ["palmitoyl-CoA", "acyl-CoA s dlhým reťazcom"],
  short: "Konečný produkt dráhy; spätnou väzbou rozpája aktívne vlákna ACC – reťazcov je dosť.",
  body: ""
},
{
  id: "fytanoyl-hydroxylaza",
  title: "Fytanoyl-CoA-hydroxyláza",
  match: ["fytanoyl-CoA-hydroxyláz\\w*"],
  short: "Peroxizómový enzým, ktorý potrebuje Fe²⁺, askorbát a 2-oxoglutarát; hydroxyluje α-uhlík kyseliny fytánovej a karboxylový uhlík odíde ako CO₂ – vznikne kyselina pristánová.",
  body: ""
},
{
  id: "seroslepota",
  title: "Šeroslepota, polyneuropatia, ataxia",
  match: ["šeroslepot\\w*", "polyneuropati\\w*", "ataxi\\w*"],
  short: "Klasický obraz Refsumovej choroby pri nahromadenej kyseline fytánovej: degenerácia sietnice, poškodenie nervov a mozočková ataxia.",
  body:
    "<ul>" +
      "<li><b>Šeroslepota</b> (zlé videnie za šera) je aj včasným prejavom nedostatku vitamínu A – tyčinkám chýba retinal na rodopsín.</li>" +
    "</ul>"
},
{
  id: "myelin",
  title: "Myelín",
  match: ["myelín\\w*"],
  short: "Obal nervových vlákien (glykolipid galaktocerebrozid a sfingomyelín); pri adrenoleukodystrofii ho poškodzujú nahromadené veľmi dlhé MK.",
  body: ""
},
{
  id: "kardiomyopatia",
  title: "Kardiomyopatia",
  match: ["kardiomyopati\\w*"],
  short: "Choroba srdcového svalu; pri poruchách β-oxidácie srdce nedostane energiu z tuku (primárny nedostatok karnitínu, deficity enzýmov pre dlhé reťazce).",
  body: ""
},
{
  id: "nahle-umrtie-dojciat",
  title: "Náhle úmrtie dojčiat",
  match: ["náhl\\w* úmrti\\w* dojčiat"],
  short: "Prvý, nerozpoznaný záchvat deficitu MCAD – po vynechanom nočnom jedle alebo pri infekcii – môže dieťa zabiť; podľa prehľadu z roku 2023 až štvrtinu neliečených. Novorodenecký skríning a pravidlo „nehladovať“ tomu bránia.",
  body: ""
},
{
  id: "akutne-stukovatenie-tehotenstvo",
  title: "Akútne stukovatenie pečene v tehotenstve",
  match: ["akútn\\w* stukovaten\\w* pečene"],
  short: "Môže ho dostať matka, ktorá nosí plod s deficitom dehydrogenázy dlhých 3-hydroxyacylov (LCHAD) alebo celého trifunkčného proteínu; v rovnakej situácii aj syndróm HELLP. Zriedka ho opísali aj pri plode s deficitom CPT1A – plod s poruchou β-oxidácie tak ohrozuje pečeň matky.",
  body: ""
},
{
  id: "mtp-abetalipoproteinemia",
  title: "MTP a abetalipoproteinémia",
  match: ["MTP", "mikrozómov\\w* prenášač\\w* triacylglycerolov", "abetalipoproteinémi\\w*"],
  short: "Mikrozómový prenášač triacylglycerolov (MTP) nakladá tuk na apo B pri skladaní chylomikrónu v čreve a VLDL v pečeni; keď chýba, lipoproteíny s apo B nevzniknú – abetalipoproteinémia.",
  body:
    '<p class="chain">chýba MTP → TAG sa nedostane na apo B-48 → chylomikrón sa nezloží → tuk ostane v kvapôčkach v črevnej stene (a v pečeni) → steatorea</p>' +
    '<p class="why"><b>Prečo to je dôležité.</b> Steatorea pri normálnej žlči, enzýmoch aj sliznici: vstrebanie tuku sa končí až jeho zbalením na odvoz.</p>'
},
{
  id: "elastaza-stolica",
  title: "Elastáza-1 v stolici",
  match: ["elastáz\\w*-1 v stolici", "elastáz\\w* v stolici", "exokrinn\\w* nedostatočnos\\w*"],
  short: "Neinvazívny test exokrinnej nedostatočnosti pankreasu, ktorý odporúča európske odporúčanie z roku 2025: čím menej elastázy v stolici, tým pravdepodobnejšia nedostatočnosť.",
  body:
    "<ul>" +
      "<li><b>Prah</b> — pevný neexistuje; bežne sa používa 200 µg/g, pod 100 µg/g svedčí o ťažkej forme.</li>" +
      "<li><b>Prečo nie lipáza v sére</b> — vyhasnutý pankreas enzým netvorí, v sére nestúpa.</li>" +
      "<li><b>Kedy steatorea</b> — až keď sekrécia enzýmov klesne o viac než 90 %.</li>" +
    "</ul>"
},
{
  id: "enoyl-coa-izomeraza",
  title: "Nenasýtené MK v β-oxidácii: izomeráza a reduktáza",
  match: ["enoyl-CoA-izomeráz\\w*", "2,4-dienoyl-CoA-reduktáz\\w*"],
  short: "Pomocné enzýmy β-oxidácie pre dvojité väzby cis, ktoré nie sú tam, kde ich hydratáza potrebuje.",
  body:
    "<ul>" +
      "<li><b>Enoyl-CoA-izomeráza</b> — presunie väzbu z polohy 3 do polohy 2 (trans); stačí pri väzbe na nepárnom uhlíku, napr. olejová (Δ9).</li>" +
      "<li><b>2,4-Dienoyl-CoA-reduktáza</b> — pri viacnásobne nenasýtených (linolová) navyše; spotrebuje NADPH.</li>" +
    "</ul>" +
    '<p class="why"><b>Bilancia.</b> Kde väzba už je, odpadá krok s FAD – nenasýtená MK dá o niečo menej ATP než nasýtená.</p>'
},
{
  id: "acylglyciny", vzorec: ["hexanoylglycin"],
  title: "Acylglycíny",
  match: ["acylglycín\\w*", "hexanoylglycín\\w*", "suberylglycín\\w*"],
  short: "Acyly naviazané na glycín; pri deficite MCAD sa nimi bunka zbavuje nahromadených stredne dlhých reťazcov a vylučuje ich močom (hexanoylglycín, suberylglycín).",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> U bezpríznakových môže byť profil acylkarnitínov normálny – acylglycíny v moči diagnózu aj tak ukážu.</p>'
},
{
  id: "glycerolkinaza", vzorec: ["glycerol", "glycerol-3-fosfat"],
  title: "Glycerolkináza",
  match: ["glycerolkináz\\w*"],
  short: "Fosforyluje glycerol na glycerol-3-fosfát. Má ju pečeň a oblička, bielemu tukovému tkanivu chýba – preto glycerol z lipolýzy aj z chylomikrónov odchádza krvou do pečene na glukoneogenézu.",
  body: ""
},
{
  id: "karboxylacia", vzorec: ["biotin"],
  title: "Karboxylácia s biotínom",
  match: ["karboxyláci\\w*", "karboxyluj\\w*"],
  short: "Pripojenie CO₂ z hydrogenuhličitanu na uhlík substrátu. Robia ju karboxylázy s kovalentne viazaným biotínom a vždy pritom minú ATP.",
  body:
    '<p class="chain">biotín + HCO₃⁻ + ATP → karboxybiotín → CO₂ prejde na substrát</p>' +
    "<ul>" +
      "<li><b>Pyruvátkarboxyláza</b> — pyruvát → oxalacetát (glukoneogenéza, doplnenie cyklu).</li>" +
      "<li><b>Acetyl-CoA-karboxyláza</b> — acetyl-CoA → malonyl-CoA (riadiaci krok syntézy MK).</li>" +
      "<li><b>Propionyl-CoA-karboxyláza</b> — propionyl-CoA → metylmalonyl-CoA (nepárne MK, aminokyseliny).</li>" +
    "</ul>"
},
{
  id: "lipoproteiny",
  title: "Lipoproteín a apolipoproteín",
  match: ["lipoproteín(?:u|y|ov|och|om|mi|e)?", "apolipoproteín\\w*"],
  short: "Častica, v ktorej krv a lymfa nesú lipidy: jadro z TAG a esterov cholesterolu, obal z fosfolipidov, voľného cholesterolu a bielkovín – apolipoproteínov.",
  body:
    "<ul>" +
      "<li><b>Triedy</b> — chylomikróny (tuk z čreva), VLDL (tuk z pečene), LDL, HDL; podrobne kap. 11.</li>" +
      "<li><b>Apolipoproteíny</b> — kostra a adresa častice: apo B-48 drží chylomikrón pokope, apo C-II zapína lipoproteínovú lipázu, apo E ho nechá vychytať pečeňou.</li>" +
    "</ul>"
},
{
  id: "adipocyt",
  title: "Adipocyt (tuková bunka)",
  match: ["adipocyt\\w*"],
  short: "Bunka bieleho tukového tkaniva, vyplnená kvapkou TAG. Po jedle tuk ukladá, nalačno ho vydáva; glycerol sama nespracuje, lebo nemá glycerolkinázu.",
  body:
    "<ul>" +
      "<li><b>Po jedle</b> — inzulín zvýši lipoproteínovú lipázu na kapilárach; MK z chylomikrónov a VLDL sa uložia ako TAG.</li>" +
      "<li><b>Nalačno, záťaž</b> — adrenalín a glukagón → cAMP → ATGL a HSL → MK na albumíne a glycerol do krvi.</li>" +
    "</ul>"
}
);
