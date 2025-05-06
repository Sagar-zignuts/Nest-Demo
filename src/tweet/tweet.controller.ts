import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TweetService } from './tweet.service';

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
}
