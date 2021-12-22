import { ICoffee } from '../interfaces/coffee.interface';
import { CoffeeActions, CoffeeActionTypes } from './actions';

//Defining the properties for our state - the coffee data to be displayed, the status (whether the data has loaded), ad a message stating the current state.
export interface ICoffeeState 
{
    data: ICoffee[];
    isLoading: boolean;
    message: string;
}
//Defining the initial state - with no data loaded
const initialState: ICoffeeState = 
{
    data: [],
    isLoading: false,
    message: 'Initial State'
};

//Reducer changes + returns the state depending on the action
//Options: 1) Loading Data, 2) Successfully got the data, 3) Failure getting the data.
export function reducer(state = initialState, action: CoffeeActions): ICoffeeState {

    switch (action.type) 
    {
        case CoffeeActionTypes.GetCoffeeLoad: 
        {
            return {
                ...state,
                data: [],
                isLoading: true
            }
        }

        case CoffeeActionTypes.GetCoffeeSuccess: 
        {
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                message: 'Data fetch Successfully!'
            }
        }
        case CoffeeActionTypes.GetCoffeeFail: {
            return {
                data: null,
                isLoading: false,
                message: 'Something went wrong!'
            }
        }
        default:
            return state;
    }
}
