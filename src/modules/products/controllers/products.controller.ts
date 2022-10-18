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
  async getProduct(
    @Param('productId', ParseIntPipe) productId: number,
  ): Promise<any> {
    const product = await this.productService.getProduct(productId);
    return { message: '', data: product };
  }

  // Get all products
  @Get('all')
  async getAllProducts(
    @Query('skip', ParseIntPipe) skip?: number,
    @Query('take', ParseIntPipe) take?: number,
  ): Promise<any> {
    console.log(skip);
    console.log(take);
    const products = await this.productService.getAllProducts({
      skip: skip,
      take: take,
    });
    return { message: 'Retrieved Products', data: products };
  }

  // Create product
  @Post('new')
  async create(@Body() body: ProductDTO) {
    console.log(body);
    const createdProduct = await this.productService.createProduct(body);
    return { message: `Created a new product`, data: createdProduct };
  }

  // Delete product

  // Updated Product

  // Get all prods from category

  // Get all product comments

  // Get product like count
}
