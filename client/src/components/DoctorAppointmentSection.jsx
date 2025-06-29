import PatternBackground from "../laylout/PatternBackground";
import { useEffect } from "react";
import useBookingStore from "../store/userBookingStore";
import useUserAccessStore from "../store/userAccessStore";
import ErrorSection from "./ErrorSection";
import AppointmentSkeleton from "../skeletons/AppointmentSkeleton";
import DoctorBookingCard from "./microComponents/DoctorBookingCard";

function DoctorAppointmentSection() {
  const { UserProfile } = useUserAccessStore();
  const { DoctorBookingList, DoctorBookingListRequest } = useBookingStore();
  useEffect(() => {
    (async () => {
      if (DoctorBookingList === null) {
        await DoctorBookingListRequest();
      }
    })();
  }, [DoctorBookingList]);
  console.log(DoctorBookingList, UserProfile._id);
  if (DoctorBookingList === null) {
    return (
      <div className="justify-center min-h-screen relative py-10 md:py-16">
        <PatternBackground />
        {Array.from({ length: 3 }).map((_, i) => (
          <AppointmentSkeleton key={i} />
        ))}
      </div>
    );
  }
  if (DoctorBookingList?.length === 0) {
    return (
      <ErrorSection
        title="No Appointments"
        description="You have no appointments"
        buttonText="Return to Homepage"
        to="/"
      />
    );
  } else {
    return (
      <div className="justify-center min-h-screen relative py-10 md:py-16">
        <PatternBackground />
        {DoctorBookingList?.map((booking, i) => (
          <DoctorBookingCard booking={booking} key={i} />
        ))}
      </div>
    );
  }
}

export default DoctorAppointmentSection;
