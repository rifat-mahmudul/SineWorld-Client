import { Link } from "react-router"

const Logo = () => {
    return (
        <div>
            <Link to="/">
                <h1 className="flex font-bold text-4xl font-Rancho text-primary">
                    SineWorld
                </h1>
            </Link>
        </div>
    )
}

export default Logo
