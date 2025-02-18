const PostCard = ({userId, id, title, body}) => {
    return (
        <>
            <div >
                <h3>{title}</h3>
                
                {/* <h4>{origin.name}</h4> */}
                <p>{body}</p>
            </div>
        </>
    )
}

export default PostCard