import {
  MapPin,
  CalendarDays,
  Users,
  Search,
  ChevronDown,
  Star,
  Heart,
  SlidersHorizontal,
} from "lucide-react";

export default function HotelsPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-8 text-[#071d3a] lg:px-12">
      <section className="mx-auto max-w-7xl">
        {/* Search Bar */}
        <div className="rounded-[28px] bg-white p-4 shadow-xl shadow-slate-900/10">
          <div className="grid items-center gap-0 lg:grid-cols-[1.25fr_1fr_1fr_1.15fr_auto]">
            <div className="flex items-center gap-4 px-5 py-3 lg:border-r lg:border-slate-200">
              <MapPin className="h-6 w-6 text-[#f5a11a]" />
              <div className="flex-1">
                <p className="text-xs font-medium text-slate-500">Destination</p>
                <div className="mt-1 flex items-center justify-between">
                  <p className="font-semibold text-slate-900">Dubai, UAE</p>
                  <ChevronDown className="h-4 w-4 text-slate-500" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 px-5 py-3 lg:border-r lg:border-slate-200">
              <CalendarDays className="h-5 w-5 text-slate-700" />
              <div>
                <p className="text-xs font-medium text-slate-500">Check-in</p>
                <p className="mt-1 font-semibold text-slate-900">May 24, 2025</p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-5 py-3 lg:border-r lg:border-slate-200">
              <CalendarDays className="h-5 w-5 text-slate-700" />
              <div>
                <p className="text-xs font-medium text-slate-500">Check-out</p>
                <p className="mt-1 font-semibold text-slate-900">May 26, 2025</p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-5 py-3 lg:border-r lg:border-slate-200">
              <Users className="h-5 w-5 text-slate-700" />
              <div className="flex-1">
                <p className="text-xs font-medium text-slate-500">Guests & Rooms</p>
                <div className="mt-1 flex items-center justify-between">
                  <p className="font-semibold text-slate-900">2 Guests, 1 Room</p>
                  <ChevronDown className="h-4 w-4 text-slate-500" />
                </div>
              </div>
            </div>

            <button className="mt-3 flex h-[58px] items-center justify-center gap-3 rounded-2xl bg-[#071d3a] px-8 font-semibold text-white transition hover:bg-[#0b2b56] lg:mt-0">
              <Search className="h-5 w-5" />
              Update Search
            </button>
          </div>
        </div>

        {/* Top Text */}
        <div className="mt-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm text-slate-500">Home &gt; Hotels in Dubai</p>
            <h1 className="mt-4 text-3xl font-bold text-slate-950 lg:text-4xl">
              All Hotels in Dubai, UAE
            </h1>
            <p className="mt-2 text-slate-500">342 properties found</p>
          </div>

          <div className="flex items-center gap-3">
            <p className="text-sm font-medium text-slate-700">Sort by:</p>
            <button className="flex h-12 items-center gap-10 rounded-xl border border-slate-200 bg-white px-5 text-sm font-medium text-slate-800">
              Recommended
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-7 lg:grid-cols-[280px_1fr]">
          {/* Sidebar Filter */}
          <aside className="h-fit rounded-2xl bg-white p-5 shadow-lg shadow-slate-900/5">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <h2 className="font-bold text-slate-950">Filter by</h2>
              <button className="text-sm font-medium text-[#071d3a]">Clear All</button>
            </div>

            <div className="space-y-7 pt-5">
              <div>
                <h3 className="font-semibold text-slate-950">Price per night</h3>
                <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
                  <span>$50</span>
                  <span>$500+</span>
                </div>
                <div className="mt-4 h-1 rounded-full bg-[#071d3a]"></div>
              </div>

              <div>
                <h3 className="mb-4 font-semibold text-slate-950">Star Rating</h3>
                {[5, 4, 3, 2, 1].map((rating) => (
                  <label key={rating} className="mb-3 flex items-center justify-between text-sm">
                    <span className="flex items-center gap-3">
                      <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
                      {rating} Stars
                    </span>
                    <span className="flex text-[#f5a11a]">
                      {Array.from({ length: rating }).map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-current" />
                      ))}
                    </span>
                  </label>
                ))}
              </div>

              <div>
                <h3 className="mb-4 font-semibold text-slate-950">Guest Rating</h3>
                {["Excellent 4.5+", "Very Good 4.0+", "Good 3.5+", "Pleasant 3.0+"].map(
                  (item) => (
                    <label key={item} className="mb-3 flex items-center gap-3 text-sm">
                      <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
                      {item}
                    </label>
                  )
                )}
              </div>

              <div>
                <h3 className="mb-4 font-semibold text-slate-950">Popular Filters</h3>
                {["Free Cancellation", "Free Breakfast", "Pool", "Free WiFi", "Spa"].map(
                  (item) => (
                    <label key={item} className="mb-3 flex items-center gap-3 text-sm">
                      <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
                      {item}
                    </label>
                  )
                )}
              </div>
            </div>
          </aside>

          {/* Hotel Listings */}
          <section className="space-y-5">
            {[
              {
                title: "Burj View Grand Hotel",
                img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
                price: "$289",
                location: "Downtown Dubai, Dubai • 0.5 km to Burj Khalifa",
                tag: "Best Seller",
              },
              {
                title: "Luxury Palm Resort",
                img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=900&q=80",
                price: "$255",
                location: "Palm Jumeirah, Dubai • 1.2 km to Beach",
              },
              {
                title: "Downtown Central Hotel",
                img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80",
                price: "$189",
                location: "Business Bay, Dubai • 2.3 km to Dubai Mall",
              },
              {
                title: "Jumeirah Beach Hotel",
                img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=900&q=80",
                price: "$312",
                location: "Jumeirah Beach, Dubai • 0.8 km to Beach",
              },
            ].map((hotel) => (
              <div
                key={hotel.title}
                className="grid overflow-hidden rounded-2xl bg-white shadow-lg shadow-slate-900/5 lg:grid-cols-[380px_1fr]"
              >
                <div className="relative h-64 lg:h-full">
                  <img
                    src={hotel.img}
                    alt={hotel.title}
                    className="h-full w-full object-cover"
                  />
                  <button className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-black/20 text-white backdrop-blur">
                    <Heart className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex flex-col justify-between gap-6 p-6 lg:flex-row lg:items-center">
                  <div>
                    {hotel.tag && (
                      <span className="rounded-md bg-[#f5a11a] px-3 py-1 text-xs font-bold text-white">
                        {hotel.tag}
                      </span>
                    )}

                    <h2 className="mt-3 text-2xl font-bold text-slate-950">
                      {hotel.title}
                    </h2>

                    <div className="mt-3 flex items-center gap-2">
                      <div className="flex text-[#f5a11a]">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <p className="text-sm text-slate-600">4.7 reviews</p>
                    </div>

                    <p className="mt-4 text-sm text-slate-600">{hotel.location}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {["Free Breakfast", "Free WiFi", "Pool", "Spa"].map((item) => (
                        <span
                          key={item}
                          className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-left lg:text-right">
                    <p className="text-3xl font-bold text-slate-950">{hotel.price}</p>
                    <p className="text-sm text-slate-500">/ night</p>
                    <p className="mt-4 text-sm font-medium text-emerald-600">
                      Includes taxes & fees
                    </p>
                    <button className="mt-5 rounded-xl bg-[#071d3a] px-7 py-3 font-semibold text-white transition hover:bg-[#0b2b56]">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </section>
    </main>
  );
}