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
exports.CollectionsController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const collections_service_1 = require("./collections.service");
const collection_dto_1 = require("./dto/collection.dto");
const items_service_1 = require("./items.service");
let CollectionsController = class CollectionsController {
    constructor(service, itemService) {
        this.service = service;
        this.itemService = itemService;
    }
    async collections(response, req) {
        const data = await this.service.findAllByUser(req.user.id);
        return response.status(common_1.HttpStatus.OK).json({
            "status": "success",
            "message": "successful operation",
            "data": data
        });
    }
    async getById(response, id) {
        const data = await this.service.findOne(id);
        return response.status(common_1.HttpStatus.OK).json({
            "status": "success",
            "message": "successful operation",
            "data": data
        });
    }
    ;
    async create(response, req, collectionDTO) {
        const data = await this.service.create(req.user, collectionDTO);
        return response.status(common_1.HttpStatus.OK).json({
            "status": "success",
            "message": "successful operation",
            "data": data
        });
    }
    ;
    async getItems(response, id) {
        const data = await this.itemService.findAllByCollection(id);
        return response.status(common_1.HttpStatus.OK).json({
            "status": "success",
            "message": "successful operation",
            "data": data
        });
    }
    ;
    async addItem(response, item, id) {
        const data = await this.itemService.add(item);
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
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Response)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CollectionsController.prototype, "collections", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Response)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CollectionsController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Response)()),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, collection_dto_1.CollectionDTO]),
    __metadata("design:returntype", Promise)
], CollectionsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id/items'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Response)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CollectionsController.prototype, "getItems", null);
__decorate([
    (0, common_1.Post)(':id/add-item'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Response)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String]),
    __metadata("design:returntype", Promise)
], CollectionsController.prototype, "addItem", null);
CollectionsController = __decorate([
    (0, common_1.Controller)('collections'),
    __metadata("design:paramtypes", [collections_service_1.CollectionsService,
        items_service_1.ItemsService])
], CollectionsController);
exports.CollectionsController = CollectionsController;
//# sourceMappingURL=collections.controller.js.map