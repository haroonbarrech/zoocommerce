import { Get_Saw } from "../actions/CategoriesAction";
import { WomenData,KidsData,MenData} from "../../modal/data2";



const initialState ={
    Women:WomenData,
    Men: MenData,
    Kids:KidsData,
}
export default function (state=initialState,action) {

    switch (action.type)
    {
        case Get_Saw:
            
            Women= action.id;
            Men= action.id;
            Kids= action.id;

            return {
               Category:Category,
             }


            default:
            return state
    }
}