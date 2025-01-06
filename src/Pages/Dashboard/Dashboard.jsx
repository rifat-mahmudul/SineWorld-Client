import { Outlet } from "react-router"
import DashNav from "../../components/Dashboard/DashNav"

const Dashboard = () => {
    return (
        <section>
            <div className="flex items-start gap-10">
                <div className="w-[15%] border-r-2 text-center py-10 border-red-400 min-h-screen overflow-auto">
                    <DashNav></DashNav>
                </div>

                <div className="w-[85%] py-10">
                    <Outlet></Outlet>
                </div>
            </div>
        </section>
    )
}

export default Dashboard
