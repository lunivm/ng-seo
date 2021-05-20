import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResourcesModule } from './resources/resources.module';
import { SearchModule } from './search/search.module';

@Module({
  imports: [ResourcesModule, SearchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
