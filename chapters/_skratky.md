# Skratky na okraji

Slovník skratiek pre **okrajové poznámky** (CLAUDE.md §5.3). Súbor začína „_“, build ho nestavia ako
kapitolu, len z neho číta. Keď sa skratka v kapitole objaví **prvý raz**, `tools/build.js` vloží za daný
odsek, box alebo tabuľku drobnú poznámku na okraj (na mobile a v tlači riadok pod blokom). Sekcie
*Otázky* a *Zdroje* sa neprehľadávajú.

- **Skratka** – ako sa zobrazí na okraji.
- **Význam** – krátko, slovensky; pôvodný anglický názov kurzívou len tam, kde zo skratky inak nie je jasný.
- **Vzor** – nepovinný regulárny výraz, keď sa v texte hľadá iný tvar než samotná skratka
  (zvislú čiaru píš ako `\|`). Hľadá sa s rozlíšením veľkých a malých písmen a len celé „slovo“.
- **Len kap.** – nepovinné čísla kapitol oddelené čiarkou, keď skratka znamená v rôznych kapitolách
  rôzne veci.

Nová skratka v texte = nový riadok tu. Význam je fakt (názov), nie formulácia z učebnice (§4.1).
Súbor je zatiaľ prázdny – riadky pribúdajú s kapitolami (skupiny: koenzýmy a energia · enzýmy ·
metabolity · hormóny a signalizácia · laboratórne parametre · choroby).

## Koenzýmy a energia

| Skratka | Význam | Vzor | Len kap. |
| --- | --- | --- | --- |
| ATP | adenozíntrifosfát – univerzálny nosič energie | | |
| ADP | adenozíndifosfát | | |
| NAD⁺ | nikotínamid-adenín-dinukleotid, oxidovaná forma – prijíma elektróny | NAD⁺ | |
| NADH | redukovaná forma NAD⁺ – nesie dva elektróny | | |
| NADPH | redukovaný NADP⁺ (NAD⁺ s fosfátom navyše) – elektróny pre syntézy | | |
| FAD | flavín-adenín-dinukleotid – prijíma dva vodíky (→ FADH₂) | | |
| CoA | koenzým A – nosič acylov | | |
| UDP | uridíndifosfát – nosič aktivovaných cukrov | | |
| P<sub>i</sub> | anorganický fosfát | P<sub>i</sub> | |
| PP<sub>i</sub> | anorganický difosfát (pyrofosfát) | PP<sub>i</sub> | |
| UTP | uridíntrifosfát – dodáva energiu na aktiváciu cukrov | | |
| GTP | guanozíntrifosfát – energeticky rovnocenný s ATP | | |
| NADP⁺ | NAD⁺ s fosfátom navyše, oxidovaná forma – po redukcii NADPH | NADP⁺ | |
| GSH | redukovaný glutatión – tripeptid s voľnou SH-skupinou | | |
| GSSG | oxidovaný glutatión – dve molekuly spojené disulfidom | | |
| FADH₂ | redukovaný FAD – nesie dva vodíky | | |
| FMN | flavínmononukleotid – flavínový koenzým komplexu I | | |
| GDP | guanozíndifosfát | | 6, 7 |

## Enzýmy

| Skratka | Význam | Vzor | Len kap. |
| --- | --- | --- | --- |
| EC | číslo enzýmu podľa názvoslovia IUBMB (*Enzyme Commission*) | | |
| IUBMB | Medzinárodná únia biochémie a molekulárnej biológie | | |
| ALP | alkalická fosfatáza | | |
| LD | laktátdehydrogenáza (aj LDH) | | |
| PFK-1 | fosfofruktokináza-1 – riadiaci enzým glykolýzy | | |
| PEPCK | fosfoenolpyruvátkarboxykináza – enzým glukoneogenézy | | |
| G6PD | glukóza-6-fosfátdehydrogenáza – riadiaci enzým pentózofosfátovej dráhy | | |
| ACC | acetyl-CoA-karboxyláza – riadiaci enzým syntézy mastných kyselín | ACC[12]? | |
| CPT | karnitínpalmitoyltransferáza – I vo vonkajšej, II vo vnútornej membráne mitochondrie | CPT I+ | |
| MCAD | acyl-CoA-dehydrogenáza pre stredne dlhé reťazce (*medium-chain acyl-CoA dehydrogenase*) | | |
| ACP | bielkovinový nosič acylov v syntáze mastných kyselín (*acyl carrier protein*) | | |
| ETF | flavoproteín prenášajúci elektróny z β-oxidácie na koenzým Q (*electron-transferring flavoprotein*) | | |

