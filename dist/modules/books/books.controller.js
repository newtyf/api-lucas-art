"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const common_1 = require("@nestjs/common");
const books_service_1 = require("./books.service");
let BookController = class BookController {
    constructor(service) {
        this.service = service;
    }
    async books(response) {
        const data = await this.service.findAll();
        return response.status(common_1.HttpStatus.OK).json({
            "status": "success",
            "message": "successful operation",
            "data": data
        });
    }
    ;
    async getFromISBN(response, isbn) {
        const data = await this.service.findOne(isbn);
        return response.status(common_1.HttpStatus.OK).json({
            "status": "success",
            "message": "successful operation",
            "data": data
        });
    }
    ;
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "books", null);
__decorate([
    (0, common_1.Get)(':isbn'),
    __param(0, (0, common_1.Response)()),
    __param(1, (0, common_1.Param)('isbn')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "getFromISBN", null);
BookController = __decorate([
    (0, common_1.Controller)('books'),
    __metadata("design:paramtypes", [books_service_1.BooksService])
], BookController);
exports.BookController = BookController;
//# sourceMappingURL=books.controller.js.map