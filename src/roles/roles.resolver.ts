import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RolesService } from './roles.service';

@Resolver('Role')
export class RolesResolver {
  constructor(private readonly rolesService: RolesService) {}

  @Mutation('createRole')
  create(@Args('createRoleInput') createRoleInput: Prisma.RoleCreateInput) {
    return this.rolesService.create(createRoleInput);
  }

  @Query('roles')
  findAll() {
    return this.rolesService.findAll();
  }

  @Query('role')
  findOne(@Args('id') id: string) {
    return this.rolesService.findOne({ id });
  }

  @Mutation('updateRole')
  update(
    @Args('id') id: string,
    @Args('updateRoleInput') updateRoleInput: Prisma.RoleUpdateInput,
  ) {
    return this.rolesService.update({ id }, updateRoleInput);
  }

  @Mutation('removeRole')
  remove(@Args('id') id: string) {
    return this.rolesService.remove({ id });
  }
}
