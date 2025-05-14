import { Body, forwardRef, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { Profile } from 'src/profile/profile.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  getALlUsers() {
    return this.userRepository.find({
      relations : {
        profile : true
      }
    });
  }

  public async createUser(userDto: CreateUserDto) {
    // userDto.profile = userDto.profile ?? {}
    // let profile  =this.profileRepository.create(userDto.profile);
    userDto.profile = userDto.profile ?? {}
    let user  =this.userRepository.create(userDto)

    return this.userRepository.save(user)
  }

  public async deleteUser (id : number) {
    // let user = await this.userRepository.findOneBy({id : id})

    // if (!user) {
    //     return "User is not awailable"
    // }

    await this.userRepository.delete(id)

    // await this.profileRepository.delete(user.profile.id)

    return "Deleted"
  }
 async findUserById(id: number): Promise<User | undefined> {
    const user = await this.userRepository.findOne({ where: { id } });
    return user || undefined; // Returns User or undefined if not found
  }
}
