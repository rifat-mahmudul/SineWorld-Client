import { Routes, Route } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Error from "../Pages/Error";
import MovieDetails from "../Pages/MovieDetails";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddMovie from "../Pages/Dashboard/AddMovie";
import ManageMovie from "../Pages/Dashboard/ManageMovie";
import MyFavorite from "../Pages/Dashboard/MyFavorite";
import AllMovies from "../Pages/AllMovies";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Root />}>
                <Route index element={<Home />}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route 
                    path={`/Details/:id`} 
                    element={<MovieDetails></MovieDetails>}>
                </Route>
                <Route path={'all-movies'} element={<AllMovies></AllMovies>} ></Route>
            </Route>

            <Route path="/dashboard" element={<Dashboard></Dashboard>}>
                <Route path="/dashboard/add-movie" element={<PrivateRoutes><AddMovie></AddMovie></PrivateRoutes>}></Route>
                <Route path="/dashboard/manage-movie" element={<PrivateRoutes><ManageMovie></ManageMovie></PrivateRoutes>}></Route>
                <Route path="/dashboard/my-favorite" element={<PrivateRoutes><MyFavorite></MyFavorite></PrivateRoutes>}></Route>
            </Route>

            <Route path="*" element={<Error></Error>}></Route>
        </Routes>
    );
};

export default AppRoutes;