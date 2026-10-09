/* Glosár BIOCHEM — štruktúry, reakcie a meranie (kap. 1).
   Formát záznamu: assets/glossary/README.md. Texty sú vlastné (CLAUDE.md §4.1). */
(window.PF_GLOSSARY = window.PF_GLOSSARY || []).push(
{
  id: "funkcna-skupina",
  title: "Funkčná skupina",
  match: ["funkčn\\w* skup\\w*"],
  short: "Skupina atómov na uhlíkovej kostre, ktorá rozhoduje, či sa molekula rozpustí vo vode, či nesie náboj a s čím zreaguje.",
  body:
    "<ul>" +
      "<li><b>Bez náboja pri pH 7</b> — hydroxyl –OH, karbonyl C=O, tiol –SH.</li>" +
      "<li><b>Záporné</b> — karboxyl (–COO<sup>−</sup>), fosfát.</li>" +
      "<li><b>Kladná</b> — aminoskupina (–NH<sub>3</sub><sup>+</sup>).</li>" +
    "</ul>" +
    '<p class="chain">funkčná skupina → reaktivita → typ reakcie a trieda enzýmu</p>' +
    '<p class="why"><b>Prečo to je dôležité.</b> Nabitá molekula sama neprejde membránou. Keď bunka zavesí na glukózu fosfát, glukóza v nej ostane „uväznená“.</p>'
},
{
  id: "kondenzacia-hydrolyza",
  title: "Kondenzácia a hydrolýza",
  match: ["hydrolýz\\w*", "kondenzáci\\w*", "hydrolyzuj\\w*"],
  short: "Dva protismerné deje: kondenzácia spája dve skupiny za odštiepenia vody, hydrolýza väzbu vodou štiepi.",
  body:
    "<ul>" +
      "<li><b>Hydrolýza</b> — uvoľňuje energiu, beží sama, stačí enzým (hydroláza). Preto trávenie nepotrebuje ATP.</li>" +
      "<li><b>Kondenzácia</b> — energiu spotrebúva. Bunka jednotku najprv na účet ATP alebo UTP aktivuje a až potom pripojí.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Rozklad a stavba tej istej molekuly nikdy nejdú rovnakou cestou odzadu – stavba ide cez aktivovaný medziprodukt a stojí ATP.</p>'
},
{
  id: "esterova-vazba",
  title: "Esterová väzba a fosfoester",
  match: ["esterov\\w* väzb\\w*", "fosfoester\\w*", "fosfoesterov\\w*"],
  short: "Väzba karboxylu (ester) alebo fosfátu (fosfoester) s hydroxylom; jej hydrolýza uvoľní málo energie.",
  body:
    "<ul>" +
      "<li><b>Ester</b> — mastná kyselina na glycerole v triacylglycerole; štiepi ho lipáza.</li>" +
      "<li><b>Fosfoester</b> — fosfát na hydroxyle cukru (glukóza-6-fosfát); štiepi ho fosfatáza.</li>" +
      "<li><b>Fosfodiester</b> — fosfát medzi dvoma hydroxylmi (DNA, fosfolipidy).</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Fosfoester má nízku energiu – z glukóza-6-fosfátu sa ATP vyrobiť nedá. Fosfát na fosfáte alebo na karboxyle je anhydrid s vysokou energiou.</p>'
},
{
  id: "anhydridova-vazba",
  title: "Anhydridová väzba",
  match: ["anhydridov\\w*", "anhydrid\\w*", "fosfoanhydrid\\w*"],
  short: "Väzba medzi dvoma kyselinami – fosfát na fosfáte (ATP) alebo fosfát na karboxyle (1,3-bisfosfoglycerát); jej hydrolýza uvoľní veľa energie.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> ATP má jednu esterovú väzbu s nízkou energiou a dve anhydridové s vysokou. V schéme vyzerá krúžok s P rovnako – rozhoduje, na čom visí.</p>'
},
{
  id: "tioester",
  title: "Tioester",
  match: ["tioester\\w*", "tioesterov\\w*"],
  short: "Väzba karboxylu s tiolom (–SH); má vysokú energiu hydrolýzy, porovnateľnú s ATP.",
  body:
    "<ul>" +
      "<li><b>Príklady</b> — acetyl-CoA, acyl-CoA: zvyšok kyseliny visí na tiole koenzýmu A.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Tioester je spôsob, akým bunka aktivuje kyselinu: naviazaná na CoA sa dá preniesť ďalej bez dodania ďalšej energie.</p>'
},
{
  id: "glykozidova-vazba",
  title: "Glykozidová väzba",
  match: ["glykozidov\\w* väzb\\w*", "O-glykozid\\w*", "N-glykozid\\w*"],
  short: "Väzba poloacetálového hydroxylu cukru s hydroxylom (O-glykozid) alebo s dusíkom (N-glykozid).",
  body:
    "<ul>" +
      "<li><b>Názov</b> hovorí, ktorý anomér ktorého cukru sa viaže na ktorý uhlík druhého: maltóza α(1→4), laktóza β(1→4).</li>" +
      "<li><b>N-glykozidová</b> — báza na ribóze v nukleozide.</li>" +
      "<li><b>Štiepi ju</b> glykozidáza, vodou.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Enzým pozná len určitý typ väzby. Človek má enzýmy na α-väzby škrobu, ale nie na β(1→4) celulózy – preto je celulóza vlákninou.</p>'
},
{
  id: "peptidova-vazba",
  title: "Peptidová (amidová) väzba",
  match: ["peptidov\\w* väzb\\w*", "amidov\\w* väzb\\w*"],
  short: "Väzba karboxylu jednej aminokyseliny s aminoskupinou ďalšej; drží primárnu štruktúru bielkoviny.",
  body:
    "<ul>" +
      "<li>Má čiastočne charakter dvojitej väzby: neotáča sa, atómy okolo nej ležia v jednej rovine.</li>" +
      "<li>Štiepi ju peptidáza (proteáza), vodou.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Teplo a extrémne pH ju nerozbijú – denaturovaná bielkovina má reťazec celý, stratila len tvar.</p>'
},
{
  id: "nekovalentne-interakcie",
  title: "Nekovalentné (slabé) interakcie",
  match: ["nekovalentn\\w* interakci\\w*", "slab\\w* interakci\\w*", "vodíkov\\w* mostík\\w*", "hydrofóbn\\w* efekt\\w*", "iónov\\w* interakci\\w*", "van der Waalsov\\w* s\\w*"],
  short: "Štyri druhy slabých príťažlivých síl, ktoré dávajú veľkým molekulám tvar: vodíkový mostík, iónová interakcia, hydrofóbny efekt a van der Waalsove sily.",
  body:
    "<ul>" +
      "<li><b>Vodíkový mostík</b> — vodík na O alebo N a voľný elektrónový pár susedného O alebo N.</li>" +
      "<li><b>Iónová interakcia</b> — opačné náboje; mení sa s pH.</li>" +
      "<li><b>Hydrofóbny efekt</b> — nepolárne časti sa vo vode zhlukujú: jadro bielkoviny, dvojvrstva, micela.</li>" +
      "<li><b>Van der Waalsove sily</b> — tesný dotyk povrchov, ktoré do seba zapadajú.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Jednotlivo sú slabé, spolu určujú tvar enzýmu. Rozbíja ich teplo a extrémne pH – preto od nich závisí aktivita enzýmov.</p>'
},
{
  id: "amfipaticky",
  title: "Amfipatická molekula",
  match: ["amfipatick\\w*"],
  short: "Molekula s polárnou hlavou a nepolárnymi chvostmi; vo vode sa sama usporiada do dvojvrstvy alebo micely.",
  body: ""
},
{
  id: "monosacharid",
  title: "Monosacharid: aldóza a ketóza",
  match: ["monosacharid\\w*", "aldóz\\w*", "ketóz\\w*", "hexóz[ayu]", "trióz[ayu]", "pentóz[ayu]"],
  short: "Najmenšia jednotka sacharidov: aldehyd (aldóza) alebo ketón (ketóza) s viacerými hydroxylmi.",
  body:
    "<ul>" +
      "<li><b>Aldózy</b> — glukóza, galaktóza, manóza, ribóza. <b>Ketóza</b> — fruktóza (karbonyl na C2).</li>" +
      "<li><b>Podľa počtu uhlíkov</b> — triózy až hexózy.</li>" +
      "<li><b>D-rad</b> — hydroxyl na predposlednom uhlíku smeruje vo Fischerovej projekcii doprava; cukry v tele sú takmer všetky D.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Črevná stena prepustí zo sacharidov len monosacharidy – všetko väčšie treba najprv rozštiepiť.</p>'
},
{
  id: "epimer",
  title: "Epimér",
  match: ["epimér\\w*"],
  short: "Cukor, ktorý sa od iného líši polohou hydroxylu na jedinom uhlíku: manóza je epimér glukózy na C2, galaktóza na C4.",
  body: ""
},
{
  id: "anomerny-uhlik",
  title: "Anomérny uhlík, anoméry a mutarotácia",
  match: ["anomérn\\w* uhlík\\w*", "anomér\\w*", "mutarotáci\\w*", "pyranóz\\w*"],
  short: "Uhlík, ktorý sa pri uzavretí kruhu cukru stane novým stereocentrom; jeho hydroxyl stojí pod rovinou kruhu (α) alebo nad ňou (β).",
  body:
    '<p class="chain">karbonyl na C1 + hydroxyl na C5 tej istej glukózy → šesťčlenný kruh (pyranóza) → <b>anomérny uhlík</b> s α alebo β hydroxylom</p>' +
    "<ul>" +
      "<li><b>Mutarotácia</b> — α a β sú v roztoku v rovnováhe cez nepatrné množstvo otvorenej formy; prevažuje β (≈ 62 %).</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Kým je anomérny uhlík voľný, cukor redukuje. Keď je vo väzbe, vzniká glykozid – a typ väzby (α alebo β) určí, ktorý enzým ju rozštiepi.</p>'
},
{
  id: "redukujuci-sacharid",
  title: "Redukujúci sacharid",
  match: ["redukujúc\\w* sacharid\\w*", "redukujúc\\w* cuk\\w*", "neredukujúc\\w* kon\\w*", "redukujúc\\w* kon\\w*"],
  short: "Cukor s voľným anomérnym uhlíkom: kruh sa môže otvoriť, aldehyd sa oxiduje a pritom niečo iné redukuje.",
  body:
    "<ul>" +
      "<li><b>Redukujú</b> — glukóza, maltóza, laktóza. <b>Neredukuje</b> — sacharóza: vo väzbe sú anomérne uhlíky oboch cukrov.</li>" +
      "<li><b>Koniec reťazca</b> — polysacharid má jediný redukujúci koniec a veľa neredukujúcich; na nich enzýmy glukózu pridávajú aj odoberajú.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Na redukcii Cu<sup>2+</sup> stoja dôkazové reakcie (Fehling, Benedict) aj staršie stanovenie glukózy.</p>'
},
{
  id: "disacharidy",
  title: "Disacharidy",
  match: ["disacharid\\w*", "maltóz\\w*", "izomaltóz\\w*", "laktóz\\w*", "sacharóz\\w*"],
  short: "Dva monosacharidy spojené glykozidovou väzbou.",
  body:
    "<ul>" +
      "<li><b>Maltóza</b> — 2 × glukóza, α(1→4); vzniká pri trávení škrobu.</li>" +
      "<li><b>Izomaltóza</b> — 2 × glukóza, α(1→6); z miest vetvenia.</li>" +
      "<li><b>Laktóza</b> — galaktóza + glukóza, β(1→4); mlieko.</li>" +
      "<li><b>Sacharóza</b> — glukóza + fruktóza, spojené oboma anomérnymi uhlíkmi; jediná z nich neredukuje.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Každý disacharid má na kefkovom leme čreva vlastný enzým. Keď chýba, cukor ostane v lúmene a skvasia ho baktérie.</p>'
},
{
  id: "skrob",
  title: "Škrob: amylóza a amylopektín",
  match: ["škrob\\w*", "amylóz\\w*", "amylopektín\\w*"],
  short: "Zásobný polysacharid rastlín z glukózy; zmes nerozvetvenej amylózy a rozvetveného amylopektínu.",
  body:
    "<ul>" +
      "<li><b>Amylóza</b> (13–20 %) — len väzby α(1→4).</li>" +
      "<li><b>Amylopektín</b> (80–87 %) — navyše vetvy väzbou α(1→6) z úsekov dlhých 24–30 glukóz.</li>" +
      "<li><b>Glykogén</b> je stavaný rovnako ako amylopektín, ale vetví sa hustejšie.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Škrob je hlavný sacharid stravy. S jódom dáva tmavomodré sfarbenie – tak sa dá sledovať, ako ho amyláza štiepi.</p>'
},
{
  id: "glykacia",
  title: "Glykácia a HbA1c",
  match: ["glykáci\\w*", "glykovan\\w*", "HbA1c"],
  short: "Neenzýmová väzba aldehydu glukózy na aminoskupinu bielkoviny; na hemoglobíne sa meria ako HbA1c.",
  body:
    '<p class="chain">voľný aldehyd glukózy + aminoskupina bielkoviny → vratne Schiffova báza → po prešmyku nevratne ketoamín</p>' +
    "<ul>" +
      "<li><b>HbA1c</b> — glykovaný koncový valín β-reťazca hemoglobínu; odráža glykémiu za posledné 2–3 mesiace.</li>" +
      "<li><b>Prah pre diabetes</b> — ≥ 48 mmol/mol (6,5 %).</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Čím viac glukózy a čím dlhšie, tým viac glykovanej bielkoviny. Pri hemolýze vychádza HbA1c falošne nízko – erytrocyt nežije dosť dlho.</p>'
},
{
  id: "mastna-kyselina",
  title: "Mastná kyselina (MK)",
  match: ["mastn\\w* kyselin\\w*", "MK"],
  short: "Dlhý uhľovodíkový reťazec s karboxylom na konci; stavebná jednotka väčšiny lipidov a palivo s najvyšším obsahom energie.",
  body:
    "<ul>" +
      "<li><b>Zápis 18:2 Δ9,12</b> — 18 uhlíkov, dve dvojité väzby od 9. a 12. uhlíka počítané od karboxylu; rad ω počíta od metylového konca.</li>" +
      "<li><b>Cis dvojitá väzba</b> zalomí reťazec → nižšia teplota topenia, tekutejšia membrána.</li>" +
      "<li><b>Esenciálne</b> — linolová (ω-6) a α-linolénová (ω-3).</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Uhlíky MK sú silno redukované, preto gram tuku nesie viac energie než gram cukru. MK však končia ako acetyl-CoA – glukóza z nich nevznikne.</p>'
},
{
  id: "triacylglycerol",
  title: "Triacylglycerol (TAG)",
  match: ["triacylglycerol\\w*", "TAG"],
  short: "Glycerol s tromi mastnými kyselinami naviazanými esterovo; nepolárny zásobný tuk.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Ukladá sa takmer bez vody a nesie 38 kJ/g – v tukovom tkanive je asi 85 % uloženej energie tela.</p>'
},
{
  id: "fosfolipid",
  title: "Fosfolipid",
  match: ["glycerolfosfolipid\\w*", "fosfolipid\\w*"],
  short: "Glycerol s dvoma mastnými kyselinami a fosfátom, na ktorom je ďalší alkohol (serín, etanolamín, cholín alebo inozitol); amfipatický lipid membrán.",
  body: ""
},
{
  id: "obojaky-ion",
  title: "Obojaký ión a izoelektrický bod",
  match: ["obojak\\w* ión\\w*", "zwitterion\\w*", "izoelektrick\\w* bod\\w*"],
  short: "Aminokyselina pri pH 7 nesie záporný karboxyl a kladnú aminoskupinu zároveň; izoelektrický bod (pI) je pH, pri ktorom je súčet nábojov nulový.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Pri pI sa molekula v elektrickom poli nepohybuje. Náboj bielkoviny určujú bočné reťazce – a tie sa menia s pH.</p>'
},
{
  id: "struktura-bielkoviny",
  title: "Štruktúra bielkoviny: štyri úrovne",
  match: ["primárn\\w* štruktúr\\w*", "sekundárn\\w* štruktúr\\w*", "terciárn\\w* štruktúr\\w*", "kvartérn\\w* štruktúr\\w*", "α-helix\\w*"],
  short: "Tvar bielkoviny vzniká v štyroch úrovniach a každá stojí na inom druhu väzby.",
  body:
    '<p class="chain">primárna (poradie aminokyselín; peptidové väzby)<br>→ sekundárna (α-helix, β-skladaný list; vodíkové mostíky kostry)<br>→ terciárna (zloženie reťazca; hydrofóbny efekt, iónové interakcie, disulfidové mostíky)<br>→ kvartérna (spojenie podjednotiek)</p>'
},
{
  id: "denaturacia",
  title: "Denaturácia",
  match: ["denaturáci\\w*", "denaturovan\\w*", "denaturuj\\w*"],
  short: "Strata priestorovej štruktúry bielkoviny bez pretrhnutia peptidových väzieb – primárna štruktúra ostáva, funkcia sa stráca.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Povarený enzým je neaktívny aj v správnom pH. Chlad ho naopak len spomalí – po zohriatí sa aktivita vráti.</p>'
},
{
  id: "nukleotid",
  title: "Nukleotid a nukleozid",
  match: ["nukleotid\\w*", "nukleozid\\w*"],
  short: "Nukleozid = báza + pentóza (N-glykozidová väzba); nukleotid = nukleozid + fosfát esterovo na 5′-hydroxyle.",
  body:
    "<ul>" +
      "<li><b>Báza</b> — purín (adenín, guanín) alebo pyrimidín (cytozín, uracil, tymín).</li>" +
      "<li><b>Ďalšie fosfáty</b> sa pripájajú anhydridovo, fosfát na fosfát.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Nukleotid nie je len stavebná jednotka RNA a DNA: nesie energiu (ATP), signál (cAMP) a je základom koenzýmov (NAD<sup>+</sup>, FAD, CoA).</p>'
},
{
  id: "atp",
  title: "ATP — adenozíntrifosfát",
  match: ["ATP"],
  short: "Nukleotid s tromi fosfátmi; univerzálna energetická mena bunky.",
  body:
    "<ul>" +
      "<li><b>Väzby</b> — jedna esterová (nízka energia) a dve anhydridové (vysoká energia); v bunke je viazaný s Mg<sup>2+</sup>.</li>" +
      "<li><b>ΔG°′ hydrolýzy</b> ATP → ADP + P<sub>i</sub> je −30,5 kJ/mol.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> ATP stojí v strede: zlúčeniny s ešte zápornejším ΔG°′ (fosfoenolpyruvát, 1,3-bisfosfoglycerát, kreatínfosfát) mu fosfát odovzdajú, zlúčeniny s menej záporným ho od neho prijímajú.</p>'
},
{
  id: "nad",
  title: "NAD⁺ / NADH",
  match: ["NAD⁺", "NADH"],
  short: "Koenzým dehydrogenáz z vitamínu B₃ (niacínu): NAD⁺ prijme dva elektróny a protón a ako NADH ich nesie do dýchacieho reťazca.",
  body:
    '<p class="chain">substrát stratí 2 H → NAD<sup>+</sup> prijme 2 elektróny a 1 protón → <b>NADH</b> (druhý protón ostane v roztoku)</p>' +
    "<ul>" +
      "<li><b>Redoxný potenciál</b> páru NAD<sup>+</sup>/NADH je −0,32 V; elektróny tečú ku kyslíku (+0,81 V).</li>" +
      "<li><b>V laboratóriu</b> — NADH pohlcuje svetlo pri 340 nm, NAD<sup>+</sup> nie.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Bunka má NAD<sup>+</sup> málo. Ak sa NADH nemá kde zbaviť elektrónov, oxidácie – a s nimi glykolýza – sa zastavia.</p>'
},
{
  id: "nadph",
  title: "NADP⁺ / NADPH",
  match: ["NADP⁺", "NADPH"],
  short: "NAD⁺ s fosfátom navyše; ako NADPH odovzdáva elektróny redukčným syntézam tukov a sterolov a chráni bunku pred oxidáciou.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Katabolizmus používa NAD<sup>+</sup> a FAD (prijímajú elektróny), anabolizmus NADPH (odovzdáva ich) – dva oddelené zásobníky sa dajú riadiť nezávisle.</p>'
},
{
  id: "fad",
  title: "FAD / FADH₂",
  match: ["FAD", "FADH₂"],
  short: "Koenzým z vitamínu B₂ (riboflavínu): prijme dva vodíky v krokoch, v ktorých z –CH₂–CH₂– vzniká dvojitá väzba C=C.",
  body: ""
},
{
  id: "koenzym-a",
  title: "CoA — koenzým A",
  match: ["CoA", "acyl-CoA"],
  short: "Koenzým z vitamínu B₅ (pantotenátu); na svojom tiole nesie acyl – zvyšok kyseliny – ako tioester.",
  body:
    "<ul>" +
      "<li><b>Acyl-CoA</b> — aktivovaná mastná kyselina; vznik tioesteru stojí ATP.</li>" +
      "<li><b>Kde</b> — citrátový cyklus, β-oxidácia, stavba lipidov.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> CoA je tak ako fosfát značka „neopúšťaj bunku“: látka naviazaná na CoA cez membránu sama neprejde.</p>'
},
{
  id: "triedy-enzymov",
  title: "Triedy enzýmov (EC 1–7)",
  match: ["tried\\w* enzým\\w*", "oxidoreduktáz\\w*", "transferáz\\w*", "hydroláz\\w*", "lyáz\\w*", "ligáz\\w*", "translokáz\\w*", "izomeráz\\w*", "dehydrogenáz\\w*", "IUBMB"],
  short: "Triedenie enzýmov podľa typu reakcie; prvé číslo EC povie, čo enzým s molekulou urobí.",
  body:
    "<ul>" +
      "<li><b>1 Oxidoreduktázy</b> — prenášajú elektróny (dehydrogenáza, oxidáza, reduktáza).</li>" +
      "<li><b>2 Transferázy</b> — prenášajú skupinu (kináza, transamináza, fosforyláza).</li>" +
      "<li><b>3 Hydrolázy</b> — štiepia väzbu vodou (fosfatáza, lipáza, peptidáza, glykozidáza).</li>" +
      "<li><b>4 Lyázy</b> — štiepia bez vody a bez oxidácie (aldoláza, dekarboxyláza).</li>" +
      "<li><b>5 Izomerázy</b> — prestavia atómy v tej istej molekule (izomeráza, mutáza, epimeráza).</li>" +
      "<li><b>6 Ligázy</b> — spoja dve molekuly za cenu ATP (syntetáza, karboxyláza).</li>" +
      "<li><b>7 Translokázy</b> — presúvajú ióny a molekuly cez membránu; trieda pridaná v roku 2018.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Názov enzýmu hovorí, čo robí. Kto pozná triedu, vie z názvu prečítať reakciu aj v dráhe, ktorú vidí prvý raz.</p>'
},
{
  id: "kinaza-fosfataza",
  title: "Kináza × fosfatáza × fosforyláza",
  match: ["kináz\\w*", "fosfatáz\\w*"],
  short: "Tri enzýmy s podobným menom a inou reakciou: kináza prenáša fosfát z ATP, fosfatáza ho odštiepi vodou, fosforyláza štiepi väzbu anorganickým fosfátom.",
  body:
    "<ul>" +
      "<li><b>Kináza</b> — transferáza; pomenovaná podľa smeru, v ktorom fosfát berie z ATP, aj keď v dráhe beží opačne.</li>" +
      "<li><b>Fosfatáza</b> — hydroláza; ATP sa pri nej nezíska späť.</li>" +
      "<li><b>Fosforyláza</b> — transferáza; produkt opúšťa väzbu už s fosfátom.</li>" +
      "<li><b>Syntáza</b> spája bez ATP, <b>syntetáza</b> s ATP.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Nevratný krok má pre opačný smer vlastný enzým: fosfát dáva kináza, preč ho berie fosfatáza – nie tá istá reakcia odzadu.</p>'
},
{
  id: "oxidacia-redukcia",
  title: "Oxidácia a redukcia",
  match: ["oxidáci\\w*", "redoxn\\w* potenciál\\w*"],
  short: "Oxidácia je strata elektrónov, redukcia ich prijatie; vždy bežia spolu. Uhlík sa oxiduje, keď stratí dva vodíky alebo získa kyslík.",
  body:
    '<p class="chain">–CH<sub>2</sub>– → –CH(OH)– → C=O → –COO<sup>−</sup> → <b>CO<sub>2</sub></b><br>viac vodíka, viac energie ⟶ viac kyslíka, energia odovzdaná</p>' +
    "<ul>" +
      "<li><b>Redoxný potenciál</b> určuje smer: elektróny tečú od páru s nižším potenciálom k páru s vyšším.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Z tohto rebríka vidno energetickú hodnotu živín: uhlíky mastnej kyseliny stoja skoro celé na prvom stupni, uhlíky cukru už na druhom a treťom.</p>'
},
{
  id: "delta-g",
  title: "ΔG — zmena voľnej energie",
  match: ["ΔG", "voľn\\w* energi\\w*", "exergonick\\w*", "endergonick\\w*"],
  short: "Veličina, ktorá hovorí, či reakcia pobeží sama: záporné ΔG = beží (exergonická), kladné = nebeží, kým ju nepoháňa iná (endergonická).",
  body:
    '<p class="chain">ΔG = ΔG°′ + R·T·ln ([produkty] / [substráty])<br>veľa substrátu, málo produktu → ΔG klesá → reakcia beží dopredu</p>' +
    "<ul>" +
      "<li><b>ΔG°′</b> — štandardná hodnota pre 1 mol/l a pH 7; je len iným zápisom rovnovážnej konštanty.</li>" +
      "<li><b>V bunke</b> rozhoduje skutočné ΔG, teda koncentrácie.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> ΔG nie je rýchlosť. Hovorí, či reakcia môže bežať; ako rýchlo, určuje enzým – a ten ΔG ani rovnováhu nemení.</p>'
},
{
  id: "nevratny-krok",
  title: "Vratný a nevratný krok",
  match: ["nevratn\\w* krok\\w*", "vratn\\w* krok\\w*"],
  short: "Vratný krok má v bunke ΔG blízko nuly a smer mu určujú koncentrácie; nevratný má ΔG veľmi záporné a beží len jedným smerom.",
  body:
    "<ul>" +
      "<li><b>Vratný</b> — opačná dráha použije ten istý enzým; regulovať ho sa neoplatí.</li>" +
      "<li><b>Nevratný</b> — opačná dráha potrebuje iný enzým (obchádzku); tu bunka dráhu riadi.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> V schémach je nevratný krok hrubá šípka. Kto hľadá, kde sa dráha reguluje, hľadá hrubé šípky.</p>'
},
{
  id: "spriahnutie",
  title: "Spriahnutie reakcií",
  match: ["spriahnut\\w*", "spriaha\\w*", "spriahnu\\w*"],
  short: "Endergonická reakcia prebehne, ak ju enzým spojí s dostatočne exergonickou – najčastejšie so štiepením ATP; hodnoty ΔG°′ sa sčítavajú.",
  body:
    '<p class="chain">glukóza + P<sub>i</sub> → glukóza-6-fosfát: +13,8 kJ/mol<br>ATP → ADP + P<sub>i</sub>: −30,5 kJ/mol<br><b>súčet (hexokináza): −16,7 kJ/mol</b></p>' +
    '<p class="why"><b>Prečo to je dôležité.</b> Enzým pritom vodu nepoužije – fosfát prenesie z ATP priamo na glukózu. Rozpis na dve polreakcie je len účtovníctvo.</p>'
},
{
  id: "makroergicka-zlucenina",
  title: "Makroergická zlúčenina (väzba)",
  match: ["makroergick\\w*"],
  short: "Zlúčenina, ktorej hydrolýza uvoľní veľa energie; fosfát z nej môže prejsť na ADP alebo jej štiepenie poháňa inú reakciu.",
  body:
    "<ul>" +
      "<li><b>Nad ATP</b> — fosfoenolpyruvát, 1,3-bisfosfoglycerát, kreatínfosfát (−43,1 kJ/mol).</li>" +
      "<li><b>ATP</b> — −30,5 kJ/mol.</li>" +
      "<li><b>Pod ATP</b> — fosfoester, napr. glukóza-6-fosfát (−13,8 kJ/mol).</li>" +
      "<li><b>Bez fosfátu</b> — tioester (acetyl-CoA).</li>" +
    "</ul>"
},
{
  id: "aktivovana-jednotka",
  title: "Aktivovaná jednotka",
  match: ["aktivovan\\w* jednotk\\w*", "aktivovan\\w* medziprodukt\\w*"],
  short: "Stavebná jednotka naviazaná väzbou s vysokou energiou, aby ju bunka mohla pripojiť k rastúcej molekule.",
  body:
    "<ul>" +
      "<li><b>Glykogén</b> — UDP-glukóza.</li>" +
      "<li><b>Lipidy</b> — acyl-CoA.</li>" +
      "<li><b>Nové uhlíkové reťazce</b> — acetyl-CoA.</li>" +
    "</ul>"
},
{
  id: "latkova-koncentracia",
  title: "Látková koncentrácia a prepočet jednotiek",
  match: ["látkov\\w* koncentráci\\w*", "hmotnostn\\w* koncentráci\\w*", "molárn\\w* hmotnos\\w*", "látkov\\w* množstv\\w*"],
  short: "c = n / V (mol/l); medzi hmotnosťou a počtom častíc prekladá molárna hmotnosť.",
  body:
    '<p class="chain">mg/dl → × 10 (mg/l) → ÷ molárna hmotnosť → <b>mmol/l</b></p>' +
    "<ul>" +
      "<li><b>Glukóza</b> — 1 mmol/l = 18,0 mg/dl.</li>" +
      "<li><b>Cholesterol</b> — 1 mmol/l = 38,7 mg/dl.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Číslo bez jednotky je nebezpečné: glykémia „100“ je v mg/dl normálna, v mmol/l nezlučiteľná so životom.</p>'
},
{
  id: "riedenie",
  title: "Riedenie a zrieďovací faktor",
  match: ["zrieďovac\\w* faktor\\w*", "rieden\\w*"],
  short: "Pri riedení ostáva látkové množstvo, mení sa objem: c₁ · V₁ = c₂ · V₂; zrieďovací faktor = V₂ / V₁.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Výsledok nameraný v zriedenej vzorke sa pred vydaním vždy násobí zrieďovacím faktorom – na to sa zabúda najčastejšie.</p>'
},
{
  id: "osmolalita",
  title: "Osmolalita a osmolálne okno",
  match: ["osmolalit\\w*", "osmolarit\\w*", "osmoláln\\w* okn\\w*"],
  short: "Počet osmoticky účinných častíc na kilogram vody; rozhoduje, kam sa presúva voda.",
  body:
    "<ul>" +
      "<li><b>Vypočítaná</b> = 2 × Na<sup>+</sup> + glukóza + močovina (mmol/l).</li>" +
      "<li><b>Meraná</b> — osmometrom, podľa zníženia bodu tuhnutia.</li>" +
      "<li><b>Osmolálne okno</b> = meraná − vypočítaná; normálne menej než 10 mosmol/kg.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Zväčšené okno znamená malé častice, ktoré nik nemeral – etanol, toxický alkohol, manitol.</p>'
},
{
  id: "ph",
  title: "pH a pK",
  match: ["pH", "pK"],
  short: "pH je záporný logaritmus koncentrácie H⁺ – zmena o jednotku je desaťnásobok. pK je „adresa“ skupiny na stupnici pH: pod ňou protón drží, nad ňou ho odovzdala.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Z pK sa dá vyčítať náboj skupiny pri pH 7: karboxyl (pK 2–5) je záporný, aminoskupina (pK 9–10) kladná.</p>'
},
{
  id: "tlmivy-roztok",
  title: "Tlmivý roztok (pufer)",
  match: ["tlmiv\\w* roztok\\w*", "pufr\\w*", "pufer", "Hendersonov\\w*–Hasselbalchov\\w* rovnic\\w*"],
  short: "Zmes slabej kyseliny a jej zásady, ktorá pridaný protón zachytí alebo chýbajúci doplní.",
  body:
    '<p class="chain">pH = pK + log ([zásada] / [kyselina])<br>pH = pK → kyselina je spolovice disociovaná → tlmí najlepšie (účinne pK ± 1)</p>'
},
{
  id: "hydrogenuhlicitanovy-system",
  title: "Hydrogénuhličitanový systém",
  match: ["hydrogénuhličitanov\\w* systém\\w*", "hydrogénuhličitan\\w*", "hydrogenuhličitan\\w*"],
  short: "Hlavný tlmivý systém krvi: HCO₃⁻ a rozpustený CO₂ v pomere 20 : 1 dávajú pH 7,40.",
  body:
    '<p class="chain">↑ H<sup>+</sup> → HCO<sub>3</sub><sup>−</sup> ho naviaže → CO<sub>2</sub> + H<sub>2</sub>O → ↑ ventilácia → CO<sub>2</sub> sa vydýcha → pomer sa vracia k 20 : 1</p>' +
    "<ul>" +
      "<li><b>Otvorený systém</b> — kyslú zložku (CO<sub>2</sub>) odvádzajú pľúca v minútach, zásaditú (HCO<sub>3</sub><sup>−</sup>) upravujú obličky za hodiny až dni.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Pri metabolickej acidóze je nízke pH, nízky HCO<sub>3</sub><sup>−</sup> aj nízke pCO<sub>2</sub>. Ak je pCO<sub>2</sub> vysoké, príčina je v pľúcach.</p>'
},
{
  id: "absorbancia",
  title: "Absorbancia a Lambertov–Beerov zákon",
  match: ["absorbanci\\w*", "Lambertov\\w*–Beerov\\w* zákon\\w*", "fotometr\\w*", "fotometer", "fotometri\\w*"],
  short: "Absorbancia A = log (I₀ / I) je miera pohlteného svetla; v zriedenom roztoku je priamo úmerná koncentrácii: A = ε · c · l.",
  body:
    "<ul>" +
      "<li><b>ε</b> — molárny absorpčný koeficient látky pri danej vlnovej dĺžke.</li>" +
      "<li><b>l</b> — dĺžka dráhy svetla v kyvete.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Väčšina stanovení nemeria látku priamo, ale svetlo pohltené farebným produktom reakcie. Úmernosť platí len v lineárnom rozsahu.</p>'
},
{
  id: "slepa-vzorka",
  title: "Slepá vzorka (blank)",
  match: ["slep\\w* vzork\\w*"],
  short: "Vzorka, ktorá obsahuje všetko okrem meranej látky; nastavuje sa ňou nula fotometra.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Bez nej by kalibračná priamka neprechádzala nulou a každý výsledok by bol posunutý o tú istú chybu.</p>'
},
{
  id: "kalibracna-krivka",
  title: "Kalibračná krivka",
  match: ["kalibračn\\w* krivk\\w*", "lineárn\\w* rozsah\\w*"],
  short: "Graf absorbancie proti známej koncentrácii radu štandardov; absorbancia vzorky sa na ňom prečíta ako koncentrácia.",
  body:
    '<p class="chain">rad štandardov → A proti slepej vzorke → priamka cez nulu → <b>vzorka sa odčíta z priamky</b></p>' +
    '<p class="why"><b>Prečo to je dôležité.</b> Vzorka nad najvyšším štandardom sa neodhaduje predĺžením priamky – zriedi sa a zmeria znova.</p>'
},
{
  id: "aktivita-enzymu",
  title: "Aktivita enzýmu: katal a U",
  match: ["katalytick\\w* koncentráci\\w*", "katal(?:u|y|e|om)?", "µkat", "nkat", "aktivit\\w* enzým\\w*"],
  short: "Množstvo substrátu, ktoré enzým premení za jednotku času pri daných podmienkach; katal = 1 mol/s, U = 1 µmol/min.",
  body:
    "<ul>" +
      "<li><b>Prepočet</b> — 1 U = 16,67 nkat; 1 µkat = 60 U.</li>" +
      "<li><b>Kinetické meranie</b> — sleduje rast absorbancie priebežne.</li>" +
      "<li><b>Koncové meranie</b> — absorbancia po pevnom čase; ak sa substrát medzitým minul, aktivita vyjde nižšia.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Enzýmu je v sére tak málo, že sa nemeria jeho množstvo, ale to, čo dokáže.</p>'
},
{
  id: "alp",
  title: "ALP — alkalická fosfatáza",
  match: ["ALP", "alkalick\\w* fosfatáz\\w*"],
  short: "Hydroláza, ktorá pri zásaditom pH odštepuje fosfát z fosfoesterov; v sére pochádza najmä z pečene a kosti.",
  body:
    "<ul>" +
      "<li><b>Meranie</b> — bezfarebný p-nitrofenylfosfát → žltý p-nitrofenol, 405 nm.</li>" +
      "<li><b>Zvýšená</b> — pri prekážke v odtoku žlče a pri prestavbe kosti; fyziologicky u rastúcich detí a v tehotenstve.</li>" +
    "</ul>"
},
{
  id: "dokazove-reakcie",
  title: "Dôkazové reakcie",
  match: ["dôkazov\\w* reakci\\w*", "Fehlingov\\w*", "Benedictov\\w*", "ninhydrínov\\w*", "Lugolov\\w* roztok\\w*"],
  short: "Jednoduché farebné reakcie v skúmavke; nedávajú číslo, len odpoveď áno–nie, a každá dokazuje jednu funkčnú skupinu.",
  body:
    "<ul>" +
      "<li><b>Fehlingova, Benedictova</b> — redukujúci sacharid: Cu<sup>2+</sup> → tehlovočervená zrazenina Cu<sub>2</sub>O.</li>" +
      "<li><b>S jódom</b> — škrob: tmavomodré sfarbenie.</li>" +
      "<li><b>Ninhydrínová</b> — voľná aminoskupina: modrofialové sfarbenie.</li>" +
      "<li><b>S orcinolom</b> — pentózy: modrozelené sfarbenie.</li>" +
    "</ul>"
},
{
  id: "peroxidacia-lipidov", title: "Peroxidácia lipidov", match: ["peroxidáci\\w* lipidov"],
  short: "Reťazová reakcia, pri ktorej radikály kyslíka napádajú dvojité väzby mastných kyselín v membránach; šíri sa z molekuly na molekulu a membránu poškodí.",
  body: ""
},
{
  id: "zmydelnenie", title: "Zmydelnenie", match: ["zmydelnen\\w*"],
  short: "Zásaditá hydrolýza tuku: hydroxid rozštiepi esterové väzby a vznikne glycerol a soli mastných kyselín – mydlá.",
  body: ""
}
);
