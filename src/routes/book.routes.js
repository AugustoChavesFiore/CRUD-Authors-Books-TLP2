import { Router } from "express";
import { getAllBooks, getOneBook, createNewBook, updateOneBook, deleteOneBook } from '../controllers/book.controllers.js';
import { imgUpload } from "../helpers/fileUpload.js";
const bookRoutes = Router();

bookRoutes.get("/", getAllBooks);
bookRoutes.get("/:id", getOneBook);
bookRoutes.post("/",imgUpload, createNewBook);
bookRoutes.put("/:id", updateOneBook);
bookRoutes.delete("/:id", deleteOneBook);

export { bookRoutes };