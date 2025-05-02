import { Type } from "class-transformer";
import { IsBoolean, IsOptional } from "class-validator";

export class GetUserParamsDto {
    @IsBoolean()
    @IsOptional()
    @Type(()=> Boolean)
    isMarried : boolean
}