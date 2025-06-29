import { create } from "zustand";
import axios from "axios";
import Cookies from "js-cookie";
const useUserAccessStore = create((set) => ({
  // IsLoggedIn
  IsLogin: () => {
    return !!Cookies.get("token");
  },

  UserProfile: JSON.parse(localStorage.getItem("user_data")),

  // Login form
  LoginFormData: { email: "", password: "" },
  LoginFormChange(name, value) {
    set((state) => ({
      LoginFormData: { ...state.LoginFormData, [name]: value },
    }));
  },

  //  Register form Data
  RegisterFormData: { name: "", email: "", phone: "", address: "" },
  RegisterFormChange(name, value) {
    set((state) => ({
      RegisterFormData: { ...state.RegisterFormData, [name]: value },
    }));
  },

  //  OTP form Data
  OTPFormData: { otp: "", password: "" },
  OTPFormChange(name, value) {
    set((state) => ({
      OTPFormData: { ...state.OTPFormData, [name]: value },
    }));
  },
  // Login API calls
  IsLoginSubmitting: false,

  UserLoginRequest: async (postBody) => {
    try {
      set({ IsLoginSubmitting: true });
      const res = await axios.post(`/api/v1/login-user`, postBody, {
        withCredentials: true,
      });

      if (res.data["status"] === "success") {
        set({ UserProfile: res.data["data"] });
        localStorage.setItem("user_data", JSON.stringify(res.data["data"]));
        set({ UserProfile: res.data["data"] });
      }

      set({ IsLoginSubmitting: false });
      return res.data["status"] === "success";
    } catch (error) {
      console.error(error);
    }
  },

  // Register API calls
  IsRegisterSubmitting: false,

  UserRegisterRequest: async (postBody) => {
    try {
      set({ IsRegisterSubmitting: true });
      const res = await axios.post(`/api/v1/register-user`, postBody);
      console.log(res);
      set({ IsRegisterSubmitting: false });
      if (res.data["status"] === "success") {
        return res.data["status"] === "success";
      }
    } catch (error) {
      console.error(error);
    }
  },

  IsVarifySubmitting: false,
  UserVerificationRequest: async (postBody) => {
    try {
      set({ IsVarifySubmitting: true });
      const res = await axios.post(`/api/v1/verify-user`, postBody);

      set({ IsVarifySubmitting: false });
      if (res.data["status"] === "success") {
        return res.data["status"] === "success";
      }
    } catch (error) {
      console.error(error);
    }
  },

  // Logout API calls
  UserLogoutRequest: async () => {
    try {
      console.log("logout");
      const res = await axios.get(`/api/v1/logout-user`, {
        withCredentials: true,
      });

      if (res.data["status"] === "success") {
        localStorage.removeItem("user_data");
        return res.data["status"] === "success";
      }
    } catch (error) {
      console.error(error);
    }
  },
  IsUpdateLoading: false,
  UpdateDetails: null,
  UpdateUserRequest: async (postBody) => {
    try {
      console.log(postBody);
      set({ IsUpdateLoading: true });

      const res = await axios.post(`/api/v1/update-user`, postBody);
      console.log(res);
      set({ IsUpdateLoading: false });
      if (res.data["status"] === "success") {
        return res.data["status"] === "success";
      }
    } catch (error) {
      console.error(error);
    }
  },
  UserDetails: null,
  UserDetailsRequest: async () => {
    try {
      const res = await axios.get(`/api/v1/user-details`);
      set({ UserDetails: res.data["data"] });
      set({ UserProfile: res.data["data"] });
      if (res.data["status"] === "success") {
        return res.data["data"];
      }
    } catch (error) {
      console.error(error);
    }
  },
}));



export default useUserAccessStore;
