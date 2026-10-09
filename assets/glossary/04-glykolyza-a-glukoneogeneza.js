/* Glosár BIOCHEM — glykolýza, pyruvát a laktát, glukoneogenéza (kap. 4).
   Formát záznamu: assets/glossary/README.md. Texty sú vlastné (CLAUDE.md §4.1). */
(window.PF_GLOSSARY = window.PF_GLOSSARY || []).push(
{
  id: "glykolyza",
  title: "Glykolýza",
  match: ["glykolýz\\w*"],
  short: "Rozklad glukózy na dva pyruváty v cytosole; jediná dráha, ktorou vie ATP vyrobiť každá bunka – aj bez mitochondrií a bez kyslíka.",
  body:
    '<p class="chain">investícia (kroky 1–5): 2 ATP → fruktóza-1,6-bisfosfát → 2 triózy<br>výnos (kroky 6–10): oxidácia (NADH) → 2 × substrátová fosforylácia → 4 ATP</p>' +
    "<ul>" +
      "<li><b>Nevratné kroky</b> — 1 (hexokináza), 3 (fosfofruktokináza-1), 10 (pyruvátkináza).</li>" +
      "<li><b>Čistý zisk</b> — 2 ATP na glukózu; z glykogénu 3.</li>" +
      "<li><b>Bez kyslíka</b> končí laktátom, s kyslíkom pyruvát pokračuje do mitochondrie.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Výhodou anaeróbnej glykolýzy nie je účinnosť, ale rýchlosť a nezávislosť od kyslíka.</p>'
},
{
  id: "glukoneogeneza",
  title: "Glukoneogenéza",
  match: ["glukoneogenéz\\w*"],
  short: "Tvorba novej glukózy z laktátu, alanínu a glycerolu v pečeni (a obličke), keď sa pečeňový glykogén míňa.",
  body:
    "<ul>" +
      "<li><b>Sedem vratných krokov</b> zdieľa s glykolýzou; tri nevratné obchádza vlastnými enzýmami.</li>" +
      "<li><b>Obchádzky</b> — pyruvátkarboxyláza + PEPCK; fruktóza-1,6-bisfosfatáza; glukóza-6-fosfatáza.</li>" +
      "<li><b>Cena</b> — 6 makroergických väzieb (4 ATP + 2 GTP) a 2 NADH na glukózu z pyruvátu.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Mastné kyseliny substrátom nie sú, ale dráhu poháňajú: ich β-oxidácia dodáva ATP a acetyl-CoA, ktorý ju zapína.</p>'
},
{
  id: "pfk-1",
  title: "PFK-1 — fosfofruktokináza-1",
  match: ["fosfofruktokináz\\w*-1", "PFK-1"],
  short: "Enzým tretieho, zaväzujúceho kroku glykolýzy: pridá z ATP druhý fosfát na fruktóza-6-fosfát; hlavný ventil dráhy.",
  body:
    "<ul>" +
      "<li><b>Zapína</b> — AMP a fruktóza-2,6-bisfosfát (aj pri vysokom ATP).</li>" +
      "<li><b>Brzdí</b> — ATP vo vyššej koncentrácii a citrát.</li>" +
      "<li><b>Protihráč</b> — fruktóza-1,6-bisfosfatáza, regulovaná opačne tými istými látkami.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Oba predošlé medziprodukty majú ešte iné cesty, produkt tohto kroku už len glykolýzu. Deficit svalového enzýmu je glykogenóza typu VII.</p>'
},
{
  id: "fruktoza-1-6-bisfosfat",
  title: "Fruktóza-1,6-bisfosfát (Fru-1,6-P₂)",
  match: ["fruktóza-1,6-bisfosfát\\w*", "Fru-1,6-P₂"],
  short: "Produkt fosfofruktokinázy-1; medziprodukt glykolýzy, ktorý aldoláza štiepi na dve triózy.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Dopredu aktivuje pyruvátkinázu. Nepliesť s fruktóza-2,6-bisfosfátom – ten je len signál, nie medziprodukt.</p>'
},
{
  id: "fruktoza-2-6-bisfosfat",
  title: "Fruktóza-2,6-bisfosfát (Fru-2,6-P₂)",
  match: ["fruktóza-2,6-bisfosfát\\w*", "fruktózy-2,6-bisfosfát\\w*", "Fru-2,6-P₂"],
  short: "Signálna molekula, nie medziprodukt: najsilnejší aktivátor fosfofruktokinázy-1 a zároveň inhibítor fruktóza-1,6-bisfosfatázy.",
  body:
    '<p class="chain">nalačno: glukagón → cAMP → proteínkináza A fosforyluje bifunkčný enzým → ↓ <b>Fru-2,6-P<sub>2</sub></b> → glykolýza ↓, glukoneogenéza ↑<br>po jedle: inzulín → defosforylácia → ↑ Fru-2,6-P<sub>2</sub> → glykolýza ↑</p>' +
    '<p class="why"><b>Prečo to je dôležité.</b> Jeden signál otvorí jeden smer a zavrie druhý – takto hormón prepína pečeň medzi spaľovaním a výrobou glukózy.</p>'
},
{
  id: "bifunkcny-enzym",
  title: "Bifunkčný enzým (fosfofruktokináza-2)",
  match: ["fosfofruktokináz\\w*-2", "bifunkčn\\w* enzým\\w*", "enzým\\w* s dvoma doménami"],
  short: "Jediná bielkovina s kinázovou doménou, ktorá fruktóza-2,6-bisfosfát tvorí, a fosfatázovou, ktorá ho rozkladá.",
  body:
    "<ul>" +
      "<li><b>Pečeň</b> — fosforylácia (proteínkináza A) kinázovú doménu vypne, fosfatázovú zapne.</li>" +
      "<li><b>Srdce</b> — iný izoenzým: fosforylácia cez AMPK kinázovú doménu naopak zapne → glykolýza zrýchli.</li>" +
    "</ul>"
},
{
  id: "fruktoza-1-6-bisfosfataza",
  title: "Fruktóza-1,6-bisfosfatáza",
  match: ["fruktóza-1,6-bisfosfatáz\\w*"],
  short: "Enzým druhej obchádzky glukoneogenézy: vodou odštiepi fosfát z fruktóza-1,6-bisfosfátu; brzdí ju fruktóza-2,6-bisfosfát a AMP.",
  body: ""
},
{
  id: "aldolaza",
  title: "Aldoláza",
  match: ["aldoláz\\w*"],
  short: "Lyáza štvrtého kroku glykolýzy: vratne preruší fruktóza-1,6-bisfosfát medzi tretím a štvrtým uhlíkom na dve triózy.",
  body: ""
},
{
  id: "triozafosfaty",
  title: "Triózafosfáty",
  match: ["dihydroxyacetónfosfát\\w*", "glyceraldehyd-3-fosfát\\w*", "triózafosfát\\w*"],
  short: "Dihydroxyacetónfosfát a glyceraldehyd-3-fosfát – dve trojuhlíkové polovice glukózy, ktoré vratne premieňa triózafosfátizomeráza.",
  body:
    "<ul>" +
      "<li><b>Ďalej ide</b> len glyceraldehyd-3-fosfát – nakoniec ním prejde všetko; od tohto miesta sa všetko násobí dvoma.</li>" +
      "<li><b>Napojenia</b> — cez dihydroxyacetónfosfát vstupuje glycerol z tukov, cez glyceraldehyd-3-fosfát sa vracajú cukry z pentózofosfátovej dráhy.</li>" +
    "</ul>"
},
{
  id: "gapdh",
  title: "Glyceraldehyd-3-fosfátdehydrogenáza",
  match: ["glyceraldehyd-3-fosfátdehydrogenáz\\w*"],
  short: "Enzým šiesteho kroku – jedinej oxidácie glykolýzy: elektróny prevezme NAD⁺ a energia sa uloží do väzby s anorganickým fosfátom.",
  body:
    '<p class="chain">aldehyd → úroveň kyseliny; NAD<sup>+</sup> → NADH; + P<sub>i</sub> → <b>1,3-bisfosfoglycerát</b></p>' +
    '<p class="why"><b>Prečo to je dôležité.</b> Potrebuje NAD<sup>+</sup>, ktorého má bunka málo – preto musí niekto NADH obnoviť: dýchací reťazec alebo laktátdehydrogenáza.</p>'
},
{
  id: "13-bisfosfoglycerat",
  title: "1,3-Bisfosfoglycerát",
  match: ["1,3-bisfosfoglycerát\\w*"],
  short: "Medziprodukt glykolýzy s acylfosfátom na uhlíku 1 – zmiešaným anhydridom s vyššou energiou než ATP.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Jeho fosfát prenesie fosfoglycerátkináza na ADP – prvá substrátová fosforylácia glykolýzy.</p>'
},
{
  id: "23-bisfosfoglycerat",
  title: "2,3-Bisfosfoglycerát",
  match: ["2,3-bisfosfoglycerát\\w*"],
  short: "Vzniká odbočkou glykolýzy v erytrocyte; viaže sa na hemoglobín bez kyslíka a znižuje jeho afinitu ku kyslíku.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Hemoglobín vďaka nemu kyslík v tkanivách ľahšie odovzdá. Molekula, ktorá prejde odbočkou, obíde fosfoglycerátkinázu a nedá ATP.</p>'
},
{
  id: "substratova-fosforylacia",
  title: "Substrátová fosforylácia",
  match: ["substrátov\\w* fosforyláci\\w*"],
  short: "Fosfát prejde na ADP priamo z medziproduktu dráhy – bez membrány a bez kyslíka.",
  body:
    "<ul>" +
      "<li><b>V glykolýze dvakrát</b> — krok 7 (z 1,3-bisfosfoglycerátu) a krok 10 (z fosfoenolpyruvátu).</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Tým sa líši od oxidačnej fosforylácie v mitochondrii a robí z glykolýzy núdzový zdroj ATP.</p>'
},
{
  id: "oxidacna-fosforylacia",
  title: "Oxidačná fosforylácia",
  match: ["oxidačn\\w* fosforyláci\\w*"],
  short: "Tvorba ATP v mitochondrii z energie, ktorú uvoľní prenos elektrónov dýchacím reťazcom na kyslík.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Dáva väčšinu ATP: úplná oxidácia glukózy vynesie približne 30–32 ATP (staršie 36–38), samotná glykolýza 2.</p>'
},
{
  id: "fosfoenolpyruvat",
  title: "Fosfoenolpyruvát",
  match: ["fosfoenolpyruvát\\w*"],
  short: "Enolfosfát s najvyššou energiou hydrolýzy v glykolýze; vzniká, keď enoláza odštiepi vodu z 2-fosfoglycerátu.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Pyruvátkináza z neho prenesie fosfát na ADP. Cesta späť od pyruvátu k nemu je prvá obchádzka glukoneogenézy.</p>'
},
{
  id: "enolaza",
  title: "Enoláza a fluorid",
  match: ["enoláz\\w*", "fluorid\\w*"],
  short: "Enoláza je enzým deviateho kroku glykolýzy; brzdí ju fluorid.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Erytrocyty vo vzorke krvi ďalej spotrebúvajú glukózu a tvoria laktát. Fluorid v odberovej skúmavke glykolýzu zastaví – bez neho je glykémia falošne nižšia a laktát falošne vyšší.</p>'
},
{
  id: "pyruvatkinaza",
  title: "Pyruvátkináza",
  match: ["pyruvátkináz\\w*"],
  short: "Enzým desiateho, nevratného kroku glykolýzy: prenesie fosfát z fosfoenolpyruvátu na ADP.",
  body:
    "<ul>" +
      "<li><b>Zapína</b> — fruktóza-1,6-bisfosfát (dopredná aktivácia).</li>" +
      "<li><b>Brzdí</b> — alanín; v pečeni fosforylácia na pokyn glukagónu.</li>" +
      "<li><b>Deficit</b> — asi 95 % vrodených defektov glykolýzy: erytrocyt tvorí málo ATP → chronická hemolytická anémia.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Postihnutý je práve erytrocyt, lebo inú cestu k ATP nemá. Liek mitapivat zostatkový enzým aktivuje.</p>'
},
{
  id: "dopredna-aktivacia",
  title: "Dopredná aktivácia",
  match: ["dopredn\\w* aktiváci\\w*"],
  short: "Medziprodukt zo začiatku dráhy zapne enzým na jej konci – koniec zrýchli vopred a medziprodukty sa nehromadia.",
  body:
    '<p class="chain">PFK-1 pustí viac substrátu → ↑ fruktóza-1,6-bisfosfát → ⊕ pyruvátkináza</p>'
},
{
  id: "pyruvat",
  title: "Pyruvát",
  match: ["pyruvát\\w*"],
  short: "Trojuhlíkový produkt glykolýzy a jedna z troch križovatiek metabolizmu; jeho osud určuje najmä to, kto obnoví NAD⁺.",
  body:
    "<ul>" +
      "<li><b>Acetyl-CoA</b> — pyruvátdehydrogenáza, mitochondria, pri dostatku O<sub>2</sub>.</li>" +
      "<li><b>Laktát</b> — laktátdehydrogenáza; bez mitochondrií, bez O<sub>2</sub>, pri prudkej práci.</li>" +
      "<li><b>Oxalacetát</b> — pyruvátkarboxyláza; pečeň a oblička nalačno.</li>" +
      "<li><b>Alanín</b> — alanínaminotransferáza; sval.</li>" +
    "</ul>"
},
{
  id: "pyruvatdehydrogenaza",
  title: "Pyruvátdehydrogenáza",
  match: ["pyruvátdehydrogenáz\\w*"],
  short: "Mitochondriový enzým, ktorý nevratne mení pyruvát na acetyl-CoA; brzdí ho acetyl-CoA.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Za týmto krokom už cesta späť ku glukóze nevedie. Pri nedostatku tiamínu viazne a stúpa laktát.</p>'
},
{
  id: "laktat",
  title: "Laktát",
  match: ["laktát\\w*"],
  short: "Produkt redukcie pyruvátu; vzniká, aby sa NADH zmenil späť na NAD⁺, keď to nemôže urobiť dýchací reťazec.",
  body:
    "<ul>" +
      "<li><b>Kde vzniká</b> — erytrocyty, leukocyty, šošovka a rohovka, dreň obličky; sval pri prudkej práci.</li>" +
      "<li><b>Kam ide</b> — srdce a pokojové svaly ho spaľujú, pečeň z neho robí glukózu.</li>" +
      "<li><b>V plazme</b> — 0,5–2,2 mmol/l; fyziologicky stúpa po námahe.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Nie je to odpad, ale palivo a stavebná látka. Zvýšená hodnota znamená nepomer medzi tvorbou a odberom.</p>'
},
{
  id: "ld",
  title: "LD — laktátdehydrogenáza",
  match: ["laktátdehydrogenáz\\w*", "LD"],
  short: "Cytosolový enzým, ktorý vratne premieňa pyruvát a laktát: pyruvát + NADH + H⁺ ⇌ laktát + NAD⁺.",
  body:
    "<ul>" +
      "<li><b>Smer</b> určuje pomer NADH : NAD<sup>+</sup> a pyruvát : laktát v danej bunke.</li>" +
      "<li><b>Izoenzýmy</b> — tetramér z podjednotiek M (svalová) a H (srdcová); päť kombinácií od H<sub>4</sub> po M<sub>4</sub>.</li>" +
      "<li><b>V sére</b> — 1,83–4,12 µkat/l; zvýšená aktivita znamená rozpad buniek, izoenzýmy napovedia ktorých.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Tou istou reakciou sa v laboratóriu meria laktát (enzým v nadbytku) aj aktivita enzýmu (substrát v nadbytku) – sleduje sa NADH.</p>'
},
{
  id: "laktatova-acidoza",
  title: "Laktátová acidóza a hyperlaktatémia",
  match: ["laktátov\\w* acidóz\\w*", "hyperlaktatémi\\w*"],
  short: "Hyperlaktatémia je laktát nad referenčným rozpätím; keď pritom klesne pH krvi, ide o laktátovú acidózu.",
  body:
    '<p class="chain">zlyhanie obehu → tkanivá bez O<sub>2</sub> → dýchací reťazec stojí, NADH sa hromadí → pyruvát → laktát + H<sup>+</sup> → ↓ pH → slabne srdce a obeh ⟳</p>' +
    "<ul>" +
      "<li><b>Nadmerná tvorba</b> — šok, sepsa, prudká svalová práca.</li>" +
      "<li><b>Znížený odber</b> — zlyhanie pečene, nedostatok tiamínu, etanol.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Pokles laktátu pri liečbe je znakom, že sa tkanivám vracia kyslík.</p>'
},
{
  id: "warburgov-efekt",
  title: "Warburgov efekt",
  match: ["Warburgov\\w* efekt\\w*"],
  short: "Rýchlo rastúce nádorové bunky štiepia glukózu na laktát vysokou rýchlosťou, hoci kyslík majú.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Pečeň z laktátu späť vyrába glukózu za cenu vlastného ATP – chorý tak platí energiu za palivo nádoru.</p>'
},
{
  id: "pyruvatkarboxylaza",
  title: "Pyruvátkarboxyláza",
  match: ["pyruvátkarboxyláz\\w*"],
  short: "Mitochondriový enzým, ktorý za cenu ATP pripojí CO₂ k pyruvátu → oxalacetát; CO₂ nesie biotín.",
  body:
    "<ul>" +
      "<li><b>Bez acetyl-CoA</b> je takmer neaktívna.</li>" +
      "<li><b>V pečeni</b> — štart glukoneogenézy. <b>Vo svale</b> — dopĺňanie citrátového cyklu.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Keď beží β-oxidácia, acetyl-CoA ňou prepne osud pyruvátu: nie do citrátového cyklu, ale ku glukóze.</p>'
},
{
  id: "oxalacetat",
  title: "Oxalacetát",
  match: ["oxalacetát\\w*"],
  short: "Štvoruhlíkový medziprodukt citrátového cyklu a východisko glukoneogenézy.",
  body:
    '<p class="chain">mitochondria: oxalacetát → malát → prenášač → cytosol: malát → oxalacetát + NADH</p>' +
    '<p class="why"><b>Prečo to je dôležité.</b> Vnútornou membránou mitochondrie neprejde, preto okľuka cez malát – a tá zároveň dodá do cytosolu NADH, ktorý glukoneogenéza potrebuje.</p>'
},
{
  id: "pepck",
  title: "PEPCK — fosfoenolpyruvátkarboxykináza",
  match: ["fosfoenolpyruvátkarboxykináz\\w*", "PEPCK", "karboxykináz\\w*"],
  short: "Enzým prvej obchádzky glukoneogenézy: oxalacetát + GTP → fosfoenolpyruvát + CO₂ + GDP; nevratný.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Jej množstvo sa mení podľa stavu organizmu: glukagón, kortizol a adrenalín prepis jej génu zvyšujú, inzulín ho tlmí.</p>'
},
{
  id: "alanin",
  title: "Alanín",
  match: ["alanín\\w*"],
  short: "Aminokyselina, ktorá vratne vzniká z pyruvátu (alanínaminotransferáza); zo svalu nesie do pečene uhlíky pre glukoneogenézu aj dusík.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Veľa alanínu znamená prísun aminokyselín zo svalov – brzdí pyruvátkinázu a tým podporí glukoneogenézu.</p>'
},
{
  id: "coriho-cyklus",
  title: "Coriho cyklus",
  match: ["Coriho cykl\\w*"],
  short: "Kruh medzi orgánmi: sval a erytrocyt menia glukózu na laktát, pečeň z laktátu vyrába novú glukózu.",
  body:
    '<p class="chain">sval, erytrocyt: glukóza → laktát (+ 2 ATP) → krv → pečeň: laktát → glukóza (− 6 ATP) → krv → späť</p>' +
    '<p class="why"><b>Prečo to je dôležité.</b> Na prvý pohľad je stratový. Pečeň však platí energiou z β-oxidácie – cyklus tak sprostredkuje energiu tukov tkanivám, ktoré tuk nespália.</p>'
},
{
  id: "etanol",
  title: "Etanol a glukoneogenéza",
  match: ["etanol(?:u|e|om)?"],
  short: "Oxidácia etanolu v pečeni mení NAD⁺ na NADH; prebytok NADH odoberie glukoneogenéze substráty.",
  body:
    '<p class="chain">↑ NADH → pyruvát → laktát; oxalacetát → malát → glukoneogenéza stojí → pri vyčerpanom glykogéne <b>hypoglykémia</b> a ↑ laktát</p>'
},
{
  id: "metformin",
  title: "Metformín",
  match: ["metformín\\w*"],
  short: "Najpoužívanejší liek na diabetes 2. typu; glykémiu znižuje hlavne tým, že tlmí glukoneogenézu v pečeni.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Presný mechanizmus je predmetom sporu: staršie vysvetlenie cez dýchací reťazec a AMPK platí len pre koncentrácie vyššie než liečebné; novšie práce ukazujú na zmenu redoxného stavu pečeňovej bunky.</p>'
},
{
  id: "arzenicnan",
  title: "Arzeničnan",
  match: ["arzeničnan\\w*"],
  short: "Zlúčenina päťmocného arzénu, ktorá sa podobá na fosfát a v šiestom kroku glykolýzy zaujme jeho miesto.",
  body:
    '<p class="chain">produkt sa samovoľne rozpadne na 3-fosfoglycerát → krok 7 s jeho ATP sa preskočí → čistý zisk glykolýzy klesne na nulu</p>'
},
{
  id: "hemolyticka-anemia",
  title: "Hemolytická anémia",
  match: ["hemolytick\\w* anémi\\w*", "mitapivat\\w*"],
  short: "Anémia z predčasného zániku erytrocytov; pri deficite pyruvátkinázy ich slezina odstraňuje, lebo pre nedostatok ATP strácajú tvar a pružnosť.",
  body: ""
},
{
  id: "jodacetat", title: "Jódacetát", match: ["jódacetát\\w*"],
  short: "Látka, ktorá obsadí SH-skupinu v aktívnom mieste glyceraldehyd-3-fosfátdehydrogenázy a tým zastaví glykolýzu.",
  body: ""
},
{
  id: "pasteurov-efekt", title: "Pasteurov a Crabtreeho efekt", match: ["Pasteurov\\w* efekt\\w*", "Crabtreeho efekt\\w*"],
  short: "Pasteurov efekt: pri dostatku kyslíka bunka spotrebúva menej glukózy a tvorí menej laktátu. Crabtreeho efekt je opačný: nadbytok glukózy utlmí dýchanie, najmä v rýchlo sa deliacich bunkách.",
  body: ""
}
);
