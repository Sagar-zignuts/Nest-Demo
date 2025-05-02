import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.dto";


PartialType

export class UpdateUserDto extends PartialType(CreateUserDto) { //Aa(PartialType) badha CreateUserDto ni validation ne maintain rakhine pachi UpdateUserDto ma add krse and badhi property ne Optional banavi dese automatically  
    
}