//import épilation from "../../data/épilation.json"

function Epilation (nom, prix){
    return (
                        <div className="contenant">
                    <div className="contenant-title">
                        <h1>{nom}</h1>
                    </div>
                    <div className="contenant-price">
                        <p>{prix}</p>
                    </div>    
                </div>
            )
}
export default Epilation