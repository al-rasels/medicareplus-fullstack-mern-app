import DoctorBlogsSection from "../components/DoctorBlogsSection";
import FAQSection from "../components/FAQSection";
import PageTitle from "../components/utilityComponents/PageTitle";
import Layout from "../laylout/Layout";

function DoctorBlogsPage() {
  PageTitle("Help & Support");
  return (
    <Layout>
      <DoctorBlogsSection />
      <FAQSection />
    </Layout>
  );
}

export default DoctorBlogsPage;
