import { Heart } from "lucide-react";

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



export default async function Hotels({ id, name, price, image, places , reviews}: Hotel) {


  return (
    <>
      
        <div
          className="grid overflow-hidden rounded-2xl bg-white shadow-lg shadow-slate-900/5 lg:grid-cols-[380px_1fr]"
        >
          <div className="relative h-64 lg:h-full">
            <img
              src={image?.sourceUrl || ""}
              alt={name || "Hotel Image"}
              className="h-full w-full object-cover"
            />

            <button className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-black/20 text-white backdrop-blur">
              <Heart className="h-5 w-5" />
            </button>
          </div>

          <div className="flex flex-col justify-between gap-6 p-6 lg:flex-row lg:items-center">
            <div>
              <h2 className="mt-3 text-2xl font-bold text-slate-950">
                {name}
              </h2>

              <div className="mt-3 flex items-center gap-2">
                <p className="text-sm text-slate-600">
                  {reviews?.nodes?.length > 0 ? `⭐️ ${reviews.averageRating} (reviews)` : "Not rated yet"}
                  
                </p>
              </div>

              <p className="mt-4 text-sm text-slate-600">
                {/* {places?.nodes?.[0]?.name} */}
              </p>

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
              <p className="text-3xl font-bold text-slate-950">
                {price}
              </p>
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
     
    </>
  );
}