import Banner from "@/components/home/Banner";
import Destination from "@/components/home/Destination";
import Rooms from "@/components/home/Rooms";
import SearchComponent from "@/components/home/Search";
import {
  CalendarDays,
  MapPin,
  Search,
  Users,
  ChevronRight,
  Headphones,
  ShieldCheck,
  BadgeCheck,
  Gift,
  Star,
  Wifi,
  BedDouble,
  Waves,
} from "lucide-react";






const testimonials = [
  {
    name: "Ayesha Khan",
    location: "Dubai, UAE",
    text: "Luxora made our vacation unforgettable. The service was amazing and the hotel was beyond perfect.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "John Smith",
    location: "New York, USA",
    text: "Clean rooms, beautiful views, and excellent staff. I will definitely book again on my next trip.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Sara Ali",
    location: "London, UK",
    text: "Easy booking, great prices, and 24/7 support. Highly recommend Luxora for anyone who loves to travel.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop",
  },
];

export default function HotelHomePage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] text-slate-900">
   

      <Banner/>

      <SearchComponent/>  

      <SectionHeader label="Popular Destinations" title="Explore Top Destinations" link="View All Destinations" />

      <Destination />

      <Rooms/>

      <section className="mx-auto mt-10 max-w-7xl px-5 lg:px-8">
        <div className="grid gap-6 rounded-3xl bg-[#071d3a] p-6 lg:grid-cols-[300px_1fr] lg:p-8">
          <div>
            <p className="text-sm font-semibold uppercase text-amber-400">
              Up to 40% Off
            </p>

            <h2 className="mt-3 text-4xl font-bold text-white">
              Exclusive Deals for Your Next Getaway
            </h2>

            <p className="mt-4 text-sm leading-6 text-white/70">
              Book early and save more on stunning hotels around the world.
            </p>

            <button className="mt-6 rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-white">
              View All Offers
            </button>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <OfferCard title="Beach Escapes" discount="Up to 40% Off" image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=900&auto=format&fit=crop" />
            <OfferCard title="City Breaks" discount="Up to 35% Off" image="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=900&auto=format&fit=crop" />
            <OfferCard title="Weekend Getaways" discount="Up to 30% Off" image="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=900&auto=format&fit=crop" />
          </div>
        </div>
      </section>

      <SectionHeader label="What Our Guests Say" title="Trusted by Thousands of Travelers" />

      <section className="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-3 lg:px-8">
        {testimonials.map((item) => (
          <TestimonialCard key={item.name} {...item} />
        ))}
      </section>

      <section className="mx-auto my-12 max-w-7xl px-5 lg:px-8">
        <div className="grid overflow-hidden rounded-3xl bg-[#071d3a] lg:grid-cols-[360px_1fr]">
          <img
            src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=900&auto=format&fit=crop"
            alt="Hotel room"
            className="h-56 w-full object-cover lg:h-full"
          />

          <div className="flex flex-col justify-center gap-6 p-6 lg:flex-row lg:items-center lg:justify-between lg:p-10">
            <div>
              <h2 className="font-serif text-3xl font-bold text-white">
                Subscribe to Our Newsletter
              </h2>

              <p className="mt-2 text-sm text-white/70">
                Get exclusive offers, travel tips and updates straight to your inbox.
              </p>
            </div>

            <form className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                className="min-h-14 flex-1 rounded-xl border border-white/10 bg-white/10 px-5 text-white outline-none placeholder:text-white/50"
              />

              <button className="rounded-xl bg-amber-500 px-8 py-4 font-semibold text-white">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

    
    </main>
  );
}

function SearchBox({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-100 px-4 py-4">
      <div className="text-amber-500">{icon}</div>
      <div>
        <p className="text-xs text-slate-500">{label}</p>
        <p className="mt-1 font-medium text-slate-800">{value}</p>
      </div>
    </div>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="border-slate-100 p-4 lg:border-r last:border-r-0">
      <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-amber-100 text-amber-500">
        {icon}
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-slate-500">{text}</p>
    </div>
  );
}

function SectionHeader({ label, title, link }) {
  return (
    <section className="mx-auto mt-14 mb-8 flex max-w-7xl items-end justify-between px-5 lg:px-8">
      <div>
        <p className="text-sm font-semibold uppercase text-amber-600">{label}</p>
        <h2 className="mt-2 text-3xl font-bold">{title}</h2>
      </div>

      {link && (
        <a href="#" className="hidden items-center gap-2 text-sm font-medium md:flex">
          {link}
          <ChevronRight size={18} />
        </a>
      )}
    </section>
  );
}




function OfferCard({ title, discount, image }) {
  return (
    <article className="relative h-44 overflow-hidden rounded-2xl">
      <img src={image} alt={title} className="size-full object-cover" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm">{discount}</p>
        <button className="mt-2 text-sm font-semibold">Book Now →</button>
      </div>
    </article>
  );
}

function TestimonialCard({ name, location, text, image }) {
  return (
    <article className="rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={image} alt={name} className="size-14 rounded-full object-cover" />

          <div>
            <h3 className="font-bold">{name}</h3>
            <p className="text-sm text-slate-500">{location}</p>
          </div>
        </div>

        <div className="flex text-amber-500">
          {[1, 2, 3, 4, 5].map((item) => (
            <Star key={item} size={16} fill="currentColor" />
          ))}
        </div>
      </div>

      <p className="mt-5 text-sm leading-6 text-slate-600">“{text}”</p>
    </article>
  );
}