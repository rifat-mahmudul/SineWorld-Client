import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import useAuth from "../../Hooks/useAuth";
import FavoriteCard from "../../components/Shared/FavoriteCard";
import FadeLoader from "react-spinners/FadeLoader";

const MyFavorite = () => {

    const [movies, setMovies] = useState([]);
    const {user, loading} = useAuth();

    useEffect(() => {
        fetch(`https://assignment-10-server-delta-sand.vercel.app/favorite/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setMovies(data);
        })
    }, [user?.email])

    return (
        <section className="mt-24">
            <Helmet>
                <title>My Favorites - SineWorld</title>
            </Helmet>

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
            className="pt-4 max-w-[90%] xl:max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-8 mb-16"
            >
                {
                    loading ?
                    <div className="flex justify-center items-center h-[80vh] text-yellow-600">
                        <FadeLoader color="#ca8a04" />
                    </div>
                    :
                    movies.map(movie => <FavoriteCard key={movie._id} movie={movie} movies={movies} setMovies={setMovies}></FavoriteCard>)
                }
            </div>
        </section>
    )
}

export default MyFavorite
