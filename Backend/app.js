import express from 'express';
import connect from './config/db.js';
import cors from 'cors';
import path from 'path';
import cookieParser from 'cookie-parser';

import admin from './routes/adminRoute.js';
import homePage from './routes/homePage.js';
import { fileURLToPath } from 'url';

let app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

connect()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);
app.use(cookieParser())
app.use('/banner', express.static(path.join(__dirname, 'public/banner')));
app.use('/category', express.static(path.join(__dirname, 'public/category')));
        
app.use('/admin', admin)
app.use('/homePage', homePage)



app.listen(7777)

