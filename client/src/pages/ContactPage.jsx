import React from "react";
import Layout from "../laylout/Layout";
import ContactSection from "../components/ContactSection";
import { Helmet } from "react-helmet";
import PageTitle from "../components/utilityComponents/PageTitle";

function ContactPage() {
  PageTitle("Contact");
  return (
    <Layout>
      <ContactSection />
    </Layout>
  );
}

export default ContactPage;
