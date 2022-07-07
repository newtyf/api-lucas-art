import { IsNotEmpty, IsString } from "class-validator";
import { Types } from "mongoose";

export class ItemDTO {
    @IsString()
    @IsNotEmpty()
    collectionId: Types.ObjectId;

    @IsString()
    @IsNotEmpty()
    bookId: Types.ObjectId;
}
