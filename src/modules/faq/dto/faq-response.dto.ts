import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongodb';

export class FaqResponseDTO {
  @ApiProperty()
  id: ObjectId;

  @ApiProperty()
  type: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  message: string;

  @ApiProperty()
  createdAt: Date;
}
