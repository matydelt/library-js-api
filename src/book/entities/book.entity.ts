import { Author } from 'src/author/entities/author.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @Column('varchar')
  title: string;
  @Column('varchar')
  prologue: string;
  @Column('varchar')
  pdf: string;
  @Column('date')
  date: Date;
  @Column('boolean')
  free: boolean;
  @ManyToOne(() => Author, (Author) => Author.books)
  author: string;
}
