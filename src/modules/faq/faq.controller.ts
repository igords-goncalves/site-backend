import {
  Controller,
  Get,
  Post,
  Body,
  BadRequestException,
} from '@nestjs/common';
import { FaqService } from './faq.service';

import { CreateFaqDto } from './dto/create-faq.dto';

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FaqEntity } from 'src/database/entities/faq.mongo-entity';

@ApiTags('FAQ')
@Controller('faq')
export class FaqController {
  constructor(private readonly faqService: FaqService) {}

  @ApiOperation({
    summary:
      'Registra uma pergunta feita no formulário de FAQ no Banco de Dados',
  })
  @ApiResponse({
    status: 200,
    description: 'Sucesso',
    type: CreateFaqDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Erro',
    type: BadRequestException,
  })
  @Post()
  async create(@Body() createFaqDto: CreateFaqDto): Promise<FaqEntity> {
    const faqQuestion = await this.faqService.create(createFaqDto);
    return faqQuestion;
  }

  @Get()
  findAll() {
    return this.faqService.findAll();
  }
}
