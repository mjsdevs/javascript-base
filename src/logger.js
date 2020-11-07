import { createLogger, transports, format } from 'winston';

export const Logger = createLogger({
  transports: [
    new transports.Console()
  ],
  format: format.simple(),
});
