import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { userModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [userModule, AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
