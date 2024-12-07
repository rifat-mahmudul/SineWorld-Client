import { Helmet } from "react-helmet-async";
import Card from "../components/Shared/Card";
import useMovies from "../Hooks/useMovies"
import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import FadeLoader from "react-spinners/FadeLoader";

const AllMovies = () => {

    const [movies] = useMovies();
    const [movieData, setMovieData] = useState(movies)
    const [search, setSearch] = useState('');
    const {loading} = useAuth();

    useEffect(() => {
        fetch(`https://assignment-10-server-delta-sand.vercel.app/movies?search=${search}`)
        .then(res => res.json())
        .then(data => {
            setMovieData(data);
        })
    }, [search])


    const handleSearch = (e) => {
        e.preventDefault();
        const searchMovie = e.target.value;
        setSearch(searchMovie)
    }

    return (
        <section>
            <Helmet>
                <title>All Movies - SineWorld</title>
            </Helmet>

            <div className="mt-24 mb-4 text-center">
                <input 
                onChange={handleSearch}
                className="border-2 border-orange-600 w-[90%] sm:w-[350px] p-3 rounded-lg text-xl font-semibold" 
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

                    movieData.length === 0 && <p className="text-center text-4xl text-red-500 font-bold">NO DATA FOUND</p>
                }
            </div>

            <div 
            className="pt-4 max-w-[90%] xl:max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-8 mb-16"
            >
                {
                    loading ?
                    <div className="flex justify-center items-center h-[80vh] text-yellow-600">
                        <FadeLoader color="#ca8a04" />
                    </div>
                    :
                    movieData.map(movie => <Card key={movie._id} movie={movie}></Card>)
                }
            </div>
        </section>
    )
}

export default AllMovies
