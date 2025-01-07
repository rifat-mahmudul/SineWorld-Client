import { useNavigate, useParams } from "react-router"
import { GrFavorite } from "react-icons/gr";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import HelmetTitle from "../components/Shared/HelmetTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const MovieDetails = () => {

    const navigate = useNavigate();
    const {user} = useAuth();
    const axiosPublic = useAxiosPublic();

    const {data : movies = []} = useQuery({
        queryKey : ['movies'],
        queryFn : async () => {
            const {data} = await axiosPublic('/movies');
            return data;
        }
    })

    const {id} = useParams();
    const details = movies.find(d => d._id == id);


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

        fetch('https://assignment-10-server-delta-sand.vercel.app/favorite', {
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
        <section 
        style={{
            backgroundImage: `url(${details?.MoviePoster}), linear-gradient(to right, rgba(0, 0, 0, 10), rgba(0, 0, 0, 0.2))`,
            backgroundSize: "cover",
            backgroundPosition: "center", 
            backgroundRepeat: "no-repeat",
            backgroundBlendMode : 'overlay'
        }}
        className="mb-16 h-[100vh] text-white"
        >

            <HelmetTitle title={'Details'}></HelmetTitle>

            <div className="max-w-[90%] xl:max-w-[1200px] mx-auto rounded-xl pt-16 sm:pt-24">
                <h1 className="text-6xl font-bold">{details?.MovieTitle}</h1>
                <div>
                    <ul className="flex items-center gap-8 list-disc">
                        <p>{details?.Duration} min</p>
                        <li>{details?.ReleaseYear}</li>
                        <li>{details?.Genre}</li>
                    </ul>
                </div>

                <div className="my-5 sm:max-w-xl max-w-[90%]">
                    <p>{details?.Summary}</p>
                </div>

                <div>
                    <h1><span className="text-gray-300">Director :</span> {details?.Director}</h1>
                </div>

                <div className="mt-8 flex items-center gap-5">
                    <button className="py-3 px-5 bg-primary rounded-lg font-bold text-lg">Subscribe to Watch</button>

                    <button className="h-12 w-12 border border-gray-600 rounded-md hover:border-gray-400 flex items-center justify-center transition">
                        <GrFavorite className="text-xl"></GrFavorite>
                    </button>
                </div>
            </div>
            
        </section>
    )
}

export default MovieDetails