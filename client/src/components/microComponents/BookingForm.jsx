import React from "react";
import useDoctorsStore from "../../store/useDoctorStore";

function BookingForm() {
  const {
    AppointmentChange,
    IsDoctorsAppointmentsLoading,
    SaveDoctorsAppointmentsRequest,
    DoctorsAppointment,
  } = useDoctorsStore();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await SaveDoctorsAppointmentsRequest();
  };

  return (
    <div className="flex items-center justify-center  bg-white rounded-2xl shadow-sm border border-gray-200 -mt-12  p-12">
      {/* Author: FormBold Team */}
      <div className="mx-auto w-full max-w-[550px]">
        <form>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              onChange={(e) => AppointmentChange("name", e.target.value)}
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[var(--themeColor2)] focus:shadow-md focus:scale-[102%] transition-transform duration-300"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="phone"
              className="mb-3 block text-base font-medium text-gray-600">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              onChange={(e) => AppointmentChange("phone", e.target.value)}
              id="phone"
              placeholder="Enter your phone number"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md focus:border-[var(--themeColor2)]
focus:scale-[102%] transition-transform duration-300"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              onChange={(e) => AppointmentChange("email", e.target.value)}
              id="email"
              placeholder="Enter your email"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md focus:border-[var(--themeColor2)]
focus:scale-[102%] transition-transform duration-300"
            />
          </div>
          <div className="mb-5 pt-3">
            <label className="mb-5 block text-base font-medium text-gray-600 ">
              Reason for appointment
            </label>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 ">
                <div className="mb-5">
                  <input
                    type="text"
                    name="area"
                    onChange={(e) => AppointmentChange("area", e.target.value)}
                    id="area"
                    placeholder="Information about patient condition"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md focus:border-[var(--themeColor2)]
focus:scale-[102%] transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="date"
                  className="mb-3 block text-base font-medium text-gray-600">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  onChange={(e) => AppointmentChange("date", e.target.value)}
                  id="date"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md focus:border-[var(--themeColor2)]
focus:scale-[102%] transition-transform duration-300"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="time"
                  className="mb-3 block text-base font-medium text-gray-600">
                  Time
                </label>
                <input
                  type="time"
                  onChange={(e) => AppointmentChange("time", e.target.value)}
                  name="time"
                  id="time"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md focus:border-[var(--themeColor2)]
focus:scale-[102%] transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          <div className="mb-5 pt-3">
            <label className="mb-5 block text-base font-medium text-gray-600 ">
              Address of patient
            </label>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-1/2 px-3 ">
                <div className="mb-5">
                  <input
                    type="text"
                    onChange={(e) => AppointmentChange("area", e.target.value)}
                    name="area"
                    id="area"
                    placeholder="Area"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md focus:border-[var(--themeColor2)]
focus:scale-[102%] transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="w-1/2 px-3 ">
                <div className="mb-5">
                  <input
                    type="text"
                    name="area"
                    onChange={(e) => AppointmentChange("city", e.target.value)}
                    id="area"
                    placeholder="City"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md focus:border-[var(--themeColor2)]
focus:scale-[102%] transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="w-1/2 px-3 ">
                <div className="mb-5">
                  <input
                    type="text"
                    name="area"
                    onChange={(e) =>
                      AppointmentChange("postalCode", e.target.value)
                    }
                    id="area"
                    placeholder="Postal Code"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md focus:border-[var(--themeColor2)]
focus:scale-[102%] transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="w-1/2 px-3 ">
                <div className="mb-5">
                  <input
                    type="text"
                    name="area"
                    onChange={(e) =>
                      AppointmentChange("country", e.target.value)
                    }
                    id="area"
                    placeholder="Country"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md focus:border-[var(--themeColor2)]
focus:scale-[102%] transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={(e) => handleFormSubmit(e)}
              className="hover:shadow-form w-full rounded-md bg-[var(--themeColor2)] hover:bg-[var(--themeColor)]  transition-transform duration-100 py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Request Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
