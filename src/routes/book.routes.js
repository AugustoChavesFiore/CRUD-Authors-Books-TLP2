import { Router } from "express";
import { getAllBooks, getOneBook, createNewBook, updateOneBook, deleteOneBook, showCoverBook } from '../controllers/book.controllers.js';
import { imgUpload, imgUploadCloudinary } from "../middlewares/fileUpload.js";
const bookRoutes = Router();

bookRoutes.get("/", getAllBooks);
bookRoutes.get("/:id", getOneBook);
bookRoutes.get("/showCoverBook/:id",showCoverBook)
bookRoutes.post("/:AuthorId",imgUpload, createNewBook);
bookRoutes.put("/:id", imgUpload, updateOneBook);
bookRoutes.delete("/:id", deleteOneBook);

export { bookRoutes };