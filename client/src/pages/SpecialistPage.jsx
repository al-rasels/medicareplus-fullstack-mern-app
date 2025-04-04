import React, { useEffect } from "react";
import Layout from "../laylout/Layout";
import SpecialitySection from "../components/SpecialitySection";
import useDoctorsStore from "../store/useDoctorStore";
import { Helmet } from "react-helmet";

function SpecialistPage() {
  const { SpecialityList, SpecialityListRequest } = useDoctorsStore();

  useEffect(() => {
    (async () => {
      await SpecialityListRequest();
    })();
  }, []);
  return (
    <Layout>
      <SpecialitySection
        SpecialityList={SpecialityList}
        buttonVisible={"hidden"}
      />
    </Layout>
  );
}

export default SpecialistPage;
