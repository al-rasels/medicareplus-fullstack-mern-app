import Layout from "../laylout/Layout";
import DetailsSection from "../components/DetailsSection";
import ReviewsSection from "../components/ReviewsSection";
import PageTitle from "../components/utilityComponents/PageTitle";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useDoctorsStore from "../store/useDoctorStore";

function DoctorsDetailPage() {
  const { DoctorsDetailRequest } = useDoctorsStore();
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    (async () => {
      await DoctorsDetailRequest(id);
    })();
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
