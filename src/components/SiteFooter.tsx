export function SiteFooter() {
  return (
    <footer className="bg-purple-deep text-white/90">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-2xl text-white">Tulsi Gulkand</div>
          <p className="mt-3 text-sm text-white/70 max-w-md">
            A Rajasthan-based manufacturer and B2B supplier of Gulkand, Tutti Frutti, Karonda, Amla Candy and Sharbat — trusted by distributors and food businesses nationwide.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold text-gold mb-3">Explore</div>
          <ul className="space-y-2 text-sm text-white/75">
            <li><a href="#products" className="hover:text-white">Products</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#industries" className="hover:text-white">Industries</a></li>
            <li><a href="#inquiry" className="hover:text-white">Become a Dealer</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-gold mb-3">Contact</div>
          <ul className="space-y-2 text-sm text-white/75">
            <li>Mahendra Gulkand Works</li>
            <li>Banseli, Pushkar — 305022</li>
            <li>+91 99824 16955</li>
            <li>info@tulsigulkand.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-5 text-xs text-white/55 flex flex-wrap items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Mahendra Gulkand Works. All rights reserved.</span>
          <span>FSSAI Lic. No. 12214009001027</span>
        </div>
      </div>
    </footer>
  );
}
