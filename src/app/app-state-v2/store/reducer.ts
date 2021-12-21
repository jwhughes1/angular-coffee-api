import { ICoffee } from '../interfaces/coffee.interface';
import { CoffeeActions, CoffeeActionTypes } from './actions';


export interface ICoffeeState 
{
    data: ICoffee[];
    isLoading: boolean;
    message: string;
}

const initialState: ICoffeeState = 
{
    data: [],
    isLoading: false,
    message: 'Initial State'
};

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
