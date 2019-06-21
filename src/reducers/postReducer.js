import {FETCH_POSTS, NEW_POST} from "../actions/types";

const initialState = {
    reg_number: '',
    password: '',
    token:{},
}

export default function(state = initialState, action){
   switch (action.type) {
       case FETCH_POSTS:
           console.log("Reducing");
           console.log(action.payload);
           return{
               ...state,
               items: action.payload
           }
       case NEW_POST:
           return {
               ...state,
               token:action.payload
           }
       default:
           return state;
   }
}