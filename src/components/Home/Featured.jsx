import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import CategoryMovies from "../Shared/Featured/CategoryMovies";

const Featured = () => {

    const axiosPublic = useAxiosPublic();

    const {data : movies = []} = useQuery({
        queryKey : ['movies'],
        queryFn : async () => {
            const {data} = await axiosPublic('/movies');
            return data;
        }
    })

    const recentAdded = movies.filter(movie => movie.category === 'recentlyAdded');
    const nextWatch = movies.filter(movie => movie.category === 'nextWatch');

    return (
        <section className="pb-24">
            
            <CategoryMovies heading={'Recently Added'} movies={recentAdded}></CategoryMovies>
            <CategoryMovies heading={'Your Next Watch'} movies={nextWatch}></CategoryMovies>
        
        </section>
    )
}

export default Featured
