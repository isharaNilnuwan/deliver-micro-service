import {
    Controller,
    Post,
    Body,
    Get,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
  import { JokeService } from './jokes.service';
  import { CreateJokeDTO } from './dto/create-joke.dto';
  import { Joke } from './jokes.entity';
  
  @Controller('joke')
  export class JokeController {
    constructor(private jokeService: JokeService) {}
  
    @Post('create')
    public async createJoke(@Body() createUserDto: CreateJokeDTO): Promise<Joke> {
        console.log("#$ create joke", createUserDto)
      return await this.jokeService.createJoke(createUserDto);
    }
  
    @Get('all')
    public async getJokes(): Promise<Joke[]> {
        console.log("#$ get jokes");
      return await this.jokeService.getUsers();
    }
  
    @Get('/:userId')
    public async getUser(@Param('userId') userId: number) {
      return await this.jokeService.getUser(userId);
    }
  
    @Patch('/edit/:userId')
    public async editUser(
      @Body() createUserDto: CreateJokeDTO,
      @Param('userId') userId: number,
    ): Promise<Joke> {
      return await this.jokeService.editUser(userId, createUserDto);
    }
  
    @Delete('/delete/:userId')
    public async deleteUser(@Param('userId') userId: number) {
      return await this.jokeService.deleteUser(userId);
    }
  }