import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { RolesModule } from 'src/roles/roles.module';

@Module({
  providers: [PrismaService, UsersResolver, UsersService],
  imports: [forwardRef(() => RolesModule)],
  exports: [UsersService],
})
export class UsersModule {}
