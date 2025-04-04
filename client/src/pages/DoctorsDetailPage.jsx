import Layout from "../laylout/Layout";
import DetailsSection from "../components/DetailsSection";
import { Helmet } from "react-helmet";
import ReviewsSection from "../components/ReviewsSection";

function DoctorsDetailPage() {
  return (
    <Layout>
      <DetailsSection />
      <ReviewsSection />
    </Layout>
  );
}

export default DoctorsDetailPage;
