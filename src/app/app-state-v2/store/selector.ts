
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ICoffeeState } from ".";

const getCoffeeState = createFeatureSelector<ICoffeeState>('coffee');

export const fiftyCoffeeItems = createSelector(getCoffeeState, (state: ICoffeeState) => 
{
    const temp_data = state.data;
    var item_data = [];
    item_data.push(temp_data);
    return { ...state, data: item_data};
});
