import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService }    from '@nestjs/jwt';
import { UsersService }  from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly users: UsersService,
    private readonly jwt: JwtService
  ) {}

  async register(dto: RegisterDto) {
    const user = await this.users.create(dto);
    return this.generateToken(user.id, user.email);
  }

  async login(dto: LoginDto) {
    const user = await this.users.findByEmail(dto.email);
    if (!user || !(await bcrypt.compare(dto.password, user.passwordHash))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.generateToken(user.id, user.email);
  }

  private generateToken(userId: string, email: string) {
    const payload = { sub: userId, email };
    return {
      accessToken: this.jwt.sign(payload),
      userId,
    };
  }
}