## Metabolity

| Skratka | Význam | Vzor | Len kap. |
| --- | --- | --- | --- |
| MK | mastná kyselina | | |
| TAG | triacylglycerol | | |
| VLDL | lipoproteín s veľmi nízkou hustotou – vynáša tuk z pečene | | |
| HDL | lipoproteín s vysokou hustotou | | |
| apo | apolipoproteín – bielkovina lipoproteínovej častice (napr. apo B-48, apo C-II) | apo [A-E] | |
| GDP | guanozíndifosfát – v nukleotidových cukroch nosič manózy a fukózy | | 5 |
| CMP | cytidínmonofosfát – nosič kyseliny sialovej | | 5 |
| GABA | kyselina γ-aminomaslová – tlmivý prenášač v mozgu | | |

## Laboratórne parametre

| Skratka | Význam | Vzor | Len kap. |
| --- | --- | --- | --- |
| HbA1c | glykovaný hemoglobín | | |
| pI | izoelektrický bod | | |
| pCO₂ | parciálny tlak oxidu uhličitého | | |
| IFCC | Medzinárodná federácia klinickej chémie a laboratórnej medicíny | | |
| ADA | Americká diabetologická asociácia | | |
| WHO | Svetová zdravotnícka organizácia | | |
| HIF | transkripčný faktor indukovaný hypoxiou (*hypoxia-inducible factor*) | | |
| UCP1 | rozpojovacia bielkovina 1 – termogenín hnedého tuku (*uncoupling protein*) | | |
| MELAS | mitochondriová myopatia, encefalopatia, laktátová acidóza a príhody podobné mŕtvici | | |
| DNA | deoxyribonukleová kyselina | | |
| tRNA | transferová RNA | | |
| rRNA | ribozómová RNA | | |
| Km | Michaelisova konštanta – koncentrácia substrátu pri polovičnej Vmax | | |
| Vmax | maximálna rýchlosť reakcie pri nasýtení enzýmu substrátom | | |
| AMPK | proteínkináza aktivovaná AMP – senzor energie v bunke | | |
| SREBP-1c | transkripčný faktor, ktorý na pokyn inzulínu zapína gény syntézy tukov | | |
| ChREBP | transkripčný faktor, ktorý na sacharidy odpovedá zapnutím génov syntézy tukov | | |
| PPARα | jadrový receptor aktivovaný mastnými kyselinami – zapína gény β-oxidácie | | |
| cAMP | cyklický adenozínmonofosfát – druhý posol | | |
| AMP | adenozínmonofosfát | | |
| GSK-3 | kináza glykogénsyntázy 3 – fosforyláciou vypína glykogénsyntázu | | |
| GIP | inkretín z K-buniek tenkého čreva (*glucose-dependent insulinotropic polypeptide*) | | |
| GLP-1 | inkretín z L-buniek čreva (*glucagon-like peptide 1*) | | |
| DPP-4 | dipeptidylpeptidáza 4 – rozkladá inkretíny | | |

## Transportéry

| Skratka | Význam | Vzor | Len kap. |
| --- | --- | --- | --- |
| SGLT | prenášač glukózy spriahnutý so sodíkom (*sodium–glucose linked transporter*) | SGLT[12]? | |
| GLUT | glukózový transportér – uľahčená difúzia | GLUT[1-5]? | |
| PAPS | fosfoadenozínfosfosulfát – aktívny sulfát, darca sulfátových skupín | | |
| NO | oxid dusnatý – plyn, ktorým endotel rozširuje cievu | NO-syntáz\w* | 5 |
