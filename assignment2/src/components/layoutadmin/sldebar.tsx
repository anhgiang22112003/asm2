import { Layout, Menu, MenuProps, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import { useState } from "react";
import { NavLink } from "react-router-dom";

type MenuItem = Required<MenuProps>[ 'items' ][ number ];

function getItem ( label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[] ): MenuItem
{
    return { key, icon, children, label } as MenuItem;
}

const items: MenuItem[] = [
    getItem( 'Dashboard', '1', <NavLink to="/admin"></NavLink> ),
    getItem( 'Product', '2', <NavLink to="/admin/product"></NavLink> ),
    getItem( 'User', '3', <NavLink to="/admin/user"></NavLink> )
];

export const SideBarAdmin: React.FC = ( { header, content } ) =>
{
    const [ collapsed, setCollapsed ] = useState( false );
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout style={ { minHeight: '100vh' } }>
            <Sider collapsible collapsed={ collapsed } onCollapse={ ( value ) => setCollapsed( value ) } >
                <div style={ { height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' } } />
                <Menu theme="dark" defaultSelectedKeys={ [ '1' ] } mode="inline" items={ items } />
            </Sider>

            <Layout className="site-layout">

                { header }

                <Content style={ { margin: '0 16px' } }>
                    <div style={ { padding: 24, minHeight: 360, background: colorBgContainer } }>
                        { content }
                    </div>
                </Content>



            </Layout>
        </Layout>
    );
};