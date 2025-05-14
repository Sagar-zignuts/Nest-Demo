import {
  IsDate,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateProfileDTO {
  @IsString({ message: 'first name should have a minimum of 3 characters.' })
  @MinLength(3, { message: 'firstname should have a minimum of 3 charaters.' })
  @MaxLength(100)
  @IsOptional()
  name?: string;

  @IsString({ message: 'last name should have a minimum of 3 characters.' })
  @MinLength(3, { message: 'last should have a minimum of 3 charaters.' })
  @MaxLength(100)
  @IsOptional()
  lastname?: string;

  @IsString()
  @IsOptional()
  @MaxLength(10)
  gender?: string;

  @IsOptional()
  @IsDate()
  dateOfBirth?: Date;

  @IsString()
  @IsOptional()
  bio?: string;

  @IsString()
  @IsOptional()
  profileImage?: string;
}
