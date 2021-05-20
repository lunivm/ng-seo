import { Controller, Get } from '@nestjs/common';
import { ResourcesService } from './resources.service';

@Controller('resources')
export class ResourcesController {
  constructor(
    private readonly resourcesService: ResourcesService
  ) {}

  @Get('/')
  getItems() {
    return this.resourcesService.getResources();
  }
}
