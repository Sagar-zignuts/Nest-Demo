import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { Tweet } from './tweet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTweetDTO } from './dto/create-tweet.dto';

@Injectable()
export class TweetService {
  constructor(
    private readonly userService: UsersService,
    @InjectRepository(Tweet)
    private TweetRepository: Repository<Tweet>,
  ) {}

  public async getTweets(userId: number) {
    return await this.TweetRepository.find({
        where : {
            user : {id:userId},
            
        },
        relations : { //Eager Loding nu short cut , or second way
            user : true
        }
    })


  }

  public async CreateTweet(createTweetDTO: CreateTweetDTO) {
    const user = await this.userService.findUserById(createTweetDTO.userId);

    if (!user) {
      throw new NotFoundException(`User with ID ${createTweetDTO.userId} not found`);
    }

    const tweet = this.TweetRepository.create({
      text: createTweetDTO.text,
      image: createTweetDTO.image,
    });

    tweet.user = user; // Assign the user relation explicitly

    return await this.TweetRepository.save(tweet);
  }
}