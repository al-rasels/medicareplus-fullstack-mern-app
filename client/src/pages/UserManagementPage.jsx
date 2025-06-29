import DoctorBlogsSection from "../components/DoctorBlogsSection";
import FAQSection from "../components/FAQSection";
import UserManagementSection from "../components/microComponents/UserManagementSection";
import PageTitle from "../components/utilityComponents/PageTitle";
import Layout from "../laylout/Layout";

function UserManagementPage() {
  PageTitle("User Management");
  return (
    <Layout>
      <UserManagementSection />
    </Layout>
  );
}

export default UserManagementPage;
