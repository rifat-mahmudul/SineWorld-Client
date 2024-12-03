/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router";
import useAuth from "../Hooks/useAuth"

const PrivateRoutes = ({children}) => {

    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading) {
        return <p>Loading.....</p>
    }

    if(user){
        return children;
    }

    return <Navigate to='/login' state={location.pathname} replace={true}></Navigate>
}

export default PrivateRoutes
