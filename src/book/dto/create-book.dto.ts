import { ApiProperty } from '@nestjs/swagger';
import { Book } from '../entities/book.entity';

export class CreateBookDto {
  @ApiProperty({ name: 'title', nullable: false })
  title: string;
  @ApiProperty({ name: 'author', type: 'id' })
  author: string;
  @ApiProperty({ name: 'prologue' })
  prologue: string;
  @ApiProperty({ name: 'date' })
  date: Date;
  @ApiProperty({ name: 'pdf' })
  pdf: string;
  @ApiProperty({ name: 'free' })
  free: boolean;
}
