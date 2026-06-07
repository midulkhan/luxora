import { Heart, Globe2, Menu } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
        <div className="flex items-center gap-3 text-white">
          <div className="flex size-11 items-center justify-center rounded-xl bg-white text-xl font-bold">
            <Image src="/logo1.webp" alt="Luxora Logo" width={24} height={24} />  
          </div>

          <div>
            <h1 className="font-serif text-2xl font-bold tracking-[0.2em]">
              LUXORA
            </h1>
            <p className="text-xs tracking-[0.25em] text-white/80">
              HOTELS & RESORTS
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-10 text-sm font-medium text-white lg:flex">
         
        </nav>

        <div className="hidden items-center gap-5 text-white lg:flex">
          <button className="flex items-center gap-2 text-sm">
            <Globe2 size={18} />
            EN
          </button>

          <button>
            <Heart size={22} />
          </button>

          <button className="rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-500/20 transition hover:bg-amber-600">
            Sign In / Sign Up
          </button>
        </div>

        <button className="flex size-11 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur lg:hidden">
          <Menu />
        </button>
      </div>
    </header>
  );
}