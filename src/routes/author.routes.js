import { Router } from "express";
import { getAllAuthors, getOneAuthor, createNewAuthor, updateOneAuthor, deleteOneAuthor } from "../controllers/author.controllers.js";

const authorRoutes = Router();

authorRoutes.get("/",getAllAuthors);
authorRoutes.get("/:id", getOneAuthor);
authorRoutes.post("/", createNewAuthor);
authorRoutes.put("/:id", updateOneAuthor);
authorRoutes.delete("/:id", deleteOneAuthor);


export { authorRoutes };