import { Get_watch, Get_deleted } from "../actions/Categories1Action";
import CategoriesData from "../../modal/data3";
import Categories from "../../screens/Categories";




const Starting = {
    Categories:CategoriesData,

}
const CategoriesReducer = ( state = Starting, action) => {

    switch (action.type)
    {
        case Get_watch:
            
            Categories= action.id;

            return {
               Category:Category,
             }

       



            default:
            return state
    } 
}

export default CategoriesReducer;