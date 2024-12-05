import { Routes, Route } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Error from "../Pages/Error";
import AllMovies from "../Pages/AllMovies";
import MovieDetails from "../Pages/MovieDetails";
import PrivateRoutes from "./PrivateRoutes";
import UpcomingShow from "../Pages/UpcomingShow";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Root />}>
                <Route index element={<Home />}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route path="/all-movies" element={<AllMovies></AllMovies>}></Route>
                <Route 
                    path={`/Details/:id`} 
                    element={<PrivateRoutes><MovieDetails></MovieDetails></PrivateRoutes>}>
                </Route>
                <Route path="upcoming-show" element={<UpcomingShow></UpcomingShow>}></Route>
            </Route>

            <Route path="*" element={<Error></Error>}></Route>
        </Routes>
    );
};

export default AppRoutes;