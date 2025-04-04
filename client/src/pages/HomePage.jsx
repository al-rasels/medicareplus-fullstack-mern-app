import React, { useEffect } from "react";
import Layout from "../laylout/Layout";
import HeroSection from "../components/HeroSection";
import SpecialitySection from "../components/SpecialitySection";
import PopularSection from "../components/PopularSection";
import HowItWork from "./../components/HowItWork";
import FeaturesSection from "../components/FeaturesSection";
import useDoctorsStore from "../store/useDoctorStore";


function HomePage() {
  const { SpecialityList, SpecialityListRequest } = useDoctorsStore();
  const { IsDLLoading, Doctors, DoctorsRequest } = useDoctorsStore();

  useEffect(() => {
    (async () => {
      await SpecialityListRequest();
      await DoctorsRequest();
    })();
  }, []);
  return (
    <Layout>
      <HeroSection />
      <SpecialitySection
        SpecialityList={SpecialityList?.slice(0, 12)}
        buttonVisible={""}
      />

      <PopularSection
        Doctors={Doctors?.slice(0, 8)}
        IsLoading={IsDLLoading}
        buttonVisible={""}
      />
      <FeaturesSection />
      <HowItWork />
    </Layout>
  );
}

export default HomePage;
