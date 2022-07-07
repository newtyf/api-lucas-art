/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/inferschematype" />
import { Model, Types } from 'mongoose';
import { AuthenticatedDTO } from '../auth/dto/authenticated.dto';
import { CollectionDTO } from './dto/collection.dto';
import { Collection, CollectionDocument } from './schema/collection.schema';
export declare class BooksService {
    private model;
    constructor(model: Model<CollectionDocument>);
    findAll(): Promise<Collection[]>;
    findOne(id: string): Promise<Collection>;
    create(user: AuthenticatedDTO, collectionDTO: CollectionDTO): Promise<import("mongoose").Document<unknown, any, CollectionDocument> & Collection & Document & {
        _id: Types.ObjectId;
    }>;
}
