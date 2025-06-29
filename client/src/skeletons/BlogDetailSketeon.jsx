import React from "react";

function BlogDetailSketeon() {
  return (
    <div className="relative py-8 md:py-16 animate-pulse">
      <div className="max-w-screen-xl min-h-[80vh] mx-auto">
        <div className="flex flex-col space-x-3 md:flex-row md:space-x-5 justify-between items-center">
          <div className="w-full md:w-8/12 mb-8 px-5 py-8 md:px-8 backdrop-blur bg-white/50 rounded-2xl shadow-sm">
            <div className="w-full rounded-t-2xl aspect-3/2 object-cover rounded bg-gray-200"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mt-4 inline-block"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4 mt-4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div className="h-10 bg-gray-200 rounded w-1/2 text-justify whitespace-pre-line"></div>
            <div className="h-4 border-t-2 mt-5 py-3 border-gray-200 text-sm font-light bg-gray-200 text-justify whitespace-pre-line"></div>
          </div>

          <div className="w-full md:w-4/12 mb-8 mt-6 self-start">
            <div className="h-6 text-2xl font-semibold text-[var(--themeColor2)] mb-4 bg-gray-200"></div>
            <div className="h-10 bg-gray-200"></div>
            <div className="h-10 bg-gray-200 mt-4"></div>
            <div className="h-10 bg-gray-200 mt-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetailSketeon;
