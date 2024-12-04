/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router";
import useAuth from "../Hooks/useAuth"
import FadeLoader from "react-spinners/FadeLoader";

const PrivateRoutes = ({children}) => {

    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading) {
        return <div className="flex justify-center items-center h-[100vh] text-yellow-600">
        <FadeLoader color="#ca8a04" />
    </div>
    }

    if(user){
        return children;
    }

    return <Navigate to='/login' state={location.pathname} replace={true}></Navigate>
}

export default PrivateRoutes
