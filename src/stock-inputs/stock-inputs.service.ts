import { Injectable } from '@nestjs/common';
import { CreateStockInputDto } from './dto/create-stock-input.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundError } from 'src/products/errors';

@Injectable()
export class StockInputsService {
  constructor(private prismaService: PrismaService) {}

  async create(createStockInputDto: CreateStockInputDto) {
    const product = await this.prismaService.product.findUnique({
      where: {
        id: createStockInputDto.product_id,
      },
    });
    if (!product) {
      throw new NotFoundError('Product not found');
    }
    const result = await this.prismaService.$transaction([
      this.prismaService.stockInput.create({
        data: {
          productId: createStockInputDto.product_id,
          quantity: createStockInputDto.quantity,
          date: createStockInputDto.date,
        },
      }),
      this.prismaService.product.update({
        where: {
          id: createStockInputDto.product_id,
        },
        data: {
          quantity: {
            increment: createStockInputDto.quantity,
          },
        },
      }),
    ]);
    return result[0];
  }

  findAll() {
    return `This action returns all stockInputs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stockInput`;
  }
}
