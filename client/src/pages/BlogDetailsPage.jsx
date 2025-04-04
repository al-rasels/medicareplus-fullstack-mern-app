import React, { useEffect } from "react";
import Layout from "../laylout/Layout.jsx";
import BlogDetails from "../components/microComponents/BlogDetail.jsx";
import CommentSection from "../components/CommentSection.jsx";
import useBlogStore from "../store/useBlogStore.js";
import { useParams } from "react-router-dom";

function BlogDetailsPage() {
  const { id } = useParams();
  const { BlogDetailRequest, BlogDetail, BlogList } = useBlogStore();
  useEffect(() => {
    (async () => {
      await BlogDetailRequest(id);
    })();
  }, [id]);
  return (
    <Layout>
      <BlogDetails BlogDetail={BlogDetail} BlogList={BlogList} />
      <CommentSection BlogDetail={BlogDetail} />
    </Layout>
  );
}

export default BlogDetailsPage;
