/* eslint-disable react/prop-types */
import '@smastrom/react-rating/style.css';
import { Link } from "react-router"

const Card = ({ movie }) => {


    const { MoviePoster, MovieTitle, _id } = movie;

    return (
        <Link to={`/Details/${_id}`}>
            <div className="h-[250px] w-[200px]  rounded-lg hover:scale-105 transition">
                <div>
                    <img className="rounded-lg w-full h-[250px]" src={MoviePoster} alt="" />
                </div>

                <h1 className='mt-2 text-gray-300'>{MovieTitle}</h1>
            </div>
        </Link>
    );
};

export default Card;
