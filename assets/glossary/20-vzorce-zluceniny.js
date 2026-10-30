/* Glosár BIOCHEM — zlúčeniny, ktoré dostali vysvetlivku kvôli vzorcu (19. 10. 2026).
   Ostatné zlúčeniny majú vzorec priamo vo svojom hesle (pole `vzorec`, kresby generuje build do 97-vzorce.js).
   Formát záznamu: assets/glossary/README.md. Texty sú vlastné (CLAUDE.md §4.1); fakty: pracovne/vzorce_fakty.md. */
(window.PF_GLOSSARY = window.PF_GLOSSARY || []).push(
{
  id: "vitamin-a",
  vzorec: ["retinol"],
  title: "Vitamín A (retinol)",
  match: ["vitamín\\w* A", "retinol\\w*", "retinoid\\w*"],
  kde: "08_lipidy_mastne_kyseliny#sub-8-2-2",
  short: "Vitamín rozpustný v tukoch; jeho aldehyd (retinal) je svetlocitlivá skupina zrakového pigmentu sietnice.",
  body:
    '<p class="chain">β-karotén z rastlín (provitamín) → v črevnej sliznici rozštiepený → retinal → retinol → s chylomikrónmi do krvi</p>' +
    "<ul>" +
      "<li><b>Tri formy</b> — retinol (alkohol), retinal (aldehyd) a kyselina retinová; vopred hotový vitamín A je len v živočíšnej potrave.</li>" +
      "<li><b>Zrak</b> — retinal sa viaže na opsín a s ním tvorí rodopsín tyčiniek.</li>" +
      "<li><b>Signál</b> — kyselina retinová pôsobí ako hormón cez jadrové receptory.</li>" +
      "<li><b>Nedostatok</b> — najprv sa zhorší prispôsobenie oka tme, potom vznikne šeroslepota; dlhší nedostatok vedie k vysychaniu a rohovateniu rohovky (xeroftalmia) až k slepote.</li>" +
      "<li><b>Nadbytok</b> — vitamín A je pri vysokom príjme toxický.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Vstrebáva sa so zmiešanou micelou ako tuk – pri steatorei, cholestáze alebo cystickej fibróze chýba spolu s vitamínmi D, E a K. Samostatnú kapitolu o vitamínoch kniha zatiaľ nemá; odkaz vedie na ich vstrebávanie.</p>'
},
{
  id: "vitamin-d",
  vzorec: ["cholekalciferol", "kalcitriol"],
  title: "Vitamín D (cholekalciferol a kalcitriol)",
  match: ["vitamín\\w* D", "cholekalciferol\\w*", "kalcitriol\\w*"],
  kde: "08_lipidy_mastne_kyseliny#sub-8-2-2",
  short: "Vitamín rozpustný v tukoch so steroidným pôvodom; koža ho vie vyrobiť sama, aktívnym hormónom sa stane až v pečeni a obličke.",
  body:
    '<p class="chain">7-dehydrocholesterol v koži + UV žiarenie → cholekalciferol (D<sub>3</sub>) → hydroxylácia v pečeni → hydroxylácia v obličke → <b>kalcitriol</b></p>' +
    "<ul>" +
      "<li><b>Hydroxylácie</b> — robia ich enzýmy cytochrómu P450; v obličke na uhlíku 1α vzniká aktívna forma.</li>" +
      "<li><b>Úloha</b> — kalcitriol riadi hospodárenie s vápnikom (a fosfátom).</li>" +
      "<li><b>Nedostatok</b> — rachitída u detí, osteomalácia u dospelých.</li>" +
      "<li><b>Nadbytok</b> — pri vysokom príjme toxický.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Pri zlyhaní obličiek chýba posledný krok aktivácie – samotný cholekalciferol vtedy nepomôže. Samostatnú kapitolu o vitamínoch kniha zatiaľ nemá.</p>'
},
{
  id: "vitamin-e",
  vzorec: ["alfa-tokoferol"],
  title: "Vitamín E (α-tokoferol)",
  match: ["vitamín\\w* E", "tokoferol\\w*", "α-tokoferol\\w*"],
  kde: "08_lipidy_mastne_kyseliny#sub-8-2-2",
  short: "Vitamín rozpustný v tukoch; v membránach zachytáva voľné radikály a chráni nenasýtené mastné kyseliny pred peroxidáciou.",
  body:
    "<ul>" +
      "<li><b>Formy</b> — tokoferoly a tokotrienoly; najúčinnejší je D-α-tokoferol.</li>" +
      "<li><b>Mechanizmus</b> — ako lapač voľných radikálov preruší peroxidáciu lipidov priamo v membráne, kde je rozpustený.</li>" +
      "<li><b>Nedostatok</b> — neurologické poruchy a hemolytická anémia novorodencov.</li>" +
    "</ul>" +
    '<p class="why"><b>Prečo to je dôležité.</b> Ako ostatné vitamíny rozpustné v tukoch chýba pri poruchách vstrebávania tuku. Samostatnú kapitolu o vitamínoch kniha zatiaľ nemá.</p>'
},
{
  id: "udp-galaktoza",
  vzorec: ["udp-galaktoza"],
  title: "UDP-galaktóza",
  match: ["UDP-galaktóz(?:a|y|u|e|ou)", "UDP-Gal"],
  short: "Aktivovaná galaktóza na nosiči UDP; vzniká v Leloirovej dráhe a slúži na stavbu glykolipidov, glykoproteínov a laktózy.",
  body:
    '<p class="chain">UDP-glukóza ⇌ (epimeráza, otočí OH na C4) ⇌ UDP-galaktóza</p>' +
    "<ul>" +
      "<li><b>Vratná epimerácia</b> — telo si UDP-galaktózu vyrobí aj z glukózy, preto galaktózu v strave nepotrebuje.</li>" +
    "</ul>"
}
);
