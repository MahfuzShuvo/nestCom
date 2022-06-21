import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormConfig';
import { AuthModule } from './auth/auth.module';
import { Users } from './model/users.entity';
import { UsersModule } from './users/users.module';

@Module({
	imports: [
		TypeOrmModule.forRoot(config),
		UsersModule,
		AuthModule
	],
	controllers: [],
	providers: [],
})
export class AppModule { }
