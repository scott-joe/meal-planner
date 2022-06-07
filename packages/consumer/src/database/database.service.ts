import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../../datastore/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super();
  }

  async onModuleInit() {
    console.log('onModuleInit');
    try {
      await this.$connect();
    } catch (e) {
      console.log(e);
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
