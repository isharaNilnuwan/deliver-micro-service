import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHealth(): string {
    return 'Application is running smoothly';
  }

  getAppInfo(): { version: string; environment: string } {
    return {
      version: '1.0.0',
      environment: process.env.NODE_ENV || 'development',
    };
  }

  logMessage(): void {
    console.log('This is a log message for monitoring purposes');
  }
}
