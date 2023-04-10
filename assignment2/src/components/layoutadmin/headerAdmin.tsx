import { Header } from "antd/es/layout/layout";
import { NavLink } from "react-router-dom";

export const HeaderAdmin = () =>
{
    return (
        <Header className="bg-white text-center text-black">
            <NavLink className="mr-5" to="/admin">Admin</NavLink>
            <NavLink to="/">Client</NavLink>
        </Header>
    )
};