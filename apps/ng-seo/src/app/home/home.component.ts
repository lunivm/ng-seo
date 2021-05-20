import { Component, OnInit } from '@angular/core';
import { ResourcesService } from './resources.service';
import { ResourceItem } from '@ng-seo/api-contracts';

@Component({
  selector: 'ng-seo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: ResourceItem[] = [];

  constructor(
    public readonly resourcesService: ResourcesService
  ) { }

  ngOnInit(): void {
    this.resourcesService.getResources().subscribe(i => this.items = i.list);
  }
}
