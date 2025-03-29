import React from "react";

function ImportantPersons() {
  return (
    <section className="relative">
      <div className="absolute inset-y-0 top-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:full">
        <svg
          className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true">
          <defs>
            <pattern
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              x="100%"
              y={-1}
              patternUnits="userSpaceOnUse">
              <path d="M130 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth={0} fill="white" />
          <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
            <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
          />
        </svg>
      </div>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold md:text-5xl">
          Our Team Members
        </h2>
        <p className="mx-auto mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
          Lorem ipsum dolor sit amet elit ut aliquam
        </p>
        {/* Content */}
        <div className="grid grid-cols-2 justify-center justify-items-center gap-5 sm:justify-items-stretch  md:gap-8 md:grid-cols-2">
          {/* Item */}
          <div className="grid w-full grid-flow-row justify-center gap-6 rounded-md border border-solid border-gray-300 p-8 md:grid-cols-2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
              alt=""
              className="inline-block h-72 w-full object-cover"
            />
            <div>
              <p className="text-xl font-semibold">John</p>
              <p className="mb-4 font-semibold text-gray-500">
                Webflow Developer
              </p>
              <p className="text-sm text-gray-500 sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit. Lorem ipsum dolor sit amet, elit ut aliquam,
                purus sit amet luctus venenatis elit ut aliquam, purus sit amet
                luctus venenatis
              </p>
            </div>
          </div>
          {/* Item */}
          <div className="grid w-full grid-flow-row justify-center gap-6 rounded-md border border-solid border-gray-300 p-8 md:grid-cols-2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
              alt=""
              className="inline-block h-72 w-full object-cover"
            />
            <div>
              <p className="text-xl font-semibold">Anniyah</p>
              <p className="mb-4 font-semibold text-gray-500">
                Webflow Developer
              </p>
              <p className="text-sm text-gray-500 sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit. Lorem ipsum dolor sit amet, elit ut aliquam,
                purus sit amet luctus venenatis elit ut aliquam, purus sit amet
                luctus venenatis
              </p>
            </div>
          </div>
          {/* Item */}
          <div className="grid w-full grid-flow-row justify-center gap-6 rounded-md border border-solid border-gray-300 p-8 md:grid-cols-2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
              alt=""
              className="inline-block h-72 w-full object-cover"
            />
            <div>
              <p className="text-xl font-semibold">Kevin</p>
              <p className="mb-4 font-semibold text-gray-500">
                Webflow Developer
              </p>
              <p className="text-sm text-gray-500 sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit. Lorem ipsum dolor sit amet, elit ut aliquam,
                purus sit amet luctus venenatis elit ut aliquam, purus sit amet
                luctus venenatis
              </p>
            </div>
          </div>
          {/* Item */}
          <div className="grid w-full grid-flow-row justify-center gap-6 rounded-md border border-solid border-gray-300 p-8 md:grid-cols-2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
              alt=""
              className="inline-block h-72 w-full object-cover"
            />
            <div>
              <p className="text-xl font-semibold">Tamara</p>
              <p className="mb-4 font-semibold">Webflow Developer</p>
              <p className="text-sm text-gray-500 sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit. Lorem ipsum dolor sit amet, elit ut aliquam,
                purus sit amet luctus venenatis elit ut aliquam, purus sit amet
                luctus venenatis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImportantPersons;
