// src/auth/strategies/jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      // Look for JWT in the Authorization header as Bearer token:
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // Use the same secret you passed into JwtModule.register(...)
      secretOrKey: process.env.JWT_SECRET || 'changeme',
    });
  }

  // `payload` is whatever object you signed in AuthService.generateToken()
  async validate(payload: { sub: string; email: string }) {
    // By returning the payload (or a user object), it will be
    // attached to `req.user` in any @UseGuards(JwtAuthGuard) route.
    return { userId: payload.sub, email: payload.email };
  }
}
