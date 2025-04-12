import React from "react";
import Layout from "../laylout/Layout";
import PageTitle from "../components/utilityComponents/PageTitle";
import AppointmentSection from "../components/AppointmentSection";

function AppointmentPage() {
  PageTitle("Appointment");
  return (
    <Layout>
      <AppointmentSection />
    </Layout>
  );
}

export default AppointmentPage;
