import { Router } from "express";
import { getAllBooks, getOneBook, createNewBook, updateOneBook, deleteOneBook } from '../controllers/book.controllers.js';
import { imgUploadCloudinary } from "../middlewares/fileUpload.js";
const bookRoutes = Router();

bookRoutes.get("/", getAllBooks);
bookRoutes.get("/:id", getOneBook);
bookRoutes.post("/",imgUploadCloudinary, createNewBook);
bookRoutes.put("/:id", imgUploadCloudinary, updateOneBook);
bookRoutes.delete("/:id", deleteOneBook);

export { bookRoutes };