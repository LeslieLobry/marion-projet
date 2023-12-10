import { Link } from "react-router-dom";
import "../Nav/nav.css"

function Nav (){
    return(
        <div className="nav-contenant">
            <Link to="/" classname="link">Accueil</Link>
            <a href="https://fr.resaclick.net/lobry">Rendez-vous</a>
            <Link to="/contact"className="formulaire">Contact</Link>
        </div>
    )
}
export default Nav