/* Glosár BIOCHEM — doplnok k celku „štruktúry, reakcie a meranie“ (kap. 1).
   Formát záznamu: assets/glossary/README.md. Texty sú vlastné (CLAUDE.md §4.1), písané z faktov kapitoly. */
(window.PF_GLOSSARY = window.PF_GLOSSARY || []).push(
{
  id: "hydroxyl",
  title: "Hydroxyl (–OH)",
  match: ["hydroxyl(?:u|e|om|y|ov|och|mi)?"],
  short: "Skupina –OH bez náboja, ktorá tvorí vodíkové mostíky; je na nej rozpustnosť cukrov vo vode a miesto pre ester, fosfát a glykozidovú väzbu.",
  body:
    "<ul>" +
      "<li><b>Kde</b> — sacharidy, glycerol, serín, cholesterol.</li>" +
      "<li><b>Čo na ňom visí</b> — karboxyl (ester), fosfát (fosfoester), druhý cukor (glykozid).</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Cukor má hydroxylov veľa a každý môže niesť väzbu – preto z neho vzniká toľko derivátov a polymérov.</p>'
},
{
  id: "karbonyl",
  title: "Karbonyl (C=O): aldehyd a ketón",
  match: ["karbonyl\\w*", "aldehyd\\w*", "ketón\\w*"],
  short: "Skupina C=O s reaktívnym uhlíkom; na konci reťazca je to aldehyd (glukóza), vnútri ketón (fruktóza, pyruvát).",
  body:
    "<ul>" +
      "<li><b>Čo sa s ňou dá</b> — oxidovať, redukovať, uzavrieť do kruhu s hydroxylom, naviazať na aminoskupinu.</li>" +
      "<li><b>Podľa nej</b> sa monosacharidy delia na aldózy a ketózy.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Chémia sacharidov sa dá odvodiť z reaktívneho karbonylu a z množstva hydroxylov; glykácia je reakcia voľného aldehydu s aminoskupinou.</p>'
},
{
  id: "karboxyl",
  title: "Karboxyl (–COOH, –COO⁻)",
  match: ["karboxyl(?:u|e|om|y|ov|och|mi)?", "karboxylov\\w*"],
  short: "Slabá kyselina; pri pH 7 odovzdá protón a nesie záporný náboj (–COO⁻), preto majú aniónové názvy (laktát, citrát).",
  body:
    "<ul>" +
      "<li><b>Kde</b> — mastné kyseliny, aminokyseliny, laktát, citrát.</li>" +
      "<li><b>Väzby</b> — s hydroxylom dá ester, s aminoskupinou amid, s tiolom tioester.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Karboxyl s pK okolo 2–5 je pri pH 7 záporný; preto sa píše „laktát“, nie „kyselina mliečna“.</p>'
},
{
  id: "aminoskupina",
  title: "Aminoskupina (–NH₂, –NH₃⁺)",
  match: ["aminoskupin\\w*"],
  short: "Slabá zásada; pri pH 7 viaže protón a nesie kladný náboj (–NH₃⁺); tvorí amidovú (peptidovú) väzbu.",
  body:
    "<ul>" +
      "<li><b>Kde</b> — aminokyseliny, aminocukry, sfingozín.</li>" +
      "<li><b>pK 9–10</b> — protón drží až do zásaditého pH.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Na voľnú aminoskupinu sa viaže aldehyd glukózy (glykácia) a na jej dôkaze stojí ninhydrínová reakcia.</p>'
},
{
  id: "tiol",
  title: "Tiol (–SH) a disulfidový mostík",
  match: ["tiol(?:u|e|om|y|ov)?", "disulfid\\w*", "SH-skupin\\w*"],
  short: "Skupina –SH bez náboja, ktorá sa ľahko oxiduje; dva tioly sa spoja do disulfidového mostíka a s karboxylom dajú tioester.",
  body:
    "<ul>" +
      "<li><b>Kde</b> — cysteín, koenzým A, glutatión.</li>" +
      "<li><b>Disulfidový mostík</b> — spája bočné reťazce a drží terciárnu štruktúru bielkoviny.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Tiol na koenzýme A nesie zvyšok kyseliny ako tioester – aktivovanú jednotku.</p>'
},
{
  id: "d-rad-fischer",
  title: "D-rad a Fischerova projekcia",
  match: ["Fischerov\\w*", "D-rad\\w*"],
  short: "Fischerova projekcia zapisuje otvorený reťazec cukru zvisle; označenie D znamená hydroxyl na predposlednom uhlíku vpravo.",
  body:
    "<ul>" +
      "<li><b>C1 hore</b> — aldehyd (alebo karbonyl) je na vrchu.</li>" +
      "<li><b>Ľudské cukry</b> — takmer všetky sú D-radu.</li>" +
      "<li><b>Kruh</b> — kruhové formy sa kreslia Haworthovým vzorcom.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Otvorenú formu s voľným aldehydom treba zapísať vtedy, keď reakcia beží práve na nej (redukujúci cukor).</p>'
},
{
  id: "pyranoza",
  title: "Pyranóza (šesťčlenný kruh)",
  match: ["pyranóz\\w*", "Haworthov\\w*"],
  short: "Šesťčlenný kruh cukru, ktorý vznikne, keď karbonyl na C1 zreaguje s hydroxylom na C5 tej istej molekuly.",
  body:
    '<p class="chain">karbonyl C1 + hydroxyl C5 → poloacetál → kruh → nové stereocentrum = <b>anomérny uhlík</b></p>' +
    '<p class="why"><b>Prečo to je dôležité.</b> Z C1 vznikne anomérny uhlík, a podľa jeho hydroxylu sú dve formy – α a β.</p>'
},
{
  id: "redukujuci-koniec",
  title: "Redukujúci a neredukujúci koniec reťazca",
  match: ["redukujúc\\w* konc\\w*", "neredukujúc\\w* konc\\w*", "redukujúce konce"],
  short: "Glykogén a amylopektín majú jediný redukujúci koniec a veľa neredukujúcich; na nich enzýmy glukózu pridávajú aj odoberajú.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Hustejšie vetvenie znamená viac koncov, a teda rýchlejšie uvoľnenie glukózy – preto je glykogén rýchla zásoba.</p>'
},
{
  id: "maltoza-izomaltoza",
  title: "Maltóza a izomaltóza",
  match: ["maltóz\\w*", "izomaltóz\\w*"],
  short: "Disacharidy z dvoch glukóz: maltóza má väzbu α(1→4), izomaltóza α(1→6); obe redukujú.",
  body:
    "<ul>" +
      "<li><b>Maltóza</b> — vzniká pri trávení škrobu.</li>" +
      "<li><b>Izomaltóza</b> — ostáva z miest, kde sa škrob a glykogén vetvia.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Ukazuje, že názov väzby (α1→4 × α1→6) hovorí, ktorý enzým ju štiepi.</p>'
},
{
  id: "sacharoza",
  title: "Sacharóza",
  match: ["sacharóz\\w*"],
  short: "Disacharid glukózy a fruktózy spojený väzbou α(1→2)β; neredukuje, lebo vo väzbe sú anomérne uhlíky oboch cukrov.",
  body:
    "<ul>" +
      "<li><b>Kde</b> — repný a trstinový cukor.</li>" +
      "<li><b>Po hydrolýze</b> (kyselinou alebo sacharázou) dá redukujúcu zmes glukózy a fruktózy.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Klasická pasca: Fehlingova reakcia je pri sacharóze negatívna, kým ju nerozštiepiš.</p>'
},
{
  id: "cukrove-derivaty",
  title: "Deriváty monosacharidov: kyseliny, alkoholy, aminocukry, deoxycukry",
  match: ["aminocuk\\w*", "deoxycuk\\w*", "sorbitol\\w*", "glucitol\\w*", "kyselin\\w* glukónov\\w*", "kyselin\\w* glukárov\\w*"],
  short: "Úpravou jednej skupiny monosacharidu vzniká fosfoester, kyselina, alkohol, aminocukor alebo deoxycukor.",
  body:
    "<ul>" +
      "<li><b>Oxidácia C1</b> — kyselina glukónová; <b>C6</b> — glukurónová; <b>oboch koncov</b> — glukárová.</li>" +
      "<li><b>Redukcia karbonylu</b> — alkohol sorbitol (glucitol).</li>" +
      "<li><b>Aminocukor</b> — aminoskupina namiesto hydroxylu na C2 (glukózamín).</li>" +
      "<li><b>Deoxycukor</b> — chýba hydroxyl (2-deoxyribóza v DNA).</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Z jedného cukru tak vzniká celá rodina látok s inými úlohami – od zásoby po stavbu spojiva.</p>'
},
{
  id: "schiffova-baza",
  title: "Schiffova báza a ketoamín",
  match: ["Schiffov\\w* báz\\w*", "ketoamín\\w*"],
  short: "Prvý, vratný produkt reakcie aldehydu glukózy s aminoskupinou bielkoviny; po prešmyku z nej vznikne nevratný ketoamín.",
  body:
    '<p class="chain">glukóza + –NH₂ bielkoviny → <b>Schiffova báza</b> (vratná) → prešmyk → <b>ketoamín</b> (nevratný)</p>' +
    '<p class="why"><b>Prečo to je dôležité.</b> Na tom stojí HbA1c: čím viac glukózy a čím dlhšie, tým viac glykovaného hemoglobínu.</p>'
},
{
  id: "cis-trans",
  title: "Cis a trans dvojitá väzba",
  match: ["cis-izomér\\w*", "trans-izomér\\w*", "trans izomér\\w*", "cis dvojit\\w*", "cis konfigurác\\w*", "trans mastn\\w*"],
  short: "Prirodzené dvojité väzby mastných kyselín sú cis (reťazec sa zalomí); stužovaním olejov vznikajú trans izoméry s rovným reťazcom.",
  body:
    "<ul>" +
      "<li><b>cis</b> — zalomený reťazec, molekuly sa nedajú tesne poskladať → nižšia teplota topenia, tekutejšia membrána.</li>" +
      "<li><b>trans</b> — rovný reťazec, správa sa ako nasýtená; jeho príjem sa spája s viacerými ochoreniami.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Tvar reťazca rozhoduje o tekutosti membrány.</p>'
},
{
  id: "omega-rad",
  title: "Zápis mastnej kyseliny: Δ a rad ω",
  match: ["rad ω", "ω-3", "ω-6", "ω-9", "ω-7", "Δ-zápis"],
  short: "Zápis 18:2 Δ9,12 hovorí počet uhlíkov a dvojitých väzieb a ich polohu od karboxylu; rad ω počíta polohu poslednej väzby od metylového konca.",
  body:
    "<ul>" +
      "<li><b>Príklady</b> — olejová 18:1 Δ9 (ω-9), linolová 18:2 Δ9,12 (ω-6), α-linolénová 18:3 Δ9,12,15 (ω-3).</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Rad ω určuje, z ktorej esenciálnej kyseliny sa MK dá vyrobiť.</p>'
},
{
  id: "esencialne-mk",
  title: "Esenciálne mastné kyseliny",
  match: ["esenciáln\\w* mastn\\w*", "linolov\\w*", "α-linolénov\\w*"],
  short: "Nevyhnutné v strave sú dve: linolová (ω-6) a α-linolénová (ω-3); človek nevie vložiť dvojitú väzbu ďalej než za 9. uhlík od metylového konca.",
  body:
    "<ul>" +
      "<li><b>Arachidónová</b> — vyrobí sa z linolovej, chýba až vtedy, keď chýba linolová.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> <i>Kedysi</i> sa uvádzali tri esenciálne MK, <i>dnes</i> dve – staršia učebnica môže mať tri.</p>'
},
{
  id: "arachidonova",
  title: "Arachidónová kyselina",
  match: ["arachidónov\\w*"],
  short: "MK 20:4 Δ5,8,11,14 (ω-6); východisko eikozanoidov.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Vzniká z linolovej, preto sa dnes nepočíta medzi esenciálne MK samostatne.</p>'
},
{
  id: "ceramid-sfingomyelin",
  title: "Ceramid, sfingozín a sfingomyelín",
  match: ["ceramid\\w*", "sfingozín\\w*", "sfingomyelín\\w*", "sfingolipid\\w*"],
  short: "Ceramid je sfingozín s mastnou kyselinou na amide; sfingomyelín je ceramid s fosfocholínom a stavia myelín.",
  body:
    "<ul>" +
      "<li><b>Glykolipid</b> — ceramid + cukor (cerebrozid) alebo oligosacharid (gangliozid), povrch buniek.</li>" +
      "<li><b>Väzby</b> — amid medzi sfingozínom a MK, fosfodiester pri sfingomyelíne.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Na rozdiel od glycerolových lipidov má sfingozínová kostra amid, nie ester.</p>'
},
{
  id: "plazmalogen",
  title: "Plazmalogén",
  match: ["plazmalogén\\w*"],
  short: "Fosfolipid, ktorý má na C1 glycerolu nenasýtený alkohol éterovou väzbou namiesto esteru; je v membránach srdca a nervov.",
  body: ""
},
{
  id: "cholesterol-pripomenutie",
  title: "Cholesterol (stavba)",
  match: ["cholesterol(?:u|e|om|y)?", "ester cholesterolu", "estery cholesterolu"],
  short: "Slabo polárny lipid so steránovým jadrom a jedným hydroxylom; je v membránach a je východiskom steroidov.",
  body:
    "<ul>" +
      "<li><b>Ester cholesterolu</b> — cholesterol s MK, nepolárna zásobná a transportná forma.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Hydroxyl robí z cholesterolu slabo polárnu molekulu; po esterifikácii je nepolárny a prenáša sa v lipoproteínoch.</p>'
},
{
  id: "peptid",
  title: "Peptid",
  match: ["peptid(?:y|ov|om)?"],
  short: "Peptid je reťazec aminokyselín; väzba má čiastočne charakter dvojitej väzby, neotáča sa a atómy okolo nej ležia v jednej rovine.",
  body:
    "<ul>" +
      "<li><b>Ohyb</b> — reťazec sa ohýba len na α-uhlíkoch.</li>" +
      "<li><b>Výnimka</b> — v glutatióne je glutamát viazaný karboxylom bočného reťazca (γ-väzba).</li>" +
    "</ul>"
},
{
  id: "alfa-helix",
  title: "α-Helix a β-skladaný list",
  match: ["α-helix\\w*", "β-skladan\\w*"],
  short: "Dve sekundárne štruktúry bielkoviny, ktoré držia vodíkové mostíky kostry reťazca.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Sekundárnu štruktúru drží kostra reťazca; terciárnu bočné reťazce – preto ich teplo a pH rozbijú rozdielne ľahko.</p>'
},
{
  id: "histidin",
  title: "Histidín a tlmivá schopnosť bielkovín",
  match: ["histidín\\w*"],
  short: "Bočný reťazec histidínu má pK ≈ 6, blízko fyziologického pH, takže protón ľahko prijme aj odovzdá.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Preto je histidín častý v aktívnych miestach enzýmov a bielkoviny tlmia zmeny pH.</p>'
},
{
  id: "kysle-zasadite-aminokyseliny",
  title: "Kyslé a zásadité aminokyseliny",
  match: ["kysl\\w* aminokyselin\\w*", "zásadit\\w* aminokyselin\\w*", "aspartát\\w*", "glutamát\\w*", "lyzín\\w*", "arginín\\w*"],
  short: "Bočné reťazce určujú náboj bielkoviny: aspartát a glutamát sú pri pH 7 záporné, lyzín a arginín kladné.",
  body: ""
},
{
  id: "purin-pyrimidin",
  title: "Purín a pyrimidín",
  match: ["purín\\w*", "pyrimidín\\w*"],
  short: "Dva druhy dusíkatých báz: purínové sú adenín a guanín, pyrimidínové cytozín, uracil a tymín.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Báza s pentózou dá nukleozid (N-glykozidová väzba), s fosfátom nukleotid.</p>'
},
{
  id: "cgmp",
  title: "Cyklické nukleotidy (cAMP, cGMP)",
  match: ["cGMP", "cyklick\\w* nukleotid\\w*"],
  short: "Majú jeden fosfát naviazaný na 3′- aj 5′-hydroxyl tej istej ribózy a fungujú ako signál vnútri bunky.",
  body: ""
},
{
  id: "vitaminy-koenzymov",
  title: "Vitamíny B v koenzýmoch",
  match: ["niacín\\w*", "riboflavín\\w*", "pantotenát\\w*", "vitamín\\w* B"],
  short: "Koenzýmy NAD⁺ a NADP⁺ obsahujú niacín (B₃), FAD riboflavín (B₂) a CoA pantotenát (B₅); telo si vitamíny nevyrobí.",
  body: ""
},
{
  id: "ec-cislo",
  title: "Číslo EC a IUBMB",
  match: ["EC číslo", "čísl\\w* EC", "IUBMB"],
  short: "Číslo EC má štyri čísla – trieda, podtrieda, pod-podtrieda a poradie; prvé povie, čo enzým s molekulou urobí.",
  body: ""
},
{
  id: "oxidoreduktazy-ec1",
  title: "Oxidoreduktázy (EC 1)",
  match: ["oxidoreduktáz\\w*"],
  short: "Prenášajú elektróny (vodík) z jednej látky na druhú; v názve dehydrogenáza, oxidáza, reduktáza.",
  body: ""
},
{
  id: "transferazy",
  title: "Transferázy (EC 2)",
  match: ["transferáz\\w*", "kináz\\w*", "transamináz\\w*"],
  short: "Prenášajú skupinu (fosfát, cukor, metyl, aminoskupinu); príklad hexokináza.",
  body: ""
},
{
  id: "hydrolazy",
  title: "Hydrolázy (EC 3)",
  match: ["hydroláz\\w*", "peptidáz\\w*"],
  short: "Štiepia väzbu vodou; fosfatáza, lipáza, peptidáza, glykozidáza.",
  body: ""
},
{
  id: "lyazy",
  title: "Lyázy (EC 4)",
  match: ["lyáz\\w*", "dekarboxyláz\\w*"],
  short: "Štiepia väzbu bez vody a bez oxidácie; vzniká alebo zaniká dvojitá väzba (aldoláza, dekarboxyláza, hydratáza).",
  body: ""
},
{
  id: "izomerazy",
  title: "Izomerázy (EC 5)",
  match: ["izomeráz\\w*", "mutáz\\w*"],
  short: "Prestavia atómy v tej istej molekule; izomeráza, mutáza, epimeráza.",
  body: ""
},
{
  id: "ligazy",
  title: "Ligázy (EC 6): syntáza × syntetáza",
  match: ["ligáz\\w*", "syntetáz\\w*"],
  short: "Spoja dve molekuly na účet štiepenia ATP; syntetáza spája s ATP, syntáza bez ATP.",
  body: ""
},
{
  id: "translokazy",
  title: "Translokázy (EC 7)",
  match: ["translokáz\\w*"],
  short: "Enzýmy, ktorých hlavnou úlohou je preniesť ión alebo molekulu cez membránu; od roku 2018 siedma trieda enzýmov.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Štiepenie ATP je len ich pohon – preto sodíkovo-draslíková pumpa už nie je hydroláza.</p>'
},
{
  id: "rovnovazna-konstanta",
  title: "Štandardné ΔG°′ a rovnovážna konštanta",
  match: ["ΔG°′", "rovnovážn\\w* konštant\\w*"],
  short: "ΔG°′ platí pre 1 mol/l a pH 7 a je len iným zápisom rovnovážnej konštanty: ΔG°′ = −R·T·ln K.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> V bunke koncentrácie nie sú 1 mol/l, takže o smere rozhoduje skutočné ΔG podľa pomeru produktu a substrátu.</p>'
},
{
  id: "entalpia-entropia",
  title: "ΔH a ΔS",
  match: ["ΔH", "ΔS", "entropi\\w*", "entalpi\\w*"],
  short: "ΔG = ΔH − T·ΔS: teplo, ktoré sa uvoľní alebo spotrebuje, a zmena neusporiadanosti.",
  body: ""
},
{
  id: "kussmaul",
  title: "Kussmaulovo dýchanie",
  match: ["Kussmaulov\\w*"],
  short: "Hlboké a rýchle dýchanie pri metabolickej acidóze, ktoré vydýcha CO₂ a čiastočne vráti pomer HCO₃⁻ : CO₂ k 20 : 1.",
  body: ""
},
{
  id: "karboanhydraza",
  title: "Karboanhydráza",
  match: ["karboanhydráz\\w*"],
  short: "Enzým, ktorý urýchľuje premenu H₂CO₃ na CO₂ a H₂O, a teda hydrogénuhličitanový tlmivý systém.",
  body: ""
},
{
  id: "acidoza",
  title: "Acidóza",
  match: ["acidóz\\w*"],
  short: "Pokles pH krvi; metabolická spotrebuje hydrogénuhličitan, respiračná vzniká, ak pľúca CO₂ nevylučujú.",
  body: ""
},
{
  id: "fotometer-kyveta",
  title: "Fotometer, kyveta a absorbancia",
  match: ["fotometr\\w*", "kyvet\\w*", "absorbanc\\w*"],
  short: "Fotometer porovná svetlo na vstupe a výstupe z kyvety; absorbancia A = log (I₀/I) je bezrozmerná a pri zriedených roztokoch úmerná koncentrácii.",
  body: ""
},
{
  id: "molarny-absorpcny-koeficient",
  title: "Molárny absorpčný koeficient (ε)",
  match: ["molárn\\w* absorpčn\\w* koeficient\\w*"],
  short: "Vlastnosť látky pri danej vlnovej dĺžke vo vzťahu A = ε · c · l; v praxi sa nepočíta, prístroj sa kalibruje štandardmi.",
  body: ""
},
{
  id: "kineticke-meranie",
  title: "Kinetické × koncové meranie",
  match: ["kinetick\\w* meran\\w*", "koncov\\w* meran\\w*", "end-point"],
  short: "Pri kinetickom meraní sa sleduje rast absorbancie v čase, pri koncovom absorbancia po pevnom čase po zastavení reakcie.",
  body: ""
},
{
  id: "p-nitrofenol",
  title: "p-Nitrofenol a p-nitrofenylfosfát",
  match: ["p-nitrofenol\\w*", "p-nitrofenylfosfát\\w*", "4-nitrofenylfosfát\\w*"],
  short: "Umelý bezfarebný substrát alkalickej fosfatázy a jeho žltý produkt (pK 7,15) s absorpciou okolo 405 nm.",
  body: ""
},
{
  id: "lugolov-roztok",
  title: "Jódová (Lugolova) reakcia",
  match: ["Lugolov\\w*", "jódov\\w* reakci\\w*"],
  short: "Jód sa uloží do závitnice polysacharidového reťazca a dá tmavomodré sfarbenie – dôkaz škrobu.",
  body: ""
},
{
  id: "ninhydrin",
  title: "Ninhydrínová reakcia",
  match: ["ninhydrín\\w*"],
  short: "Ninhydrín reaguje za tepla s voľnou aminoskupinou a dáva modrofialové sfarbenie.",
  body: ""
},
{
  id: "orcinol",
  title: "Orcinolová reakcia",
  match: ["orcinol\\w*"],
  short: "Horúca kyselina dehydratuje pentózu na furfural, ktorý s orcinolom dá modrozelené sfarbenie.",
  body: ""
},
{
  id: "cholestaza",
  title: "Cholestáza",
  match: ["cholestáz\\w*", "obštrukčn\\w* ikter\\w*"],
  short: "Prekážka v odtoku žlče; zvyšuje ALP v sére, lebo ALP sedí na membránach pečeňových buniek obrátených do žlčových ciest.",
  body: ""
},
{
  id: "referencne-rozpatie",
  title: "Referenčné rozpätie",
  match: ["referenčn\\w* rozpät\\w*"],
  short: "Rozpätie hodnôt zdravých ľudí pre danú metódu a materiál; líši sa podľa laboratória.",
  body: ""
},
{
  id: "ifcc",
  title: "IFCC — referenčný postup",
  match: ["IFCC"],
  short: "Medzinárodná federácia pre klinickú chémiu; jej referenčný postup pre ALP stanovuje 37 °C, 4-nitrofenylfosfát a 405 nm.",
  body: ""
},
{
  id: "fyziologicky-roztok",
  title: "Fyziologický roztok",
  match: ["fyziologick\\w* roztok\\w*"],
  short: "Roztok 9 g NaCl v litri (154 mmol/l); jeho ióny Na⁺ a Cl⁻ dávajú dokopy 308 mosmol/l.",
  body: ""
},
{
  id: "lipidova-dvojvrstva",
  title: "Lipidová dvojvrstva",
  match: ["lipidov\\w* dvojvrstv\\w*", "dvojvrstv\\w*"],
  short: "Amfipatické lipidy sa vo vode usporiadajú tak, že polárne hlavy mieria k vode a nepolárne chvosty dovnútra; prepustí len malé, aspoň trochu v tuku rozpustné molekuly.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Ión cez ňu sám neprejde – preto je nabitý fosfátový ester uväznený v bunke.</p>'
},
{
  id: "nasytena-nenasytena-mk",
  title: "Nasýtená a nenasýtená mastná kyselina",
  match: ["nasýten\\w* mastn\\w*", "nenasýten\\w* mastn\\w*"],
  short: "Nasýtená mastná kyselina nemá dvojitú väzbu (palmitová 16:0, stearová 18:0); nenasýtená má jednu (olejová 18:1) alebo viac (linolová 18:2).",
  body: ""
},
{
  id: "stereocentrum",
  title: "Stereocentrum (chirálny uhlík)",
  match: ["stereocentr\\w*"],
  short: "Uhlík s vlastnou priestorovou konfiguráciou; pri uzavretí kruhu cukru vznikne z C1 nové stereocentrum – anomérny uhlík.",
  body: ""
},
{
  id: "l-aminokyselina",
  title: "L-aminokyseliny",
  match: ["L-aminokyselin\\w*"],
  short: "V bielkovinách sú L-aminokyseliny; glycín je výnimka, lebo nemá stereocentrum.",
  body: ""
}
);
