import howImg from "../assets/images/howitwork.webp";
import PatternBackground from "../laylout/PatternBackground";

function HowItWork() {
  return (
    <section className="relative border-y border-gray-200">
      {/* Container */}
      <PatternBackground />
      <div className="mx-auto w-full max-w-7xl px-5 py-20 md:px-10 md:py-20">
        {/* Title */}
        <h2 className="text-center text-[var(--themeColor2)] text-3xl font-bold md:text-5xl">
          How does it work
        </h2>
        <p className="mx-auto mb-8 mt-4 max-w-3xl text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
          MediCare+ is a platform that connects patients with doctors. We
          provide a seamless experience for patients to find the right doctor.
          MediCare+ makes it easy to book an appointment with your preferred
          doctor. Follow these simple steps
        </p>
        {/* Content */}
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          {/* List */}
          <div className="flex h-full flex-col [grid-area:2/1/3/2] c-grid-area-2_1_3_2 md:[grid-area:1/2/2/3] c-md-grid-area-1_2_2_3">
            {/* Item */}
            <a
              className="mb-8 flex max-w-lg justify-center gap-4 rounded-xl border-b border-solid border-gray-300 px-6 py-5 text-[var(--themeColor2)]"
              href="#w-tabs-0-data-w-pane-0">
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gray-100">
                <p className="text-sm font-bold sm:text-base">1</p>
              </div>
              <div className="ml-4 flex flex-col gap-2">
                <h5 className="text-xl font-bold">
                  Search for a Doctor or Specialist
                </h5>
                <p className="text-sm text-gray-500">
                  Use the search bar to find a doctor, clinic, or specialist by
                  name, or location. Browse the list of available doctors with
                  their qualifications, experience, and patient ratings
                </p>
              </div>
            </a>
            {/* Item */}
            <a
              className="mb-8 flex max-w-lg justify-center gap-4 px-6 py-5 border-b border-solid border-gray-300 text-[var(--themeColor2)]"
              href="#w-tabs-0-data-w-pane-1">
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gray-100">
                <p className="text-sm font-bold sm:text-base">2</p>
              </div>
              <div className="ml-4 flex flex-col gap-2">
                <h5 className="text-xl font-bold">
                  Choose Your Preferred Doctor{" "}
                </h5>
                <p className="text-sm text-gray-500">
                  Click on the doctor's profile to view their availability,
                  fees, and working hours. Check patient reviews to make an
                  informed decision.
                </p>
              </div>
            </a>
            {/* Item */}
            <a
              className="mb-8 flex max-w-lg justify-center gap-4 px-6 py-5 border-b border-solid border-gray-300 text-[var(--themeColor2)]"
              href="#w-tabs-0-data-w-pane-2">
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gray-100">
                <p className="text-sm font-bold sm:text-base">3</p>
              </div>
              <div className="ml-4 flex flex-col gap-2">
                <h5 className="text-xl font-bold ">
                  Select an Appointment Slot Fill the Details
                </h5>
                <p className="text-sm text-gray-500">
                  Choose a suitable date and time from the available slots.
                  Confirm your appointment by Fill in your basic details (e.g.,
                  name, contact number, symptoms, or reason for the visit).
                </p>
              </div>
            </a>
            {/* Item */}
            <a
              className="mb-8 flex max-w-lg justify-center gap-4 px-6 py-5 text-[var(--themeColor2)]"
              href="#w-tabs-0-data-w-pane-2">
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gray-100">
                <p className="text-sm font-bold sm:text-base">4</p>
              </div>
              <div className="ml-4 flex flex-col gap-2">
                <h5 className="text-xl font-bold">
                  Pay for appointment Receive Appointment Confirmation{" "}
                </h5>
                <p className="text-sm text-gray-500">
                  complete the payment through the available online payment
                  options. After confirmation, you will receive an SMS or email
                  with appointment details
                </p>
              </div>
            </a>
          </div>
          {/* Image */}
          <img
            alt="phone-and-stratoscope"
            src={howImg}
            className="block w-full overflow-hidden [grid-area:1/1/2/2] md:[grid-area:1/1/2/2] rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default HowItWork;
