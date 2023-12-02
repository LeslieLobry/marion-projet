import prestation from "../../data/prestation.json"
import { useParams } from "react-router-dom";
import "../Element/elements.css"
import Accordeon from "../Accordeon/accordeon";

function Presta (){
const { id } = useParams();
const product = prestation.find((item) => item.id === id)
const {presta1, presta2, presta3, presta4, presta5, presta8, presta6, presta7, presta9, presta10 }=product

    return(
            <div className="contenant">
                <div className="logement-accordeon">
                    <div className="description">
                        <div className="title">
                            <Accordeon title={presta1.nom} prix={presta1.prix}content={presta1.description}> 
                        </Accordeon></div>
                    </div>
                </div>
                <div className="logement-accordeon">
                    <div className="description">
                        <Accordeon title={presta2.nom} prix={presta2.prix} content={presta2.description}> 
                        </Accordeon>
                    </div>
                </div>
                <div className="logement-accordeon">
                    <div className="description">
                        <Accordeon title={presta3.nom} prix={presta3.prix}content={presta3.description}> 
                        </Accordeon>
                    </div>
                </div>
                <div className="logement-accordeon">
                    <div className="description">
                        <Accordeon title={presta4.nom} prix={presta4.prix} content={presta4.description}> 
                        </Accordeon>
                    </div>
                </div>
                <div className="logement-accordeon">
                    <div className="description">
                        <Accordeon title={presta5.nom}prix={presta5.prix} content={presta5.description}> 
                        </Accordeon>
                    </div>
                </div>
                <div className="logement-accordeon">
                    <div className="description">
                        <Accordeon title={presta6.nom}prix={presta6.prix} content={presta6.description}> 
                        </Accordeon>
                    </div>
                </div>
                <div className="logement-accordeon">
                    <div className="description">
                        <Accordeon title={presta7.nom}prix={presta7.prix} content={presta7.description}> 
                        </Accordeon>
                    </div>
                </div>
                <div className="logement-accordeon">
                    <div className="description">
                        <Accordeon title={presta8.nom}prix={presta8.prix} content={presta8.description}> 
                        </Accordeon>
                    </div>
                </div>
                <div className="logement-accordeon">
                    <div className="description">
                        <Accordeon title={presta9.nom}prix={presta9.prix} content={presta9.description}> 
                        </Accordeon>
                    </div>
                </div> <div className="logement-accordeon">
                    <div className="description">
                        <Accordeon title={presta10.nom} prix={presta10.prix}content={presta10.description}> 
                        </Accordeon>
                    </div>
                </div>
            </div>            
)
}
export default Presta
