
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CoffeeService } from '../services/coffee-service';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import * as fromCoffee from '.'
import { ICoffee } from '../interfaces/coffee.interface';

@Injectable()
export class CoffeeEffects {

    constructor(private actions$: Actions, private coffeeService: CoffeeService) 
    {
        
    }

  //Using an NGRX effect to dispatch HTTP requests
  @Effect()
  loadCoffee$: Observable<Action> =
  this.actions$.pipe(
    ofType(fromCoffee.CoffeeActionTypes.GetCoffeeLoad),
    mergeMap(() => this.coffeeService.getCoffeeData()
      .pipe(
        map((coffee: ICoffee[]) => { return new fromCoffee.GetCoffeeSuccess(coffee)}),
        catchError((error) => of (new fromCoffee.GetCoffeeFail(error)))
  )
 ));
}