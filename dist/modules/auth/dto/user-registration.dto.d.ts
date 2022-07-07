import { CredentialDTO } from "./credential.dto";
declare const UserRegistrationlDTO_base: import("@nestjs/common").Type<Partial<CredentialDTO>>;
export declare class UserRegistrationlDTO extends UserRegistrationlDTO_base {
    dni: number;
    username: string;
    active: boolean;
}
export {};
