"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const collections_controller_1 = require("./collections.controller");
const collections_service_1 = require("./collections.service");
const items_service_1 = require("./items.service");
const collection_schema_1 = require("./schema/collection.schema");
const item_schema_1 = require("./schema/item.schema");
let CollectionsModule = class CollectionsModule {
};
CollectionsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: collection_schema_1.Collection.name,
                    schema: collection_schema_1.CollectionSchema,
                    collection: 'collections'
                },
                {
                    name: item_schema_1.Item.name,
                    schema: item_schema_1.ItemSchema,
                    collection: 'items'
                }
            ])
        ],
        controllers: [collections_controller_1.CollectionsController],
        providers: [collections_service_1.CollectionsService, items_service_1.ItemsService],
        exports: [collections_service_1.CollectionsService, items_service_1.ItemsService]
    })
], CollectionsModule);
exports.CollectionsModule = CollectionsModule;
//# sourceMappingURL=collections.module.js.map