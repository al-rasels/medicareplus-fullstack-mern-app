import PatternBackground from "../laylout/PatternBackground";
import BookingCard from "./microComponents/BookingCard";
import { useEffect } from "react";
import useBookingStore from "../store/userBookingStore";
import useUserAccessStore from "../store/userAccessStore";

import ErrorSection from "./ErrorSection";
import AppointmentSkeleton from "../skeletons/AppointmentSkeleton";

function AppointmentSection() {
  const { UserProfile } = useUserAccessStore();
  const { UserBookingList, BookingListRequest } = useBookingStore();
  useEffect(() => {
    (async () => {
      if (UserBookingList === null) {
        await BookingListRequest(UserProfile?._id);
      }
    })();
  }, [UserBookingList]);
  console.log(UserBookingList, UserProfile._id);
  if (UserBookingList === null) {
    return (
      <div className="justify-center min-h-screen relative py-10 md:py-16">
        <PatternBackground />
        {Array.from({ length: 3 }).map((_, i) => (
          <AppointmentSkeleton key={i} />
        ))}
      </div>
    );
  }
  if (UserBookingList.length === 0) {
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
        {UserBookingList?.map((booking, i) => (
          <BookingCard booking={booking} key={i} />
        ))}
      </div>
    );
  }
}

export default AppointmentSection;
