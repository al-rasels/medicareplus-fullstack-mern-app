import React, { useEffect } from "react";
import Layout from "../laylout/Layout";
import SpecialitySection from "../components/SpecialitySection";
import useDoctorsStore from "../store/useDoctorStore";
import PageTitle from "../components/utilityComponents/PageTitle";

function SpecialistPage() {
  PageTitle("Specialist");
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
