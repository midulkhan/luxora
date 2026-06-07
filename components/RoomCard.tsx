import { Users, Wifi, BedDouble } from 'lucide-react';
import React from 'react'

interface RoomCardProps {
  id: string;
  name: string;
  image?: {
    sourceUrl: string;
    altText?: string;
  };
  price: number;
}

function RoomCard({ id,name, image, price }: RoomCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-xl shadow-slate-900/10">
      <div className="relative h-48">
        <img src={image?.sourceUrl} alt={image?.altText || name} className="size-full object-cover" />

        
      </div>

      <div className="p-4">
        <h3 className="font-bold">{name}</h3>

        <div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <Users size={14} /> 2 Guests
          </span>
          <span className="flex items-center gap-1">
            <BedDouble size={14} /> 1 King Bed
          </span>
          <span className="flex items-center gap-1">
            <Wifi size={14} /> Free Wi-Fi
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <p className="text-xl font-bold">
            {price}
            <span className="text-sm font-normal text-slate-500"> / night</span>
          </p>

          <button className="rounded-lg bg-[#071d3a] px-4 py-2 text-sm font-semibold text-white">
            Book Now
          </button>
        </div>
      </div>
    </article>
  );
  
}

export default RoomCard