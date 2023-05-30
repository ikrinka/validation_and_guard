import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JwtModule.register({
      secret: '1234',
    }),
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService, AuthGuard, AuthService],
})
export class AppModule {}
