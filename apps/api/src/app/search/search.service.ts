import { Injectable } from '@nestjs/common';
import { SearchItem, SearchItemResponse, SearchResponse } from '@ng-seo/api-contracts';

@Injectable()
export class SearchService {
  search(): SearchResponse {
    const items: SearchItem[] = new Array(80).fill(null).map((i, index) => ({
      id: String(index + 1),
      label: `Search item ${index+1}`
    }));

    return {
      items
    }
  }

  searchItem(id: string): SearchItemResponse {
    return {
      id,
      label: `Search item ${id}`,
      description: `Really long description for search item ${id}`
    }
  }
}
