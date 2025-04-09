import React from "react";

function BlogCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="flex flex-col items-center justify-center bg-gray-50 border-x-4 hover:scale-[101%] border-gray-200 hover:border-[var(--themeColor)] rounded-xl group min-h-[120px] transition-all duration-300">
        <div className="bg-white shadow-md overflow-hidden max-w-sm w-full border-gray-200 transition-all duration-300 border-y-4 hover:border-gray-200 rounded-2xl">
          <div className="relative">
            <div className="w-full h-64 bg-gray-200" />
            <div className="absolute top-2 left-2 bg-gray-200 text-white text-xs font-bold px-2 py-1 rounded" />
          </div>
          <div className="px-4 py-3">
            <div className="h-6 bg-gray-200 rounded w-3/4 my-3" />
            <div className="h-4 bg-gray-200 rounded w-full mb-3" />
            <div className="flex font-medium justify-between items-center">
              <div className="h-4 bg-gray-200 rounded w-1/4" />
              <div className="h-4 bg-gray-200 rounded w-1/4" />
            </div>
            <div className="flex justify-center my-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCardSkeleton;
