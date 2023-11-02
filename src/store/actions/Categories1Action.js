export const Get_watch='watch';
export const Get_deleted='Deleted';



export const watch =(id) =>
{
    return {type:Get_watch, id}
}
export const Delete =(id) =>
{
    return {type:Get_deleted, id}
}
