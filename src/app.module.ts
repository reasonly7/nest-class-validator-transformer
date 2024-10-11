import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { importConfigModule } from './config/importConfigModule';
import { UserModule } from './user/user.module';

@Module({
  imports: [importConfigModule(), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
