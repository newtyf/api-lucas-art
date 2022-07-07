import { IsNotEmpty, IsString } from "class-validator";
import { Types } from "mongoose";

export class CollectionDTO {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    userId: Types.ObjectId;
}
