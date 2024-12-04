import { Outlet } from "react-router"
import Nav from "../components/Home/Nav"

const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    )
}

export default Root
