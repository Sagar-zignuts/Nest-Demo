import { PartialType } from "@nestjs/mapped-types";
import { CreateTweetDTO } from "./create-tweet.dto";
import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateTweetDTO extends PartialType(CreateTweetDTO){
    
    @IsInt()
    @IsNotEmpty()
    id : number

}