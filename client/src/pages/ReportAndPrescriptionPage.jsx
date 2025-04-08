import React from "react";
import Layout from "../laylout/Layout";
import PageTitle from "../components/utilityComponents/PageTitle";
import ReportAndPrescriptionSection from "../components/ReportAndPrescriptionSection";

function ReportAndPrescriptionPage() {
  PageTitle("Report & Prescription");
  return (
    <Layout>
      <ReportAndPrescriptionSection />
    </Layout>
  );
}

export default ReportAndPrescriptionPage;
