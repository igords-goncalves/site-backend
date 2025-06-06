import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateFaqDto } from './dto/create-faq.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FaqEntity } from 'src/database/entities/faq.mongo-entity';
import { Repository } from 'typeorm';

@Injectable()
export class FaqService {
  constructor(
    @InjectRepository(FaqEntity, 'mongoConnection')
    private readonly faqEntityRepo: Repository<FaqEntity>,
  ) {}

  async create(createFaqDto: CreateFaqDto) {
    const faqQuestion = this.faqEntityRepo.create({
      ...createFaqDto,
    });

    if (!faqQuestion) {
      throw new BadRequestException('Pergunta não criada');
    }

    return this.faqEntityRepo.save(faqQuestion);
  }

  findAll() {
    return `This action returns all faq`;
  }
}
