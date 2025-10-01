import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { User } from '@project/core/dist/user/user.entity';
import { connection } from '@project/core/dist/connection';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...(connection as TypeOrmModuleAsyncOptions),
      autoLoadEntities: true,
      entities: [User],
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
