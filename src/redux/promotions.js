import * as ActionTypes from "./ActionTypes";

export const Promotions = (state= { isLoading:true, errMess:null, promotions:[] }, action) => {
    switch(action.type) {
        case ActionTypes.PROMOS_LOADING:
            return {...this, isLoading:true, errMess:null, promotions:[]};

        case ActionTypes.PROMOS_FAILED:
            return {...this, isLoading:false, errMess:action.payload};

        case ActionTypes.ADD_PROMOS:
            return {...this, isLoading:false, errMess:null, promotions:action.payload};

        default:
            return state;
    }
}