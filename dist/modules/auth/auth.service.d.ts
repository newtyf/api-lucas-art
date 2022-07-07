import { UsersService } from '../users/users.service';
import { CredentialDTO } from './dto/credential.dto';
import { UserRegistrationlDTO } from './dto/user-registration.dto';
import { Hashing } from './hashing';
import { TokenService } from './token.service';
export declare class AuthService {
    private usersService;
    private tokenService;
    private hashing;
    constructor(usersService: UsersService, tokenService: TokenService, hashing: Hashing);
    doLogin(credential: CredentialDTO): Promise<{
        user: {
            username: string;
            email: string;
        };
        accessToken: string;
    }>;
    doRegister(userRegistration: UserRegistrationlDTO): Promise<{
        dni: number;
        username: number;
        email: string;
        active: boolean;
    }>;
    getMe(token: string): Promise<any>;
}
