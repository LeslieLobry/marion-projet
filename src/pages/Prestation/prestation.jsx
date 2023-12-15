import prestation from "../../data/prestation.json"
import { useParams } from "react-router-dom";
import Erreur from "../Erreur/erreur"
import React from "react";
import Presta from "../../Components/Element/elements";
import "../Prestation/prestation.css"
import motif from "../../Assets/motif.jpg"

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
                <img src={motif} alt="massage tourcoing"></img>
                        <h1>{titre}</h1>
                </div>
                <Presta/>
        </div>
)
}
export default Prestation
