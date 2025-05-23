import { ENV } from "@constants/conf/env.constant";
import { NestFactory } from "@nestjs/core";
import type { NestExpressApplication } from "@nestjs/platform-express";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as pkg from "@pkg";
import helmet from "helmet";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Enable CORS
  app.enableCors({
    origin: ENV.cors.allowedDomains[0] === "*" ? "*" : ENV.cors.allowedDomains,
  });

  // Use Helmet
  app.use(helmet());

  // Documentation
  const config = new DocumentBuilder()
    .setTitle(pkg?.name)
    .setVersion(pkg?.version)
    .addBearerAuth()
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("documentation", app, documentFactory);

  await app.listen(process.env.PORT || 3001);
}
bootstrap();
