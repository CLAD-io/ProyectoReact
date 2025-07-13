import { Helmet } from "react-helmet";

export default function Nosotros() {
  
  return (
    <div className="img-nosotros">
      <Helmet>
            <title>Nosotros | RouteTikcs!</title>
            <meta name="description" content="¡Explora todo los eventos!." />
        </Helmet>
      <div className="div-nos" > 
      <h2>Un poco sobre nosotros...</h2>
      <p>
        Contamos con una amplia red de puntos de venta físicos distribuidos
        estratégicamente en las principales ciudades y centros comerciales del
        país. Estos espacios están pensados para brindarte atención
        personalizada y la posibilidad de comprar tus entradas de forma rápida,
        segura y sin necesidad de tarjeta de crédito. Nuestros puntos de venta
        están ubicados en locales comerciales, teatros, boleterías, shoppings y
        tiendas asociadas. En cada uno de ellos podrás: Comprar entradas para
        eventos nacionales e internacionales. Consultar disponibilidad y
        ubicaciones de asientos. Realizar pagos en efectivo o con tarjetas.
        Retirar entradas compradas previamente de manera online. Nuestro personal está capacitado para asistirte y
        responder cualquier duda sobre fechas, precios, promociones o cambios de
        último momento.
      </p>
      </div>
    </div>
  );
}
