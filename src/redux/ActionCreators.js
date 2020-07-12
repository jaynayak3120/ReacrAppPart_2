import * as ActionTypes from "./ActionTypes";
import { DISHES } from "../shared/dishes";

export const addComment= (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment   
    }
});

export const fetchDishes= () => (dispatch) => {
    dispatch(loadingDishes(true));

    setTimeout( () => { dispatch(addDishes(DISHES)); },2000); 
}

export const loadingDishes= () => ({
    type: ActionTypes.DISHES_LOADING
});

export const failedDishes= (errMess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errMess
});

export const addDishes= (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});