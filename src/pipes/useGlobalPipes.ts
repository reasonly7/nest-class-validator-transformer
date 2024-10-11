import { INestApplication, ValidationPipe } from '@nestjs/common';

export const useGlobalPipes = (app: INestApplication) => {
  app.useGlobalPipes(
    // Use with `class-validator` to reduce manual validation code.
    new ValidationPipe(),
  );
};
