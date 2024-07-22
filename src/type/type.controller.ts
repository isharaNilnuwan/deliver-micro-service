import {
    Controller,
    Post,
    Body,
    Get,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
  import { TypeService } from './type.service'; 
  import { CreateTypeDTO } from './dto/create-type.dto'; 
  import { Type } from './type.entity'; 
  
  @Controller('type')
  export class TypeController {
    constructor(private jokeService: TypeService) {}
  
    @Post('create')
    public async createType(@Body() createUserDto: CreateTypeDTO): Promise<Type> {
        console.log("#$ create joke")
      return await this.jokeService.createType(createUserDto);
    }
  
    @Get('all')
    public async getTypes(): Promise<Type[]> {
        console.log("#$ get user");
      return await this.jokeService.getTypes();
    }
  
  
    @Patch('/edit/:userId')
    public async editType(
      @Body() createUserDto: CreateTypeDTO,
      @Param('userId') userId: number,
    ): Promise<Type> {
      return await this.jokeService.editType(userId, createUserDto);
    }
  
    @Delete('/delete/:typeId')
    public async deleteType(@Param('typeId') userId: number) {
      return await this.jokeService.deleteType(userId);
    }
  }