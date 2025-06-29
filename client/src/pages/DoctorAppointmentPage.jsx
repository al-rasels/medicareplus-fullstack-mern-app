import Layout from "../laylout/Layout";
import PageTitle from "../components/utilityComponents/PageTitle";
import DoctorAppointmentSection from "../components/DoctorAppointmentSection";

function DoctorAppointmentPage() {
  PageTitle("Appointment");
  return (
    <Layout>
      <DoctorAppointmentSection />
    </Layout>
  );
}

export default DoctorAppointmentPage;
