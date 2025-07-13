import { Helmet } from "react-helmet";

export default function Main() {
  return (
    <div className="div-main">
      <Helmet>
            <title>Home | RouteTikcs!</title>
            <meta name="description" content="Explora nuestra variedad de productos." />
        </Helmet>
      <div className="imagen-main"></div>
      
      <p className="main-p">
        <h1>¿Que es RouteTikcs?</h1>
        Es una plataforma especializada en la venta de entradas para todo tipo
        de eventos: recitales, obras de teatro, eventos deportivos, festivales,
        conferencias y más. Ofrecemos a nuestros clientes una experiencia
        rápida, segura y fácil para adquirir sus tickets de forma online o en
        nuestros puntos de venta físicos. Contamos con una amplia red de eventos
        en todo el país, actualizaciones constantes y opciones de pago
        flexibles. Nuestro sistema de compra garantiza la disponibilidad en
        tiempo real y la posibilidad de elegir asientos personalizados. Además,
        brindamos atención personalizada para resolver dudas o inconvenientes
        antes y después de la compra. Ya sea que busques un show íntimo o un
        gran evento masivo.
      </p>
    </div>
  );
}
