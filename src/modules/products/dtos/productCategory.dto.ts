import { IsNotEmpty, IsString } from 'class-validator';

class ProductCategoryDTO {
  @IsNotEmpty()
  @IsString()
  category: string;
}

export { ProductCategoryDTO };
