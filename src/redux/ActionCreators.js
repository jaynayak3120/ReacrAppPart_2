import * as ActionTypes from "./ActionTypes";
import { DISHES } from "../shared/dishes";
import { baseUrl } from "../shared/baseUrl";

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

    return fetch(baseUrl+'dishes')
        .then(response=> response.json())
        .then(dishes=> dispatch(addDishes(dishes)));
    //setTimeout( () => { dispatch(addDishes(DISHES)); },2000); 
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

export const fetchComments= () => (dispatch) => {

    return fetch(baseUrl+'comments')
        .then(response=> response.json())
        .then(comments=> dispatch(addComments(comments))); 
}

export const failedComments= (errMess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess
});

export const addComments=(comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos= () => (dispatch) => {

    return fetch(baseUrl+'promotions')
        .then(response=> response.json())
        .then(promos=> dispatch(addPromos(promos))); 
}

export const addPromos= (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

export const loadingPromos= () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const failedPromos= (errMess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errMess
});