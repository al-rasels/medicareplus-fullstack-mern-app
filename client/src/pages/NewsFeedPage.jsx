import React, { useEffect } from "react";
import Layout from "../laylout/Layout";
import BlogSection from "../components/BlogSection.jsx";
import FilterBlogs from "../components/FilterBlogs.jsx";
import useBlogStore from "../store/useBlogStore.js";
import PageTitle from "../components/utilityComponents/PageTitle.jsx";

function NewsFeedPage() {
  PageTitle("News Feed");
  const { BlogListRequest, BlogCategoryListRequest, BlogList, Categories } =
    useBlogStore();
  useEffect(() => {
    (async () => {
      BlogList === null && (await BlogListRequest());
      Categories === null && (await BlogCategoryListRequest());
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
