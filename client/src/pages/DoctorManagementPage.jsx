import DoctorManagementSection from "../components/microComponents/DoctorManagementSection";

import PageTitle from "../components/utilityComponents/PageTitle";
import Layout from "../laylout/Layout";

function UserManagementPage() {
  PageTitle("Doctor Management");
  return (
    <Layout>
      <DoctorManagementSection />
    </Layout>
  );
}

export default UserManagementPage;
