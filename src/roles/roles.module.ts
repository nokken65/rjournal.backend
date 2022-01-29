import { forwardRef, Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesResolver } from './roles.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  providers: [RolesResolver, RolesService, PrismaService],
  imports: [forwardRef(() => UsersModule)],
  exports: [RolesService],
})
export class RolesModule {}
