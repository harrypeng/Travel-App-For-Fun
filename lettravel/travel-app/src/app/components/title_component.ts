import { Component } from '@angular/core';
import { ApiService } from '../services/api_service';

@Component({
  selector: 'site-title',
  template: `<h1>{{name}}</h1>`,
  styleUrls: ['./title_component.css']
})
export class SiteTitleComponent  {
  name;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    // Retrieve title from the API
    this.apiService.getTitle().subscribe(data => {
      this.name = data.title;
    });
  }
}
