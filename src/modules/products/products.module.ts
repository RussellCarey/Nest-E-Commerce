import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Product } from 'src/modules/products/entities/Product.entity';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  // Make it so we can inject
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
