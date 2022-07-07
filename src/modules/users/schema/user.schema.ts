import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {    
    @Prop({ required: true })
    dni: number;

    @Prop({ required: true })
    username: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ default: true })
    active: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
