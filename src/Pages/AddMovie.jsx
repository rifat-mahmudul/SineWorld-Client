import { Helmet } from "react-helmet-async"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import Swal from 'sweetalert2'
import useAuth from "../Hooks/useAuth";
import { useState } from "react";
import { Rating } from '@smastrom/react-rating';

const AddMovie = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const {user} = useAuth();
    const [rating, setRating] = useState(0)
    const [error, setError] = useState('');

    const handleRating = (rate) => {
        setRating(rate)
    }


    const onSubmit = data => {
        data.email = user?.email;
        data.rating = rating;

        if (rating === 0) {
            setError('Please select a rating before submitting the movie.');
            return;
        }
        
        fetch('https://assignment-10-server-delta-sand.vercel.app/movies', {
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
                    title: "Movie Saved Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/all-movies')
            }
        })
    }

    return (
        <section>

            <Helmet>
                <title>Add Movie - SineWorld</title>
            </Helmet>

            <div className="max-w-[90%] xl:max-w-[1000px] mx-auto p-8 rounded-lg">

                <h1 className="text-center font-semibold text-3xl sm:text-4xl font-Rancho text-orange-600 mb-8">Add Movie</h1>

                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="sm:flex justify-between items-center mb-4">
                        
                        <div className="sm:w-[49%] mb-4 sm:mb-0">
                            <label className="font-bold">Movie Poster</label><br />
                            <input
                                className="border border-primary w-full mt-2 p-3 rounded-lg bg-inherit placeholder:text-gray-300 outline-0 focus:border-2"
                                type="text"
                                placeholder="Enter Movie Poster Link"
                                {...register('MoviePoster', {
                                    required: "Movie Poster link is required",
                                    pattern: {
                                        value: /^(https?:\/\/(?:www\.)?[^\s/$.?#].[^\s]*)$/i,
                                        message: "Please enter a valid URL"
                                    }
                                })}
                            />
                            {errors.MoviePoster && (
                                <p className="text-red-600 mt-1">{errors.MoviePoster.message}</p>
                            )}
                        </div>


                            <div className="sm:w-[49%] mb-4 sm:mb-0">
                                <label className="font-bold">Movie Title</label><br></br>
                                <input 
                                className="border-2 border-orange-600 w-full mt-2 p-3 rounded-lg" type="text" 
                                placeholder="Enter Movie Title"
                                {...register('MovieTitle', {
                                    required : "Movie Title is required",
                                    minLength : {
                                        value : 2,
                                        message : "Movie Title at least 2 characters"
                                    }
                                })}
                                />
                                {errors.MovieTitle && (
                                <p className="text-red-600 mt-1">{errors.MovieTitle.message}</p>
                                )}
                            </div>
                        </div>

                        <div className="sm:flex justify-between items-center mb-4">
                            <div className="sm:w-[49%] mb-4 sm:mb-0">
                                <label className="font-bold">Genre</label><br></br>
                                <select 
                                className="border-2 border-orange-600 w-full mt-2 p-3 rounded-lg"
                                {...register('Genre', {
                                    required : "Select Genre is required",
                                    minLength : {
                                        value : 1,
                                        message : "Select Genre is required"
                                    }
                                })}
                                >
                                    <option value="">Select Genre</option>
                                    <option value="Comedy">Comedy</option>
                                    <option value="Romantic">Romantic</option>
                                    <option value="Action">Action</option>
                                    <option value="Horror">Horror</option>
                                    <option value="Drama">Drama</option>
                                    <option value="Thriller">Thriller</option>
                                    <option value="Motivational">Motivational</option>
                                </select>
                                {errors.Genre && (
                                <p className="text-red-600 mt-1">{errors.Genre.message}</p>
                                )}
                            </div>

                            <div className="sm:w-[49%] mb-4 sm:mb-0">
                                <label className="font-bold">Duration</label><br></br>
                                <input 
                                className="border-2 border-orange-600 w-full mt-2 p-3 rounded-lg" type="number" 
                                placeholder="Enter Duration"
                                {...register('Duration',{
                                    required : "Duration is required",
                                    min : {
                                        value : 61,
                                        message : "Duration must be greater than 60"
                                    }
                                })}
                                />
                                {
                                    errors.Duration && (
                                        <p className="text-red-600 mt-1">{errors.Duration.message}</p>
                                    )
                                }
                            </div>
                        </div>

                        <div className="sm:flex justify-between items-center mb-4">
                            <div className="sm:w-[49%] mb-4 sm:mb-0">
                                <label className="font-bold">Release Year</label><br></br>
                                <select 
                                className="border-2 border-orange-600 w-full mt-2 p-3 rounded-lg"
                                {...register('ReleaseYear',{
                                    required : "Select Genre is required",
                                    minLength : {
                                        value : 1,
                                        message : "Select Genre is required"
                                    }
                                })}
                                >
                                    <option value="">Select Year</option>
                                    <option value="2024">2024</option>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                </select>
                                {errors.ReleaseYear && (
                                <p className="text-red-600 mt-1">{errors.ReleaseYear.message}</p>
                                )}
                            </div>

                            <div className="sm:w-[49%] mb-4 sm:mb-0">
                                <div className="flex items-center gap-2">
                                    <label className="font-bold">Rating : </label><br></br>
                                    <div>
                                        <Rating
                                            value={rating} 
                                            onChange={handleRating}
                                            style={{ maxWidth: 120 }}
                                            fillColor="gold"
                                            allowHover={true}
                                            isRequired={true}
                                        />
                                        
                                    </div>
                                </div>
                                {error && (
                                <p className="text-red-600 mt-1">{error}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label className="font-bold">Summary</label><br></br>
                            <textarea 
                            className="border-2 border-orange-600 w-full mt-2 p-3 rounded-lg h-[100px]" type="text"
                            placeholder="Write Summery About Your Movie"
                            {...register('Summary',{
                                required : "summary is required",
                                minLength : {
                                    value : 10,
                                    message : "Summery have at least 10 characters"
                                }
                            })}
                            >
                            </textarea>
                            {errors.Summary && (
                                <p className="text-red-600 mt-1">{errors.Summary.message}</p>
                            )}
                        </div>

                        <div>
                            <button className="bg-gradient-to-r from-orange-500 to-orange-800 p-3 text-center text-white font-Rancho rounded-lg w-full text-2xl mt-5" type="submit">Add Movie</button>
                        </div>

                    </form>
                </div>

            </div>
        </section>
    )
}

export default AddMovie
