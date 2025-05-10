import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateJuniorDto } from './dtos/create-junior-dto';
import { JuniorMDBEntity } from 'src/database/entities/juniormdb.mongo-entity';

@Injectable()
export class JuniorsService {
  constructor(
    @InjectRepository(JuniorMDBEntity, 'mongoConnection')
    private readonly juniormdbRepository: Repository<JuniorMDBEntity>,
  ) {}

  async create(createJuniorDto: CreateJuniorDto): Promise<JuniorMDBEntity> {
    const juniorMDB = this.juniormdbRepository.create({
      ...createJuniorDto,
      startDate: new Date(createJuniorDto.startDate),
    });

    return this.juniormdbRepository.save(juniorMDB);
  }

  async findJuniorByEmail(email: string): Promise<JuniorMDBEntity> {
    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      throw new BadRequestException('Email inválido.');
    }

    const junior = await this.juniormdbRepository.findOne({ where: { email } });
    if (!junior) {
      throw new NotFoundException('Junior não encontrado.');
    }

    return junior;
  }

  async findAll(): Promise<JuniorMDBEntity[]> {
    const juniors = await this.juniormdbRepository.find();

    if (!juniors) {
      throw new NotFoundException('Nenhum dado encontrado.');
    }

    return juniors;
  }
}
