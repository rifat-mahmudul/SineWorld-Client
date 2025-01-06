/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async"

const HelmetTitle = ({title}) => {
    return (
        <Helmet>
            <title>{title} | SineWorld</title>
        </Helmet>
    )
}

export default HelmetTitle
