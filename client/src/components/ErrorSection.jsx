import { Link } from "react-router-dom";
import errImg from "../assets/images/no-results.png";
import PatternBackground from "../laylout/PatternBackground";
function ErrorSection({ title, description, buttonText, to }) {
  return (
    <section>
      <PatternBackground />
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-8 md:px-10 md:py-12">
        {/* Component */}
        <div className="grid items-center gap-8 sm:gap-16 md:grid-cols-2">
          <div>
            <img
              src={errImg}
              alt="error-img"
              className="mx-auto inline-block h-full w-full max-w-2xl object-cover"
            />
          </div>
          <div>
            <h1 className="mb-4 text-2xl text-[var(--themeColor2)] font-bold md:text-4xl">
              {title}
            </h1>
            <p className="mb-6 max-w-lg text-sm text-gray-500 sm:text-xl md:mb-10 lg:mb-12">
              {description}
            </p>
            <Link
              to={to}
              className="text-white hover:bg-[var(--themeColor)] bg-[var(--themeColor2)] focus:ring-4 font-light rounded-3xl text-lg px-5  py-3  text-center focus:outline-none transition-colors duration-300 ease-in-out">
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ErrorSection;
