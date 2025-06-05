import React from "react";
import useDoctorsStore from "../../store/useDoctorStore";
import toast from "react-hot-toast";
import ValidationHelper from "../../utilities/ValidationHelper";
import ButtonLoader from "./ButtonLoader";

import { SuccessAlert } from "../../utilities/utility";
function BookingForm() {
  const {
    AppointmentChange,
    IsDoctorsAppointmentsLoading,
    SaveDoctorsAppointmentsRequest,
    DoctorsAppointment,
    DoctorsDetailRequest,
    DoctorPaymentRequest,
    IsDoctorsDetailLoading,
    DoctorsDetail,
  } = useDoctorsStore();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!ValidationHelper.IsLater(DoctorsAppointment.fullName)) {
      toast.error("Valid Name Required");
    } else if (!ValidationHelper.IsMobile(DoctorsAppointment.phone)) {
      toast.error("Valid Phone Number Required");
    } else if (!ValidationHelper.IsEmail(DoctorsAppointment.email)) {
      toast.error("Valid Email Address Required");
    } else if (ValidationHelper.IsEmpty(DoctorsAppointment.reason)) {
      toast.error("Please fill all the fileds");
    } else if (ValidationHelper.IsEmpty(DoctorsAppointment.date)) {
      toast.error("Please fill all the fileds");
    } else if (ValidationHelper.IsEmpty(DoctorsAppointment.time)) {
      toast.error("Please fill all the fileds");
    } else if (ValidationHelper.IsEmpty(DoctorsAppointment.city)) {
      toast.error("Please fill all the fileds");
    } else if (ValidationHelper.IsEmpty(DoctorsAppointment.country)) {
      toast.error("Please fill all the fileds");
    } else if (ValidationHelper.IsEmpty(DoctorsAppointment.area)) {
      toast.error("Please fill all the fileds");
    } else {
      const res = await SaveDoctorsAppointmentsRequest(DoctorsAppointment);
      if (res) {
        SuccessAlert("Please make the payment to confirm your appointment");
        await DoctorPaymentRequest(DoctorsDetail?.doctor._id);
        AppointmentChange("fullName", "");
        AppointmentChange("phone", "");
        AppointmentChange("email", "");
        AppointmentChange("reason", "");
        AppointmentChange("date", "");
        AppointmentChange("time", "");
        AppointmentChange("area", "");
        AppointmentChange("city", "");
        AppointmentChange("postalCode", "");
        AppointmentChange("country", "");
      } else {
        toast.error("Something went wrong try again");
      }
    }
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
              value={DoctorsAppointment?.fullName}
              onChange={(e) => {
                AppointmentChange("fullName", e.target.value);
                AppointmentChange("doctorID", DoctorsDetail.doctor._id);
                AppointmentChange("paymentAmount", DoctorsDetail.consultingFee);
              }}
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
              value={DoctorsAppointment?.phone}
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
              value={DoctorsAppointment?.email}
              name="email"
              onChange={(e) => AppointmentChange("email", e.target.value)}
              id="email"
              placeholder="Enter your email"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md focus:border-[var(--themeColor2)]
focus:scale-[102%] transition-transform duration-300"
            />
          </div>
          <div className="mb-5 pt-3">
            <label
              htmlFor="reason"
              className="mb-5 block text-base font-medium text-gray-600 ">
              Reason for appointment
            </label>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 ">
                <div className="mb-5">
                  <input
                    type="text"
                    value={DoctorsAppointment?.reason}
                    name="reason"
                    onChange={(e) =>
                      AppointmentChange("reason", e.target.value)
                    }
                    id="reasonForAppointment"
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
                  value={DoctorsAppointment?.date}
                  name="date"
                  onChange={(e) => AppointmentChange("date", e.target.value)}
                  id="date"
                  className="w-full rounded-md bg-white py-3 px-6  text-base font-medium text-[#6B7280] outline-none focus:shadow-md focus:border-none
focus:scale-[102%] transition-transform duration-300 "
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
                  value={DoctorsAppointment?.time}
                  onChange={(e) => AppointmentChange("time", e.target.value)}
                  name="time"
                  id="time"
                  className="w-full rounded-md border border-none  bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md 
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
                    value={DoctorsAppointment?.area}
                    onChange={(e) => AppointmentChange("area", e.target.value)}
                    name="area"
                    id="area"
                    placeholder="Area"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md 
focus:scale-[102%] transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="w-1/2 px-3 ">
                <div className="mb-5">
                  <input
                    type="text"
                    value={DoctorsAppointment?.city}
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
                    value={DoctorsAppointment?.postalCode}
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
                    value={DoctorsAppointment?.country}
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
              disabled={IsDoctorsAppointmentsLoading && IsDoctorsDetailLoading}
              className="hover:shadow-form w-full rounded-md bg-[var(--themeColor2)] hover:bg-[var(--themeColor)]  transition-transform duration-100 py-3 px-8 text-center text-base font-semibold text-white outline-none">
              {IsDoctorsAppointmentsLoading && IsDoctorsDetailLoading ? (
                <ButtonLoader />
              ) : (
                "Request Appointment"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
