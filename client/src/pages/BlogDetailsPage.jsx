import React, { useEffect } from "react";
import Layout from "../laylout/Layout.jsx";
import BlogDetails from "../components/microComponents/BlogDetail.jsx";
import CommentSection from "../components/CommentSection.jsx";
import useBlogStore from "../store/useBlogStore.js";
import { useParams } from "react-router-dom";
import BlogDetailSketeon from "../skeletons/BlogDetailSketeon.jsx";

function BlogDetailsPage() {
  const { id } = useParams();
  const { BlogDetailRequest, BlogDetail, BlogList, BlogListRequest } =
    useBlogStore();
  useEffect(() => {
    (async () => {
      BlogDetail === null && (await BlogDetailRequest(id));
      BlogList === null && (await BlogListRequest());
    })();
  }, [id]);
  return (
    <Layout>
      {BlogDetail === null ? (
        <BlogDetailSketeon />
      ) : (
        <BlogDetails BlogDetail={BlogDetail} BlogList={BlogList} />
      )}
      <CommentSection BlogDetail={BlogDetail} />
    </Layout>
  );
}

export default BlogDetailsPage;
