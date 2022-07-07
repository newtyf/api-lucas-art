import { JwtService } from '@nestjs/jwt';
import { UserDocument } from '../users/schema/user.schema';
export declare class TokenService {
    private jwtService;
    constructor(jwtService: JwtService);
    create(user: UserDocument): Promise<string>;
    reveals(token: string): Promise<any>;
}
