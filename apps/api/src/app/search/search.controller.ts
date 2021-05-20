import { Controller, Get, Param } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(
    private readonly searchService: SearchService
  ) {}

  @Get()
  search() {
    return this.searchService.search();
  }

  @Get(':id')
  searchItem(@Param('id') id: string) {
    return this.searchService.searchItem(id);
  }
}
