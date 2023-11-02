import { Get_seen } from "../actions/Categories2Action";
import Categories2Data from "../../modal/data4";




const initialState ={
    Categories2:Categories2Data,

}
export default function (state=initialState,action) {

    switch (action.type)
    {
        case Get_seen:
            
            Categories2= action.id;

            return {
               Category2:Category2,
             }


            default:
            return state
    }
}