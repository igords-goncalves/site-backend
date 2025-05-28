import { ApiProperty } from '@nestjs/swagger';
import { ObjectId, ObjectIdColumn } from 'typeorm';

export class MentorResponseDTO {
  @ObjectIdColumn()
  id: ObjectId;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  linkedin: string;

  @ApiProperty()
  indication: boolean;

  @ApiProperty()
  linkedinIndication: string;

  @ApiProperty()
  turn: boolean;

  @ApiProperty()
  availability: string;

  @ApiProperty()
  startOption: string;

  @ApiProperty()
  startDate: Date;

  @ApiProperty()
  area: number;

  @ApiProperty()
  subarea: number;

  @ApiProperty()
  experienceTime: string;

  @ApiProperty()
  jobExperience: string;

  @ApiProperty()
  volunteerMotivation: string;

  @ApiProperty()
  otherExperiences: string;

  @ApiProperty()
  contactAgreement: boolean;

  @ApiProperty()
  volunteeringAgreement: boolean;

  @ApiProperty()
  termsAgreement: boolean;
}
