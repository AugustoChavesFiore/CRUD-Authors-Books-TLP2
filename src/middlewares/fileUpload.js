import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import cloudinary from '../configs/cloudinary.js';
export const imgUpload = (req, res, next) => {
  if (!req.files) {
    return res.status(400).json({ message: "No files were uploaded" });
  }
  let file = req.files.bookCover;
  let path = `${__dirname}../public/img/${file.name}`;
  file.mv(path, (err) => {
    if (err) {
      return res.status(500).json({ message: err });
    }
    req.bookCover = file.name;
    next();
  });
};

// Guardar la img en cloudinary

export const imgUploadCloudinary = async (req, res, next) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({ message: "No files were uploaded" });
  }
  const file = req.files.bookCover;
  try {
    const respon = await cloudinary.uploader.upload(file.tempFilePath);
    req.URLBookCover = respon.secure_url;
    req.publicId = respon.public_id;
    next();
  } catch (error) {
    console.error("Server error image not uploaded:", error);
    res.status(500).json({ message: "Server error image not uploaded" });
  }
};
