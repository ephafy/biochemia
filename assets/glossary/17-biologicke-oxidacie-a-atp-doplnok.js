/* Glosár BIOCHEM — doplnok k celku „biologické oxidácie a ATP“ (kap. 7).
   Formát záznamu: assets/glossary/README.md. Texty sú vlastné (CLAUDE.md §4.1), písané z faktov kapitoly. */
(window.PF_GLOSSARY = window.PF_GLOSSARY || []).push(
{
  id: "fe-dvoj-trojmocne",
  title: "Fe²⁺ a Fe³⁺",
  match: ["Fe²⁺", "Fe³⁺"],
  short: "V héme cytochrómov sa železo strieda medzi Fe²⁺ a Fe³⁺ a nesie elektróny; v hemoglobíne ostáva dvojmocné – pri methemoglobinémii je oxidované na Fe³⁺ a kyslík neviaže.",
  body: ""
},
{
  id: "nadh-340", vzorec: ["nikotinamid-ox", "nikotinamid-red"],
  title: "NADH pri 340 nm",
  match: ["340 nm"],
  short: "NADH a NADPH pohlcujú svetlo pri 340 nm, ich oxidované formy nie, takže každú dehydrogenázovú reakciu možno sledovať fotometrom.",
  body: ""
},
{
  id: "mitchell",
  title: "Mitchell a chemiosmotická teória",
  match: ["Mitchell\\w*"],
  short: "P. Mitchell navrhol v roku 1961, že prenos elektrónov a syntézu ATP spája protónový gradient, nie chemický medziprodukt.",
  body: ""
},
{
  id: "spad-priehrada-turbina",
  title: "Spád, priehrada, turbína",
  match: ["priehrad\\w*", "turbín\\w*"],
  short: "Obraz kapitoly: spád = tok elektrónov k O₂, priehrada = pumpy vytláčajúce H⁺, turbína = ATP-syntáza poháňaná návratom H⁺.",
  body: ""
},
{
  id: "priklady-oxidaz-oxygenaz",
  title: "Príklady oxidáz a oxygenáz",
  match: ["xantínoxidáz\\w*", "fenylalanínhydroxyláz\\w*", "dopamín-β-hydroxyláz\\w*", "tryptofán-2,3-dioxygenáz\\w*", "oxidáz\\w* L-aminokyselín"],
  short: "Xantínoxidáza, glukózaoxidáza a oxidáza L-aminokyselín dávajú peroxid vodíka; fenylalanínhydroxyláza a dopamín-β-hydroxyláza sú monooxygenázy, tryptofán-2,3-dioxygenáza dioxygenáza.",
  body: ""
},
{
  id: "oxidaza",
  title: "Oxidáza",
  match: ["oxidáz\\w*"],
  short: "Enzým, ktorý vodík z substrátu odovzdá priamo kyslíku; vznikne voda (cytochróm-c-oxidáza) alebo peroxid vodíka (xantínoxidáza, glukózaoxidáza).",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Oxidáza nie je dehydrogenáza: dehydrogenáza odovzdá vodík koenzýmu a o kyslíku „nevie“. Väčšinu kyslíka, ktorý človek vdýchne, spotrebuje jediná oxidáza na konci dýchacieho reťazca.</p>'
},
{
  id: "faradayova-konstanta",
  title: "ΔG°′ = −n·F·ΔE°′",
  match: ["Faradayov\\w*"],
  short: "Uvoľnená energia je úmerná rozdielu redoxných potenciálov; F je Faradayova konštanta (96,5 kJ na volt a mol). Rozdiel NAD⁺/NADH a O₂/H₂O (1,14 V) dá približne −220 kJ/mol.",
  body: ""
},
{
  id: "matrix-mitochondrie",
  title: "Matrix mitochondrie",
  match: ["matrix\\w*"],
  short: "Vnútro uzavreté vnútornou membránou; beží tu brána, koleso aj β-oxidácia a odtiaľ pumpy vytláčajú protóny.",
  body: ""
},
{
  id: "medzimembranovy-priestor",
  title: "Medzimembránový priestor a vonkajšia membrána",
  match: ["medzimembránov\\w* priestor\\w*", "vonkajš\\w* membrán\\w*"],
  short: "Vonkajšia membrána väčšinu malých molekúl prepustí, preto sa medzimembránový priestor zložením podobá cytosolu; cytochróm c sedí na vonkajšej strane vnútornej membrány.",
  body: ""
},
{
  id: "komplex-v-f0-f1",
  title: "Komplex V: F₀ a F₁",
  match: ["F₀", "F₁", "komplex\\w* V"],
  short: "F₀ v membráne je kanál s prstencom podjednotiek, ktorý sa prúdom protónov otáča; F₁ v matrix má tri katalytické miesta, do ktorých zasahuje os spojená s prstencom.",
  body:
    '<p class="chain">H⁺ cez F₀ → otáčanie prstenca a osi → zmena tvaru troch miest F₁ → <b>ADP + Pᵢ → ATP</b></p>'
},
{
  id: "rotor-syntazy",
  title: "Rotor ATP-syntázy a skutočný výnos",
  match: ["rotor\\w*"],
  short: "Rotor syntázy stavovcov má osem podjednotiek a na jednu otáčku (tri ATP) treba osem protónov, takže skutočný výnos je o niečo vyšší než 2,5 ATP na NADH.",
  body: ""
},
{
  id: "proton-pumpa",
  title: "Protónové pumpy dýchacieho reťazca",
  match: ["pump\\w* protón\\w*", "protónov\\w* pump\\w*"],
  short: "Komplexy I (4 H⁺), III (4 H⁺) a IV (2 H⁺) vytláčajú protóny z matrix; komplex II nepumpuje, preto NADH dá 10 H⁺ a FADH₂ 6 H⁺.",
  body: ""
},
{
  id: "zelezo-med-retazec",
  title: "Železo a meď v dýchacom reťazci",
  match: ["hém\\w* a a a₃", "meď", "medi", "medou"],
  short: "Kovy prenášajú len elektróny, vždy po jednom, a žiadne protóny; železo sa v héme cytochrómov strieda medzi Fe²⁺ a Fe³⁺, komplex IV obsahuje aj meď.",
  body: ""
},
{
  id: "kryoem",
  title: "Kryoelektrónová mikroskopia",
  match: ["kryoelektrónov\\w* mikroskopi\\w*"],
  short: "Metóda, ktorá ukázala, že sa komplexy dýchacieho reťazca v membráne spájajú do väčších celkov – superkomplexov.",
  body: ""
},
{
  id: "nukleoziddifosfatkinaza",
  title: "Nukleoziddifosfátkináza",
  match: ["nukleoziddifosfátkináz\\w*"],
  short: "Enzým, ktorým si GTP a ostatné nukleozidtrifosfáty vymieňajú fosfát s ATP – sú s ním rovnocenné.",
  body: ""
},
{
  id: "aminoacyl-trna",
  title: "Aminoacyl-tRNA",
  match: ["aminoacyl-tRNA"],
  short: "Aktivovaná stavebná jednotka bielkovín: energia na novú väzbu je v nej vložená vopred, podobne ako v UDP-glukóze.",
  body: ""
},
{
  id: "difosfat-pyrofosfat", vzorec: ["difosfat"],
  title: "Difosfát (pyrofosfát, PPᵢ)",
  match: ["difosfát\\w*", "PPᵢ"],
  short: "Pri aktivácii MK alebo glukózy sa z ATP (UTP) odštiepia dva fosfáty naraz; difosfát sa hneď rozloží, a tým je reakcia nevratná. Stojí to dve makroergické väzby.",
  body: ""
},
{
  id: "troponin",
  title: "Troponíny",
  match: ["troponín\\w*"],
  short: "Srdcové formy troponínu iné tkanivo nemá; dnes prevzali úlohu kreatínkinázy MB ako laboratórny dôkaz infarktu.",
  body: ""
},
{
  id: "kreatin", vzorec: ["kreatin"],
  title: "Kreatín",
  match: ["kreatín(?:u|e|om)?"],
  short: "Prijíma fosfát z ATP na dusík guanidínovej skupiny; väzba N–P má viac energie než anhydrid v ATP, takže reakcia sa ľahko obráti.",
  body: ""
},
{
  id: "ucinnost-35",
  title: "Účinnosť zachytenia energie (≈ 35 %)",
  match: ["zachyten\\w* podiel", "76 kJ"],
  short: "Zo 220 kJ z oxidácie mólu NADH sa v 2,5 mol ATP zachytí asi 76 kJ (≈ 35 %); zvyšok je teplo – nie strata, ale hlavný zdroj telesnej teploty.",
  body: ""
},
{
  id: "svalova-triaska",
  title: "Svalová triaška",
  match: ["svalov\\w* triašk\\w*", "triašk\\w*"],
  short: "Teplo vzniká svalovou prácou, teda zvýšenou spotrebou ATP; reťazec pri nej ostáva spriahnutý (na rozdiel od termogenínu).",
  body: ""
},
{
  id: "salicylaty", vzorec: ["salicylat"],
  title: "Salicyláty",
  match: ["salicylát\\w*"],
  short: "Vysoké dávky pôsobia ako rozpojovač podobne ako dinitrofenol.",
  body: ""
},
{
  id: "inhibitory-komplexu-iv", vzorec: ["azid", "oxid-uholnaty", "sulfan"],
  title: "Azid, oxid uhoľnatý a sulfán",
  match: ["azid\\w*", "oxid\\w* uhoľnat\\w*", "sulfán\\w*"],
  short: "Spolu s kyanidom blokujú komplex IV: kyslík sa nespotrebúva, aj keď je krv okysličená.",
  body: ""
},
{
  id: "cytochrom-a3",
  title: "Cytochróm a₃ a hémy komplexu IV",
  match: ["cytochróm\\w* a₃"],
  short: "Súčasť komplexu IV; na jeho trojmocné železo sa viaže kyanid. Komplex IV odovzdá molekule kyslíka štyri elektróny: O₂ + 4 e⁻ + 4 H⁺ → 2 H₂O.",
  body: ""
},
{
  id: "kyanokobalamin",
  title: "Vitamín B₁₂ (kobalamín)",
  match: ["kyanokobalamín\\w*", "kobalamín\\w*", "vitamín\\w* B₁₂"],
  short: "Hydroxokobalamín naviaže kyanid na svoj kobalt; vzniknutý kyanokobalamín odíde močom.",
  body: ""
},
{
  id: "laktat-pri-kyanide",
  title: "Laktát pri otrave kyanidom",
  match: ["dym\\w* pri požiari", "otrav\\w* kyanid\\w*"],
  short: "Najčastejším zdrojom kyanidu je dym pri požiari v uzavretom priestore; laktát v publikovaných súboroch stúpa až nad 20 mmol/l (norma 0,5–2,2).",
  body: ""
},
{
  id: "dedicnost-po-matke",
  title: "Dedičnosť po matke a heteroplazmia",
  match: ["po matke", "heteroplazmi\\w*"],
  short: "Mitochondrie zárodku pochádzajú z vajíčka; bunka môže niesť zmes zdravých a zmenených molekúl DNA a závažnosť závisí od ich pomeru v tkanive.",
  body: ""
},
{
  id: "merrf",
  title: "MERRF a Pearsonov syndróm",
  match: ["MERRF", "Pearsonov\\w*"],
  short: "MERRF je myoklonická epilepsia s „roztrhanými“ červenými svalovými vláknami (najčastejšie mutácia génu pre tRNA); Pearsonov syndróm vzniká z rozsiahlej delécie mitochondriovej DNA.",
  body: ""
},
{
  id: "rna-trna-rrna",
  title: "RNA, tRNA a rRNA",
  match: ["tRNA", "rRNA", "RNA"],
  short: "Mitochondriová DNA kóduje trinásť bielkovín (podjednotky komplexov reťazca a ATP-syntázy) a k nim vlastné tRNA a rRNA; ostatné bielkoviny dodáva jadro.",
  body: ""
},
{
  id: "reaktivne-formy-kyslika",
  title: "Reaktívne formy kyslíka",
  match: ["reaktívn\\w* form\\w* kyslíka", "hydroxylov\\w* radikál\\w*"],
  short: "Elektrón občas unikne z polovične redukovaného koenzýmu Q priamo na kyslík: vznikne superoxid, z neho peroxid vodíka a hydroxylový radikál. Ochrana: glutatión a hydroperoxidázy.",
  body: ""
},
{
  id: "hif-1a-vhl",
  title: "HIF-1α, VHL a erytropoetín",
  match: ["HIF-1α", "VHL", "erytropoetín\\w*"],
  short: "Pri dostatku kyslíka sa HIF-1α hydroxyluje na prolíne a VHL ho pošle na rozklad; bez kyslíka sa hromadí a zapne gény pre erytropoetín, nové cievy a prestavbu metabolizmu.",
  body: ""
},
{
  id: "depolarizacia",
  title: "Depolarizácia bunky karotického telieska",
  match: ["depolarizuj\\w*", "depolarizáci\\w*", "draslíkov\\w* kanál\\w*"],
  short: "Pokles kyslíka zatvorí v bunkách karotického telieska draslíkové kanály; bunka sa depolarizuje, vstúpi do nej Ca²⁺ a uvoľnený prenášač podráždi nerv, ktorý zrýchli dýchanie.",
  body: ""
}
);
