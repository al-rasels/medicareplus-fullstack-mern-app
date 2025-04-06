function DocCardSkeleton() {
  return (
    <div>
      <div className="animate-pulse">
        <div className="flex flex-col items-center justify-center bg-gray-50  rounded-2xl min-h-[120px]">
          <div className="bg-white shadow-md overflow-hidden max-w-sm w-full border-gray-200 border-x-4 rounded-2xl">
            <div className="relative">
              <div className="w-full h-64 bg-gray-200" />
              <div className="absolute top-2 left-2 bg-gray-200 text-white text-xs font-bold px-2 py-1 rounded" />
              <div className="absolute top-2 right-2 bg-white p-5 text-lg rounded-full shadow-md" />
            </div>
            <div className="px-2 py-2">
              <div className="flex justify-between items-start px-2">
                <div>
                  <div className="h-6 bg-gray-200 rounded w-3/4 my-3" />
                  <div className="mt-3 flex justify-between items-center gap-3 mb-3">
                    <div className="text-md h-6 w-[30px] text-white rounded-4xl px-3 py-0.5 bg-gray-200 " />
                    <div className="flex">
                      <div className="h-4 bg-gray-200 w-40" />
                      <div className="h-4 bg-gray-200 w-5" />
                    </div>
                  </div>
                  <div className="mt-2 inline-flex gap-1 flex-col">
                    <div className="h-5 rounded-2xl bg-gray-200 w-50" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex my-3 flex-wrap space-x-3 justify-center items-center">
              <div className="font-light text-md text-gray-200 hover:text-gray-200" />
              <button className="bg-gray-200 w-1/2  text-white py-2 px-4 rounded-full font-semibold" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocCardSkeleton;
