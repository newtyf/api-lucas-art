import { PartialType } from "@nestjs/swagger";
import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsString, Max, Min  } from "class-validator";
import { CredentialDTO } from "./credential.dto";

export class UserRegistrationlDTO extends PartialType(CredentialDTO) {
    @IsNotEmpty()
    @IsNumber()
    dni: number;

    @IsNotEmpty()
    @IsEmail()
    username: string;

    @IsNotEmpty()
    @IsBoolean()
    active: boolean;
}
