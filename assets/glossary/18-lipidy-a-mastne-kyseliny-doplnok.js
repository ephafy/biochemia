/* Glosár BIOCHEM — doplnok k celku „lipidy a mastné kyseliny“ (kap. 8).
   Formát záznamu: assets/glossary/README.md. Texty sú vlastné (CLAUDE.md §4.1), písané z faktov kapitoly. */
(window.PF_GLOSSARY = window.PF_GLOSSARY || []).push(
{
  id: "monoacylglycerol",
  title: "2-Monoacylglycerol",
  match: ["2-monoacylglycerol\\w*", "monoacylglycerol\\w*"],
  short: "Produkt pankreatickej lipázy: glycerol s jednou mastnou kyselinou v strednej polohe. Enterocyt na ňom stavia TAG nanovo, stačí pripojiť dve MK.",
  body:
    '<p class="chain">TAG → (lipáza, polohy 1 a 3) → <b>2-monoacylglycerol + 2 MK</b> → micela → enterocyt → resyntéza TAG</p>'
},
{
  id: "cholesterolesteraza-fosfolipaza",
  title: "Cholesterolesteráza a fosfolipáza A₂",
  match: ["cholesterolesteráz\\w*", "fosfolipáz\\w* A₂", "lyzolecitín\\w*"],
  short: "Cholesterolesteráza rozloží estery cholesterolu na voľný cholesterol a MK; fosfolipáza A₂ (proenzým aktivovaný trypsínom) odštiepi MK z polohy 2 fosfolipidu, ostane lyzofosfolipid – sám dobrý detergent.",
  body: ""
},
{
  id: "glycin-taurin",
  title: "Konjugácia žlčových kyselín s glycínom a taurínom",
  match: ["glycín\\w*", "taurín\\w*"],
  short: "Aminokyseliny glycín a taurín; v pečeni sa s nimi spájajú žlčové kyseliny (amfipatické deriváty cholesterolu), ktoré potom pôsobia ako detergent.",
  body: ""
},
{
  id: "vitaminy-rozpustne-v-tukoch",
  title: "Vitamíny rozpustné v tukoch (A, D, E, K)",
  match: ["vitamín\\w* A, D, E a K", "vitamín\\w* rozpustn\\w* v tukoch", "vitamínov A, D, E a K"],
  short: "Zmiešaná micela ich prenesie k enterocytu spolu s MK a cholesterolom; pri steatorei sa vstrebávajú horšie.",
  body: ""
},
{
  id: "vitamin-k",
  title: "Vitamín K a krvácavosť",
  match: ["vitamín\\w* K", "krvácavos\\w*"],
  short: "Pri cystickej fibróze a iných poruchách vstrebávania tuku chýba vitamín K, čo sa prejaví krvácavosťou.",
  body: ""
},
{
  id: "resynteza-tag",
  title: "Resyntéza TAG v enterocyte",
  match: ["resyntéz\\w*", "acyltransferáz\\w*"],
  short: "Dlhé MK sa v enterocyte aktivujú a acyltransferázy ich pripoja späť na 2-monoacylglycerol; vznikne TAG iný než v potrave, lebo krajné MK sa premiešali.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Rozobratie slúži prechodu cez membránu, zloženie bezpečnému odvozu: voľná MK je amfipatická, teda sama detergent.</p>'
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
  title: "Stukovatená pečeň",
  match: ["stukovaten\\w*"],
  short: "U ľudí so stukovatenou pečeňou je syntéza MK z acetyl-CoA zvýšená a enzýmov dráhy je v ich pečeni viac; novovytvorený tuk prispieva k hromadeniu popri tuku z potravy a z tukového tkaniva.",
  body: ""
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
  match: ["tioesteráz\\w*"],
  short: "Po siedmich kolách uvoľní hotový 16-uhlíkový reťazec ako palmitát.",
  body: ""
},
{
  id: "fosfopantetein",
  title: "4′-Fosfopanteteín",
  match: ["fosfopanteteín\\w*"],
  short: "Rameno z kyseliny pantoténovej s koncovou SH-skupinou, na ktorom sedí acyl; je súčasťou koenzýmu A aj domény ACP.",
  body: ""
},
{
  id: "desaturazy-elongazy",
  title: "Predlžovanie palmitátu a desaturázy",
  match: ["desaturáz\\w*"],
  short: "Enzýmy endoplazmatického retikula predlžujú palmitát po dvoch uhlíkoch (z malonyl-CoA a s NADPH) a desaturázy doň vkladajú dvojité väzby.",
  body: ""
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
  id: "enoyl-coa-hydrataza",
  title: "Enoyl-CoA-hydratáza",
  match: ["enoyl-CoA-hydratáz\\w*"],
  short: "Druhý krok β-oxidácie: na dvojitú väzbu naviaže vodu a C3 tým získa skupinu OH.",
  body: ""
},
{
  id: "hydroxyacyl-dehydrogenaza",
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
  id: "palmitoyl-coa",
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
  body: ""
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
  short: "Nerozpoznaný záchvat deficitu MCAD môže byť smrteľný a patrí k príčinám náhleho úmrtia dojčiat.",
  body: ""
},
{
  id: "akutne-stukovatenie-tehotenstvo",
  title: "Akútne stukovatenie pečene v tehotenstve",
  match: ["akútn\\w* stukovaten\\w* pečene"],
  short: "Môže ho dostať matka, ktorá nosí plod s deficitom dehydrogenázy dlhých hydroxyacylov.",
  body: ""
}
);
