import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { Navigate } from "react-router-dom"
import FormularioProducto from "./FormularioArticulos"
import { Helmet } from "react-helmet"


export default function Admin (){
    const{admin, checkSesion, user} = useContext(AuthContext)    
    

    if(!checkSesion){
      return <p>Cargando Sesion...</p>
    }

    if(!admin){
        return(
            <Navigate to='/login' replace />
        )
    }
    return(
        <div>
            <Helmet>
            <title>Administrador</title>
            <meta name="description" content="¡Explora todo los eventos!." />
        </Helmet>
            <FormularioProducto/>
            <h2 className="usuarioAdminAct">Usuario: {user} </h2>
        </div>
    )
}