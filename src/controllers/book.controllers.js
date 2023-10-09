import { deleteBookAuthor } from "../models/Author.model.js";
import { getBook, getBooks, createBook, updateBook, deleteBook } from "../models/Book.model.js";
import { deleteImgServer, sendImgServer } from "./imageServer.controller.js";

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
    const book = await createBook(req.params.AuthorId,{...req.body, bookCover: req.bookCover});
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
    const book = await updateBook(req.params.id,{ ...req.body, bookCover});
     console.log(book);
    if (!book) {
        return res.status(404).json({message: "Something went wrong, book not updated"});
    };
    await deleteImgServer(book.bookCover);
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
    await deleteImgServer(book.bookCover);
    await deleteBookAuthor(book.authorId, book._id);
    return res.status(200).json(book);
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: "Something went wrong, server error"});
  };
};

export const showCoverBook = async(req,res) => {
  try {
    const book = await getBook(req.params.id);
    if (!book) {
        return res.status(404).json({message: "Something went wrong, bookCover not found"});
    };
    const urlBookCover = sendImgServer(book.bookCover);
    return res.sendFile(urlBookCover);
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: "Something went wrong, server error"});
  };
    
};