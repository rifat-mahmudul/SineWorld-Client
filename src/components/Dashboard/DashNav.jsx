import { NavLink } from "react-router"
import Logo from "../Shared/Logo"

const DashNav = () => {
    return (
        <section>
            <div className="flex justify-center items-center">
                <Logo></Logo>
            </div>

            <div>
                <nav>
                    <ul>
                        <li>
                            <NavLink>Home</NavLink>
                        </li>

                        <li>
                            <NavLink 
                            to={'add-movie'}
                            >Add Movie
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default DashNav
