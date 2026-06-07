import { ChevronRight } from 'lucide-react';
import React from 'react'

function DestinationCard({ title, hotels, image }: { title: string; hotels: string; image: string }) {
  return (
    <article className="group relative h-56 overflow-hidden rounded-2xl">
      <img
        src={image}
        alt={title}
        className="size-full object-cover transition duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm">{hotels}</p>
        </div>

        <button className="flex size-9 items-center justify-center rounded-full bg-white text-slate-900">
          <ChevronRight size={18} />
        </button>
      </div>
    </article>
  )
}

export default DestinationCard