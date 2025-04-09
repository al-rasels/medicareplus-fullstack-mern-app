import React from "react";

function DocDetailSkeleton() {
  return (
    <article className="animate-pulse">
      <div className="flex flex-wrap bg-gray-50 rounded-2xl shadow-sm py-6 px-4 hover:scale-[102%] transition-transform duration-300">
        <div className="w-full md:w-2/5 px-4 mb-5 md:mb-0">
          <div className="w-full h-auto bg-gray-200 rounded-xl" />
          <div className="flex flex-col items-center justify-center mt-10">
            <div className="font-light h-36 bg-gray-200 w-36 rounded mb-1" />
          </div>
          <div className="hidden animate-pulse absolute top-4 right-8 bg-white h-10 w-10 rounded-full shadow-md" />
        </div>
        <div className="w-full flex flex-col gap-3 md:w-3/5 px-4">
          <div className="flex flex-col items-start gap-2 my-1">
            <div>
              <div className="h-8 bg-gray-200 rounded w-64 mb-2" />
              <div className="h-4 bg-gray-200 rounded w-36" />
            </div>
            <div className="w-20 h-6 bg-gray-200 rounded mt-3" />
            <div className="text-md justify-items-start font-semibold inline-flex gap-2 text-[var(--themeColor)]">
              <div className="h-6 w-12 bg-gray-200 rounded" />
            </div>
            <div className="h-4 bg-gray-200 rounded w-60 mt-2" />
            <div className="h-4 bg-gray-200 rounded w-2/3 mt-1" />
            <div className="h-4 bg-gray-200 rounded w-1/2 mt-1" />
          </div>
        </div>
      </div>
      <div className="bg-gray-50 rounded-2xl shadow-md py-8 px-6 mt-8 max-w-3xl mx-auto hover:scale-[102%] transition-transform duration-300">
        <div className="h-6 bg-gray-200 rounded w-32 mb-4" />
        <div className="h-4 bg-gray-200 rounded w-full mt-2" />
        <div className="h-4 bg-gray-200 rounded w-2/3 mt-1" />
        <div className="h-4 bg-gray-200 rounded w-1/2 mt-1" />
      </div>
    </article>
  );
}

export default DocDetailSkeleton;
