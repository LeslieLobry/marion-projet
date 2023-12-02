import {useState} from "react";
import "../Accordeon/accordeon.css"
import chevron from "../../Assets/chevron.png"



function Accordeon ({title,prix, content}){
    const [ open, close] = useState(false);
    if (content === 0){
        <div className="accordion"onClick={
            ()=>open
        }>
        </div>
        
    }
           return (
            <div className="accordion-container">
                <div className="accordion"onClick={
                    ()=>close(!open)
                }>
                    <div className="accordion-elmt">
                        <div className="accordion-title" >{title}
                        </div>
                        <div className="accordion-prix">{prix}</div>
                    </div>
                    <div className="chevron">
                    {close &&<img className={open ? 'chevron chevron_up':'chevron chevron_down'} src={chevron} alt="kasa"></img>
                    } 
                </div>
                </div>
                <div className="accordion-content">
                    {open && <p>{content}</p>}
            </div>
        </div>
    )
   }
 export default Accordeon