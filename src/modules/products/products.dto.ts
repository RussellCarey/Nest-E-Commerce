import { IsNotEmpty, IsString } from 'class-validator';

class ProductDTO {
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}

export { ProductDTO };
