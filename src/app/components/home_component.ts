import { Component } from '@angular/core';
import { ApiService } from '../services/api_service';

@Component({
  selector: 'home-page',
  templateUrl: './home_component.html',
  styleUrls: ['./home_component.css']
})
export class HomeComponent  {
  name;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    // Retrieve title from the API
    this.apiService.getTitle().subscribe(data => {
      this.name = data.title;
    });
  }
}
