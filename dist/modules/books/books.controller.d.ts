import { BooksService } from './books.service';
export declare class BookController {
    private readonly service;
    constructor(service: BooksService);
    books(response: any): Promise<any>;
    getFromISBN(response: any, isbn: string): Promise<any>;
}
