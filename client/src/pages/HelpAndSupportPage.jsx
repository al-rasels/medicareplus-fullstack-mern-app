import FAQSection from "../components/FAQSection";
import HelpAndSupportChatSection from "../components/HelpAndSupportChatSection";
import PageTitle from "../components/utilityComponents/PageTitle";
import Layout from "../laylout/Layout";

function HelpAndSupportPage() {
  PageTitle("Help & Support");
  return (
    <Layout>
      <HelpAndSupportChatSection />
      <FAQSection />
    </Layout>
  );
}

export default HelpAndSupportPage;
