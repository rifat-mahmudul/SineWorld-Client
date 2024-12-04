import { FcGoogle } from "react-icons/fc"
import { Link, useLocation, useNavigate } from "react-router"
import loginImage from '../../assets/register.jpg'
import { useState } from "react"
import Swal from "sweetalert2"
import { FaEyeSlash } from "react-icons/fa"
import { IoMdEye } from "react-icons/io"
import useAuth from "../../Hooks/useAuth"
import { Helmet } from "react-helmet-async"

const Register = () => {

    const location = useLocation();
    const {createUser, profileUpdated, logOut, googleSignIn} = useAuth();
    const [error, setError] = useState(null);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const navigate = useNavigate();
    const from = location.state || '/';

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        setError('');
        if(password.length < 6){
            setError('Password must be at least 6 characters');
            return
        }

        if (!/[A-Z]/.test(password)) {
            return setError("Password must include at least one uppercase letter.");
        }

        if (!/[a-z]/.test(password)) {
            return setError("Password must include at least one lowercase letter.");
        }

        createUser(email, password)
        .then(() => {
            profileUpdated(name, photoURL);
            logOut();
            Swal.fire({
                icon: "success",
                title: "Registered Successfully",
                showConfirmButton: false,
                timer: 1500
            });
            navigate(from);
        })
        .catch(error => {
            Swal.fire({
                icon: "error",
                title: `Oops!`,
                text: `${error.message}`,
            });
            form.reset();
        })
    };

    const handleGoogle = () => {
        googleSignIn()
        .then(() => {
            Swal.fire({
                icon: "success",
                title: "Registered Successfully",
                showConfirmButton: false,
                timer: 1500
            });
            navigate(from);
        })
        .catch(error => {
            Swal.fire({
                icon: "error",
                title: `Oops!`,
                text: `${error.message}`,
            });
        })
    }

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prev) => !prev);
    };

    return (
        <section className="max-w-[90%] xl:max-w-[1000px] mx-auto flex flex-col justify-center gap-8 sm:flex-row items-center mb-16 mt-24">
            
            <Helmet>
                <title>Register - SineWorld</title>
            </Helmet>

            <div>
                <img className="h-[300px] lg:w-[500px] rounded-lg" src={loginImage} alt="" />
            </div>

            <div className="sm:w-[40%] bg-gray-100 shadow-md rounded p-5">
                <form onSubmit={handleRegister}>
                    <h1 className="font-bold text-3xl mb-4 text-center">Registration</h1>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            name="name"
                            placeholder="Username"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            photoURL
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="photoURL"
                            type="text"
                            name="photoURL"
                            placeholder="photoURL"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="text"
                            name="email"
                            placeholder="Username"
                            required
                        />
                    </div>
                    <div className="mb-2 relative">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type={isPasswordVisible ? "text" : "password"}
                            name="password"
                            placeholder="password"
                            required
                        />
                        <button
                            className=" absolute right-2 top-10"
                            type="button"
                            onClick={togglePasswordVisibility}
                            style={{ marginLeft: '10px' }}
                        >
                            {isPasswordVisible ?  <IoMdEye></IoMdEye> :  <FaEyeSlash></FaEyeSlash>}
                        </button>
                        {
                            error && <p className="text-red-500 mt-3">{error}</p>
                        }
                    </div>

                    <button className="bg-gradient-to-br from-orange-500 to-orange-800 text-center mt-4 py-2 text-white font-bold rounded-lg inline-block w-full" type="submit">Register</button>

                    <label>
                            <p className="mt-2">Already have an account ? please <Link to="/login" className='text-blue-500 font-bold'>log in</Link></p>
                    </label> 

                </form>

                
                <p className='text-center mt-3 mb-4'>or</p>
                        
                <button onClick={handleGoogle} className='flex items-center mx-auto gap-2 border border-error p-3 rounded-lg mb-2'>
                    <FcGoogle className='text-2xl'></FcGoogle> 
                    <span>continue with google</span>
                </button>
            </div>
        </section>
    )
}

export default Register