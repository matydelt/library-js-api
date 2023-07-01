import { Injectable, NestMiddleware, Logger } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger(LoggerMiddleware.name);
  use(req: any, res: any, next: () => void) {
    const { Authorization, employee, business } = req.headers;
    const credentials = {
      employee,
      business,
      Authorization,
    };
    this.logger.log(
      `Init service: ${req.method} - ${req.originalUrl} - ${JSON.stringify(
        credentials,
      )}`,
    );
    next();
    this.logger.log(`Finish service with status: ${res.statusCode}`);
  }
}
