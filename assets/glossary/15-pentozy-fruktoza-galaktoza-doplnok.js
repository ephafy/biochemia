/* Glosár BIOCHEM — doplnok k celku „pentózy, fruktóza, galaktóza“ (kap. 5).
   Formát záznamu: assets/glossary/README.md. Texty sú vlastné (CLAUDE.md §4.1), písané z faktov kapitoly. */
(window.PF_GLOSSARY = window.PF_GLOSSARY || []).push(
{
  id: "oxidacna-neoxidacna-cast",
  title: "Oxidačná a neoxidačná časť pentózofosfátovej dráhy",
  match: ["oxidačn\\w* čas\\w*", "neoxidačn\\w* čas\\w*"],
  short: "Oxidačná časť je nevratná a vyrába NADPH; neoxidačná je vratná a prestavuje cukorfosfáty podľa toho, čo bunka práve potrebuje.",
  body:
    '<p class="chain">glukóza-6-fosfát + 2 NADP⁺ + H₂O → <b>ribulóza-5-fosfát</b> + CO₂ + <b>2 NADPH</b> + 2 H⁺</p>' +
    '<p class="why"><b>Prečo to je dôležité.</b> Dráha ATP netvorí ani nespotrebúva; od glykolýzy sa líši tým, kam posiela elektróny.</p>'
},
{
  id: "fosfoglukonolakton",
  title: "6-Fosfoglukonolaktón, laktonáza a 6-fosfoglukonát",
  match: ["6-fosfoglukonolaktón\\w*", "laktonáz\\w*", "6-fosfoglukonát\\w*"],
  short: "Prvý krok dá vnútorný ester (laktón), laktonáza ho vodou otvorí na 6-fosfoglukonát s voľným karboxylom; 6-fosfoglukonátdehydrogenáza ho oxiduje a odštiepi CO₂ (pôvodný uhlík 1).",
  body: ""
},
{
  id: "ribulóza-xylulóza",
  title: "Ribulóza-5-fosfát a xylulóza-5-fosfát",
  match: ["ribulóza-5-fosfát\\w*", "xylulóza-5-fosfát\\w*", "xylulóz\\w*"],
  short: "Ribulóza-5-fosfát je medzistanica: izomeráza z nej robí ribóza-5-fosfát, epimeráza obrátením jedného hydroxylu xylulóza-5-fosfát.",
  body: ""
},
{
  id: "sedoheptuloza-erytroza",
  title: "Sedoheptulóza-7-fosfát a erytróza-4-fosfát",
  match: ["sedoheptulóz\\w*", "erytróz\\w*"],
  short: "Medziprodukty neoxidačnej časti: kostra, ktorá sa v troch výmenách mení z ribózy na sedoheptulózu, erytrózu a nakoniec fruktózu.",
  body: ""
},
{
  id: "pomer-nadph-nadp",
  title: "Pomer NADPH : NADP⁺",
  match: ["pomer\\w* NADPH", "NADPH : NADP⁺"],
  short: "V cytosole prevažuje NADPH, takže dráha je v pokoji pribrzdená; keď bunka NADPH míňa, pomer klesne, brzda povolí a tok stúpne.",
  body: ""
},
{
  id: "glutationperoxidaza",
  title: "Glutatiónperoxidáza a glutatiónreduktáza",
  match: ["glutatiónperoxidáz\\w*", "glutatiónreduktáz\\w*"],
  short: "Peroxidáza (so selénom) odovzdá vodíky z 2 GSH peroxidu a vznikne GSSG; reduktáza oxidovaný glutatión zasa zredukuje na účet NADPH.",
  body:
    '<p class="chain">peroxid → 2 GSH → GSSG → NADPH → NADP⁺ → ↓ pomer → brzda dehydrogenázy povolí ⟳</p>'
},
{
  id: "superoxid-hypochlorit",
  title: "Superoxid, peroxid vodíka a kyselina chlórna",
  match: ["superoxid\\w*", "myeloperoxidáz\\w*", "kyselin\\w* chlórn\\w*"],
  short: "NADPH-oxidáza prenesie elektrón z NADPH na kyslík: vzniká superoxid, z neho peroxid vodíka a z neho myeloperoxidáza robí kyselinu chlórnu, ktorá pohltenú baktériu zabije.",
  body: ""
},
{
  id: "no-syntaza",
  title: "NO-syntáza",
  match: ["NO-syntáz\\w*"],
  short: "Enzým, ktorý z arginínu vyrába plyn, ktorým endotel rozširuje cievu; potrebuje NADPH.",
  body: ""
},
{
  id: "fagocyt",
  title: "Fagocyt",
  match: ["fagocyt\\w*"],
  short: "Bunka, ktorá pohltí baktériu a zabije ju kyselinou chlórnou z NADPH-oxidázy; pri defekte oxidázy baktérie pohltí, ale nezabije.",
  body: ""
},
{
  id: "oxidacna-zatez-liek",
  title: "Spúšťače hemolýzy pri deficite G6PD",
  match: ["primachín\\w*", "sulfónamid\\w*", "bôb\\w*", "oxidačn\\w* záťaž\\w*"],
  short: "Hemolýzu vyvolá až oxidačná záťaž: najčastejšie infekcia, ďalej lieky s oxidačným účinkom (niektoré antimalariká – primachín, sulfónamidy) a bôb obyčajný.",
  body: ""
},
{
  id: "retikulocyt",
  title: "Retikulocyt",
  match: ["retikulocyt\\w*"],
  short: "Mladá krvinka, ktorá ešte tvorí enzýmy; má ich najviac, preto po hemolytickej epizóde môže aktivita G6PD vyjsť falošne normálna.",
  body: ""
},
{
  id: "chromozom-x",
  title: "Chromozóm X a mozaika u žien",
  match: ["chromozóm\\w* X", "chromozómu X"],
  short: "Gén G6PD leží na chromozóme X; žena s jednou zmenenou alelou má dve populácie krviniek, lebo v každej bunke je jeden chromozóm X vypnutý.",
  body: ""
},
{
  id: "autozomovo-recesivna",
  title: "Autozómovo recesívna dedičnosť",
  match: ["autozómovo recesívn\\w*"],
  short: "Choroba sa prejaví len pri dvoch zmenených alelách; takto sa dedí väčšina enzýmových porúch v knihe (intolerancia fruktózy, galaktozémia, glykogenózy).",
  body: ""
},
{
  id: "malaria-g6pd",
  title: "Malária a rozšírenie deficitu G6PD",
  match: ["malári\\w*"],
  short: "Rozšírenie mutácie v Stredomorí, v Afrike a v Ázii kopíruje výskyt malárie: nositeľov čiastočne chráni.",
  body: ""
},
{
  id: "klasifikacia-g6pd-who",
  title: "Klasifikácia variantov G6PD podľa WHO",
  match: ["klasifikáci\\w* variantov", "WHO"],
  short: "Od roku 2022 štyri triedy: A (pod 20 %, trvalá hemolytická anémia), B (pod 45 %), C (nad 60 %, bez hemolýzy), U (neistý význam); predtým päť tried I–V (1985).",
  body: ""
},
{
  id: "fruktoza-1-fosfat",
  title: "Fruktóza-1-fosfát",
  match: ["fruktóza-1-fosfát\\w*"],
  short: "Produkt fruktokinázy; pri deficite aldolázy B sa hromadí, uväzní fosfát (↓ Pᵢ, ↓ ATP) a alostericky brzdí glykogénfosforylázu.",
  body: ""
},
{
  id: "triozakinaza",
  title: "Triózakináza",
  match: ["triózakináz\\w*"],
  short: "Fosforyluje glyceraldehyd na glyceraldehyd-3-fosfát; odtiaľ je cesta fruktózy spoločná s glykolýzou.",
  body: ""
},
{
  id: "katarakta",
  title: "Katarakta",
  match: ["katarakt\\w*"],
  short: "Zákal šošovky; pri hyperglykémii ho spôsobuje sorbitol, pri galaktozémii galaktitol – oba osmoticky viažu vodu a bunky opúchajú.",
  body: ""
},
{
  id: "neskore-nasledky-diabetu",
  title: "Neskoré následky diabetu a polyolová dráha",
  match: ["neskor\\w* následk\\w*", "neuropati\\w*"],
  short: "Do šošovky, sietnice, nervu a obličky vstupuje glukóza bez inzulínu; aldózareduktáza ju mení na sorbitol, ktorý bunke ostane – prispieva ku katarakte, neuropatii a poškodeniu sietnice a obličiek.",
  body: ""
},
{
  id: "galaktoza-1-fosfat",
  title: "Galaktóza-1-fosfát",
  match: ["galaktóza-1-fosfát\\w*", "Gal-1-P"],
  short: "Produkt galaktokinázy; pri deficite uridyltransferázy sa hromadí v pečeni, mozgu a obličke a poškodzuje ich.",
  body: ""
},
{
  id: "laktoza-syntaza",
  title: "α-Laktalbumín a tvorba laktózy",
  match: ["α-laktalbumín\\w*", "prolaktín\\w*"],
  short: "V mliečnej žľaze α-laktalbumín zmení špecifickosť transferázy tak, že galaktózu prenesie na glukózu; jeho tvorbu spúšťa prolaktín, preto laktóza vzniká len vtedy, keď má.",
  body: ""
},
{
  id: "galaktocerebrozid",
  title: "Galaktocerebrozid",
  match: ["galaktocerebrozid\\w*"],
  short: "Glykolipid myelínu, do ktorého galaktózu dodáva UDP-galaktóza.",
  body: ""
},
{
  id: "kyselina-askorbova",
  title: "Kyselina askorbová (vitamín C)",
  match: ["kyselin\\w* askorbov\\w*", "L-gulonát\\w*"],
  short: "Väčšina cicavcov ju vyrába odbočkou z L-gulonátu; človeku a ostatným primátom jeden enzým chýba, a tak je pre nich vitamínom.",
  body: ""
},
{
  id: "glukuronyltransferaza",
  title: "Konjugácia a UDP-glukuronyltransferázy",
  match: ["UDP-glukuronyltransferáz\\w*", "konjugáci\\w*"],
  short: "Enzýmy endoplazmatického retikula pečene prenesú glukuronát na zle rozpustnú látku (bilirubín, steroid, liek); z nej vznikne rozpustná zlúčenina, ktorá odíde žlčou alebo močom.",
  body: ""
},
{
  id: "bilirubin",
  title: "Bilirubín a novorodenecká žltačka",
  match: ["bilirubín\\w*", "žltačk\\w*"],
  short: "Bilirubín dostane dva glukuronáty; po narodení má transferáza ešte nízku aktivitu, nekonjugovaný bilirubín sa hromadí – jeden z dôvodov novorodeneckej žltačky.",
  body: ""
},
{
  id: "iduronova",
  title: "Kyselina idurónová a aminocukry GAG",
  match: ["idurónov\\w*", "N-acetylglukozamín\\w*", "N-acetylgalaktozamín\\w*"],
  short: "Idurónová kyselina sa od glukurónovej líši len na uhlíku 5; spolu s N-acetylglukozamínom či N-acetylgalaktozamínom tvoria opakujúcu sa dvojicu glykozaminoglykánov.",
  body: ""
},
{
  id: "heparin",
  title: "Heparín",
  match: ["heparín\\w*"],
  short: "Glykozaminoglykán vo vnútri žírnych buniek (pečeň, pľúca, koža), ktorý bráni zrážaniu krvi.",
  body: ""
},
{
  id: "hurler-hunter",
  title: "Hurlerov a Hunterov syndróm",
  match: ["Hurlerov\\w*", "Hunterov\\w*", "iduronidáz\\w*"],
  short: "Mukopolysacharidózy: Hurlerov syndróm vzniká pri deficite α-L-iduronidázy; všetky sú autozómovo recesívne okrem Hunterovho, viazaného na chromozóm X.",
  body: ""
},
{
  id: "golgiho-aparat",
  title: "Golgiho aparát",
  match: ["Golgiho aparát\\w*"],
  short: "Organela, v ktorej enzýmy pripájajú cukry na bielkovinové jadro proteoglykánu a dokončujú reťazce glykoproteínov.",
  body: ""
},
{
  id: "kyselina-sialova",
  title: "Kyselina sialová",
  match: ["kyselin\\w* sialov\\w*"],
  short: "Cukor so záporným nábojom, ktorý často končí cukrový reťazec glykoproteínu; spolu s manózou, galaktózou a fukózou patrí k jeho stavebným jednotkám.",
  body: ""
},
{
  id: "redukujuca-latka-v-moci",
  title: "Redukujúca látka v moči",
  match: ["redukujúc\\w* látk\\w*"],
  short: "Pozitívna redukčná skúška pri negatívnom prúžku na glukózu ukazuje na iný redukujúci cukor – najskôr galaktózu, u staršieho dojčaťa fruktózu.",
  body: ""
},
{
  id: "furfural",
  title: "Furfural a hydroxymetylfurfural",
  match: ["furfural\\w*", "hydroxymetylfurfural\\w*", "rezorcinol\\w*"],
  short: "Horúca kyselina cukor dehydratuje: hexózy na hydroxymetylfurfural (Selivanov, s rezorcinolom červený produkt), pentózy na furfural (orcinol, modrozelený).",
  body: ""
},
{
  id: "dikarboxylova-kyselina",
  title: "Kyselina glukárová a oxidačné produkty glukózy",
  match: ["oxidačn\\w* produkt\\w*"],
  short: "Oxidáciou uhlíka 1 vzniká kyselina glukónová, uhlíka 6 glukurónová a oboch glukárová.",
  body: ""
},
{
  id: "ppp-tkaniva",
  title: "Kde pentózofosfátová dráha beží najviac",
  match: ["nadobličk\\w*", "mliečn\\w* žľaz\\w*"],
  short: "Silná je tam, kde sa syntetizuje tuk a steroidy (pečeň, tukové tkanivo, mliečna žľaza, kôra nadobličiek, pohlavné žľazy) a kde treba glutatión (erytrocyt); vo svale takmer nebeží.",
  body: ""
}
);
