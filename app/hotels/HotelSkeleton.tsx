import { Skeleton } from "@/components/ui/skeleton";

export default function HotelSkeleton() {
  return (
    <section className="space-y-5">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="grid overflow-hidden rounded-2xl bg-white shadow-lg shadow-slate-900/5 lg:grid-cols-[380px_1fr]"
        >
          <div className="relative h-64 lg:h-full">
            <Skeleton className="h-full w-full rounded-none" />

            <Skeleton className="absolute right-4 top-4 h-11 w-11 rounded-full" />
          </div>

          <div className="flex flex-col justify-between gap-6 p-6 lg:flex-row lg:items-center">
            <div className="w-full">
              <Skeleton className="h-7 w-64" />

              <div className="mt-4 flex items-center gap-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-20" />
              </div>

              <Skeleton className="mt-5 h-4 w-40" />

              <div className="mt-5 flex flex-wrap gap-2">
                <Skeleton className="h-9 w-28 rounded-lg" />
                <Skeleton className="h-9 w-24 rounded-lg" />
                <Skeleton className="h-9 w-20 rounded-lg" />
                <Skeleton className="h-9 w-16 rounded-lg" />
              </div>
            </div>

            <div className="w-full lg:w-48 lg:text-right">
              <Skeleton className="h-8 w-28 lg:ml-auto" />
              <Skeleton className="mt-2 h-4 w-16 lg:ml-auto" />
              <Skeleton className="mt-5 h-4 w-36 lg:ml-auto" />
              <Skeleton className="mt-5 h-12 w-36 rounded-xl lg:ml-auto" />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}