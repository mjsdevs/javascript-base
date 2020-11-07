import { createLogger, transports, format } from 'winston';

const { combine, simple, colorize } = format;

export const Logger = createLogger({
  transports: [
    new transports.Console()
  ],
  format: combine(
    colorize(),
    simple(),
  ),
});
