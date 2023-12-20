import { Link } from "react-router-dom";
import "../Nav/nav.css"

function Nav (){
    return(
        <div className="nav-contenant">
            <Link to="/" classname="link">Accueil</Link>
            <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.rdv360.com%2Fmajestueuse-mane-59200-tourcoing%3F_gl%3D1*1yevbpf*_ga*MTYyODYwNDU3LjE3MDIzODEwMzg.*_ga_7F9QGRF4XH*MTcwMzAxOTAxOS44LjEuMTcwMzAxOTA0MS4zOC4wLjA%26fbclid%3DIwAR1KKwuQ5Hgw4WBqVBY-_puqRriF-dJL56lLie5TlID9dSigduXDEyxkIXA&h=AT2rKR3NUTlK5QsmrsoFXuxmutyCfiXrqxnj4qsCIFZwhSs0u6jp16izH6SCSUSEC_Xg0f7_JpYiaO6I8pXgRn_gWwipg8m7cC9XrvYhEDSVg2VAabCzM-5dcR8tABy7Usn-hvlBHTJcRq8u-4M">Rendez-vous</a>
            <Link to="/contact"className="formulaire">Contact</Link>
        </div>
    )
}
export default Nav