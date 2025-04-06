import React from "react";
import Logo from "../assets/images/medicare+2.webp";
import { LuUserRound } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import useUserAccessStore from "../store/userAccessStore";
import ValidationHelper from "./../utilities/ValidationHelper";
import { toast } from "react-hot-toast";
import { FailAlert, SuccessAlert } from "../utilities/utility";
function LoginSection() {
  const navigate = useNavigate();
  const { LoginFormData, LoginFormChange, UserLoginRequest } =
    useUserAccessStore();
  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    if (!ValidationHelper.IsEmail(LoginFormData.email)) {
      toast.error("Valid Email Address Required");
    } else if (ValidationHelper.IsEmpty(LoginFormData.password)) {
      toast.error("Valid Password Required");
    } else {
      const res = await UserLoginRequest(LoginFormData);
      res ? navigate("/") : FailAlert("Login Failed");
      SuccessAlert("Welcome Back to MediCare+");
      LoginFormChange("email", "");
      LoginFormChange("password", e.target.value);
    }
  };

  return (
    <div className="pt-3">
      <div>
        <img src={Logo} className="w-32 mx-auto" />
      </div>
      <div className="mt-6 flex flex-col items-center">
        <h1 className="text-xl xl:text-2xl font-bold text-[var(--themeColor2)]">
          Welcome Back to MediCare+
        </h1>
        <p className="mt-2 text-sm text-justify text-gray-500">
          Access your account securely and manage your healthcare with ease and
          stay connected with your doctors, schedule appointments, view medical
          records, and take control of your health—all in one place.
        </p>
        <div className="w-full flex-1 mt-8 mb-4">
          <div className="my-8 border-b text-center">
            <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
              login here
            </div>
          </div>
          <div className="mx-auto pt-5 max-w-sm">
            <input
              className="focus:scale-[102%] transition-transform duration-300 w-full px-8 py-4 rounded-xl font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-[var(--themeColor2)] focus:bg-white"
              type="email"
              placeholder="Email"
              value={LoginFormData.email}
              onChange={(e) => LoginFormChange("email", e.target.value)}
              required
            />
            <input
              className="focus:scale-[102%] transition-transform duration-300 w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-[var(--themeColor2)] focus:bg-white mt-5"
              type="password"
              placeholder="Password"
              value={LoginFormData.password}
              onChange={(e) => LoginFormChange("password", e.target.value)}
              required
            />
            <button
              className="mt-5 tracking-wide font-semibold bg-[var(--themeColor2)] text-gray-100 w-full py-4 mx-auto rounded-lg hover:bg-[var(--themeColor)] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              onClick={(e) => handleLoginFormSubmit(e)}>
              <LuUserRound size={22} />
              <span className="ml-3">Login</span>
            </button>

            <p className="mt-6 text-xs text-gray-600 text-center">
              I agree to abide by templatana's
              <a href="#" className="border-b border-gray-500 border-dotted">
                Terms of Service
              </a>
              and its
              <a href="#" className="border-b border-gray-500 border-dotted">
                Privacy Policy
              </a>
            </p>
            <p className="mt-12 text-md  text-center font-light text-gray-500">
              Don't have an account?
              <Link
                to="/register"
                className="text-[var(--themeColor2)] font-medium ml-2">
                Create new account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSection;
