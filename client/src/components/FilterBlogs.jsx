import React from "react";

import useBlogStore from "../store/useBlogStore";
import SearchBarBlog from "./microComponents/BlogsSearchBar";

function FilterBlogs() {
  const { Categories, BlogListRequest, BlogByCategoryRequest } = useBlogStore();

  const handleClick = async (category) => {
    if (category === "All") {
      await BlogListRequest();
    } else {
      await BlogByCategoryRequest(category);
    }
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-screen-md   mx-auto">
        <div className="flex flex-col gap-4 ">
          <div className="col-span-12">
            <SearchBarBlog />
          </div>

          <div className="col-span-12">
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => {
                  handleClick("All");
                }}
                type="button"
                className="text-gray-600 bg-white shadow hover:border-[var(--themeColor)] outline-none border-gray-200 border-2 hover:cursor-pointer hover:scale-105 transition duration-300 focus:border-[var(--themeColor2)] px-3 py-2 text-md rounded-lg ">
                All
              </button>
              {Categories?.map((item, i) => (
                <button
                  onClick={() => {
                    handleClick(item?.categoryName);
                  }}
                  type="button"
                  key={i}
                  className="text-gray-600 bg-white shadow hover:border-[var(--themeColor)] border-gray-200 border-2 hover:cursor-pointer hover:scale-105 transition duration-300 focus:border-[var(--themeColor2)] px-3 py-2 text-md rounded-lg outline-none">
                  {item?.categoryName}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FilterBlogs;
