import { SiteHeader } from "@/components/site-header";
import { RevealInit } from "@/components/reveal-init";

const IMG = {
  hero: "https://images.unsplash.com/photo-1570562780355-7a5a269777dc",
  rosemarySprigs: "https://images.unsplash.com/photo-1501778134951-6d783388a6d8",
  rosemaryMacro: "https://images.unsplash.com/photo-1614110142810-9953acd736dd",
  seafoodRaw: "https://images.unsplash.com/photo-1651323018466-b36b7df1d2b1",
  trufflePasta: "https://images.unsplash.com/photo-1771508558380-92ccad26e977",
  filetMignon: "https://images.unsplash.com/photo-1706650616334-97875fae8521",
  wholeFish: "https://images.unsplash.com/photo-1624419845204-7a011c2c902c",
  tiramisu: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9",
  winePour: "https://images.unsplash.com/photo-1707313835513-6f44e631ffc0",
  octopusSea: "https://images.unsplash.com/photo-1758448786233-2051ecd150c8",
  seafoodGrilled: "https://images.unsplash.com/photo-1519351635902-7c60d09cb2ed",
  grilledSquid: "https://images.unsplash.com/photo-1565878026031-b79b3c9baf01",
  mushroomPasta: "https://images.unsplash.com/photo-1692296979424-2d337691af6f",
  steakSalad: "https://images.unsplash.com/photo-1683315446874-e6a629087ef8",
};

function img(url: string, w: number, q = 80) {
  return `${url}?auto=format&fit=crop&w=${w}&q=${q}`;
}

const MENU = [
  {
    cat: "Za početak",
    image: IMG.seafoodRaw,
    dishes: [
      { name: "Rosmarino pjat za dvoje", desc: "Dalmatinski pršut, sir s otoka Paga, kozji sir, panceta, domaća pašteta i kobasica s ružmarinom." },
      { name: "Plata plodova mora za dvoje", desc: "Marinirane srdele, dimljene dagnje, pašteta od tune i bakalara, uz inćune i limun." },
      { name: "Tris bruškete", desc: "Tri vrste bruškete s dnevnim prilogom iz naše kuhinje." },
    ],
  },
  {
    cat: "Tjestenina, rižoto i njoki",
    image: IMG.trufflePasta,
    dishes: [
      { name: "Fuži sa zadarskim tartufom", desc: "Domaći fuži u vrhnjastom umaku, obilato ribani tartuf s obližnjeg zaleđa." },
      { name: "Crni rižot", desc: "Rižot kuhan u crnilu sipe, bogat okusom mora i kapljicom maslinova ulja." },
      { name: "Njoki s pestom", desc: "Domaći njoki u umaku od bosiljka, pinjola i parmezana." },
    ],
  },
  {
    cat: "S roštilja",
    image: IMG.filetMignon,
    dishes: [
      { name: "Biftek za dvoje", desc: "Sočni biftek pečen na žaru do savršenstva, uz prilog po izboru." },
      { name: "Dalmatinska pašticada", desc: "Govedina pirjana danima u vinu i začinima, servirana s domaćim njokima." },
      { name: "Odrezak u umaku od zelenog papra", desc: "Biftek u kremastom umaku od zelenog papra i mladi krumpir." },
    ],
  },
  {
    cat: "Iz mora",
    image: IMG.wholeFish,
    dishes: [
      { name: "Brancin s blitvom", desc: "Cijeli brancin pečen na žaru, uz dalmatinsku blitvu i mladi krumpir." },
      { name: "Lignje na žaru", desc: "Svježe lignje s roštilja, limun i grančica ružmarina." },
      { name: "Škampi na buzaru", desc: "U umaku od rajčice, bijelog vina i češnjaka, uz kruh za umakanje." },
    ],
  },
  {
    cat: "Za kraj",
    image: IMG.tiramisu,
    dishes: [
      { name: "Tiramisu", desc: "Klasika po domaćem receptu, s maskarponeom i espressom." },
      { name: "Semifreddo", desc: "Polusmrznuti krem desert s voćnim prelivom." },
      { name: "Čokoladni kolač", desc: "Bogat i gust, uz kap vrhnja i grančicu metvice." },
    ],
  },
];

