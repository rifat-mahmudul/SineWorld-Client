import { NavLink } from "react-router"
import Logo from "../Shared/Logo"

const DashNav = () => {
    return (
        <section>
            <div className="flex justify-center items-center">
                <Logo></Logo>
            </div>

            <div className="mt-8">
                <nav>
                    <ul className="flex flex-col gap-3 text-xl font-semibold text-gray-300">
                        <li>
                            {/* <NavLink
                            to={'dashNav'}
                            className={({isActive}) => isActive ? `text-white font-bold border-r-2 w-full block border-primary` : `hover:text-white transition`}
                            >
                            Home
                            </NavLink> */}
                        </li>

                        <li>
                            <NavLink 
                            to={'/dashboard/add-movie'}
                            className={({isActive}) => isActive ? `text-white font-bold border-r-2 w-full block border-primary` : `hover:text-white transition`}
                            >Add Movie
                            </NavLink>
                        </li>

                        <li>
                            <NavLink 
                            to={'/dashboard/manage-movie'}
                            className={({isActive}) => isActive ? `text-white font-bold border-r-2 w-full block border-primary` : `hover:text-white transition`}
                            >Manage Movie
                            </NavLink>
                        </li>

                        <li>
                            <NavLink 
                            to={'/dashboard/my-favorite'}
                            className={({isActive}) => isActive ? `text-white font-bold border-r-2 w-full block border-primary` : `hover:text-white transition`}
                            >My Favourite
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default DashNav
