import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#071d3a] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-xl bg-amber-500 text-xl font-bold">
              L
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold tracking-[0.2em]">
                LUXORA
              </h2>
              <p className="text-xs tracking-[0.25em] text-white/70">
                HOTELS & RESORTS
              </p>
            </div>
          </div>

          <p className="max-w-xs text-sm leading-6 text-white/70">
            Experience the world with comfort, luxury and unforgettable memories.
            We’re here to make your stay extraordinary.
          </p>

        
        </div>

        <FooterColumn
          title="Quick Links"
          links={["Home", "Destinations", "Rooms", "Offers", "About Us", "Contact"]}
        />

        <FooterColumn
          title="Support"
          links={["Help Center", "FAQs", "Cancellation Policy", "Privacy Policy", "Terms & Conditions"]}
        />

        <FooterColumn
          title="Top Destinations"
          links={["Dubai, UAE", "Maldives", "Santorini, Greece", "Bali, Indonesia", "Paris, France"]}
        />

        <div>
          <h3 className="mb-5 font-semibold">Contact Us</h3>

          <div className="space-y-4 text-sm text-white/70">
            <p className="flex gap-3">
              <Phone size={18} className="text-amber-400" />
              +1 (555) 123-4567
            </p>

            <p className="flex gap-3">
              <Mail size={18} className="text-amber-400" />
              support@luxora.com
            </p>

            <p className="flex gap-3">
              <MapPin size={18} className="text-amber-400" />
              123 Ocean Drive, California, USA
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-5 text-sm text-white/60 md:flex-row lg:px-8">
          <p>© 2025 Luxora Hotels & Resorts. All Rights Reserved.</p>

          <div className="flex gap-3">
            {["VISA", "MC", "PayPal", "Apple Pay"].map((item) => (
              <span
                key={item}
                className="rounded-md border border-white/20 px-3 py-1 text-xs text-white"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="mb-5 font-semibold">{title}</h3>
      <ul className="space-y-3 text-sm text-white/70">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="transition hover:text-amber-400">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}