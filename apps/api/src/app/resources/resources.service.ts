import { Injectable } from '@nestjs/common';
import { ResourcesResponse } from '@ng-seo/api-contracts';

@Injectable()
export class ResourcesService {
  getResources(): ResourcesResponse {
    return {
      list: [
        {
          label: 'NX',
          url: 'https://nx.dev/'
        },
        {
          label: 'Angular',
          url: 'https://angular.io/'
        },
        {
          label: 'Nest',
          url: 'https://docs.nestjs.com/'
        }
      ]
    };
  }
}
