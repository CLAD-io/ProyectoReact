import { useContext, useEffect, useState } from "react";
import { articuloContext } from "../contexts/articuloContext";
import { useParams } from "react-router-dom";
import "../styles/stylesCards.css";
import { CarritoContext } from "../contexts/carritoContext";
import {AlertasSweets}  from '../assets/SweetAlert'
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function CardsDetalle() {
  const { id } = useParams();
  const { artSeleccion, cargando, obtenerArticulo, borrarArticulo} = useContext(articuloContext);
  const [contadorArticulo, setContadorArticulo, ] = useState(1)
  const {agregarArticuloCarrito} = useContext(CarritoContext)
  const{admin} = useContext(AuthContext)

  {
    useEffect(() => {
      obtenerArticulo(id)
    }, [cargando]);
  }

//CONTADOR

  function restarCont(){
    if (contadorArticulo<2){
        alert("No se permite esa cantidad")
        setContadorArticulo(1)
    }else{
        setContadorArticulo(contadorArticulo-1)        
    }
  }

  function sumarCont(){
    setContadorArticulo(contadorArticulo+1)
  }

         

  return (
    <><div className="div-cards-detalle">
      <h2>{artSeleccion.name}</h2>
      <img src={artSeleccion.avatar} alt="" className="card-img" />
      <p>{artSeleccion.description}</p>
      <h3>$ {artSeleccion.price}</h3>
      <div className="selectCantidad">
      <button className="btn-menos" onClick={restarCont}>-</button>
      <p>{contadorArticulo}</p>
      <button className="btn-mas" onClick={sumarCont}>+</button>
      </div>
      {admin ? <Link to={'/admin/editarArticulos/' + artSeleccion.id}><button className="btn-admin">Editar</button></Link> : <button className="btn-agregarAlCarrito" onClick={() => agregarArticuloCarrito(artSeleccion, contadorArticulo)}>Agregar al carrrito</button>}
      {admin ? <button className="btn-admin" onClick={()=>borrarArticulo(artSeleccion.id)}>Borrar</button>: <></> }
    </div>
      
    </>
  );
}
