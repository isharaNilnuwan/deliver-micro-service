import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Joke } from './jokes.entity';
import { CreateJokeDTO } from './dto/create-joke.dto';
import { Repository } from 'typeorm';

@Injectable()
export class JokeService {
  constructor(
    @InjectRepository(Joke)
    private jokeRepository: Repository<Joke>,
  ) {}

  public async createJoke(createUserDto: CreateJokeDTO): Promise<Joke> {
    return await this.jokeRepository.save(createUserDto);
  }

  public async getUsers(): Promise<Joke[]> {
    return await this.jokeRepository.find();
  }

  public async getUser(userId: number): Promise<Joke> {
    return await this.jokeRepository.findOne({
      where: { id: userId },
    });
  }

  public async editUser(
    userId: number,
    createUserDto: CreateJokeDTO,
  ): Promise<Joke> {
    const editedUser = await this.jokeRepository.findOne({
      where: { id: userId },
    });

    if (!editedUser) {
      throw new NotFoundException('Joke not found');
    }
    const result = await this.jokeRepository.update(
      { id: userId },
      createUserDto,
    );
    console.log(result);
    return editedUser;
  }

  public async deleteUser(userId: number): Promise<void> {
    await this.jokeRepository.delete(userId);
  }
}