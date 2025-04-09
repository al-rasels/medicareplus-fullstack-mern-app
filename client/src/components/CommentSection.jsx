import React from "react";
import PatternBackground from "../laylout/PatternBackground";

function CommentSection({ BlogDetail }) {
  return (
    <section className="relative py-16 md:py-20 lg:py-26">
      <PatternBackground />
      <div className="max-w-5xl rounded-lg mx-auto">
        <h3 className="font-bold text-4xl text-[var(--themeColor2)] text-center py-5 my-5">
          Have Something to Say? Drop a Comment!
        </h3>
        <form>
          <div className="flex flex-col">
            {BlogDetail?.comments?.map((comment, i) => (
              <div
                key={i}
                className="border rounded-md p-3 ml-3 my-3 border-gray-200 bg-white shadow-sm">
                <div className="flex gap-3 items-center">
                  <img
                    src="https://placehold.co/150"
                    className="object-cover w-8 h-8 rounded-full 
                      border-2 border-[var(--themeColor)]  shadow-[var(--themeColor)]   "
                  />
                  <h3 className="font-bold text-gray-600">{comment.user}</h3>
                </div>
                <p className="text-gray-600 mt-2">{comment.comment}</p>
              </div>
            ))}
            {/* <div className="border rounded-md p-3 ml-3 my-3 border-gray-200 bg-white shadow-sm">
              <div className="flex gap-3 items-center">
                <img
                  src="https://avatars.githubusercontent.com/u/22263436?v=4"
                  className="object-cover w-8 h-8 rounded-full 
                      border-2 border-[var(--themeColor)]  shadow-[var(--themeColor)]   "
                />
                <h3 className="font-bold text-gray-600">John Smith</h3>
              </div>
              <p className="text-gray-600 mt-2">this is sample commnent</p>
            </div> */}
          </div>
          <div className="w-full px-3 my-2">
            <textarea
              className="bg-gray-100 rounded border-2 border-gray-300 focus:border-[var(--themeColor2)] leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-500 focus:outline-none focus:bg-gray-100"
              name="body"
              placeholder="Type Your Comment"
              required=""
              defaultValue={""}
            />
          </div>
          <div className="w-full flex justify-center px-3">
            <input
              type="submit"
              className="px-3.5 py-2.5 rounded-md text-white text-sm bg-[var(--themeColor2)] hover:bg-[var(--themeColor)] transition-colors duration-300"
              defaultValue="Post Comment"
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default CommentSection;
