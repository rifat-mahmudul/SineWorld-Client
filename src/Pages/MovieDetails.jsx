import { useParams } from "react-router"
import { Rating } from "@smastrom/react-rating";
import { MdDeleteForever } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";
import { FaPencil } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
import useMovies from "../Hooks/useMovies";

const MovieDetails = () => {

    const [movies] = useMovies();

    const {id} = useParams();
    console.log(id)
    const details = movies.find(d => d._id == id);

    return (
        <section className="max-w-[90%] xl:max-w-[850px] mx-auto bg-gray-200 p-5 rounded-xl mt-24 mb-16">

            <Helmet>
                <title>Details - SineWorld</title>
            </Helmet>

            <div className="col-span-4">
                <img className="h-[300px] w-full rounded-lg" src={details?.MoviePoster} alt="" />
                <h1 className="font-bold text-2xl mt-3 mb-3">{details?.MovieTitle}</h1>
                <p className="sm:max-w-xl">{details?.Summary}</p>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <p className="mt-3">
                        <span className="font-bold">Duration</span> : {details?.Duration}
                    </p>
                    <p className="mt-3">
                        <span className="font-bold">Release Year</span> : {details?.ReleaseYear}
                    </p>
                    <p className="mt-3">
                        <span className="font-bold">Genre</span> : {details?.Genre}
                    </p>
                    <h3 className='flex gap-3 items-center mt-3'>
                            <span className="font-semibold">Rating : </span>
                            <Rating style={{ maxWidth: 120 }} value={details?.rating} readOnly/>
                    </h3>
                </div>

                <div className="mt-5 flex flex-col sm:flex-row gap-5">
                    <button className="py-3 px-5 rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 font-bold text-white hover:from-orange-500 hover:to-orange-600 flex gap-1 items-center">
                        <MdDeleteForever size={24} /> 
                        <p>Delete movie</p>
                    </button>

                    <button className="py-3 px-5 rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 font-bold text-white hover:from-orange-500 hover:to-orange-600 flex gap-1 items-center">
                        <GrFavorite size={24} /> 
                        <p>Add to Favorite</p>
                    </button>

                    <button className="py-3 px-5 rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 font-bold text-white hover:from-orange-500 hover:to-orange-600 flex gap-1 items-center">
                        <FaPencil size={24} />
                        <p>Update Movie</p>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default MovieDetails