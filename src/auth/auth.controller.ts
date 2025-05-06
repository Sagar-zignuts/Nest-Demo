import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService : AuthService) {
        
    }

    @Post()
    login(@Body() user : { email : String , password : String}){
        return this.authService.login(user.email , user.password)
        
    }
}
