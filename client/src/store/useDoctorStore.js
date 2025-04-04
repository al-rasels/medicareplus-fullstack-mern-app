import { create } from "zustand";
import axios from "axios";
const useDoctorsStore = create((set) => ({
  // Filter Change
  FilterSelect: { specialityID: "", cityID: "", keyword: "" },
  FilterChange(name, value) {
    set((state) => ({
      FilterSelect: { ...state.FilterSelect, [name]: value },
    }));
  },

  // Getting Speciality list
  IsSLLoading: false,
  SpecialityList: null,
  SpecialityListRequest: async () => {
    try {
      set({ IsSLLoading: true });
      const res = await axios.get(`/api/v1/doctors-specialities`);
      if (res.data["status"] === "success") {
        set({ SpecialityList: res.data["data"] });
        set({ IsSLLoading: false });
      }
    } catch (error) {
      console.error(error);
    }
  },

  // Getting City List
  IsCLLoading: false,
  CityList: null,
  CityListRequest: async () => {
    try {
      set({ IsCLLoading: true });
      const res = await axios.get(`/api/v1/doctors-cities`);

      if (res.data["status"] === "success") {
        set({ CityList: res.data["data"] });
        set({ IsCLLoading: false });
      }
    } catch (error) {
      console.error(error);
    }
  },

  // Getting All Doctors
  IsDLLoading: false,
  Doctors: null,
  DoctorsRequest: async () => {
    try {
      set({ IsDLLoading: true });
      const res = await axios.get(`/api/v1/doctors`);

      if (res.data["status"] === "success") {
        set({ Doctors: res.data["data"] });
        set({ IsDLLoading: false });
      }
    } catch (error) {
      console.error(error);
    }
  },

  //List By Filtering Name

  DoctorsListBySpeciality: null,
  ListBySpecialityRequest: async (id) => {
    try {
      const res = await axios.get(`/api/v1/doctors-listed-by-speciality/${id}`);

      if (res.data["status"] === "success") {
        set({ DoctorsListBySpeciality: res.data["data"] });
      }
    } catch (error) {
      console.error(error);
    }
  },
  ListByCityRequest: async (id) => {
    try {
      const res = await axios.get(`/api/v1/doctors-listed-by-city/${id}`);

      if (res.data["status"] === "success") {
        set({ DoctorsList: res.data["data"] });
      }
    } catch (error) {
      console.error(error);
    }
  },

  //List By Filter
  DoctorsByFilterList: null,
  IsFilterLoading: false,
  ListByFilterRequest: async (postBody) => {
    try {
      set({ IsFilterLoading: true });
      const res = await axios.post(
        `/api/v1/doctors-listed-by-filter`,
        postBody
      );
      if (res.data["status"] === "success") {
        set({ DoctorsByFilterList: res.data["data"] });
      }
    } catch (error) {
      console.error(error);
    } finally {
      set({ IsFilterLoading: false });
    }
  },
  //DoctorsDetails
  DoctorsDetail: null,
  IsDoctorsDetailLoading: false,
  DoctorsDetailRequest: async (id) => {
    try {
      set({ IsDoctorsDetailsLoading: true });
      const res = await axios.get(`/api/v1/doctors-details/${id}`);

      if (res.data["status"] === "success") {
        set({ DoctorsDetail: res.data["data"][0] });
      }
      console.log(res.data["data"][0]);
    } catch (error) {
      console.error(error);
    } finally {
      set({ IsDoctorsDetailLoading: false });
    }
  },

  SearchKeyword: "",
  SetSearchKeyword: async (keyword) => set({ SearchKeyword: keyword }),

  DoctorsListByKeyword: null,
  IsDoctorsListByKeywordLoading: false,
  ListByKeywordRequest: async (keyword) => {
    try {
      set({ IsDoctorsListByKeywordsLoading: true });
      const res = await axios.get(
        `/api/v1/doctors-listed-by-keyword/${keyword}`
      );

      if (res.data["status"] === "success") {
        set({ DoctorsListByKeyword: res.data["data"] });
      }
      console.log(res.data["data"]);
    } catch (error) {
      console.error(error);
    } finally {
      set({ IsDoctorsListByKeywordLoading: false });
    }
  },
}));

export default useDoctorsStore;
