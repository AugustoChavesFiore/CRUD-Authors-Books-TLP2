import { newAuthor, getAuthors, getAuthor, updateAuthor, deleteAuthor } from "../models/Author.model.js";

export const getAllAuthors = async (req, res) => {
    try {
        const authors = await getAuthors();
        if(!authors){
            res.status(404).json({message: "Something went wrong, authors not found"})
        };
        return res.status(200).json(authors);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Something went wrong, server error"})
    };
};
export const getOneAuthor = async (req, res) => {
    try {
        const author = await getAuthor(req.params.id);
        if(!author){
            res.status(404).json({message: "Something went wrong, author not found"});
        };
        return res.status(200).json(author);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Something went wrong, server error"});
    };
};
export const updateOneAuthor = async (req, res) => {
    try {
        const authorUpdated = await updateAuthor(req.params.id, req.body);
        if(!authorUpdated){
            return res.status(404).json({message: "Something went wrong, author not updated"});
        };
        return res.status(200).json(authorUpdated);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Something went wrong, server error"})
    };
};
export const createNewAuthor = async (req, res) => {
    try {
        const Author= await newAuthor(req.body);
        if(!Author){
            return res.status(400).json({message: "Something went wrong, Author not created"})
        }
        return res.status(201).json(Author)
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Something went wrong, server error"})
        
    }
};
export const deleteOneAuthor = async (req, res) => {
    try {
        const authorDeleted = await deleteAuthor(req.params.id);
        if(!authorDeleted){
            res.status(404).json({message: "Something went wrong, author not deleted"});
        };
        return res.status(200).json(authorDeleted);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({message: "Something went wrong, server error"});
    };
};
