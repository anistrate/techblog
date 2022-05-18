import "./topbar.css"
import background from "./background.jpg"

export default function TopBar() {
return (
    <div className="top">
        <div className="topLeft">
        <i className="topIcon fa-brands fa-github"></i>
        <i className="topIcon fa-brands fa-linkedin"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
        </div>
        <div className="topRight">
            <img className="topImage" src={background} alt="" >
            </img>
        <i className="topSearchIcon fas fa-search"></i>
        </div>
    </div>
    )
}