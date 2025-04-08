import React from "react";
import Layout from "../laylout/Layout";
import ErrorSection from "../components/ErrorSection";
import BookingCard from "../components/microComponents/BookingCard";
import PageTitle from "../components/utilityComponents/PageTitle";

function AppointmentPage() {
  PageTitle("Appointment");
  return (
    <Layout>
      <BookingCard />
      <ErrorSection
        title="101 - This Page is Under Development"
        description="Sorry, the page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
        buttonText="Return to Homepage"
        to="/"
      />
    </Layout>
  );
}

export default AppointmentPage;
