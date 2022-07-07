import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Date } from "mongoose";

export type BookDocument = Book & Document;

@Schema()
export class Book {
    @Prop()
    cover: string;
    
    @Prop()
    isbn: string;

    @Prop()
    url: string;

    @Prop()
    title: string;

    @Prop()
    price: number;

    @Prop()
    author: string;

    @Prop()
    category: string;

    @Prop()
    show: boolean;
}

export const BookSchema = SchemaFactory.createForClass(Book);
