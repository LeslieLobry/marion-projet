import Nav from "../Nav/nav"
import "../Header/header.css"
import { Link } from "react-router-dom";


function Header (){
    return(
        <div className="header">
            <div className="header-title">
                <Link to="/" classname="link"> <h1>Marion Esthéticienne</h1></Link>
            </div>
            <Nav/>
        </div>
    )
}
export default Header