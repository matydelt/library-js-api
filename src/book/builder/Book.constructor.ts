import { CreateBookDto } from '../dto/create-book.dto';
import { Book } from '../entities/book.entity';
import { BookBuilder } from './book.builder';

export class BookContructor implements BookBuilder {
  protected book: Book;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.book = new Book();
  }

  public setBook(book: CreateBookDto) {
    this.book.title = book.title;
    this.book.date = book.date;
  }

  public setPrologue(pdf: string) {
    this.book.prologue = pdf;
  }

  public getBook(): Book {
    const book = this.book;
    this.reset();
    return book;
  }
}
