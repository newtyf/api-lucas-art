import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book, BookDocument} from './schema/book.schema';

@Injectable()
export class BooksService {
    constructor(@InjectModel(Book.name) private model: Model<BookDocument>) {}

    async findAll(): Promise<Book[]> {
        return await this.model.find({"show": true}).exec();
    }

    async findOne(isbn: string): Promise<Book> {
        return await this.model.findOne({"isbn": isbn}).exec();
    }
}
