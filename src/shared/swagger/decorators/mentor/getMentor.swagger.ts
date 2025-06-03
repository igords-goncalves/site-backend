import {
  applyDecorators,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { PaginatedMentorResponseDTO } from 'src/modules/mentor/dto/paginated-mentor-response.dto';

export function GetMentorSwagger() {
  return applyDecorators(
    ApiOperation({
      summary:
        'Resgata um mentor do banco por email ou todos, se nenhum email for fornecido',
    }),
    ApiQuery({
      name: 'email',
      description: 'Email do mentor (opcional)',
      required: false,
      type: String,
    }),
    ApiResponse({
      status: 200,
      description: 'Sucesso',
      type: PaginatedMentorResponseDTO,
    }),
    ApiResponse({
      status: 400,
      description: 'Erro ao requisitar o mentor',
      type: BadRequestException,
    }),
    ApiResponse({
      status: 404,
      description: 'Mentor não encontrado',
      type: NotFoundException,
    }),
  );
}
