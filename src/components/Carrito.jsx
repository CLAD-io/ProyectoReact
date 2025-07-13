import { useContext, useEffect } from "react";
import { articuloContext } from "../contexts/articuloContext";
import { CarritoContext } from "../contexts/carritoContext";
import CarritoCards from "./CarritoCards";
import { AlertasSweets2 } from "../assets/SweetAlert";
import { loginContext } from "../contexts/loginContext";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { Helmet } from "react-helmet";

export default function Carrito() {
  const { carritoGuardado } = useContext(CarritoContext);
  const { admin, user, checkSesion} = useContext(AuthContext);

  //USO LA FUNCION VERIFICACIONLOGEO PARA LEER EL LOCALSTORAGE Y VER SI EL USUARIO SIGUE CONECTADO


    if(!checkSesion){
      return (
      <>
      <p>Cargando Sesion...</p>
      
      </>
      )
    }

  if (admin) {
    return (
      <>
      <Helmet>
            <title>Administrador: {user}</title>
            <meta name="description" content="¡Explora todo los eventos!." />
        </Helmet>
        <p>Usuario Administrador: {user}</p>
      </>
    );
  }
  if (!user) {
    {console.log("esto es lo que hay en user:", user)}
    return (
      <>
        <Navigate to={"/login"} replace />
      </>
    )
    
  }

  return (
    <>
      <div>
        <Helmet>
            <title>Mi carrito | RouteTikcs!</title>
            <meta name="description" content="¡Explora todo los eventos!." />
        </Helmet>
        {carritoGuardado.length > 0 ? (
          carritoGuardado.map((items) => <CarritoCards article={items} />)
        ) : (
          <>
            {" "}
            {AlertasSweets2("Carrito Vacio", "info", "Cerrar")}{" "}
            <p>Carrito vacio</p>
          </>
        )}
      </div>
    </>
  );
}
