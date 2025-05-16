import { Body, Controller, Delete, Param, ParseIntPipe, Post } from '@nestjs/common';
import { HashtagService } from './hashtag.service';
import { CreateHashTagDTO } from './dto/create-hashtag.dto';

@Controller('hashtag')
export class HashtagController {
  constructor(private hashtagService: HashtagService) {}

  @Post()
  public async CreateNewHashtag(@Body() createHashTagDTO : CreateHashTagDTO){
    return await this.hashtagService.createHashtag(createHashTagDTO)
  }

  @Delete(":id")
  public deleteHashtag(@Param("id" , ParseIntPipe) id : number){
    this.hashtagService.deleteHahstag(id)
    return {
      deleted : true,
      id
    }
  }

  @Delete('softDelete/:id')
  public softDeleteHashtag(@Param('id' ,ParseIntPipe) id : number){
    return this.hashtagService.softDeleteHashtag(id)
  }
}
