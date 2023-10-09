import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img src="https://wallpapershome.com/images/wallpapers/love-image-7680x4320-8k-21486.jpg" alt="" className="writeImg" />
     <form className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
                <i class="writeIcon fa fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}} />
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
        <button className="writeSubmit">Publish</button>
        </div>
        <div className="writeFormGroup">
            <textarea placeholder="Tell your story..." type="text" className="writeInput writeTexttextarea"/>
        </div>
     </form>
    </div>
  )
}
