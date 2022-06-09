import { PrismaClient, Prisma } from '@prisma/client';
import { faker } from '@faker-js/faker';
import cuid from 'cuid'

const prisma = new PrismaClient();

export const users: Prisma.UserCreateInput[] = [];
export const recipes: Prisma.RecipeCreateInput[] = [];
export const meals: Prisma.MealCreateInput[] = [];
export const plans: Prisma.PlanCreateInput[] = [];

const preparations = [
  'broiled',
  'smoked',
  'stuffed',
  'charred',
  'steamed',
  'poached',
  'sauteed',
  'baked',
  'grilled',
  'breaded'
]

function createUser(): Prisma.UserCreateInput {
  return {
    id: cuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
  };
}

const findRandomUser = (): Prisma.UserCreateInput => users[Math.floor(Math.random() * users.length)] || users[0]
const findRandomPrep = (): string => preparations[Math.floor(Math.random() * preparations.length)] || ''

function createRecipe(): Prisma.RecipeCreateInput {
  return {
    id: cuid(),
    ingredients: 'Ingredients',
    steps: 'Steps',
    user: findRandomUser().id || cuid(),
    name: `${findRandomPrep()} ${faker.animal.type()}`
  };
}

async function main() {
  console.log(`Clearing dev database.`);
  console.log(`Start seeding ...`);

  for (let i = 0; i < 10; i++) {
    try {
      const user = createUser()
      users.push(user)
      await prisma.user.create({
        data: createUser(),
      });
      console.log(`Created user: ${user.username}`);
    } catch (error) {
      console.log(error)
    }
  }

  for (let i = 0; i < 30; i++) {
    try {
      const recipe = createRecipe()
      recipes.push(recipe)
      await prisma.recipe.create({
        data: createRecipe(),
      });

      console.log(`Created recipe: ${recipe.name}`);
    } catch (error) {
      console.log(error)
    }
  }

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
