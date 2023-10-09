import "./setting.css"
import Sidebar from "../../components/sidebar/Sidebar"


export default function Setting() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
        </div>

        <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
             <img
               scr="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"
               alt=""
             />
             <label htmlFor="fileInput">
                <i className="settingsPPIcon far fa-user-circle"></i>
             </label>
             <input type="file" id="fileInput" style={{display:"none"}}/>
            </div>
            <label>Username</label>
            <input type="text" placeholder="hash" />
            <label>Email</label>
            <input type="email" placeholder="hash@gmail.com" />
            <label>Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>         
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}
