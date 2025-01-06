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
                            <NavLink
                            to={'dashNav'}
                            className={({isActive}) => isActive ? `text-white font-bold border-r-2 w-full block border-primary` : `hover:text-white transition`}
                            >
                            Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink 
                            to={'add-movie'}
                            className={({isActive}) => isActive ? `text-white font-bold border-r-2 w-full block border-primary` : `hover:text-white transition`}
                            >Add Movie
                            </NavLink>
                        </li>

                        <li>
                            <NavLink 
                            to={'my-added'}
                            className={({isActive}) => isActive ? `text-white font-bold border-r-2 w-full block border-primary` : `hover:text-white transition`}
                            >My Added Movie
                            </NavLink>
                        </li>

                        <li>
                            <NavLink 
                            to={'my-favorites'}
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
