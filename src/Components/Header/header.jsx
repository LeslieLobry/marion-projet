import Nav from "../Nav/nav"
import "../Header/header.css"
import { Link } from "react-router-dom";
import marionlogo2 from "../../Assets/marionlogo2.jpg"
import motif from "../../Assets/motif.jpg"

function Header (){
    return(
        <div className="header">
             <div className="footer-img"><img src={motif} alt="onglerie tourcoing"></img></div>
            <div className="header-title">
                <Link to="/" classname="link"> <img src={marionlogo2} alt="estheticienne tourcoing"/></Link>
            </div>
            <Link to="/"className="link">
            <h1>La Beauté d'une lionne</h1>
            </Link>
            <Nav/>
        </div>
    )
}
export default Header