import React, { useEffect } from "react";
import Layout from "../laylout/Layout";
import BlogSection from "../components/BlogSection.jsx";
import FilterBlogs from "../components/FilterBlogs.jsx";
import useBlogStore from "../store/useBlogStore.js";

function NewsFeedPage() {
  const { BlogListRequest, BlogCategoryListRequest } = useBlogStore();
  useEffect(() => {
    (async () => {
      await BlogListRequest();
      await BlogCategoryListRequest();
    })();
  }, []);

  return (
    <Layout>
      <FilterBlogs />
      <BlogSection />
    </Layout>
  );
}

export default NewsFeedPage;
