import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HashTag } from './hashtag.entity';
import { In, Repository } from 'typeorm';
import { CreateHashTagDTO } from './dto/create-hashtag.dto';

@Injectable()
export class HashtagService {
  constructor(
    @InjectRepository(HashTag)
    private hashtagRepository: Repository<HashTag>,
  ) {}

  public async createHashtag(createHashTagDTO: CreateHashTagDTO) {
    let hashtag = await this.hashtagRepository.create(createHashTagDTO);
    return await this.hashtagRepository.save(hashtag);
  }

  public async findHashtags(hashtags: number[]) {
    return await this.hashtagRepository.find({
      where: { id: In(hashtags) },
    });
  }

  public async deleteHahstag(id : number){
    await this.hashtagRepository.delete({id})

    return {
      deleted : true,
      id
    }
  }

  public async softDeleteHashtag(id : number){
    await  this.hashtagRepository.softDelete({id})
    return {
      softDeleted : true,
      id
    }
  }
}
