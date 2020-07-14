import * as ActionTypes from "./ActionTypes";

export const Comments = (state= { errmess: null, comments: [] },action) => {
    switch(action.type) {
        case ActionTypes.COMMENTS_FAILED:
            return {...this, errMess:action.payload};

        case ActionTypes.ADD_COMMENTS:
            return {...this, errMess:null, comments:action.payload}; 

        case ActionTypes.ADD_COMMENT:
            const comment = action.payload;
            comment.Id = state.comments.length;
            comment.date = new Date().toISOString();
            return state.comments.concat(comment);
        default:
            return state;
    }
}