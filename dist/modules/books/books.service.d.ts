import { Model } from 'mongoose';
import { Book, BookDocument } from './schema/book.schema';
export declare class BooksService {
    private model;
    constructor(model: Model<BookDocument>);
    findAll(): Promise<Book[]>;
    findOne(isbn: string): Promise<Book>;
}
