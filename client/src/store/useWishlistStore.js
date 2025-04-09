import { create } from "zustand";
import axios from "axios";
import { unauthorized } from "../utilities/utility";

// Feature List API
const useWishStore = create((set) => ({
  isWishSubmit: false,

  WishSaveRequest: async (doctorID) => {
    try {
      console.log(doctorID);
      set({ isWishSubmit: true });

      const res = await axios.post(`/api/v1/save-wish`, {
        doctor: doctorID,
      });

      return res.data["status"] === "success";
    } catch (err) {
      unauthorized(err.response.status);
    } finally {
      set({ isWishSubmit: false });
    }
  },

  WishList: null,
  WishCount: 0,
  WishListRequest: async () => {
    try {
      const res = await axios.get(`/api/v1/wish-list`);
      set({ WishList: res.data["data"] });
      set({ WishCount: res.data["data"].length });
      return res.data["status"] === "success";
    } catch (err) {
      unauthorized(err.response.status);
    }
  },
  RemoveWishListRequest: async (doctorID) => {
    try {
      const res = await axios.post(`/api/v1/remove-wish`, {
        doctor: doctorID,
      });
      return res.data["status"] === "success";
    } catch (err) {
      unauthorized(err.response.status);
    }
  },
}));

export default useWishStore;
