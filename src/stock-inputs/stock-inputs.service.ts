import { Injectable } from '@nestjs/common';
import { CreateStockInputDto } from './dto/create-stock-input.dto';
import { UpdateStockInputDto } from './dto/update-stock-input.dto';

@Injectable()
export class StockInputsService {
  create(createStockInputDto: CreateStockInputDto) {
    return 'This action adds a new stockInput';
  }

  findAll() {
    return `This action returns all stockInputs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stockInput`;
  }

  update(id: number, updateStockInputDto: UpdateStockInputDto) {
    return `This action updates a #${id} stockInput`;
  }

  remove(id: number) {
    return `This action removes a #${id} stockInput`;
  }
}
