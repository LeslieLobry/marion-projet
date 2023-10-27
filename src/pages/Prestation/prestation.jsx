import prestation from "../../data/prestation.json"
import { useParams } from "react-router-dom";
import Erreur from "../Erreur/erreur"
import React from "react";
import Presta from "../../Components/Prestation/prestation";



function Prestation (){
const { id } = useParams();
const product = prestation.find((item) => item.id === id)
if (product === undefined){
return < Erreur/>
}
const {titre}=product
    return(
            <div className="presta-contenant">
                <div className="presta-title">
                        <h1>{titre}</h1>
                </div>
                <Presta/>
             </div>
            )
}
export default Prestation
