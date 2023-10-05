import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const imgUpload = (req, res, next) => {
    if (!req.files) {
        return res.status(400).json({ message: "No files were uploaded" });
    }
    let file = req.files.bookCover;
    let path = `${__dirname}../../public/img/${file.name}`;
    file.mv(path, (err) => {
        if (err) {
            return res.status(500).json({ message: err });
        }
        req.bookCover = file.name;
        next();
    });


}