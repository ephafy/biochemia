/* BIOCHEM — GENEROVANÉ nástrojom tools/build.js (funkcia buildServiceWorker).
   Neupravuj ručne. Zoznam súborov nižšie sa pri každom builde prepočíta
   z aktuálneho obsahu chapters/ a assets/, takže sa nemôže rozísť s knihou.
   Registruje ho assets/js/pwa.js. */
"use strict";
const CACHE_VERSION = "1791528646057";
const CACHE_NAME = "biochem-" + CACHE_VERSION;
const PRECACHE_URLS = [
  "assets/fonts/SourceSerif4Variable-Italic.ttf.woff2",
  "assets/fonts/SourceSerif4Variable-Roman.ttf.woff2",
  "assets/fonts/fonts.css",
  "assets/glossary/01-struktury-reakcie-meranie.js",
  "assets/glossary/02-metabolizmus-a-regulacia.js",
  "assets/glossary/03-travenie-sacharidov-a-glykogen.js",
  "assets/glossary/04-glykolyza-a-glukoneogeneza.js",
  "assets/glossary/05-pentozy-fruktoza-galaktoza.js",
  "assets/glossary/06-acetyl-coa-a-citratovy-cyklus.js",
  "assets/glossary/07-biologicke-oxidacie-a-atp.js",
  "assets/glossary/08-lipidy-a-mastne-kyseliny.js",
  "assets/img/icon-180.png",
  "assets/img/icon-192.png",
  "assets/img/icon-32.png",
  "assets/img/icon-512.png",
  "assets/img/icon-maskable-512.png",
  "assets/img/icon-maskable.svg",
  "assets/img/icon.svg",
  "assets/js/glossary.js",
  "assets/js/peek.js",
  "assets/js/pwa.js",
  "assets/js/schema.js",
  "assets/js/site.js",
  "assets/js/toc-collapse.js",
  "assets/js/view-early.js",
  "assets/js/view-toggle.js",
  "assets/styles/glossary.css",
  "assets/styles/palette.css",
  "assets/styles/site.css",
  "assets/styles/view-toggle.css",
  "chapters/01_zaklady_biomolekuly.html",
  "chapters/02_uvod_regulacia_metabolizmu.html",
  "chapters/03_sacharidy_glykogen.html",
  "chapters/04_metabolizmus_glukozy.html",
  "chapters/05_pentozy_fruktoza_galaktoza.html",
  "chapters/06_acetyl_coa_citratovy_cyklus.html",
  "chapters/07_biologicke_oxidacie.html",
  "chapters/08_lipidy_mastne_kyseliny.html",
  "chapters/fig/_vzor-schema.svg",
  "chapters/fig/fig-acc.svg",
  "chapters/fig/fig-acetyl-coa-mapa.svg",
  "chapters/fig/fig-alanin-naboj.svg",
  "chapters/fig/fig-alp-pnpp.svg",
  "chapters/fig/fig-atp-vzorec.svg",
  "chapters/fig/fig-beta-oxidacia.svg",
  "chapters/fig/fig-bpg-skrat.svg",
  "chapters/fig/fig-cesta-sacharidov.svg",
  "chapters/fig/fig-citrat-clnok.svg",
  "chapters/fig/fig-citratovy-cyklus.svg",
  "chapters/fig/fig-clnky.svg",
  "chapters/fig/fig-coriho-cyklus.svg",
  "chapters/fig/fig-cyklus-krizovatka.svg",
  "chapters/fig/fig-disacharidy.svg",
  "chapters/fig/fig-dychaci-retazec.svg",
  "chapters/fig/fig-energia-mapa.svg",
  "chapters/fig/fig-enterocyt-lipidy.svg",
  "chapters/fig/fig-enterocyt.svg",
  "chapters/fig/fig-fruktoza-26.svg",
  "chapters/fig/fig-fruktoza-vstup.svg",
  "chapters/fig/fig-galaktoza-leloir.svg",
  "chapters/fig/fig-glukoza-dva-smery.svg",
  "chapters/fig/fig-glukoza-formy.svg",
  "chapters/fig/fig-glykogen-drahy.svg",
  "chapters/fig/fig-glykogen-stavba.svg",
  "chapters/fig/fig-glykolyza-investicia.svg",
  "chapters/fig/fig-glykolyza-vynos.svg",
  "chapters/fig/fig-glykozidova-vazba.svg",
  "chapters/fig/fig-hexozy-mapa.svg",
  "chapters/fig/fig-hormonalna-slucka.svg",
  "chapters/fig/fig-hydrogenuhlicitan.svg",
  "chapters/fig/fig-kalibracna-krivka.svg",
  "chapters/fig/fig-karnitin-clnok.svg",
  "chapters/fig/fig-kinetika.svg",
  "chapters/fig/fig-koenzym-a.svg",
  "chapters/fig/fig-kreatinkinaza.svg",
  "chapters/fig/fig-lipaza-titracia.svg",
  "chapters/fig/fig-lipidy-mapa.svg",
  "chapters/fig/fig-malonyl-vyhybka.svg",
  "chapters/fig/fig-mapa-metabolizmu.svg",
  "chapters/fig/fig-mcad-blok.svg",
  "chapters/fig/fig-metylenova-modra.svg",
  "chapters/fig/fig-mk-miesta-utoku.svg",
  "chapters/fig/fig-nadph-glutation.svg",
  "chapters/fig/fig-obchadzka-pyruvat.svg",
  "chapters/fig/fig-onkometabolity.svg",
  "chapters/fig/fig-pdh-komplex.svg",
  "chapters/fig/fig-pdh-regulacia.svg",
  "chapters/fig/fig-ph-teplota.svg",
  "chapters/fig/fig-polyolova-draha.svg",
  "chapters/fig/fig-ppp-oxidacna.svg",
  "chapters/fig/fig-ppp-preskupenie.svg",
  "chapters/fig/fig-prenasace-vodika.svg",
  "chapters/fig/fig-propionyl.svg",
  "chapters/fig/fig-pyruvat-osudy.svg",
  "chapters/fig/fig-regulacia-glykogenu.svg",
  "chapters/fig/fig-synteza-mk.svg",
  "chapters/fig/fig-travenie-tag.svg",
  "chapters/fig/fig-triedy-enzymov.svg",
  "chapters/fig/fig-udp-glukuronat.svg",
  "index.html",
  "manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.all(PRECACHE_URLS.map((u) =>
        fetch(u, { cache: "reload" }).then((resp) => { if (resp.ok) return cache.put(u, resp); }).catch(() => {})
      ))
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return; // cudziu doménu (napr. odkaz na ChatGPT) nikdy necachuj
  event.respondWith(
    caches.match(event.request).then((cached) => {
      const network = fetch(event.request).then((resp) => {
        if (resp && resp.status === 200) {
          const copy = resp.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return resp;
      }).catch(() => cached);
      return cached || network;
    })
  );
});

/* Vynútená aktualizácia (tlačidlo „Aktualizovať appku“ na hlavnej stránke, assets/js/pwa.js):
   keď na serveri nie je nová verzia, stiahnu sa všetky súbory nanovo do tej istej cache.
   Stránka dostáva priebeh cez port zo správy a po skončení sa načíta znova. Súbor, ktorý
   sa stiahnuť nepodarí, ostáva v cache v pôvodnej podobe. */
self.addEventListener("message", (event) => {
  if (!event.data || event.data.type !== "pf-refresh") return;
  const port = event.ports && event.ports[0];
  const say = (m) => { if (port) port.postMessage(m); };
  const total = PRECACHE_URLS.length;
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      const queue = PRECACHE_URLS.slice();
      let done = 0, failed = 0;
      const next = () => {
        const u = queue.shift();
        if (!u) return Promise.resolve();
        return fetch(u, { cache: "reload" })
          .then((resp) => { if (!resp.ok) throw new Error(String(resp.status)); return cache.put(u, resp); })
          .catch(() => { failed++; })
          .then(() => { done++; say({ done, total }); return next(); });
      };
      return Promise.all([0, 1, 2, 3, 4, 5].map(next)).then(() => say({ finished: true, failed, total }));
    })
  );
});
