import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  ValidationPipe
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUserParamsDto } from './dtos/get-user-params.dto';
import { UpdateUserDto } from './dtos/update-user.dto';



//http://localhost:3000/users
@Controller('users')
export class UsersControllr {


  constructor(private usersService  : UsersService){

  }

  @Get()
  getAllUsers() {
    return this.usersService.getALlUsers();
  }


  @Post()
  createUser(@Body() user:CreateUserDto) {

    this.usersService.createUser(user);
  }

}


