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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const hashing_1 = require("./hashing");
const token_service_1 = require("./token.service");
let AuthService = class AuthService {
    constructor(usersService, tokenService, hashing) {
        this.usersService = usersService;
        this.tokenService = tokenService;
        this.hashing = hashing;
    }
    async doLogin(credential) {
        const user = await this.usersService.findOne(credential.email);
        if (!user) {
            throw new common_1.HttpException('credentials are invalid or the user does not exist.', common_1.HttpStatus.NOT_FOUND);
        }
        const check = await this.hashing.compare(credential.password, user.password);
        if (!check) {
            throw new common_1.HttpException('credentials are invalid or the user does not exist.', common_1.HttpStatus.FORBIDDEN);
        }
        const token = await this.tokenService.create(user);
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
        userRegistration.password = await this.hashing.encode(userRegistration.password);
        const register = await this.usersService.create(userRegistration);
        return {
            "dni": register.dni,
            "username": register.dni,
            "email": register.email,
            "active": register.active
        };
    }
    async getMe(token) {
        return this.tokenService.reveals(token);
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        token_service_1.TokenService,
        hashing_1.Hashing])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map