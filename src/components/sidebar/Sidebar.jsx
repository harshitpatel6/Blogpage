import "./sidebar.css"
import img from '../assets/img.jpg'

export default function Sidebar() {
  return (
    
      <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img
            src={img}
            aly=""
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nulla, consequuntur ut voluptates amet, exercitationem cumque voluptate maiores ex dolores, inventore et animi in. Recusandae odio autem magni consectetur quo?</p>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <div className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sports</li>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-square-instagram"></i>   
                </div>
            </div>
        </div>
      </div>
    
  )
}
