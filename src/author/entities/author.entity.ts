import { Book } from 'src/book/entities/book.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Author {
  @Column()
  name: string;
  @Column()
  birthDate: Date;
  @OneToMany(() => Book, (book) => book.author)
  books: Book[];
}
