import React from "react";
import Layout from "../laylout/Layout";

import UserRegistrationSection from "../components/UserRegistrationSection";
import { Helmet } from "react-helmet";
import PageTitle from "../components/utilityComponents/PageTitle";

function RegistrationPage() {
  PageTitle("Registration");
  return (
    <Layout>
      <UserRegistrationSection />
    </Layout>
  );
}

export default RegistrationPage;
