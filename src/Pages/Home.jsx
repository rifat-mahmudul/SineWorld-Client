import { Helmet } from "react-helmet-async"
import Banner from "../components/Home/Banner"

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - SineWorld</title>
            </Helmet>

            <Banner></Banner>
        </div>
    )
}

export default Home
