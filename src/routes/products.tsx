import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

import heroPetals from "@/assets/hero-petals.jpg";
import packGold from "@/assets/pack-gold.jpg";
import packSuper400 from "@/assets/pack-super-400.jpg";
import packBaba from "@/assets/pack-baba.jpg";
import packGoldFlat from "@/assets/pack-gold-flat.jpg";
import prodTutti from "@/assets/prod-tuttifrutti.jpg";
import prodKaronda from "@/assets/prod-karonda.jpg";
import prodAmla from "@/assets/prod-amla.jpg";
import prodSharbat from "@/assets/prod-sharbat.jpg";
import appPaan from "@/assets/app-paan.jpg";
import appIcecream from "@/assets/app-icecream.jpg";
import appShake from "@/assets/app-shake.jpg";
import appBakery from "@/assets/app-bakery.jpg";
import aboutImg from "@/assets/about-ingredients.jpg";

export const Route = createFileRoute("/products")({
  component: ProductsPage,
  head: () => ({
    meta: [
      { title: "Our Products | Tulsi Gulkand — Traditional Food Manufacturer & B2B Supplier" },
      {
        name: "description",
        content:
          "Explore Tulsi Gulkand's premium catalog — Gulkand, Tutti Frutti, Karonda, Amla Candy and Sharbat. Manufactured in Pushkar, Rajasthan for distributors, wholesalers and food businesses.",
      },
      { property: "og:title", content: "Our Products | Tulsi Gulkand" },
      {
        property: "og:description",
        content:
          "Premium traditional food products crafted with expertise and supplied with reliability for distributors and food businesses.",
      },
      { property: "og:image", content: packGold },
    ],
  }),
});

/* ---------- primitives ---------- */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-warm-red font-semibold">
      <span className="h-px w-6 bg-warm-red/60" />
      {children}
    </div>
  );
}

