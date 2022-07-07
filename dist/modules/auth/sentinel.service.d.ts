import { JwtService } from '@nestjs/jwt';
import { User } from '../users/schema/user.schema';
export declare class SentinelService {
    private jwtService;
    constructor(jwtService: JwtService);
    createToken(user: User): Promise<string>;
}
