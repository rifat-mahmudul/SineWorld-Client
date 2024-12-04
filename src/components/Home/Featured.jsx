import useMovies from "../../Hooks/useMovies"
import Card from "../Shared/Card";
import Title from "../Shared/Title"

const Featured = () => {

    const [movies] = useMovies();

    return (
        <section>
            <Title title="Enjoy some amazing movies" heading="Featured Movies"></Title>

            <div className="pt-4 max-w-[90%] xl:max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-8 mb-16">
                {
                    movies.map(movie => <Card key={movie._id} movie={movie}></Card>)
                }
            </div>
        </section>
    )
}

export default Featured
