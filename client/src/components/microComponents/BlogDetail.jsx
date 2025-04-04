import { useEffect, useState } from "react";
import PatternBackground from "../../laylout/PatternBackground.jsx";
import ValidationHelper from "../../utilities/ValidationHelper.js";
import SideBlogCard from "./SideBlogCard.jsx";
import useBlogStore from "../../store/useBlogStore.js";

const BlogDetails = ({ BlogDetail, BlogList }) => {
  const [relatedExit, setRelatedExit] = useState(true);
  const { BlogListRequest } = useBlogStore();
  useEffect(() => {
    (async () => {
      await BlogListRequest();
    })();
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative py-8 md:py-16">
      <PatternBackground />
      <div className="max-w-screen-xl  min-h-[80dvh]  mx-auto">
        <div className="flex flex-col space-x-3  md:flex-row md:space-x-5 justify-between items-center">
          {/* Main Blog Content */}
          <div
            className={`w-full md:w-8/12 mb-8 px-5 py-8 ${
              !relatedExit ? "mx-auto" : ""
            }  md:px-8 backdrop-blur bg-white/50 rounded-2xl  shadow-sm`}>
            <img
              src={BlogDetail?.img}
              alt="BlogDetail? Featured"
              className="w-full rounded-t-2xl aspect-3/2 object-cover rounded"
            />
            <span className="bg-[var(--themeColor)] text-white text-xs font-bold px-2 py-1 rounded mt-4 inline-block">
              {BlogDetail?.category}
            </span>
            <h2 className="text-4xl font-semibold mt-4 mb-2">
              {BlogDetail?.title}
            </h2>
            <p className="text-gray-500 text-base font-light mb-4">
              By {BlogDetail?.author} |{" "}
              {ValidationHelper.DateFormatter(BlogDetail?.date)}
            </p>
            <p className="text-gray-700 text-lg text-justify whitespace-pre-line">
              {BlogDetail?.content}
            </p>
            <p className="text-gray-500 border-t-2 mt-5 py-3 border-gray-200 text-sm font-light text-justify whitespace-pre-line">
              Last Updated:{" "}
              <span> {ValidationHelper.DateFormatter(BlogDetail?.date)}</span>
            </p>
          </div>

          {/* Sidebar */}
          <div
            className={`w-full md:w-4/12  mb-8   ${
              !relatedExit ? "hidden" : "block"
            } mt-6  self-start`}>
            <h2 className="text-2xl text-[var(--themeColor2)] font-semibold text-center mb-4">
              Related Blogs
            </h2>
            {BlogList?.filter(
              (item) =>
                item?.category === BlogDetail?.category &&
                item?.detail !== BlogDetail?._id
            ).map((item, i) => {
              item?.length > 0 && setRelatedExit(true);
              return <SideBlogCard item={item} key={i} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
