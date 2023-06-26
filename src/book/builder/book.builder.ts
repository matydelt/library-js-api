import { Author } from 'src/author/entities/author.entity';
import { Book } from '../entities/book.entity';

export interface BookBuilder {
  getBook(): Book;
  getAuthor(): Author;
  getAuthorId(): string;
}
