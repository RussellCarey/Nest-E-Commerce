import { Controller, Get, Req, Post, Param, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDTO } from './products.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly appService: ProductsService) {}

  // testing eget
  @Get('getty')
  getAllGetties(): any {
    return { message: `This is from the get req all` };
  }

  // testing param
  @Get('getty/:id')
  getSingleGettie(@Param('id') id: number) {
    return { message: `This is from the get req and id is ${id}` };
  }

  // testing post
  @Post('new')
  create(@Body() body: ProductDTO) {
    console.log(body);
    return { message: `Posted something`, data: body };
  }
}
