import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Cat } from 'src/modules/cats/interfaces/cat.interface';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService){}

    @Post()  // CREATE OBJECT
    async create(@Body() createCatDto:CreateCatDto){
        this.catsService.create(createCatDto)
    }

    @Get()  // GET ALL OBJECT
    async findAll():Promise<Cat[]>{
        return this.catsService.findAll()
    }

    @Get(':id')  // GET OBJECT BY ID
    async findOne(@Param('id') id: string ){
        return `This action returns a #${id} cat`;
    }

    @Put(":id")  // UPDATE OBJECT BY ID
    async update(@Param("id") id: string, @Body() createCatDto: CreateCatDto){
        return `This action updates a #${id} cat`;
    }

    @Delete(":id")  // DELETE OBJECT BY ID
    async remove(@Param('id') id: string){
        return `This action removes a #${id} cat`;
    }

}
