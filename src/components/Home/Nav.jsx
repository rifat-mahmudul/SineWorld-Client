
import { useContext, useState } from "react"
import { RiMenu3Fill } from "react-icons/ri"
import { RxCross2 } from "react-icons/rx"
import { Link, NavLink, useNavigate } from "react-router"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { authContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Nav = () => {


    AOS.init();
    const [open, setOpen] = useState(false);
    const {logOut, user} = useContext(authContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
        .then(() => {
            Swal.fire({
                icon: "success",
                title: "Successfully Log Out",
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/')
        })
        .catch(error => {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${error.message}`,
            });
            return;
        })
    }


    const navItem = <>
    
        <NavLink 
        onClick={() => setOpen(false)} 
        className={({isActive}) => isActive ? `text-orange-500 font-bold` : `font-semibold hover:text-orange-500 transition`} to='/'>HOME
        </NavLink>

        <NavLink 
        onClick={() => setOpen(false)} 
        className={({isActive}) => isActive ? `text-orange-500 font-bold` : `font-semibold hover:text-orange-500 transition`} 
        to="/all-movies">
            All Movies
        </NavLink>

        <NavLink 
        onClick={() => setOpen(false)} 
        className={({isActive}) => isActive ? `text-orange-500 font-bold` : `font-semibold hover:text-orange-500 transition`} 
        to="/add-movie">
            Add Movie
        </NavLink>

        <NavLink 
        onClick={() => setOpen(false)} 
        className={({isActive}) => isActive ? `text-orange-500 font-bold` : `font-semibold hover:text-orange-500 transition`} 
        to="/my-favorites">
            My Favorites
        </NavLink>

        <NavLink 
        onClick={() => setOpen(false)} 
        className={({isActive}) => isActive ? `text-orange-500 font-bold` : `font-semibold hover:text-orange-500 transition`} 
        to="/our-shop">
            Ticket
        </NavLink>

        {
            user ? 
            <button 
            onClick={handleLogOut} 
            className="py-2 px-5 rounded-lg bg-yellow-600 font-bold text-white">
                Log Out
            </button>
            :

            <NavLink 
            onClick={() => setOpen(false)} 
            className={({isActive}) => isActive ? `font-bold` : `font-semibold transition`} 
            to="/login">
                <button 
                className="py-2 px-5 rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 font-bold text-white hover:from-orange-500 hover:to-orange-600">
                    LOG IN
                </button>
            </NavLink>
        }

    
    </>

    return (
        <header className="w-full fixed z-10 bg-[#00000094]">
            <div className="flex justify-between items-center py-3 max-w-[90%] xl:max-w-[1200px] mx-auto text-white px-4 backdrop-blur-lg">
                <div>
                    <Link to="/">
                        <h1 className="flex font-bold text-4xl font-Rancho">
                            <span className="text-orange-600">Sine</span>
                            <span className="text-orange-500">World</span>
                        </h1>
                    </Link>
                </div>

                <div>
                    <nav>
                        <ul className="lg:flex items-center hidden gap-5">
                            {navItem}
                        </ul>
                    </nav>
                </div>

                <button onClick={() => setOpen(!open)} className="text-3xl font-bold lg:hidden">

                    {
                        open ? <RxCross2 /> : <RiMenu3Fill />
                    }
                    
                </button>

            </div>
                {
                    open ? 
                    <div>
                        <nav className="lg:hidden relative">
                            <ul 
                            data-aos="fade-left" 
                            className="flex flex-col gap-5 absolute -top-4 py-5 px-20 right-2 bg-gradient-to-tr from-orange-200 to-orange-400 text-center border border-gray-200 rounded-xl transition delay-75">
                                {navItem}
                            </ul>
                        </nav>
                    </div> 
                    : ''
                }
        </header>
    )
}

export default Nav
