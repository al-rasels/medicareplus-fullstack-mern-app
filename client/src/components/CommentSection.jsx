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
                    src="data:image/jpeg;base64,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"
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
