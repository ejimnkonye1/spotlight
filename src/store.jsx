import { configureStore } from "@reduxjs/toolkit";

const initialstate = {
    favourite : '',
    favour: ''
}

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case "SET_FAVOURITE":
         return{
        ...state,
        favourite:action.payload
    }
        
     
 
    default:
        return state;
 }

}
export const store = configureStore({reducer})

