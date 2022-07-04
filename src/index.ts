import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const app = express();

dotenv.config({ path: '.env' });

mongoose
   .connect(process.env.MONGO_DB_URI)
   .then(() => console.log('Mongo connected.'))
   .catch((err) => console.error(err.message));

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}.`));
