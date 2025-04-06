import React, { useEffect } from "react";
import DoctorDetail from "./microComponents/DoctorDetail";
import BookingForm from "./microComponents/BookingForm";
import PatternBackground from "../laylout/PatternBackground";
import { useParams } from "react-router-dom";
import useDoctorsStore from "../store/useDoctorStore";
import DocDetailSkeleton from "../skeletons/DocDetailSkeleton";
function DetailsSection() {
  const { id } = useParams();
  const { DoctorsDetail, DoctorsDetailRequest } = useDoctorsStore();

  useEffect(() => {
    (async () => {
      await DoctorsDetailRequest(id);
    })();
  }, [id]);

  return (
    <section className="relative py-16 md:py-26">
      <PatternBackground />
      <div className="relative max-w-screen-xl isolate py-8 md:py-12  mx-auto">
        {/* {Doctor details} */}
        <div className="mx-auto grid grid-cols-12">
          <div className="col-span-12 md:col-span-8 md:col-start-0 md:col-end-8 px-6 py-3 ">
            {/* <DoctorDetail /> */}
            {DoctorsDetail === null ? (
              <DocDetailSkeleton />
            ) : (
              <DoctorDetail DoctorsDetail={DoctorsDetail} />
            )}
          </div>

          {/* 2nd part */}
          <div className="col-span-12  md:col-span-4 md:col-start-8 md:col-end-13 px-6 py-3">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailsSection;
