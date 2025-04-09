import React, { useEffect } from "react";
import Layout from "../laylout/Layout";
import HeroSection from "../components/HeroSection";
import SpecialitySection from "../components/SpecialitySection";
import PopularSection from "../components/PopularSection";
import HowItWork from "./../components/HowItWork";
import FeaturesSection from "../components/FeaturesSection";
import useDoctorsStore from "../store/useDoctorStore";
import PopularBlogSection from "../components/PopularBlogSection";
import useBlogStore from "../store/useBlogStore";
import PageTitle from "../components/utilityComponents/PageTitle";

function HomePage() {
  const { SpecialityList, SpecialityListRequest } = useDoctorsStore();
  const { Doctors, DoctorsRequest } = useDoctorsStore();
  const { BlogListRequest, BlogList } = useBlogStore();
  PageTitle("Home");
  useEffect(() => {
    (async () => {
      SpecialityList === null && (await SpecialityListRequest());
      Doctors === null && (await DoctorsRequest());
      BlogList === null && (await BlogListRequest());
    })();
  }, []);

  return (
    <Layout>
      <HeroSection />
      <SpecialitySection
        SpecialityList={SpecialityList?.slice(0, 12)}
        buttonVisible={""}
        shimmer={12}
      />

      <PopularSection Doctors={Doctors?.slice(0, 8)} buttonVisible={""} />
      <PopularBlogSection BlogList={BlogList?.slice(0, 3)} buttonVisible={""} />
      <FeaturesSection />
      <HowItWork />
    </Layout>
  );
}

export default HomePage;
