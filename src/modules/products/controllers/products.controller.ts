import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { OrderByPipe } from 'src/pipes/orderby.pipe';
import { OptionalIntPipe } from 'src/pipes/optionalInt.pipe';
import { ProductsService } from '../services/products.service';
import { ProductDTO } from '../dtos/products.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  // Get single product
  @Get(':productId')
  async getProduct(
    @Param('productId', ParseIntPipe) productId: number,
  ): Promise<any> {
    const product = await this.productService.getProduct(productId);
    return { message: 'Retrieved product', data: product };
  }

  // Get all products
  @Get()
  async getAllProducts(
    @Query('skip', OptionalIntPipe) skip?: number,
    @Query('take', OptionalIntPipe) take?: number,
    @Query('order', OrderByPipe) order?: Record<string, 'ASC' | 'DESC'>,
  ): Promise<any> {
    const products = await this.productService.getAllProducts({
      skip,
      take,
      order,
    });
    return { message: 'Retrieved Products', data: products };
  }

  // Create product
  @Post()
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
