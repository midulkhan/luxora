import React, { Suspense } from "react";
import RoomCard from "../RoomCard";
import RoomCardSkeleton from "../RoomSkeleton";
import RoomList from "./RoomList";

async function Rooms() {

  return (
    <section className="mx-auto mt-10 grid max-w-7xl gap-6 rounded-3xl bg-[#fbf3e8] p-5 lg:grid-cols-[260px_1fr] lg:p-8">
      <div>
        <p className="text-sm font-semibold uppercase text-amber-600">
          Our Handpicked Rooms
        </p>

        <h2 className="mt-3 text-3xl font-bold">
          Stay in Comfort & Elegance
        </h2>

        <p className="mt-4 text-sm leading-6 text-slate-600">
          From cozy rooms to luxury suites, we have something perfect for every
          traveler.
        </p>

        <button className="mt-6 rounded-xl bg-[#071d3a] px-6 py-3 text-sm font-semibold text-white">
          View All Rooms
        </button>
      </div>

      <RoomList/>
      
    </section>
  );
}

export default Rooms;
