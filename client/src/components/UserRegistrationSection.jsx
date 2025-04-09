import LoginSection from "./LoginSection";
import RegisterSection from "./RegistrationSection";

function UserRegistrationSection() {
  return (
    <section className="relative text-gray-900 flex justify-center py-16 md:py-20 px-4 ">
      {/* Background */}
      <div className="absolute inset-y-0 top-0 -z-10 w-full backdrop:blur-lg overflow-hidden bg-gray-200 ring-1 ring-gray-900/10">
        <svg
          className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_bottom,white)]"
          aria-hidden="true">
          <defs>
            <pattern
              id="grid-pattern"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse">
              <path d="M130 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth={0} fill="white" />
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#grid-pattern)"
          />
        </svg>
      </div>

      {/* Main Card */}
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white/50  sm:rounded-lg flex flex-col md:flex-row w-full">
        {/* Register Section */}
        <div className="w-full lg:w-1/2 px-6 mx-auto py-6 sm:px-10">
          <RegisterSection />
        </div>
      </div>
    </section>
  );
}

export default UserRegistrationSection;
