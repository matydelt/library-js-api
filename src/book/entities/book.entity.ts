import { Author } from 'src/author/entities/author.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  prologue: string;
  @Column()
  pdf: string;
  @ManyToOne(() => Author, (Author) => Author.books)
  author: Author;
}
