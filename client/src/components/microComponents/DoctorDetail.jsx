import React from "react";

function DoctorDetail() {
  return (
    <section className=" py-10 px-5">
      {/* Doctor Profile Section */}
      <div className="flex flex-wrap bg-gray-50 rounded-2xl shadow py-6 px-4 hover:scale-[102%] transition-transform duration-300">
        {/* Doctor Image */}
        <div className="w-full md:w-2/5 px-4 mb-5 md:mb-0 ">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=640:*"
            alt="Dr. John Smith"
            className="w-full h-auto rounded-lg shadow-lg "
            id="mainImage"
          />
          <div className="flex flex-col items-center justify-center  mt-10">
            <p className="font-medium text-gray-700 mb-1  text-lg ">
              9:00 AM - 6:00 PM
            </p>
            <p className="font-medium text-gray-700 mb-1  text-sm">
              Sunday to Friday
            </p>
          </div>
        </div>

        {/* Doctor Details */}
        <div className="w-full md:w-3/5 px-4">
          <h2 className="text-3xl font-bold text-gray-700 mb-2">
            Dr. John Smith
          </h2>
          <p className="text-gray-600 text-lg mb-2">Orthopedic Specialist</p>

          {/* Rating & Reviews */}
          <div className="flex items-center mb-3">
            <span className="text-yellow-500 text-xl mr-2">⭐</span>
            <span className="text-gray-700 text-lg">4.5 (120 reviews)</span>
          </div>

          {/* Pricing */}
          <div className="mb-3">
            <span className="text-xl font-semibold text-gray-600">$349.99</span>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-justify leading-relaxed mb-3">
            Dr. Smith offers comprehensive orthopedic care, helping patients
            recover from injuries and manage joint conditions with advanced
            treatment techniques.
          </p>
          <span>
            {/* Contact Details */}

            <p className="font-medium text-gray-600 mb-1">📞 01763788733</p>
            <p className="font-medium text-gray-600">
              📍 267 Broadway, New York, NY 10007, USA
            </p>
          </span>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white rounded-2xl shadow-md py-8 px-6 mt-8 max-w-3xl mx-auto hover:scale-[102%] transition-transform duration-300">
        <h3 className="text-3xl font-semibold text-center text-gray-700 mb-4">
          About Me
        </h3>
        <p className="text-gray-600 text-justify leading-relaxed bg-gray-50 border border-gray-100 rounded-2xl p-5 shadow-sm">
          Dr. John Smith is a renowned orthopedic specialist with a passion for
          patient care. With over 20 years of experience, he has helped
          countless patients recover from musculoskeletal injuries and improve
          their mobility. His patient-focused approach ensures personalized
          treatment plans tailored to individual needs.
        </p>
      </div>
    </section>
  );
}

export default DoctorDetail;
