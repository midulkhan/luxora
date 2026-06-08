import SearchComponent from "@/components/home/Search";
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
import Hotels from "./Hotels";
import HotelFilter from "./HotelFilter";
import { Suspense } from "react";
import HotelSkeleton from "./HotelSkeleton";
import NoHotelFound from "./NotFound";

interface Hotel {
  id: number;
  name: string;
  price: string;
  image: {
    sourceUrl: string;
  };
  places: {
    nodes: {
      name: string;
    }[];
  };
  reviews: {
    averageRating: number;
    nodes: {
      content: string;
    }[];
  };
}
interface HotelsResponse {
  result: Hotel[];
  total: number;
}

interface Props {
  searchParams: Promise<{
    location?: string;
    minprice?: string;
    maxprice?: string;
    rating?: string;
  }>;
}

export default async function HotelsPage({ searchParams }: Props) {
  const { location, minprice, maxprice, rating } = await searchParams;
  console.log("Location:", location);

  const query = new URLSearchParams();
  if (location) query.set("location", location);
  if (minprice) query.set("minprice", minprice);
  if (maxprice) query.set("maxprice", maxprice);
  if (rating) query.set("rating", rating);

  const API_URL =
    process.env.NODE_ENV === "production"
      ? "http://luxora.fly.dev/api/graphql"
      : `http://localhost:3000/api/hotels?${query}`;

  const res = await fetch(API_URL, { next: { revalidate: 60 } });
  const hotels: HotelsResponse = await res.json();
  const { result } = hotels;

  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-8 text-[#071d3a] lg:px-12">
      <section className="mx-auto max-w-7xl">
        {/* Search Bar */}
        <SearchComponent />

        {/* Top Text */}
        <div className="mt-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm text-slate-500">Home &gt; Hotels in Dubai</p>
            <h1 className="mt-4 text-3xl font-bold text-slate-950 lg:text-4xl">
              All Hotels in Dubai, UAE
            </h1>
            <p className="mt-2 text-slate-500">
              {hotels?.total} properties found
            </p>
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
          <HotelFilter />

          {/* Hotel Listings */}
          <section className="space-y-5">
            <Suspense fallback={<HotelSkeleton />}>
              {result.length ==0 ? <NoHotelFound/> :result.map((hotel) => (
                <Hotels
                  key={hotel.id}
                  id={hotel.id}
                  name={hotel.name}
                  price={hotel.price}
                  image={hotel.image}
                  places={hotel.places}
                  reviews={hotel.reviews}
                />
              ))}
            </Suspense>
          </section>
        </div>
      </section>
    </main>
  );
}
