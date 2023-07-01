import { Book } from '../entities/book.entity';

export interface BookBuilder {
  setBook(book: Book): void;
  setPrologue(pdf: string): void;
  getBook(): Book;
}
