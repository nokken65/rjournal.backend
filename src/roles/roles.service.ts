import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
@Injectable()
export class RolesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createRoleInput: Prisma.RoleCreateInput) {
    return await this.prisma.role.create({ data: createRoleInput });
  }

  async findUserRoles({ userId }: Prisma.UserRolesWhereInput) {
    return await this.prisma.role.findMany({
      where: {
        users: {
          some: {
            userId,
          },
        },
      },
    });
  }

  async findAll() {
    return await this.prisma.role.findMany();
  }

  async findOne(roleWhereUniqueInput: Prisma.RoleWhereUniqueInput) {
    return await this.prisma.role.findUnique({ where: roleWhereUniqueInput });
  }

  async update(
    roleWhereUniqueInput: Prisma.RoleWhereUniqueInput,
    updateRoleInput: Prisma.RoleUpdateInput,
  ) {
    return await this.prisma.role.update({
      where: roleWhereUniqueInput,
      data: updateRoleInput,
    });
  }

  async remove(roleWhereUniqueInput: Prisma.RoleWhereUniqueInput) {
    return await this.prisma.role.delete({ where: roleWhereUniqueInput });
  }
}
