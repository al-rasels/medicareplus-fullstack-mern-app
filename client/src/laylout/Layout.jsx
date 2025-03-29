import FooterSection from "../components/FooterSection.jsx";
import NavBarSection from "../components/NavBarSection.jsx";

function Layout({ children }) {
  return (
    <>
      <NavBarSection />
      {children}
      <FooterSection />
    </>
  );
}

export default Layout;
