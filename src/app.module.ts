import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { RecordsController } from './records/records.controller';
import { RecordsService } from './records/records.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule
  ],
  controllers: [AppController, RecordsController],
  providers: [AppService, RecordsService],
})
export class AppModule {}
