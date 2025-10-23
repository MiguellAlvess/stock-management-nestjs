import { Module } from '@nestjs/common';
import { StockInputsService } from './stock-inputs.service';
import { StockInputsController } from './stock-inputs.controller';

@Module({
  controllers: [StockInputsController],
  providers: [StockInputsService],
})
export class StockInputsModule {}
