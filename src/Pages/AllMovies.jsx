import Card from "../components/Shared/Card";
import useMovies from "../Hooks/useMovies"

const AllMovies = () => {

    const [movies] = useMovies();

    return (
        <section>
            <div className="mt-24 mb-4 text-center">
                <input className="border-2 border-orange-600 w-[90%] sm:w-[350px] p-3 rounded-lg text-xl font-semibold" type="text" placeholder="Search Movie" />
            </div>

            <div className="pt-4 max-w-[90%] xl:max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-8 mb-16">
                {
                    movies.map(movie => <Card key={movie._id} movie={movie}></Card>)
                }
            </div>
        </section>
    )
}

export default AllMovies
