import prestation from "../../data/prestation.json"
import { useParams } from "react-router-dom";
import "../Element/elements.css"


function Presta (){
const { id } = useParams();
const product = prestation.find((item) => item.id === id)
const presta = product?.presta.map((presta,list)=>
{
 return <li key={list}>{presta}</li>
    })
const prix = product?.prix.map((prix, list)=>
    {
     return <li key={list}>{prix}</li>
        })
const details = product?.details.map((details,list)=>
{
 return <li key={list}>{details}</li>
    })
    return(
            <div className="contenant">
                <div className="titre">{presta}</div>
                <div className="details">{details}</div>
                <div className="prix">{prix}</div>
            </div>            
)
}
export default Presta
