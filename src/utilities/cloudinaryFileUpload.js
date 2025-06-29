const cloudinary = require("cloudinary").v2;
const { CONFIGCLOUDINARY } = require("../configs/config");
const fs = require("fs");

cloudinary.config(CONFIGCLOUDINARY);

const uploadFileToCloudinary = async (filePath) => {
  try {
    if (!filePath) return null;
    // upload file to cloudinary
    const result = await cloudinary.uploader.upload(filePath, {
      resource_type: "auto",
    });
    /// file delete from server
    console.log("cloudinary file uploaded successfully", result.url);
    fs.unlinkSync(filePath);
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = uploadFileToCloudinary;
