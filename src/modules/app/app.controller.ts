import { Controller, Get, Req, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRandomText(@Req() request: Request): string {
    console.log(request);
    // This is in the app.service
    return this.appService.getHello();
  }

  @Post()
  create(): string {
    return 'This action adds a new cat';
  }
}
