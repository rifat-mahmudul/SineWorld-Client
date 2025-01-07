import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import RecentAdded from "../Shared/Featured/RecentAdded";

const Featured = () => {

    const axiosPublic = useAxiosPublic();

    const {data : movies = []} = useQuery({
        queryKey : ['movies'],
        queryFn : async () => {
            const {data} = await axiosPublic('/movies');
            return data;
        }
    })

    const recentAdded = movies.filter(movie => movie.category === 'recentlyAdded')

    return (
        <section className="pb-24">
            
            <RecentAdded recentAdded={recentAdded}></RecentAdded>
        
        </section>
    )
}

export default Featured
