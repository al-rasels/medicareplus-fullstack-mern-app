const PatternBackground = () => {
  return (
    <div className="absolute inset-y-0 top-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:full">
      <svg
        className="absolute inset-0 h-full w-full stroke-gray-200/80 [mask-image:radial-gradient(100%_100%_at_bottom_left,white)]"
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
  );
};

export default PatternBackground;
