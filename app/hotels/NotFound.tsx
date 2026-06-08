import { SearchX } from "lucide-react";

export default function NoHotelFound() {
  return (
    <div className="flex min-h-90 flex-col items-center justify-center rounded-2xl bg-gray-100 p-10 text-center shadow-lg shadow-slate-900/5">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-700">
        <SearchX className="h-8 w-8" />
      </div>

      <h3 className="mt-5 text-2xl font-bold text-slate-950">
        No hotels found
      </h3>

      <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
        We couldn&apos;t find any hotels matching your selected filters. Try
        changing the location, price range, or rating.
      </p>
    </div>
  );
}