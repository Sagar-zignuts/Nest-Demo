import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { Tweet } from './tweet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTweetDTO } from './dto/create-tweet.dto';
import { HashtagService } from 'src/hashtag/hashtag.service';
import { UpdateTweetDTO } from './dto/update-tweet.dto';

@Injectable()
export class TweetService {
  constructor(
    private readonly userService: UsersService,
    private readonly hashtagService: HashtagService,
    @InjectRepository(Tweet)
    private TweetRepository: Repository<Tweet>,
  ) {}

  public async getTweets(userId: number) {
    return await this.TweetRepository.find({
      where: {
        user: { id: userId },
      },
      relations: {
        //Eager Loding nu short cut , or second way
        user: true,
      },
    });
  }

  public async CreateTweet(createTweetDTO: CreateTweetDTO) {
    const user = await this.userService.findUserById(createTweetDTO.userId);

    if (!user) {
      throw new NotFoundException(
        `User with ID ${createTweetDTO.userId} not found`,
      );
    }

    let hashtag = await this.hashtagService.findHashtags(
      createTweetDTO.hashtag ?? [],
    );

    console.log('Hashtag', hashtag);

    const tweet = this.TweetRepository.create({
      text: createTweetDTO.text,
      image: createTweetDTO.image,
      user: user,
      hashtag: hashtag,
    });

    return await this.TweetRepository.save(tweet);
  }

  public async updateTweet(updaetTweetDTO: UpdateTweetDTO) {
    let hashtag = await this.hashtagService.findHashtags(
      updaetTweetDTO.hashtag ?? [],
    );

    let tweet = await this.TweetRepository.findOneBy({ id: updaetTweetDTO.id });

    if (!tweet) {
      throw new NotFoundException(
        `Tweet with ID ${updaetTweetDTO.id} not found`,
      );
    }

    tweet.text = updaetTweetDTO.text ?? tweet.text;
    tweet.image = updaetTweetDTO.image ?? tweet.image
    tweet.hashtag = hashtag
    
    // if (updaetTweetDTO.image !== undefined) {
    //     tweet.image = updaetTweetDTO.image;
    // }

    // if (updaetTweetDTO.hashtag !== undefined) {
    //     tweet.hashtag = await this.hashtagService.findHashtags(updaetTweetDTO.hashtag);
    // }

    return await this.TweetRepository.save(tweet)
  }

  public async deleteTweet(id : number){
    await this.TweetRepository.delete({id : id})
    return {deleted : true , id}
  }

}
