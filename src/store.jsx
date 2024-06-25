import { configureStore } from "@reduxjs/toolkit";

const initialstate = {
    favourite : ''
}

const reducer = (state = initialstate,action) => {
  switch (action.type) {
    case "SET_FAVOURITE":

       
    return{
        ...state,
        favourite:action.payload
    }
        
     
 
    default:
        return;
 }

}
export const store = configureStore({reducer})

