import { PrismaClient, Prisma } from '@prisma/client';
import { faker } from '@faker-js/faker';
import cuid from 'cuid'

const prisma = new PrismaClient()
const usersList: Prisma.UserCreateInput[] = [];
const recipeList: Prisma.RecipeCreateInput[] = [];
const mealList: Prisma.MealCreateInput[] = [];
const planList: Prisma.PlanCreateInput[] = [];

const preparations: string[] = [
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
const ingredients: string = `- 2 - Tomato
- 1 - Onion
- 2t - Baking powder
`
const steps: string = `1. Chop veggies
2. Boil pasta
3. Serve
`
const mealNames: string[] = [
  'Stuffed shrimp with asparagus',
  'Italian beef with roasted potatoes',
  'Burgers and fries',
  'Brats and slaw',
  'Meatloaf with roasted broccoli',
  'Fried fish with baked fries',
  'Spinnach salad with grilled chicken',
  'Buffalo wings and potato wedges'
]
const planNames: string[] = [
  'Week of May 3rd',
  'Week of May 10th',
  'Week of May 17th',
  'Week of May 24th',
  'Week of June 2nd',
  'Week of June 9th'
]

const makeId = () => {
  return { id: cuid() }
}
const makeBaseRecord = () => {
  return {
    ...makeId(),
    user: findUser().id || cuid()
  }
}

function createUser(): Prisma.UserCreateInput {
  return {
    ...makeId(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    enabled: 1
  };
}
function createRecipe(): Prisma.RecipeCreateInput {
  return {
    ...makeBaseRecord(),
    name: `${randomName(preparations)} ${faker.animal.type()}`,
    ingredients: ingredients,
    steps: steps,
  };
}
function createMeal(): Prisma.MealCreateInput {
  return {
    ...makeBaseRecord(),
    name: randomName(mealNames),
    recipes: {
      connect: findAsList(findRecipes, 3)
    }
  };
}
function createPlan(): Prisma.PlanCreateInput {
  return {
    ...makeBaseRecord(),
    name: randomName(planNames),
    meals: {
      connect: findAsList(findMeals, 42)
    }
  };
}

const randomName = (thing) => thing[Math.floor(Math.random() * thing.length)] || ''
const findUser = (): Prisma.UserCreateInput => usersList[Math.floor(Math.random() * usersList.length)] || usersList[0]
const findMeals = (count) => {
  const output = []
  for (let i = 0; i < count; i++) output.push(mealList[Math.floor(Math.random() * mealList.length)] || mealList[0])
  return output
}
const findRecipes = (count) => {
  const output = []
  for (let i = 0; i < count; i++) output.push(recipeList[Math.floor(Math.random() * recipeList.length)] || recipeList[0])
  return output
}
const findAsList = (finder, count) => {
  return finder(count).map(thing => {
    return { id: thing.id }
  })
}
const addUsers = (count) => addRecords(count, prisma.user, createUser, usersList)
const addRecipes = (count) => addRecords(count, prisma.recipe, createRecipe, recipeList)
const addMeals = (count) => addRecords(count, prisma.meal, createMeal, mealList)
const addPlans = (count) => addRecords(count, prisma.plan, createPlan, planList)
const addRecords = (count, client, factory, tracker) => {
  const promises = []

  for (let i = 1; i <= count; i++) {
    try {
      const data = factory()
      promises.push(client.create({ data }))
      tracker.push(data)
    } catch (error) {
      console.log(error)
    }
  }

  return promises
}

async function main() {
  console.log(`Clearing dev database.`)
  console.log(`Start seeding ...`)

  await Promise.all(addUsers(1))
  await Promise.all(addRecipes(25))
  await Promise.all(addMeals(7))
  await Promise.all(addPlans(4))
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
