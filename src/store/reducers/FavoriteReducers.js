import { Get_to_Favorite,Del_from_Favorite,GetPrice_from_lowtohighest,GetPrice_from_highesttolowest } from "../actions/FavoriteActions";


const initialState ={
 
    Favourite: [],

}
export default function (state=initialState,action) {

    switch (action.type)
    {
        case Get_to_Favorite:
            
            let product_id = action.id;
          
            return {
               ...state,

               Favourite: [...state.Favourite, product_id]

             }



             case Del_from_Favorite: 
             let del_id = action.id;
                  const newFavourite = [...state.Favourite];
                  const item = newFavourite.indexOf(del_id);
                  if (item < 0) {
                     return;
                  }
                  newFavourite.splice(item, 1);
             return {
                Favourite: newFavourite
             }

             case GetPrice_from_lowtohighest: 
             const favOrder = [...state.Favourite];
             favOrder.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
        
             return {
                 ...state,
                Favourite: favOrder
             }

             case GetPrice_from_highesttolowest: 
             const newfavOrder = [...state.Favourite];
             newfavOrder.sort((a,b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0))
        
             return {
                 ...state,
                Favourite: newfavOrder
             }


            default:
            return state

          


          
    }
}