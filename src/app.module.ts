import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { AuthorResolver } from './author/author.resolver';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './book/entities/book.entity';
import { Author } from './author/entities/author.entity';
import { LoggerMiddleware } from './logger/logger.middleware';

const ormModule = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'library',
  entities: [Book, Author],
  synchronize: true,
});

@Module({
  imports: [AuthorModule, BookModule, ormModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
