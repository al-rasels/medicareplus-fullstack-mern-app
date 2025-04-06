import { useState } from "react";

function UserProfileSection() {
  const [profile, setProfile] = useState({
    fullName: "Anthony Jennings",
    email: "anthony.jennings@gmail.com",
    applicationFor: "Senior Developer",
    location: "Los Angeles, California",
    about:
      "Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.",
  });

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

  const renderField = (label, fieldKey, isTextarea = false) => (
    <div className="grid grid-cols-1 md:grid-cols-8 gap-4 py-7 border-b border-gray-300 last:border-b-0">
      <div className="font-semibold text-gray-950 md:col-span-2">{label}</div>
      <div className="text-gray-700 md:col-span-5">
        {editingField === fieldKey ? (
          isTextarea ? (
            <textarea
              value={profile[fieldKey]}
              onChange={(e) => handleChange(fieldKey, e.target.value)}
              className="w-full border px-3 py-2 rounded-md"
              rows={4}
            />
          ) : (
            <input
              type="text"
              value={profile[fieldKey]}
              onChange={(e) => handleChange(fieldKey, e.target.value)}
              className="w-full border px-3 py-2 rounded-md"
            />
          )
        ) : (
          profile[fieldKey]
        )}
      </div>
      <div
        className="font-bold text-end text-blue-600 md:col-span-1 cursor-pointer"
        onClick={() => toggleEdit(fieldKey)}>
        {editingField === fieldKey ? "Save" : "Update"}
      </div>
    </div>
  );

  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-10 md:px-10">
        {/* Title */}
        <h4 className="text-xl md:text-3xl font-bold mb-2 text-gray-950">
          General Information
        </h4>
        <p className="text-gray-700 mb-10">Personal details and application.</p>

        {renderField("Full name", "fullName")}
        {renderField("Email address", "email")}
        {renderField("Application for", "applicationFor")}
        {renderField("Location", "location")}
        {renderField("About", "about", true)}
      </div>
    </section>
  );
}

export default UserProfileSection;
