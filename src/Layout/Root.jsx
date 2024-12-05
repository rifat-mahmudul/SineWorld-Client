import { Outlet } from "react-router"
import Nav from "../components/Home/Nav"
import Footer from "../components/Shared/Footer"

const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="min-h-[calc(100vh-200px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Root
