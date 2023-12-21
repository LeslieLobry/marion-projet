import instagram from "../../Assets/instagram.png"
import facebook from "../../Assets/facebook.png"
import { Link } from "react-router-dom";
import './footer.css'
import marionlogo2 from "../../Assets/marionlogo2.jpg"
import motif from "../../Assets/motif.jpg"


function Footer (){
    return(
            <div className="footer-conteneur">
                <div className="footer-img"><img src={motif} alt="onglerie tourcoing"></img></div>
                <div className="footer-title">
                <Link to="/" className="link"> <img src={marionlogo2} alt="estheticienne tourcoing"/></Link>
                </div>
                <div className="footer-liens">
                    <a href ="https://www.instagram.com/majestueusemane/"><img src ={instagram}alt= "esthétique Tourcoing"></img></a>
                    <a href ="https://www.facebook.com/majestueusemane?locale=fr_FR"><img src={facebook}alt="massage, beauté à Tourcoing"></img></a>
                </div>
                <div className="footer-img"><img src={motif} alt="onglerie tourcoing"></img></div>
            </div>
    )
}
export default Footer