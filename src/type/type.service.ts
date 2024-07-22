import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Type } from './type.entity';
import { CreateTypeDTO } from './dto/create-type.dto'; 
import { Repository } from 'typeorm';

@Injectable()
export class TypeService {
  constructor(
    @InjectRepository(Type)
    private jokeRepository: Repository<Type>,
  ) {}

  public async createType(createTypeDto: CreateTypeDTO): Promise<Type> {
    return await this.jokeRepository.save(createTypeDto);
  }

  public async getTypes(): Promise<Type[]> {
    return await this.jokeRepository.find();
  }

  public async getUser(userId: number): Promise<Type> {
    return await this.jokeRepository.findOne({
      where: { id: userId },
    });
  }

  public async editType(
    userId: number,
    createTypeDto: CreateTypeDTO,
  ): Promise<Type> {
    const editedUser = await this.jokeRepository.findOne({
      where: { id: userId },
    });

    if (!editedUser) {
      throw new NotFoundException('Type not found');
    }
    const result = await this.jokeRepository.update(
      { id: userId },
      createTypeDto,
    );
    console.log(result);
    return editedUser;
  }

  public async deleteType(userId: number): Promise<void> {
    await this.jokeRepository.delete(userId);
  }
}