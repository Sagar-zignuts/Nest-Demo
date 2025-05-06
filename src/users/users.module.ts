import { forwardRef, Module } from "@nestjs/common";
import { UsersControllr } from "./users.controller";
import { UsersService } from "./users.service";
import { AuthModule } from "src/auth/auth.module";
import { User } from "./user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    controllers : [UsersControllr],
    providers : [UsersService],
    exports : [UsersService],
    imports : [TypeOrmModule.forFeature([User])]
})
export class UsersModule{}