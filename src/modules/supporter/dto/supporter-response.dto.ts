import { ApiProperty } from '@nestjs/swagger';
import { ObjectId, ObjectIdColumn } from 'typeorm';

export class SupporterResponseDTO {
  @ObjectIdColumn()
  id: ObjectId;

  @ApiProperty()
  expertiseAreas?: string;

  @ApiProperty()
  institution?: string;

  @ApiProperty()
  contactAgreement: boolean;

  @ApiProperty()
  describeLinks?: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  opportunitiesDescription?: string;

  @ApiProperty()
  otherSupport?: string;

  @ApiProperty()
  personType: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  suggestion: string;

  @ApiProperty()
  supportOptions: string;

  @ApiProperty()
  termsAgreement: boolean;

  @ApiProperty()
  volunteerMotivation: string;

  @ApiProperty()
  volunteeringAgreement: boolean;

  @ApiProperty()
  hasWhatsApp: boolean;
}
