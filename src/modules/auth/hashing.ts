import * as bcrypt from 'bcrypt';
import { Injectable } from "@nestjs/common";
import { jwtConstants } from "./jwt.constants";

@Injectable()
export class Hashing {

    async encode(str: string) {
        const saltOrRounds = jwtConstants.saltOrRounds;
        const hash = await bcrypt.hash(str, saltOrRounds);                

        return hash;
    }

    async compare(plain: string, encode: string) {
        return bcrypt.compare(plain, encode);
    }
}
