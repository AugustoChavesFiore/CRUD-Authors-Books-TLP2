import { Router } from "express";
import { getAllBooks, getOneBook, createNewBook, updateOneBook, deleteOneBook, showCoverBook, genreBooksCount } from '../controllers/book.controllers.js';
import { imgUpload, imgUploadCloudinary } from "../middlewares/fileUpload.js";
const bookRoutes = Router();

bookRoutes.get("/", getAllBooks);
bookRoutes.get("/:id", getOneBook);
bookRoutes.get("/showCoverBook/:id",showCoverBook);
bookRoutes.get("/genre/:genre", genreBooksCount);
bookRoutes.post("/:AuthorId",imgUpload, createNewBook);
bookRoutes.put("/:id", imgUpload, updateOneBook);
bookRoutes.delete("/:id", deleteOneBook);

export { bookRoutes };