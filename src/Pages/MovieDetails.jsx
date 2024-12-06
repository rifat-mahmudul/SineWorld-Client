import { Link, useNavigate, useParams } from "react-router"
import { Rating } from "@smastrom/react-rating";
import { MdDeleteForever } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";
import { FaPencil } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
import useMovies from "../Hooks/useMovies";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";

const MovieDetails = () => {

    const [movies] = useMovies();
    const navigate = useNavigate();
    const {user} = useAuth();

    const {id} = useParams();
    const details = movies.find(d => d._id == id);

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/movies/${details?._id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your movie has been deleted.",
                            icon: "success"
                        });
                        navigate('/all-movies')
                    }
                })
                .catch(error => console.error("Error deleting movie:", error));
            }
        });
    }


    const handleFavorite = () => {

        const data = {
            MoviePoster : details?.MoviePoster,
            MovieTitle : details?.MovieTitle,
            Genre : details?.Genre,
            Duration : details?.Duration,
            ReleaseYear : details?.ReleaseYear,
            rating : details?.rating,
            Summary : details?.Summary,
            email : user?.email,
        }

        fetch('http://localhost:5000/favorite', {
            method : 'POST',
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                Swal.fire({
                    icon: "success",
                    title: "Successfully Added My Favorite",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/my-favorite')
            }
        })
    }

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
                    <button onClick={handleDelete} className="py-3 px-5 rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 font-bold text-white hover:from-orange-500 hover:to-orange-600 flex gap-1 items-center">
                        <MdDeleteForever size={24} /> 
                        <p>Delete movie</p>
                    </button>

                    <button onClick={handleFavorite} className="py-3 px-5 rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 font-bold text-white hover:from-orange-500 hover:to-orange-600 flex gap-1 items-center">
                        <GrFavorite size={24} /> 
                        <p>Add to Favorite</p>
                    </button>

                    <Link to={`/update-movie/${details?._id}`}>
                        <button className="py-3 px-5 rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 font-bold text-white hover:from-orange-500 hover:to-orange-600 flex gap-1 items-center">
                            <FaPencil size={24} />
                            <p>Update Movie</p>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default MovieDetails