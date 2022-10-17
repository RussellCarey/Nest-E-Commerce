import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from 'src/config/config.service';
import { ProductsController } from '../products/products.controller';
import { ProductsService } from '../products/products.service';

@Module({
  imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig())],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class AppModule {}
