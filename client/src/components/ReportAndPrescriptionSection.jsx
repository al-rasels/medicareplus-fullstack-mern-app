import React from "react";
import PatternBackground from "../laylout/PatternBackground";
import { FaFileDownload } from "react-icons/fa";
import { FaFileUpload } from "react-icons/fa";
function ReportAndPrescriptionSection() {
  return (
    <section>
      <div className="relative  isolate py-8 md:py-12 border-gray-100 border-b-2 mx-auto  bg-white">
        <PatternBackground />
        <div className="mx-auto max-w-screen-xl min-h-[60dvh] ">
          <div className="relative px-6 pb-20 grid grid-cols-12 gap-5 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-32">
            <div
              className="w-full  col-span-12 md:col-span-6 aspect-auto relative bg-[var(--themeColor2)]/10 hover:bg-[var(--themeColor)]/10  border-2 border-gray-300 border-dashed rounded-lg p-6"
              id="dropzone">
              <input
                type="file"
                className="absolute inset-0 cursor-pointer w-full h-full opacity-0 z-50"
              />
              <div className="text-center">
                <FaFileUpload className="mx-auto h-12 w-12" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer">
                    <span>Drag and drop your reports file</span>
                    <span className="text-indigo-600"> or browse </span>
                    <span>to upload</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
              <img
                src=""
                className="mt-4 mx-auto max-h-40 hidden"
                id="preview"
              />
            </div>
            <div className="w-full bg-[var(--themeColor2)]/10 hover:bg-[var(--themeColor)]/10 col-span-12 md:col-span-6 aspect-auto relative border-2 border-gray-300 border-solidrounded-lg p-6">
              <button className="text-center w-full block cursor-pointer">
                <FaFileDownload className="mx-auto h-12 w-12" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                  <label htmlFor="download" className="relative cursor-pointer">
                    <span>Click to Download</span>
                  </label>
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  Your prescription will be downloadedable as soon as uploaded
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReportAndPrescriptionSection;
