import { Link } from "react-router-dom"

import arrow from "../assets/chevron-right-solid (1).svg"

const PageLinkButton = ( {page, h1, c } ) => {
    return (
        <Link to={page}>
                <button type="button" className={c}>
                <h1>{h1}</h1>
                <h2 className="arrowh2">VIEW PROJECTS<img id="arrow" src={arrow} alt="arrow" /></h2>
            </button>
        </Link>
    )
}

export default PageLinkButton