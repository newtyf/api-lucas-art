import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { Book } from "src/modules/books/schema/book.schema";
import { Collection } from "../schema/collection.schema";

export type ItemDocument = Item & Document;

@Schema()
export class Item {
    @Prop({ type: Types.ObjectId, ref: 'Collection' })
    collectionId?: string | Collection;

    @Prop({ required: true, type: Types.ObjectId, ref: 'Book' })
    bookId: string | Book;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
