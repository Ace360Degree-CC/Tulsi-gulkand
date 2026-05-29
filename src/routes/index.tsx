import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonPage } from "./coming-soon";
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

export const Route = createFileRoute("/")({
  component: ComingSoonPage,
  head: () => ({
    meta: [
      { title: "Tulsi Gulkand | Premium Gulkand Manufacturer in Pushkar Rajasthan" },
      { name: "description", content: "Tulsi Gulkand is a trusted Rajasthan-based manufacturer and B2B supplier of Gulkand, Tutti Frutti, Karonda, Amla Candy and Sharbat for distributors and wholesale food businesses." },
      { property: "og:title", content: "Tulsi Gulkand | Premium Gulkand Manufacturer" },
      { property: "og:description", content: "B2B manufacturer & wholesale supplier of traditional food ingredients from Pushkar, Rajasthan." },
      { property: "og:image", content: heroPetals },
    ],
  }),
});

/* ---------- small primitives ---------- */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-warm-red font-semibold">
      <span className="h-px w-6 bg-warm-red/60" />
      {children}
    </div>
  );
}

function PetalIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        d="M24 6c6 6 10 11 10 17a10 10 0 0 1-20 0c0-6 4-11 10-17Z"
        fill="currentColor"
        opacity=".18"
      />
      <path
        d="M24 10c4.5 4.5 8 8.5 8 13.5a8 8 0 0 1-16 0C16 18.5 19.5 14.5 24 10Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* ---------- sections ---------- */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero-gradient">
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-rose/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-gold/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-12 pb-20 sm:pt-20 sm:pb-28 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <SectionLabel>Pushkar · Rajasthan · Since 1978</SectionLabel>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-purple-deep">
            Premium <span className="text-gold-gradient">Gulkand</span> &amp; Traditional
            <br className="hidden sm:block" /> Food Ingredient Manufacturer
            <br className="hidden sm:block" /> from Pushkar, Rajasthan
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl">
            Trusted by distributors, wholesalers and food businesses for consistent quality,
            reliable supply and authentic taste — Gulkand, Tutti Frutti, Karonda, Amla Candy &amp; Sharbat.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#inquiry" className="inline-flex items-center gap-2 rounded-full bg-warm-red text-primary-foreground px-6 py-3.5 text-sm font-semibold shadow-soft hover:opacity-95 transition">
              Become a Dealer
              <span aria-hidden>→</span>
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white text-purple-deep border border-border px-6 py-3.5 text-sm font-semibold hover:border-gold hover:text-warm-red transition">
              Business Inquiry
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-leaf" /> FSSAI Certified</div>
            <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gold" /> 48+ Years of Trust</div>
            <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-warm-red" /> Pan-India Distribution</div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-card border border-gold/20">
            <img src={heroPetals} alt="Fresh rose petals and Gulkand" className="absolute inset-0 h-full w-full object-cover" width={1600} height={1200} />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-deep/30 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-8 -left-6 sm:-left-10 w-32 sm:w-40 rotate-[-6deg] rounded-2xl overflow-hidden shadow-card border-2 border-white bg-white">
            <img src={packGold} alt="Tulsi Gold Gulkand pack" className="w-full h-full object-cover" loading="lazy" width={400} height={500} />
          </div>
          <div className="absolute -top-6 -right-4 sm:-right-8 w-28 sm:w-36 rotate-[8deg] rounded-2xl overflow-hidden shadow-card border-2 border-white bg-white">
            <img src={packSuper400} alt="Super Tulsi Gulkand 400gm" className="w-full h-full object-cover" loading="lazy" width={400} height={400} />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    { t: "Rajasthan Heritage", d: "Rooted in Pushkar tradition" },
    { t: "Quality Manufacturing", d: "Decades of expertise" },
    { t: "Hygienic Packaging", d: "Sealed for freshness" },
    { t: "Reliable Supply", d: "Consistent batch availability" },
    { t: "B2B Network", d: "Pan-India dealer support" },
  ];
  return (
    <section className="bg-white border-y border-border/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-8 grid grid-cols-2 md:grid-cols-5 gap-6">
        {items.map((i) => (
          <div key={i.t} className="flex items-start gap-3">
            <div className="h-10 w-10 shrink-0 rounded-full bg-rose-soft text-warm-red flex items-center justify-center">
              <PetalIcon className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-purple-deep">{i.t}</div>
              <div className="text-xs text-muted-foreground">{i.d}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Products() {
  const cards = [
    { name: "Gulkand", img: packGold, desc: "Premium rose-petal preserve for paan, sweets and desserts.", tag: "Signature" },
    { name: "Tutti Frutti", img: prodTutti, desc: "Colorful candied fruit for bakery and confectionery.", tag: "Bakery" },
    { name: "Karonda", img: prodKaronda, desc: "Traditional processed fruit for sweets and food prep.", tag: "Heritage" },
    { name: "Amla Candy", img: prodAmla, desc: "Tasteful gooseberry candy with wide market acceptance.", tag: "Wellness" },
    { name: "Sharbat", img: prodSharbat, desc: "Refreshing traditional beverage range for distribution.", tag: "Beverage" },
    { name: "Tulsi Super", img: packSuper400, desc: "Best-selling retail pack format for wholesale.", tag: "Retail Pack" },
  ];
  return (
    <section id="products" className="bg-section-soft py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <SectionLabel>Our Product Range</SectionLabel>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl text-purple-deep">Traditional ingredients, crafted for food businesses.</h2>
          <p className="mt-4 text-muted-foreground">From premium Gulkand to fruit-based ingredients, every product is built for consistency, taste and dependable B2B supply.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => (
            <article key={c.name} className="group relative overflow-hidden rounded-3xl bg-card border border-border/60 shadow-soft hover:shadow-card transition-shadow">
              <div className="aspect-[5/4] overflow-hidden bg-rose-soft">
                <img src={c.img} alt={c.name} className="h-full w-full object-cover group-hover:scale-[1.04] transition-transform duration-700" loading="lazy" width={1024} height={820} />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl text-purple-deep">{c.name}</h3>
                  <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-gold-soft text-warm-red border border-gold/30">{c.tag}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                <a href="#inquiry" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-warm-red hover:gap-2.5 transition-all">
                  Request Wholesale Pricing <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <SectionLabel>About the Brand</SectionLabel>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl text-purple-deep leading-tight">
            Tradition, taste &amp; trusted manufacturing — from the heart of Pushkar.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Rooted in the cultural heritage of Pushkar, Rajasthan, Tulsi Gulkand has built a strong reputation as a trusted manufacturer of traditional food products.
          </p>
          <p className="mt-4 text-muted-foreground">
            Our journey is driven by a simple philosophy — <span className="text-purple-deep font-semibold">quality ingredients, authentic taste and long-term business relationships.</span> From premium Gulkand to fruit-based ingredients and confectionery, we cater to dealers, distributors and food businesses seeking dependable supply.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { k: "48+", v: "Years of trust" },
              { k: "500+", v: "B2B partners" },
              { k: "5", v: "Product categories" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-border bg-cream/60 p-5">
                <div className="font-display text-3xl text-gold-gradient">{s.k}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-card border border-gold/20">
            <img src={aboutImg} alt="Fresh roses and gulkand" className="h-full w-full object-cover" loading="lazy" width={1200} height={1400} />
          </div>
          <div className="absolute -bottom-6 -right-4 sm:-right-8 w-36 sm:w-44 rounded-2xl overflow-hidden shadow-card border-2 border-white bg-white">
            <img src={packGoldFlat} alt="Tulsi Gold Gulkand pack back" className="w-full object-cover" loading="lazy" width={400} height={400} />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { t: "Consistent Quality", d: "Uniform taste, texture and standards across every batch." },
    { t: "Trusted Expertise", d: "Decades of product knowledge and manufacturing experience." },
    { t: "Hygienic Packaging", d: "Sealed packaging that preserves freshness and integrity." },
    { t: "Reliable Supply", d: "Structured distribution support for long-term continuity." },
    { t: "B2B Focused", d: "Built for dealers, distributors and wholesale partners." },
    { t: "Long-term Partnerships", d: "Relationship-first approach with our channel partners." },
  ];
  return (
    <section className="bg-section-soft py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <SectionLabel>Why Choose Tulsi Gulkand</SectionLabel>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl text-purple-deep">Why businesses prefer us, batch after batch.</h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((i, idx) => (
            <div key={i.t} className="group relative rounded-3xl bg-white border border-border/70 p-7 shadow-soft hover:-translate-y-1 hover:shadow-card transition-all">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl bg-gold-gradient text-purple-deep flex items-center justify-center font-display text-lg shadow-gold">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-xl text-purple-deep">{i.t}</h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Applications() {
  const apps = [
    { t: "Paan", img: appPaan },
    { t: "Ice Cream", img: appIcecream },
    { t: "Desserts", img: appIcecream },
    { t: "Milkshakes", img: appShake },
    { t: "Bakery", img: appBakery },
    { t: "Horeca", img: appBakery },
  ];
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <SectionLabel>Product Applications</SectionLabel>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl text-purple-deep">Multiple uses across food industries.</h2>
          <p className="mt-4 text-muted-foreground">Tulsi Gulkand products are widely used by paan industry, dessert kitchens, ice-cream brands, bakeries and Horeca supply chains.</p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {apps.map((a, i) => (
            <div key={i} className="group relative aspect-square rounded-2xl overflow-hidden shadow-soft border border-border/60">
              <img src={a.img} alt={a.t} className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" width={800} height={800} />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-deep/80 via-purple-deep/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="text-white font-display text-lg">{a.t}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Quality() {
  return (
    <section className="bg-section-soft py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
          <div className="rounded-3xl overflow-hidden border border-gold/20 shadow-card aspect-square bg-white">
            <img src={packGold} alt="Tulsi Gold Gulkand" className="h-full w-full object-cover" loading="lazy" width={800} height={800} />
          </div>
          <div className="rounded-3xl overflow-hidden border border-gold/20 shadow-card aspect-square bg-white mt-8">
            <img src={packBaba} alt="Ganpati Baba Gulkand" className="h-full w-full object-cover" loading="lazy" width={800} height={800} />
          </div>
          <div className="rounded-3xl overflow-hidden border border-gold/20 shadow-card aspect-square bg-white">
            <img src={heroPetals} alt="Fresh rose petals" className="h-full w-full object-cover" loading="lazy" width={800} height={800} />
          </div>
          <div className="rounded-3xl overflow-hidden border border-gold/20 shadow-card aspect-square bg-white mt-8">
            <img src={packSuper400} alt="Super Tulsi Gulkand pack" className="h-full w-full object-cover" loading="lazy" width={800} height={800} />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <SectionLabel>Quality Commitment</SectionLabel>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl text-purple-deep">Quality you can depend on.</h2>
          <p className="mt-6 text-muted-foreground">At Tulsi Gulkand, quality is not just a process — it is a commitment that runs through every selection, every batch and every pack.</p>
          <ul className="mt-6 space-y-3">
            {[
              "Carefully selected ingredients",
              "Hygienic handling at every stage",
              "Product consistency batch to batch",
              "Secure, freshness-preserving packaging",
              "Reliable supply standards",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-foreground/85">
                <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-gold-gradient flex items-center justify-center text-purple-deep text-xs font-bold">✓</span>
                <span className="text-sm sm:text-base">{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-white border border-border px-5 py-4 shadow-soft">
            <div className="h-10 w-10 rounded-full bg-warm-red/10 text-warm-red flex items-center justify-center font-bold">FS</div>
            <div>
              <div className="text-sm font-semibold text-purple-deep">FSSAI Certified</div>
              <div className="text-xs text-muted-foreground">Lic. No. 12214009001027</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientLogos() {
  const partners = [
    "Sweet House Co.",
    "Royal Mithai",
    "Frostline Dairy",
    "Pushkar Bakers",
    "Heritage Foods",
    "Marwar Distributors",
    "Aravalli Horeca",
    "Desert Supply Co.",
  ];
  return (
    <section className="bg-white py-20 sm:py-24 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <SectionLabel>Business Network</SectionLabel>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl text-purple-deep">Trusted manufacturing partner.</h2>
          <p className="mt-4 text-muted-foreground">
            Working alongside dealers, distributors and food businesses across India — a network built on consistency and dependable supply.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {partners.map((p) => (
            <div
              key={p}
              className="h-20 rounded-2xl border border-border bg-cream/60 flex items-center justify-center px-4 text-center hover:border-gold/60 hover:bg-white transition"
            >
              <span className="font-display text-base sm:text-lg text-purple-deep/80 tracking-wide">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  const list = [
    { t: "Sweet & Mithai Manufacturers", d: "Premium Gulkand and ingredient supply for traditional sweet makers." },
    { t: "Ice Cream & Dessert Brands", d: "Consistent flavor base for ice cream, kulfi and dessert product lines." },
    { t: "Bakery & Confectionery", d: "Tutti Frutti and fruit ingredients for cakes, breads and confections." },
    { t: "Horeca & Catering", d: "Dependable bulk sourcing for hotels, restaurants and catering operations." },
    { t: "FMCG Distribution", d: "Channel-ready packs and supply structure for FMCG distribution networks." },
    { t: "Wholesale & Dealer Networks", d: "Long-term partnerships with wholesalers and regional dealer networks." },
  ];
  return (
    <section id="industries" className="bg-purple-deep text-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-gold font-semibold">
            <span className="h-px w-6 bg-gold/60" /> Industries We Support
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl">Built for food businesses of every scale.</h2>
          <p className="mt-4 text-white/70">Reliable ingredient sourcing across categories — from artisanal mithai houses to large FMCG networks.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((it, i) => (
            <div key={it.t} className="rounded-3xl bg-white/[0.05] border border-white/10 p-7 hover:bg-white/[0.08] hover:border-gold/40 transition">
              <div className="text-gold font-display text-2xl">{String(i + 1).padStart(2, "0")}</div>
              <div className="mt-3 font-display text-2xl leading-tight">{it.t}</div>
              <div className="mt-2 text-sm text-white/65">{it.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InquiryCTA() {
  return (
    <section id="inquiry" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gold-gradient" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,white,transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28 grid lg:grid-cols-5 gap-10 items-center">
        <div className="lg:col-span-3">
          <SectionLabel>Partnership</SectionLabel>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl text-purple-deep leading-tight">
            Looking for a reliable manufacturing partner?
          </h2>
          <p className="mt-5 text-purple-deep/80 max-w-xl">
            Whether you are a distributor, dealer or food business seeking dependable sourcing, Tulsi Gulkand is ready to support your growth.
          </p>
        </div>
        <div className="lg:col-span-2 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
          <a href="#contact" className="inline-flex justify-center items-center gap-2 rounded-full bg-purple-deep text-white px-7 py-4 text-sm font-semibold shadow-soft hover:opacity-95 transition w-full sm:w-auto">
            Dealer Inquiry <span aria-hidden>→</span>
          </a>
          <a href="https://wa.me/919982416955" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center gap-2 rounded-full bg-white text-purple-deep border border-purple-deep/10 px-7 py-4 text-sm font-semibold hover:bg-cream transition w-full sm:w-auto">
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12">
        <div>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl text-purple-deep">Let's build business together.</h2>
          <p className="mt-4 text-muted-foreground">Reach out for wholesale pricing, dealership opportunities or product samples.</p>

          <div className="mt-8 space-y-5">
            {[
              { t: "Address", d: "Mahendra Gulkand Works, Bikaner Merta Road, Banseli, Pushkar (Rajasthan) — 305022" },
              { t: "Phone", d: "+91 99824 16955 · +91 99825 16955" },
              { t: "Email", d: "info@tulsigulkand.com" },
            ].map((i) => (
              <div key={i.t} className="rounded-2xl border border-border bg-cream/50 p-5">
                <div className="text-[11px] uppercase tracking-widest text-warm-red font-semibold">{i.t}</div>
                <div className="mt-1 text-purple-deep">{i.d}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl overflow-hidden border border-border aspect-[16/9] bg-rose-soft">
            <iframe
              title="Tulsi Gulkand location"
              src="https://www.google.com/maps?q=Pushkar+Rajasthan&output=embed"
              className="h-full w-full"
              loading="lazy"
            />
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); alert("Thank you! Our team will get back to you shortly."); }}
          className="rounded-3xl bg-section-soft border border-border p-6 sm:p-8 shadow-soft"
        >
          <div className="font-display text-2xl text-purple-deep">Send Business Inquiry</div>
          <p className="mt-1 text-sm text-muted-foreground">We respond within 24 business hours.</p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-xs font-semibold text-purple-deep">Full Name *</span>
              <input required className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose/30" placeholder="Your name" />
            </label>
            <label className="block">
              <span className="text-xs font-semibold text-purple-deep">Company</span>
              <input className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose/30" placeholder="Business name" />
            </label>
            <label className="block">
              <span className="text-xs font-semibold text-purple-deep">Phone *</span>
              <input required type="tel" className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose/30" placeholder="+91" />
            </label>
            <label className="block">
              <span className="text-xs font-semibold text-purple-deep">Email *</span>
              <input required type="email" className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose/30" placeholder="you@company.com" />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-xs font-semibold text-purple-deep">Inquiry Type</span>
              <select className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose/30">
                <option>Dealer / Distributor</option>
                <option>Wholesale Order</option>
                <option>Bulk / Bakery / Horeca</option>
                <option>Product Sample</option>
                <option>Other</option>
              </select>
            </label>
            <label className="block sm:col-span-2">
              <span className="text-xs font-semibold text-purple-deep">Message</span>
              <textarea rows={4} className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose/30" placeholder="Tell us about your requirements..." />
            </label>
          </div>

          <button type="submit" className="mt-6 w-full inline-flex justify-center items-center gap-2 rounded-full bg-warm-red text-primary-foreground px-6 py-4 text-sm font-semibold shadow-soft hover:opacity-95 transition">
            Send Inquiry <span aria-hidden>→</span>
          </button>
        </form>
      </div>
    </section>
  );
}

/* ---------- page ---------- */

function Home() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <TrustStrip />
        <Products />
        <About />
        <WhyUs />
        <ClientLogos />
        <Applications />
        <Quality />
        <Industries />
        <InquiryCTA />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
