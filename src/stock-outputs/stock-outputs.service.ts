import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundError } from 'src/products/errors';
import { CreateStockOutputDto } from './dto/create-stock-output.dto';

@Injectable()
export class StockOutputsService {
  constructor(private prismaService: PrismaService) {}

  async create(createOutputInputDto: CreateStockOutputDto) {
    const product = await this.prismaService.product.findUnique({
      where: {
        id: createOutputInputDto.product_id,
      },
    });
    if (!product) {
      throw new NotFoundError('Product not found');
    }
    const result = await this.prismaService.$transaction([
      this.prismaService.stockInput.create({
        data: {
          productId: createOutputInputDto.product_id,
          quantity: createOutputInputDto.quantity,
          date: createOutputInputDto.date,
        },
      }),
      this.prismaService.product.update({
        where: {
          id: createOutputInputDto.product_id,
        },
        data: {
          quantity: {
            increment: createOutputInputDto.quantity,
          },
        },
      }),
    ]);
    return result[0];
  }

  async findOne(id: number) {
    try {
      return await this.prismaService.stockInput.findUniqueOrThrow({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Stock Input with ID ${id} not found`);
      }
    }
  }
}
