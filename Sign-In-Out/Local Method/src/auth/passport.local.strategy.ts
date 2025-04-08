import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { user } from "src/users/user.entity";
import { userService } from "src/users/user.service";

@Injectable()
export class PassportLocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly userService: userService){
        super();
    }
    validate(userName: string, password: string): user {
        const user = this.userService.getUserByName(userName);
        if(user === undefined) throw new UnauthorizedException('User not found');
        if(user.password === password) return user;
        throw new UnauthorizedException('Invalid credentials');
    }
}