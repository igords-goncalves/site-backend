import { Module } from '@nestjs/common';
import { FaqService } from './faq.service';
import { FaqController } from './faq.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FaqEntity } from 'src/database/entities/faq.mongo-entity';

@Module({
  imports: [TypeOrmModule.forFeature([FaqEntity], 'mongoConnection')],
  controllers: [FaqController],
  providers: [FaqService],
})
export class FaqModule {}
