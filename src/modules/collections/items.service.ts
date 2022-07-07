import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { AuthenticatedDTO } from '../auth/dto/authenticated.dto';
import { Item, ItemDocument } from './schema/item.schema';

@Injectable()
export class ItemsService {
    constructor(
        @InjectModel(Item.name) private model: Model<ItemDocument>
    ) {}

    async findAll(): Promise<Item[]> {
        return await this.model.find({"show": true}).exec();
    }

    async findOne(id: string): Promise<Item> {
        return await this.model.findOne({"_id": id}).exec();
    }

    async findAllByCollection(id: string): Promise<Item[]> {
        return await this.model.find({"collectionId": new Types.ObjectId(id)}).exec();
    }

    async add(item: ItemDocument) {
        return await this.model.create(item);
    }

}
