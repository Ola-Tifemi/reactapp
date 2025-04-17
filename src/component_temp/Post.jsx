import { useContext } from "react"
import { PostContext } from "../context/PostContext"

const Post = () => {
    

    const {posts} = useContext(PostContext); //how to consume context
    //  console.log(posts);
    
    return (
        <> 
        {
            posts.map((post)=>{
                return(
                    <div key={post.id}>
                                 {/* Post preview*/}
                            <div className="post-preview">
                            <a href="post.html">
                                <h2 className="post-title">
                                {post.title}
                                </h2>
                                <h3 className="post-subtitle">
                                {post.summary}
                                </h3>
                            </a>
                            <p className="post-meta">
                                Posted by
                                <a href="#!">{post.poster}</a>
                                on {post.date}
                            </p>
                            </div>
                            {/* Divider*/}
                            <hr className="my-4" />
                            {/* Pager*/}
                    </div>
                )
            })
        }
        

        <div className="d-flex justify-content-end mb-4">
        <a className="btn btn-danger text-uppercase" href="#!">
            Older Posts →
        </a>
        </div></>
    )
}

export default Post