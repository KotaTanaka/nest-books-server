import { Module } from '@nestjs/common';
import { HelloController } from '@/api/hello.controller';
import { BooksModule } from '@/api/books/books.module';

@Module({
  imports: [BooksModule],
  controllers: [HelloController],
})
export class BooksApiModule {}
