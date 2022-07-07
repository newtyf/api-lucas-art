import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { AuthenticatedDTO } from '../auth/dto/authenticated.dto';
import { CollectionDTO } from './dto/collection.dto';
import { Collection, CollectionDocument} from './schema/collection.schema';

@Injectable()
export class CollectionsService {
    constructor(
        @InjectModel(Collection.name) private model: Model<CollectionDocument>
    ) {}

    async findAll(): Promise<Collection[]> {
        return await this.model.find({"show": true}).exec();
    }

    async findAllByUser(id: string): Promise<Collection[]> {
        console.info(id);
        return await this.model.find({"userId": new Types.ObjectId(id)}).exec();
    }

    async findOne(id: string): Promise<Collection> {
        return await this.model.findOne({"_id": id}).exec();
    }

    async create(user: AuthenticatedDTO, collectionDTO: CollectionDTO) {
        collectionDTO.userId = new Types.ObjectId(user.id);

        return await this.model.create(collectionDTO);
    }
}
