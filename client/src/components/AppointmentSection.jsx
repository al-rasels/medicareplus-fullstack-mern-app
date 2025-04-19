import React from "react";
import PatternBackground from "../laylout/PatternBackground";
import BookingCard from "./microComponents/BookingCard";

function AppointmentSection() {
  return (
    <div className="justify-center min-h-screen relative py-10 md:py-16">
      <PatternBackground />
      {Array.from({ length: 3 }).map((_, i) => (
        <BookingCard key={i} />
      ))}
    </div>
  );
}

export default AppointmentSection;
