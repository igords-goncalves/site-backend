import {
  applyDecorators,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { PaginatedHeadResponseDTO } from 'src/modules/head/dto/pagineted-head.dto';

export function GetHeadSwagger() {
  return applyDecorators(
    ApiOperation({
      summary:
        'Resgata um head do banco por email ou todos, se nenhum email for fornecido',
    }),
    ApiQuery({
      name: 'email',
      description: 'Email do head (opcional)',
      required: false,
      type: String,
    }),
    ApiResponse({
      status: 200,
      description: 'Sucesso',
      type: PaginatedHeadResponseDTO,
    }),
    ApiResponse({
      status: 400,
      description: 'Erro ao requisitar o head',
      type: BadRequestException,
    }),
    ApiResponse({
      status: 404,
      description: 'Head não encontrado',
      type: NotFoundException,
    }),
  );
}
