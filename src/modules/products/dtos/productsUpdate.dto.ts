import { IsOptional, IsNumber, IsString } from 'class-validator';

class ProductUpdateDTO {
  @IsOptional()
  @IsString()
  product_name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  image: string;

  @IsOptional()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsNumber()
  discount_percent: number;

  @IsOptional()
  @IsNumber()
  view_count: number;

  @IsOptional()
  @IsNumber()
  seller_id: number;

  @IsOptional()
  buyer_id: number;

  @IsOptional()
  @IsNumber()
  category_id: number;
}

export { ProductUpdateDTO };
