/* Glosár BIOCHEM — doplnok k celku „glykolýza a glukoneogenéza“ (kap. 4).
   Formát záznamu: assets/glossary/README.md. Texty sú vlastné (CLAUDE.md §4.1), písané z faktov kapitoly. */
(window.PF_GLOSSARY = window.PF_GLOSSARY || []).push(
{
  id: "investicna-faza",
  title: "Investičná a výnosná fáza glykolýzy",
  match: ["investičn\\w* fáz\\w*", "výnosn\\w* fáz\\w*"],
  short: "Prvých päť krokov spotrebuje 2 ATP a z hexózy urobí dve triózy; krokmi 6–10 sa ATP vyberie s úrokom (4 ATP, 2 NADH).",
  body:
    '<p class="chain">glukóza → (2 ATP) → fruktóza-1,6-bisfosfát → 2 triózy → oxidácia → 2 × substrátová fosforylácia → <b>4 ATP</b></p>' +
    '<p class="why"><b>Prečo to je dôležité.</b> Od rozštiepenia hexózy treba všetko násobiť dvoma.</p>'
},
{
  id: "glukoza-6-fosfat-izomeraza",
  title: "Glukóza-6-fosfátizomeráza a fruktóza-6-fosfát",
  match: ["glukóza-6-fosfátizomeráz\\w*", "fruktóza-6-fosfát\\w*"],
  short: "Vratný krok 2: zmení aldózu na ketózu, uvoľní hydroxyl na uhlíku 1 pre druhý fosfát a posunie karbonyl tak, aby sa reťazec rozštiepil presne v strede.",
  body: ""
},
{
  id: "fosfoglyceratkinaza",
  title: "Fosfoglycerátkináza",
  match: ["fosfoglycerátkináz\\w*"],
  short: "Krok 7: prenesie fosfát z 1,3-bisfosfoglycerátu na ADP → ATP + 3-fosfoglycerát; prvá substrátová fosforylácia, vratný krok.",
  body: ""
},
{
  id: "fosfoglyceratmutaza",
  title: "Fosfoglycerátmutáza a 3-fosfoglycerát",
  match: ["fosfoglycerátmutáz\\w*", "3-fosfoglycerát\\w*"],
  short: "Krok 8: presunie zvyšný fosfát z uhlíka 3 na uhlík 2; vratný.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Z 3-fosfoglycerátu vzniká aj aminokyselina serín.</p>'
},
{
  id: "acylfosfat-enolfosfat",
  title: "Acylfosfát a enolfosfát",
  match: ["acylfosfát\\w*", "enolfosfát\\w*"],
  short: "Dve fosfátové väzby s vysokou energiou hydrolýzy v glykolýze: acylfosfát v 1,3-bisfosfoglyceráte a enolfosfát vo fosfoenolpyruváte; z oboch prejde fosfát priamo na ADP.",
  body: ""
},
{
  id: "tioester-enzymu",
  title: "Tioesterový medziprodukt v kroku 6",
  match: ["tioester s enzýmom"],
  short: "Aldehyd sa pripojí na SH-skupinu cysteínu v aktívnom mieste a oxidáciou z neho vznikne tioester s enzýmom; ten rozštiepi anorganický fosfát namiesto vody.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Jódacetát obsadí tú istú SH-skupinu, a preto zastaví celú dráhu.</p>'
},
{
  id: "hexoza-trioza",
  title: "Hexóza a trióza",
  match: ["hexóz\\w*", "trióz\\w*"],
  short: "Šesťuhlíkový a trojuhlíkový cukor; glykolýza rozštiepi hexózu na dve triózy a ďalej ide dráha dvakrát.",
  body: ""
},
{
  id: "mg-atp",
  title: "Mg²⁺ a ATP",
  match: ["Mg²⁺"],
  short: "Každá kináza pracuje s ATP viazaným na Mg²⁺; v bunke je ATP viazaný práve s horčíkom.",
  body: ""
},
{
  id: "anaerobna-aerobna-glykolyza",
  title: "Anaeróbna × aeróbna glykolýza",
  match: ["anaeróbn\\w*", "aeróbn\\w*"],
  short: "Obe dajú čistý zisk 2 ATP; aeróbna navyše 2 NADH a pyruvát pre mitochondriu, anaeróbna končí laktátom.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Výhodou anaeróbnej glykolýzy nie je účinnosť, ale rýchlosť a nezávislosť od kyslíka.</p>'
},
{
  id: "alkoholove-kvasenie",
  title: "Alkoholové kvasenie",
  match: ["alkoholov\\w* kvasen\\w*", "kvasink\\w*"],
  short: "Kvasinky zbavia pyruvát CO₂ a vzniknutý acetaldehyd zredukujú na etanol; účel je rovnaký ako pri laktáte – vrátiť NAD⁺.",
  body: ""
},
{
  id: "izoenzymy-ld",
  title: "Izoenzýmy laktátdehydrogenázy (H a M)",
  match: ["izoenzým\\w* LD", "H₄", "M₄"],
  short: "LD je tetramér zo svalovej (M) a srdcovej (H) podjednotky; kombináciami vzniká päť izoenzýmov od H₄ po M₄ a ich vzor v sére napovie, z ktorého tkaniva enzým unikol.",
  body: ""
},
{
  id: "laktatovy-clnok",
  title: "Laktátový člnok",
  match: ["laktátov\\w* člnok\\w*", "laktátov\\w* člnk\\w*"],
  short: "Laktát vzniká stále, aj pri dostatku kyslíka, a medzi bunkami a orgánmi sa prenáša ako palivo a stavebná látka: srdce a pokojové svaly ho spaľujú, neuróny ho dostávajú od astrocytov, pečeň z neho robí glukózu.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Zvýšený laktát v krvi neznamená „jed“, ale nepomer medzi tvorbou a odberom.</p>'
},
{
  id: "malat",
  title: "Malát",
  match: ["malát\\w*"],
  short: "Nosič vodíkov: v cytosole vzniká zredukovaním oxalacetátu, prenášač ho zavedie do matrix; v glukoneogenéze cestuje opačne a vynesie oxalacetát do cytosolu.",
  body: ""
},
{
  id: "glycerol-3-fosfat",
  title: "Glycerol-3-fosfát",
  match: ["glycerol-3-fosfát\\w*"],
  short: "Vzniká z dihydroxyacetónfosfátu; je kostrou triacylglycerolov a nosičom vodíkov v glycerolfosfátovom člnku (enzým s FAD → koenzým Q, výnos ≈ 1,5 ATP).",
  body: ""
},
{
  id: "glukogenne-aminokyseliny",
  title: "Glukogénne aminokyseliny, alanín a glutamín ako substrát",
  match: ["glukogénn\\w* aminokyselin\\w*", "glutamín\\w*"],
  short: "Aminokyseliny, z ktorých sa dá vyrobiť pyruvát, oxalacetát alebo triózafosfát; pri dlhšom lačnení sú významným zdrojom, cenou je svalová hmota.",
  body: ""
},
{
  id: "amoniak-oblicka",
  title: "Oblička: glutamín a amoniak",
  match: ["amoniak\\w*"],
  short: "Oblička odštiepi z glutamínu amoniak a uhlíkovú kostru (2-oxoglutarát) pošle ku glukóze; amoniak v moči viaže kyseliny, ktorých pri hladovaní pribúda.",
  body: ""
},
{
  id: "obchadzka",
  title: "Obchádzka nevratného kroku",
  match: ["obchádzk\\w*"],
  short: "Opačný smer dráhy musí nevratný krok obísť iným enzýmom: pyruvátkináza → pyruvátkarboxyláza a PEPCK, PFK-1 → fruktóza-1,6-bisfosfatáza, hexokináza → glukóza-6-fosfatáza.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Glykolýza získa 2 ATP, cesta späť stojí šesť makroergických väzieb; preto oba smery nesmú bežať naraz.</p>'
},
{
  id: "gtp",
  title: "GTP — guanozíntrifosfát",
  match: ["GTP", "GDP", "guanozíntrifosfát\\w*", "guanozíndifosfát\\w*"],
  short: "Nukleotid, ktorý PEPCK spotrebuje pri premene oxalacetátu na fosfoenolpyruvát (→ GDP); v glukoneogenéze zaplatí dve makroergické väzby na glukózu.",
  body: ""
},
{
  id: "gluk-ala-cyklus",
  title: "Glukózo-alanínový cyklus",
  match: ["glukózo-alanínov\\w* cykl\\w*"],
  short: "Sval prenáša pyruvát vo forme alanínu do pečene; alanín prenáša okrem uhlíka aj aminoskupinu, takže odváža dusík.",
  body: ""
},
{
  id: "aminotransferaza",
  title: "Alanínaminotransferáza",
  match: ["alanínaminotransferáz\\w*", "aminotransferáz\\w*"],
  short: "Vratne mení pyruvát na alanín; vo svale slúži na odvoz dusíka do pečene.",
  body: ""
},
{
  id: "pomer-atp-amp",
  title: "Pomer ATP : AMP",
  match: ["pomer ATP\\w*", "pomer\\w* AMP"],
  short: "Vysoký pomer ATP : AMP glykolýzu spomalí, nízky ju zrýchli; AMP zapína PFK-1 a brzdí fruktóza-1,6-bisfosfatázu.",
  body: ""
},
{
  id: "noradrenalin",
  title: "Noradrenalín",
  match: ["noradrenalín\\w*"],
  short: "Povzbudí srdce; proteínkináza A potom fosforyluje srdcový izoenzým bifunkčného enzýmu a glykolýza zrýchli.",
  body: ""
},
{
  id: "circulus-vitiosus",
  title: "Circulus vitiosus (bludný kruh)",
  match: ["circulus vitiosus", "bludn\\w* kruh\\w*"],
  short: "Reťaz dejov, v ktorej následok zhoršuje príčinu; pri laktátovej acidóze: bez O₂ → laktát a H⁺ → ↓ pH → slabne srdce → ešte menej O₂. Bod zvratu je obnovenie prekrvenia.",
  body: ""
},
{
  id: "sepsa",
  title: "Sepsa a meranie laktátu",
  match: ["seps\\w*"],
  short: "Pri podozrení na sepsu sa odporúča laktát zmerať a pri zvýšenej hodnote viesť liečbu tak, aby klesal; hodnota sa číta spolu s tlakom, prekrvením a stavom pacienta.",
  body: ""
},
{
  id: "hemolyza",
  title: "Hemolýza",
  match: ["hemolýz\\w*"],
  short: "Predčasný rozpad erytrocytov; pri deficite pyruvátkinázy erytrocyt tvorí málo ATP, stráca tvar a pružnosť a slezina ho odstráni.",
  body: ""
},
{
  id: "kyselina-listova",
  title: "Kyselina listová",
  match: ["kyselin\\w* listov\\w*"],
  short: "Podporná liečba pri deficite pyruvátkinázy: kostná dreň ju pri zrýchlenej tvorbe erytrocytov míňa.",
  body: ""
},
{
  id: "slezina",
  title: "Slezina",
  match: ["slezin\\w*"],
  short: "Orgán, ktorý odstraňuje deformované a nepružné erytrocyty.",
  body: ""
},
{
  id: "elektroforeza-izoenzymov",
  title: "Elektroforéza izoenzýmov",
  match: ["elektroforéz\\w*"],
  short: "Oddelí izoenzýmy LD podľa ich pohybu v elektrickom poli; ich vzor sa líši podľa tkaniva, ktoré enzým uvoľnilo (iný po infarkte myokardu, iný pri chorobe pečene).",
  body: ""
},
{
  id: "infarkt-myokardu",
  title: "Infarkt myokardu",
  match: ["infarkt\\w*"],
  short: "Zlyhanie obehu s nedostatkom O₂ v tkanivách môže zvýšiť laktát; po infarkte sa mení aj vzor izoenzýmov LD v sére.",
  body: ""
},
{
  id: "nadorovy-metabolizmus-laktat",
  title: "Nádorové bunky a laktát",
  match: ["nádorov\\w* bunk\\w*"],
  short: "Rýchlo rastúce nádorové bunky štiepia glukózu na laktát vysokou rýchlosťou, hoci kyslík majú (Warburgov efekt); okolie nádoru sa okysľuje.",
  body: ""
},
{
  id: "zlyhanie-pecene",
  title: "Zlyhanie pečene",
  match: ["zlyhani\\w* pečen\\w*"],
  short: "Zníži odber laktátu aj glukoneogenézu: laktát sa nemá ako premeniť na glukózu a hrozí hypoglykémia nalačno.",
  body: ""
},
{
  id: "nadmerna-tvorba-znizeny-odber",
  title: "Laktát: tvorba a odber",
  match: ["nadmern\\w* tvorb\\w*", "znížen\\w* odber\\w*"],
  short: "Laktát v krvi je výslednicou toho, koľko ho tkanivá tvoria a koľko ho pečeň, srdce a oblička odoberú; stúpne, keď sa zvýši prvé, zníži druhé, alebo oboje.",
  body: ""
},
{
  id: "laktat-v-likvore",
  title: "Laktát v mozgovomiechovom moku",
  match: ["laktát v mozgovomiechovom moku"],
  short: "U dospelých približne 1,1–2,4 mmol/l (rozpätie jedného britského laboratória); zvýšenie svedčí napríklad pre bakteriálny zápal mozgových blán alebo ťažký nedostatok kyslíka v mozgu.",
  body: ""
}
);
