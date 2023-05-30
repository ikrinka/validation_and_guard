import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async generateToken(userId: string, roles: string[]): Promise<string> {
    const payload = { sub: userId, roles };
    return this.jwtService.signAsync(payload);
  }
}
