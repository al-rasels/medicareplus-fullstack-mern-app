import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

import ValidationHelper from "./../../utilities/ValidationHelper";

const BlogCard = ({ item }) => {
  return (
    <Link to={`/newsfeed/${item.detail}`}>
      <div className="flex flex-col items-center justify-center bg-gray-50 border-x-4 hover:scale-[101%] border-gray-200 hover:border-[var(--themeColor)] rounded-xl group min-h-[120px] transition-all duration-300">
        <div className="bg-white shadow-md overflow-hidden max-w-sm w-full border-gray-200 transition-all duration-300 border-y-4 hover:border-gray-200 rounded-2xl">
          <div className="relative">
            <img
              src={item.img}
              alt="Blog image"
              className="w-full h-64 object-cover"
            />
            <span className="absolute top-2 left-2 bg-[var(--themeColor)] text-white text-xs font-bold px-2 py-1 rounded">
              {item.category}
            </span>
          </div>
          <div className="px-4 py-3">
            <h1 className="text-lg text-start my-3 font-semibold  text-gray-600">
              {item.title}
            </h1>
            <p className="text-md font-light text-justify text-gray-600 mb-3">
              {item.description}
            </p>
            <div className="flex font-medium justify-between items-center">
              <p className="text-sm  text-gray-500">By {item.author}</p>
              <p className="text-sm text-gray-500">
                {ValidationHelper.DateFormatter(item.date)}
              </p>
            </div>
            <div className="flex justify-center my-4"></div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
