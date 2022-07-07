import { CollectionsService } from './collections.service';
import { CollectionDTO } from './dto/collection.dto';
import { ItemsService } from './items.service';
import { ItemDocument } from './schema/item.schema';
export declare class CollectionsController {
    private readonly service;
    private readonly itemService;
    constructor(service: CollectionsService, itemService: ItemsService);
    collections(response: any, req: any): Promise<any>;
    getById(response: any, id: string): Promise<any>;
    create(response: any, req: any, collectionDTO: CollectionDTO): Promise<any>;
    getItems(response: any, id: string): Promise<any>;
    addItem(response: any, item: ItemDocument, id: string): Promise<any>;
}
