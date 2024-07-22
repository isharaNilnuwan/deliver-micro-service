import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { JokeModule } from './joke/jokes.module';
import { TypeModule } from './type/type.module';
import { ValidateApiKeyMiddleware } from './middleware/validate-api-key.middleware';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true
    }),
    JokeModule,
    TypeModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ValidateApiKeyMiddleware)
      .forRoutes(
        { path: 'joke/create', method: RequestMethod.POST },
        { path: 'joke/edit', method: RequestMethod.PATCH },
        { path: 'joke/delete', method: RequestMethod.DELETE },
        { path: 'types/create', method: RequestMethod.POST },
        { path: 'types/edit', method: RequestMethod.PATCH },
        { path: 'types/delete', method: RequestMethod.DELETE },

      );
  }
}
