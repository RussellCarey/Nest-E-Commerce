import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { ProductDTO } from '../dtos/products.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  // Get single product
  @Get('')
  getProduct(@Param('productId', ParseIntPipe) productId: number): any {
    return this.productService.getProduct(productId);
  }

  // Get all products
  @Get('all')
  getAllProducts(
    @Query('skip', ParseIntPipe) skip?: number,
    @Query('page', ParseIntPipe) page?: number,
  ): any {
    console.log(skip);
    console.log(page);
    // return this.productService.getProducts();
    return { message: 'hello' };
  }

  // Create product

  // Delete product

  // Updated Product

  // Get all prods from category

  // Get all product comments

  // Get product like count

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
  async create(@Body() body: ProductDTO) {
    console.log(body);
    const createdProduct = await this.productService.createProduct(body);
    return { message: `Created a new product`, data: createdProduct };
  }
}
