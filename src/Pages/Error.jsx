import { Helmet } from "react-helmet-async"

const Error = () => {
    return (
        <div className="bg-black flex items-center justify-center h-[100vh]">
            <Helmet>
                <title>Error - SineWorld</title>
            </Helmet>

            <div className="text-white flex items-center">
                <h1 className="text-3xl font-bold border-r border-gray-500 pr-5">404</h1>
                <p className="pl-5">This page could not be found.</p>
            </div>
        </div>
    )
}

export default Error
