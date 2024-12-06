/* eslint-disable react/prop-types */
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { useEffect } from 'react';
import { MdDeleteForever } from 'react-icons/md';

const FavoriteCard = ({movie}) => {

    useEffect(() => {
        AOS.init();
    }, []);

    const { MoviePoster, MovieTitle, Genre, Duration, ReleaseYear, rating } = movie;

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
                        <span className="text-gray-500">{Genre}</span>
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

                    <button className="py-3 px-2 rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 font-bold text-white hover:from-orange-500 hover:to-orange-600 flex gap-1 items-center">
                        <MdDeleteForever size={24} /> 
                        <p>Delete movie</p>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default FavoriteCard
