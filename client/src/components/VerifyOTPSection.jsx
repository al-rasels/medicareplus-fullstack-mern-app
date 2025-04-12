import React, { useState } from "react";

import Logo from "../assets/images/medicare+2.webp";
import ValidationHelper from "./../utilities/ValidationHelper";
import toast from "react-hot-toast";
import useUserAccessStore from "../store/userAccessStore";
import { SuccessAlert } from "../utilities/utility";
import { useNavigate } from "react-router-dom";

function VerifyOTPSection() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
    otp: "",
  });

  const {
    OTPFormData,
    OTPFormChange,
    IsVarifySubmitting,
    UserVerificationRequest,
  } = useUserAccessStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
      
       if (
         ValidationHelper.IsEmpty(formData.password) &&
         ValidationHelper.IsEmpty(formData.confirmPassword)
       ) {
         toast.error("Enter a valid password !");
       } else if (formData.password.length < 8) {
         toast.error("Password must be at least 8 characters long");
       } else if (ValidationHelper.IsEmpty(formData.otp)) {
         toast.error("Enter OTP sent to your email address");
       } else if (formData.confirmPassword !== formData.password) {
         toast("Both passwords must be same !");
       }
       OTPFormChange("password", formData.password);
       OTPFormChange("otp", formData.otp);

       console.log(OTPFormData);
       const res = await UserVerificationRequest(OTPFormData);
       if (res) {
         SuccessAlert("User Registered Successfully, Try Loggin in");
         navigate("/access");
         setFormData({
           password: "",
           confirmPassword: "",
           otp: "",
         });
       }
  };

  return (
    <div>
      <div>
        <img src={Logo} className="w-32 mx-auto" />
      </div>
      <div className="mt-6 flex flex-col items-center">
        <h1 className="text-xl xl:text-2xl font-bold text-[var(--themeColor2)]">
          Help Us Confirm It’s You!
        </h1>
        <p className="mt-2 text-sm text-justify text-gray-500">
          Your health and security matter to us! We’ve sent a secure code to
          your phone/email—just enter it below to continue your seamless
          MediCare+ experience. We've got you!
        </p>
        <div className="w-full flex-1 mt-6">
          <div className="my-6 border-b text-center">
            <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
              Verify Your Email
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto">
        <div className="py-5 px-4 sm:rounded-lg md:px-10">
          <form>
            <div>
              <div className="mx-auto max-w-md">
                <input
                  className=" mt-6 py-4 w-full px-8  text-center focus:scale-[102%] transition-transform duration-300 rounded-xl  font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-md focus:outline-none focus:border-[var(--themeColor2)] focus:bg-white mx-auto block tracking-[20px]  "
                  type="text"
                  pattern="\d*"
                  maxLength={6}
                  placeholder="OTP"
                  value={formData.otp}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      otp: e.target.value,
                    });
                  }}
                />
                <input
                  className=" mt-6 py-4 w-full px-8  focus:scale-[102%] transition-transform duration-300 rounded-xl font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-md focus:outline-none focus:border-[var(--themeColor2)] focus:bg-white tracking-widest text-center"
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      password: e.target.value,
                    });
                  }}
                />
                <input
                  className=" mt-6 py-4 w-full px-8  rounded-xl focus:scale-[102%] transition-transform duration-300 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-md focus:outline-none focus:border-[var(--themeColor2)] focus:bg-white tracking-widest text-center"
                  type="password"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    });
                  }}
                />

                <button
                  className="mt-5 tracking-wide font-semibold  bg-[var(--themeColor2)] text-gray-100 w-full py-4 rounded-lg hover:bg-[var(--themeColor)] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  onClick={(e) => {
                    handleSubmit(e);
                  }}>
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy={7} r={4} />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Complete Registration</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default VerifyOTPSection;
// Todo Comple Registration sequence
