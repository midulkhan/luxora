import React from 'react'
import DestinationCard from './DestinationCard';


const destinations = [
  {
    title: "Dubai, UAE",
    hotels: "320+ Hotels",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Maldives",
    hotels: "180+ Hotels",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Santorini, Greece",
    hotels: "210+ Hotels",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Bali, Indonesia",
    hotels: "260+ Hotels",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Paris, France",
    hotels: "150+ Hotels",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=900&auto=format&fit=crop",
  },
];

function Destination() {
  return (
    <section className="mx-auto grid max-w-7xl gap-5 px-5 sm:grid-cols-2 lg:grid-cols-5 lg:px-8">
        {destinations.map((item, index) => (
          <DestinationCard key={index} title={item.title} hotels={item.hotels} image={item.image} />
        ))}
      </section>
  )
}

export default Destination