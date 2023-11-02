import { Get_siin } from "../actions/ProfileAction";
import ProfileData from "../../modal/Profiledata";



const initialState ={
    Profile:ProfileData,
    TotalPrice: [],

}
export default function (state=initialState,action) {

    switch (action.type)
    {
        case Get_siin:
            
            Profile= action.id;

            return {
               Profile:Profile,
             }


            default:
            return state
    }
}