import Nav from "../Nav/nav"
import "../Header/header.css"
import { Link } from "react-router-dom";
import marionlogo2 from "../../Assets/marionlogo2.jpg"

function Header (){
    return(
        <div className="header">
            <div className="header-title">
                <Link to="/" classname="link"> <img src={marionlogo2} alt="estheticienne tourcoing"/></Link>
            </div>
            <div className="header-text"><h1>La Beauté d'une lionne</h1></div>
            <Nav/>
        </div>
    )
}
export default Header