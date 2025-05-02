import { IsBoolean, IsEmail, IsIn, IsInt, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    
    @IsInt()
    id : number;

    @IsString({message : "Name should be string only"}) // Custom Error message
    @IsNotEmpty()
    @MinLength(2 ,{message : "Name should have minimum 3 char"})
    name :string;

    @IsString()
    @IsOptional()
    @IsIn(['male', 'female', 'other' ],  {message : "Should be male , female or other"})
    gender: string;

    @IsEmail()
    email : string;

    @IsBoolean()
    isMarried : boolean;
}