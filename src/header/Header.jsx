import "./header.css"
import codeBackground from "./code.png"

export default function Header() {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blof</span>
            </div>
            <img className="headerImg" src={codeBackground} alt="code.png"/>
        </div>
    )
}