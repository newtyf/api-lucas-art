import { AuthService } from './auth.service';
import { CredentialDTO } from './dto/credential.dto';
import { UserRegistrationlDTO } from './dto/user-registration.dto';
export declare class AuthController {
    private service;
    constructor(service: AuthService);
    login(response: any, credential: CredentialDTO): Promise<any>;
    register(response: any, userRegistration: UserRegistrationlDTO): Promise<any>;
    getUserById(response: any, req: any): Promise<any>;
}
