import React from "react";
import Layout from "../laylout/Layout";
import RegistrationVerifySection from "../components/RegistrationVerifySection";
import PageTitle from "../components/utilityComponents/PageTitle";

function VerificationPage() {
  PageTitle("Verification");
  return (
    <Layout>
      <RegistrationVerifySection />
    </Layout>
  );
}

export default VerificationPage;
