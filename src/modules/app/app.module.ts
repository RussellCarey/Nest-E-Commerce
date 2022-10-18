import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from 'src/config/config.service';
import { ProductsModule } from '../products/products.module';

// Need to add MODULES to the imports
@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
