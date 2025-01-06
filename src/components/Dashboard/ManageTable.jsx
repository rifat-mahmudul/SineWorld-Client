/* eslint-disable react/prop-types */
import { MdDeleteForever } from "react-icons/md"
import { FaPencilAlt } from "react-icons/fa";

const ManageTable = ({item, refetch}) => {

    const {MoviePoster, MovieTitle, Genre, Duration, ReleaseYear, Director} = item;

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
                <button className="p-2 rounded-md bg-[#0000ff46]">
                    <FaPencilAlt className="text-2xl text-blue-500"></FaPencilAlt>
                </button>
            </td>
            <td>
                <button className="bg-[#ff00003f] p-2 rounded-md">
                    <MdDeleteForever className="text-2xl text-red-500"></MdDeleteForever>
                </button>
            </td>
        </tr>
    )
}

export default ManageTable
