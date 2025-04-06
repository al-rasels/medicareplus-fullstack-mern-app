import React from "react";
import Pagination from "./microComponents/Pagination";
import BlogCard from "./microComponents/BlogCard.jsx";
import PatternBackground from "../laylout/PatternBackground";
import useBlogStore from "../store/useBlogStore.js";
import BlogCardSkeleton from "../skeletons/BlogCardSkeleton.jsx";

function BlogSection() {
  const { BlogList, BlogListLoading } = useBlogStore();
  return (
    <section className="relative border-y  border-gray-200">
      <PatternBackground />
      {/* Container */}
      <div className="mx-auto max-w-screen-xl px-5 py-8 md:px-10 md:py-12 lg:py-20 ">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold md:text-5xl text-[var(--themeColor2)]">
          Latest Updates & Health News
        </h2>
        <p className="mx-auto mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
          Get insights on innovative treatments, expert advice, and health
          trends—all in one place!
        </p>
        {/* Content */}

        <div className="mx-auto grid justify-items-center gap-5 sm:grid-cols-1 sm:gap-6 md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:justify-items-stretch">
          {BlogListLoading === false
            ? BlogList?.map((item, i) => <BlogCard item={item} key={i} />)
            : Array.from({ length: 12 }).map((_, i) => (
                <BlogCardSkeleton key={i} />
              ))}
        </div>

        {/* Pagination */}
        <div className="w-100 mx-auto md:my-20 my-10">
          {/* <Pagination /> */}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
