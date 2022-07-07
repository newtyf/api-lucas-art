import { Controller, Get, HttpStatus, Param, Response } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BookController {
    constructor(
        private readonly service: BooksService
    ) {}

    @Get()
    async books(@Response() response) {
        const data = await this.service.findAll();
        return response.status(HttpStatus.OK).json({
            "status": "success",
            "message": "successful operation",
            "data": data
        });
    };

    @Get(':isbn')
    async getFromISBN(@Response() response, @Param('isbn') isbn: string) {
        const data = await this.service.findOne(isbn);
        return response.status(HttpStatus.OK).json({
            "status": "success",
            "message": "successful operation",
            "data": data
        });
    };
}
