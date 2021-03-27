import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';
import connectDB from './config/db.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';
import bodyParser from 'body-parser';
import formData from 'express-form-data';
import http from 'http';
import path from 'path';
import fs from 'fs';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(formData.parse());
app.use(formData.stream());
app.use(formData.union());
app.use(formData.format());

/** api routes */
app.use('/api/users', userRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/product', productRoutes);

const __dirname = path.resolve(path.dirname('backend/images'));

http
  .createServer((req, res) => {
    fs.readFile(__dirname + req.url, function (err, data) {
      if (err) {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }
      res.writeHead(200);
      res.end(data);
    });
  })
  .listen(8080);

// app.use(express.static('./images'));

// app.use(express.static(__dirname + './images'));

app.get('/', (req, res) => {
  res.send('api is running...');
});

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 7000;

app.listen(
  PORT,
  console.log(`Server is up and running on port ${PORT} `.yellow.bold)
);
