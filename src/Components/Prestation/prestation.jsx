import prestation from "../../data/prestation.json"
import { useParams } from "react-router-dom";
import "../Prestation/prestation.css"

function Presta (){
const { id } = useParams();
const product = prestation.find((item) => item.id === id)
const {presta1, presta2, presta3, presta4, presta5, presta6,presta7, presta8, presta9,presta10 }=product
    return(
        <div className="contenant">
            <div className="elmt">
                <div className="nom">
                    <h1>{presta1.nom}</h1>
                </div>  
                <div className="prix">
                    <h1>{presta1.prix}</h1>
                </div> 
            </div>
            <div className="elmt">
                <div className="nom">
                    <h1>{presta2.nom}</h1>
                </div>  
                <div className="prix">
                    <h1>{presta2.prix}</h1>
                </div> 
            </div>
            <div className="elmt">
                <div className="nom">
                    <h1>{presta3.nom}</h1>
                </div>  
                <div className="prix">
                    <h1>{presta3.prix}</h1>
                </div> 
            </div>
            <div className="elmt">
                <div className="nom">
                    <h1>{presta4.nom}</h1>
                </div>  
                <div className="prix">
                    <h1>{presta4.prix}</h1>
                </div> 
            </div>
            <div className="elmt">
                <div className="nom">
                    <h1>{presta5.nom}</h1>
                </div>  
                <div className="prix">
                    <h1>{presta5.prix}</h1>
                </div> 
            </div>
            <div className="elmt">
                <div className="nom">
                    <h1>{presta6.nom}</h1>
                </div>  
                <div className="prix">
                    <h1>{presta6.prix}</h1>
                </div> 
            </div>
            <div className="elmt">
                <div className="nom">
                    <h1>{presta7.nom}</h1>
                </div>  
                <div className="prix">
                    <h1>{presta7.prix}</h1>
                </div> 
            </div>
            <div className="elmt">
                <div className="nom">
                    <h1>{presta8.nom}</h1>
                </div>  
                <div className="prix">
                    <h1>{presta8.prix}</h1>
                </div> 
            </div>
            <div className="elmt">
                <div className="nom">
                    <h1>{presta9.nom}</h1>
                </div>  
                <div className="prix">
                    <h1>{presta9.prix}</h1>
                </div> 
            </div>
            <div className="elmt">
                <div className="nom">
                    <h1>{presta10.nom}</h1>
                </div>  
                <div className="prix">
                    <h1>{presta10.prix}</h1>
                </div> 
            </div>
        </div>            
)
}
export default Presta
