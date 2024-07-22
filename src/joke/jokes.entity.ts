import { PrimaryGeneratedColumn, BaseEntity, Column, Entity } from 'typeorm';

@Entity()
export class Joke extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  jokeType: string;

  @Column()
  joke: string;

  @Column()
  submitter: string;

}