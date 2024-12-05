import { Helmet } from "react-helmet-async"
import Banner from "../components/Home/Banner"
import Featured from "../components/Home/Featured"
import Songs from "../components/Home/Songs"

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - SineWorld</title>
            </Helmet>

            <Banner></Banner>
            <Featured></Featured>
            <Songs></Songs>
        </div>
    )
}

export default Home
