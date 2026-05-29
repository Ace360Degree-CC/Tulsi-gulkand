import { createFileRoute } from "@tanstack/react-router";
import heroPetals from "@/assets/hero-petals.jpg";
import tulsiLogo from "@/assets/tulsi-logo.png";

export const Route = createFileRoute("/coming-soon")({
  head: () => ({
    meta: [
      { title: "Coming Soon | Tulsi Gulkand — Premium Rajasthan Food Manufacturer" },
      {
        name: "description",
        content:
          "Something sweet is blooming soon. Tulsi Gulkand is crafting a richer digital experience inspired by tradition, quality and the authentic taste of Rajasthan.",
      },
      { property: "og:title", content: "Coming Soon | Tulsi Gulkand" },
      {
        property: "og:description",
        content:
          "A premium Rajasthan-based heritage food brand gracefully preparing for launch — warm, authentic and sweeter than expected.",
      },
      { property: "og:image", content: heroPetals },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ComingSoonPage,
});

const PHONE = "+91 99824 16955";
const PHONE_TEL = "+919982416955";
const EMAIL = "info@tulsigulkand.com";
const WHATSAPP = "https://wa.me/919982416955";

function PetalField() {
  // Subtle, gentle floating petals — decorative only
  const petals = [
    { left: "8%", delay: "0s", duration: "16s", size: 22, rotate: "10deg" },
    { left: "22%", delay: "4s", duration: "20s", size: 16, rotate: "-15deg" },
    { left: "38%", delay: "8s", duration: "18s", size: 26, rotate: "25deg" },
    { left: "55%", delay: "2s", duration: "22s", size: 14, rotate: "-8deg" },
    { left: "70%", delay: "6s", duration: "19s", size: 20, rotate: "18deg" },
    { left: "86%", delay: "10s", duration: "24s", size: 24, rotate: "-20deg" },
  ];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {petals.map((p, i) => (
        <span
          key={i}
          className="absolute -top-10 text-rose/70 animate-petal-fall"
          style={{
            left: p.left,
            fontSize: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
            ["--rot" as string]: p.rotate,
          }}
        >
          🌹
        </span>
      ))}
    </div>
  );
}

export function ComingSoonPage() {
  return (
    <main className="relative min-h-screen bg-hero-gradient overflow-hidden">
      <style>{`
        @keyframes petalFall {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: translateY(110vh) rotate(var(--rot, 20deg)); opacity: 0; }
        }
        .animate-petal-fall { animation-name: petalFall; animation-iteration-count: infinite; animation-timing-function: ease-in-out; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-up { animation: fadeUp 0.9s ease-out both; }
        @keyframes floatSlow { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .animate-float-slow { animation: floatSlow 6s ease-in-out infinite; }
      `}</style>

      <PetalField />

      {/* soft ingredient texture backdrop */}
      <img
        src={heroPetals}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.12]"
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 py-20 text-center">
        {/* Brand */}
        <div className="animate-fade-up flex flex-col items-center gap-4">
          <img
            src={tulsiLogo}
            alt="Tulsi Gulkand logo"
            className="h-24 w-auto animate-float-slow drop-shadow"
          />
          <span className="rounded-full border border-gold/40 bg-card/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-warm-red backdrop-blur">
            Rajasthan Heritage · Since Generations
          </span>
        </div>

        {/* Hero headline */}
        <h1 className="animate-fade-up mt-10 text-balance text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl" style={{ animationDelay: "0.1s" }}>
          Something Sweet is{" "}
          <span className="text-gold-gradient">Blooming Soon</span>
        </h1>

        <p className="animate-fade-up mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg" style={{ animationDelay: "0.2s" }}>
          We're crafting a richer digital experience inspired by tradition,
          quality and the authentic taste of Tulsi Gulkand.
        </p>

        {/* Featured brand message — emotional centerpiece */}
        <figure
          className="animate-fade-up relative mt-12 w-full max-w-2xl rounded-3xl border border-gold/30 bg-card/70 px-8 py-10 shadow-card backdrop-blur sm:px-12"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="pointer-events-none absolute -left-3 -top-3 text-5xl opacity-30 select-none">❝</span>
          <div className="mb-4 text-4xl animate-float-slow">🌹</div>
          <blockquote className="font-display text-2xl italic leading-snug text-foreground sm:text-3xl">
            "Gone to pick the freshest rose petals — our Gulkand won't make itself.
            Website coming soon, sweeter than ever."
          </blockquote>
          <figcaption className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-warm-red">
            — The Tulsi Gulkand Family
          </figcaption>
        </figure>

        {/* B2B credibility */}
        <p className="animate-fade-up mt-10 max-w-xl text-sm leading-relaxed text-muted-foreground" style={{ animationDelay: "0.4s" }}>
          Tulsi Gulkand continues to support dealers, distributors and food
          businesses with trusted products and dependable supply.
        </p>

        {/* Contact / Inquiry */}
        <section className="animate-fade-up mt-14 w-full max-w-2xl rounded-3xl border border-border bg-card/80 p-8 shadow-soft backdrop-blur" style={{ animationDelay: "0.5s" }}>
          <h2 className="text-2xl text-foreground sm:text-3xl">Need Business Information?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            We're always available for our partners. Reach out anytime.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-2 text-sm text-foreground sm:flex-row sm:gap-8">
            <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 hover:text-warm-red transition-colors">
              <span aria-hidden>📞</span> {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 hover:text-warm-red transition-colors">
              <span aria-hidden>✉️</span> {EMAIL}
            </a>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-leaf px-7 py-3 text-sm font-semibold text-white shadow-card transition-transform hover:scale-105 sm:w-auto"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
                <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.9c0 2.1.55 4.15 1.6 5.95L0 24l6.32-1.66a11.9 11.9 0 0 0 5.74 1.46h.01c6.56 0 11.9-5.33 11.9-11.9 0-3.18-1.24-6.17-3.45-8.42ZM12.07 21.6h-.01a9.7 9.7 0 0 1-4.95-1.36l-.36-.21-3.75.98 1-3.66-.23-.38a9.7 9.7 0 0 1-1.49-5.18c0-5.36 4.36-9.72 9.73-9.72a9.66 9.66 0 0 1 6.88 2.85 9.66 9.66 0 0 1 2.85 6.88c0 5.36-4.36 9.72-9.67 9.8Z"/>
              </svg>
              WhatsApp Us
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-warm-red px-7 py-3 text-sm font-semibold text-warm-red transition-colors hover:bg-warm-red hover:text-white sm:w-auto"
            >
              Contact Us
            </a>
          </div>
        </section>

        <p className="animate-fade-up mt-12 text-xs uppercase tracking-[0.3em] text-muted-foreground" style={{ animationDelay: "0.6s" }}>
          Mahendra Gulkand Works · Pushkar, Rajasthan
        </p>
      </div>
    </main>
  );
}
