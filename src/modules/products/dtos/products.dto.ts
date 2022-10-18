import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

class ProductDTO {
  @IsString()
  product_name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  image: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNumber()
  discount_percent: number;

  @IsNumber()
  view_count: number;

  @IsNotEmpty()
  @IsNumber()
  seller_id: number;

  @IsNumber()
  buyer_id: number;

  @IsNotEmpty()
  @IsNumber()
  category_id: number;
}

export { ProductDTO };
