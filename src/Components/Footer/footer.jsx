import instagram from "../../Assets/instagram.avif"
import facebook from "../../Assets/facebook.avif"
import { Link } from "react-router-dom";
import './footer.css'
import marionlogo from "../../Assets/marionlogo.jpg"


function Footer (){
    return(
            <div className="footer-conteneur">
                <div className="footer-title">
                <Link to="/" classname="link"> <img src={marionlogo} alt="estheticienne tourcoing"/></Link>
                </div>
                <div className="footer-liens">
                    <a href ="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fmarionomorfia%3Figshid%3DNzZlODBkYWE4Ng%253D%253D%26utm_source%3Dqr%26fbclid%3DIwAR1jHnK_28faO5QDC3x1thB6bw36y1MpUgCO3n5uHZ_EopKYD20V5l6hZ0o&h=AT1o8qIJ7q8P_ohnihljJZxKQsqNXzkJI3k7AI2wZVBfzVedvAlDbaKsAFIjsAwl2HLnfRVf8NsEIRlvr7MKj9i9sQ_wBroqvu5Ndbcvdta4IMrmQfTQPrdAvu7VNpdBQO4"><img src ={instagram}alt= "esthétique Tourcoing"></img></a>
                    <a href ="https://www.facebook.com/Mariionbeaute59"><img src={facebook}alt="massage, beauté à Tourcoing"></img></a>
                </div>
            </div>
    )
}
export default Footer