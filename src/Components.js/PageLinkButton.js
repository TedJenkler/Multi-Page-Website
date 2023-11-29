import { Link } from "react-router-dom"

const PageLinkButton = ( {page, h1, c } ) => {
    return (
        <Link to={page}>
                <button type="button" className={c}>
                <h1>{h1}</h1>
                <h2>VIEW PROJECTS</h2>
            </button>
        </Link>
    )
}

export default PageLinkButton