import { Book } from 'src/book/entities/book.entity';

export class CreateAuthorDto {
  name: string;
  birthDate: Date;
  book: Book;
  books: Book[];
}
