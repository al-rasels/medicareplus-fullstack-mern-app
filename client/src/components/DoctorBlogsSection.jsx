import React from "react";

function DoctorBlogsSection() {
  return (
    <section className="flex-grow container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Create a New Blog Post
      </h1>
      <form
        action="/addBlog"
        method="POST"
        className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {/* Title */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 font-semibold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required=""
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter blog title"
          />
        </div>
        {/* Title */}
        <div className="mb-4">
          <label
            htmlFor="subtitle"
            className="block text-gray-700 font-semibold mb-2">
            Sub Title
          </label>
          <input
            type="text"
            id="subtitle"
            name="subtitle"
            required=""
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter blog title"
          />
        </div>
        {/* description */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-semibold mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            required=""
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your blog content here"
            defaultValue={""}
          />
        </div>
        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-blue-700 transition">
            Publish Post
          </button>
        </div>
      </form>
    </section>
  );
}

export default DoctorBlogsSection;
