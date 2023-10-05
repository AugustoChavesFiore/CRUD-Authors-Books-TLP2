import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import fileUpload from 'express-fileupload';
import 'dotenv/config';
import { connectDB } from './configs/dataBase.js';
import { authorRoutes } from './routes/author.routes.js';
import { bookRoutes } from './routes/book.routes.js';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(fileUpload({
    createParentPath: true,
    useTempFiles: true
}))

app.use("/api/author",authorRoutes);
app.use("/api/books", bookRoutes);
app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`);
    await connectDB();
})