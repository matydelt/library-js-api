import { CreateBookDto } from '../dto/create-book.dto';
import { Book } from '../entities/book.entity';
import { BookBuilder } from './book.builder';

export class postBookContructor implements BookBuilder {
  protected book: Book;

  setBook(book: CreateBookDto) {
    this.book.title = book.title;
    this.book.date = book.date;
    this.book.prologue = book.prologue;
  }

  setPdf(pdf: string): void {
    this.book.pdf = pdf;
  }

  public getBook(): Book {
    const book = this.book;
    this.book = new Book();
    return book;
  }
}
