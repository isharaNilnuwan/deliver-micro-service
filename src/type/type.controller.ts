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
    constructor(private typeService: TypeService) {}
  
    @Post('create')
    public async createType(@Body() createTypeDto: CreateTypeDTO): Promise<Type> {
        console.log("#$ create type", createTypeDto)
      return await this.typeService.createType(createTypeDto);
    }
  
    @Get('all')
    public async getTypes(): Promise<Type[]> {
        console.log("#$ get types");
      return await this.typeService.getTypes();
    }
  
  
    @Patch('/edit/:userId')
    public async editType(
      @Body() createTypeDto: CreateTypeDTO,
      @Param('userId') userId: number,
    ): Promise<Type> {
      return await this.typeService.editType(userId, createTypeDto);
    }
  
    @Delete('/delete/:typeId')
    public async deleteType(@Param('typeId') userId: number) {
      return await this.typeService.deleteType(userId);
    }
  }