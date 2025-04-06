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
  const { Doctors, DoctorsRequest } = useDoctorsStore();

  useEffect(() => {
    (async () => {
      SpecialityList === null && (await SpecialityListRequest());
      Doctors === null && (await DoctorsRequest());
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
      <FeaturesSection />
      <HowItWork />
    </Layout>
  );
}

export default HomePage;
