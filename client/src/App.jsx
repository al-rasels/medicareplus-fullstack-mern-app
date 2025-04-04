import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import EmptyPage from "./pages/EmptyPage";
import DoctorPage from "./pages/DoctorPage";
import NewsFeedPage from "./pages/NewsFeedPage.jsx";
import SpecialistPage from "./pages/SpecialistPage";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";
import UserAccessPage from "./pages/UserAccessPage";
import VerificationPage from "./pages/VerificationPage";
import DoctorBySpecialityPage from "./pages/DoctorBySpecialityPage";
import DoctorsDetailPage from "./pages/DoctorsDetailPage";
import DoctorByKeywordPage from "./pages/DoctorByKeywordPage";
import RegistrationPage from "./pages/RegistrationPage";
import BlogDetailsPage from "./pages/BlogDetailsPage.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/doctors" exact element={<DoctorPage />} />

        <Route path="/specialist" exact element={<SpecialistPage />} />
        <Route path="/contact" exact element={<ContactPage />} />
        <Route path="/access" exact element={<UserAccessPage />} />
        <Route path="/register" exact element={<RegistrationPage />} />
        <Route path="/verify" exact element={<VerificationPage />} />
        <Route path="/newsfeed" exact element={<NewsFeedPage />} />
        <Route path="/newsfeed/:id" exact element={<BlogDetailsPage />} />
        <Route
          path="/doctors-by-keyword/:keyword"
          exact
          element={<DoctorByKeywordPage />}
        />
        <Route
          path="/doctors-detail/:id"
          exact
          element={<DoctorsDetailPage />}
        />
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
