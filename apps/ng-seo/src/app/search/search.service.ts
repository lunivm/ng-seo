import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchResponse } from '@ng-seo/api-contracts';
import { environment } from '../../environments/environment';
import { SearchItemResponse } from '../../../../../libs/api-contracts/src/lib/search-item-response';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }

  getSearch(): Observable<SearchResponse> {
    return this.http.get<SearchResponse>(environment.apiHost + '/api/search');
  }

  getSearchItem(id: string): Observable<SearchItemResponse> {
    return this.http.get<SearchItemResponse>(environment.apiHost + '/api/search/' + id);
  }
}
