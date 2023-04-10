import { Outlet } from "react-router-dom"
import { HeaderAdmin } from "./headerAdmin"
import { SideBarAdmin } from "./sldebar"

const BaseAdmin = () =>
{
    return (
        <>
            <SideBarAdmin
                header={ <HeaderAdmin /> } content={ <Outlet /> } />
        </>
    )
}
export default BaseAdmin