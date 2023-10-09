import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="SinglePostWrapper">
        <img src="https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs=" 
        alt="" 
        className="SinglePostImg" />

        <h1 className="singlePostTitle">Lorem ipsum dolor sit amet. 
        <div className="singlePostEdit">
        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
        <i className="singlePostIcon fa-sharp fa-regular fa-trash-can"></i>
        </div>
        </h1>

        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author:<b>hash</b></span>
            <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, maxime quae vitae perferendis autem nulla exercitationem quis, quos iure dicta nobis vel possimus tenetur nemo nesciunt amet vero? Eos, molestiae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, maxime quae vitae perferendis autem nulla exercitationem quis, quos iure dicta nobis vel possimus tenetur nemo nesciunt amet vero? Eos, molestiae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, maxime quae vitae perferendis autem nulla exercitationem quis, quos iure dicta nobis vel possimus tenetur nemo nesciunt amet vero? Eos, molestiae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, maxime quae vitae perferendis autem nulla exercitationem quis, quos iure dicta nobis vel possimus tenetur nemo nesciunt amet vero? Eos, molestiae.</p>
      </div>
    </div> 
  )
}
