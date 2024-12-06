import { useEffect, useState } from "react"

const useMovies = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-server-delta-sand.vercel.app/movies')
        .then(res => res.json())
        .then(data => {
            setMovies(data);
        })
    }, [])

    return [movies]
}

export default useMovies
