import { NavLink } from "react-router"
import Logo from "../Shared/Logo"
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const DashNav = () => {

    const [open, setIsOpen] = useState(false);

    const navItems = <>
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
            onClick={() => setIsOpen(false)}
            to={'/dashboard/add-movie'}
            className={({isActive}) => isActive ? `text-white font-bold border-r-2 w-full block border-primary` : `hover:text-white transition`}
            >Add Movie
            </NavLink>
        </li>

        <li>
            <NavLink 
            onClick={() => setIsOpen(false)}
            to={'/dashboard/manage-movie'}
            className={({isActive}) => isActive ? `text-white font-bold border-r-2 w-full block border-primary` : `hover:text-white transition`}
            >Manage Movie
            </NavLink>
        </li>

        <li>
            <NavLink 
            onClick={() => setIsOpen(false)}
            to={'/dashboard/my-favorite'}
            className={({isActive}) => isActive ? `text-white font-bold border-r-2 w-full block border-primary` : `hover:text-white transition`}
            >My Favourite
            </NavLink>
        </li>
    </>

    return (
        <section className="">
            <div className="flex justify-between items-center lg:block">
                <div className="lg:flex justify-center items-center">
                    <Logo></Logo>
                </div>

                <div className="mt-8 hidden lg:block">
                    <nav>
                        <ul className="flex flex-col gap-3 text-xl font-semibold text-gray-300">
                            {navItems}
                        </ul>
                    </nav>
                </div>

                <div className='lg:hidden'>
                        <button className='text-2xl font-bold' onClick={() => setIsOpen(!open)}>
                            { open ?
                                <RxCross2 />
                                :
                                <RiMenu3Fill/>
                            }
                        </button>
                    </div>

                    { open && 
                    <div className='lg:hidden absolute top-12 right-0 shadow-lg p-4 rounded-lg w-[60%] sm:w-[30%] bg-gray-900 ease-in-out duration-1000 text-white'>
                        <div>
                            <nav>
                                <ul className='flex flex-col text-center space-y-4 font-semibold'>
                                    {navItems}
                                </ul>
                            </nav>
                        </div>
                    </div>
                }


            </div>
        </section>
    )
}

export default DashNav
