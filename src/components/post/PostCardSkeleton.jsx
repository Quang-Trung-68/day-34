import React from "react";
import { Skeleton } from "@/components/Common/ui/skeleton";

export default function PostCardSkeleton() {
  return (
    <div className="flex flex-col border-2 p-3 md:p-6">
      <div className="flex gap-2">
        <div className="flex flex-col items-center gap-2">
          <Skeleton className="size-9 rounded-full" />
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-12" />
              </div>
              <div className="mt-2 space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
            <Skeleton className="size-8 rounded-full" />
          </div>

          {/* Optional image placeholder */}
          <Skeleton className="mt-2 h-48 w-full rounded-lg" />

          {/* Interaction Bar Skeleton */}
          <div className="mt-4 flex gap-4">
            <Skeleton className="h-6 w-12 rounded-2xl" />
            <Skeleton className="h-6 w-12 rounded-2xl" />
            <Skeleton className="h-6 w-12 rounded-2xl" />
            <Skeleton className="h-6 w-8 rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
