import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

class ProductCommentDTO {
  @IsNotEmpty()
  @IsString()
  comment: string;

  @IsNotEmpty()
  @IsNumber()
  product_id: number;

  @IsNotEmpty()
  @IsNumber()
  user_id: number;
}

export { ProductCommentDTO };
