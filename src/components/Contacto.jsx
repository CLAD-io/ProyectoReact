import "../styles/stylesCards.css";
import { Helmet } from "react-helmet";
import { RiMailSendLine } from "react-icons/ri";




export default function Contacto() {


  return (
    <div className="contacto-formulario">
     <Helmet>
            <title>Contacto | RouteTikcs!</title>
            <meta name="description" content="¡Explora todo los eventos!." />
        </Helmet>
        <div className="cabeza-form-contacto">
<RiMailSendLine className="contacto-icono" />
      <h2>¡Contactenos!</h2>
      </div>
      <div className="div-contacto">
        <form action="" className="formulario-contacto">
          <label htmlFor="nombre">Ingrese su nombre</label>
          <input type="text" id="nombre" />
           <label for="email">Ingrese su correo</label>
          <input type="email" required />
          <label for="nombre">Escriba el Asunto del mensaje</label>
          <input type="text" />
          <label for="nombre" required>Añada mas informacion al asunto</label>
          <textarea id="mensaje" name="mensaje" rows="10" cols="50"  style={{resize: 'none'}} ></textarea>
          <button type="submit" className="btn-enviarConsulta">Enviar consulta</button>
        </form>
        
      </div>
      <p className="p-formulario">
          ⛔ La información enviada a través de este formulario o por correo
          electrónico puede no estar cifrada y podría ser vulnerable a accesos
          no autorizados. No envíe datos sensibles o confidenciales, como
          contraseñas, números de tarjetas de crédito, documentos de identidad o
          información personal delicada. Para comunicaciones seguras, utilice
          canales protegidos y servicios cifrados.
        </p>
    </div>
  );
}
