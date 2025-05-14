import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { CreateTweetDTO } from './dto/create-tweet.dto';

// http://localhost:3000/tweet
@Controller('tweet')
export class TweetController {

    constructor (private tweetService : TweetService){

    }


    //http://localhost:3000/tweet/:userid
// @Get(':userid')
// public getTweet(@Param("userid" ,ParseIntPipe) userid : number){
//     return this.tweetService.getTweet(userid);   
// }

@Get(':userId')
public GetTweet(@Param('userId', ParseIntPipe) userId:number){
    return this.tweetService.getTweets(userId)
}

@Post()
public CreateTweet(@Body() tweet : CreateTweetDTO){
    return this.tweetService.CreateTweet(tweet)
}
}
