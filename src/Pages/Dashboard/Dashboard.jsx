import { Outlet } from "react-router"
import DashNav from "../../components/Dashboard/DashNav"

const Dashboard = () => {
    return (
        <section>
            <div className="flex items-start">
                <div className="w-[15%] border-r text-center py-10 border-gray-700 min-h-screen overflow-auto sticky top-0">
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
