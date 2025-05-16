import { IsArray, IsIn, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateTweetDTO{

    @IsString()
    @IsNotEmpty()
    text : string

    @IsOptional()
    image? : string

    @IsInt()
    @IsNotEmpty()
    userId : number


    @IsOptional()
    @IsInt({each : true})
    @IsArray()
    hashtag? : number[]
}