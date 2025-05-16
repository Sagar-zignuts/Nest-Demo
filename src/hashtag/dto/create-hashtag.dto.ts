import { IsNotEmpty, IsString } from "class-validator";

export class CreateHashTagDTO{
    
    @IsString()
    @IsNotEmpty()
    name : string
}