import { FcGoogle } from "react-icons/fc"
import { Link, useLocation, useNavigate } from "react-router"
import loginImage from '../../assets/login.jpg'
import { useRef, useState } from "react";
import { IoMdEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";


const Login = () => {

    const {logInUser, googleSignIn} = useAuth();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate()
    const emailRef = useRef(null);
    const location = useLocation();
    const from = location.state || '/';

    const handleLogIn = e => {
        e.preventDefault();
        const form = e.target;
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

        logInUser(email, password)
        .then(() => {
            Swal.fire({
                icon: "success",
                title: "Successfully logged in",
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

    };

    const handleGoogle = () => {
        googleSignIn()
        .then(() => {
            Swal.fire({
                icon: "success",
                title: "Successfully logged in",
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
            console.log(error)
        })
    }

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prev) => !prev);
    };

    return (
        <div className="max-w-[90%] xl:max-w-[1100px] mx-auto flex flex-col justify-center gap-8 sm:flex-row items-center mb-16 mt-14 lg:h-[100vh]">

            <Helmet>
                <title>Login - SineWorld</title>
            </Helmet>

            <div>
                <img className="h-[300px] lg:w-[400px] rounded-lg" src={loginImage} alt="" />
            </div>

            <div className="lg:w-1/3 bg-gray-100 shadow-md rounded p-5">
                <form className="" onSubmit={handleLogIn}>
                    <h1 className="font-bold text-3xl mb-4 text-center">Log in</h1>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            ref={emailRef}
                            id="email"
                            type="email"
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
                            placeholder="password"
                            
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
                    <div className="text-right text-blue-400">
                        
                            <button
                                className=""
                                href="#"
                            >
                                Forget Password?
                            </button>
                        
                    </div>

                    <button  className="bg-gradient-to-br from-orange-500 to-orange-800 text-center mt-4 py-2 text-white font-bold rounded-lg inline-block w-full" type="submit">log in</button>

                    <label>
                            <p className="mt-2">Do not have an account ? please <Link to="/register" className='text-blue-500 font-bold'>Register</Link></p>
                    </label> 

                </form>

                
                <p className='text-center mt-3 mb-4'>or</p>
                        
                <button onClick={handleGoogle}  className='flex items-center mx-auto gap-2 border border-error p-3 rounded-lg mb-2'>
                    <FcGoogle className='text-2xl'></FcGoogle> 
                    <span>log in with google</span>
                </button>
            </div>
        </div>
    )
}

export default Login