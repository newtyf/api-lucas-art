"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hashing = void 0;
const bcrypt = require("bcrypt");
const common_1 = require("@nestjs/common");
const jwt_constants_1 = require("./jwt.constants");
let Hashing = class Hashing {
    async encode(str) {
        const saltOrRounds = jwt_constants_1.jwtConstants.saltOrRounds;
        const hash = await bcrypt.hash(str, saltOrRounds);
        return hash;
    }
    async compare(plain, encode) {
        return bcrypt.compare(plain, encode);
    }
};
Hashing = __decorate([
    (0, common_1.Injectable)()
], Hashing);
exports.Hashing = Hashing;
//# sourceMappingURL=hashing.js.map