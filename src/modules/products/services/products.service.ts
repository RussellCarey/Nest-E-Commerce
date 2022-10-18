import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/modules/products/entities/Product.entity';
import { Repository } from 'typeorm';
import { ProductDTO } from '../dtos/products.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  async getProduct(id: number): Promise<Product> {
    const product = await this.productRepository.findOneBy({
      id: id,
    });
    return product;
  }

  async getAllProducts(params: {
    skip?: number;
    take?: number;
  }): Promise<Product[]> {
    const { skip, take } = params;
    const product = await this.productRepository.find({ skip, take });
    return product;
  }

  async createProduct(prod: ProductDTO): Promise<Product> {
    const product = await this.productRepository.save(prod);
    console.log(product);
    return product;
  }
}
