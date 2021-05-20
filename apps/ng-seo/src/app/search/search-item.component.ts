import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from './search.service';
import { SearchItem } from '@ng-seo/api-contracts';


@Component({
  selector: 'ng-seo-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  item: SearchItem = {} as SearchItem;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.searchService.getSearchItem(this.route.snapshot.params.id).subscribe(i => this.item = i);
  }
}
