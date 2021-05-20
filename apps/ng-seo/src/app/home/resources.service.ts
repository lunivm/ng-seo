import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResourcesResponse } from '@ng-seo/api-contracts';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
  constructor(

    private readonly http: HttpClient
  ) { }

  getResources(): Observable<ResourcesResponse> {
    return this.http.get<ResourcesResponse>(environment.apiHost + '/api/resources');
  }
}
