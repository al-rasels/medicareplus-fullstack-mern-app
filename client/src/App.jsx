import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EmptyPage from "./pages/EmptyPage";
import DoctorPage from "./pages/DoctorPage";
import ClinicPage from "./pages/ClinicPage";
import SpecialistPage from "./pages/SpecialistPage";
import ContactPage from "./pages/ContactPage";

import AboutUsPage from "./pages/AboutUsPage";

import DetailsPage from "./pages/DetailsPage";
import UserAccessPage from "./pages/UserAccessPage";
import VerificationPage from "./pages/VerificationPage";
import DoctorBySpecialityPage from "./pages/DoctorBySpecialityPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/doctors" exact element={<DoctorPage />} />
        <Route path="/clinics" exact element={<ClinicPage />} />
        <Route path="/specialist" exact element={<SpecialistPage />} />
        <Route path="/contact" exact element={<ContactPage />} />
        <Route path="/access" exact element={<UserAccessPage />} />
        <Route path="/verify" exact element={<VerificationPage />} />
        <Route path="/detail:id" exact element={<DetailsPage />} />
        <Route
          path="/doctors-by-speciality/:id"
          exact
          element={<DoctorBySpecialityPage />}
        />
        <Route path="/about" exact element={<AboutUsPage />} />
        <Route path="*" element={<EmptyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
