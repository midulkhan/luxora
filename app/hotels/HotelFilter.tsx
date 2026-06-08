"use client";

import { Star } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function HotelFilter() {
  const [getLocation,setLocation] = useState()
  const params = useSearchParams();
  const router = useRouter();



  // Fetch Places from API
  useEffect(()=>{
    const controller = new AbortController();
    const getPlaces = async()=>{
       const res = await fetch("https://admin.midulhossen.it.com/graphql", {
          method: "POST",
          signal: controller.signal,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `
              query GetPlacesWithProducts {
                places {
                  nodes {
                    id
                    name
                    products {
                      nodes {
                        id
                        name
                      }
                    }
                  }
                }
              }
                          `,
          }),
        });
        const placeData = await res.json();
        const removeEmptyLocations = placeData?.data?.places?.nodes.filter((i:any)=> i.products.nodes.length !== 0 && i.name);
        setLocation(removeEmptyLocations);
    } 
    getPlaces();
 return ()=> {
  controller.abort();
 }

  },[])

console.log(getLocation);

  const Filter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formaData = new FormData(e.currentTarget);
    const location = formaData.getAll("location")?.toString().toLowerCase() || "";
    const rating = formaData.getAll("rating")?.toString() || "";
    const min = formaData.getAll("minprice")?.toString() || "";
    const max = formaData.getAll("maxprice")?.toString() || "";
    // updates url with selected filters]
    const query = new URLSearchParams();
    if (location.length > 0) query.set("location", location);
    if (rating) query.set("rating", rating);
    if (min) query.set("minprice", min);
    if (max) query.set("maxprice", max);

    router.push(`/hotels?${query.toString()}`);
  };

  return (
    <aside className="h-fit rounded-2xl bg-white p-5 shadow-lg shadow-slate-900/5">
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <h2 className="font-bold text-slate-950">Filter by</h2>
        <button className="text-sm font-medium text-[#071d3a]">
          Clear All
        </button>
      </div>

      <div className="space-y-7 pt-5">
        <div>
          <h3 className="font-semibold text-slate-950">Location</h3>
          <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
            <form onSubmit={Filter} className="w-full">
              {getLocation?.map((item, index)=>(
                <label key={item?.id || index} className="mb-3 flex items-center gap-3 text-sm">
                <input
                  name="location"
                  value={item.name}
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300"
                />
                {item.name} ({item.products.nodes.length})
              </label>
              ))}

              
              <div className="mt-4 h-1 rounded-full bg-[#071d3a]"></div>
              <div className="w-full mt-4">
                <h3 className="font-semibold text-slate-950 mb-4">
                  Star Rating
                </h3>
                {[5, 4, 3, 2, 1].map((item) => (
                  <label
                    key={item}
                    className="mb-3 flex items-center gap-3 text-sm"
                  >
                    <input
                      name="rating"
                      value={item}
                      type="checkbox"
                      defaultChecked={params
                        .get("rating")
                        ?.split(",")
                        .includes(item.toString())}
                      className="h-4 w-4 rounded border-slate-300"
                    />
                    {item} Stars
                    <div className="flex items-center gap-1">
                      {Array.from({ length: item }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-yellow-500 fill-yellow-500"
                        />
                      ))}
                    </div>
                  </label>
                ))}
              </div>

              <div className="mt-4 h-1 rounded-full bg-[#071d3a]"></div>

              <div className="w-full mt-4">
                <h3 className="font-semibold text-slate-950 mb-4">
                  Price Range
                </h3>
                <label className="mb-3 flex items-center gap-3 text-sm">
                  <span className="text-sm text-slate-600">Min</span>
                  <input
                    name="minprice"
                    type="number"
                    className="w-full rounded border border-slate-300 px-3 py-2 text-sm"
                  />
                </label>

                <label className="mb-3 flex items-center gap-3 text-sm">
                  <span className="text-sm text-slate-600">Max</span>
                  <input
                    name="maxprice"
                    type="number"
                    className="w-full rounded border border-slate-300 px-3 py-2 text-sm"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-2 rounded bg-[#071d3a] px-4 py-2 text-sm font-medium text-white"
              >
                Apply
              </button>
            </form>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default HotelFilter;
