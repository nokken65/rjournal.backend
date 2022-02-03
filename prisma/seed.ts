import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  await prisma.role.deleteMany();
  const admin = await prisma.role.create({
    data: {
      value: 'ADMIN',
    },
  });

  const alice = await prisma.user.create({
    data: {
      email: 'alice@mail.com',
      username: 'Alice',
      password: 'alice12345',
      roles: {
        create: [
          {
            assignedBy: 'Bob',
            roleId: admin.id,
          },
        ],
      },
    },
  });

  console.log({ admin });
  console.log({ alice });
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
