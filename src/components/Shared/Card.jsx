/* eslint-disable react/prop-types */
import { Link } from "react-router"

const Card = ({movie}) => {
    return (
        <Link to={`/Details/${movie?._id}`}>
            <div className="h-[260px] w-[180px] rounded-lg hover:scale-105 transition">
                <div>
                    <img className="rounded-lg w-full h-[250px]" src={movie?.MoviePoster} alt="img" />
                </div>
                <h1 className="mt-2 text-gray-300">{movie?.MovieTitle}</h1>
            </div>
        </Link>
    )
}

export default Card
