import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import useUserAccessStore from "../store/userAccessStore";
import { SuccessAlert } from "./../utilities/utility";
import toast from "react-hot-toast";
import TextLoading from "./microComponents/TextLoading";

function UserProfileSection() {
  const { UserDetails, UpdateUserRequest, UserDetailsRequest } =
    useUserAccessStore();
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    if (UserDetails) {
      setProfile(UserDetails);
    }
  }, [UserDetails]);
  const [editingField, setEditingField] = useState(null);
  const handleChange = (field, value) => {
    setProfile({ ...profile, [field]: value });
  };

  const toggleEdit = (field) => {
    if (editingField === field) {
      setEditingField(null); // Save
    } else {
      setEditingField(field); // Enable edit mode
    }
  };
  const handleUpdate = async (fieldKey) => {
    if (UserDetails[fieldKey] === profile[fieldKey]) {
      toast.error("No changes made");
    } else {
      const res = await UpdateUserRequest(profile);
      if (res) {
        SuccessAlert("Profile Updated Successfully");
        await UserDetailsRequest();
      }
    }
    console.log(UserDetails[fieldKey] === profile[fieldKey]);

    setEditingField(null);
  };

  const ToggleInputField = (label, fieldKey, isTextarea = false) => (
    <div className="grid grid-cols-1 md:grid-cols-8 gap-4 py-7 justify-center  border-b border-gray-200 last:border-b-0">
      <div className="font-semibold flex items-center text-gray-700 md:col-span-2">
        {label}
      </div>
      <div className="text-gray-600 flex items-center justify-start md:col-span-5">
        {editingField === fieldKey ? (
          isTextarea ? (
            <textarea
              value={profile?.[fieldKey]}
              onChange={(e) => handleChange(fieldKey, e.target.value)}
              className="w-full outline-none border-[var(--themeColor2)] border px-3 py-2 rounded-md"
              rows={4}
            />
          ) : (
            <input
              type="text"
              value={profile?.[fieldKey]}
              onChange={(e) => handleChange(fieldKey, e.target.value)}
              className="w-full border-[var(--themeColor)] border outline-none px-3 py-2 rounded-md"
            />
          )
        ) : profile ? (
          profile[fieldKey]
        ) : (
          <TextLoading />
        )}
      </div>
      <button
        className="bg-[var(--themeColor2)] hover:bg-[var(--themeColor)] transition-colors duration-300 text-white font-semibold  rounded-full shadow py-2 px-4 "
        onClick={() => toggleEdit(fieldKey)}>
        {editingField === fieldKey ? (
          <span
            onClick={() => handleUpdate(fieldKey)}
            className="inline-flex justify-center items-center gap-2">
            <FaEdit /> Save
          </span>
        ) : (
          <span className="inline-flex  justify-center items-center gap-2">
            <FaEdit /> Update
          </span>
        )}
      </button>
    </div>
  );

  return (
    <section>
      {/* Container  */}
      <div className="mx-auto w-full max-w-7xl px-5 py-10 md:px-10">
        <h4 className="text-2xl text-center md:text-3xl font-bold mb-2 mx-auto text-[var(--themeColor2)]">
          User Profile
        </h4>
        <p className="text-gray-700   text-center mb-10">
          Manage your personal information, contact , and account details
        </p>
        <div className="flex flex-col items-center gap-4">
          <img
            src="https://placehold.co/150"
            alt="Preview"
            className="w-32 h-32 rounded-full object-cover border-4 border-[var(--themeColor2)] hover:[var(--themeColor)] transition-colors duration-300"
          />
          <label
            htmlFor="dropzone-file"
            className="bg-[var(--themeColor2)] text-white px-4 py-2 rounded hover:bg-[var(--themeColor)] transition-colors duration-300 cursor-pointer"
            disabled={""}>
            Upload image
          </label>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            disabled={""}
          />
        </div>
        {ToggleInputField("Full name", "name")}
        {ToggleInputField("Email address", "email")}
        {ToggleInputField("Phone number", "phone")}
        {ToggleInputField("Address", "address")}
        {ToggleInputField("Password", "password")}
      </div>
    </section>
  );
}

export default UserProfileSection;
