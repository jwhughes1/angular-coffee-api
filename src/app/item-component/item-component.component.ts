import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.css']
})
export class ItemComponentComponent implements OnInit {

  public results : any[] = [];
  p: number = 1;
  number_of_items: number = 10;
  constructor() { }

  ngOnInit(): void {
    this.getCoffee();
  }

  async getCoffee()
  {
      //Retrieving the 50 elements
      for (let i = 0; i < 50; i++)
      {
        const api_url = "https://random-data-api.com/api/coffee/random_coffee";
        const response = await fetch(api_url);
        const data = await response.json();
        this.results[i] = data;
      }   
  }
}
