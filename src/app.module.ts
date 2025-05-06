import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TweetModule } from './tweet/tweet.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';

@Module({
  imports: [UsersModule ,TweetModule, AuthModule , TypeOrmModule.forRootAsync({
    imports : [],
    inject : [],
    useFactory : () => ({
      type : 'postgres',
      entities : [User],
      synchronize: true,
      username : 'postgres',
      password : "password",
      database : 'demo-nest',
      port : 5432,
      host : 'localhost'
    })
    
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
