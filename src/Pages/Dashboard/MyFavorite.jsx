import { useQuery } from "@tanstack/react-query";
import HelmetTitle from "../../components/Shared/HelmetTitle"
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import FavoritesTable from "../../components/Dashboard/FavoritesTable";

const MyFavorite = () => {

    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();

    const {data : favoriteMovies = [], refetch} = useQuery({
        queryKey : ['favorite-movie', user?.email],
        queryFn  : async () => {
            const {data} = await axiosSecure(`/favorite/${user?.email}`)
            return data;
        }
    })

    return (
        <screen>
            <HelmetTitle title={'Favorite'}></HelmetTitle>
            
            <div className="w-full mt-5 rounded-t-xl overflow-scroll sm:overflow-hidden">

                <div>

                    {
                        favoriteMovies.length === 0 
                            ?
                        <div className="flex items-center justify-center">
                            <h1 className="text-3xl text-center font-bold text-red-500">You have no favorite</h1>
                        </div>
                            :
                        <div>
                            <table className="w-full">
                                <thead >
                                    <tr className="h-16 bg-[#a8a8a741] text-white text-lg text-center">
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Genre</th>
                                        <th>Duration</th>
                                        <th>ReleaseYear</th>
                                        <th>Director</th>
                                        <th>Subscribe Now</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        favoriteMovies.map(item => (
                                            <FavoritesTable
                                            key={item._id}
                                            item={item}
                                            refetch={refetch}
                                            >
                                            </FavoritesTable>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    }

                </div>


            </div>


        </screen>
    )
}

export default MyFavorite
