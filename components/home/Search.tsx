import { ArrowRight, BadgeCheck, CalendarDays, Gift, Headphones, MapPin, Search, ShieldCheck, Users } from 'lucide-react'
import React from 'react'



function SearchComponent() {
  return (
  <section className="relative z-20 mx-auto -mt-20 max-w-7xl px-4 lg:px-8">
  <div className="rounded-[28px] bg-white p-4 shadow-2xl shadow-slate-900/20">
    <div className="grid items-center gap-4 lg:grid-cols-[1.35fr_1fr_1fr_1.15fr_auto]">

      
      <div className="flex items-center gap-4 px-5 py-3 lg:border-r lg:border-slate-200">
        <MapPin className="h-5 w-5 text-[#f4a629]" />
        <div>
          <p className="text-xs font-medium text-slate-500">Destination</p>
          <p className="mt-1 text-base font-semibold text-slate-800">
            Where are you going?
          </p>
        </div>
      </div>

 
      <div className="flex items-center gap-4 px-5 py-3 lg:border-r lg:border-slate-200">
        <CalendarDays className="h-5 w-5 text-slate-500" />
        <div>
          <p className="text-xs font-medium text-slate-500">Check-in</p>
          <p className="mt-1 text-base font-semibold text-slate-800">
            May 24, 2025
          </p>
        </div>
      </div>

  
      <div className="flex items-center gap-4 px-5 py-3 lg:border-r lg:border-slate-200">
        <CalendarDays className="h-5 w-5 text-slate-500" />
        <div>
          <p className="text-xs font-medium text-slate-500">Check-out</p>
          <p className="mt-1 text-base font-semibold text-slate-800">
            May 26, 2025
          </p>
        </div>
      </div>

 
      <div className="flex items-center gap-4 px-5 py-3 lg:border-r lg:border-slate-200">
        <Users className="h-5 w-5 text-slate-500" />
        <div>
          <p className="text-xs font-medium text-slate-500">Guests & Rooms</p>
          <p className="mt-1 text-base font-semibold text-slate-800">
            2 Guests, 1 Room
          </p>
        </div>
      </div>


      <button className="mt-3 flex h-[58px] items-center justify-center gap-3 rounded-2xl bg-[#071d3a] px-8 text-base font-semibold text-white transition hover:bg-[#0b2b56] lg:mt-0">
        
        Search Hotels
        <ArrowRight className="h-4 w-4" />
      </button>

    </div>
  </div>
</section>
  )
}

export default SearchComponent