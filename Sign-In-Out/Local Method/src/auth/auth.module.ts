import { Module } from '@nestjs/common';
import { PassportLocalStrategy } from './passport.local.strategy';
import { userModule } from 'src/users/user.module';

@Module({
    imports: [userModule],
    controllers: [],
    providers: [PassportLocalStrategy],
})
export class AuthModule {}