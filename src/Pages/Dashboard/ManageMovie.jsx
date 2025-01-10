import HelmetTitle from "../../components/Shared/HelmetTitle"
import ManageTable from "../../components/Dashboard/ManageTable";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";

const ManageMovie = () => {

    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();

    const {data : manageMovies = [], refetch} = useQuery({
        queryKey : ['manage-movie', user?.email],
        queryFn  : async () => {
            const {data} = await axiosSecure(`/manage-movies/${user?.email}`)
            return data;
        }
    })

    return (
        <section>
            
            <HelmetTitle title={'Manage Movie'}></HelmetTitle>
            
            <div className="w-full mt-5 rounded-t-xl overflow-scroll sm:overflow-hidden">

                <div>

                    {
                        manageMovies.length > 0 
                            ?
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
                                                <th>Update</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {
                                                manageMovies.map(item => (
                                                    <ManageTable
                                                    key={item._id}
                                                    item={item}
                                                    refetch={refetch}
                                                    >
                                                    </ManageTable>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            :
                                <div className="flex items-center justify-center">
                                    <h1 className="text-3xl text-center font-bold text-red-500">NO Movie Added</h1>
                                </div>
                        
                    }

                </div>


            </div>

        </section>
    )
}

export default ManageMovie
