import { Body, Controller, Get, Post } from '@nestjs/common';
import { Cat } from 'src/modules/cats/interfaces/cat.interface';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService){}

    @Post()
   async create(@Body() createCatDto:CreateCatDto){
    this.catsService.create(createCatDto)
   }


    @Get()
    async findAll():Promise<Cat[]>{
        return this.catsService.findAll()
    }
}
