import Card from "../Shared/Card";
import Title from "../Shared/Title"
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Featured = () => {

    const axiosPublic = useAxiosPublic();

    const {data : movies = []} = useQuery({
        queryKey : ['movies'],
        queryFn : async () => {
            const {data} = await axiosPublic('/movies');
            return data;
        }
    })

    return (
        <section className="pb-24">
            
            <Title title="Enjoy some amazing movies" heading="Featured Movies"></Title>

            <div 
            className="pt-4 max-w-[90%] xl:max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-8">
                {
                    movies.slice(0,6).map(movie => <Card key={movie._id} movie={movie}></Card>)
                }
            </div>
        
        </section>
    )
}

export default Featured
