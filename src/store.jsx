import { configureStore } from "@reduxjs/toolkit";

const initialstate = {
    favourite : [],
    listName: ''
}

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case "SET_FAVOURITE":
         return{
        ...state,
        favourite: [...state.favourite, action.payload],//made array 
    }
        case "SET_LIST":
            return{
                ...state,
                listName: action.payload
            }
     
 
    default:
        return state;
 }

}
export const store = configureStore({reducer})

