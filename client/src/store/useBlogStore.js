import { create } from "zustand";
import axios from "axios";

const useBlogStore = create((set) => ({
  // Search Blog

  BlogList: null,
  BlogListLoading: false,
  BlogListRequest: async () => {
    try {
      set({ BlogListLoading: true });
      const res = await axios.get(`/api/v1/blog-list`);

      set({ BlogListLoading: false });
      if (res.data["status"] === "success") {
        set({ BlogList: res.data["data"] });
        return res.data["status"] === "success";
      }
    } catch (error) {
      console.error(error);
    }
  },

  BlogDetail: null,
  BlogDetailLoading: false,
  BlogDetailRequest: async (id) => {
    try {
      set({ BlogDetailLoading: true });
      const res = await axios.get(`/api/v1/blog-detail/${id}`);

      set({ BlogDetailLoading: false });
      if (res.data["status"] === "success") {
        set({ BlogDetail: res.data["data"][0] });
        return res.data["status"] === "success";
      }
    } catch (error) {
      console.error(error);
    }
  },
  BlogByKeywordRequest: async (keyword) => {
    try {
      set({ BlogDetailLoading: true });
      const res = await axios.get(`/api/v1/blog-by-keyword/${keyword}`);
      console.log(res);
      set({ BlogDetailLoading: false });
      if (res.data["status"] === "success") {
        set({ BlogList: res.data["data"] });
        return res.data["status"] === "success";
      }
    } catch (error) {
      console.error(error);
    }
  },
  BlogByCategoryRequest: async (category) => {
    try {
      set({ BlogDetailLoading: true });
      console.log(category);
      const res = await axios.get(`/api/v1/blog-by-category/${category}`);
      console.log(res.data);
      set({ BlogDetailLoading: false });
      if (res.data["status"] === "success") {
        set({ BlogList: res.data["data"] });
        return res.data["status"] === "success";
      }
    } catch (error) {
      console.error(error);
    }
  },

  Categories: null,
  IsCategoryLoading: false,
  BlogCategoryListRequest: async () => {
    try {
      set({ IsCategoryLoading: true });
      const res = await axios.get(`/api/v1/blog-categories`);

      set({ IsCategoryLoading: false });
      if (res.data["status"] === "success") {
        set({ Categories: res.data["data"] });
        return res.data["status"] === "success";
      }
    } catch (error) {
      console.error(error);
    }
  },
}));

export default useBlogStore;
