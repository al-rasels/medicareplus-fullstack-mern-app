function DocCardSkeleton() {
  return (
    <div>
      <div class="animate-pulse">
        <div class="flex flex-col items-center justify-center bg-gray-50  rounded-2xl min-h-[120px]">
          <div class="bg-white shadow-md overflow-hidden max-w-sm w-full border-gray-200 border-x-4 rounded-2xl">
            <div class="relative">
              <div class="w-full h-64 bg-gray-200"></div>
              <div class="absolute top-2 left-2 bg-gray-200 text-white text-xs font-bold px-2 py-1 rounded"></div>
              <div class="absolute top-2 right-2 bg-white p-2 text-lg rounded-full shadow-md"></div>
            </div>
            <div class="px-2 py-2">
              <div class="flex justify-between items-start px-2">
                <div>
                  <div class="h-6 bg-gray-200 rounded w-40 my-3"></div>
                  <div class="mt-3 flex justify-between items-center gap-3 mb-3">
                    <div class="text-md font-normal text-white rounded-4xl px-3 py-0.5 bg-gray-200"></div>
                    <div class="flex">
                      <div class="h-4 bg-gray-200 w-64"></div>
                      <div class="h-4 bg-gray-200 w-5"></div>
                    </div>
                  </div>
                  <div class="mt-2 inline-flex gap-1 flex-col"></div>
                </div>
              </div>
            </div>
            <div class="flex my-3 flex-wrap space-x-3 justify-center items-center">
              <div class="font-light text-md text-gray-200 hover:text-gray-200"></div>
              <button class="bg-gray-200 text-white py-2 px-4 rounded-full font-semibold"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocCardSkeleton;
