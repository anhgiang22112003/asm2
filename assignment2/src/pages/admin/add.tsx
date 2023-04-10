import { useForm } from "react-hook-form"
import * as yup from "yup"
import { useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';

import { useNavigate, useParams } from "react-router-dom";

import { add, getById, update } from "../../api/product";
import { updateForm, updateSchema } from "../../model";

const Add = () =>
{

    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }
    } = useForm<updateForm>( {
        resolver: yupResolver( updateSchema ),

    } )
    const onSubmit = async ( body: updateForm ) =>
    {

        const response = await add( body )
        console.log( response );
        navigate( "/admin" )

    }


    // useEffect( () =>
    // {
    //     if ( _id )
    //     {
    //         fetchProductByid( _id )
    //     }

    // }, [] )
    return <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                <div className="lg:col-span-2 lg:py-12">

                </div>

                <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                    <form action="" className="space-y-4" onSubmit={ handleSubmit( onSubmit ) }>
                        <div>
                            <label >Name</label>
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                { ...register( "name" ) }
                            />
                        </div>
                        <p className='text-red-600 text-[10px]'>
                            { errors.name && errors.name.message }
                        </p>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label>Gia</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    { ...register( "price" ) }
                                    type="number"

                                />
                            </div>
                            <p className='text-red-600 text-[10px]'>
                                { errors.price && errors.price.message }
                            </p>
                            <div>
                                <label >giam gia</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    { ...register( "original_price" ) }
                                    type="number"

                                />
                            </div>
                            <p className='text-red-600 text-[10px]'>
                                { errors.original_price && errors.original_price.message }
                            </p>
                        </div>



                        <div>
                            <label >mota</label>

                            <textarea
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                { ...register( "description" ) }
                            ></textarea>
                        </div>
                        <p className='text-red-600 text-[10px]'>
                            { errors.description && errors.description.message }
                        </p>

                        <div className="mt-4">
                            <button
                                type="submit"
                                className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                            >
                                them
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

}
export default Add