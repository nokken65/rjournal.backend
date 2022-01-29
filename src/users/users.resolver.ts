import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { UsersService } from './users.service';
import { Prisma } from '@prisma/client';
import { RolesService } from 'src/roles/roles.service';

@Resolver('User')
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly rolesService: RolesService,
  ) {}

  @Query('users')
  findAll() {
    return this.usersService.findAll();
  }

  @Query('user')
  findOne(@Args('id') id: string) {
    return this.usersService.findOne({ id });
  }

  @Mutation('updateUser')
  update(
    @Args('id') id: string,
    @Args('updateUserInput') updateUserInput: Prisma.UserUpdateInput,
  ) {
    return this.usersService.update({ id }, updateUserInput);
  }

  @Mutation('removeUser')
  remove(@Args('id') id: string) {
    return this.usersService.remove({ id });
  }

  @ResolveField()
  roles(@Parent() user: Prisma.UserRolesWhereInput) {
    const { userId } = user;
    return this.rolesService.findUserRoles({ userId });
  }
}
