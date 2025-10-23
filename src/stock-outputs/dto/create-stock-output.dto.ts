import { IsDate, IsInt, IsNotEmpty, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateStockOutputDto {
  @IsPositive()
  @IsInt()
  @IsNotEmpty()
  product_id: number;
  @IsPositive()
  @IsInt()
  @IsNotEmpty()
  quantity: number;
  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  date: string;
}
