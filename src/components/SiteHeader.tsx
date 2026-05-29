import { Link } from "@tanstack/react-router";
import logo from "@/assets/tulsi-logo.png";

export function SiteHeader() {
  const nav = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "About", href: "/#about" },
    { label: "Industries", href: "/#industries" },
    { label: "Contact", href: "/#contact" },
  ];
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-cream/85 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-rose-soft border border-rose/20 flex items-center justify-center overflow-hidden">
            <img src={logo} alt="Tulsi Gulkand" className="h-9 w-9 object-contain" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg sm:text-xl font-semibold text-purple-deep">Tulsi Gulkand</div>
            <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Pushkar · Rajasthan</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-foreground/80 hover:text-warm-red transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#inquiry"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-warm-red text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow-soft hover:opacity-95 transition"
        >
          Business Inquiry
        </a>
      </div>
    </header>
  );
}
