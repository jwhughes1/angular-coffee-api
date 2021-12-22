import { TestBed, waitForAsync } from '@angular/core/testing';
import { CoffeeTableComponent } from 'src/app/coffee-table-component/coffee-table.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import * as fromCoffee from "../app-state-v2/store";
import {By} from '@angular/platform-browser';
import { ICoffeeState } from '../app-state-v2/store';

//Unit testing for the coffee component
describe('CoffeeTableComponent', () => {
  let store: MockStore<ICoffeeState>;  //Similates a store using the ICoffee state

  const initialState = {data:[], isLoading: false, message:'Initial State'}; //defining the initial state for the store
  beforeEach(waitForAsync (() => {
    TestBed.configureTestingModule({
        imports:[
            NgxPaginationModule
        ],
      declarations: [
        CoffeeTableComponent
      ],
      providers:
      [
        provideMockStore({ initialState })
      ]
    }).compileComponents();
    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch').and.callThrough(); //Spy on functionality - monitor request of dispatching HTTP
  }));

  //Test to create CoffeeTableComponent
  it('Should create the CoffeeTablecomponent', waitForAsync (() => {
    const fixture = TestBed.createComponent(CoffeeTableComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

  //Test to dispatch the HTTP request (for retrieving coffee data)
  it('Should dispatch the HTTP request', waitForAsync (() => {
    const fixture = TestBed.createComponent(CoffeeTableComponent);
    const component = fixture.debugElement.componentInstance;
    component.dispatchRequest();
    expect(store.dispatch).toHaveBeenCalledWith(new fromCoffee.GetCoffeeLoad());
  }));

  //Test to see if the UI updates when we change the Store.
  it('Should update the User Interface when we change the Store', () => {
    
    //Defining sample data
    let arr = [{id:926, uid:"e1ccd7c1-d4dd-48ab-a34a-0629164ae9e8",blend_name: "Dark Choice" ,origin:"Bugisu,Uganda", variety: "Villalobos", notes: "delicate, big, clementine, red currant, peanut", intensifier: "complex"}];
    
    //Defining a sample state
    const new_state = {
      data: arr,
      isLoading: false,
      message: 'Data fetch Successfully!'
    };
    
    //Updating the state
    store.setState(new_state);
    store.refreshState();
    const fixture = TestBed.createComponent(CoffeeTableComponent);
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('.background')).length).toBe(0);
  });
});