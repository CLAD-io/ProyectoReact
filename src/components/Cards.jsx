import { Link } from "react-router-dom";
import "../styles/stylesCards.css";
import { Helmet } from "react-helmet";

export default function Cards({ articulos }) {
  

  return (
    <div className="cards-container">
      <Helmet>
            <title>Entradas | RouteTikcs!</title>
            <meta name="description" content="¡Explora todo los eventos!." />
        </Helmet>

      <h2 className="card-titulo">{articulos.name}</h2>
      <img src={articulos.avatar} alt={articulos.name} className="card-img" />
      <p>{articulos.descripcion}</p>
      <Link to={'/card-detalles/' + articulos.id }><button className="btn-verMas"> <span>Ver mas ...</span></button></Link>
    </div>
  );
}
