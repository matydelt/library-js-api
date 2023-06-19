import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({ name: 'title', nullable: false })
  title: string;
  @ApiProperty({ name: 'author', type: 'id' })
  author: string;
}
