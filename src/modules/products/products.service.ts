import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/modules/products/entities/Product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  async getOne(): Promise<Product> {
    const product = await this.productRepository.findOneBy({ id: '1' });
    return product;
  }
}
