import { Get_Addtocart,Get_Removefromcart,Get_Quantityminus,Get_Quantityplus,Get_TotalPrice} from "../actions/MyBagAction";
import MyBagData from "../../modal/data5";




const initialState ={
    Bag:MyBagData,
    TotalPrice: 0,

}
export default function (state=initialState,action) {

    switch (action.type)
    {
        case Get_Addtocart:
            
            let product_id = action.product.id;
            let product_price = action.product.price;
            const price = [state.TotalPrice];
         
            const TotalPrice = price[0] + product_price;
          
            return {
            
                
               Bag: [...state.Bag, product_id],
               TotalPrice: TotalPrice

             }



             case Get_Removefromcart: 
            


             let del_id = action.product.id;
            let re_product_price = action.product.price;
            const re_price = [state.TotalPrice];
            console.warn(re_product_price);
            const TotalPrices = re_price[0] - re_product_price;

                  const newFavourite = [...state.Bag];
                  const item = newFavourite.indexOf(del_id);
                  if (item < 0) {
                     return;
                  }
                  newFavourite.splice(item, 1);

             return {
                Bag: newFavourite,
                TotalPrice: TotalPrices
             }
             case Get_Quantityminus: 
             let del_id1 = action.quantity.id;
             let price1 = action.quantity.price;
             let quantity  = action.quantity.quantity;
             const actualPrice = [state.TotalPrice];
             let backupPrices = actualPrice - price1;
             let originalPrice, checkPrice;
             quantity = quantity - 1;
             checkPrice = quantity * price1;
             originalPrice = checkPrice + backupPrices;
            console.warn('check ' + checkPrice);
            console.warn('back ' + backupPrices);



             if(quantity === 1 ){
                    originalPrice = actualPrice  
             }
           
           
             return {
                Bag: [...state.Bag],
                TotalPrice: originalPrice,
             }


             

             
            default:
            return state

          


          
    }
}