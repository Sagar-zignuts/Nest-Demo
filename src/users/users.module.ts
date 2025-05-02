import { Module } from "@nestjs/common";
import { UsersControllr } from "./users.controller";

@Module({
    controllers : [UsersControllr]
})
export class UsersModule{}