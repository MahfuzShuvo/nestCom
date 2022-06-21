import { Users } from 'src/model/users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Global, Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Users])
    ],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule { }