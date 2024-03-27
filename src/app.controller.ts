import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Employee } from './data/employee.dto';

@Controller('employee-info')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('getAll')
  async getAllEmployee() {
    return await this.appService.findAllEmployee();
  }

  @Get('getone/:Emp_ID')
  async getHello(@Param('Emp_ID') Emp_ID: any) {
    return await this.appService.getAllUsers(Emp_ID);
  }

  @Post('add')
  async add(@Body() database2: Employee) {
    return await this.appService.add(database2);
  }

  @Put('update')
  async update(@Body() database2: Employee): Promise<any[]> {
    return await this.appService.update(database2);
  }

  @Delete('delete/:Emp_ID')
  async delete(@Param('Emp_ID') Emp_ID: any) {
    return await this.appService.delete(Emp_ID);
  }
}
