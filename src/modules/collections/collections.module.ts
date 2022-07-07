import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CollectionsController } from './collections.controller';
import { CollectionsService } from './collections.service';
import { ItemsService } from './items.service';
import { Collection, CollectionSchema } from './schema/collection.schema';
import { Item, ItemSchema } from './schema/item.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
        {
            name: Collection.name,
            schema: CollectionSchema,
            collection: 'collections'
        },
        {
          name: Item.name,
          schema: ItemSchema,
          collection: 'items'
      }
    ])
],
  controllers: [CollectionsController],
  providers: [CollectionsService, ItemsService],
  exports: [CollectionsService, ItemsService]
})
export class CollectionsModule {}
