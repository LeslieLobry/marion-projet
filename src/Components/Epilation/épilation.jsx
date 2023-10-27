import épilation from "../../data/épilation.json"

function Epilation (){
    return (
        épilation.map((cire)=>{
            return(
                <div className="contenant">
                    <div className="contenant-title">
                        <h1>{cire.nom}</h1>
                    </div>
                    <div className="contenant-price">
                        <p>{cire.prix}</p>
                    </div>    
                </div>
            )
        })
    )
}
export default Epilation