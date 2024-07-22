import { Module } from '@nestjs/common';
import { JokeService } from './jokes.service';
import { JokeController } from './jokes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Joke } from './jokes.entity';
import { Type } from '../type/type.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Joke, Type])],
  providers: [JokeService],
  controllers: [JokeController],
})
export class JokeModule {}