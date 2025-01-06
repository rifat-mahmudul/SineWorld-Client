import { Routes, Route } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Error from "../Pages/Error";
import MovieDetails from "../Pages/MovieDetails";
import PrivateRoutes from "./PrivateRoutes";
import MyFavorite from "../Pages/Dashboard/MyFavorite";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddMovie from "../Pages/Dashboard/AddMovie";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Root />}>
                <Route index element={<Home />}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route 
                    path={`/Details/:id`} 
                    element={<PrivateRoutes><MovieDetails></MovieDetails></PrivateRoutes>}>
                </Route>
                <Route path="/my-favorite" element={<PrivateRoutes><MyFavorite></MyFavorite></PrivateRoutes>}></Route>
            </Route>

            <Route path="/dashboard" element={<Dashboard></Dashboard>}>
                <Route path="add-movie" element={<PrivateRoutes><AddMovie></AddMovie></PrivateRoutes>}></Route>
            </Route>

            <Route path="*" element={<Error></Error>}></Route>
        </Routes>
    );
};

export default AppRoutes;