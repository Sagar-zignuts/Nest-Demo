import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TweetService {

    constructor(private readonly userService : UsersService) {
        
    }

    tweets : {text : String, date : Date, userId : Number}[]=
        [
            {text : "Some Text", date : new Date('2024-2-2'),  userId : 1},
            {text : "Some other Text", date : new Date('2024-12-2'),  userId : 2},
            {text : "Some other other Text", date : new Date('2024-7-2'),  userId : 3}
]

// getTweet(userid  : Number){
//     const user = this.userService.getUserById(userid)
//     const tweets = this.tweets.filter(x=> x.userId === userid)
//     const responce = tweets.map(t => { return {text : t.text , date : t.date , name : user?.name}});
//     return responce
// }
}
