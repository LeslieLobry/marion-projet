import prestation from "../../data/prestation.json"
import { useParams } from "react-router-dom";
import Erreur from "../Erreur/erreur"
import React from "react";
//import Epilation from "../../Components/Epilation/épilation";



function Prestation (){
const { id } = useParams();
const product = prestation.find((item) => item.id === id)
if (product === undefined){
return < Erreur/>
}
const {titre, presta}=product;
    return(
            <div className="presta-contenant">
                <div className="presta-title">
                        <h1>{titre}</h1>
                </div>
                <div className="presta">
                    <div className="presta-name">
                        <h1>{presta.nom}</h1>
                    </div>
                    <div className="presta-prix">
                        <p>{presta.prix}</p>
                    </div>

                </div>
            </div>
            )
}
export default Prestation
