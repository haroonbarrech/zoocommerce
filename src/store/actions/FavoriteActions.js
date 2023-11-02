export const Get_to_Favorite='Add_to_Favorite';
export const Del_from_Favorite='Del_from_Favorite';
export const GetPrice_from_lowtohighest='Price_from_lowtohighest';
export const GetPrice_from_highesttolowest='Price_from_highesttolowest';



export const add_to_Favorite=(id) =>
{
    return {type:Get_to_Favorite, id}
}

export const Delete_from_Favorite=(id) =>
{
    return {type:Del_from_Favorite, id}
}
export const Price_from_lowtohighest=(id) =>
{
    return {type:Price_from_lowtohighest, id}
}
export const Price_from_highesttolowest=(id) =>
{
    return {type:Price_from_highesttolowest, id}
}
