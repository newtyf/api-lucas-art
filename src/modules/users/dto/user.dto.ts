import { IsBoolean, IsNotEmpty, IsNumber, IsString  } from "class-validator";

export class UserDTO {
    @IsNotEmpty()
    @IsNumber()
    dni: number;

    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsBoolean()
    active: boolean;

    createdAt?: Date;
}
