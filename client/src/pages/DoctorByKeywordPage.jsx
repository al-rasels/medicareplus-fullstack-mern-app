import React, { useEffect } from "react";
import Layout from "../laylout/Layout";
import DoctorsSection from "../components/DoctorsSection";
import useDoctorsStore from "../store/useDoctorStore";
import { useParams } from "react-router-dom";
import PageTitle from "../components/utilityComponents/PageTitle";

function DoctorByKeywordPage() {
  PageTitle("Doctors");
  const { ListByKeywordRequest, DoctorsListByKeyword } = useDoctorsStore();
  const { keyword } = useParams();

  useEffect(() => {
    (async () => {
      await ListByKeywordRequest(keyword);
    })();
  }, [keyword]);

  return (
    <Layout>
      <DoctorsSection Doctors={DoctorsListByKeyword} />
    </Layout>
  );
}

export default DoctorByKeywordPage;
