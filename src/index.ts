import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import logger from './helpers/logger';
const app = express();

dotenv.config({ path: '.env' });

mongoose
   .connect(process.env.MONGO_DB_URI)
   .then(() => logger.info('Mongo connected.'))
   .catch((err) => logger.error(err.message));

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 3000;
app.listen(port, () => logger.info(`Server is running on port ${port}.`));
