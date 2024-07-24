import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ValidateApiKeyMiddleware implements NestMiddleware {
  private readonly apiKey: string;

  constructor(private configService: ConfigService) {
    this.apiKey = this.configService.get<string>('API_KEY');
  }

  use(req: Request, res: Response, next: NextFunction): void {
    console.log("#$ validator middle ware",req.header('Authorization')?.split(' ')[1]);
    const apiKey = req.header('Authorization')?.split(' ')[1] as string;
    if (apiKey !== this.apiKey) {
      throw new UnauthorizedException('Invalid API Key');
    }

    next(); 
  }
}
