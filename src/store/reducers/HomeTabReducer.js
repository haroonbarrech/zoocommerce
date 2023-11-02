import { HomeTab, read } from "../actions/HomeTabAction";
import DATA from "../../modal/data";



const initialState ={
    Users1: DATA,
}

export default function (state=initialState,action) {

    switch (action.type)
    {
        case read:
            
            Users1 = action.id;

            return {
                Users1: Users1
             }


            default:
            return state
    }
}