import React from "react";
import Layout from "../laylout/Layout";
import AboutSection from "../components/AboutSection";
import FactsSection from "../components/FactsSection";
import ImportantPersons from "../components/ImportantPersons";
import FAQSection from "../components/FAQSection";

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
