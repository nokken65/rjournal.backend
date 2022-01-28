import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  const alice = await prisma.user.create({
    data: {
      email: 'alice@mail.com',
      username: 'Alice',
      password: 'alice12345',
    },
  });

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
