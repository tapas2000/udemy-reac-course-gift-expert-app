

export const GiftGridItem = ({ id, author, title, url }) => {
    
    return (
        <div className='card'>
            <img src={url} alt={title} />
            <p>{title}</p>
            <p>By {author}</p>
        </div>
    )
}
