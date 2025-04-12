import Layout from "../laylout/Layout";
import DetailsSection from "../components/DetailsSection";
import ReviewsSection from "../components/ReviewsSection";
import PageTitle from "../components/utilityComponents/PageTitle";
import { useEffect } from "react";

function DoctorsDetailPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  PageTitle("Details");
  return (
    <Layout>
      <DetailsSection />
      <ReviewsSection />
    </Layout>
  );
}

export default DoctorsDetailPage;
