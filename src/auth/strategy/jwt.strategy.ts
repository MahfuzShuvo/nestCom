import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Users } from "src/model/users.entity";
import { Repository } from "typeorm";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {

    constructor(
        config: ConfigService,
        @InjectRepository(Users) private usersRepository: Repository<Users>,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            // ignoreExpiration: false,
            secretOrKey: config.get('JWT_SECRET')
        })
    }

    async validate(payload: {sub: number, email: string}) {
        const user = await this.usersRepository.findOne({
            where: {
                userId: payload.sub
            }
        })

        delete user.password
        return user;
    }

}