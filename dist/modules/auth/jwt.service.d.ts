import { JwtService } from '@nestjs/jwt';
import { User } from '../users/schema/user.schema';
import { UsersService } from '../users/users.service';
import { CredentialDTO } from './dto/credential.dto';
import { UserRegistrationlDTO } from './dto/user-registration.dto';
export declare class JwtService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
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
    createToken(user: User): Promise<string>;
    toHash(password: string): Promise<string>;
}
