/* Glosár BIOCHEM — pentózofosfátová dráha, NADPH, fruktóza, galaktóza, glukuronát a glykokonjugáty (kap. 5).
   Formát záznamu: assets/glossary/README.md. Texty sú vlastné (CLAUDE.md §4.1). */
(window.PF_GLOSSARY = window.PF_GLOSSARY || []).push(
{
  id: "pentozofosfatova-draha",
  title: "Pentózofosfátová dráha",
  match: ["pentózofosfátov\\w* dráh\\w*", "pentózov\\w* cykl\\w*", "hexózamonofosfátov\\w* skrat\\w*"],
  short: "Odbočka z glukóza-6-fosfátu v cytosole, ktorá netvorí ATP, ale NADPH a ribóza-5-fosfát.",
  body:
    '<p class="chain">oxidačná časť (nevratná): glukóza-6-fosfát → ribulóza-5-fosfát + CO₂ + <b>2 NADPH</b><br>neoxidačná časť (vratná): 3 pentózy ⇌ 2 fruktóza-6-fosfát + glyceraldehyd-3-fosfát</p>' +
    "<ul>" +
      "<li><b>Riadi ju</b> glukóza-6-fosfátdehydrogenáza; brzdí ju vlastný produkt NADPH.</li>" +
      "<li><b>Najsilnejšia</b> je tam, kde sa tvorí tuk a steroidy, a v erytrocyte.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Erytrocyt nemá iný zdroj NADPH – pri poruche dráhy nevie zneškodniť peroxidy.</p>'
},
{
  id: "g6pd",
  title: "Glukóza-6-fosfátdehydrogenáza (G6PD)",
  match: ["glukóza-6-fosfátdehydrogenáz\\w*", "G6PD"],
  short: "Prvý, nevratný a riadiaci enzým pentózofosfátovej dráhy: oxiduje uhlík 1 glukóza-6-fosfátu a redukuje NADP⁺ na NADPH.",
  body:
    "<ul>" +
      "<li><b>Brzda</b> — NADPH (kompetitívne); keď sa NADPH míňa, enzým sa odbrzdí.</li>" +
      "<li><b>Množstvo</b> — inzulín zvyšuje prepis génu.</li>" +
      "<li><b>V laboratóriu</b> — s hexokinázou tvorí metódu na stanovenie glukózy (NADPH pri 340 nm).</li>" +
    "</ul>"
},
{
  id: "deficit-g6pd",
  title: "Deficit glukóza-6-fosfátdehydrogenázy",
  match: ["deficit\\w* glukóza-6-fosfátdehydrogenáz\\w*", "deficit\\w* dehydrogenáz\\w*", "favizm\\w*"],
  short: "Najčastejšia enzýmová porucha človeka (gén na chromozóme X): erytrocyt nevyrobí dosť NADPH a po oxidačnej záťaži sa rozpadá.",
  body:
    '<p class="chain">↓ NADPH → glutatión ostáva oxidovaný → peroxidy poškodia hemoglobín a membránu → <b>hemolýza</b></p>' +
    "<ul>" +
      "<li><b>Spúšťače</b> — infekcia, lieky s oxidačným účinkom (primachín, sulfónamidy), bôb (favizmus).</li>" +
      "<li><b>Klasifikácia WHO 2022</b> — triedy A, B, C a U; staršie I–V.</li>" +
      "<li><b>Pasca merania</b> — tesne po hemolýze môže aktivita vyjsť normálne (ostali mladé krvinky).</li>" +
    "</ul>"
},
{
  id: "heinzove-telieska", title: "Heinzove telieska", match: ["Heinzov\\w* teliesk\\w*"],
  short: "Zrazeniny denaturovaného hemoglobínu pri membráne erytrocytu; vznikajú, keď sa oxidujú jeho SH-skupiny – typicky pri deficite glukóza-6-fosfátdehydrogenázy.",
  body: ""
},
{
  id: "transketolaza",
  title: "Transketoláza",
  match: ["transketoláz\\w*"],
  short: "Enzým neoxidačnej časti pentózofosfátovej dráhy: prenáša dvojuhlíkový zvyšok z ketózy na aldózu; potrebuje tiamíndifosfát.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Jej aktivita v erytrocytoch pred pridaním a po pridaní tiamíndifosfátu je testom zásob tiamínu.</p>'
},
{
  id: "transaldolaza", title: "Transaldoláza", match: ["transaldoláz\\w*"],
  short: "Enzým neoxidačnej časti pentózofosfátovej dráhy: prenáša trojuhlíkový zvyšok z ketózy na aldózu; koenzým nepotrebuje.",
  body: ""
},
{
  id: "riboza-5-fosfat", title: "Ribóza-5-fosfát", match: ["ribóza-5-fosfát\\w*", "ribózu-5-fosfát"],
  short: "Päťuhlíkový cukorfosfát, stavebný kameň nukleotidov; vzniká z ribulóza-5-fosfátu izomerázou alebo preskupením medziproduktov glykolýzy.",
  body: ""
},
{
  id: "tiamindifosfat",
  title: "Tiamíndifosfát",
  match: ["tiamíndifosfát\\w*", "tiamín\\w*"],
  short: "Koenzým z vitamínu B₁; drží zvyšok, ktorý vznikne prerušením väzby vedľa karbonylu – v transketoláze a v dehydrogenázových komplexoch oxokyselín.",
  body:
    "<ul>" +
      "<li><b>Kde pracuje</b> — transketoláza, pyruvátdehydrogenázový komplex (E1), 2-oxoglutarátdehydrogenáza.</li>" +
      "<li><b>Nedostatok</b> — pyruvát sa nespáli → laktát stúpa, mozog nemá ATP (Wernickeho-Korsakovov syndróm, beri-beri).</li>" +
    "</ul>"
},
{
  id: "glutation",
  title: "Glutatión (GSH, GSSG)",
  match: ["glutatión\\w*", "GSH", "GSSG"],
  short: "Tripeptid s SH-skupinou cysteínu; redukovaná forma (GSH) odovzdáva vodíky peroxidom a mení sa na disulfid (GSSG), ktorý späť redukuje NADPH.",
  body:
    '<p class="chain">H₂O₂ + 2 GSH → (glutatiónperoxidáza, selén) → 2 H₂O + GSSG → (glutatiónreduktáza, NADPH) → 2 GSH</p>' +
    '<p class="why"><b>Prečo to je dôležité.</b> Spája pentózofosfátovú dráhu s ochranou erytrocytu: bez NADPH sa glutatión neobnoví.</p>'
},
{
  id: "respiracne-vzplanutie",
  title: "Respiračné vzplanutie",
  match: ["respiračn\\w* vzplanut\\w*", "NADPH-oxidáz\\w*"],
  short: "Prudká spotreba kyslíka vo fagocyte: NADPH-oxidáza prenesie elektrón z NADPH na O₂ a vzniknutý superoxid sa mení na látky, ktoré zabijú pohltenú baktériu.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Vrodený defekt oxidázy = chronická granulomatózna choroba: baktérie sú pohltené, ale prežijú.</p>'
},
{
  id: "chronicka-granulomatozna-choroba", title: "Chronická granulomatózna choroba", match: ["chronick\\w* granulomatózn\\w* chorob\\w*"],
  short: "Vrodený defekt NADPH-oxidázy fagocytov: ťažké opakované infekcie a granulómy okolo neusmrtených mikróbov.",
  body: ""
},
{
  id: "fruktokinaza",
  title: "Fruktokináza",
  match: ["fruktokináz\\w*"],
  short: "Enzým pečene, obličky a čreva, ktorý fosforyluje fruktózu na uhlíku 1 (fruktóza-1-fosfát); nebrzdí ho produkt ani neriadi inzulín.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Jeho deficit je neškodný (esenciálna fruktozúria) – voľná fruktóza odíde močom.</p>'
},
{
  id: "aldolaza-b",
  title: "Aldoláza B",
  match: ["aldoláz\\w* B"],
  short: "Izoenzým aldolázy v pečeni, obličke a čreve; štiepi fruktóza-1-fosfát na dihydroxyacetónfosfát a glyceraldehyd (a tiež fruktóza-1,6-bisfosfát).",
  body: ""
},
{
  id: "intolerancia-fruktozy",
  title: "Hereditárna intolerancia fruktózy",
  match: ["intoleranc\\w* fruktózy", "hereditárn\\w* intoleranc\\w* fruktózy"],
  short: "Deficit aldolázy B: fruktóza-1-fosfát sa hromadí, viaže fosfát a pečeň po fruktóze nevydá glukózu.",
  body:
    '<p class="chain">fruktóza-1-fosfát ↑ → ↓ Pᵢ, ↓ ATP → stojí glykogenolýza aj glukoneogenéza → <b>hypoglykémia</b>; AMP → kyselina močová</p>' +
    "<ul>" +
      "<li><b>Kedy</b> — po prechode z mlieka na stravu s ovocím a sacharózou.</li>" +
      "<li><b>Liečba</b> — vylúčiť fruktózu, sacharózu a sorbitol.</li>" +
    "</ul>"
},
{
  id: "esencialna-fruktozuria", title: "Esenciálna fruktozúria", match: ["esenciáln\\w* fruktozúri\\w*", "fruktozúri\\w*"],
  short: "Deficit fruktokinázy: fruktóza sa nefosforyluje a odchádza močom; bez ťažkostí.",
  body: ""
},
{
  id: "polyolova-draha",
  title: "Polyolová dráha",
  match: ["polyolov\\w* dráh\\w*", "sorbitol\\w*", "aldózareduktáz\\w*", "sorbitoldehydrogenáz\\w*"],
  short: "Glukóza → sorbitol (aldózareduktáza, NADPH) → fruktóza (sorbitoldehydrogenáza, NAD⁺).",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Šošovka, sietnica, nerv a oblička majú len prvý enzým. Pri hyperglykémii sa v nich sorbitol hromadí a viaže vodu – podiel na neskorých následkoch diabetu.</p>'
},
{
  id: "leloirova-draha",
  title: "Leloirova dráha",
  match: ["Leloirov\\w* dráh\\w*", "galaktokináz\\w*", "uridyltransferáz\\w*", "galaktóza-1-fosfáturidyltransferáz\\w*"],
  short: "Premena galaktózy na glukóza-1-fosfát: kináza pridá fosfát, transferáza ho na UDP zamení za glukózu, epimeráza nosič obnoví.",
  body:
    '<p class="chain">galaktóza → galaktóza-1-fosfát → (výmena s UDP-glukózou) → glukóza-1-fosfát + UDP-galaktóza ⇌ UDP-glukóza</p>'
},
{
  id: "epimeraza",
  title: "Epimeráza",
  match: ["epimeráz\\w*", "UDP-galaktóza-4-epimeráz\\w*"],
  short: "Enzým, ktorý obráti polohu hydroxylu na jednom uhlíku cukru, a tak z neho urobí jeho epimér.",
  body:
    "<ul>" +
      "<li><b>V pentózofosfátovej dráhe</b> — ribulóza-5-fosfát ⇌ xylulóza-5-fosfát (uhlík 3).</li>" +
      "<li><b>UDP-galaktóza-4-epimeráza</b> — na nosiči UDP obráti uhlík 4: UDP-galaktóza ⇌ UDP-glukóza.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Epimeráza galaktózy je vratná – telo si galaktózu vyrobí z glukózy, takže v strave nie je nevyhnutná, a zároveň ju tvorí aj pri diéte.</p>'
},
{
  id: "galaktozemia",
  title: "Galaktozémia",
  match: ["galaktozémi\\w*"],
  short: "Skupina dedičných porúch premeny galaktózy; klasická (typ I) je deficit uridyltransferázy.",
  body:
    "<ul>" +
      "<li><b>Typ I</b> — galaktóza-1-fosfát poškodzuje pečeň a mozog, galaktitol šošovku; novorodenec ochorie po mlieku.</li>" +
      "<li><b>Typ II</b> (galaktokináza) — hlavne katarakta. <b>Typ III</b> (epimeráza), <b>typ IV</b> (mutarotáza).</li>" +
      "<li><b>Liečba</b> — doživotná diéta bez galaktózy a laktózy; neskorým ťažkostiam úplne nezabráni.</li>" +
    "</ul>"
},
{
  id: "galaktitol", title: "Galaktitol", match: ["galaktitol\\w*"],
  short: "Cukrový alkohol, ktorý vzniká z nadbytočnej galaktózy aldózareduktázou; ďalej sa nemení a v šošovke viaže vodu → katarakta.",
  body: ""
},
{
  id: "udp-glukuronat",
  title: "UDP-glukuronát",
  match: ["UDP-glukuronát\\w*", "kyselin\\w* glukurónov\\w*", "glukuronát\\w*", "glukuronidáci\\w*"],
  short: "Aktívna forma kyseliny glukurónovej; vzniká oxidáciou uhlíka 6 glukózy priamo na UDP.",
  body:
    "<ul>" +
      "<li><b>Konjugácia</b> — pripojením glukuronátu sa bilirubín, steroidy a lieky stanú rozpustnými a vylúčia sa.</li>" +
      "<li><b>Stavba</b> — jednotka glykozaminoglykánov.</li>" +
    "</ul>"
},
{
  id: "glykozaminoglykan",
  title: "Glykozaminoglykán",
  match: ["glykozaminoglykán\\w*", "chondroitínsulfát\\w*", "heparansulfát\\w*", "dermatansulfát\\w*", "keratansulfát\\w*", "kyselin\\w* hyalurónov\\w*"],
  short: "Dlhý nerozvetvený reťazec z opakujúcej sa dvojice kyslý cukor – aminocukor, husto záporne nabitý; viaže vodu a tvorí gél spojiva.",
  body: ""
},
{
  id: "proteoglykan", title: "Proteoglykán", match: ["proteoglykán\\w*"],
  short: "Bielkovinové jadro s reťazcami glykozaminoglykánov; cukor tvorí väčšinu hmotnosti. V chrupke sa radia na kyselinu hyalurónovú do agregátov.",
  body: ""
},
{
  id: "mukopolysacharidozy", title: "Mukopolysacharidózy", match: ["mukopolysacharidóz\\w*"],
  short: "Vrodené deficity lyzozómových hydroláz: glykozaminoglykány sa nerozložia a hromadia sa v tkanivách; postupné poškodenie kostry, orgánov a často mozgu.",
  body: ""
},
{
  id: "glykoprotein",
  title: "Glykoproteín",
  match: ["glykoproteín\\w*", "N-glykoproteín\\w*", "O-glykoproteín\\w*"],
  short: "Bielkovina s krátkymi, často rozvetvenými cukrovými reťazcami – na kyslíku serínu či treonínu (O-) alebo na dusíku asparagínu (N-).",
  body:
    "<ul>" +
      "<li><b>O-väzba</b> — v Golgiho aparáte, cukry po jednom.</li>" +
      "<li><b>N-väzba</b> — hotový oligosacharid sa postaví na dolichole a naraz prenesie na bielkovinu.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Cukor je aj adresa: manóza-6-fosfát posiela enzýmy do lyzozómu.</p>'
},
{
  id: "glykozylacia", title: "Glykozylácia", match: ["glykozyláci\\w*"],
  short: "Enzýmové, cielené pripojenie cukru na bielkovinu alebo lipid z nukleotidovej formy cukru – na rozdiel od glykácie, ktorá je samovoľná.",
  body: ""
},
{
  id: "dolichol", title: "Dolichol", match: ["dolichol\\w*"],
  short: "Lipid membrány endoplazmatického retikula, na ktorom sa vopred postaví oligosacharid N-glykoproteínov.",
  body: ""
},
{
  id: "i-bunkova-choroba", title: "I-bunková choroba", match: ["I-bunkov\\w* chorob\\w*", "manóza-6-fosfát\\w*"],
  short: "Chýba enzým, ktorý lyzozómovým enzýmom pripája značku manóza-6-fosfát: bunka ich vylúči von a lyzozómy sa plnia nerozloženým materiálom.",
  body: ""
},
{
  id: "selivanovova-reakcia", title: "Selivanovova reakcia", match: ["Selivanovov\\w* reakci\\w*"],
  short: "Dôkaz ketóz: v horúcej kyseline chlorovodíkovej cukor stráca vodu a s rezorcinolom dáva červený produkt; fruktóza reaguje oveľa rýchlejšie než glukóza.",
  body: ""
},
{
  id: "kyselina-slizova", title: "Kyselina slizová (galaktárová)", match: ["kyselin\\w* slizov\\w*", "kyselin\\w* galaktárov\\w*"],
  short: "Dikarboxylová kyselina, ktorá vznikne oxidáciou galaktózy kyselinou dusičnou; je málo rozpustná a vykryštalizuje – dôkaz galaktózy.",
  body: ""
},
{
  id: "mutarotaza", title: "Mutarotáza", match: ["mutarotáz\\w*"],
  short: "Enzým pred galaktokinázou: mení β-galaktózu, ktorá sa uvoľní z laktózy, na α-formu, ktorú kináza prijíma. Jej deficit je galaktozémia typu IV.",
  body: ""
},
{
  id: "draha-kyseliny-uronovej", title: "Dráha kyseliny urónovej", match: ["dráh\\w* kyseliny urónovej"],
  short: "Cesta, ktorou sa glukuronát cez L-gulonát, L-xylulózu a xylitol vracia medzi pentózafosfáty; z L-gulonátu väčšina cicavcov tvorí kyselinu askorbovú, človek nie.",
  body: ""
},
{
  id: "esencialna-pentozuria", title: "Esenciálna pentozúria", match: ["esenciáln\\w* pentozúri\\w*"],
  short: "Neškodná dedičná odchýlka dráhy kyseliny urónovej: L-xylulóza sa nemá čím redukovať a odchádza močom, kde sa prejaví ako redukujúca látka.",
  body: ""
},
{
  id: "paps", title: "PAPS – aktívny sulfát", match: ["PAPS"],
  short: "Fosfoadenozínfosfosulfát: darca sulfátových skupín pre glykozaminoglykány a ďalšie sulfátované látky, podobne ako sú UDP-cukry darcami cukrov.",
  body: ""
},
{
  id: "tioredoxin", title: "Tioredoxín", match: ["tioredoxín\\w*"],
  short: "Malá bielkovina s dvoma SH-skupinami, ktorá prenáša vodíky z NADPH na enzým meniaci ribonukleotidy na deoxyribonukleotidy.",
  body: ""
}
);
