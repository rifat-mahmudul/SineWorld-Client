/* eslint-disable react/prop-types */

import { useMutation } from "@tanstack/react-query";
import { MdDeleteForever } from "react-icons/md";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const FavoritesTable = ({item, refetch}) => {

    const {_id, MoviePoster, MovieTitle, Genre, Duration, ReleaseYear, Director} = item;

    const axiosSecure = useAxiosSecure();

    const {mutateAsync} = useMutation({
        mutationFn : async () => {
            const {data} = await axiosSecure.delete(`/favorite/${_id}`);
            return data;
        }
    })

    const handleDelete = () => {
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then( async (result) => {
                if (result.isConfirmed) {
                    await mutateAsync();
                    toast.success('Movie deleted successfully');
                    await refetch();
                }
            });
        } catch (error) {
            console.log(error)
        }
    }


    return (
            <tr className="text-center h-16">
                <td>
                    <img className="h-12 w-12 mx-auto rounded-md" src={MoviePoster} alt="" />
                </td>
                <td>{MovieTitle}</td>
                <td>{Genre}</td>
                <td>{Duration}</td>
                <td>{ReleaseYear}</td>
                <td>{Director}</td>
                <td>
                    <button onClick={handleDelete} className="bg-[#ff00003f] p-2 rounded-md">
                        <MdDeleteForever className="text-2xl text-red-500"></MdDeleteForever>
                    </button>
                </td>
            </tr>
    )
}

export default FavoritesTable
