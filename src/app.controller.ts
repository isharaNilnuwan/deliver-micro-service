import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  getHealth(): string {
    return this.appService.getHealth();
  }

  @Get('info')
  getAppInfo(): { version: string; environment: string } {
    return this.appService.getAppInfo();
  }

  @Get('log')
  logMessage(): string {
    this.appService.logMessage();
    return 'Log message triggered';
  }
}
