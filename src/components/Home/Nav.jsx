import { useState } from "react"
import { RiMenu3Fill } from "react-icons/ri"
import { RxCross2 } from "react-icons/rx"
import { NavLink, useLocation, useNavigate } from "react-router"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import Logo from "../Shared/Logo";

const Nav = () => {

    AOS.init();
    const [open, setOpen] = useState(false);
    const {logOut, user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state || '/';


    const handleLogOut = () => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, log out!"
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                .then(() => {
                    Swal.fire({
                        icon: "success",
                        title: "Successfully Log Out",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate(from)
                    .catch(error => {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: `${error.message}`,
                        });
                        return;
                    })
                })
            }
        });
    }


    const navItem = <>
    
        <NavLink 
        onClick={() => setOpen(false)} 
        className={({isActive}) => isActive ? `text-primary font-bold` : `font-semibold hover:text-primary transition`} 
        to='/'>
            HOME
        </NavLink>

        <NavLink 
        onClick={() => setOpen(false)} 
        className={({isActive}) => isActive ? `text-primary font-bold` : `font-semibold hover:text-primary transition`} 
        to={'all-movies'} 
        >
            All Movies
        </NavLink>

        {user && 
        <NavLink 
        onClick={() => setOpen(false)} 
        className={({isActive}) => isActive ? `text-primary font-bold` : `font-semibold hover:text-primary transition`} 
        to='/dashboard' 
        >
            My Dashboard
        </NavLink>}

        {
            user ? 
            <>

            <div className="relative group h-12 w-12 rounded-full border border-indigo-500 cursor-pointer">
                <img className="w-full h-full rounded-full" src={user?.photoURL} alt="" />

                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-orange-700 text-white text-xs rounded py-1 px-2">
                    <p>{user?.displayName}</p>
                </div>
            </div>

            <button 
            onClick={handleLogOut} 
            className="py-2 px-5 rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 font-bold text-white hover:from-orange-500 hover:to-orange-600">
                Log Out
            </button>
            
            </>
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
        <header className="w-full top-0 fixed z-10 bg-[#00000094] backdrop-blur-sm">
            <div className="flex justify-between items-center py-3 max-w-[90%] xl:max-w-[1200px] mx-auto text-white px-4">
                
                <div>
                    <Logo></Logo>
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
