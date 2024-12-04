/* eslint-disable react/prop-types */
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { useEffect } from 'react';
import { Link } from "react-router"

const Card = ({ movie }) => {
    useEffect(() => {
        AOS.init();
    }, []);

    const { MoviePoster, MovieTitle, Genre, Duration, ReleaseYear, rating, _id } = movie;

    return (
        <div data-aos="zoom-in-up" className="shadow-xl border border-gray-400 rounded-lg hover:scale-105 transition">
            <div>
                <img className="rounded-t-lg h-[250px] w-full" src={MoviePoster} alt="" />
            </div>

            <div className="bg-gray-300 px-3 pb-5 rounded-b-lg">
                <div className="flex justify-between items-center pt-3">
                    <h3 className="font-bold font-serif">{MovieTitle}</h3>
                    <p>
                        <span className="font-semibold">Duration : </span>
                        <span className="text-gray-500">{Duration} min</span>
                    </p>
                </div>

                <div className="flex justify-between items-center pt-3">
                    <h3>
                        <span className="font-semibold">Genre : </span>
                        <span className="text-gray-500">{Genre[0]}</span>
                    </h3>

                    <h3>
                        <span className="font-semibold">Release Year : </span>
                        <span className="text-gray-500">{ReleaseYear}</span>
                    </h3>
                </div>

                <div className='flex justify-between items-center mt-5'>
                    <h3 className='flex gap-3 items-center'>
                        <span className="font-semibold">Rating : </span>
                        <Rating style={{ maxWidth: 120 }} value={rating} readOnly/>
                    </h3>

                    <Link to={`/Details/${_id}`}>
                        <button className="text-orange-500 font-bold border-b-2 border-orange-600 rounded-lg py-2 px-5 bg-[#80808038]">
                            See Details
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Card;
