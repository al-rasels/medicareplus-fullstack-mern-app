import { create } from "zustand";
import axios from "axios";
import { unauthorized } from "../utilities/utility";

const useBookingStore = create((set) => ({
  UserBookingList: null,
  BookingListRequest: async () => {
    try {
      console.log("called1");
      set({ isBookingLoading: true });
      const res = await axios.get(`/api/v1/user-appointment-list`);
      set({ UserBookingList: res.data["data"] });
      set({ isBookingLoading: false });

      return res.data["status"] === "success";
    } catch (err) {
      unauthorized(err.response.status);
    } finally {
      set({ isWishSubmit: false });
    }
  },
  DoctorBookingList: null,
  DoctorBookingListRequest: async () => {
    try {
      set({ isBookingLoading: true });
      console.log("called");
      const res = await axios.get(`/api/v1/doctor-appointment-list`);
      set({ DoctorBookingList: res.data["data"] });
      set({ isBookingLoading: false });

      return res.data["status"] === "success";
    } catch (err) {
      unauthorized(err.response.status);
    }
  },
}));

export default useBookingStore;
