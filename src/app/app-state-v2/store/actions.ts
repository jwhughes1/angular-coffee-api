import { Action } from '@ngrx/store';
import { ICoffee } from '../interfaces/coffee.interface';
import { HttpErrorResponse } from '@angular/common/http';

export enum CoffeeActionTypes 
{
    GetCoffeeLoad = '[Coffee] Get Coffee',
    GetCoffeeSuccess = '[Coffee] Get Coffee Success',
    GetCoffeeFail = '[Coffee] Get Coffee Fail',
}

export class GetCoffeeLoad implements Action 
{
    public readonly type = CoffeeActionTypes.GetCoffeeLoad;
}

export class GetCoffeeSuccess implements Action 
{
    public readonly type = CoffeeActionTypes.GetCoffeeSuccess;
    constructor(public payload: ICoffee[] ) {}
}

export class GetCoffeeFail implements Action 
{
    public readonly type = CoffeeActionTypes.GetCoffeeFail;
    constructor(public error: HttpErrorResponse) {}
}

export type CoffeeActions = GetCoffeeLoad | GetCoffeeSuccess | GetCoffeeFail;