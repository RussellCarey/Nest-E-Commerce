import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from 'src/config/config.service';
import { ProductsModule } from '../products/modules/products.module';
import { ThrottlerModule } from '@nestjs/throttler';

// Need to add MODULES to the imports
@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    ProductsModule,
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 30,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
