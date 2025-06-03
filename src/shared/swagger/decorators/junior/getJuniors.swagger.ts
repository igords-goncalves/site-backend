import {
  applyDecorators,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { PaginatedJuniorResponseDTO } from 'src/modules/juniors/dtos/paginated-junior.dto';

export function GetJuniorsSwagger() {
  return applyDecorators(
    ApiOperation({
      summary:
        'Resgata um junior do banco por email ou todos, se nenhum email for fornecido',
    }),
    ApiQuery({
      name: 'email',
      description: 'Email do júnior (opcional)',
      required: false,
      type: String,
    }),
    ApiResponse({
      status: 200,
      description: 'Sucesso',
      type: PaginatedJuniorResponseDTO,
    }),
    ApiResponse({
      status: 400,
      description: 'Erro ao requisitar o júnior',
      type: BadRequestException,
    }),
    ApiResponse({
      status: 404,
      description: 'Júnior não encontrado',
      type: NotFoundException,
    }),
  );
}
