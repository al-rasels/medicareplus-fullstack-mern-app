import React, { useEffect } from "react";
import Layout from "../laylout/Layout";
import DoctorsSection from "../components/DoctorsSection";
import useDoctorsStore from "../store/useDoctorStore";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

function DoctorByKeywordPage() {
  const { ListByKeywordRequest, DoctorsListByKeyword } = useDoctorsStore();
  const { keyword } = useParams();

  useEffect(() => {
    (async () => {
      await ListByKeywordRequest(keyword);
    })();
  }, []);

  return (
    <Layout>
      <DoctorsSection Doctors={DoctorsListByKeyword} />
    </Layout>
  );
}

export default DoctorByKeywordPage;
