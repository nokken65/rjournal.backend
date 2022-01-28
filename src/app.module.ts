import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core/dist/plugin/landingPage/default';
import { join } from 'node:path';
import { UsersModule } from './users/users.module';
import { resolvers, typeDefs } from 'graphql-scalars';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
      typeDefs: [...typeDefs],
      resolvers: { ...resolvers },
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
