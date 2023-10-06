import { getBook, getBooks, createBook, updateBook, deleteBook } from "../models/Book.model.js";
import path from 'path';
import { fileURLToPath } from 'url';
import { deleteBookCover } from "./cloudinary.controller.js";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const getAllBooks = async(req,res) => {
  try {
    const books= await getBooks();
    if (!books) {
        return res.status(404).json({message: "Something went wrong, books not found"});
    };
    return res.status(200).json(books);
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: "Something went wrong, server error"});
  }  ;
};
export const getOneBook = async(req,res) => {
  try {
    const book = await getBook(req.params.id);
    if (!book) {
        return res.status(404).json({message: "Something went wrong, book not found"});
    };
    return res.status(200).json(book);
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: "Something went wrong, server error"});
  };
};

export const createNewBook = async(req,res) => {
  try {
    const book = await createBook(req.params.AuthorId,{...req.body, bookCover: { URLbookCover: req.URLBookCover, publicId: req.publicId } });
    if (!book) {
        return res.status(404).json({message: "Something went wrong, book not created"});
    };
    return res.status(201).json(book);
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: "Something went wrong, server error"});
  };
};

export const updateOneBook = async(req,res) => {
  try {
    const book = await updateBook(req.params.id,{ ...req.body, bookCover: { URLbookCover: req.URLBookCover, publicId: req.publicId }});
     console.log(book);
    if (!book) {
        return res.status(404).json({message: "Something went wrong, book not updated"});
    };
    await deleteBookCover(book.bookCover.publicId);
    return res.status(200).json(book);
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: "Something went wrong, server error"});
  };
};

export const deleteOneBook = async(req,res) => {
  try {
    const book = await deleteBook(req.params.id);
    if (!book) {
        return res.status(404).json({message: "Something went wrong, book not deleted"});
    };
    await deleteBookCover(book.bookCover.publicId);
    return res.status(200).json(book);
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: "Something went wrong, server error"});
  };
}