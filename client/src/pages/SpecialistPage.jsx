import React, { useEffect } from "react";
import Layout from "../laylout/Layout";
import SpecialitySection from "../components/SpecialitySection";
import useDoctorsStore from "../store/useDoctorStore";
import { Helmet } from "react-helmet";

function SpecialistPage() {
  const { SpecialityList, SpecialityListRequest } = useDoctorsStore();

  useEffect(() => {
    (async () => {
      SpecialityList === null && (await SpecialityListRequest());
    })();
  }, []);
  return (
    <Layout>
      <SpecialitySection
        SpecialityList={SpecialityList}
        buttonVisible={"hidden"}
        shimmer={30}
      />
    </Layout>
  );
}

export default SpecialistPage;
