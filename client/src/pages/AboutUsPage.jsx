import React from "react";
import Layout from "../laylout/Layout";
import AboutSection from "../components/AboutSection";
import FactsSection from "../components/FactsSection";
import ImportantPersons from "../components/ImportantPersons";
import FAQSection from "../components/FAQSection";
import { Helmet } from "react-helmet";

function AboutPage() {
  return (
    <Layout>
      <ImportantPersons />
      <AboutSection />
      <FAQSection />
      <FactsSection />
    </Layout>
  );
}

export default AboutPage;
