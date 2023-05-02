import { Global, Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';


// @Global()  /// makes the module global //  available everywhere
@Module({
    controllers:[CatsController],
    providers:[ CatsService],
    exports:[ CatsService ],
})
export class CatsModule {
    constructor(private catsService: CatsService){}
}
