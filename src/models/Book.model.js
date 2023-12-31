import { Schema, model } from "mongoose";
import { agregateBook } from "./Author.model.js";

const BookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    bookCover: 
      {
        URLbookCover: {
          type: String,
          required: true,
        },
        publicId: {
          type: String,
          required: true,
        },
      },
    authorId: {
      type: Schema.Types.ObjectId,
      ref: "Author",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Book = model("Book", BookSchema);

export const getBooks = async () => {
  try {
    const books = await Book.find().populate("authorId",{
      name: 1,
      lastName: 1,
      bibliography: 1,
    });
    if (!books) {
      return null;
    }
    return books;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const getBook = async (id) => {
  try {
    const book = await Book.findById(id).populate("authorId",{
      name: 1,
      lastName: 1,
      bibliography: 1,
    });
    if (!book) {
      return null;
    }
    return book;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const createBook = async (authorId,bookNew) => {
  console.log(bookNew, authorId);
  try {
    const newBook = await Book.create({...bookNew, authorId});
    if (!newBook) {
      return null;
    }
    const agregate = await agregateBook(authorId, newBook._id);
    if (!agregate) {
      return null;
    }
    return newBook;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const updateBook = async (id, book) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(id, {...book});
    if (!updatedBook) {
      return null;
    }
    return updatedBook;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteBook = async (id) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return null;
    }
    return deletedBook;
  } catch (error) {
    console.log(error);
    return null;
  }
};
