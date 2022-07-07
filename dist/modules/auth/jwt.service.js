"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtService = void 0;
const bcrypt = require("bcrypt");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
Object.defineProperty(exports, "JwtService", { enumerable: true, get: function () { return jwt_1.JwtService; } });
const users_service_1 = require("../users/users.service");
const jwt_constants_1 = require("./jwt.constants");
let JwtService = class JwtService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async doLogin(credential) {
        const user = await this.usersService.findOne(credential.email);
        if (!user) {
            throw new common_1.HttpException('credentials are invalid or the user does not exist.', common_1.HttpStatus.NOT_FOUND);
        }
        const check = await bcrypt.compare(credential.password, user.password);
        if (!check) {
            throw new common_1.HttpException('credentials are invalid or the user does not exist.', common_1.HttpStatus.FORBIDDEN);
        }
        const token = await this.createToken(user);
        const data = {
            "user": {
                "username": user.username,
                "email": user.email
            },
            "accessToken": token
        };
        return data;
    }
    async doRegister(userRegistration) {
        const user = await this.usersService.findOne(userRegistration.email);
        if (user) {
            throw new common_1.HttpException('the user is already registered.', common_1.HttpStatus.CONFLICT);
        }
        userRegistration.password = await this.toHash(userRegistration.password);
        const register = await this.usersService.create(userRegistration);
        return {
            "dni": register.dni,
            "username": register.dni,
            "email": register.email,
            "active": register.active
        };
    }
    async createToken(user) {
        const payload = { username: user.username, email: user.email };
        return this.jwtService.sign(payload);
    }
    async toHash(password) {
        const saltOrRounds = jwt_constants_1.jwtConstants.saltOrRounds;
        const hash = await bcrypt.hash(password, saltOrRounds);
        return hash;
    }
};
JwtService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService, jwt_1.JwtService])
], JwtService);
exports.JwtService = JwtService;
//# sourceMappingURL=jwt.service.js.map