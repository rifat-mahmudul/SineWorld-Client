import { useEffect, useState } from "react"

const useMovies = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/movies')
        .then(res => res.json())
        .then(data => {
            setMovies(data);
        })
    }, [])

    return [movies]
}

export default useMovies
