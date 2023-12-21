import prestation from "../../data/prestation.json";
import {Link} from "react-router-dom"
import "./gallery.css"

function Gallery() {
  return (
    <section className="gallery-contenant">
      {prestation.map((product) => {
        return (
          
          <Link to={`/Prestation/${product.id}`}>
            <div key={product.id}>
            <div className="conteneur">
                <div className="gallery-title">
                  <h2>{product.titre}</h2>
                </div>
                <div className="gallery-img">
                  <img src={product.pictures}alt="épilation à la cire, tourcoing "></img>
                </div>
            </div>
            </div>
          </Link>
          
        );
      })}
    </section>
  );
}

export default Gallery;
