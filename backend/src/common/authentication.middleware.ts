import { NestMiddleware } from '@nestjs/common';
import * as jwt from 'express-jwt';
import { expressJwtSecret } from 'jwks-rsa';
import { environment } from '../../../frontend/src/environments/environment';

// TODO refactor process.env with a better solution to read the dotenv values
const DOMAIN = environment.DOMAIN;
const AUDIENCE = environment.audience;

export class AuthenticationMiddleware implements NestMiddleware {
  use(req, res, next) {
    jwt({
      secret: expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${DOMAIN}/.well-known/jwks.json`,
      }),

      audience: AUDIENCE,
      issuer: `https://${DOMAIN}/`,
      algorithms: ['RS256'],
    })(req, res, (err) => {
      if (err) {
        const status = err.status || 500;
        const message = err.message || 'Sorry, we were unable to process your request.';
        return res.status(status).send({
          message,
        });
      }
      next();
    });
  }
}
