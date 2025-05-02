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
  @Get(':isMarried')
  getAllUsers(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Param() param:GetUserParamsDto
  ) {
    console.log(param);

    const usersService = new UsersService();
    return usersService.getALlUsers();
  }

  @Get(':id')
  getUSerById(@Param('id', ParseIntPipe) id: any) {
    const usersService = new UsersService();
    return usersService.getUserById(id);
  }

  @Post()
  createUser(@Body() user:CreateUserDto) {

    const usersService = new UsersService();
    console.log(user instanceof CreateUserDto);
    usersService.createUser(user);
    return 'User created';
  }

  @Patch()
  updateUser(@Body() body:UpdateUserDto){
    console.log(body);
    
  }
}


