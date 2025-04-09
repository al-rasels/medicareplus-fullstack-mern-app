import React from "react";
import PatternBackground from "../laylout/PatternBackground";
import { MdOutlineSupportAgent } from "react-icons/md";

function HelpAndSupportChatSection() {
  return (
    <section className="relative py-16 md:py-20 lg:py-26">
      <PatternBackground />
      <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl rounded-lg mx-auto">
        <MdOutlineSupportAgent
          size={150}
          className="text-[var(--themeColor2)] mx-auto "
        />
        <h3 className="font-bold text-4xl text-[var(--themeColor2)] text-center py-1 pb-5 my-5">
          Need Help & Support ? We're Here to Help
        </h3>
        <form>
          <div className="flex flex-col">
            <div className="border w-2/3 self-end rounded-2xl p-3 ml-3 my-3 border-gray-200 bg-[var(--themeColor)]/10 ">
              <div className="flex gap-3 items-center">
                <img
                  src="https://placehold.co/150"
                  className="object-cover w-8 h-8 rounded-full 
                      border-2 border-[var(--themeColor)]  shadow-[var(--themeColor)]   "
                />
                <h3 className="font-bold text-gray-600">User</h3>
              </div>
              <p className="text-gray-600 mt-2">i need help</p>
            </div>
            <div className="border w-2/3 self-start rounded-2xl p-3 ml-3 my-3 border-gray-200 bg-[var(--themeColor2)]/10 ">
              <div className="flex gap-3 items-center">
                <img
                  src="https://placehold.co/150"
                  className="object-cover w-8 h-8 rounded-full 
                      border-2 border-[var(--themeColor)]  shadow-[var(--themeColor)]   "
                />
                <h3 className="font-bold text-gray-600">Support</h3>
              </div>
              <p className="text-gray-600 mt-2">
                please say what's you problem.
              </p>
            </div>
          </div>
          <div className="w-full px-3 my-2">
            <textarea
              className="bg-gray-100 rounded border-2 border-gray-300 focus:border-[var(--themeColor2)] leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-500 focus:outline-none focus:bg-gray-100"
              name="body"
              placeholder="We're Here to Help You ! ask us anything..."
              required=""
              defaultValue={""}
            />
          </div>
          <div className="w-full flex justify-center px-3">
            <button
              type="submit"
              className="px-5 py-3.5 rounded-md text-white text-md bg-[var(--themeColor2)] hover:bg-[var(--themeColor)] transition-colors duration-300">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default HelpAndSupportChatSection;
