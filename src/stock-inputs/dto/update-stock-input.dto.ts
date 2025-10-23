import { PartialType } from '@nestjs/mapped-types';
import { CreateStockInputDto } from './create-stock-input.dto';

export class UpdateStockInputDto extends PartialType(CreateStockInputDto) {}
