import { Component, OnInit } from '@angular/core';
import { SearchItem } from '@ng-seo/api-contracts';
import { SearchService } from './search.service';

@Component({
  selector: 'ng-seo-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  items: SearchItem[] = [];

  constructor(
    private readonly searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.searchService.getSearch().subscribe(i => {
      this.items = i.items;
    });
  }
}
