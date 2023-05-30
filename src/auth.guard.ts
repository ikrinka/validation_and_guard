import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authorizationHeader = request.headers.authorization;

    if (!authorizationHeader) {
      throw new UnauthorizedException('Missing authorization header');
    }

    const [bearer, token] = authorizationHeader.split(' ');

    if (bearer !== 'Bearer' || !token) {
      throw new UnauthorizedException('Invalid token');
    }

    try {
      const decodedToken = this.jwtService.verify(token);

      // Проверка роли пользователя
      if (decodedToken.role !== 'admin') {
        throw new UnauthorizedException('Insufficient permissions');
      }

      // Установка пользователя в запрос для дальнейшего использования
      request.user = decodedToken;

      return true;
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
