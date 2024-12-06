import { Helmet } from "react-helmet-async"
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import Swal from 'sweetalert2'
import { useEffect, useState } from "react";

const UpdateMovie = () => {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        defaultValues: {
            MoviePoster: '',
            MovieTitle: '',
            Genre: '',
            Duration: '',
            ReleaseYear: '',
            rating: '',
            Summary: ''
        }
    });
    const navigate = useNavigate();
    const {id} = useParams();
    const [movie, setMovie] = useState();

    useEffect(() => {
        fetch(`https://assignment-10-server-delta-sand.vercel.app/movies/${id}`)
        .then(res => res.json())
        .then(data => {
            setMovie(data);
            Object.keys(data).forEach(key => setValue(key, data[key]));
        })
    }, [id, setValue])

    const onSubmit = data => {
        fetch(`https://assignment-10-server-delta-sand.vercel.app/movies/${id}`, {
            method : 'PATCH',
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
                    title: "Movie Update Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/all-movies')
            }
        })
    }


    return (
        <section className="mt-24 mb-16">

            <Helmet>
                <title>Update Movie - SineWorld</title>
            </Helmet>

            <div className="max-w-[90%] xl:max-w-[1000px] mx-auto bg-gray-100 p-8 rounded-lg">

                <h1 className="text-center font-semibold text-3xl sm:text-4xl font-Rancho text-orange-600 mb-8">Update Movie</h1>

                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="sm:flex justify-between items-center mb-4">
                        
                        <div className="sm:w-[49%] mb-4 sm:mb-0">
                            <label className="font-bold">Movie Poster</label><br />
                            <input
                                className="border-2 border-orange-600 w-full mt-2 p-3 rounded-lg"
                                type="text"
                                defaultValue={movie?.MoviePoster}
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
                                defaultValue={movie?.MovieTitle}
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
                                    required: "Genre is required"
                                })}
                                defaultValue={movie?.Genre || ''}
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
                            </div>

                            <div className="sm:w-[49%] mb-4 sm:mb-0">
                                <label className="font-bold">Duration</label><br></br>
                                <input 
                                className="border-2 border-orange-600 w-full mt-2 p-3 rounded-lg" type="number" 
                                placeholder="Enter Duration"
                                defaultValue={movie?.Duration}
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
                                {...register('ReleaseYear', {
                                    required: "Release Year is required"
                                })}
                                defaultValue={movie?.ReleaseYear || ''}
                                >
                                    <option value="">Select Year</option>
                                    <option value="2024">2024</option>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                </select>
                            </div>

                            <div className="sm:w-[49%] mb-4 sm:mb-0">
                                <label className="font-bold">Rating</label><br></br>
                                <input 
                                className="border-2 border-orange-600 w-full mt-2 p-3 rounded-lg" type="number" 
                                defaultValue={movie?.rating}
                                placeholder="Enter Rating ( maximum value 5 )"
                                {...register('rating', {
                                    required : "rating is required",
                                    max : {
                                        value : 5,
                                        message : "Rating Can not be grater than 5"
                                    }
                                })}
                                />
                                {errors.rating && (
                                <p className="text-red-600 mt-1">{errors.rating.message}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label className="font-bold">Summary</label><br></br>
                            <textarea 
                            className="border-2 border-orange-600 w-full mt-2 p-3 rounded-lg h-[100px]" type="text"
                            defaultValue={movie?.Summary}
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
                            <button className="bg-gradient-to-r from-orange-500 to-orange-800 p-3 text-center text-white font-Rancho rounded-lg w-full text-2xl mt-5" type="submit">Update Movie</button>
                        </div>

                    </form>
                </div>

            </div>
        </section>
    )
}

export default UpdateMovie
