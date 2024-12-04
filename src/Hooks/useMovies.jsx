import { useEffect, useState } from "react"

const useMovies = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('Data.json')
        .then(res => res.json())
        .then(data => {
            setMovies(data);
        })
    }, [])

    return [movies]
}

export default useMovies
