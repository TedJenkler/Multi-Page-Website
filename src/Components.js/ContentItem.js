
const ContentItem = ({ img, h2, p }) => {
    return (
        <div className="content-item">
            <img src={img} alt={h2} />
            <h2>{h2}</h2>
            <p>{p}</p>
        </div>
    )
}

export default ContentItem