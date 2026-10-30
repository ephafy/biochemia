/* Glosár BIOCHEM — doplnok k celku „metabolizmus a regulácia“ (kap. 2).
   Formát záznamu: assets/glossary/README.md. Texty sú vlastné (CLAUDE.md §4.1), písané z faktov kapitoly. */
(window.PF_GLOSSARY = window.PF_GLOSSARY || []).push(
{
  id: "metabolizmus",
  title: "Metabolizmus",
  match: ["metabolizm(?:us|u|e|om)"],
  short: "Spôsob, akým telo palivo z potravy sčasti hneď spáli, sčasti uloží a zo zásob ho zasa uvoľní presne vtedy a tam, kde treba.",
  body:
    "<ul>" +
      "<li><b>Cesty</b> — kade palivo prúdi a kde sa ukladá.</li>" +
      "<li><b>Riadenie</b> — čo rozhoduje, ktorou cestou a ako rýchlo prúdi.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Človek jedáva po hodinách, no bunky potrebujú energiu nepretržite – metabolizmus tento rozpor rieši.</p>'
},
{
  id: "energeticka-hodnota-paliv",
  title: "Energetická hodnota živín",
  match: ["energetick\\w* hodnot\\w*", "kJ/g"],
  short: "Na gram nesú sacharidy a bielkoviny 17 kJ (4 kcal), tuky 38 kJ (9 kcal), etanol 29 kJ (7 kcal).",
  body:
    '<p class="chain">viac redukovaný uhlík → viac vodíka → <b>viac energie na gram</b></p>' +
    '<p class="why"><b>Prečo to je dôležité.</b> Tuk nesie vyše dvojnásobok energie a ukladá sa takmer bez vody, preto je hlavnou zásobou.</p>'
},
{
  id: "zasoby-energie",
  title: "Zásoby energie v tele",
  match: ["zásob\\w* energi\\w*", "tukov\\w* tkani\\w*"],
  short: "U 70-kg muža drží asi 85 % uloženej energie tuk (≈ 15 kg, ≈ 570 MJ); glykogén svalov a pečene spolu necelé 2 %.",
  body:
    "<ul>" +
      "<li><b>Tuk</b> — tukové tkanivo má asi 15 % vody, sval okolo 80 %.</li>" +
      "<li><b>Glykogén</b> — malý, no mobilizuje sa v minútach a dá z neho vzniknúť glukóza.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Bielkoviny zásobou nie sú: každá má funkciu.</p>'
},
{
  id: "sarkopenia",
  title: "Sarkopénia a bielkoviny ako posledná rezerva",
  match: ["sarkopéni\\w*"],
  short: "Úbytok svalovej hmoty; pri dlhom hladovaní alebo ťažkej chorobe telo berie aminokyseliny na tvorbu glukózy zo svalov.",
  body: ""
},
{
  id: "mitochondria",
  title: "Mitochondria",
  match: ["mitochondri\\w*", "matrix"],
  short: "Organela, v ktorej beží β-oxidácia, citrátový cyklus, dýchací reťazec a tvorba ketolátok; bunka bez nej žije len z cytosolovej glykolýzy.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Rozklad MK beží v mitochondrii, ich stavba v cytosole – membrána tak delí dve protismerné dráhy.</p>'
},
{
  id: "endoplazmaticke-retikulum",
  title: "Endoplazmatické retikulum",
  match: ["endoplazmatick\\w* retikul\\w*"],
  short: "Organela, v ktorej sa v pečeni odštiepuje fosfát z glukóza-6-fosfátu a stavajú zložené lipidy.",
  body: ""
},
{
  id: "erytrocyt",
  title: "Erytrocyt",
  match: ["erytrocyt\\w*"],
  short: "Červená krvinka bez mitochondrií; energiu získava len z glykolýzy a žije výlučne z glukózy.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Glykémia nesmie klesnúť nikdy – erytrocyt nemá náhradné palivo.</p>'
},
{
  id: "mozog-a-glukoza",
  title: "Mozog a glukóza",
  match: ["mozog\\w*", "mozgu"],
  short: "Mozog spotrebuje asi 150 g glukózy denne; mastné kyseliny mu ako palivo neslúžia, ketolátky nastupujú až od ≈ 3. dňa hladovania.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Je hlavným dôvodom, prečo telo stráži glykémiu; pri prudkom poklese prichádzajú najprv príznaky z mozgu.</p>'
},
{
  id: "portalna-zila",
  title: "Portálna žila a prvý prechod pečeňou",
  match: ["portáln\\w* žil\\w*"],
  short: "Krv z čreva tečie najprv do pečene a až potom do systémového obehu; pečeň vidí zloženie potravy ako prvá a rozhoduje, čo pustí ďalej.",
  body: ""
},
{
  id: "pomer-insulin-glukagon",
  title: "Pomer inzulínu a glukagónu",
  match: ["pomer inzulínu a glukagónu", "pomer inzulín\\w*"],
  short: "O smere toku na mape nerozhoduje jeden hormón, ale ich pomer: po jedle ↑ inzulín, ↓ glukagón; nalačno opačne.",
  body: ""
},
{
  id: "michaelis-menten",
  title: "Rovnica Michaelisa a Mentenovej",
  match: ["Michaelis\\w*", "Mentenov\\w*"],
  short: "v = Vmax · [S] / (Km + [S]) – popisuje, ako rýchlosť enzýmu rastie so substrátom až po nasýtenie.",
  body:
    '<p class="chain">[S] ≪ Km → rýchlosť úmerná substrátu · [S] = Km → ½ Vmax · [S] ≫ Km → <b>nasýtenie, Vmax</b></p>'
},
{
  id: "afinita",
  title: "Afinita enzýmu k substrátu",
  match: ["afinit\\w*"],
  short: "Nízke Km znamená vysokú afinitu: enzým je nasýtený aj pri nízkej koncentrácii substrátu a zmenu koncentrácie „nevidí“.",
  body: ""
},
{
  id: "aktivacna-energia",
  title: "Aktivačná energia",
  match: ["aktivačn\\w* energi\\w*"],
  short: "Energetická bariéra reakcie; enzým ju znižuje, ale nemení ΔG ani rovnováhu.",
  body: ""
},
{
  id: "aktivne-miesto",
  title: "Aktívne miesto enzýmu",
  match: ["aktívn\\w* miest\\w*"],
  short: "Miesto, kde sa na enzým viaže substrát; kompetitívny inhibítor sa viaže práve sem, nekompetitívny mimo neho.",
  body: ""
},
{
  id: "optimum-ph",
  title: "Optimum pH a teploty",
  match: ["optim\\w* pH", "optimum"],
  short: "Vrchol zvonovej krivky aktivity enzýmu; zodpovedá prostrediu, kde enzým pracuje (pepsín pH 2–3, väčšina ľudských enzýmov 35–40 °C).",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Teplo najprv reakciu zrýchli, potom enzým denaturuje a aktivita padá; chlad enzým nezničí, len spomalí.</p>'
},
{
  id: "endopeptidaza",
  title: "Endopeptidáza",
  match: ["endopeptidáz\\w*"],
  short: "Proteáza, ktorá štiepi peptidové väzby vnútri bielkoviny (pepsín).",
  body: ""
},
{
  id: "kyselina-chlorovodikova", vzorec: ["kyselina-chlorovodikova"],
  title: "Kyselina chlorovodíková v žalúdku",
  match: ["kyselin\\w* chlorovodíkov\\w*", "HCl"],
  short: "Aktivuje pepsinogén a denaturuje bielkoviny potravy, čím odkryje ich peptidové väzby; sama bielkoviny neštiepi.",
  body: ""
},
{
  id: "sigmoidna-krivka",
  title: "Sigmoidná (S) krivka",
  match: ["sigmoidn\\w*"],
  short: "Alosterický enzým prejde v úzkom rozmedzí koncentrácií z takmer nulovej aktivity na takmer plnú – správa sa ako vypínač.",
  body: ""
},
{
  id: "autokataliza-pepsin",
  title: "Autokatalýza",
  match: ["autokatalýz\\w*"],
  short: "Pepsín sám štiepi ďalší pepsinogén, takže aktivácia sa lavínovite zrýchľuje.",
  body: ""
},
{
  id: "trypsin-chymotrypsin",
  title: "Trypsín a chymotrypsín",
  match: ["trypsín\\w*", "chymotrypsín\\w*"],
  short: "Pankreatické proteázy, ktoré vznikajú ako zymogény, aby nestrávili bunku, v ktorej sa tvoria.",
  body: ""
},
{
  id: "prepis-genu",
  title: "Prepis génu a množstvo enzýmu",
  match: ["prepis\\w* gén\\w*", "prepis génov"],
  short: "Rýchlosť prepisu génu a syntézy enzýmu určuje Vmax; prejaví sa po hodinách až dňoch.",
  body: ""
},
{
  id: "kaskada-kinaz",
  title: "Kaskáda kináz a zosilnenie signálu",
  match: ["kaskád\\w* kináz\\w*", "zosilne\\w* signál\\w*"],
  short: "Jedna molekula hormónu cez reťaz kináz mnohonásobne zosilní signál; účinok vydrží, aj keď signál na chvíľu zoslabne.",
  body: ""
},
{
  id: "druhy-posol",
  title: "Druhý posol",
  match: ["druh\\w* poslo\\w*"],
  short: "Molekula v bunke (napr. cAMP), ktorá prenesie signál hormónu z membrány k enzýmom.",
  body: ""
},
{
  id: "receptor-inzulinu",
  title: "Receptor inzulínu (tyrozínkináza)",
  match: ["receptor\\w* inzulín\\w*", "tyrozínkináz\\w*"],
  short: "Receptor, ktorý je sám tyrozínkináza; na konci jeho signálnej cesty stojí fosfoproteínfosfatáza odoberajúca fosfáty z enzýmov.",
  body: ""
},
{
  id: "langerhansove-ostrovceky",
  title: "Langerhansove ostrovčeky: α- a β-bunka",
  match: ["Langerhansov\\w*", "β-bunk\\w*", "α-bunk\\w*"],
  short: "Snímač glykémie: β-bunky vydávajú inzulín, α-bunky glukagón.",
  body:
    '<p class="chain">↑ glukóza → glukokináza → ↑ ATP/ADP → zavrie sa K⁺-kanál závislý od ATP → <b>výdaj inzulínu</b></p>'
},
{
  id: "regulacna-slucka-glykemie",
  title: "Regulačná slučka glykémie",
  match: ["regulačn\\w* slučk\\w*"],
  short: "Odchýlka glykémie vyvolá hormón, ktorý ju vráti; preto je glykémia nalačno u zdravého človeka taká stála.",
  body: ""
},
{
  id: "porusena-glykemia",
  title: "Kritériá glykémie nalačno",
  match: ["porušen\\w* glykémi\\w*"],
  short: "Glukóza v plazme nalačno: < 5,6 mmol/l norma, 5,6–6,9 porušená glykémia, ≥ 7,0 mmol/l (126 mg/dl) diabetes (ADA 2026).",
  body: ""
},
{
  id: "mozgovomiesny-mok",
  title: "Mozgovomiechový mok (likvor)",
  match: ["mozgovomiechov\\w* mok\\w*", "likvor\\w*"],
  short: "Telesná tekutina, ktorá sa pri cielenej otázke vyšetruje popri krvi a moči.",
  body: ""
},
{
  id: "vyslednica-plazma",
  title: "Plazma ako výslednica",
  match: ["výslednic\\w*"],
  short: "Koncentrácia metabolitu v plazme je výslednicou toho, koľko ho tkanivá vydávajú a koľko odoberajú; z jednej hodnoty sa nedá povedať, ktorá strana sa zmenila.",
  body: ""
},
{
  id: "mobilizacia-zasob",
  title: "Mobilizácia zásob",
  match: ["mobilizáci\\w*", "mobilizuj\\w*"],
  short: "Uvoľnenie uloženého paliva do krvi; adrenalín pri záťaži a strese pôsobí rovnakým smerom ako glukagón.",
  body: ""
},
{
  id: "hormon",
  title: "Hormón",
  match: ["hormón(?:y|u|e|om|ov)?"],
  short: "Chemický signál, ktorý povie orgánom, v akom stave je telo; inzulín, glukagón a adrenalín prepínajú dráhy medzi ukladaním a uvoľňovaním.",
  body: ""
},
{
  id: "serin-treonin-tyrozin", vzorec: ["serin", "treonin", "tyrozin"],
  title: "Serín, treonín, tyrozín: miesta fosforylácie",
  match: ["serín\\w*", "treonín\\w*", "tyrozín\\w*"],
  short: "Proteínkináza prenesie fosfát z ATP na hydroxyl serínu, treonínu alebo tyrozínu v enzýme; fosfoproteínfosfatáza ho vodou odštiepi.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Dva záporné náboje fosfátu zmenia tvar enzýmu – niektorý fosforylácia zapne, iný vypne.</p>'
},
{
  id: "hemoglobin",
  title: "Hemoglobín",
  match: ["hemoglobín\\w*"],
  short: "Bielkovina erytrocytov, ktorá nesie kyslík z pľúc k tkanivám; glykáciou jeho koncového valínu vzniká HbA1c.",
  body: ""
},
{
  id: "oxid-uhlicity", vzorec: ["oxid-uhlicity"],
  title: "Oxid uhličitý (CO₂)",
  match: ["oxid\\w* uhličit\\w*", "CO₂"],
  short: "Konečný produkt oxidácie uhlíka v citrátovom cykle; vydýchnu ho pľúca a rozpustený tvorí kyslú zložku hydrogénuhličitanového tlmivého systému.",
  body: ""
},
{
  id: "adp", vzorec: ["adp"],
  title: "ADP — adenozíndifosfát",
  match: ["ADP", "adenozíndifosfát\\w*"],
  short: "Produkt štiepenia ATP (ATP + H₂O → ADP + Pᵢ); adenylátkináza z dvoch ADP vyrobí ATP a AMP.",
  body: ""
},
{
  id: "glycerol", vzorec: ["glycerol"],
  title: "Glycerol",
  match: ["glycerol(?:u|e|om)?"],
  short: "Trojuhlíkový alkohol, na ktorého hydroxyly sú v triacylglyceroloch naviazané mastné kyseliny; pri hladovaní je jedným zo substrátov glukoneogenézy.",
  body: ""
},
{
  id: "fosfat-anorganicky", vzorec: ["hydrogenfosfat"],
  title: "Anorganický fosfát (Pᵢ)",
  match: ["anorganick\\w* fosfát\\w*"],
  short: "Fosfát uvoľnený hydrolýzou ATP; glykogénfosforyláza ním štiepi väzbu glykogénu.",
  body: ""
}
);
