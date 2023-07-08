import instance from ".";
import { IProduct, updateForm } from "../model";

export const getAll = () =>
{
    const uri = "product";
    return instance.get( "/product" );
}
export const getById = ( _id: string ) =>
{
    const uri = "/product/" + _id;
    return instance.get( uri );
}
export const update = ( _id: string, body: updateForm ) =>
{
    const uri = "/product/" + _id;
    return instance.put( uri, body )
}

export const deleteProduct = async ( _id: string ) =>
{
    await instance.delete( `/product/${ _id }`, {
        headers: {
            Authorization: "Bearer " + sessionStorage.getItem( 'token' )
        }
    } )
}
export const add = ( body: updateForm ) =>
{
    const uri = "/product/";
    return instance.post( uri, body )

}
