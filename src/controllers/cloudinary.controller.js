import cloudinary from '../configs/cloudinary.js';

export const createBookCover=async(file)=>{
    try {
        const newBookCover = await cloudinary.uploader.upload(file.tempFilePath);
        if (!newBookCover) {
            return null;
        }
        return newBookCover;
    } catch (error) {
        console.log(error);
        return null;
    }
}
export const deleteBookCover=async(publicId)=>{
    try {
        const deletedBookCover = await cloudinary.uploader.destroy(publicId);
        if (!deletedBookCover) {
            return null;
        }
        return deletedBookCover;
    } catch (error) {
        console.log(error);
        return null;
    }
}
export const updateBookCover=async(file,publicId)=>{
    try {
        await deleteBookCover(publicId);
        const updatedBookCover = await cloudinary.uploader.upload(file.tempFilePath);
        if (!updatedBookCover) {
            return null;
        }
        return updatedBookCover;
    } catch (error) {
        console.log(error);
        return null;
    }
}