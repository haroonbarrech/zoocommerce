export const Get_Addtocart='add_to_cart';
export const Get_Removefromcart='Remove_from_cart';
export const Get_TotalPrice='TotalPrice';
export const Get_Quantityminus='Quantityminus';
export const Get_Quantityplus='Quantityplus';



export const add_to_cart=(product) =>
{
    return {type:Get_Addtocart, product}
}
export const Remove_from_cart=(product) =>
{
    return {type: Get_Removefromcart,product}
}

export const TotalPrice=(id) =>
{
    return {type:Get_TotalPrice, id}
}

export const Quantityplus=(quantity) =>
{
    return {type:Get_Quantityplus, quantity}
}
export const Quantityminus=(quantity) =>
{
    return {type:Get_Quantityminus, quantity}
}


