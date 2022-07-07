import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { User } from "src/modules/users/schema/user.schema";

export type CollectionDocument = Collection & Document;

@Schema()
export class Collection {
    @Prop()
    name: string;

    @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
    userId: string | User;
}

export const CollectionSchema = SchemaFactory.createForClass(Collection);