/* ---------- sections ---------- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-rose/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-gold/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-12 pb-16 sm:pt-20 sm:pb-24 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <SectionLabel>Manufacturer Catalog</SectionLabel>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-purple-deep">
            Our <span className="text-gold-gradient">Products</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl">
            Traditional food products crafted with expertise and supplied with reliability —
            built for distributors, wholesalers and food businesses that value consistency and trust.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#inquiry"
              className="inline-flex items-center gap-2 rounded-full bg-warm-red text-primary-foreground px-6 py-3 text-sm font-semibold shadow-soft hover:opacity-95 transition"
            >
              Request Product Inquiry
            </a>
            <a
              href="#inquiry"
              className="inline-flex items-center gap-2 rounded-full border border-purple-deep/20 bg-cream px-6 py-3 text-sm font-semibold text-purple-deep hover:bg-cream/70 transition"
            >
              Become Dealer
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-gold/25 via-rose/15 to-transparent blur-2xl" />
            <div className="relative grid grid-cols-2 gap-4">
              <img src={packGold} alt="Tulsi Gulkand Gold pack" className="rounded-2xl shadow-card object-cover aspect-[4/5]" />
              <img src={packSuper400} alt="Tulsi Gulkand Super pack" className="rounded-2xl shadow-card object-cover aspect-[4/5] mt-8" />
              <img src={packBaba} alt="Tulsi Gulkand Baba pack" className="rounded-2xl shadow-card object-cover aspect-[4/5] -mt-4" />
              <img src={packGoldFlat} alt="Tulsi Gulkand premium pack" className="rounded-2xl shadow-card object-cover aspect-[4/5] mt-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <SectionLabel>About the Catalog</SectionLabel>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl text-purple-deep leading-[1.1]">
            Traditional Expertise. <br />
            <span className="text-gold-gradient">Modern Supply Capability.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
            Tulsi Gulkand manufactures and supplies carefully crafted food products designed
            for dependable wholesale and business supply.
          </p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              { t: "Quality", d: "Authentic recipes, hand-selected ingredients." },
              { t: "Consistency", d: "Batch-to-batch reliability for B2B supply." },
              { t: "Packaging", d: "Hygienic, retail-ready and bulk formats." },
              { t: "Long-Term Trust", d: "Built on decades of dealer partnerships." },
            ].map((i) => (
              <li key={i.t} className="rounded-2xl border border-border/60 bg-cream/60 p-5">
                <div className="font-display text-lg text-purple-deep">{i.t}</div>
                <div className="mt-1 text-sm text-muted-foreground">{i.d}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-gold/20 to-rose/10 blur-2xl" />
          <img
            src={aboutImg}
            alt="Traditional ingredients used in Tulsi Gulkand products"
            className="relative rounded-3xl shadow-card object-cover w-full aspect-[5/6]"
          />
        </div>
      </div>
    </section>
  );
}

const PRODUCTS = [
  {
    title: "Gulkand",
    img: packGold,
    desc: "Slow-cooked rose petal preserve with authentic Rajasthani recipe — our flagship product available in multiple grades and pack sizes.",
  },
  {
    title: "Tutti Frutti",
    img: prodTutti,
    desc: "Vibrant candied fruit pieces crafted for bakery, ice cream and dessert manufacturers seeking consistent color and texture.",
  },
  {
    title: "Karonda",
    img: prodKaronda,
    desc: "Traditional preserved Karonda with balanced sweetness, prepared for confectionery and specialty food applications.",
  },
  {
    title: "Amla Candy",
    img: prodAmla,
    desc: "Hand-prepared Amla candy with the right bite and finish — ideal for wholesale snack and health-food distribution.",
  },
  {
    title: "Sharbat",
    img: prodSharbat,
    desc: "Concentrated traditional sharbat ranges for beverage brands, Horeca and seasonal distribution networks.",
  },
];

function ProductGrid() {
  return (
    <section id="catalog" className="bg-cream/40 border-y border-border/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-2xl">
          <SectionLabel>Product Showcase</SectionLabel>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl text-purple-deep leading-[1.1]">
            A Manufacturer's Catalog of <span className="text-gold-gradient">Heritage Food Products</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg">
            Each product is crafted with traditional expertise and prepared for dependable B2B supply across India.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PRODUCTS.map((p) => (
            <article
              key={p.title}
              className="group rounded-3xl bg-background border border-border/60 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden bg-cream">
                <img
                  src={p.img}
                  alt={`Tulsi ${p.title}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <h3 className="font-display text-2xl text-purple-deep">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
                <a
                  href="#inquiry"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-warm-red hover:gap-3 transition-all"
                >
                  Explore Product
                  <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const APPLICATIONS = [
  { t: "Paan", img: appPaan },
  { t: "Ice Cream", img: appIcecream },
  { t: "Desserts", img: appShake },
  { t: "Milkshakes", img: appShake },
  { t: "Bakery", img: appBakery },
  { t: "Horeca", img: appIcecream },
  { t: "Beverage", img: appShake },
];

function Applications() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-3xl">
          <SectionLabel>Applications</SectionLabel>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl text-purple-deep leading-[1.1]">
            Products Used Across <span className="text-gold-gradient">Diverse Food Applications</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg">
            From traditional Paan to modern bakery and beverage lines — Tulsi products power a wide range of food businesses.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6">
          {APPLICATIONS.map((a) => (
            <div
              key={a.t}
              className="group relative overflow-hidden rounded-2xl border border-border/60 shadow-soft aspect-[4/5]"
            >
              <img
                src={a.img}
                alt={a.t}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-deep/85 via-purple-deep/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="font-display text-xl text-cream">{a.t}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QualityStrip() {
  const items = [
    { t: "Consistent Quality", d: "Standardized recipes and rigorous batch checks." },
    { t: "Hygienic Packaging", d: "Food-safe materials in retail and bulk formats." },
    { t: "Reliable Supply", d: "Dependable order fulfilment for B2B partners." },
    { t: "Product Expertise", d: "Decades of know-how in traditional preserves." },
    { t: "Long-Term Partnerships", d: "Trusted by distributors across regions." },
  ];
  return (
    <section className="relative overflow-hidden bg-cream/60 border-y border-border/50">
      <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-gold/15 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-24">
        <div className="max-w-3xl">
          <SectionLabel>Quality & Reliability</SectionLabel>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl text-purple-deep leading-[1.1]">
            Crafted with Care. <span className="text-gold-gradient">Supplied with Confidence.</span>
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {items.map((i, idx) => (
            <div
              key={i.t}
              className="rounded-2xl bg-background border border-border/60 p-6 shadow-soft hover:shadow-card transition-shadow"
            >
              <div className="h-10 w-10 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center font-display text-gold">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <div className="mt-4 font-display text-lg text-purple-deep">{i.t}</div>
              <div className="mt-2 text-sm text-muted-foreground">{i.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BusinessCTA() {
  return (
    <section id="inquiry" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-deep via-purple-deep to-[oklch(0.24_0.04_55)]" />
      <div className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full bg-gold/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-warm-red/25 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 py-20 sm:py-28 text-center">
        <SectionLabel>
          <span className="text-gold">Partner With Us</span>
        </SectionLabel>
        <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl text-cream leading-[1.1]">
          Looking for a Reliable <span className="text-gold-gradient">Food Manufacturing Partner?</span>
        </h2>
        <p className="mt-6 text-cream/80 text-base sm:text-lg max-w-2xl mx-auto">
          Partner with Tulsi Gulkand for dependable product supply and long-term business support.
        </p>

        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-warm-red text-primary-foreground px-6 py-3 text-sm font-semibold shadow-gold hover:opacity-95 transition"
          >
            Dealer Inquiry
          </a>
          <Link
            to="/"
            hash="contact"
            className="inline-flex items-center gap-2 rounded-full bg-cream text-purple-deep px-6 py-3 text-sm font-semibold hover:bg-cream/90 transition"
          >
            Contact Us
          </Link>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cream/30 text-cream px-6 py-3 text-sm font-semibold hover:bg-cream/10 transition"
          >
            WhatsApp Inquiry
          </a>
        </div>
      </div>
    </section>
  );
}

function ProductsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Intro />
        <ProductGrid />
        <Applications />
        <QualityStrip />
        <BusinessCTA />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
