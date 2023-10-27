import { Link } from "react-router-dom";
import "../Nav/nav.css"

function Nav (){
    return(
        <div className="nav-contenant">
            <Link to="/" classname="link">Accueil</Link>
            <Link to= "/RDV" className="linkRdv">Rendez-vous</Link>
            <Link to="/contact"className="formulaire">Contact</Link>
        </div>
    )
}
export default Nav