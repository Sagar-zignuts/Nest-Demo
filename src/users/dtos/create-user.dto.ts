import { IsBoolean, IsEmail, IsIn, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {

    @IsString({message : "Name should be string only"}) // Custom Error message
    @IsNotEmpty()
    @MinLength(3 ,{message : "Name should have minimum 3 char"})
    @MaxLength(100)
    name :string;

    @IsString({message : "Name should be string only"}) // Custom Error message
    @IsNotEmpty()
    @MinLength(3 ,{message : "Name should have minimum 3 char"})
    @MaxLength(100)
    lastname :string;

    @IsString()
    @IsOptional()
    @IsIn(['male', 'female', 'other' ],  {message : "Should be male , female or other"})
    gender: string;

    @IsEmail()
    @IsNotEmpty()
    @MaxLength(100)
    email : string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(100)
    password : string;
}