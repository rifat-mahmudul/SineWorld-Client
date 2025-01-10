import { Outlet } from "react-router"
import DashNav from "../../components/Dashboard/DashNav"

const Dashboard = () => {
    return (
        <section>
            <div className="lg:flex items-start">
                <div className="lg:w-[15%] w-[90%] lg:border-r border-b lg:text-center py-3 lg:py-10 border-gray-700 lg:min-h-screen lg:overflow-auto sticky top-0 mx-auto backdrop-blur-lg lg:backdrop-blur-0">
                    <DashNav></DashNav>
                </div>

                <div  className="lg:py-10 mt-5 w-[90%] lg:w-[80%] mx-auto">
                    <Outlet></Outlet>
                </div>
            </div>
        </section>
    )
}

export default Dashboard
