import { Tweet } from "src/tweet/tweet.entity";
import { Column, DeleteDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class HashTag{
    @PrimaryGeneratedColumn()
    id : number

    @Column({
        type : 'text',
        nullable : false,
        unique : true
    })
    name : string

    @DeleteDateColumn()
    deletedAt : Date

    @ManyToMany(()=>Tweet, (tweet)=>tweet.hashtag ,{onDelete : 'CASCADE'})
    tweet: Tweet[];
    
}