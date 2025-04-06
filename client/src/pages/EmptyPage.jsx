import ErrorSection from "../components/ErrorSection.jsx"
import Layout from "../laylout/Layout"
import PatternBackground from "../laylout/PatternBackground.jsx";

function EmptyPage() {
  return (
    <Layout>
      <PatternBackground />
      <ErrorSection
        title="404 - Page Not Found"
        description="Sorry, the page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
        buttonText="Return to Homepage"
        to="/"
      />
    </Layout>
  );
}

export default EmptyPage
