import FooterSection from "../components/FooterSection.jsx";
import NavBarSection from "../components/NavBarSection.jsx";
import { Toaster } from "react-hot-toast";

function Layout({ children }) {
  return (
    <>
      <NavBarSection />
      {children}
      <Toaster />
      <FooterSection />
    </>
  );
}

export default Layout;
