import { Component, OnInit } from '@angular/core';
import * as fromCoffee from "../app-state-v2/store";
import { Store, select} from '@ngrx/store';
import { Observable }  from 'rxjs';
import { ICoffee } from '../app-state-v2/interfaces/coffee.interface';

@Component({
  selector: 'coffee-table-component',
  templateUrl: './coffee-table.component.html',
  styleUrls: ['./coffee-table.component.css']
})
export class CoffeeTableComponent implements OnInit
{
  coffee_dat: ICoffee[];
  fiftyItems$: Observable<any>;
  public isLoading: boolean = false; 
  constructor(private store: Store<fromCoffee.ICoffeeState>) 
  {

  }
  public temp = [];
  p: number = 1;
  number_of_items: number = 10;
  
  ngOnInit():void
  {
    for (let i = 0; i < 50; i++)
    {
      this.dispatchRequest();
    }
    this.getFiftyItems();
  }

  private dispatchRequest()
  {
    this.store.dispatch(new fromCoffee.GetCoffeeLoad());
  }
  public getFiftyItems(): void
  {
    this.fiftyItems$ = this.store.pipe(select(fromCoffee.fiftyCoffeeItems));
    this.fiftyItems$.subscribe(res => 
    {
      this.isLoading = res.isLoading;
      this.coffee_dat = res.data;
      if(!(this.temp.includes(res.data[0]))&&(this.isLoading == false))
      {
        this.temp.push(res.data[0]); //res is an array that contains 1 element - the JSON we get from our API call
                                     //So indexing that 1 element will give us the data
        console.log(this.temp);
      }
    }
    );
  }
}