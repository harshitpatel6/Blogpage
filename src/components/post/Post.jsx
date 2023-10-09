import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img 
        src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
        alt=""
        />

        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
          </div>
          <span className="postTitle">
            AI is the new oil 
          </span>
          <hr/>
          <span className="postDate">1hour ago</span>
        </div>

        <p className="postDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, non recusandae similique enim eveniet voluptatem nulla quos, cumque quisquam a natus, soluta quibusdam exercitationem cum reiciendis voluptatibus repellat nostrum doloremque?
        </p>
      
    </div>
  )
}
