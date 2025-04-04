import React from "react";
import Layout from "../laylout/Layout";
import ContactSection from "../components/ContactSection";
import { Helmet } from "react-helmet";

function ContactPage() {
  return (
    <Layout>
      <ContactSection />
    </Layout>
  );
}

export default ContactPage;
