/* eslint-disable react/prop-types */

import { MdDeleteForever } from "react-icons/md";

const FavoritesTable = ({item, refetch}) => {

    const {_id, MoviePoster, MovieTitle, Genre, Duration, ReleaseYear, Director} = item;

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
                    <button className="bg-[#ff00003f] p-2 rounded-md">
                        <MdDeleteForever className="text-2xl text-red-500"></MdDeleteForever>
                    </button>
                </td>
            </tr>
    )
}

export default FavoritesTable
