import { PrismaClient, Prisma } from '@prisma/client';
import { faker } from '@faker-js/faker';
import cuid from 'cuid'

const prisma = new PrismaClient()
const users: Prisma.UserCreateInput[] = [];
const recipes: Prisma.RecipeCreateInput[] = [];
const meals: Prisma.MealCreateInput[] = [];
const plans: Prisma.PlanCreateInput[] = [];
const config = {
  verbose: false,
  numUsers: 1,
  numRecipes: 200,
  numMeals: 50,
  numPlans: 4
}

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

function createUser(): Prisma.UserCreateInput {
  return {
    id: cuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    enabled: 1
  };
}
function createRecipe(): Prisma.RecipeCreateInput {
  return {
    id: cuid(),
    user: findUser().id || cuid(),
    name: `${findPrep()} ${faker.animal.type()}`,
    ingredients: ingredients,
    steps: steps,
    // meals
  };
}
function createMeal(): Prisma.MealCreateInput {
  return {
    id: cuid(),
    user: findUser().id || cuid(),
    name: findMealName(),
    recipes: {
      connect: findAsList(findRecipes, 3)
    }
  };
}
function createPlan(): Prisma.PlanCreateInput {
  return {
    id: cuid(),
    user: findUser().id || cuid(),
    name: findPlanName(),
    meals: {
      connect: findAsList(findMeals, 42)
    }
  };
}

const findUser = (): Prisma.UserCreateInput => users[Math.floor(Math.random() * users.length)] || users[0]
const findPrep = (): string => preparations[Math.floor(Math.random() * preparations.length)] || ''
const findMealName = (): string => mealNames[Math.floor(Math.random() * mealNames.length)] || ''
const findPlanName = (): string => planNames[Math.floor(Math.random() * planNames.length)] || ''
const findMeals = (count) => {
  const output = []
  for (let i = 0; i < count; i++) output.push(meals[Math.floor(Math.random() * meals.length)] || meals[0])
  return output
}
const findRecipes = (count) => {
  const output = []
  for (let i = 0; i < count; i++) output.push(recipes[Math.floor(Math.random() * recipes.length)] || recipes[0])
  return output
}
const findAsList = (finder, count) => {
  return finder(count).map(thing => {
    return { id: thing.id }
  })
}

let promises = []
async function main() {
  console.log(`Clearing dev database.`)
  console.log(`Start seeding ...`)

  // Create users
  for (let i = 1; i <= config.numUsers; i++) {
    try {
      const user = createUser()
      promises.push(prisma.user.create({ data: user }))
      users.push(user)
    } catch (error) {
      console.log(error)
    }
  }

  // Create recipes
  for (let i = 1; i <= config.numRecipes; i++) {
    try {
      const recipe = createRecipe()
      promises.push(prisma.recipe.create({ data: recipe }))
      recipes.push(recipe)
    } catch (error) {
      console.log(error)
    }
  }
  await Promise.all(promises)

  // Create meals
  promises = []
  for (let i = 1; i <= config.numMeals; i++) {
    try {
      const meal = createMeal()
      promises.push(prisma.meal.create({ data: meal }))
      meals.push(meal)
    } catch (error) {
      console.log(error)
    }
  }
  await Promise.all(promises)

  // Create plans
  // console.log(findAsList(findMeals, 42))
  for (let i = 1; i <= config.numPlans; i++) {
    try {
      const plan = createPlan()
      prisma.plan.create({ data: plan }).then((res) => {
        console.log(res)
      })
      plans.push(plan)
    } catch (error) {
      console.log(error)
    }
  }

}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
