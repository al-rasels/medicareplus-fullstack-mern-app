import { useEffect, useState } from "react";
import PatternBackground from "../../laylout/PatternBackground";
import toast from "react-hot-toast";
import useDoctorsStore from "../../store/useDoctorStore";

function DoctorManagementSection() {
  const { Doctors, DoctorsRequest, RemoveDoctorRequest } = useDoctorsStore();
  let [search, setSearch] = useState(null);
  useEffect(() => {
    // Fetch users when the component mounts
    // Call the request function to fetch users
    (async () => {
      Doctors === null && (await DoctorsRequest());
    })();
  }, []);
  let filteredDoctors = Doctors;
  const handleRemoveDoctor = async (id) => {
    // Call the request function to remove a user by ID
    const res = await RemoveDoctorRequest(id);
    if (res && res.status === "success") {
      // Optionally, you can show a success message or update the UI
      toast.success("User removed successfully");
      await DoctorsRequest();
    } else {
      // Handle error case
      toast.error("Failed to remove user");
    }
  };
  // const FilterDoctors = (value) => {
  //   // Call the request function to filter doctors based on the search value
  //   const filteredDoctors = Doctors.filter((doctor) => {
  //     return (
  //       doctor.name.toLowerCase().includes(value.toLowerCase()) ||
  //       doctor.clinic.toLowerCase().includes(value.toLowerCase()) ||
  //       doctor.speciality.name.toLowerCase().includes(value.toLowerCase())
  //     );
  //   });
  // };
  return (
    <section className="relative isolate py-8 md:py-12 border-gray-100 border-b-2 mx-auto bg-white ">
      <PatternBackground />
      <div className="mx-auto max-w-screen-xl md:max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="flex flex-col items-center justify-center text-center py-5 md:py-10">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--themeColor2)]">
            Manage Doctors
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Here you can manage all doctors of the application. You can search
            for doctors, add new doctors, and perform actions like editing or
            deleting doctors.
          </p>
        </span>
        {/* Search and Add User (Static) */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
              placeholder="Search doctors..."
              className="rounded-xl w-full h-12 bg-gray-200 py-2 pl-8 pr-32 text-gray-500 outline-none border-2 border-gray-100  hover:outline-none focus:ring-[var(--themeColor)] focus:border-[var(--themeColor2)]"
            />
          </div>
          <a href="">
            <button className="text-white h-12 inline-flex items-center justify-between gap-2 hover:bg-[var(--themeColor)] bg-[var(--themeColor2)] focus:ring-4 font-medium rounded-3xl text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 focus:outline-none transition-colors duration-300 ease-in-out">
              Add New Doctor
            </button>
          </a>
        </div>
        {/* User Table */}
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-[var(--themeColor2)] h-16 text-white text-left border-b border-gray-200 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">ID</th>
                <th className="py-3 px-6 text-left">Image</th>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Role</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-md font-light">
              {/* Sample Data - Replace with dynamic data */}

              {filteredDoctors && filteredDoctors.length > 0 ? (
                filteredDoctors
                  .filter((doctor) =>
                    doctor.name.toLowerCase().includes(search || "")
                  )
                  .map((doctor, index) => (
                    <tr
                      key={index}
                      className="border-x-3 border-b border-rounded border-gray-100  hover:border-[var(--themeColor2)] h-16 hover:text-[var(--themeColor2)]   hover:bg-gray-100 animate-none transition-all duration-300 cursor-pointer">
                      <td className="py-3 px-6 text-left">{index + 1}</td>
                      <td className="py-1 px-3 text-left ">
                        <img
                          src={doctor.img || "https://via.placeholder.com/50"}
                          className="object-cover w-12 h-12 rounded-full "
                        />
                      </td>
                      <td className="py-3 px-6 text-left">{doctor.name}</td>
                      <td className="py-3 px-6 text-left">{doctor.clinic}</td>
                      <td className="py-3 px-6 text-left">
                        {doctor.speciality.name}{" "}
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex item-center justify-center gap-2">
                          {/* <button className="w-6 mr-2 transform hover:text-[var(--themeColor)] hover:scale-120 transition-all duration-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            />
                          </svg>
                        </button> */}
                          <button
                            onClick={() => handleRemoveDoctor(doctor._id)}
                            className="w-6  mr-2 transform hover:text-red-500 hover:scale-120 transition-all duration-300 cursor-pointer">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
              ) : (
                <tr>
                  <td colSpan="6" className="py-3 px-6 text-center">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {/* Static Pagination */}
        <div className="flex justify-between items-center mt-6">
          <div>
            <span className="text-sm text-gray-700">
              Showing 1 to 5 of 5 entries
            </span>
          </div>
          <div className="flex space-x-2">
            <a href="">
              <button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 opacity-50">
                Previous
              </button>
            </a>
            <a href="">
              <button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 opacity-50">
                Next
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DoctorManagementSection;
