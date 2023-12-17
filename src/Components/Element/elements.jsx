import prestation from "../../data/prestation.json"
import { useParams } from "react-router-dom";
import "../Element/elements.css"


function Presta (){
const { id } = useParams();
const product = prestation.find((item) => item.id === id)
const presta = product?.presta.map((presta, list)=>
{
    return <li key={list}>{presta}</li>
})
const prix = product?.prix.map((prix, list)=>
{
    return <li key={list}>{prix}</li>
})
    return(
            <div className="contenant">
                <div className="titre">{presta}</div>
            <div className="prix">{prix}</div>
            </div>
)
}
export default Presta
