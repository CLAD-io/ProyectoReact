import { useContext } from "react"
import { CarritoContext } from "../contexts/carritoContext"
import { Helmet } from "react-helmet"
import { useMediaQuery } from "react-responsive"


export default function CarritoCards({article}){

    const {eliminarArticuloCarrito} = useContext(CarritoContext)
    const ocultar = useMediaQuery({minWidth:1050})

    return(
        <div className="carrito-cards">
            <Helmet>
            <title>Mi carrito | RouteTikcs!</title>
            <meta name="description" content="¡Explora todo los eventos!." />
        </Helmet>
            <img src={article.avatar} alt="" className="image-art"/>
            <h3 className="art-titulo">{article.name}</h3>
            { ocultar &&<p className="desc-art">{article.description}</p>}
            <p className="cantidad">Cantidad: {article.cantidad}</p>
            { ocultar && <div className='art-precio-uni'>
                <p>Precio unitario</p>
             <p>{article.price}</p>
             </div>}
             <h3 className='art-precio'>Total: ${(article.price*article.cantidad).toFixed(2)}</h3>
            <button className='btn-eliminar' onClick={()=> eliminarArticuloCarrito(article.id)}>X</button>
        </div>
    )
}