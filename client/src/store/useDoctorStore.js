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
  SpecialityLoading: false,
  SpecialityList: null,
  SpecialityListRequest: async () => {
    try {
      set({ SpecialityLoading: true });
      const res = await axios.get(`/api/v1/doctors-specialities`);
      if (res.data["status"] === "success") {
        set({ SpecialityList: res.data["data"] });
        set({ SpecialityLoading: false });
      }
    } catch (error) {
      console.error(error);
    }
  },

  // Getting City List
  CityLoading: false,
  CityList: null,
  CityListRequest: async () => {
    try {
      set({ CityLoading: true });
      const res = await axios.get(`/api/v1/doctors-cities`);

      if (res.data["status"] === "success") {
        set({ CityList: res.data["data"] });
        set({ CityLoading: false });
      }
    } catch (error) {
      console.error(error);
    }
  },

  // Getting All Doctors
  DoctorsLoading: false,
  Doctors: null,
  DoctorsRequest: async () => {
    try {
      set({ DoctorsLoading: true });
      const res = await axios.get(`/api/v1/doctors`);

      if (res.data["status"] === "success") {
        set({ Doctors: res.data["data"] });
        set({ DoctorsLoading: false });
      }
    } catch (error) {
      console.error(error);
    }
  },

  //List By Filtering Name

  DoctorsListBySpeciality: null,

  ListBySpecialityRequest: async (id) => {
    try {
      // set({ DoctorsLoading: true });
      const res = await axios.get(`/api/v1/doctors-listed-by-speciality/${id}`);
      // set({ DoctorsLoading: false });
      if (res.data["status"] === "success") {
        set({ DoctorsListBySpeciality: res.data["data"] });
      }
    } catch (error) {
      console.error(error);
    }
  },
  ListByCityRequest: async (id) => {
    try {
      // set({ DoctorsLoading: true });
      const res = await axios.get(`/api/v1/doctors-listed-by-city/${id}`);
      // set({ DoctorsLoading: false });
      if (res.data["status"] === "success") {
        set({ DoctorsList: res.data["data"] });
      }
    } catch (error) {
      console.error(error);
    }
  },

  //List By Filter
  DoctorsByFilterList: null,

  ListByFilterRequest: async (postBody) => {
    try {
      // set({ DoctorsLoading: true });
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
      // set({ DoctorsLoading: false });
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
    } catch (error) {
      console.error(error);
    } finally {
      set({ IsDoctorsDetailLoading: false });
    }
  },

  SearchKeyword: "",
  SetSearchKeyword: async (keyword) => set({ SearchKeyword: keyword }),

  DoctorsListByKeyword: null,

  ListByKeywordRequest: async (keyword) => {
    try {
      set({ DoctorsLoading: true });
      const res = await axios.get(
        `/api/v1/doctors-listed-by-keyword/${keyword}`
      );

      if (res.data["status"] === "success") {
        set({ DoctorsListByKeyword: res.data["data"] });
      }
    } catch (error) {
      console.error(error);
    } finally {
      set({ DoctorsLoading: false });
    }
  },

  //Doctors Appointment
  DoctorsAppointment: {
    userID: "",
    DoctorID: "",
    fullName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    reasonForAppointment: "",
    paymentAmount: "",
    paymentMethod: "",
    paymentStatus: "",
    paymentId: "",
    paymentCurrency: "",
    paymentError: "",
  },
  AppointmentChange(name, value) {
    set((state) => ({
      DoctorsAppointment: { ...state.DoctorsAppointment, [name]: value },
    }));
  },

  IsDoctorsAppointmentsLoading: false,
  SaveDoctorsAppointmentsRequest: async (postBody) => {
    try {
      set({ IsDoctorsAppointmentsLoading: true });
      const res = await axios.get(`/api/v1/doctors-appointments/${postBody}`);

      if (res.data["status"] === "success") {
        set({ DoctorsAppointments: res.data["data"] });
      }
    } catch (error) {
      console.error(error);
    } finally {
      set({ IsDoctorsAppointmentsLoading: false });
    }
  },
}));

export default useDoctorsStore;
