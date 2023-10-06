import { model, Schema } from "mongoose";

const AuthorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  bibliography: {
    type: String,
    required: true,
  },
  booksId: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
}, {
  timestamps: true,
  versionKey: false
});

export const Author = model("Author", AuthorSchema);


export const newAuthor = async(author) => {
    try {
        const newAuthor = await Author.create(author);
        if (!newAuthor) {
            return null
        }
        return newAuthor
    } catch (error) {
        console.log(error)
        return null
    }
    
};
export const getAuthors = async() => {
    try {
        const authors = await Author.find().populate("booksId",{
            title: 1,
            description: 1,
            gender: 1,
            year: 1,
        });
        if (!authors) {
            return null
        }
        return authors
    } catch (error) {
        console.log(error)
        return null
    }
};
export const getAuthor = async(id) => {
    try {
        const author = await Author.findById(id).populate("booksId",{
            title: 1,
            description: 1,
            gender: 1,
            year: 1,
        });
        if (!author) {
            return null
        }
        return author
    } catch (error) {
        console.log(error)
        return null
    }
};
export const updateAuthor = async(id, author) => {
    try {
        const updatedAuthor = await Author.findByIdAndUpdate(id, {...author}, {new: true});
        if (!updatedAuthor) {
            return null
        }
        return updatedAuthor
    } catch (error) {
        console.log(error)
        return null
    }
};
export const deleteAuthor = async(id) => {
    try {
        const deletedAuthor = await Author.findByIdAndDelete(id);
        if (!deletedAuthor) {
            return null
        }
        return deletedAuthor
    } catch (error) {
        console.log(error)
        return null
    }
};

export const agregateBook = async(id, book) => {
    try {
        const author= await Author.findById(id);
        if (!author) {
            return null
        }
        author.booksId.push(book);
        await author.save();
        if (!author) {
            return null
        }
        return author
    } catch (error) {
        
    }
}