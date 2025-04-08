import React, { useEffect } from "react";
import Layout from "../laylout/Layout";
import FilterDoctors from "../components/FilterDoctors";
import DoctorsSection from "../components/DoctorsSection";
import useDoctorsStore from "../store/useDoctorStore";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import PageTitle from "../components/utilityComponents/PageTitle";

function DoctorBySpecialityPage() {
  PageTitle("Doctors");
  const { ListBySpecialityRequest, DoctorsListBySpeciality } =
    useDoctorsStore();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      DoctorsListBySpeciality === null && (await ListBySpecialityRequest(id));
    })();
  }, [id]);

  return (
    <Layout>
      <FilterDoctors />
      <DoctorsSection Doctors={DoctorsListBySpeciality} />
    </Layout>
  );
}

export default DoctorBySpecialityPage;
