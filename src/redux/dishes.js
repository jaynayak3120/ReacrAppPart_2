import * as ActionTypes from './ActionTypes';

export const Dishes = (state= {isLoading: true, errMess:null, dishes:[]}, action) => {
    switch(action.type) {
        case ActionTypes.DISHES_LOADING:
            return {...this, isLoading:true, errMess:null, dishes:[]};

        case ActionTypes.DISHES_FAILED:
            return {...this, isLoading:false, errMess:action.payload};

        case ActionTypes.ADD_DISHES:
            return {...this, isLoading:false, errMess:null, dishes:action.payload};
        
        default:
            return state;
    }
}