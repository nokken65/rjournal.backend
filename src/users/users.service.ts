import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserInput: Prisma.UserCreateInput) {
    return await this.prisma.user.create({ data: createUserInput });
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(userWhereUniqueInput: Prisma.UserWhereUniqueInput) {
    return await this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async update(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
    updateUserInput: Prisma.UserUpdateInput,
  ) {
    return await this.prisma.user.update({
      where: userWhereUniqueInput,
      data: updateUserInput,
    });
  }

  async remove(userWhereUniqueInput: Prisma.UserWhereUniqueInput) {
    return await this.prisma.user.delete({ where: userWhereUniqueInput });
  }
}
