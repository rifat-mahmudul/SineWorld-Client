import { Helmet } from "react-helmet-async"
import Banner from "../components/Home/Banner"
import Featured from "../components/Home/Featured"

const Home = () => {
    return (
        <main>
            <Helmet>
                <title>Home - SineWorld</title>
            </Helmet>

            <Banner></Banner>
            <Featured></Featured>
        </main>
    )
}

export default Home
