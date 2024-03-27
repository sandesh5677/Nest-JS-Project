import { Controller, Get, Post, Param } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
    constructor(private TestService:TestService){}

    @Get('/:Emp_id')
    async getAlltask(@Param('Emp_id') Emp_id: any){
        return await this.TestService.getAlltask(Emp_id);
    }
    @Post('/add')
    async adddata(){
        return this.TestService.addata();
    }
}