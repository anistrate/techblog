import "./sidebar.css"
import hackerImage from "./hacker.png"

export default function Sidebar()
{
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">
                    About me 
                </span>
                <img src={hackerImage} alt=""/> 
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit optio saepe quidem enim iste inventore placeat accusamus a neque eius.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle"> Categories </span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Tech 1 </li>
                    <li className="sidebarListItem">Tech 2 </li>
                    <li className="sidebarListItem">Tech 3 </li>
                    <li className="sidebarListItem">Tech 4 </li>
                    <li className="sidebarListItem">Tech 5 </li>
                    <li className="sidebarListItem">Tech 6 </li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle"> Follow us </span>
                <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-github"></i>
                <i className="sidebarIcon fa-brands fa-linkedin"></i>
                </div>
            </div>
        </div>
    )
}