/* Glosár BIOCHEM — doplnok: priečne pojmy, ktoré sa vracajú vo viacerých kapitolách (kap. 1–8).
   Formát záznamu: assets/glossary/README.md. Texty sú vlastné (CLAUDE.md §4.1), písané z faktov kapitol. */
(window.PF_GLOSSARY = window.PF_GLOSSARY || []).push(
{
  id: "fruktoza",
  title: "Fruktóza",
  match: ["fruktóz(?:a|y|u|e|ou)"],
  short: "Ketóza s rovnakým sumárnym vzorcom ako glukóza, ale s karbonylom na C2; tvorí polovicu sacharózy, je v ovocí, mede a sladidlách zo škrobu.",
  body:
    "<ul>" +
      "<li><b>Vstrebanie</b> — cez GLUT5 po spáde, preto sa veľká dávka nemusí vstrebať celá.</li>" +
      "<li><b>Osud</b> — väčšinu spracuje pečeň: fruktokináza → fruktóza-1-fosfát → aldoláza B → dve triózy, pod riadiacim krokom glykolýzy.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Dráhu nič nebrzdí, takže veľa fruktózy plní syntézu tuku; pri deficite aldolázy B sa hromadí fruktóza-1-fosfát.</p>'
},
{
  id: "galaktoza",
  title: "Galaktóza",
  match: ["galaktóz(?:a|y|u|e|ou)"],
  short: "Epimér glukózy na uhlíku 4; prichádza takmer výlučne z laktózy, ktorú štiepi laktáza.",
  body:
    '<p class="chain">galaktóza → (galaktokináza) → Gal-1-P → (uridyltransferáza) → UDP-galaktóza → (epimeráza) → UDP-glukóza → glukóza-1-fosfát</p>' +
    '<p class="why"><b>Prečo to je dôležité.</b> Voľný cukor enzým „preklopiť“ nevie – musí byť naviazaný na UDP; bez transferázy vzniká klasická galaktozémia.</p>'
},
{
  id: "riboza-deoxyriboza",
  title: "Ribóza a 2-deoxyribóza",
  match: ["ribóz(?:a|y|u|e|ou)", "deoxyribóz\\w*", "2-deoxyribóz\\w*"],
  short: "Päťuhlíkové cukry nukleotidov: ribóza v RNA, 2-deoxyribóza v DNA (chýba jej jeden hydroxyl); s bázou ich spája N-glykozidová väzba.",
  body: ""
},
{
  id: "aminokyselina",
  title: "Aminokyselina",
  match: ["aminokyselin(?:a|y|u|e|ou)", "aminokyselín"],
  short: "Molekula s aminoskupinou, karboxylom, vodíkom a bočným reťazcom R na α-uhlíku; pri pH 7 je obojaký ión a v bielkovinách je L-forma.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Bielkoviny sú reťazce dvadsiatich druhov aminokyselín; pri dlhom hladovaní sú svaly zdrojom aminokyselín pre glukoneogenézu.</p>'
},
{
  id: "bielkovina",
  title: "Bielkovina",
  match: ["bielkovin(?:a|y|u|e|ou)", "bielkovín"],
  short: "Reťazec aminokyselín spojených peptidovými väzbami; slúži ako enzým, prenášač, stavba alebo signál, ale nie ako zásoba.",
  body: ""
},
{
  id: "kyslik",
  title: "Kyslík (O₂)",
  match: ["kyslík(?:u|om)?"],
  short: "Konečný príjemca elektrónov v dýchacom reťazci; citrátový cyklus ho priamo nespotrebúva, a predsa beží len za jeho prítomnosti.",
  body:
    '<p class="chain">NADH, FADH₂ → dýchací reťazec → O₂ + 4 e⁻ + 4 H⁺ → <b>2 H₂O</b></p>'
},
{
  id: "koenzym",
  title: "Koenzým (kosubstrát)",
  match: ["koenzým(?:y|u|e|om|ov)?"],
  short: "Malá molekula, ktorá s enzýmom spolupracuje a prenáša elektróny alebo skupinu; väčšina obsahuje vitamín, ktorý si telo nevyrobí.",
  body:
    "<ul>" +
      "<li><b>NAD⁺, FAD</b> — elektróny (niacín, riboflavín).</li>" +
      "<li><b>CoA</b> — acyl (pantotenát).</li>" +
      "<li><b>Tiamíndifosfát, lipoamid</b> — zvyšky v komplexe pyruvátdehydrogenázy.</li>" +
    "</ul>"
},
{
  id: "sacharidy-v-strave",
  title: "Sacharidy v strave",
  match: ["sacharid(?:y|ov|om|mi)"],
  short: "Dodávajú bežne 40–45 % energie stravy a telo ich prijíma nárazovo; odporúčaný denný príjem je 130 g podľa spotreby mozgu.",
  body: ""
},
{
  id: "svalova-kontrakcia",
  title: "Svalová kontrakcia",
  match: ["kontrakci(?:a|e|i|u|ou)"],
  short: "Pri kontrakcii stúpa Ca²⁺ a AMP: vápnik zapne rozklad glykogénu aj fosfatázu brány, AMP fosforylázu; kreatínfosfát dopĺňa ATP v prvých sekundách.",
  body: ""
},
{
  id: "kostrovy-sval",
  title: "Kostrový sval",
  match: ["kostrov\\w* sval\\w*"],
  short: "Pracuje s glukózou aj MK a má vlastný glykogén (≈ 400 g), no chýba mu glukóza-6-fosfatáza, takže jeho glykogén glykémiu nezdvihne.",
  body: ""
},
{
  id: "srdce",
  title: "Srdce",
  match: ["srdc(?:e|a|u|om)", "srdcov\\w* sval\\w*"],
  short: "Bežne spaľuje mastné kyseliny a laktát; pri nedostatku kyslíka zrýchli glykolýzu (AMPK) a vo veľkej miere spotrebúva MK zo β-oxidácie.",
  body: ""
},
{
  id: "oblicka",
  title: "Oblička",
  match: ["oblič(?:ka|ky|ke|ku|kou)"],
  short: "Vracia do krvi asi 180 g glukózy denne (SGLT v proximálnom tubule), po nočnom lačnení robí asi 10 % glukoneogenézy (pri dlhom hladovaní až 40 %) a vie ju z glutamínu.",
  body: ""
},
{
  id: "hladovanie",
  title: "Hladovanie",
  match: ["hladovani(?:e|a|u|m|i)"],
  short: "Stav po dňoch bez jedla: inzulín veľmi nízky, glukagón vysoký, pečeňový glykogén vyčerpaný, glukoneogenéza a tvorba ketolátok naplno; mozog používa glukózu aj ketolátky.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Acetyl-CoA z MK zatvorí bránu pyruvátdehydrogenázy a otvorí glukoneogenézu – tuk glukózu nedá, ale poháňa jej tvorbu.</p>'
},
{
  id: "nalacno",
  title: "Nalačno",
  match: ["nalačno"],
  short: "Stav medzi jedlami a v noci: ↓ inzulín, ↑ glukagón; pečeň štiepi glykogén a spúšťa glukoneogenézu, tukové tkanivo uvoľňuje mastné kyseliny.",
  body: ""
},
{
  id: "prenasac",
  title: "Prenášač (transportér)",
  match: ["prenášač(?:e|a|om|ov)?", "transportér\\w*"],
  short: "Membránová bielkovina, ktorá prenesie polárnu alebo nabitú látku cez lipidovú dvojvrstvu: GLUT, SGLT, translokáza adenínových nukleotidov, prenášač karnitínu.",
  body: ""
},
{
  id: "sodik",
  title: "Sodík (Na⁺)",
  match: ["Na⁺"],
  short: "V bunke je ho málo, takže ide po spáde dovnútra a vezie cukor (SGLT); spád udržiava Na⁺/K⁺-ATPáza. Dvojnásobok Na⁺ tvorí hlavnú časť vypočítanej osmolality séra.",
  body: ""
},
{
  id: "mocovina",
  title: "Močovina",
  match: ["močovin(?:a|y|u|e|ou)"],
  short: "Molárna hmotnosť 60,1 g/mol (5,0 mmol/l = 30 mg/dl); spolu so sodíkom a glukózou tvorí vypočítanú osmolalitu séra.",
  body: ""
},
{
  id: "zlcnik",
  title: "Žlčník",
  match: ["žlčník\\w*"],
  short: "Cholecystokinín ho stiahne, keď do čreva prídu tuky; žlč s nasolenými žlčovými kyselinami potom emulguje kvapky tuku.",
  body: ""
},
{
  id: "etylenglykol",
  title: "Etylénglykol a toxické alkoholy",
  match: ["etylénglykol\\w*", "toxick\\w* alkohol\\w*"],
  short: "Pri otrave zvyšujú osmolálne okno (meraná minus vypočítaná osmolalita > 10 mosmol/kg) spolu s etanolom a manitolom.",
  body: ""
},
{
  id: "titracia-lipazy",
  title: "Titračné stanovenie lipázy",
  match: ["titračn\\w*", "titruj\\w*", "fenolftaleín\\w*"],
  short: "Sérum štiepi olejovú emulziu pri 37 °C, uvoľnené MK sa titrujú NaOH na fenolftaleín do ružového sfarbenia; rozdiel proti slepej vzorke dá aktivitu v µkat/l (0,22–1,00 µkat/l).",
  body: ""
},
{
  id: "slinny-izoenzym-amylazy",
  title: "Amyláza × lipáza pri pankreatitíde",
  match: ["slinn\\w* izoenzým\\w*"],
  short: "Odporúčania dnes uprednostňujú lipázu: je citlivejšia a ostáva zvýšená dlhšie; amyláza má slinný izoenzým a stúpa aj pri chorobách slinných žliaz.",
  body: ""
},
{
  id: "chronicka-pankreatitida",
  title: "Chronická choroba pankreasu",
  match: ["chronick\\w* pankreatitíd\\w*", "chronick\\w* zápal pankreasu"],
  short: "Zničené tkanivo pankreasu tvorí málo enzýmu: lipáza v sére nestúpa a prejaví sa až jej chýbanie v čreve – steatoreou.",
  body: ""
},
{
  id: "dojca-mlieko",
  title: "Dojča a mlieko",
  match: ["dojč(?:a|iatko|ati|atá|ať)", "dojčen\\w*"],
  short: "Dojča žije z mlieka (laktóza, mliečny tuk s krátkymi a strednými MK); príznaky intolerancie fruktózy sa objavia až s príkrmami, galaktozémie hneď po prvom mlieku.",
  body: ""
},
{
  id: "novorodenec",
  title: "Novorodenec",
  match: ["novorodenc\\w*", "novorodenec"],
  short: "Má nízku aktivitu glukuronyltransferázy (žltačka), ochorie pri galaktozémii v prvých dňoch po mlieku a zohrieva sa najmä hnedým tukom s termogenínom.",
  body: ""
}
);
