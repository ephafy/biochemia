/* Glosár BIOCHEM — ATP a jeho zásobníky, oxidoreduktázy, dýchací reťazec, oxidačná fosforylácia, člnky (kap. 7).
   Formát záznamu: assets/glossary/README.md. Texty sú vlastné (CLAUDE.md §4.1). */
(window.PF_GLOSSARY = window.PF_GLOSSARY || []).push(
{
  id: "kreatinfosfat",
  title: "Kreatínfosfát a kreatínkináza",
  match: ["kreatínfosfát\\w*", "kreatínkináz\\w*"],
  short: "Rýchla zásoba makroergického fosfátu vo svale, srdci a mozgu; kreatínkináza ho vratne prenáša medzi kreatínom a ATP.",
  body:
    '<p class="chain">kreatín + ATP ⇌ kreatínfosfát + ADP</p>' +
    "<ul>" +
      "<li><b>V pokoji</b> sa zásoba plní, <b>pri práci</b> dopĺňa ATP v prvých sekundách.</li>" +
      "<li><b>V sére</b> — aktivita kreatínkinázy stúpa pri rozpade svalových buniek; izoenzýmy napovedia tkanivo.</li>" +
    "</ul>"
},
{
  id: "adenylatkinaza", title: "Adenylátkináza", match: ["adenylátkináz\\w*", "myokináz\\w*"],
  short: "Enzým, ktorý z dvoch ADP robí ATP a AMP; AMP je citlivý signál nedostatku energie.",
  body: ""
},
{
  id: "redoxny-potencial",
  title: "Redoxný potenciál",
  match: ["redoxn\\w* potenciál\\w*"],
  short: "Miera ochoty dvojice látok odovzdať elektróny; elektróny tečú od páru s nižším (zápornejším) potenciálom k páru s vyšším.",
  body:
    "<ul>" +
      "<li><b>NAD⁺/NADH</b> −0,32 V · <b>½ O₂/H₂O</b> +0,82 V.</li>" +
      "<li><b>Energia</b> — ΔG°′ = −n · F · ΔE°′; rozdiel 1,14 V pri dvoch elektrónoch ≈ −220 kJ/mol.</li>" +
    "</ul>"
},
{
  id: "oxidoreduktazy",
  title: "Oxidoreduktázy: dehydrogenáza, oxidáza, oxygenáza",
  match: ["oxidoreduktáz\\w*", "oxygenáz\\w*", "monooxygenáz\\w*", "dioxygenáz\\w*", "hydroperoxidáz\\w*"],
  short: "Enzýmy oxidácie a redukcie; delia sa podľa úlohy kyslíka.",
  body:
    "<ul>" +
      "<li><b>Dehydrogenázy</b> — vodík na koenzým, kyslík netreba.</li>" +
      "<li><b>Oxidázy</b> — vodík priamo na O₂ → voda alebo peroxid vodíka.</li>" +
      "<li><b>Hydroperoxidázy</b> — odstraňujú peroxidy (kataláza, peroxidázy).</li>" +
      "<li><b>Oxygenázy</b> — zabudujú kyslík do substrátu (cytochróm P450).</li>" +
    "</ul>"
},
{
  id: "katalaza", title: "Kataláza", match: ["kataláz\\w*"],
  short: "Hémový enzým, ktorý rozkladá peroxid vodíka: 2 H₂O₂ → 2 H₂O + O₂.",
  body: ""
},
{
  id: "cytochrom-p450", title: "Cytochróm P450", match: ["cytochróm\\w* P450"],
  short: "Rodina monooxygenáz: jeden atóm kyslíka vložia do substrátu, druhý redukujú na vodu; vodíky dodáva NADPH. Odbúravanie cudzorodých látok a tvorba steroidov.",
  body: ""
},
{
  id: "hydridovy-ion", title: "Hydridový ión", match: ["hydridov\\w* ión\\w*"],
  short: "Vodík s dvoma elektrónmi (H⁻); v tejto podobe prijíma NAD⁺ vodík od substrátu, druhý protón ostane v roztoku.",
  body: ""
},
{
  id: "flavoprotein", title: "Flavoproteín (FAD, FMN)", match: ["flavoproteín\\w*", "FMN", "flavín\\w*"],
  short: "Enzým s pevne viazaným FAD alebo FMN (z riboflavínu); flavín prijme dva vodíky naraz alebo po jednom elektróne.",
  body: ""
},
{
  id: "koenzym-q",
  title: "Koenzým Q (ubichinón)",
  match: ["koenzým\\w* Q", "ubichinón\\w*", "ubichinol\\w*"],
  short: "Malý lipid pohyblivý vo vnútornej membráne mitochondrie; zberné miesto elektrónov z komplexov I a II a z ďalších flavoproteínov, odovzdáva ich komplexu III.",
  body: ""
},
{
  id: "cytochromy", title: "Cytochrómy", match: ["cytochróm\\w* c", "cytochróm\\w*"],
  short: "Bielkoviny s hémom, v ktorom železo strieda Fe²⁺ a Fe³⁺ a prenáša po jednom elektróne. Cytochróm c je pohyblivý spoj medzi komplexmi III a IV.",
  body: ""
},
{
  id: "komplexy-retazca",
  title: "Komplexy dýchacieho reťazca",
  match: ["komplex\\w* I", "komplex\\w* II", "komplex\\w* III", "komplex\\w* IV", "cytochróm-c-oxidáz\\w*"],
  short: "Štyri bielkovinové komplexy vnútornej membrány mitochondrie, ktorými elektróny prechádzajú k stále vyššiemu redoxnému potenciálu.",
  body:
    "<ul>" +
      "<li><b>I</b> — NADH → Q; pumpuje 4 H⁺. Blok: rotenón, amobarbital.</li>" +
      "<li><b>II</b> — sukcinát → Q; nepumpuje. Blok: malonát.</li>" +
      "<li><b>III</b> — Q → cytochróm c; 4 H⁺. Blok: antimycín A.</li>" +
      "<li><b>IV</b> — cytochróm c → O₂ → voda; 2 H⁺. Blok: kyanid, CO, azid, sulfán.</li>" +
    "</ul>"
},
{
  id: "protonovy-gradient",
  title: "Protónový gradient",
  match: ["protónov\\w* gradient\\w*", "protónmotívn\\w* sil\\w*", "chemiosmotick\\w*"],
  short: "Rozdiel koncentrácie protónov a náboja cez vnútornú membránu mitochondrie, ktorý vytvárajú pumpy reťazca a ktorý poháňa ATP-syntázu.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Reťazec a syntézu ATP nespája chemický medziprodukt, ale tento gradient – preto treba neporušenú membránu a preto rozpojovač zastaví tvorbu ATP bez poškodenia enzýmov.</p>'
},
{
  id: "atp-syntaza", title: "ATP-syntáza", match: ["ATP-syntáz\\w*"],
  short: "Enzým vnútornej membrány mitochondrie poháňaný prúdom protónov: časť F₀ je rotujúci kanál, časť F₁ má tri miesta, kde z ADP a fosfátu vzniká ATP. Blokuje ju oligomycín.",
  body: ""
},
{
  id: "pomer-p-o",
  title: "Pomer P/O",
  match: ["pomer\\w* P/O", "P/O"],
  short: "Počet ATP vytvorených na jeden atóm kyslíka, teda na pár elektrónov: približne 2,5 pre NADH a 1,5 pre FADH₂ (staršie 3 a 2).",
  body:
    '<p class="chain">NADH: 10 H⁺ ÷ ≈ 4 H⁺ na ATP ≈ 2,5 · FADH₂: 6 H⁺ ÷ 4 ≈ 1,5</p>'
},
{
  id: "respiracna-kontrola",
  title: "Respiračná kontrola",
  match: ["respiračn\\w* kontrol\\w*"],
  short: "Riadenie rýchlosti dýchacieho reťazca dostupnosťou ADP: bez ADP sa protóny nevracajú, gradient narastie a prenos elektrónov sa zastaví.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Spotreba kyslíka tak sleduje spotrebu ATP bez akéhokoľvek hormónu.</p>'
},
{
  id: "rozpojovac",
  title: "Rozpojovač",
  match: ["rozpojovač\\w*", "rozpojen\\w*", "dinitrofenol\\w*", "2,4-dinitrofenol\\w*"],
  short: "Látka alebo bielkovina, ktorá vracia protóny cez membránu mimo ATP-syntázy: reťazec beží rýchlejšie, kyslík sa míňa, ATP nevzniká a energia sa uvoľní ako teplo.",
  body:
    "<ul>" +
      "<li><b>2,4-dinitrofenol</b> — slabá kyselina rozpustná v tukoch; otrava = prehriatie.</li>" +
      "<li><b>Termogenín</b> — fyziologický rozpojovač hnedého tuku.</li>" +
    "</ul>"
},
{
  id: "termogenin", title: "Termogenín (UCP1)", match: ["termogenín\\w*", "UCP1", "netrasov\\w* termogenéz\\w*", "hned\\w* tuk\\w*"],
  short: "Rozpojovacia bielkovina vnútornej membrány mitochondrií hnedého tuku; otvárajú ju mastné kyseliny. Vyrába teplo bez svalovej práce – najmä u novorodenca.",
  body: ""
},
{
  id: "oligomycin", title: "Oligomycín", match: ["oligomycín\\w*"],
  short: "Inhibítor, ktorý uzavrie protónový kanál ATP-syntázy; gradient narastie a zastaví sa aj prenos elektrónov – dôkaz spriahnutia.",
  body: ""
},
{
  id: "kyanid",
  title: "Kyanid",
  match: ["kyanid\\w*"],
  short: "Viaže sa na železo cytochrómu a₃ v komplexe IV: kyslík sa nespotrebúva, ATP ostáva len z glykolýzy a laktát prudko stúpa.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Zdrojom býva dym pri požiari; protilátka hydroxokobalamín kyanid viaže na kobalt.</p>'
},
{
  id: "rotenon", title: "Rotenón", match: ["rotenón\\w*", "amobarbital\\w*"],
  short: "Inhibítor komplexu I (podobne amobarbital): NADH sa neoxiduje, sukcinát cez komplex II áno.",
  body: ""
},
{
  id: "antimycin", title: "Antimycín A", match: ["antimycín\\w*"],
  short: "Inhibítor komplexu III dýchacieho reťazca.",
  body: ""
},
{
  id: "clnky",
  title: "Člnky pre cytosolový NADH",
  match: ["člnky", "člnkov", "člnkom", "člnkoch", "glycerolfosfátov\\w* člnok", "glycerolfosfátov\\w* člnk\\w*", "malát-aspartátov\\w* člnok", "malát-aspartátov\\w* člnk\\w*"],
  short: "Cesty, ktorými sa vodíky NADH z cytosolu dostanú do mitochondrie, hoci NADH sám membránou neprejde.",
  body:
    "<ul>" +
      "<li><b>Malát-aspartátový</b> — vodíky skončia na NAD⁺ v matrix → ≈ 2,5 ATP; pečeň, srdce, oblička.</li>" +
      "<li><b>Glycerolfosfátový</b> — vodíky idú cez FAD na koenzým Q → ≈ 1,5 ATP; mozog, rýchly sval.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Odtiaľ je rozpätie 30–32 ATP na glukózu.</p>'
},
{
  id: "translokaza-adp-atp", title: "Translokáza adenínových nukleotidov", match: ["translokáz\\w*"],
  short: "Prenášač vnútornej membrány mitochondrie, ktorý vymieňa ADP z cytosolu za ATP z matrix.",
  body: ""
},
{
  id: "mitochondriova-dna",
  title: "Mitochondriová DNA",
  match: ["mitochondriov\\w* DNA"],
  short: "Kruhová DNA mitochondrie; kóduje 13 podjednotiek dýchacieho reťazca a ATP-syntázy. Dedí sa po matke, mutuje častejšie a v bunke je v mnohých kópiách.",
  body:
    '<p class="why"><b>Prečo to je dôležité.</b> Jej mutácie postihnú tkanivá s najväčšou spotrebou ATP – mozog, zrakový nerv, sval, srdce.</p>'
},
{
  id: "lhon", title: "Leberova dedičná neuropatia zrakového nervu", match: ["Leberov\\w* dedičn\\w* neuropati\\w*"],
  short: "Mutácie mitochondriovej DNA v podjednotkách komplexu I; u mladých dospelých strata centrálneho videnia.",
  body: ""
},
{
  id: "melas", title: "MELAS", match: ["MELAS"],
  short: "Mitochondriová choroba pomenovaná podľa hlavných znakov: myopatia, encefalopatia, laktátová acidóza a príhody podobné mozgovej mŕtvici.",
  body: ""
},
{
  id: "superkomplex", title: "Superkomplex", match: ["superkomplex\\w*"],
  short: "Väčší celok, do ktorého sa v membráne spájajú komplexy dýchacieho reťazca; ukázala ho kryoelektrónová mikroskopia.",
  body: ""
},
{
  id: "metylenova-modra",
  title: "Metylénová modrá",
  match: ["metylénov\\w* modr\\w*", "leukoform\\w*"],
  short: "Farbivo, ktoré ako umelý akceptor prijíma vodíky a odfarbí sa na leukoformu; kyslík ho bez enzýmu oxiduje späť.",
  body:
    "<ul>" +
      "<li><b>V skúmavke</b> — odfarbenie ukazuje, že beží dehydrogenácia.</li>" +
      "<li><b>Ako liek</b> — pri methemoglobinémii; potrebuje NADPH erytrocytu, preto pri deficite glukóza-6-fosfátdehydrogenázy zlyhá a môže vyvolať hemolýzu.</li>" +
    "</ul>"
},
{
  id: "methemoglobinemia", title: "Methemoglobinémia", match: ["methemoglobinémi\\w*", "methemoglobín\\w*"],
  short: "Stav, keď je železo hemoglobínu oxidované na Fe³⁺ a kyslík neviaže.",
  body: ""
},
{
  id: "hydroxokobalamin", title: "Hydroxokobalamín", match: ["hydroxokobalamín\\w*"],
  short: "Prekurzor vitamínu B₁₂ používaný ako protilátka pri otrave kyanidom: kobalt kyanid naviaže a vzniknutý kyanokobalamín odíde močom.",
  body: ""
},
{
  id: "kreatinin", title: "Kreatinín", match: ["kreatinín\\w*"],
  short: "Kruhová zlúčenina, na ktorú sa kreatínfosfát samovoľne, bez enzýmu, mení. Odchádza močom; množstvo vylúčené za deň zodpovedá svalovej hmote.",
  body: ""
},
{
  id: "atraktylozid", title: "Atraktylozid", match: ["atraktylozid\\w*"],
  short: "Jed, ktorý brzdí translokázu adenínových nukleotidov: ADP sa nedostane do matrix a ATP von, takže oxidačná fosforylácia zastane, hoci reťazec aj syntáza sú neporušené.",
  body: ""
},
{
  id: "ionofor", title: "Ionofór", match: ["ionofór\\w*", "valinomycín\\w*"],
  short: "Látka rozpustná v tukoch, ktorá cez membránu prevedie určitý ión: valinomycín draslík, dinitrofenol protón. Ionofór pre protóny je rozpojovač.",
  body: ""
},
{
  id: "kristy", title: "Kristy", match: ["krist(?:y|ách|ami)"],
  short: "Záhyby vnútornej membrány mitochondrie. Zväčšujú plochu, na ktorej sedí dýchací reťazec a ATP-syntáza.",
  body: ""
},
{
  id: "apoptoza", title: "Apoptóza a cytochróm c", match: ["apoptóz\\w*", "kaspáz\\w*"],
  short: "Riadený zánik bunky. Jednu z ciest spúšťa cytochróm c, ktorý unikne z poškodenej mitochondrie do cytosolu a zapne proteázy kaspázy.",
  body: ""
},
{
  id: "karoticke-teliesko", title: "Karotické teliesko", match: ["karotick\\w* teliesk\\w*"],
  short: "Malý orgán pri vetvení krčnej tepny, ktorý v priebehu sekúnd zaznamená pokles kyslíka v krvi a cez nerv zrýchli dýchanie.",
  body: ""
},
{
  id: "nernstova-rovnica", title: "Nernstova rovnica", match: ["Nernstov\\w* rovnic\\w*"],
  short: "Vzťah, podľa ktorého skutočný redoxný potenciál páru závisí od pomeru jeho oxidovanej a redukovanej formy: E = E°′ + (RT/nF) · ln([ox]/[red]).",
  body: ""
},
{
  id: "stavy-dychania", title: "Stavy dýchania mitochondrií", match: ["Stav [345]", "stav [345]"],
  short: "Označenie situácií v pokusoch s izolovanými mitochondriami: stav 3 – rýchle dýchanie pri nadbytku substrátu a ADP; stav 4 – pomalé po vyčerpaní ADP (bunka v pokoji); stav 5 – zastavenie bez kyslíka.",
  body: ""
}
);
