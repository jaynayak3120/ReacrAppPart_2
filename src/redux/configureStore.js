import { createStore, combineReducers } from 'redux';
//import { Reducer, initialState } from "./reducer";
import { Leaders } from './leaders';
import { Comments } from './comments';
import { Dishes } from './dishes';
import { Promotions } from './promotions';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        }) //createStore(Reducer , initialState);
    );
    return store;   
}