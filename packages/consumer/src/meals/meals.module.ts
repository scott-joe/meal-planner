import { Module } from '@nestjs/common';
import { MealsService } from './meals.service';
import { MealsController } from './meals.controller';

@Module({
  controllers: [MealsController],
  providers: [MealsService]
})
export class MealsModule {}
