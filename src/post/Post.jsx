import "./post.css"
import blogImage from "./blogImage.jpg"

export default function Post() {
    return (
        <div className="post">
            <img src={blogImage} alt="" className="postImg" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Music</span>
                </div>
                <span className="postTitle"> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
        </div>
    )
}