import { ENV } from "@constants/conf/env.constant";
import { LoginDTO } from "@core/dto/auth/login.dto";
import { Public } from "@core/guards/auth/public.guard";
import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { Throttle } from "@nestjs/throttler";
import {
  CONTROLLERS,
  getController,
  getEndpoint,
} from "@shared/api-definition";
import { AuthService } from "./auth.service";

const CONTROLLER = CONTROLLERS.auth;

type A = keyof typeof CONTROLLER.endpoints;
@Controller(getController(CONTROLLER))
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Throttle({
    default: { limit: ENV.rateLimit.maxLoginRequestsPerMinute, ttl: 60 * 1000 },
  })
  @Public()
  @HttpCode(HttpStatus.OK)
  @Post(getEndpoint(CONTROLLER, "login"))
  login(@Body() loginDto: LoginDTO) {
    return this.authService.signIn(loginDto);
  }
}
