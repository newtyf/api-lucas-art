import { IsEmail, IsNotEmpty, IsNumber, IsString  } from "class-validator";

export class AuthenticatedDTO {
    @IsNotEmpty()
    @IsString()
    id: string;
    
    @IsNotEmpty()
    @IsNumber()
    dni: number;
    
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
}
