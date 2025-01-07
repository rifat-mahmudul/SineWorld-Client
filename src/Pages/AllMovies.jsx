import { Helmet } from "react-helmet-async";
import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import FadeLoader from "react-spinners/FadeLoader";
import Card from "../components/Shared/Card";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const AllMovies = () => {

    const [search, setSearch] = useState('');
    const {loading} = useAuth();
    const axiosPublic = useAxiosPublic();

    const {data : movies = [], refetch} = useQuery({
        queryKey : ['movies', search],
        queryFn : async () => {
            const {data} = await axiosPublic(`/movies?search=${search}`);
            return data;
        }
    })


    const handleSearch = (e) => {
        e.preventDefault();
        const searchMovie = e.target.value;
        setSearch(searchMovie)
        refetch();
    }

    return (
        <section>
            <Helmet>
                <title>All Movies - SineWorld</title>
            </Helmet>

            <div className="mt-24 mb-4 text-center">
                <input 
                onChange={handleSearch}
                className="border-2 border-orange-600 w-[90%] sm:w-[350px] p-3 rounded-lg text-xl font-semibold bg-inherit placeholder:text-gray-300" 
                type="text" 
                placeholder="Search Movie" 
                />
            </div>

            <div>
                {
                    loading ?
                    <div className="flex justify-center items-center h-[80vh] text-yellow-600">
                        <FadeLoader color="#ca8a04" />
                    </div>
                    :

                    movies.length === 0 && <p className="text-center text-4xl text-red-500 font-bold">NO DATA FOUND</p>
                }
            </div>

            <div 
            className="pt-4 max-w-[90%] xl:max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 items-center justify-between gap-8 mb-16"
            >
                {
                    loading ?
                    <div className="flex justify-center items-center h-[80vh] text-yellow-600">
                        <FadeLoader color="#ca8a04" />
                    </div>
                    :
                    movies.map(movie => <Card key={movie._id} movie={movie}></Card>)
                }
            </div>
        </section>
    )
}

export default AllMovies
