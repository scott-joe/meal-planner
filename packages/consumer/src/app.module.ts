import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './recipes/recipes.module';
import { MealsModule } from './meals/meals.module';
import { PlansModule } from './plans/plans.module';

@Module({
  imports: [RecipesModule, MealsModule, PlansModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
