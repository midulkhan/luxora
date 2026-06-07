import { Skeleton } from "@/components/ui/skeleton";

interface RoomCardSkeletonProps {
  gridCount?: number;
}

export default function RoomCardSkeleton({
  gridCount = 3,
}: RoomCardSkeletonProps) {
  return (
    <div
      className={`grid gap-6 ${
        gridCount === 1
          ? "grid-cols-1"
          : gridCount === 2
          ? "grid-cols-1 md:grid-cols-2"
          : gridCount === 3
          ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          : gridCount === 4
          ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          : `grid-cols-${gridCount}`
      }`}
    >
      {Array.from({ length: gridCount }).map((_, index) => (
        <article
          key={index}
          className="overflow-hidden rounded-2xl bg-white shadow-xl shadow-slate-900/10"
        >
          <Skeleton className="h-48 w-full" />

          <div className="p-4">
            <Skeleton className="h-6 w-3/4" />

            <div className="mt-3 flex flex-wrap gap-3">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-20" />
            </div>

            <div className="mt-5 flex items-center justify-between">
              <div>
                <Skeleton className="h-7 w-24" />
                <Skeleton className="mt-1 h-4 w-16" />
              </div>

              <Skeleton className="h-10 w-28 rounded-lg" />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}