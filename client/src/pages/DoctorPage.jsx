import React, { useEffect } from "react";
import Layout from "../laylout/Layout";
import FilterDoctors from "../components/FilterDoctors";
import DoctorsSection from "../components/DoctorsSection";
import useDoctorsStore from "../store/useDoctorStore";
import { Helmet } from "react-helmet";

function DoctorPage() {
  const {
    CityList,
    DoctorsByFilterList,
    SpecialityList,
    SpecialityListRequest,
    CityListRequest,
    DoctorsRequest,
    Doctors,
  } = useDoctorsStore();

  useEffect(() => {
    (async () => {
      SpecialityList === null ? await SpecialityListRequest() : null;
      CityList === null ? await CityListRequest() : null;
      Doctors === null && (await DoctorsRequest());
    })();
  }, []);

  return (
    <Layout>
      <FilterDoctors />
      <DoctorsSection Doctors={DoctorsByFilterList} />
    </Layout>
  );
}

export default DoctorPage;


