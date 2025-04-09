import Layout from "../laylout/Layout";
import DetailsSection from "../components/DetailsSection";
import ReviewsSection from "../components/ReviewsSection";
import PageTitle from "../components/utilityComponents/PageTitle";

function DoctorsDetailPage() {
  PageTitle("Details");
  return (
    <Layout>
      <DetailsSection />
      <ReviewsSection />
    </Layout>
  );
}

export default DoctorsDetailPage;
