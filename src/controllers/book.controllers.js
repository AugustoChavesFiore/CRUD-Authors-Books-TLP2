import { getBook, getBooks, createBook, updateBook, deleteBook } from "../models/Book.model.js";
import path from 'path';
import { fileURLToPath } from 'url';
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
    console.log(req.URLBookCover, req.publicId);
    const book = await createBook({...req.body, bookCover:[req.URLBookCover, req.publicId]});
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
    const book = await updateBook(req.params.id, req.body);
    if (!book) {
        return res.status(404).json({message: "Something went wrong, book not updated"});
    };
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
    return res.status(200).json(book);
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: "Something went wrong, server error"});
  };
}