import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
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

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id : number){
    console.log(id);
    
    return this.usersService.deleteUser(id)
  }

}


