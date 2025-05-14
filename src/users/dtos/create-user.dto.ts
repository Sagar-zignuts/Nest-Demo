import { IsBoolean, IsEmail, IsIn, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { CreateProfileDTO } from "src/profile/dtos/create-profile.dto";

export class CreateUserDto {


    @IsEmail()
    @IsNotEmpty()
    @MaxLength(100)
    email : string;

    @IsNotEmpty()
    @MaxLength(30)
    username : string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(100)
    password : string;

    @IsOptional()
    profile? : CreateProfileDTO | undefined;
}