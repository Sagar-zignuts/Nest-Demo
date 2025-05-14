import { forwardRef, Module } from "@nestjs/common";
import { UsersControllr } from "./users.controller";
import { UsersService } from "./users.service";
import { User } from "./user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Profile } from "src/profile/profile.entity";

@Module({
    controllers : [UsersControllr],
    providers : [UsersService],
    exports : [UsersService],
    imports : [TypeOrmModule.forFeature([User , Profile])]
})
export class UsersModule{}