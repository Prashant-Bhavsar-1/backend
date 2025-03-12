import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration of cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_CLOUD_KEY,
  api_secret: process.env.CLOUDINARY_CLOUD_SECRET,
});

const uploadOnCloudinary = async (localFilepath) => {
  try {
    if (!localFilepath) return null;

    // upload the file on cloudinary
    const reseponse = await cloudinary.uploader.upload(localFilepath, {
      resource_type: "auto",
    });

    // file has been uploaded successfully
    console.log("file is uploaded on cloudinary : ", reseponse.url);
    return reseponse;
  } catch (error) {
    fs.unlinkSync(localFilepath); // remove the locally saved temporary file as the upload operation is got failed

    return null;
  }
};

export { uploadOnCloudinary };

/* */
