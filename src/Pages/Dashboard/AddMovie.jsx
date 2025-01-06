import { Helmet } from "react-helmet-async"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import toast from 'react-hot-toast';

const AddMovie = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const {user, loading} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {mutateAsync} = useMutation({
        mutationFn : async movieData => {
            const {data} = await axiosSecure.post('/movies', movieData);
            return data;
        }
    })

    const onSubmit = async data => {
        data.email = user?.email;
        
        try {
            await mutateAsync(data);
            toast.success('Movie Added Successfully');
            navigate('my-add-movie')
        } catch (error) {
            console.log(`error from add movie : ${error}`)
        }
    }

    return (
        <section>

            <Helmet>
                <title>Add Movie - SineWorld</title>
            </Helmet>

            <div className="max-w-[90%] xl:max-w-[1000px] mx-auto rounded-lg">

                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="sm:flex justify-between items-center gap-14 mb-4">
                        
                        <div className="sm:w-[49%] mb-4 sm:mb-0">
                            <label className="font-semibold">Movie Poster</label><br />
                            <input
                                className="border border-gray-700 w-full mt-2 p-3 rounded-lg bg-inherit placeholder:text-gray-300 outline-0 focus:border-2 focus:border-white"
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
                                <label className="font-semibold">Movie Title</label><br></br>
                                <input 
                                className="border border-gray-700 w-full mt-2 p-3 rounded-lg bg-inherit placeholder:text-gray-300 outline-0 focus:border-2 focus:border-white" type="text" 
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

                        <div className="sm:flex justify-between items-center gap-14 mb-4">
                            <div className="sm:w-[49%] mb-4 sm:mb-0 bg-black">
                                <label className="font-semibold">Genre</label><br></br>
                                <select 
                                className="border border-gray-700 w-full mt-2 p-3 rounded-lg bg-inherit placeholder:text-gray-300 outline-0 focus:border-2 focus:border-white "
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
                                className="border border-gray-700 w-full mt-2 p-3 rounded-lg bg-inherit placeholder:text-gray-300 outline-0 focus:border-2 focus:border-white"
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

                        <div className="sm:flex justify-between items-center gap-14 mb-4">
                            <div className="sm:w-[49%] mb-4 sm:mb-0 bg-black">
                                <label className="font-semibold">Type</label><br></br>
                                <select 
                                className="border border-gray-700 w-full mt-2 p-3 rounded-lg bg-inherit placeholder:text-gray-300 outline-0 focus:border-2 focus:border-white "
                                {...register('Type', {
                                    required : "Select Genre is required"
                                })}
                                >
                                    <option value="">Select Type</option>
                                    <option value="Shows">Shows</option>
                                    <option value="Movies">Movies</option>
                                    <option value="Free">Free</option>
                                </select>
                                {errors.Type && (
                                <p className="text-red-600 mt-1">{errors.Type.message}</p>
                                )}
                            </div>

                            <div className="sm:w-[49%] mb-4 sm:mb-0 bg-black">
                                <label className="font-semibold">Category</label><br></br>
                                <select 
                                className="border border-gray-700 w-full mt-2 p-3 rounded-lg bg-inherit placeholder:text-gray-300 outline-0 focus:border-2 focus:border-white "
                                {...register('category', {
                                    required : "Select Genre is required"
                                })}
                                >
                                    <option value="">Select Category</option>
                                    <option value="recentlyAdded">Recently Added</option>
                                    <option value="nextWatch">Your Next Watch</option>
                                    <option value="heartbreakTales">Heartbreak Tales</option>
                                    <option value="upcoming">New And Upcoming</option>
                                    <option value="old">Old is Gold</option>
                                </select>
                                {errors.category && (
                                <p className="text-red-600 mt-1">{errors.category.message}</p>
                                )}
                            </div>
                        </div>

                        <div className="sm:flex justify-between items-center gap-14 mb-4">
                            <div className="sm:w-[49%] mb-4 sm:mb-0 bg-black">
                                <label className="font-bold">Release Year</label><br></br>
                                <select 
                                className="border border-gray-700 w-full mt-2 p-3 rounded-lg bg-inherit placeholder:text-gray-300 outline-0 focus:border-2 focus:border-white"
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

                            <div className="w-[49%]">
                                <label className="font-bold">Director Name</label><br></br>
                                <input 
                                className="border border-gray-700 w-full mt-2 p-3 rounded-lg bg-inherit placeholder:text-gray-300 outline-0 focus:border-2 focus:border-white"
                                placeholder="Enter Duration"
                                {...register('Director',{
                                    required : "Director is required"
                                })}
                                />
                                {
                                    errors.Director && (
                                        <p className="text-red-600 mt-1">{errors.Director.message}</p>
                                    )
                                }
                            </div>
                        </div>

                        <div>
                            <label className="font-bold">Summary</label><br></br>
                            <textarea 
                            className="border border-gray-700 w-full mt-2 p-3 rounded-lg bg-inherit placeholder:text-gray-300 outline-0 focus:border-2 focus:border-white h-36"
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
                            <button className="bg-gradient-to-r from-orange-500 to-orange-800 p-3 text-center text-white font-Rancho rounded-lg w-full text-2xl mt-5" type="submit">{loading ? 'Adding...' : 'Add Movie'}</button>
                        </div>

                    </form>
                </div>

            </div>
        </section>
    )
}

export default AddMovie
