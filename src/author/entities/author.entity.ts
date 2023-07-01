import { Book } from 'src/book/entities/book.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import countries from 'utils/countries';

@Entity()
export class Author {
  @PrimaryColumn({ length: 8 })
  dni: string;
  @PrimaryColumn()
  dni_nationality: countries;
  @Column()
  name: string;
  @Column()
  birthDate: Date;
  @OneToMany(() => Book, (book) => book.author)
  books: Book[];
}