const GALLERY = [
  { src: IMG.rosemarySprigs, alt: "Grančice svježeg ružmarina", tall: true },
  { src: IMG.rosemaryMacro, alt: "Makro snimka grančice ružmarina" },
  { src: IMG.octopusSea, alt: "Tanjur s roštilja uz pogled na more" },
  { src: IMG.seafoodGrilled, alt: "Plata plodova mora s roštilja", wide: true },
  { src: IMG.grilledSquid, alt: "Lignje na žaru s limunom" },
  { src: IMG.mushroomPasta, alt: "Domaća tjestenina s gljivama i parmezanom" },
  { src: IMG.steakSalad, alt: "Biftek sa svježom salatom", wide: true },
];

export default function Home() {
  return (
    <>
      <RevealInit />
      <SiteHeader />

      {/* HERO */}
      <section className="relative h-screen min-h-[640px] overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img
            id="heroImg"
            src={img(IMG.hero, 1900)}
            alt="Riba na žaru iznad žeravice, dim i plamen"
            className="h-full w-full object-cover scale-[1.14] will-change-transform"
          />
          <div className="absolute inset-0" style={{ background: "var(--hero-vignette)" }} />
          <div className="absolute inset-0" style={{ background: "var(--hero-glow)" }} />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20">
          <span className="text-label reveal block mb-5" style={{ color: "var(--sage-300, #A9BB9C)" }}>
            Bistro · Zadar
          </span>
          <h1
            className="font-display reveal max-w-[17ch]"
            style={{ fontSize: "var(--hero-title-size)", lineHeight: "var(--hero-title-leading)", color: "#F7F2E7" }}
          >
            Miris <em className="italic" style={{ color: "var(--sage-300, #A9BB9C)" }}>ružmarina</em> vodi svaki tanjur.
          </h1>
          <p className="reveal mt-6 max-w-[44ch] text-[1.05rem]" style={{ color: "rgba(247,242,231,0.82)" }}>
            Mali bistro u srcu Zadra — riba s roštilja, domaći tartufi i plodovi mora, pečeni polako i posluženi s pažnjom.
          </p>
          <div className="reveal mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#kontakt"
              className="rounded-full px-8 py-4 text-[0.8rem] uppercase tracking-[0.12em] font-medium transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--sage)", color: "#F7F2E7" }}
            >
              Rezerviraj stol
            </a>
            <a
              href="#jelovnik"
              className="border-b pb-1 text-[0.9rem] transition-colors hover:text-[var(--sage-300,#A9BB9C)]"
              style={{ borderColor: "rgba(247,242,231,0.35)", color: "#F7F2E7" }}
            >
              Pogledaj jelovnik →
            </a>
          </div>
        </div>
      </section>

      {/* STATS / SOCIAL PROOF */}
      <div className="border-b" style={{ background: "var(--card)", borderColor: "var(--surface-line)" }}>
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-14 px-6 py-8 text-center">
          <div>
            <div className="font-display text-4xl" data-count="4.9" data-dec="1" style={{ color: "var(--foreground)" }}>
              4.9
            </div>
            <div className="text-label mt-1" style={{ color: "var(--muted-foreground)" }}>★ TripAdvisor ocjena</div>
          </div>
          <div>
            <div className="font-display text-4xl" data-count="90" style={{ color: "var(--foreground)" }}>
              90
            </div>
            <div className="text-label mt-1" style={{ color: "var(--muted-foreground)" }}>Recenzija</div>
          </div>
        </div>
      </div>

      {/* MANIFESTO */}
      <section id="filozofija" className="py-28 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <span className="text-label reveal block mb-6" style={{ color: "var(--sage)" }}>Naša filozofija</span>
          <p className="font-display reveal text-[clamp(1.6rem,3.2vw,2.5rem)] leading-snug" style={{ color: "var(--foreground)" }}>
            Vjerujemo da jedan miris može ispričati cijelu obalu —{" "}
            <em className="italic" style={{ color: "var(--sage)" }}>ružmarin sa zida, riba jutrošnjeg ulova i vatra koja polako radi svoj posao.</em>
          </p>
        </div>
      </section>

      {/* MENU */}
      <section id="jelovnik" className="py-24" style={{ background: "var(--card)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal mb-16 text-center">
            <span className="text-label block mb-4" style={{ color: "var(--sage)" }}>Jelovnik</span>
            <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.2rem)]" style={{ color: "var(--foreground)" }}>
              S mora, s roštilja i iz <em className="italic" style={{ color: "var(--sage)" }}>naše kuhinje</em>
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            {MENU.map((group, i) => (
              <div
                key={group.cat}
                className={`reveal grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl ${
                  i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
                style={{ background: "var(--background)" }}
              >
                <div className="min-h-[280px] md:min-h-[360px] overflow-hidden">
                  <img src={img(group.image, 900)} alt={group.cat} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="flex flex-col justify-center p-9 md:p-12">
                  <div className="text-label mb-4" style={{ color: "var(--sage)" }}>{group.cat}</div>
                  <div className="flex flex-col">
                    {group.dishes.map((d) => (
                      <div key={d.name} className="border-b py-4 last:border-none" style={{ borderColor: "var(--surface-line)" }}>
                        <div className="font-display text-xl" style={{ color: "var(--foreground)" }}>{d.name}</div>
                        <div className="mt-1 text-[0.92rem]" style={{ color: "var(--muted-foreground)" }}>{d.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="prica" className="py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
          <div className="reveal h-[420px] md:h-[540px] overflow-hidden rounded-2xl">
            <img src={img(IMG.winePour, 1000)} alt="Vino se toči uz prozor u sumrak" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div>
            <span className="text-label reveal block mb-5" style={{ color: "var(--sage)" }}>Naša priča</span>
            <h2 className="font-display reveal text-[clamp(1.9rem,3.6vw,2.8rem)] mb-6" style={{ color: "var(--foreground)" }}>
              Bistro vođen <em className="italic" style={{ color: "var(--sage)" }}>ružmarinom</em>
            </h2>
            <p className="reveal mb-4 max-w-[46ch]" style={{ color: "var(--muted-foreground)" }}>
              Bistro Rosmarino otvorili smo u srcu Zadra s jednostavnom idejom — da jedan miris može voditi cijelu kuhinju. Ružmarin raste uz naša vrata i prati svaki tanjur, od jutarnje ribe do večernjeg vina.
            </p>
            <p className="reveal mb-4 max-w-[46ch]" style={{ color: "var(--muted-foreground)" }}>
              Svako jutro biramo ribu na gradskoj ribarnici, meso pečemo sporo na žaru, a tartufe ribamo netom prije posluživanja. Devedeset gostiju koji su nam dali 4,9 zvjezdica najveća su nam čast.
            </p>
            <p className="reveal font-display italic text-lg" style={{ color: "var(--sage)" }}>
              — obitelj Rosmarino, Zadar
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="galerija" className="py-24" style={{ background: "var(--card)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal mb-14 text-center">
            <span className="text-label block mb-4" style={{ color: "var(--sage)" }}>Galerija</span>
            <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.2rem)]" style={{ color: "var(--foreground)" }}>
              Iz naše <em className="italic" style={{ color: "var(--sage)" }}>kuhinje</em>
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {GALLERY.map((g) => (
              <figure
                key={g.src}
                className={`reveal overflow-hidden rounded-xl ${g.tall ? "row-span-2 h-[220px] md:h-full" : "h-[220px]"} ${
                  g.wide ? "col-span-2" : ""
                }`}
              >
                <img src={img(g.src, 700)} alt={g.alt} className="h-full w-full object-cover" loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="kontakt" className="py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-0 overflow-hidden rounded-2xl md:grid-cols-2" style={{ background: "var(--card)" }}>
          <div className="p-9 md:p-14">
            <span className="text-label reveal block mb-5" style={{ color: "var(--sage)" }}>Posjetite nas</span>
            <h2 className="font-display reveal text-[clamp(1.9rem,3.6vw,2.8rem)] mb-8" style={{ color: "var(--foreground)" }}>
              Tu smo, u srcu <em className="italic" style={{ color: "var(--sage)" }}>Zadra</em>
            </h2>

            <div className="reveal mb-6">
              <div className="text-label mb-2" style={{ color: "var(--sage)" }}>Adresa</div>
              <p style={{ color: "var(--muted-foreground)" }}>Ulica Federica Grisogona 6, 23000 Zadar</p>
            </div>

            <div className="reveal mb-6">
              <div className="text-label mb-2" style={{ color: "var(--sage)" }}>Rezervacije</div>
              <p style={{ color: "var(--muted-foreground)" }}>Stol rezervirajte pozivom.</p>
              <a href="tel:+385998316529" className="font-display text-2xl mt-1 inline-block" style={{ color: "var(--sage)" }}>
                +385 99 831 6529
              </a>
            </div>

            <div className="reveal mb-8">
              <div className="text-label mb-2" style={{ color: "var(--sage)" }}>Radno vrijeme</div>
              <div className="flex justify-between max-w-[280px] border-b border-dotted py-1.5" style={{ borderColor: "var(--surface-line)", color: "var(--foreground)" }}>
                <span>Svaki dan</span><span>09:00 – 23:00</span>
              </div>
            </div>

            <a
              href="tel:+385998316529"
              className="reveal inline-block rounded-full px-8 py-4 text-[0.8rem] uppercase tracking-[0.12em] font-medium"
              style={{ background: "var(--sage)", color: "#F7F2E7" }}
            >
              Rezerviraj stol
            </a>
          </div>
          <div className="reveal min-h-[360px]">
            <iframe
              src="https://maps.google.com/maps?q=Bistro+Rosmarino,+Ulica+Federica+Grisogona+6,+Zadar&output=embed"
              loading="lazy"
              title="Bistro Rosmarino — Zadar"
              className="h-full w-full min-h-[360px] border-0"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-20 pb-9" style={{ background: "var(--ink-deep, #211D17)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 pb-14 md:grid-cols-3">
            <div>
              <div className="font-display text-2xl mb-4" style={{ color: "#F7F2E7" }}>
                Rosmarin<span style={{ color: "var(--sage-300, #A9BB9C)" }}>o</span>
              </div>
              <p className="max-w-[34ch] text-sm" style={{ color: "rgba(247,242,231,0.65)" }}>
                Mali mediteranski bistro u srcu Zadra. Riba s roštilja, domaći tartufi i plodovi mora — vođeno mirisom ružmarina.
              </p>
            </div>
            <div>
              <h4 className="text-label mb-5" style={{ color: "var(--sage-300, #A9BB9C)" }}>Izbornik</h4>
              <div className="flex flex-col gap-2.5 text-sm" style={{ color: "rgba(247,242,231,0.65)" }}>
                <a href="#jelovnik" className="hover:text-[#F7F2E7]">Jelovnik</a>
                <a href="#prica" className="hover:text-[#F7F2E7]">Naša priča</a>
                <a href="#galerija" className="hover:text-[#F7F2E7]">Galerija</a>
                <a href="#kontakt" className="hover:text-[#F7F2E7]">Kontakt</a>
              </div>
            </div>
            <div>
              <h4 className="text-label mb-5" style={{ color: "var(--sage-300, #A9BB9C)" }}>Kontakt</h4>
              <div className="flex flex-col gap-2.5 text-sm" style={{ color: "rgba(247,242,231,0.65)" }}>
                <a href="tel:+385998316529" className="font-display text-lg" style={{ color: "#F7F2E7" }}>+385 99 831 6529</a>
                <p>Ulica Federica Grisogona 6, Zadar</p>
                <p>Svaki dan · 09:00 – 23:00</p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-wrap justify-between gap-3 border-t pt-6 text-xs"
            style={{ borderColor: "rgba(247,242,231,0.14)", color: "rgba(247,242,231,0.55)" }}
          >
            <span>© 2026 Bistro Rosmarino · Zadar</span>
            <span>4.9 ★ TripAdvisor · 90 recenzija</span>
          </div>
        </div>
      </footer>
    </>
  );
}
