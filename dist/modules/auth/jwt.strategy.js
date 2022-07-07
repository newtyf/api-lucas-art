"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtStrategy = void 0;
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const jwt_constants_1 = require("./jwt.constants");
class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwt_constants_1.jwtConstants.secret
        });
    }
    async validate(payload) {
        return { id: payload.id, dni: payload.dni, email: payload.email, username: payload.username };
    }
}
exports.JwtStrategy = JwtStrategy;
//# sourceMappingURL=jwt.strategy.js.map