import React from "react";
import Layout from "../laylout/Layout";
import UserAccessSection from "../components/UserAccessSection";
import PageTitle from "../components/utilityComponents/PageTitle";

function UserAccessPage() {
  PageTitle('User Access');
  return (
    <Layout>
      <UserAccessSection />
    </Layout>
  );
}

export default UserAccessPage;
