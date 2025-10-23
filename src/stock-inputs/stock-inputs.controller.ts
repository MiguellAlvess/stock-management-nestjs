import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StockInputsService } from './stock-inputs.service';
import { CreateStockInputDto } from './dto/create-stock-input.dto';
import { UpdateStockInputDto } from './dto/update-stock-input.dto';

@Controller('stock-inputs')
export class StockInputsController {
  constructor(private readonly stockInputsService: StockInputsService) {}

  @Post()
  create(@Body() createStockInputDto: CreateStockInputDto) {
    return this.stockInputsService.create(createStockInputDto);
  }

  @Get()
  findAll() {
    return this.stockInputsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockInputsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStockInputDto: UpdateStockInputDto) {
    return this.stockInputsService.update(+id, updateStockInputDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockInputsService.remove(+id);
  }
}
