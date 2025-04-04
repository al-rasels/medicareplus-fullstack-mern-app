import React from "react";
import Layout from "../laylout/Layout";

import UserRegistrationSection from "../components/UserRegistrationSection";
import { Helmet } from "react-helmet";

function RegistrationPage() {
  return (
    <Layout>
      <UserRegistrationSection />
    </Layout>
  );
}

export default RegistrationPage;
