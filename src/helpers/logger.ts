import winston from 'winston';

const logger = winston.createLogger({
   level: 'info',
   format: winston.format.json(),
   transports: [
      new winston.transports.File({ dirname: './src/log', filename: 'error.log', level: 'error' }),
      new winston.transports.File({ dirname: './src/log', filename: 'logFile.log' }),
   ],
});

export default logger;
