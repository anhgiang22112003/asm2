import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Space, Table, Button, Popconfirm, message, Image } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { deleteProduct, getAll } from "../../../api/product";
import { IProduct } from '../../../model';
import axios from 'axios';


interface DataType
{
    key: string;
    name: string;
    price: number;
    original_price: number;

    description: string;



}

const columns: ColumnsType<DataType> = [
    {
        key: 'name',
        title: 'Tên',
        dataIndex: 'name',
        align: 'center',
        width: '10%'
    },
    {
        key: 'price',
        title: 'Giá',
        dataIndex: 'price',
        align: 'center',
        width: '10%'
    },
    {
        key: 'original_price',
        title: 'Giá gốc',
        dataIndex: 'original_price',
        align: 'center',
        width: '10%'
    },

    {
        key: 'description',
        title: 'Mô tả',
        dataIndex: 'description',

    },


    {
        key: 'action',
        title: 'Thao tác',
        align: 'center',
        width: '15%',
        render: ( _, record ) => (
            <Space size="middle">
                <NavLink to={ `admin/update/${ record.key }` }>
                    <Button className="" >
                        <div className='flex '>
                            <EditOutlined />
                        </div>
                    </Button>
                </NavLink>

                <Popconfirm
                    placement="topLeft"
                    title="Bạn muốn xóa sản phẩm?"
                    description="Xóa sẽ mất sản phẩm này trong database!"
                    onConfirm={ () =>
                    {
                        deleteProduct( record.key );
                        message.info( 'Xóa sản phẩm thành công!' );
                        setTimeout( () =>
                        {
                            window.location.reload();
                        }, 1000 );
                    } }
                    okText="Yes"
                    cancelText="No"
                    okButtonProps={ { style: { backgroundColor: '#007bff', color: 'white' } } }
                    cancelButtonProps={ { style: { backgroundColor: '#dc3545', color: 'white' } } }>
                    <Button>
                        <div className='flex '>
                            <DeleteOutlined />
                        </div>
                    </Button>
                </Popconfirm>
            </Space>
        )
    },
];

export const AdminProduct: React.FC = () =>
{
    const [ products, setProducts ] = useState( [] )

    useEffect( () =>
    {
        ( async () =>
        {
            const { data } = await axios.get( "http://localhost:8080/product" )

            setProducts(
                data.map( ( item: IProduct ) =>
                {
                    return {
                        key: item._id,
                        name: item.name,
                        price: item.price,
                        original_price: item.original_price,
                        description: item.description,


                    }
                } ) )
        } )

            ()
    }, [] )

    return (
        <Table columns={ columns } dataSource={ products } pagination={ { pageSize: 3 } } />
    )
}