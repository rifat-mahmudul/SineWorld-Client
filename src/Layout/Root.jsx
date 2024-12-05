import { Outlet } from "react-router"
import Nav from "../components/Home/Nav"
import Footer from "../components/Shared/Footer"

const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default Root
