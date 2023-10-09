
import path from "path";
import { fileURLToPath } from "url";
import { promises as fsPromises } from 'fs'
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const createImgServer = async (file) => {
    try {
        const path = `${__dirname}../../public/img/${file.name}`;
        const newImg = await file.mv(path);
        if (!newImg) {
          return null;
        }
        return newImg;
    } catch (error) {
        console.log(error);
        return null;
    }
};
//borrar imagenes del servidor
export const deleteImgServer =async(bookCover) => {
  try {
    const Path = path.join(__dirname, '..', '..', 'src/public', 'img', `${bookCover}.jpg`);
    const imgdelete =  await fsPromises.unlink(Path);
    if (!imgdelete) {
      return null;
    }
    return imgdelete;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const sendImgServer = async (bookCover) => {
  try {
    // const Path = `${__dirname}../../public/img/${bookCover}.jpg`;
    const Path = path.join(__dirname, '..', '..', 'src/public', 'img', `${bookCover}.jpg`);
    return Path;
  } catch (error) {
    console.log(error);
    return null;
  }
};
