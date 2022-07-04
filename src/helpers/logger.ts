import winston from 'winston';
import path from 'path';

const dirname = path.resolve(__dirname, '../log');

const logger = winston.createLogger({
   level: 'info',
   format: winston.format.json(),
   transports: [
      new winston.transports.File({ dirname, filename: 'error.log', level: 'error' }),
      new winston.transports.File({ dirname, filename: 'warn.log', level: 'warn' }),
      new winston.transports.File({ dirname, filename: 'info.log' }),
   ],
});

export default logger;
