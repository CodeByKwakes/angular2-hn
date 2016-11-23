import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HackernewsApiService } from '../hackernews-api.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  items;

  constructor(private hackernewsApiService: HackernewsApiService) { }

  ngOnInit() {
    this.hackernewsApiService
      .fetchStories('news', 1)
      .subscribe(
      item => this.items = item,
      error => console.log('Error fetching stories')
      )
  }

}
